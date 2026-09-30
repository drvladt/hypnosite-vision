import { contactEmail, type Locale } from "./locales";

type LocalizedLegalValue = Record<Locale, string>;

const localized = (value: LocalizedLegalValue): LocalizedLegalValue => value;

function isLocalizedLegalValue(value: unknown): value is LocalizedLegalValue {
  return (
    typeof value === "object" && value !== null && "ru" in value && "en" in value && "fr" in value
  );
}

/**
 * Confirmed legal variables for the consent flow (LOVABLE_CONSENT_FLOW_PROMPTS_RU.md).
 * `null` means "not confirmed yet" — never invent these values.
 * While anything required is null, production collection of health data stays off.
 */
export const legalConfig = {
  /** Confirmed: "Dr. Vlad Holistic medicine and consulting" (RCCM TG/LFW/RCCM/26-B-00129, Director: Dr. Vlad Tettegah). */
  controllerLegalName: "Dr. Vlad Holistic medicine and consulting LPP" as string | null,
  /** Confirmed: République Togolaise. Clients accepted worldwide. */
  controllerCountry: localized({
    ru: "Республика Того",
    en: "Republic of Togo",
    fr: "République togolaise",
  }),
  // The non-public legal address is intentionally absent from frontend source code.
  /** Privacy-requests and significant data-protection questions: director@drvladt.com. Organizational/scheduling contact: support@drvladt.com. */
  privacyEmail: "director@drvladt.com" as string | null,
  publicContactEmail: contactEmail as string | null,
  /** Confirmed by Dr Vlad: 25.09.2026. */
  effectiveDate: "25.09.2026" as string | null,
  privacyVersion: "1.0",
  consentVersion: "1.0",
  termsVersion: "1.0",
  /** Hosting: Lovable (edge deployment on Cloudflare infrastructure). */
  hostingProvider: "Lovable" as string | null,
  /** Consent log + case code generation: Google Cloud / Firebase (Firestore + Cloud Function). */
  consentLogProvider: "Google Cloud / Firebase (Firestore, Cloud Function)" as string | null,
  /** Confirmed 22.09.2026: Firestore and the Cloud Function run in europe-west1 (Belgium). */
  consentLogRegion: localized({
    ru: "europe-west1 (Бельгия)",
    en: "europe-west1 (Belgium)",
    fr: "europe-west1 (Belgique)",
  }),
  /** Services in use: Google Cloud/Firebase, Google Workspace + Lovable hosting. */
  dataStorageCountries: localized({
    ru: "Бельгия (europe-west1 — журнал согласий, Google Cloud/Firebase), ЕС и США (Google Workspace, Lovable)",
    en: "Belgium (europe-west1 — consent log, Google Cloud/Firebase), the EU and the United States (Google Workspace, Lovable)",
    fr: "Belgique (europe-west1 — journal des consentements, Google Cloud/Firebase), Union européenne et États-Unis (Google Workspace, Lovable)",
  }),
  transferSafeguards: localized({
    ru: "Стандартные договорные положения, применяемые провайдерами (Google, Lovable)",
    en: "Standard Contractual Clauses used by the providers (Google, Lovable)",
    fr: "Clauses contractuelles types appliquées par les prestataires (Google, Lovable)",
  }),
  /** Confirmed: Togolese data protection authority. */
  supervisoryAuthority:
    "Instance de Protection des Données à Caractère Personnel (IPDCP), Agoè 2 Lions, Lomé, République Togolaise — contact@ipdcp.tg, +228 22 25 13 34, +228 70 36 33 33, ipdcp.tg" as
      string | null,
  /** Intake questionnaire — one Google Form per language. */
  googleFormUrl: localized({
    ru: "https://docs.google.com/forms/d/e/1FAIpQLSd2DJROKIpPEHXbz9oz35_AuxNnSRpms-4WP-zZNepPFeFu_w/viewform",
    en: "https://docs.google.com/forms/d/e/1FAIpQLSe9Ak1bWL4WjxhN43oOh-Qn8N-T0fk67txLmH4W0PQcYV8OQg/viewform",
    fr: "https://docs.google.com/forms/d/e/1FAIpQLSdOdk_hMpSBA4pCOCNqPOiWq81mxe3tswJY_2ZczV75zFnnKQ/viewform",
  }),
  /**
   * Confirmed via prefilled link from Dr Vlad: the Patient ID field id.
   * Field semantics: name "Patient ID", visible label «Код обращения», value = case_id format DV000001.
   */
  googleFormPatientIdEntry: "entry.319514281" as string | null,
  /** Confirmed: case_id format used for the Patient ID value. */
  caseIdFormat: "DV000001" as string,
};

/** Retention periods, confirmed by Dr Vlad: one month for every case category. */
export const retention: Record<
  "abandoned" | "declined" | "consultation" | "consentLog",
  Record<Locale, string>
> = {
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
  if (isLocalizedLegalValue(value)) return value[locale] || placeholder[locale];
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
  if (isLocalizedLegalValue(value)) {
    return Object.values(value).some((localizedValue) => localizedValue.length === 0);
  }
  return !(typeof value === "string" && value.length > 0);
});

/** While variables are missing, real health-data collection must stay disabled. */
export const legalReady = missingLegalVars.length === 0;
