import { pagePath, type Locale, type PageKey } from "./locales";
import { siteContent } from "./site";
import { legalContent } from "./legal";
import {
  absoluteUrl,
  localeOpenGraphTags,
  pageAlternateLinks,
  pageStructuredData,
  privateFlowRobots,
  publicRobots,
  socialImage,
  socialImageAlt,
} from "./seo";

type HeadTexts = { metaTitle: string; metaDescription: string; robots?: string };

function textsFor(locale: Locale, page: PageKey): HeadTexts {
  const content = siteContent[locale];
  const legal = legalContent[locale];
  switch (page) {
    // Consent flow and its legal documents live in the legal content layer.
    case "consultation":
      return { ...legal.consultation, robots: privateFlowRobots };
    case "privacy":
      return legal.privacy;
    case "consent":
      return legal.consent;
    case "terms":
      return legal.terms;
    case "intake":
      return { ...content.intake, robots: privateFlowRobots };
    case "documents":
      return { ...content.documents, robots: privateFlowRobots };
    case "thanks":
      return { ...content.thanks, robots: privateFlowRobots };
    default:
      return content.info[page];
  }
}

/** Head metadata for an inner page, with hreflang alternates for the same page. */
export function pageHead(locale: Locale, page: PageKey, siteOrigin: string) {
  const { metaTitle, metaDescription, robots } = textsFor(locale, page);
  const canonicalUrl = absoluteUrl(siteOrigin, pagePath(locale, page));
  const imageUrl = socialImage(siteOrigin);
  const robotsDirective = robots ?? publicRobots;

  return {
    meta: [
      { title: metaTitle },
      { name: "description", content: metaDescription },
      { name: "robots", content: robotsDirective },
      { name: "googlebot", content: robotsDirective },
      { property: "og:title", content: metaTitle },
      { property: "og:description", content: metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dr Vlad" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: imageUrl },
      { property: "og:image:alt", content: socialImageAlt(locale) },
      ...localeOpenGraphTags(locale),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: metaTitle },
      { name: "twitter:description", content: metaDescription },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [...pageAlternateLinks(siteOrigin, page), { rel: "canonical", href: canonicalUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: pageStructuredData(siteOrigin, locale, page, metaTitle, metaDescription),
      },
    ],
  };
}
