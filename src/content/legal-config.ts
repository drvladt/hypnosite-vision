import { contactEmail, type Locale } from "./locales";

/**
 * Confirmed legal variables for the consent flow (LOVABLE_CONSENT_FLOW_PROMPTS_RU.md).
 * `null` means "not confirmed yet" — never invent these values.
 * While anything required is null, production collection of health data stays off.
 */
export const legalConfig = {
  /** Confirmed: "Dr. Vlad Holistic medicine and consulting" (RCCM TG/LFW/RCCM/26-B-00129, Director: Dr. Vlad Tettegah). */
  controllerLegalName: "Dr. Vlad Holistic medicine and consulting" as string | null,
  /** Confirmed: République Togolaise. Clients accepted worldwide. */
  controllerCountry: "Республика Того" as string | null,
  /** Dr Vlad: the address must not be published — internal use only. */
  controllerAddress: "Bd. de la Kara M.2334, Lome, Togo" as string | null,
  /** Separate privacy-requests email — still to be provided (official: director@drvladt.com, +22890442523). */
  privacyEmail: null as string | null,
  publicContactEmail: contactEmail as string | null,
  effectiveDate: null as string | null,
  privacyVersion: "1.0",
  consentVersion: "1.0",
  termsVersion: "1.0",
  hostingProvider: null as string | null,
  /** Services in use: Google Workspace; exact storage countries still to be confirmed. */
  dataStorageCountries: null as string | null,
  transferSafeguards: null as string | null,
  supervisoryAuthority: null as string | null,
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd2DJROKIpPEHXbz9oz35_AuxNnSRpms-4WP-zZNepPFeFu_w/viewform",
  /**
   * Google Form field id (entry.XXXXXXX) for the Patient ID prefill — still to be confirmed.
   * Confirmed field semantics: name "Patient ID", visible label «Код обращения», value = case_id DV000001.
   */
  googleFormPatientIdEntry: null as string | null,
};

/** Retention periods, confirmed by Dr Vlad: one month for every case category. */
export const retention: Record<"abandoned" | "declined" | "consultation" | "consentLog", Record<Locale, string>> = {
  abandoned: { ru: "1 месяц", en: "1 month", fr: "1 mois" },
  declined: { ru: "1 месяц", en: "1 month", fr: "1 mois" },
  consultation: { ru: "1 месяц", en: "1 month", fr: "1 mois" },
  consentLog: { ru: "1 месяц", en: "1 month", fr: "1 mois" },
};

const placeholder: Record<Locale, string> = {
  ru: "уточняется",
  en: "to be confirmed",
  fr: "à confirmer",
};

/** Reads a legal variable, falling back to a visible "not confirmed yet" marker. */
export function lv(key: keyof typeof legalConfig, locale: Locale): string {
  const value = legalConfig[key];
  return typeof value === "string" && value.length > 0 ? value : placeholder[locale];
}

const REQUIRED_KEYS: (keyof typeof legalConfig)[] = [
  "controllerLegalName",
  "controllerCountry",
  "privacyEmail",
  "publicContactEmail",
  "effectiveDate",
  "hostingProvider",
  "dataStorageCountries",
  "transferSafeguards",
  "supervisoryAuthority",
  "googleFormUrl",
  "googleFormPatientIdEntry",
];

/** Which required variables are still empty. */
export const missingLegalVars = REQUIRED_KEYS.filter((key) => {
  const value = legalConfig[key];
  return !(typeof value === "string" && value.length > 0);
});

/** While variables are missing, real health-data collection must stay disabled. */
export const legalReady = missingLegalVars.length === 0;
