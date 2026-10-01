/**
 * In-memory state of a visitor's request flow (consultation → intake → documents → thank-you).
 *
 * The Patient ID is issued by the external server endpoint and kept in memory only:
 * kept in sessionStorage of the current tab only (survives F5, cleared when the tab closes);
 * never in the site URL, never in localStorage, never in analytics,
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

const KEY = "dv-intake-session";
const DONE_KEY = "dv-intake-completed";

function store(): Storage | null {
  try {
    return typeof window === "undefined" ? null : window.sessionStorage;
  } catch {
    return null;
  }
}

function load(): IntakeSession | null {
  try {
    const raw = store()?.getItem(KEY);
    return raw ? (JSON.parse(raw) as IntakeSession) : null;
  } catch {
    return null;
  }
}

let current: IntakeSession | null = null;
let loaded = false;

function setCurrent(value: IntakeSession | null) {
  current = value;
  try {
    if (value) store()?.setItem(KEY, JSON.stringify(value));
    else store()?.removeItem(KEY);
  } catch {
    /* storage unavailable */
  }
}

export function isCaseCode(value: string) {
  return /^DV\d{6,}$/i.test(value.trim());
}

/** Accepts "DV000020", "dv 20", "DV-20", "20" etc. and returns "DV000020", or null. */
export function normalizeCaseCode(value: string): string | null {
  const m = value.trim().toUpperCase().replace(/[\s\-_.]/g, "").match(/^(?:DV)?(\d{1,9})$/);
  if (!m) return null;
  const n = Number(m[1]);
  if (!n) return null;
  return `DV${String(n).padStart(6, "0")}`;
}

export function readIntakeSession(): IntakeSession | null {
  if (!loaded && typeof window !== "undefined") {
    loaded = true;
    current = load();
    try {
      const done = JSON.parse(store()?.getItem(DONE_KEY) || "[]") as string[];
      done.forEach((c) => completed.add(c));
    } catch {
      /* ignore */
    }
  }
  return current;
}

/** Opens the flow after all three confirmations; `caseCode` comes from the server. */
export function startIntakeSession(consentVersion: string, caseCode: string | null): IntakeSession {
  setCurrent({ caseCode, consentVersion, policy: true, health: true, boundaries: true });
  return current!;
}

export function markIntakeDone() {
  if (current) setCurrent({ ...current, intakeDone: true });
}

/** Codes whose request reached the thank-you page in this tab; they can no longer be reopened. */
const completed = new Set<string>();

export function isCaseCompleted(caseCode: string) {
  readIntakeSession();
  return completed.has(caseCode.trim().toUpperCase());
}

/** Closes the request: the code is locked and the active session is cleared. */
export function completeIntakeSession() {
  if (current?.caseCode) completed.add(current.caseCode.toUpperCase());
  try {
    store()?.setItem(DONE_KEY, JSON.stringify([...completed]));
  } catch {
    /* ignore */
  }
  setCurrent(null);
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
  const normalized = normalizeCaseCode(caseCode);
  if (!normalized) return "invalid";
  if (completed.has(normalized)) return "completed";
  setCurrent({
    caseCode: normalized,
    consentVersion,
    policy: true,
    health: true,
    boundaries: true,
    intakeDone,
  });
  return current!;
}

export function clearIntakeSession() {
  setCurrent(null);
}
