import type { Locale } from "./locales";
import type { LegalContent } from "./legal-types";
import { legalRu } from "./legal.ru";
import { legalEn } from "./legal.en";
import { legalFr } from "./legal.fr";

export const legalContent: Record<Locale, LegalContent> = {
  ru: legalRu,
  en: legalEn,
  fr: legalFr,
};

/** Pages that are part of the consent flow or its legal documents. */
export type LegalPageKey = "privacy" | "consent" | "terms";
