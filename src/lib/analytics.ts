// Google tag (GA4 + Google Ads). Outside EU/EEA/UK/CH it loads directly;
// inside those regions it loads only after the visitor accepts the cookie banner.
const MEASUREMENT_ID = "G-M5Y68VX41E";
const CONSENT_KEY = "drvlad-cookie-consent";
export const CONSENT_EVENT = "drvlad-consent-needed";

const CONSENT_REGIONS = new Set([
  "AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU",
  "MT","NL","PL","PT","RO","SK","SI","ES","SE","IS","LI","NO","GB","CH",
]);

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type Consent = "granted" | "denied" | null;

export function getConsent(): Consent {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

let started: Promise<boolean> | null = null;
let regionPromise: Promise<boolean> | null = null;

/** true = consent required (EU/UK/CH or unknown location). */
function regionNeedsConsent(): Promise<boolean> {
  if (regionPromise) return regionPromise;
  regionPromise = (async () => {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 2000);
      const res = await fetch("/cdn-cgi/trace", { signal: ctrl.signal });
      clearTimeout(t);
      if (!res.ok) return true;
      const loc = /loc=([A-Z0-9]{2})/.exec(await res.text())?.[1];
      if (!loc || loc === "XX" || loc === "T1") return true;
      return CONSENT_REGIONS.has(loc);
    } catch {
      return true;
    }
  })();
  return regionPromise;
}

function loadTag() {
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, { send_page_view: false });
}

export function initAnalytics(): Promise<boolean> {
  if (started) return started;
  const attempt = (async () => {
    if (!import.meta.env.PROD) return false;
    const consent = getConsent();
    if (consent === "denied") return false;
    if (consent !== "granted" && (await regionNeedsConsent())) {
      window.dispatchEvent(new Event(CONSENT_EVENT));
      return false;
    }
    loadTag();
    return true;
  })();
  started = attempt;
  void attempt.then((ok) => {
    if (!ok && getConsent() === null) started = null; // allow retry after consent
  });
  return attempt;
}

/** Called from the cookie banner. */
export function setConsent(value: "granted" | "denied") {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* ignore */
  }
  if (value === "granted") {
    started = null;
    void trackPageView(window.location.pathname);
  }
}

/** Page path only — never query strings or hashes. */
const SENSITIVE = /^\/(ru|en|fr)\/(konsultatsiya|consultation|anketa|intake|questionnaire|dokumenty|documents)(\/|$)/;

export async function trackPageView(path: string) {
  const sensitive = SENSITIVE.test(path);
  (window as unknown as Record<string, boolean>)[`ga-disable-${MEASUREMENT_ID}`] = sensitive;
  if (sensitive) return;
  if (!(await initAnalytics())) return;
  if (SENSITIVE.test(window.location.pathname)) return;
  window.gtag?.("event", "page_view", {
    page_path: path,
    page_location: window.location.origin + path,
  });
}
