import portraitAsset from "@/assets/fotoMe.webp";

import { homePath, locales, pagePath, socialLinks, type Locale, type PageKey } from "./locales";

/** Canonical production origin, used when the loader data is not available yet. */
export const canonicalSiteOrigin = "https://drvladt.com";

export const publicRobots =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
export const privateFlowRobots = "noindex, follow";

export const indexablePageKeys = [
  "approach",
  "about",
  "hypnotherapy",
  "research",
  "stories",
  "contact",
  "privacy",
  "terms",
] as const satisfies readonly PageKey[];

const ogLocales: Record<Locale, string> = {
  ru: "ru_RU",
  en: "en_US",
  fr: "fr_FR",
};

const jobTitles: Record<Locale, string> = {
  ru: "Врач-кардиолог и гипнотерапевт",
  en: "Cardiologist and hypnotherapist",
  fr: "Cardiologue et hypnothérapeute",
};

const portraitAlt: Record<Locale, string> = {
  ru: "Dr. Vlad Tettegah — врач-кардиолог и гипнотерапевт",
  en: "Dr. Vlad Tettegah — cardiologist and hypnotherapist",
  fr: "Dr. Vlad Tettegah — cardiologue et hypnothérapeute",
};

export function absoluteUrl(siteOrigin: string, path: string): string {
  return new URL(path, `${siteOrigin}/`).toString();
}

export function localeOpenGraphTags(locale: Locale) {
  return [
    { property: "og:locale", content: ogLocales[locale] },
    ...locales
      .filter((item) => item !== locale)
      .map((item) => ({ property: "og:locale:alternate", content: ogLocales[item] })),
  ];
}

export function homeAlternateLinks(siteOrigin: string) {
  return [
    ...locales.map((locale) => ({
      rel: "alternate",
      hrefLang: locale,
      href: absoluteUrl(siteOrigin, homePath[locale]),
    })),
    { rel: "alternate", hrefLang: "x-default", href: absoluteUrl(siteOrigin, homePath.ru) },
  ];
}

export function pageAlternateLinks(siteOrigin: string, page: PageKey) {
  return [
    ...locales.map((locale) => ({
      rel: "alternate",
      hrefLang: locale,
      href: absoluteUrl(siteOrigin, pagePath(locale, page)),
    })),
    {
      rel: "alternate",
      hrefLang: "x-default",
      href: absoluteUrl(siteOrigin, pagePath("ru", page)),
    },
  ];
}

export function socialImage(siteOrigin: string): string {
  return absoluteUrl(siteOrigin, portraitAsset);
}

export function socialImageAlt(locale: Locale): string {
  return portraitAlt[locale];
}

function entityGraph(siteOrigin: string, locale: Locale) {
  const personId = absoluteUrl(siteOrigin, "/#dr-vlad");
  const organizationId = absoluteUrl(siteOrigin, "/#organization");
  const websiteId = absoluteUrl(siteOrigin, "/#website");

  return {
    personId,
    organizationId,
    websiteId,
    entities: [
      {
        "@type": ["Person", "Physician"],
        "@id": personId,
        name: "Dr. Vlad Tettegah",
        alternateName: "Dr Vlad",
        honorificPrefix: "Dr.",
        jobTitle: jobTitles[locale],
        description: jobTitles[locale],
        image: socialImage(siteOrigin),
        url: absoluteUrl(siteOrigin, pagePath(locale, "about")),
        email: "support@drvladt.com",
        medicalSpecialty: ["Cardiovascular", "Psychiatric"],
        knowsAbout: [
          "Cardiology",
          "Clinical hypnotherapy",
          "Integrative medicine",
          "Mind-body medicine",
          "Psychosomatic symptoms",
          "Stress and anxiety related to heart symptoms",
        ],
        knowsLanguage: ["ru", "en", "fr"],
        availableLanguage: ["Russian", "English", "French"],
        hasOccupation: {
          "@type": "Occupation",
          name: jobTitles[locale],
          occupationalCategory: "29-1212.00 Cardiologists",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Belarusian State Medical University",
        },
        memberOf: {
          "@type": "Organization",
          name: "American Society of Clinical Hypnosis",
          alternateName: "ASCH — Associate Member",
        },
        worksFor: { "@id": organizationId },
        sameAs: [
          ...socialLinks.filter(({ type }) => type !== "whatsapp").map(({ url }) => url),
          "https://orcid.org/0009-0009-6738-1913",
        ],
      },
      {
        "@type": ["MedicalBusiness", "MedicalOrganization"],
        "@id": organizationId,
        name: "Dr. Vlad Holistic medicine and consulting",
        alternateName: "Dr. Vlad — Integrative Medicine & Hypnotherapy",
        url: absoluteUrl(siteOrigin, homePath[locale]),
        email: "support@drvladt.com",
        medicalSpecialty: ["Cardiovascular", "Psychiatric"],
        availableLanguage: ["Russian", "English", "French"],
        founder: { "@id": personId },
        employee: { "@id": personId },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: "Dr Vlad",
        url: absoluteUrl(siteOrigin, homePath[locale]),
        inLanguage: locales,
        publisher: { "@id": organizationId },
      },
    ],
  };
}

function jsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function homeStructuredData(siteOrigin: string, locale: Locale) {
  const graph = entityGraph(siteOrigin, locale);
  const pageUrl = absoluteUrl(siteOrigin, homePath[locale]);

  return jsonLd({
    "@context": "https://schema.org",
    "@graph": [
      ...graph.entities,
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Dr Vlad",
        inLanguage: locale,
        isPartOf: { "@id": graph.websiteId },
        about: { "@id": graph.personId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: socialImage(siteOrigin),
        },
      },
    ],
  });
}

export function pageStructuredData(
  siteOrigin: string,
  locale: Locale,
  page: PageKey,
  title: string,
  description: string,
) {
  const graph = entityGraph(siteOrigin, locale);
  const pageUrl = absoluteUrl(siteOrigin, pagePath(locale, page));
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const isProfile = page === "about";

  return jsonLd({
    "@context": "https://schema.org",
    "@graph": [
      ...graph.entities,
      {
        "@type": isProfile ? "ProfilePage" : "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: locale,
        isPartOf: { "@id": graph.websiteId },
        breadcrumb: { "@id": breadcrumbId },
        ...(isProfile
          ? { mainEntity: { "@id": graph.personId } }
          : { about: { "@id": graph.personId } }),
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Dr Vlad",
            item: absoluteUrl(siteOrigin, homePath[locale]),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: pageUrl,
          },
        ],
      },
    ],
  });
}
