import { createFileRoute } from "@tanstack/react-router";

import { homePath, locales, pagePath, type Locale, type PageKey } from "@/content/locales";
import { absoluteUrl, indexablePageKeys } from "@/content/seo";
import { resolveSiteOrigin } from "@/lib/site-origin.server";

function escapeXml(value: string): string {
  return value.replace(/[<>&'"]/g, (character) => {
    const entities: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;",
    };
    return entities[character] ?? character;
  });
}

function localizedEntry(
  siteOrigin: string,
  locale: Locale,
  pathFor: (locale: Locale) => string,
): string {
  const alternates = [
    ...locales.map(
      (alternateLocale) =>
        `<xhtml:link rel="alternate" hreflang="${alternateLocale}" href="${escapeXml(
          absoluteUrl(siteOrigin, pathFor(alternateLocale)),
        )}" />`,
    ),
    `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(
      absoluteUrl(siteOrigin, pathFor("ru")),
    )}" />`,
  ].join("");

  return `<url><loc>${escapeXml(absoluteUrl(siteOrigin, pathFor(locale)))}</loc>${alternates}</url>`;
}

function buildSitemap(siteOrigin: string): string {
  const homeEntries = locales.map((locale) =>
    localizedEntry(siteOrigin, locale, (item) => homePath[item]),
  );
  const pageEntries = indexablePageKeys.flatMap((page: PageKey) =>
    locales.map((locale) => localizedEntry(siteOrigin, locale, (item) => pagePath(item, page))),
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...homeEntries,
    ...pageEntries,
    "</urlset>",
  ].join("");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) =>
        new Response(buildSitemap(resolveSiteOrigin(request)), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
          },
        }),
    },
  },
});
