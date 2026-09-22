export type PageSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type InfoPage = {
  eyebrow: string;
  title: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  sections: PageSection[];
  /** Content of this page still waits for approved material. */
  pending?: boolean;
  /** Legal draft — text must be reviewed by a lawyer before launch. */
  draft?: boolean;
};

export type InfoPageKey =
  | "approach"
  | "about"
  | "hypnotherapy"
  | "research"
  | "stories"
  | "contact"
  | "privacy"
  | "terms";

export type ConsultationPage = InfoPage & {
  consent: {
    title: string;
    lead: string;
    version: string;
    versionLabel: string;
    items: { id: "policy" | "health" | "medical"; text: string }[];
    policyLinkLabel: string;
    termsLinkLabel: string;
    continueLabel: string;
    blockedNote: string;
    emergency: string;
  };
};

export type IntakePage = InfoPage & {
  caseLabel: string;
  formNote: string;
  formPlaceholder: string;
  continueLabel: string;
  missingConsentTitle: string;
  missingConsentText: string;
  missingConsentAction: string;
};

export type DocumentsPage = InfoPage & {
  caseLabel: string;
  uploadPendingNote: string;
  optionalNote: string;
  pickLabel: string;
  selectedLabel: string;
  continueLabel: string;
  skipLabel: string;
  errorTitle: string;
  errorText: string;
  restoreLabel: string;
  restorePlaceholder: string;
  restoreAction: string;
};

export type ThanksPage = InfoPage & {
  caseLabel: string;
  caseHint: string;
  homeLabel: string;
};

export type SiteContent = {
  common: {
    breadcrumbHome: string;
    navLabel: string;
    ctaPrimary: string;
    ctaSecondary: string;
    pendingNotice: string;
    draftNotice: string;
    emergencyShort: string;
    backHome: string;
    writeLabel: string;
  };
  notFound: {
    title: string;
    text: string;
    action: string;
    metaTitle: string;
  };
  info: Record<InfoPageKey, InfoPage>;
  consultation: ConsultationPage;
  intake: IntakePage;
  documents: DocumentsPage;
  thanks: ThanksPage;
};
