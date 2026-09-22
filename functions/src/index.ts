import { randomUUID } from "node:crypto";

import { getApps, initializeApp } from "firebase-admin/app";
import { FieldValue, Timestamp, getFirestore } from "firebase-admin/firestore";
import { logger } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";

if (getApps().length === 0) initializeApp();

const db = getFirestore();

const REGION = "europe-west1";
const CONSENT_VERSION = "1.0";
const PRIVACY_VERSION = "1.0";
const TERMS_VERSION = "1.0";
const MAX_BODY_BYTES = 8_192;
const COUNTER_DOCUMENT = db.doc("system/caseCounter");
const CONSENT_COLLECTION = db.collection("consentRecords");

const ALLOWED_ORIGINS = [
  /^https:\/\/([a-z0-9-]+\.)?drvladt\.com$/i,
  /^https:\/\/[a-z0-9-]+\.lovable\.app$/i,
  /^https:\/\/[a-z0-9-]+\.lovableproject\.com$/i,
  /^http:\/\/localhost(?::\d+)?$/i,
  /^http:\/\/127\.0\.0\.1(?::\d+)?$/i,
];

type Locale = "ru" | "en" | "fr";

type CreateCaseRequest = {
  locale: Locale;
  consent_version: string;
  privacy_policy_version: string;
  terms_version: string;
  consents: {
    privacy_policy_reviewed: true;
    health_data_processing: true;
    format_boundaries: true;
  };
};

class RequestValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RequestValidationError";
  }
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseRequestBody(body: unknown): CreateCaseRequest {
  if (!isPlainObject(body)) throw new RequestValidationError("Request body must be a JSON object.");

  const locale = body["locale"];
  const consentVersion = body["consent_version"];
  const privacyVersion = body["privacy_policy_version"];
  const termsVersion = body["terms_version"];
  const consents = body["consents"];

  if (locale !== "ru" && locale !== "en" && locale !== "fr") {
    throw new RequestValidationError("Unsupported locale.");
  }
  if (
    consentVersion !== CONSENT_VERSION ||
    privacyVersion !== PRIVACY_VERSION ||
    termsVersion !== TERMS_VERSION
  ) {
    throw new RequestValidationError(
      "Legal document version mismatch. Reload the page and try again.",
    );
  }
  if (
    !isPlainObject(consents) ||
    consents["privacy_policy_reviewed"] !== true ||
    consents["health_data_processing"] !== true ||
    consents["format_boundaries"] !== true
  ) {
    throw new RequestValidationError("All required confirmations must be true.");
  }

  return {
    locale,
    consent_version: CONSENT_VERSION,
    privacy_policy_version: PRIVACY_VERSION,
    terms_version: TERMS_VERSION,
    consents: {
      privacy_policy_reviewed: true,
      health_data_processing: true,
      format_boundaries: true,
    },
  };
}

function addOneCalendarMonth(timestamp: Timestamp): Timestamp {
  const date = timestamp.toDate();
  const originalDay = date.getUTCDate();

  date.setUTCDate(1);
  date.setUTCMonth(date.getUTCMonth() + 1);
  const lastDayOfTargetMonth = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0),
  ).getUTCDate();
  date.setUTCDate(Math.min(originalDay, lastDayOfTargetMonth));

  return Timestamp.fromDate(date);
}

function caseIdFor(sequence: number): string {
  return `DV${String(sequence).padStart(6, "0")}`;
}

export const createCase = onRequest(
  {
    region: REGION,
    cors: ALLOWED_ORIGINS,
    timeoutSeconds: 15,
    memory: "256MiB",
    minInstances: 0,
    maxInstances: 1,
    concurrency: 20,
  },
  async (request, response) => {
    response.set("Cache-Control", "no-store");
    response.set("Pragma", "no-cache");
    response.set("X-Content-Type-Options", "nosniff");

    if (request.method !== "POST") {
      response.set("Allow", "POST");
      response.status(405).json({ error: "method_not_allowed" });
      return;
    }

    const contentLength = Number(request.get("content-length") || "0");
    if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
      response.status(413).json({ error: "request_too_large" });
      return;
    }

    if (!request.is("application/json")) {
      response.status(415).json({ error: "unsupported_media_type" });
      return;
    }

    try {
      const payload = parseRequestBody(request.body);
      const internalId = randomUUID();
      const consentedAt = Timestamp.now();
      const retentionExpiresAt = addOneCalendarMonth(consentedAt);

      const patientId = await db.runTransaction(async (transaction) => {
        const counterSnapshot = await transaction.get(COUNTER_DOCUMENT);
        const previousValue = counterSnapshot.exists ? counterSnapshot.get("last_sequence") : 0;

        if (!Number.isSafeInteger(previousValue) || previousValue < 0) {
          throw new Error("Invalid case counter state.");
        }

        const nextSequence = previousValue + 1;
        const caseId = caseIdFor(nextSequence);
        const consentDocument = CONSENT_COLLECTION.doc(internalId);

        transaction.set(
          COUNTER_DOCUMENT,
          {
            last_sequence: nextSequence,
            updated_at_utc: FieldValue.serverTimestamp(),
          },
          { merge: true },
        );

        transaction.create(consentDocument, {
          internal_id: internalId,
          case_sequence: nextSequence,
          case_id: caseId,
          locale: payload.locale,
          privacy_version: payload.privacy_policy_version,
          consent_version: payload.consent_version,
          terms_version: payload.terms_version,
          privacy_acknowledged: true,
          health_data_explicit_consent: true,
          service_boundaries_acknowledged: true,
          confirmed_adult: true,
          consented_at_utc: consentedAt,
          retention_expires_at_utc: retentionExpiresAt,
          withdrawn_at_utc: null,
          status: "consent_recorded",
          created_by: "createCase_v1",
        });

        return caseId;
      });

      response.status(201).json({ patient_id: patientId });
    } catch (error: unknown) {
      if (error instanceof RequestValidationError) {
        response.status(400).json({ error: "invalid_request", message: error.message });
        return;
      }

      logger.error("createCase failed", {
        error_type: error instanceof Error ? error.name : "UnknownError",
      });
      response.status(500).json({ error: "case_creation_failed" });
    }
  },
);
