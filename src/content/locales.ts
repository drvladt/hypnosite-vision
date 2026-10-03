export const locales = ["ru", "en", "fr"] as const;

export type Locale = (typeof locales)[number];

/** Locale encoded in the first URL segment; English is the neutral root fallback. */
export function localeFromPathname(pathname: string): Locale {
  const segment = pathname.split("/")[1] ?? "";
  return (locales as readonly string[]).includes(segment) ? (segment as Locale) : "en";
}

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
  intake: { ru: "anketa", en: "intake", fr: "questionnaire" },
  documents: { ru: "dokumenty", en: "documents", fr: "documents" },
  thanks: { ru: "spasibo", en: "thank-you", fr: "merci" },
  contact: { ru: "kontakty", en: "contact", fr: "contact" },
  privacy: { ru: "politika-konfidentsialnosti", en: "privacy", fr: "confidentialite" },
  consent: { ru: "soglasie-na-obrabotku-dannyh", en: "consent", fr: "consentement" },
  terms: { ru: "usloviya-ispolzovaniya", en: "terms", fr: "conditions-utilisation" },
} as const satisfies Record<string, Record<Locale, string>>;

/** Reverse lookup: which page a localized slug belongs to (used by the /$locale/$slug route). */
export function pageKeyFromSlug(locale: Locale, slug: string): PageKey | undefined {
  return (Object.keys(pageSlugs) as PageKey[]).find((key) => pageSlugs[key][locale] === slug);
}

export type PageKey = keyof typeof pageSlugs;

export function pagePath(locale: Locale, page: PageKey) {
  return `/${locale}/${pageSlugs[page][locale]}`;
}

export const contactEmail = "support@drvladt.com";

/** Social and messenger links shown in the footer — shared across all languages. */
export const socialLinks = [
  { type: "whatsapp", url: "https://wa.me/qr/UB2Q7VHXS4TOE1", label: "WhatsApp" },
  { type: "telegram", url: "https://t.me/Dr_vladt49", label: "Telegram" },
  { type: "instagram", url: "https://www.instagram.com/dr_vladt", label: "Instagram" },
  { type: "tiktok", url: "https://tiktok.com/@dr_vladt", label: "TikTok" },
  { type: "youtube", url: "https://www.youtube.com/@DrVladT", label: "YouTube" },
] as const;

export type SocialType = (typeof socialLinks)[number]["type"];

/** Warm invitation shown above the footer social icons. */
export const socialInvite: Record<Locale, string> = {
  ru: "Познай себя — вместе. Подписывайся:",
  en: "Exploring within, together. Subscribe:",
  fr: "Se comprendre, ensemble. Abonne-toi :",
};

const LOCALE_STORAGE_KEY = "drvlad-preferred-locale";

/** Remembers the visitor's manual language choice (wins over auto-detection). */
export function rememberLocale(locale: Locale) {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* private mode — ignore */
  }
}

/**
 * Picks the home locale for a first-time visitor:
 * 1) a language the visitor previously chose manually,
 * 2) otherwise the device/browser language (ru / fr, everything else → en).
 * Geo-IP is not used: language preference matches the visitor better than location.
 */
export function detectPreferredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved && (locales as readonly string[]).includes(saved)) return saved as Locale;
  } catch {
    /* private mode — ignore */
  }
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const lang of languages) {
    const base = lang.toLowerCase().split("-")[0] ?? "";
    if ((locales as readonly string[]).includes(base)) return base as Locale;
  }
  return "en";
}
