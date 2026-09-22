import { homePath, locales, pagePath, socialLinks, type Locale, type PageKey } from "./locales";
import { siteContent } from "./site";
import { legalContent } from "./legal";

type HeadTexts = { metaTitle: string; metaDescription: string; robots?: string };

function textsFor(locale: Locale, page: PageKey): HeadTexts {
  const content = siteContent[locale];
  const legal = legalContent[locale];
  switch (page) {
    // Consent flow and its legal documents live in the legal content layer.
    case "consultation":
      return { ...legal.consultation, robots: "noindex, nofollow" };
    case "privacy":
      return legal.privacy;
    case "consent":
      return legal.consent;
    case "terms":
      return legal.terms;
    case "intake":
      return { ...content.intake, robots: "noindex, nofollow" };
    case "documents":
      return { ...content.documents, robots: "noindex, nofollow" };
    case "thanks":
      return { ...content.thanks, robots: "noindex, nofollow" };
    default:
      return content.info[page];
  }
}

/** Head metadata for an inner page, with hreflang alternates for the same page. */
export function pageHead(locale: Locale, page: PageKey) {
  const { metaTitle, metaDescription, robots } = textsFor(locale, page);
  const indexable = !robots;

  // Structured data only on indexable pages — no point on noindex flow pages.
  const scripts = indexable
    ? [
        {
          type: "application/ld+json" as const,
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Dr. Vlad", item: homePath[locale] },
              { "@type": "ListItem", position: 2, name: metaTitle, item: pagePath(locale, page) },
            ],
          }),
        },
        ...(page === "about"
          ? [
              {
                type: "application/ld+json" as const,
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Physician",
                  name: "Dr. Vlad Tettegah",
                  medicalSpecialty: ["Cardiovascular", "Psychiatric"],
                  areaServed: "Worldwide",
                  knowsLanguage: ["ru", "en", "fr"],
                  sameAs: socialLinks.map((link) => link.url),
                }),
              },
            ]
          : []),
      ]
    : [];

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
      ...(robots ? [{ name: "robots", content: robots }] : []),
    ],
    links: [
      ...locales.map((item) => ({ rel: "alternate", hrefLang: item, href: pagePath(item, page) })),
      { rel: "alternate", hrefLang: "x-default", href: pagePath("ru", page) },
      { rel: "canonical", href: pagePath(locale, page) },
    ],
    scripts,
  };
}
