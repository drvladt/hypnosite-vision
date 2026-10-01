/**
 * In-memory state of a visitor's request flow (consultation → intake → documents → thank-you).
 *
 * The Patient ID is issued by the external server endpoint and kept in memory only:
 * never in the site URL, never in localStorage/sessionStorage, never in analytics,
 * advertising events or client logs. No health data is kept here at all.
 */
export type IntakeSession = {
  /** Server-issued Patient ID (DV000001…) or null while the endpoint is not connected. */
  caseCode: string | null;
  consentVersion: string;
  policy: boolean;
  health: boolean;
  boundaries: boolean;
  intakeDone?: boolean;
};

let current: IntakeSession | null = null;

export function isCaseCode(value: string) {
  return /^DV\d{6,}$/i.test(value.trim());
}

export function readIntakeSession(): IntakeSession | null {
  return current;
}

/** Opens the flow after all three confirmations; `caseCode` comes from the server. */
export function startIntakeSession(consentVersion: string, caseCode: string | null): IntakeSession {
  current = { caseCode, consentVersion, policy: true, health: true, boundaries: true };
  return current;
}

export function markIntakeDone() {
  if (current) current = { ...current, intakeDone: true };
}

/** Codes whose request reached the thank-you page in this tab; they can no longer be reopened. */
const completed = new Set<string>();

export function isCaseCompleted(caseCode: string) {
  return completed.has(caseCode.trim().toUpperCase());
}

/** Closes the request: the code is locked and the active session is cleared. */
export function completeIntakeSession() {
  if (current?.caseCode) completed.add(current.caseCode.toUpperCase());
  current = null;
}

/**
 * Recovery by the code the server gave the visitor.
 * Returns "invalid" for a malformed code and "completed" for an already submitted request.
 */
export function restoreIntakeSession(
  caseCode: string,
  consentVersion: string,
  intakeDone = true,
): IntakeSession | "invalid" | "completed" {
  if (!isCaseCode(caseCode)) return "invalid";
  const normalized = caseCode.trim().toUpperCase();
  if (completed.has(normalized)) return "completed";
  current = {
    caseCode: normalized,
    consentVersion,
    policy: true,
    health: true,
    boundaries: true,
    intakeDone,
  };
  return current;
}

export function clearIntakeSession() {
  current = null;
}
