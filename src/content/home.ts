import type { Locale } from "./locales";
import type { HomeContent } from "./home-types";
import { homeRu } from "./home.ru";
import { homeEn } from "./home.en";
import { homeFr } from "./home.fr";

export const homeContent: Record<Locale, HomeContent> = {
  ru: homeRu,
  en: homeEn,
  fr: homeFr,
};

export type { HomeContent };
