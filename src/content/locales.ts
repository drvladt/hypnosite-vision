export const locales = ["ru", "en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  ru: "Русский",
  en: "English",
  fr: "Français",
};

export const localeShortNames: Record<Locale, string> = {
  ru: "RU",
  en: "EN",
  fr: "FR",
};

export const homePath: Record<Locale, "/ru" | "/en" | "/fr"> = {
  ru: "/ru",
  en: "/en",
  fr: "/fr",
};

/**
 * Localised slugs for pages that will be added later (SITE_ARCHITECTURE.md §6).
 * Kept in one place so navigation, footer and the language switcher stay in sync.
 */
export const pageSlugs = {
  approach: { ru: "moi-podhod", en: "my-approach", fr: "mon-approche" },
  about: { ru: "o-mne", en: "about", fr: "a-propos" },
  hypnotherapy: { ru: "gipnoterapiya", en: "hypnotherapy", fr: "hypnotherapie" },
  research: { ru: "issledovaniya", en: "research", fr: "recherche" },
  stories: { ru: "istorii-patsientov", en: "stories-and-results", fr: "histoires-et-resultats" },
  consultation: { ru: "konsultatsiya", en: "consultation", fr: "consultation" },
  contact: { ru: "kontakty", en: "contact", fr: "contact" },
  privacy: { ru: "politika-konfidentsialnosti", en: "privacy", fr: "confidentialite" },
  terms: { ru: "usloviya-ispolzovaniya", en: "terms", fr: "conditions-utilisation" },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageKey = keyof typeof pageSlugs;

export function pagePath(locale: Locale, page: PageKey) {
  return `/${locale}/${pageSlugs[page][locale]}`;
}

export const contactEmail = "dr.vladt375@gmail.com";
