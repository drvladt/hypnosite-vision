/**
 * Client for the external case-creation endpoint (Google Cloud / Firebase).
 *
 * Contract, by design:
 * - the browser sends ONLY: locale, document versions, the values of the required
 *   consents and a client timestamp (auxiliary value, server time is authoritative);
 * - the Patient ID (DV000001, DV000002, …) is issued EXCLUSIVELY by the server with an
 *   atomic transaction on a counter document. Never generated here, never MAX + 1;
 * - no patient names, contacts, symptoms, diagnoses, questionnaire answers or medical
 *   documents are ever sent to or stored in this app.
 *
 * The endpoint URL comes from VITE_CASE_API_URL. While it is unset, the flow stays in
 * demo mode: no request is made and no Patient ID is issued.
 */
import { legalConfig } from "@/content/legal-config";
import type { Locale } from "@/content/locales";

export const caseApiEndpoint = (import.meta.env['VITE_CASE_API_URL'] as string | undefined)?.trim() ?? "";
export const caseApiConfigured = caseApiEndpoint.length > 0;

export type ConsentValues = { policy: boolean; health: boolean; boundaries: boolean };

export type CreateCaseResult = { patientId: string | null; demo: boolean };

const PATIENT_ID = /^DV\d{6,}$/;

/** POST the confirmations and receive the server-issued Patient ID. */
export async function createCase(locale: Locale, consents: ConsentValues): Promise<CreateCaseResult> {
  if (!consents.policy || !consents.health || !consents.boundaries) {
    throw new Error("All required consents must be given before creating a case.");
  }

  if (!caseApiConfigured) return { patientId: null, demo: true };

  const response = await fetch(caseApiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      locale,
      consent_version: legalConfig.consentVersion,
      privacy_policy_version: legalConfig.privacyVersion,
      consents: {
        privacy_policy_reviewed: consents.policy,
        health_data_processing: consents.health,
        format_boundaries: consents.boundaries,
      },
      // Auxiliary only — the server records its own authoritative timestamp.
      client_timestamp: new Date().toISOString(),
    }),
  });

  if (!response.ok) throw new Error(`Case endpoint responded ${response.status}`);

  const data = (await response.json()) as { patient_id?: string; patientId?: string };
  const patientId = (data.patient_id ?? data.patientId ?? "").trim().toUpperCase();
  if (!PATIENT_ID.test(patientId)) throw new Error("Case endpoint returned no valid Patient ID.");

  return { patientId, demo: false };
}

/** Official Google Forms pre-filled parameter — the only place the Patient ID may travel. */
export function intakeFormUrl(patientId: string | null): string {
  const base = legalConfig.googleFormUrl;
  const entry = legalConfig.googleFormPatientIdEntry;
  if (!patientId || !entry) return base;
  return `${base}?usp=pp_url&${entry}=${encodeURIComponent(patientId)}`;
}
