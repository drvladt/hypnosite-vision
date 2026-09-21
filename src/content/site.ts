import type { Locale } from "./locales";
import type { SiteContent } from "./site-types";
import { siteRu } from "./site.ru";
import { siteEn } from "./site.en";
import { siteFr } from "./site.fr";

export const siteContent: Record<Locale, SiteContent> = {
  ru: siteRu,
  en: siteEn,
  fr: siteFr,
};

export type { SiteContent };
