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
 * Prefer an explicitly configured canonical origin once the final domain is connected.
 * Until then, use the public origin that served the current request.
 */
export function resolveSiteOrigin(request: Request): string {
  const configuredOrigin = normalizeOrigin(process.env["SITE_URL"] ?? process.env["VITE_SITE_URL"]);
  return configuredOrigin ?? new URL(request.url).origin;
}
