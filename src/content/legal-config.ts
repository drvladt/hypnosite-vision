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
  /** Confirmed: separate privacy-requests email. Official contacts: director@drvladt.com, +22890442523. */
  privacyEmail: "support@drvladt.com" as string | null,
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
  consentLogRegion: "europe-west1 (Бельгия)" as string | null,
  /** Services in use: Google Cloud/Firebase, Google Workspace + Lovable hosting. */
  dataStorageCountries:
    "Бельгия (europe-west1 — журнал согласий, Google Cloud/Firebase), ЕС и США (Google Workspace, Lovable)" as
      | string
      | null,
  transferSafeguards: "Стандартные договорные условия операторов (Google, Lovable)" as string | null,
  /** Confirmed: Togolese data protection authority. */
  supervisoryAuthority:
    "Instance de Protection des Données à Caractère Personnel (IPDCP), Agoè 2 Lions, Lomé, République Togolaise — contact@ipdcp.tg, +228 22 25 13 34, +228 70 36 33 33, ipdcp.tg" as string | null,
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd2DJROKIpPEHXbz9oz35_AuxNnSRpms-4WP-zZNepPFeFu_w/viewform",
  /**
   * Confirmed via prefilled link from Dr Vlad: the Patient ID field id.
   * Field semantics: name "Patient ID", visible label «Код обращения», value = case_id format DV000001.
   */
  googleFormPatientIdEntry: "entry.319514281" as string | null,
  /** Confirmed: case_id format used for the Patient ID value. */
  caseIdFormat: "DV000001" as string,
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
