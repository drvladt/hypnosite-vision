import { homeContent } from "./home";
import { homePath, locales, type Locale } from "./locales";

/** Head metadata for a locale home page, including hreflang alternates. */
export function homeHead(locale: Locale) {
  const meta = homeContent[locale].meta;
  return {
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.ogTitle },
      { property: "og:description", content: meta.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: locale },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      ...locales.map((item) => ({ rel: "alternate", hrefLang: item, href: homePath[item] })),
      { rel: "alternate", hrefLang: "x-default", href: homePath.ru },
      { rel: "canonical", href: homePath[locale] },
    ],
  };
}
