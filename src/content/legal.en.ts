import { lv, legalConfig, retention } from "./legal-config";
import type { LegalContent } from "./legal-types";

const L = (key: Parameters<typeof lv>[0]) => lv(key, "en");
const R = (key: keyof typeof retention) => retention[key].en;

export const legalEn: LegalContent = {
  notReadyWarning:
    "This document is not ready for production publication: the legal details still need to be confirmed (controller, contact address for requests, hosting, processing countries, supervisory authority).",
  tocTitle: "Contents",

  consultation: {
    step: "STEP 1 OF 3 · Before the form",
    eyebrow: "Before you start the form",
    title: "Before you fill in the form",
    metaTitle: "Before you start the form — Dr Vlad",
    metaDescription:
      "How the consultation works, how your data is handled, and what you confirm before filling in the pre-consultation form.",
    intro: [
      "The form helps Dr Vlad review your situation beforehand and understand whether a consultation could be helpful in your case.",
      "You can describe your complaints, health condition, previous investigations and treatment. After submitting, you may optionally attach medical documents.",
    ],
    access: {
      title: "Confidentiality",
      paragraphs: [
        "Your medical information and documents are reviewed personally by Dr Vlad. An assistant may only receive contact and organisational details needed for further communication, and has no access to the medical part of your request.",
        "Google services may be used to run the form and store the material you provide. You can read more about data processing, storage and your rights in the Privacy Policy.",
      ],
      links: [
        { label: "Privacy Policy", page: "privacy" },
      ],
    },
    important: {
      title: "Important",
      paragraphs: [
        "The form is intended for planned requests only. Completing it does not guarantee that a consultation will take place.",
        "An online consultation does not replace an in-person appointment or follow-up with your treating doctor and is not intended for making an official diagnosis, or prescribing, stopping or changing treatment. Hypnotherapy is not performed during the first consultation.",
      ],
    },
    emergency:
      "If you have severe or worsening chest pain, marked breathlessness, loss of consciousness, sudden weakness, speech difficulty or any other rapid deterioration, do not fill in this form — contact your local emergency medical service.",
    summary: {
      title: "Data processing",
      paragraphs: [
        "By continuing, you confirm that you have read the data processing terms and agree to the processing of information necessary to review your request.",
        `You can withdraw your consent by writing to ${L("privacyEmail")}. Withdrawal does not affect the lawfulness of processing carried out before it was received.`,
      ],
    },
    panel: {
      title: "Required confirmations",
      note: "All three confirmations are required and must be ticked by you.",
      items: [
        {
          id: "policy",
          textBefore: "I have read the ",
          linkLabel: "Privacy Policy",
          linkPage: "privacy",
          textAfter:
            " and the information about the purposes, manner, retention periods and conditions of processing of my personal data.",
        },
        {
          id: "health",
          textBefore:
            "I voluntarily consent to the processing of the personal data I provide, including information about my physical and emotional health, for the purpose of pre-assessing my request and arranging a possible consultation.",
          extraLinkLabel: "Read the full consent text",
          extraLinkPage: "consent",
        },
        {
          id: "boundaries",
          textBefore:
            "I confirm that I am 18 or older, understand the limits of the online format, and realize that an online consultation does not replace the necessary in-person medical follow-up and treatment.",
        },
      ],
      button: "Agree and continue to the form",
      buttonNote: "Once confirmed, a case code is created and you move on to the secure form step.",
      blockedNote: "The button becomes active after all three confirmations.",
      secondaryLabel: "Back to the home page",
      errorText:
        "Your request could not be created right now. No medical data has been sent. Please try again later.",
      configErrorText:
        "New requests are temporarily unavailable for technical reasons. No data has been sent. Please try again later.",
      loadingLabel: "Saving your confirmation…",
    },
  },

  privacy: {
    eyebrow: "Legal document",
    title: "Privacy Policy",
    versionLine: "",
    metaTitle: "Privacy Policy — Dr Vlad",
    metaDescription: "How personal data of Dr Vlad website visitors is processed and protected.",
    tocTitle: "Contents",
    lead: [
      "This Policy explains which personal data may be processed when you use the site and submit a request, why it is needed, who has access to it and what rights you have.",
    ],
    sections: [
      {
        id: "controller",
        heading: "1. Who is responsible for processing",
        paragraphs: [
          `Data controller: ${L("controllerLegalName")}, ${L("controllerCountry")}.`,
          `For questions about personal data, exercising your rights or withdrawing consent: ${L("privacyEmail")}.`,
          `For general scheduling questions: ${L("publicContactEmail")}.`,
          "The site and the online format are intended only for people over 18.",
        ],
      },
      {
        id: "data",
        heading: "2. Which data is processed",
        paragraphs: ["Depending on how you use the site, the following may be processed:"],
        bullets: [
          "contact details: name, age or date of birth, country and city, email, phone or messenger, preferred language;",
          "health information you choose to include in the form: complaints, history of your condition, diagnoses, investigation results, treatment, current medication, as well as information about sleep, stress and emotional state;",
          "medical documents you decide to attach;",
          "correspondence and scheduling information;",
          "the minimum technical data needed for the site to work and stay secure: reference code, date and time of actions, form and file submission status, secure session data and security logs;",
          "information confirming consent: date, time and version of the accepted documents.",
        ],
        subsections: [
          {
            paragraphs: [
              "The technical reference code contains no name, contact details, diagnosis, symptoms or medical documents.",
            ],
          },
        ],
      },
      {
        id: "purposes",
        heading: "3. Why the data is used",
        paragraphs: ["Data is used only to:"],
        bullets: [
          "receive and preliminarily review the request;",
          "let Dr Vlad assess whether a further consultation is possible and appropriate;",
          "review voluntarily provided medical documents;",
          "organise further communication;",
          "keep the site working and secure;",
          "meet applicable legal obligations and handle your requests about your data.",
        ],
        subsections: [
          {
            paragraphs: [
              "Health information is not sold, not used for advertising profiling and not shared with advertising platforms. No fully automated medical decisions are made on the basis of the form.",
              "Health information is processed on the basis of your separate explicit consent. Technical data is processed only to the extent needed for the service to work and stay secure, or in other cases provided by applicable law.",
            ],
          },
        ],
      },
      {
        id: "access",
        heading: "4. Who has access",
        paragraphs: [
          "The medical part of the form and the attached documents are reviewed by Dr Vlad.",
          "An assistant may receive contact and scheduling details after the decision to continue is made, but has no access to the medical content of the form or the documents.",
          "Google Forms, Google Workspace, Google Drive, Google Cloud/Firebase, Lovable, an email service and a video platform may be used for the technical operation of the site and for storing information. These services may process data as technical providers.",
        ],
      },
      {
        id: "retention",
        heading: "5. Storage and transfer of data",
        paragraphs: [
          "Form answers and medical documents are stored in a closed workspace with restricted access. Uploaded documents are not placed in public folders.",
          "Because cloud services are used, data may technically be processed or stored outside the Republic of Togo, including in the European Union and the United States. For international transfer, the data protection mechanisms provided by the providers and applicable law are applied.",
          "The consent log is hosted in Google Cloud/Firebase in the europe-west1 region (Belgium) and contains no name, contacts or medical information.",
        ],
      },
      {
        id: "security",
        heading: "6. Security and cookies",
        paragraphs: [
          "To protect information, access restrictions, secure connections, closed storage, validation of uploaded files and other organisational and technical security measures are used.",
          "Necessary cookies may be used for the secure session, site security and remembering the chosen language.",
          "No advertising pixels, heatmaps, session replay or screen recording are used on the form and medical document upload pages. Medical information and form answers are not sent to marketing analytics systems.",
        ],
      },
      {
        id: "rights",
        heading: "7. Your rights",
        paragraphs: ["In accordance with applicable law, you may have the right to request:"],
        bullets: [
          "information about the processing and access to your data;",
          "correction or deletion of your data;",
          "restriction of processing;",
          "data portability or objection to processing, where such a right applies;",
          "withdrawal of previously given consent.",
        ],
        subsections: [
          {
            paragraphs: [
              `You can send a request to ${L("privacyEmail")}. To protect your data, identity confirmation may be required before the request is fulfilled.`,
              "Consent can be withdrawn at any time. Withdrawal does not affect the lawfulness of processing carried out before it was received. If the request cannot be reviewed further without processing the information provided, the review will be stopped after consent is withdrawn.",
            ],
          },
        ],
      },
      {
        id: "changes",
        heading: "8. Changes to this Policy",
        paragraphs: [
          "The Policy may be updated when the operation of the site, the services used or applicable requirements change. The current version of the document is published on this page.",
        ],
      },
    ],
    actions: [{ label: "Back to the confirmations", page: "consultation" }],
    mailAction: { label: "Contact us about data", email: legalConfig.privacyEmail ?? "" },
  },

  consent: {
    eyebrow: "Legal document",
    title: "Consent to the processing of personal data, including health data",
    versionLine: "",
    metaTitle: "Consent to data processing — Dr Vlad",
    metaDescription:
      "Full text of the consent to processing of personal data, including health data, before the pre-consultation form.",
    robots: "noindex, follow",
    tocTitle: "Contents",
    lead: [
      `I confirm that I act voluntarily, understand the content of this consent, and give ${L("controllerLegalName")}, ${L("controllerCountry")}, consent to process my personal data within the limits described below.`,
    ],
    sections: [
      {
        id: "data",
        heading: "1. Which data this consent covers",
        paragraphs: [
          "This consent covers contact details, the information given in the pre-consultation form, information about physical and emotional health, symptoms, history of the condition, investigations, diagnoses, treatment and medication, and any medical documents uploaded voluntarily.",
          "It also covers the technical data needed to create the request, the secure session, the link between the form and the documents, and the record of my choice.",
        ],
      },
      {
        id: "purposes",
        heading: "2. Purposes",
        bullets: [
          "to receive and register the request;",
          "to let Dr Vlad review the information personally;",
          "to establish whether the request falls within Dr Vlad's scope and whether the planned online format suits it;",
          "to arrange a possible consultation;",
          "to review documents provided voluntarily;",
          "to contact me about scheduling;",
          "to keep the process secure, confidential and technically sound;",
          "to handle justified requests relating to my data.",
        ],
      },
      {
        id: "actions",
        heading: "3. Which operations may be carried out",
        paragraphs: [
          "Data may be collected, recorded, organised, stored, corrected, reviewed by an authorised person, used for the stated purposes, transferred securely to engaged processors, restricted, deleted or anonymised.",
          "Health data is not used for advertising profiling, sale to third parties or fully automated medical decisions.",
        ],
      },
      {
        id: "access",
        heading: "4. Who has access",
        paragraphs: [
          "The medical content of the form and the documents are reviewed by Dr Vlad. An assistant may receive contact and scheduling details after Dr Vlad has decided to continue, but has no access to the medical content of the form or the documents.",
          `Technical delivery may involve Google Forms, Google Workspace, Google Drive, Google Cloud, ${L("hostingProvider")}, an email service and the chosen video platform — only to the extent needed for the relevant function.`,
        ],
      },
      {
        id: "storage",
        heading: "5. Storage and cross-border processing",
        paragraphs: [
          `Retention periods are set out in the Privacy Policy. Possible processing countries or regions: ${L("dataStorageCountries")}. Transfer safeguards applied: ${L("transferSafeguards")}.`,
        ],
      },
      {
        id: "voluntary",
        heading: "6. Voluntary nature",
        paragraphs: [
          "Giving this consent is voluntary. If I prefer not to share health data, I can choose not to start the form. A preliminary review of my situation through the site would then not be possible, because it requires reviewing the information provided.",
          "My consent does not guarantee that a consultation will take place or that further work will begin.",
        ],
      },
      {
        id: "withdrawal",
        heading: "7. Withdrawal",
        paragraphs: [
          `I may withdraw this consent at any time by writing to ${L("privacyEmail")}. Withdrawal does not affect the lawfulness of processing carried out beforehand.`,
          "After withdrawal, processing based on consent stops, except where retention of specific data is required by applicable law or needed to defend rights.",
        ],
      },
      {
        id: "confirmation",
        heading: "8. Confirmation",
        paragraphs: [
          "By ticking the box “I voluntarily consent…” and pressing “Agree and continue to the form”, I give consent to the processing of personal data, including health data, as described.",
        ],
      },
    ],
    actions: [
      { label: "Privacy Policy", page: "privacy" },
      { label: "Terms of use", page: "terms" },
      { label: "Back to the confirmations", page: "consultation" },
    ],
  },

  terms: {
    eyebrow: "Legal document",
    title: "Terms of use and limits of the online format",
    versionLine: "",
    metaTitle: "Terms of use — Dr Vlad",
    metaDescription:
      "What this site is for, what the first integrative consultation is, and where the online format ends.",
    tocTitle: "Contents",
    lead: [],
    sections: [
      {
        id: "purpose",
        heading: "1. What this site is for",
        paragraphs: [
          "The Dr Vlad website provides general information about the integrative approach, Dr Vlad's professional background, the possible online consultation format and how to submit a preliminary request.",
          "Public material on the site is not individual medical advice and does not replace in-person care or follow-up with your treating doctor.",
        ],
      },
      {
        id: "consultation",
        heading: "2. What the first consultation is",
        paragraphs: [
          "The first meeting is an individual integrative online review of the medical and emotional context. It is not a classic cardiology appointment and does not include a formal diagnosis or the prescription, withdrawal or adjustment of treatment.",
          "Hypnotherapy is not performed during the first consultation. Whether hypnotherapy or another follow-up format is appropriate is considered individually and is not an automatic next step.",
        ],
      },
      {
        id: "intake",
        heading: "3. The pre-consultation form",
        paragraphs: [
          "The form is needed to understand the situation in advance and to establish whether the request falls within Dr Vlad's scope. Completing it does not guarantee a consultation, a programme, or a particular outcome.",
          "Dr Vlad may conclude that the online format does not suit the situation and, where possible, point towards a more appropriate kind of care. That is not a diagnosis or a guarantee of a specific pathway.",
        ],
      },
      {
        id: "emergency",
        heading: "4. Emergencies",
        paragraphs: [
          "The site, the form, email and messengers are not emergency care channels.",
          "With severe or worsening chest pain, marked breathlessness, loss of consciousness, sudden weakness, speech difficulty or any other rapid deterioration, contact your local emergency medical service immediately.",
        ],
      },
      {
        id: "treatment",
        heading: "5. Prescribed treatment",
        paragraphs: [
          "Neither the site nor the integrative online review is a basis for stopping, replacing or changing the dose of prescribed medication on your own. Such decisions are taken with your treating doctor in an appropriate medical setting.",
        ],
      },
      {
        id: "age",
        heading: "6. Age and capacity",
        paragraphs: [
          "The online form is intended for people aged 18 and over who can understand these terms and give the required confirmations themselves.",
        ],
      },
      {
        id: "documents",
        heading: "7. Medical documents",
        paragraphs: [
          "Documents are shared voluntarily and used to understand the context in advance. Uploading them does not mean a remote diagnosis or acceptance into treatment.",
        ],
      },
      {
        id: "privacy",
        heading: "8. Confidentiality",
        paragraphs: [
          "Processing of personal data is governed by the Privacy Policy and a separate consent. Medical information should not be sent through public social networks or unsecured channels.",
        ],
      },
      {
        id: "contacts",
        heading: "9. Contacts",
        paragraphs: [
          `Scheduling questions: ${L("publicContactEmail")}.`,
          `Data protection questions: ${L("privacyEmail")}.`,
        ],
      },
    ],
    actions: [{ label: "Back to the confirmations", page: "consultation" }],
  },
};
