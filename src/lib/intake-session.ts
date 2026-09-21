/**
 * Local state of a visitor's request flow (consultation → intake → documents → thank-you).
 *
 * Demo stage only: nothing leaves the browser. The reference code and the protected
 * session are created here after the consents are given; the real server side is
 * connected in a separate step, after the legal review.
 */
export type IntakeSession = {
  caseCode: string;
  consentVersion: string;
  acceptedAt: string;
  policy: boolean;
  health: boolean;
  medical: boolean;
  intakeDone?: boolean;
};

const KEY = "drvlad-intake-session";

/** Public reference code shown to the visitor, format DV000001. */
function generateCaseCode() {
  const value = Math.floor(Math.random() * 999_999) + 1;
  return `DV${String(value).padStart(6, "0")}`;
}

export function isCaseCode(value: string) {
  return /^DV\d{6}$/i.test(value.trim());
}

export function readIntakeSession(): IntakeSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as IntakeSession;
    return parsed.policy && parsed.health && parsed.medical ? parsed : null;
  } catch {
    return null;
  }
}

function write(session: IntakeSession) {
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(session));
  } catch {
    /* private mode — flow still works within the page */
  }
  return session;
}

export function startIntakeSession(consentVersion: string): IntakeSession {
  return write({
    caseCode: generateCaseCode(),
    consentVersion,
    acceptedAt: new Date().toISOString(),
    policy: true,
    health: true,
    medical: true,
  });
}

export function markIntakeDone() {
  const session = readIntakeSession();
  if (session) write({ ...session, intakeDone: true });
}

/** Recovery for a lost or expired upload session: re-opens the flow by reference code. */
export function restoreIntakeSession(caseCode: string, consentVersion: string): IntakeSession | null {
  if (!isCaseCode(caseCode)) return null;
  return write({
    caseCode: caseCode.trim().toUpperCase(),
    consentVersion,
    acceptedAt: new Date().toISOString(),
    policy: true,
    health: true,
    medical: true,
    intakeDone: true,
  });
}

export function clearIntakeSession() {
  try {
    window.sessionStorage.removeItem(KEY);
  } catch {
    /* ignore */
  }
}
