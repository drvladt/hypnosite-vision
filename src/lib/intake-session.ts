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

/** Recovery for a lost upload session: the visitor re-enters the code the server gave them. */
export function restoreIntakeSession(caseCode: string, consentVersion: string): IntakeSession | null {
  if (!isCaseCode(caseCode)) return null;
  current = {
    caseCode: caseCode.trim().toUpperCase(),
    consentVersion,
    policy: true,
    health: true,
    boundaries: true,
    intakeDone: true,
  };
  return current;
}

export function clearIntakeSession() {
  current = null;
}
