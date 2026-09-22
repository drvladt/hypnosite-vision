import "@tanstack/react-start/server-only";

function normalizeOrigin(value: string | undefined): string | undefined {
  if (!value) return undefined;

  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" && url.protocol !== "http:") return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}

/**
 * Prefer the official production origin so previews and alternate hosting URLs
 * always point search engines to the same canonical site.
 */
export function resolveSiteOrigin(request: Request): string {
  const configuredOrigin = normalizeOrigin(
    process.env["SITE_URL"] ??
      process.env["VITE_SITE_URL"] ??
      (import.meta.env["VITE_SITE_URL"] as string | undefined),
  );
  return configuredOrigin ?? new URL(request.url).origin;
}
