import { homeContent } from "./home";
import { homePath, type Locale } from "./locales";
import {
  absoluteUrl,
  homeAlternateLinks,
  homeStructuredData,
  localeOpenGraphTags,
  publicRobots,
  socialImage,
  socialImageAlt,
} from "./seo";

/** Head metadata for a locale home page, including hreflang alternates. */
export function homeHead(locale: Locale, siteOrigin: string) {
  const meta = homeContent[locale].meta;
  const canonicalUrl = absoluteUrl(siteOrigin, homePath[locale]);
  const imageUrl = socialImage(siteOrigin);

  return {
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { name: "robots", content: publicRobots },
      { name: "googlebot", content: publicRobots },
      { property: "og:title", content: meta.ogTitle },
      { property: "og:description", content: meta.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dr Vlad" },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: imageUrl },
      { property: "og:image:alt", content: socialImageAlt(locale) },
      ...localeOpenGraphTags(locale),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: meta.ogTitle },
      { name: "twitter:description", content: meta.ogDescription },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [...homeAlternateLinks(siteOrigin), { rel: "canonical", href: canonicalUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: homeStructuredData(siteOrigin, locale),
      },
    ],
  };
}
