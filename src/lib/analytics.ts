// Google tag (GA4 + Google Ads). Loaded only outside regions that require
// cookie consent (EU/EEA, UK, CH) — no consent banner on this site.
const MEASUREMENT_ID = "G-M5Y68VX41E";

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

let started: Promise<boolean> | null = null;

async function regionAllowsTracking(): Promise<boolean> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 2000);
    const res = await fetch("/cdn-cgi/trace", { signal: ctrl.signal });
    clearTimeout(t);
    if (!res.ok) return false;
    const loc = /loc=([A-Z0-9]{2})/.exec(await res.text())?.[1];
    if (!loc || loc === "XX" || loc === "T1") return false;
    return !CONSENT_REGIONS.has(loc);
  } catch {
    return false;
  }
}

export function initAnalytics(): Promise<boolean> {
  if (started) return started;
  started = (async () => {
    if (!import.meta.env.PROD || !(await regionAllowsTracking())) return false;
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
    return true;
  })();
  return started;
}

/** Page path only — never query strings or hashes. */
export async function trackPageView(path: string) {
  if (!(await initAnalytics())) return;
  window.gtag?.("event", "page_view", {
    page_path: path,
    page_location: window.location.origin + path,
  });
}
