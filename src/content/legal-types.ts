import type { PageKey } from "./locales";

export type LegalBlock = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalSection = LegalBlock & {
  id: string;
  heading: string;
  subsections?: LegalBlock[];
};

export type LegalAction = { label: string; page: PageKey };

/** A standalone legal document page (privacy, consent, terms). */
export type LegalDoc = {
  eyebrow: string;
  title: string;
  versionLine: string;
  lead: string[];
  metaTitle: string;
  metaDescription: string;
  robots?: string;
  tocTitle: string;
  sections: LegalSection[];
  actions: LegalAction[];
  mailAction?: { label: string; email: string };
};

export type ConsentItem = {
  id: "policy" | "health" | "boundaries";
  textBefore: string;
  linkLabel?: string;
  linkPage?: PageKey;
  textAfter?: string;
  extraLinkLabel?: string;
  extraLinkPage?: PageKey;
};

/** The obligatory step before the intake form. */
export type ConsentFlowPage = {
  step: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  next: { title: string; items: string[] };
  access: { title: string; text: string };
  important: { title: string; bullets: string[] };
  emergency: string;
  summary: { title: string; paragraphs: string[]; links: LegalAction[] };
  panel: {
    title: string;
    note: string;
    items: ConsentItem[];
    button: string;
    buttonNote: string;
    blockedNote: string;
    secondaryLabel: string;
    errorText: string;
    loadingLabel: string;
  };
};

export type LegalContent = {
  notReadyWarning: string;
  tocTitle: string;
  privacy: LegalDoc;
  consent: LegalDoc;
  terms: LegalDoc;
  consultation: ConsentFlowPage;
};
