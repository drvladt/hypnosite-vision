import { locales, pagePath, type Locale, type PageKey } from "./locales";
import { siteContent } from "./site";

type HeadTexts = { metaTitle: string; metaDescription: string };

function textsFor(locale: Locale, page: PageKey): HeadTexts {
  const content = siteContent[locale];
  switch (page) {
    case "consultation":
      return content.consultation;
    case "intake":
      return content.intake;
    case "documents":
      return content.documents;
    case "thanks":
      return content.thanks;
    default:
      return content.info[page];
  }
}

/** Head metadata for an inner page, with hreflang alternates for the same page. */
export function pageHead(locale: Locale, page: PageKey) {
  const { metaTitle, metaDescription } = textsFor(locale, page);
  const flowPage = page === "intake" || page === "documents" || page === "thanks";
  return {
    meta: [
      { title: metaTitle },
      { name: "description", content: metaDescription },
      { property: "og:title", content: metaTitle },
      { property: "og:description", content: metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: locale },
      { name: "twitter:card", content: "summary_large_image" },
      // The request flow must stay out of search results and ad tracking.
      ...(flowPage ? [{ name: "robots", content: "noindex, nofollow" }] : []),
    ],
    links: [
      ...locales.map((item) => ({ rel: "alternate", hrefLang: item, href: pagePath(item, page) })),
      { rel: "alternate", hrefLang: "x-default", href: pagePath("ru", page) },
      { rel: "canonical", href: pagePath(locale, page) },
    ],
  };
}
