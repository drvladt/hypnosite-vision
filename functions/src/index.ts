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

// ---------------------------------------------------------------------------
// uploadDocument: receives ONE patient file and stores it directly in the
// doctor's Google Drive inside "<ROOT_FOLDER>/<Patient ID>". Nothing is kept here.
// Auth: if DRIVE_OAUTH_CLIENT_ID / DRIVE_OAUTH_CLIENT_SECRET / DRIVE_OAUTH_REFRESH_TOKEN
// are set (functions/.env), files are written as the doctor's own Google account
// (uses the doctor's Drive storage). Otherwise the function's service account is
// used, which only works with a Shared Drive (service accounts have no own quota).
// ---------------------------------------------------------------------------
const DRIVE_ROOT_FOLDER = "Dr Vlad — Patient documents";
const MAX_UPLOAD_BYTES = 30 * 1024 * 1024;
const PATIENT_ID_RE = /^DV\d{6,}$/;
const ALLOWED_FILE_RE = /\.(pdf|jpe?g|png|heic|heif|webp|docx?|txt|rtf)$/i;
const FOLDER_MIME = "application/vnd.google-apps.folder";
const DRIVE_SCOPE = "https://www.googleapis.com/auth/drive";

async function driveToken(): Promise<string> {
  const clientId = process.env["DRIVE_OAUTH_CLIENT_ID"];
  const clientSecret = process.env["DRIVE_OAUTH_CLIENT_SECRET"];
  const refreshToken = process.env["DRIVE_OAUTH_REFRESH_TOKEN"];
  if (clientId && clientSecret && refreshToken) {
    const res = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }),
    });
    if (!res.ok) throw new Error(`oauth_token_${res.status}`);
    return ((await res.json()) as { access_token: string }).access_token;
  }
  const res = await fetch(
    `http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token?scopes=${encodeURIComponent(DRIVE_SCOPE)}`,
    { headers: { "Metadata-Flavor": "Google" } },
  );
  if (!res.ok) throw new Error(`metadata_token_${res.status}`);
  return ((await res.json()) as { access_token: string }).access_token;
}

async function driveCall(token: string, url: string, init: RequestInit = {}) {
  const res = await fetch(url, {
    ...init,
    headers: { Authorization: `Bearer ${token}`, ...(init.headers ?? {}) },
  });
  if (!res.ok) {
    logger.error("Drive request failed", { status: res.status, body: (await res.text()).slice(0, 500) });
    throw new Error(`drive_${res.status}`);
  }
  return res.json() as Promise<{ id: string; files?: { id: string }[] }>;
}

async function findOrCreateFolder(token: string, name: string, parent?: string) {
  const q = [
    `name='${name.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`,
    `mimeType='${FOLDER_MIME}'`,
    "trashed=false",
    ...(parent ? [`'${parent}' in parents`] : []),
  ].join(" and ");
  const found = await driveCall(
    token,
    `https://www.googleapis.com/drive/v3/files?fields=files(id)&supportsAllDrives=true&includeItemsFromAllDrives=true&corpora=allDrives&q=${encodeURIComponent(q)}`,
  );
  if (found.files?.[0]) return found.files[0].id;
  const created = await driveCall(
    token,
    "https://www.googleapis.com/drive/v3/files?fields=id&supportsAllDrives=true",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, mimeType: FOLDER_MIME, ...(parent ? { parents: [parent] } : {}) }),
    },
  );
  return created.id;
}

export const uploadDocument = onRequest(
  {
    region: REGION,
    cors: ALLOWED_ORIGINS,
    timeoutSeconds: 120,
    memory: "512MiB",
    minInstances: 0,
    maxInstances: 3,
    concurrency: 10,
  },
  async (request, response) => {
    response.set("Cache-Control", "no-store");
    response.set("X-Content-Type-Options", "nosniff");

    if (request.method !== "PUT" && request.method !== "POST") {
      response.set("Allow", "PUT, POST");
      response.status(405).json({ error: "method_not_allowed" });
      return;
    }

    const code = String(request.get("x-case-code") ?? "").trim().toUpperCase();
    let name = "";
    try {
      name = decodeURIComponent(String(request.get("x-file-name") ?? "")).slice(0, 200);
    } catch {
      name = "";
    }
    const type = String(request.get("content-type") ?? "application/octet-stream").slice(0, 120);
    const data: Buffer | undefined = (request as unknown as { rawBody?: Buffer }).rawBody;

    if (!PATIENT_ID_RE.test(code)) {
      response.status(400).json({ error: "bad_code" });
      return;
    }
    if (!name || !ALLOWED_FILE_RE.test(name)) {
      response.status(415).json({ error: "bad_type" });
      return;
    }
    if (!data || data.byteLength === 0) {
      response.status(400).json({ error: "empty" });
      return;
    }
    if (data.byteLength > MAX_UPLOAD_BYTES) {
      response.status(413).json({ error: "too_large" });
      return;
    }

    try {
      const caseDoc = await CONSENT_COLLECTION.where("case_id", "==", code).limit(1).get();
      if (caseDoc.empty) {
        response.status(404).json({ error: "unknown_code" });
        return;
      }

      const token = await driveToken();
      const root = await findOrCreateFolder(token, DRIVE_ROOT_FOLDER);
      const folder = await findOrCreateFolder(token, code, root);

      const boundary = `dv${randomUUID()}`;
      const head = Buffer.from(
        `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n` +
          JSON.stringify({ name, parents: [folder] }) +
          `\r\n--${boundary}\r\nContent-Type: ${type}\r\n\r\n`,
      );
      const tail = Buffer.from(`\r\n--${boundary}--`);

      await driveCall(
        token,
        "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id&supportsAllDrives=true",
        {
          method: "POST",
          headers: { "Content-Type": `multipart/related; boundary=${boundary}` },
          body: Buffer.concat([head, data, tail]),
        },
      );
      response.status(201).json({ ok: true });
    } catch (error: unknown) {
      logger.error("uploadDocument failed", {
        error_type: error instanceof Error ? error.message : "UnknownError",
      });
      response.status(502).json({ error: "upload_failed" });
    }
  },
);
