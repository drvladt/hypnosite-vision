import { lv, legalConfig, retention } from "./legal-config";
import type { LegalContent } from "./legal-types";

const L = (key: Parameters<typeof lv>[0]) => lv(key, "en");
const R = (key: keyof typeof retention) => retention[key].en;

export const legalEn: LegalContent = {
  notReadyWarning:
    "This document is not ready for production publication: the legal details still need to be confirmed (controller, contact address for requests, hosting, processing countries, supervisory authority).",
  tocTitle: "Contents",

  consultation: {
    step: "Step 1 of 3 · Before the form",
    eyebrow: "Before you start the form",
    title: "Before you fill in the form",
    metaTitle: "Before you start the form — Dr Vlad",
    metaDescription:
      "How the consultation works, how your data is handled, and what you confirm before filling in the pre-consultation form.",
    intro: [
      "The form helps Dr Vlad review your situation beforehand and understand whether a consultation could be helpful in your case.",
      "You can include contact details, describe your complaints, health condition, previous investigations and treatment. After submitting, you may optionally attach medical documents.",
    ],
    access: {
      title: "Confidentiality",
      paragraphs: [
        "Your medical information and documents are reviewed personally by Dr Vlad. An assistant may only receive contact and organisational details needed for further communication, and has no access to the medical part of your request.",
        `Google and ${L("hostingProvider")} services may be used to run the form and store the material you provide. You can read more about data processing, storage and your rights in the Privacy Policy.`,
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
        `Data controller: ${L("controllerLegalName")}, ${L("controllerCountry")}.`,
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
            "I confirm that I am 18 or older, that I understand the limits of the online format, and that completing this form is not emergency care, does not guarantee a consultation, and does not replace the in-person medical follow-up and treatment I need.",
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
    versionLine: `Version ${legalConfig.privacyVersion} · Effective from ${L("effectiveDate")}`,
    metaTitle: "Privacy Policy — Dr Vlad",
    metaDescription: "How personal data of Dr Vlad website visitors is processed and protected.",
    tocTitle: "Contents",
    lead: [
      "This Policy explains which personal data may be processed when you use the Dr Vlad website, complete the pre-consultation form, share medical documents, or communicate about scheduling, for which purposes this happens, and which rights you have.",
      "Because the form may contain information about your physical and emotional health, such data is handled with strengthened confidentiality and security measures.",
    ],
    sections: [
      {
        id: "controller",
        heading: "1. Who is responsible for processing",
        paragraphs: [
          `Data controller: ${L("controllerLegalName")}.`,
          `Country: ${L("controllerCountry")}.`,
          `For data questions, rights requests or consent withdrawal: ${L("privacyEmail")}.`,
          `For general scheduling questions: ${L("publicContactEmail")}.`,
        ],
      },
      {
        id: "scope",
        heading: "2. Who this Policy applies to",
        paragraphs: [
          "The Policy applies to adult visitors who browse public pages, start a request, complete the form, attach documents, or get in touch about scheduling.",
          `The site and the online format are not intended for people under 18. If a minor's data has been submitted without a proper basis, please report it to ${L("privacyEmail")}.`,
        ],
      },
      {
        id: "data",
        heading: "3. Which data may be processed",
        subsections: [
          {
            heading: "3.1. Contact and identification data",
            bullets: [
              "first and last name;",
              "age or date of birth where needed to assess the request;",
              "country and city;",
              "email, phone number or chosen messenger;",
              "preferred language.",
            ],
          },
          {
            heading: "3.2. Health data",
            bullets: [
              "description of symptoms and how you feel;",
              "history of your condition;",
              "diagnoses already established;",
              "investigation and laboratory results;",
              "prescribed treatment and current medication;",
              "information about anxiety, sleep, stress, emotional and behavioural factors;",
              "goals and expectations for possible work together;",
              "any other information you choose to include in the form.",
            ],
          },
          {
            heading: "3.3. Medical documents",
            paragraphs: [
              "You may optionally upload reports, investigation and laboratory results and a medication list. Sharing documents is not a condition for submitting the form.",
            ],
          },
          {
            heading: "3.4. Technical data",
            bullets: [
              "technical case code;",
              "interface language;",
              "date and time of the request steps;",
              "form submission and upload status;",
              "file type, size and technical status;",
              "secure session data and security logs;",
              "cookie choices on public pages.",
            ],
            paragraphs: [
              "The technical case code contains no name, email, diagnosis or symptoms and is not an access password.",
            ],
          },
          {
            heading: "3.5. Proof of consent",
            bullets: [
              "Policy version;",
              "consent text version;",
              "terms of use version;",
              "document language;",
              "date and time of confirmation;",
              "state of the required checkboxes;",
              "date of withdrawal, if received.",
            ],
          },
          {
            heading: "3.6. Correspondence",
            paragraphs: [
              "Messages about scheduling, rights requests and the history of replies to such requests may be processed.",
            ],
          },
        ],
      },
      {
        id: "purposes",
        heading: "4. Purposes of processing",
        bullets: [
          "receiving and registering the request;",
          "personal review of the situation by Dr Vlad;",
          "establishing whether the request falls within Dr Vlad's scope and whether the online format suits it;",
          "arranging a possible consultation;",
          "preliminary review of documents provided voluntarily;",
          "contacting you about scheduling;",
          "keeping the form and the upload step secure;",
          "preventing misuse and technical faults;",
          "meeting obligations under applicable law;",
          "handling your requests for access, correction, deletion, restriction or withdrawal of consent.",
        ],
        paragraphs: [
          "Form data and medical documents are never used for advertising profiling, building ad audiences, sale to third parties, or automated medical decisions.",
        ],
      },
      {
        id: "basis",
        heading: "5. Legal bases",
        paragraphs: [
          "Where processing is based on consent, you give free, specific, informed and unambiguous consent. Health data is processed on the basis of separate explicit consent.",
          "Technical data strictly necessary for security, the secure session and delivering the service you requested is processed only to the extent needed.",
          "If applicable law requires another mandatory basis for storing or processing specific data, that information must be added to this Policy before such processing starts.",
        ],
      },
      {
        id: "access",
        heading: "6. Who may have access",
        paragraphs: [
          "The medical content of the form and the documents are accessed by Dr Vlad, only to the extent needed to review the request.",
          "An assistant may receive contact and scheduling details only after Dr Vlad has decided to continue, and has no access to the medical content of the form or the documents.",
          `Infrastructure providers acting as data processors may be involved, including — once the configuration is finally confirmed — Google Forms, Google Workspace, Google Drive, Google Cloud, ${L("hostingProvider")}, an email service and the chosen video platform.`,
          "Data may also be disclosed to a public authority where such disclosure is mandatory under applicable law. It is not shared with advertising platforms as health data or as an outcome of the request.",
        ],
      },
      {
        id: "google",
        heading: "7. Google Forms, Workspace and medical documents",
        paragraphs: [
          "The pre-consultation form may be hosted in Google Forms. Responses and related documents are stored in a closed Google Workspace and Google Drive space with restricted access.",
          "Documents are uploaded through a separate secure interface on the site, pass technical validation, and are not placed in a publicly shared Drive folder.",
          "You never need to share a Google account password or open access to your personal Google Drive.",
        ],
      },
      {
        id: "transfers",
        heading: "8. Cross-border processing",
        paragraphs: [
          `Data may technically be processed or stored in the following countries or regions: ${L("dataStorageCountries")}.`,
          `The consent log and the issuing of the reference code run in ${L("consentLogProvider")}, located in the ${L("consentLogRegion")} region. The log records only the fact of the three confirmations, the document versions, the server UTC time and the reference code — no name, contacts, symptoms, diagnoses, form answers or medical documents. Each record is scheduled for automatic deletion after one calendar month; the provider's TTL mechanism performs the technical deletion after that time.`,
          `Transfer safeguards applied: ${L("transferSafeguards")}.`,
        ],
      },
      {
        id: "retention",
        heading: "9. Retention periods",
        bullets: [
          `unfinished requests: ${R("abandoned")};`,
          `requests where no consultation took place: ${R("declined")};`,
          `data and documents of a consultation that took place: ${R("consultation")};`,
          `consent and withdrawal records: ${R("consentLog")};`,
          "technical security logs: only the minimum confirmed period.",
        ],
        paragraphs: [
          "After the period expires, data is deleted or irreversibly anonymised unless further retention is required by applicable law, to defend rights, or to resolve a dispute.",
        ],
      },
      {
        id: "security",
        heading: "10. Security",
        paragraphs: [
          "Organisational and technical measures appropriate to the nature of the data are used: role-based access limits, secure connections, closed storage, logging of administrative actions, validation of uploaded files and data minimisation.",
          "No method of transmission or storage can guarantee absolute security. If an incident occurs, the measures required by law and the internal response procedure apply.",
        ],
      },
      {
        id: "cookies",
        heading: "11. Cookies, analytics and advertising",
        paragraphs: [
          "Necessary cookies may be used for the secure session, abuse prevention and remembering the chosen language.",
          "Analytics and advertising technologies on public pages are off by default until you choose. On the form, documents, confirmation, recovery and related error pages, advertising pixels, session replay, heatmaps and screen recording are never used, whatever the cookie choice.",
          "Medical information, the case code, screening outcomes and form answers are never sent to marketing analytics.",
        ],
      },
      {
        id: "automated",
        heading: "12. Automated decisions",
        paragraphs: [
          "No fully automated decisions with legal or similarly significant effects are made on the basis of the form. Whether further contact is possible is decided by Dr Vlad after reviewing the available information personally.",
        ],
      },
      {
        id: "rights",
        heading: "13. Your rights",
        paragraphs: ["Depending on applicable law, you may have the right to:"],
        bullets: [
          "be informed about the processing;",
          "request access to your data;",
          "correct inaccurate data;",
          "request deletion;",
          "restrict processing;",
          "receive your data in a portable format;",
          "object to processing in cases provided by law;",
          "withdraw consent;",
          "lodge a complaint with the competent supervisory authority.",
        ],
        subsections: [
          {
            paragraphs: [
              `To exercise your rights, write to ${L("privacyEmail")}. A reasonable identity check may be needed first so that data is not disclosed to the wrong person.`,
            ],
          },
        ],
      },
      {
        id: "withdrawal",
        heading: "14. Withdrawing consent",
        paragraphs: [
          `You may withdraw consent at any time by writing to ${L("privacyEmail")}. Withdrawal does not affect the lawfulness of processing carried out beforehand.`,
          "After withdrawal, processing based on consent stops and the data is deleted or anonymised, except where further retention is required by law or needed to defend rights.",
          "Withdrawing consent before the review is finished may make an online review impossible, because the request cannot be assessed without processing the information provided.",
        ],
      },
      {
        id: "complaints",
        heading: "15. Complaints",
        paragraphs: [
          `Please first contact the controller at ${L("privacyEmail")}.`,
          `If the matter is not resolved, you may contact the competent supervisory authority: ${L("supervisoryAuthority")}.`,
        ],
      },
      {
        id: "changes",
        heading: "16. Changes to this Policy",
        paragraphs: [
          "The Policy may be updated when processes, providers or applicable requirements change. The current version and effective date are always published on this page. If a change materially affects processing that requires consent, a new confirmation is requested before such processing continues.",
        ],
      },
    ],
    actions: [{ label: "Back to the confirmations", page: "consultation" }],
    mailAction: { label: "Contact us about data", email: legalConfig.privacyEmail ?? "" },
  },

  consent: {
    eyebrow: "Legal document",
    title: "Consent to the processing of personal data, including health data",
    versionLine: `Version ${legalConfig.consentVersion} · Effective from ${L("effectiveDate")}`,
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
          "This consent covers contact details, the information given in the pre-consultation form, information about physical and emotional health, symptoms, history, investigations, diagnoses, treatment and medication, and any medical documents uploaded voluntarily.",
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
    versionLine: `Version ${legalConfig.termsVersion} · Effective from ${L("effectiveDate")}`,
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
        id: "no-guarantees",
        heading: "8. No guarantees",
        paragraphs: [
          "Individual response, the course of a condition and the outcome of any follow-up work cannot be guaranteed. The site makes no promise of complete symptom relief, of identifying one single cause, or that hypnotherapy will be suitable.",
        ],
      },
      {
        id: "privacy",
        heading: "9. Confidentiality",
        paragraphs: [
          "Processing of personal data is governed by the Privacy Policy and a separate consent. Medical information should not be sent through public social networks or unsecured channels.",
        ],
      },
      {
        id: "contacts",
        heading: "10. Contacts",
        paragraphs: [
          `Scheduling questions: ${L("publicContactEmail")}.`,
          `Data protection questions: ${L("privacyEmail")}.`,
        ],
      },
    ],
    actions: [{ label: "Back to the confirmations", page: "consultation" }],
  },
};
