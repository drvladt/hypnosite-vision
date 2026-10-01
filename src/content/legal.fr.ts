import { lv, legalConfig, retention } from "./legal-config";
import type { LegalContent } from "./legal-types";

const L = (key: Parameters<typeof lv>[0]) => lv(key, "fr");
const R = (key: keyof typeof retention) => retention[key].fr;

export const legalFr: LegalContent = {
  notReadyWarning:
    "Ce document n'est pas prêt pour une publication en production : les informations juridiques doivent encore être confirmées (responsable du traitement, adresse de contact, hébergement, pays de traitement, autorité de contrôle).",
  tocTitle: "Sommaire",

  consultation: {
    step: "ÉTAPE 1 SUR 3 · Avant le questionnaire",
    eyebrow: "Avant de commencer le questionnaire",
    title: "Avant de remplir le questionnaire",
    metaTitle: "Avant de commencer le questionnaire — Dr Vlad",
    metaDescription:
      "Informations sur la consultation, la confidentialité et le traitement des données personnelles avant de remplir le questionnaire.",
    intro: [
      "Le questionnaire permet au Dr Vlad d'examiner votre situation au préalable et de déterminer si une consultation pourrait être utile dans votre cas.",
      "Vous pouvez décrire vos plaintes, votre état de santé, les examens et traitements antérieurs. Après l'envoi, vous pourrez si nécessaire joindre des documents médicaux.",
    ],
    access: {
      title: "Confidentialité",
      paragraphs: [
        "Vos informations médicales et vos documents sont examinés personnellement par le Dr Vlad. L'assistant du Dr. ne peut recevoir que les coordonnées et informations organisationnelles nécessaires pour la suite, et n'a pas accès à la partie médicale de votre demande.",
        "Les services Google peuvent être utilisés pour le fonctionnement du questionnaire et la conservation des éléments transmis. Pour en savoir plus sur le traitement, la conservation des données et vos droits, consultez la Politique de confidentialité.",
      ],
      links: [
        { label: "Politique de confidentialité", page: "privacy" },
      ],
    },
    important: {
      title: "Important",
      paragraphs: [
        "Le questionnaire est destiné uniquement aux demandes planifiées. Le remplir ne garantit pas la tenue d'une consultation.",
        "Une consultation en ligne ne remplace pas un rendez-vous en présentiel ou le suivi par votre médecin traitant et ne vise pas à établir un diagnostic officiel, ni à prescrire, arrêter ou modifier un traitement. L'hypnothérapie n'est pas pratiquée lors de la première consultation.",
      ],
    },
    emergency:
      "En cas de douleur thoracique forte ou croissante, d'essoufflement marqué, de perte de conscience, de faiblesse soudaine, de troubles de la parole ou de toute dégradation rapide de votre état, ne remplissez pas ce questionnaire — contactez les services d'urgence locaux.",
    summary: {
      title: "Traitement des données",
      paragraphs: [
        "En continuant, vous confirmez avoir pris connaissance des conditions de traitement des données et acceptez le traitement des informations nécessaires à l'examen de votre demande.",
      ],
    },
    panel: {
      title: "Confirmations obligatoires",
      note: "Les trois confirmations sont obligatoires et doivent être cochées par vous.",
      items: [
        {
          id: "policy",
          textBefore: "J'ai pris connaissance de la ",
          linkLabel: "Politique de confidentialité",
          linkPage: "privacy",
          textAfter:
            " et des informations sur les finalités, les modalités, les durées et les conditions de traitement de mes données personnelles.",
        },
        {
          id: "health",
          textBefore:
            "Je consens librement au traitement des données personnelles que je fournis, y compris les informations sur ma santé physique et psycho-émotionnelle, aux fins de l'examen préalable de ma demande et de l'organisation d'une éventuelle consultation.",
          extraLinkLabel: "Lire le texte complet du consentement",
          extraLinkPage: "consent",
        },
        {
          id: "boundaries",
          textBefore:
            "Je confirme avoir 18 ans ou plus, comprendre les limites du format en ligne et avoir conscience qu'une consultation en ligne ne remplace pas le suivi médical présentiel et le traitement nécessaires.",
        },
      ],
      button: "Accepter et continuer vers le questionnaire",
      buttonNote:
        "Après confirmation, un code de dossier est créé et vous accédez à l'étape sécurisée du questionnaire.",
      blockedNote: "Le bouton s'active après les trois confirmations.",
      secondaryLabel: "Revenir à l'accueil",
      errorText:
        "Votre demande n'a pas pu être créée pour le moment. Aucune donnée médicale n'a été envoyée. Merci de réessayer plus tard.",
      configErrorText:
        "La création de demandes est momentanément indisponible pour des raisons techniques. Aucune donnée n'a été envoyée. Merci de réessayer plus tard.",
      loadingLabel: "Enregistrement de votre confirmation…",
    },
  },

  privacy: {
    eyebrow: "Document juridique",
    title: "Politique de confidentialité",
    versionLine: "",
    metaTitle: "Politique de confidentialité — Dr Vlad",
    metaDescription:
      "Traitement et protection des données personnelles des visiteurs du site du Dr Vlad.",
    tocTitle: "Sommaire",
    lead: [
      "La présente Politique explique quelles données personnelles peuvent être traitées lors de l'utilisation du site et de l'envoi d'une demande, pourquoi elles sont nécessaires, qui y a accès et quels droits vous disposez.",
    ],
    sections: [
      {
        id: "controller",
        heading: "1. Qui est responsable du traitement",
        paragraphs: [
          `Responsable du traitement : ${L("controllerLegalName")}, ${L("controllerCountry")}.`,
          `Pour les questions relatives aux données personnelles, l'exercice des droits ou le retrait du consentement : ${L("privacyEmail")}.`,
          `Pour les questions d'organisation : ${L("publicContactEmail")}.`,
          "Le site et le format en ligne sont réservés aux personnes de plus de 18 ans.",
        ],
      },
      {
        id: "data",
        heading: "2. Quelles données sont traitées",
        paragraphs: ["Selon l'utilisation du site, les données suivantes peuvent être traitées :"],
        bullets: [
          "données de contact : nom, âge ou date de naissance, pays et ville, e-mail, téléphone ou messagerie, langue de communication ;",
          "informations de santé indiquées volontairement dans le questionnaire : plaintes, antécédents, diagnostics, résultats d'examens, traitements, médicaments en cours, ainsi que des informations sur le sommeil, le stress et l'état psycho-émotionnel ;",
          "documents médicaux que vous décidez de joindre ;",
          "correspondance et informations d'organisation ;",
          "données techniques minimales nécessaires au fonctionnement et à la sécurité du site : code de dossier, date et heure des actions, statut d'envoi du formulaire et des fichiers, données de session sécurisée et journaux de sécurité ;",
          "informations attestant le consentement : date, heure et version des documents acceptés.",
        ],
        subsections: [
          {
            paragraphs: [
              "Le code de dossier technique ne contient ni nom, ni coordonnées, ni diagnostic, ni symptômes, ni documents médicaux.",
            ],
          },
        ],
      },
      {
        id: "purposes",
        heading: "3. Pourquoi les données sont utilisées",
        paragraphs: ["Les données sont utilisées uniquement pour :"],
        bullets: [
          "recevoir et examiner préalablement la demande ;",
          "permettre au Dr Vlad d'évaluer la possibilité et la pertinence d'une consultation ;",
          "prendre connaissance des documents médicaux fournis volontairement ;",
          "organiser la suite des échanges ;",
          "assurer le fonctionnement et la sécurité du site ;",
          "respecter les obligations légales applicables et traiter vos demandes relatives à vos données.",
        ],
        subsections: [
          {
            paragraphs: [
              "Les informations de santé ne sont pas vendues, ne servent pas au profilage publicitaire et ne sont pas transmises aux plateformes publicitaires. Aucune décision médicale entièrement automatisée n'est prise sur la base du questionnaire.",
              "Le traitement des informations de santé repose sur votre consentement explicite distinct. Les données techniques ne sont traitées que dans la mesure nécessaire au fonctionnement et à la sécurité du service, ou dans les autres cas prévus par la loi applicable.",
            ],
          },
        ],
      },
      {
        id: "access",
        heading: "4. Qui a accès aux données",
        paragraphs: [
          "La partie médicale du questionnaire et les documents joints sont examinés par le Dr Vlad.",
          "Une assistante peut recevoir les données de contact et d'organisation après la décision de poursuivre les échanges, mais n'a pas accès au contenu médical du questionnaire ni aux documents.",
          "Google Forms, Google Workspace, Google Drive, Google Cloud/Firebase, Lovable, un service de messagerie et une plateforme de visioconférence peuvent être utilisés pour le fonctionnement technique du site et le stockage des informations. Ces services peuvent traiter les données en qualité de prestataires techniques.",
        ],
      },
      {
        id: "retention",
        heading: "5. Conservation et transfert des données",
        paragraphs: [
          "Les réponses au questionnaire et les documents médicaux sont conservés dans un espace de travail fermé à accès restreint. Les documents téléversés ne sont pas placés dans des dossiers publics.",
          "En raison de l'utilisation de services cloud, les données peuvent être techniquement traitées ou conservées hors de la République togolaise, notamment dans l'Union européenne et aux États-Unis. Pour les transferts internationaux, les mécanismes de protection prévus par les prestataires et la loi applicable sont appliqués.",
          "Le journal des consentements est hébergé dans Google Cloud/Firebase, région europe-west1 (Belgique), et ne contient ni nom, ni coordonnées, ni informations médicales.",
        ],
      },
      {
        id: "security",
        heading: "6. Sécurité et cookies",
        paragraphs: [
          "Pour protéger les informations, la limitation des accès, des connexions sécurisées, un stockage fermé, la vérification des fichiers téléversés et d'autres mesures organisationnelles et techniques de sécurité sont utilisées.",
          "Des cookies nécessaires peuvent être utilisés pour la session sécurisée, la sécurité du site et la mémorisation de la langue choisie.",
          "Aucun pixel publicitaire, heatmap, session replay ou enregistrement d'écran n'est utilisé sur les pages du questionnaire et du téléversement de documents médicaux. Les informations médicales et les réponses au questionnaire ne sont pas transmises aux systèmes d'analyse marketing.",
        ],
      },
      {
        id: "rights",
        heading: "7. Vos droits",
        paragraphs: ["Conformément à la loi applicable, vous pouvez avoir le droit de demander :"],
        bullets: [
          "des informations sur le traitement et l'accès à vos données ;",
          "la rectification ou la suppression de vos données ;",
          "la limitation du traitement ;",
          "la portabilité des données ou l'opposition au traitement, lorsque ce droit s'applique ;",
          "le retrait du consentement précédemment donné.",
        ],
        subsections: [
          {
            paragraphs: [
              `Vous pouvez adresser votre demande à ${L("privacyEmail")}. Pour protéger vos données, une confirmation d'identité peut être requise avant le traitement de la demande.`,
              "Le consentement peut être retiré à tout moment. Le retrait ne remet pas en cause la licéité des traitements effectués avant sa réception. Si l'examen de la demande devient impossible sans le traitement des informations fournies, il sera interrompu après le retrait du consentement.",
            ],
          },
        ],
      },
      {
        id: "changes",
        heading: "8. Modifications de la Politique",
        paragraphs: [
          "La Politique peut être mise à jour en cas d'évolution du fonctionnement du site, des services utilisés ou des exigences applicables. La version actuelle du document est publiée sur cette page.",
        ],
      },
    ],
    actions: [{ label: "Revenir aux confirmations", page: "consultation" }],
    mailAction: {
      label: "Nous écrire au sujet des données",
      email: legalConfig.privacyEmail ?? "",
    },
  },

  consent: {
    eyebrow: "Document juridique",
    title: "Consentement au traitement des données personnelles, y compris les données de santé",
    versionLine: "",
    metaTitle: "Consentement au traitement des données — Dr Vlad",
    metaDescription:
      "Texte complet du consentement au traitement des données personnelles, y compris les données de santé, avant le questionnaire préalable.",
    robots: "noindex, follow",
    tocTitle: "Sommaire",
    lead: [
      `Je confirme agir librement, comprendre le contenu de ce consentement et donner à ${L("controllerLegalName")}, ${L("controllerCountry")}, mon consentement au traitement de mes données personnelles dans les limites décrites ci-dessous.`,
    ],
    sections: [
      {
        id: "data",
        heading: "1. Données couvertes",
        paragraphs: [
          "Ce consentement couvre les coordonnées, les informations indiquées dans le questionnaire préalable, les données relatives à la santé physique et psycho-émotionnelle, les symptômes, l'historique de la maladie, les examens, les diagnostics, les traitements et médicaments, ainsi que les documents médicaux téléversés volontairement.",
          "Il couvre également les données techniques nécessaires à la création de la demande, à la session sécurisée, au lien entre le questionnaire et les documents et à l'enregistrement de mon choix.",
        ],
      },
      {
        id: "purposes",
        heading: "2. Finalités",
        bullets: [
          "recevoir et enregistrer la demande ;",
          "permettre au Dr Vlad d'étudier personnellement les informations ;",
          "déterminer si la demande relève de sa compétence et si le format en ligne planifié convient ;",
          "organiser une éventuelle consultation ;",
          "examiner les documents transmis volontairement ;",
          "me contacter pour les questions d'organisation ;",
          "assurer la sécurité, la confidentialité et l'intégrité technique du processus ;",
          "traiter les demandes justifiées relatives à mes données.",
        ],
      },
      {
        id: "actions",
        heading: "3. Opérations réalisées",
        paragraphs: [
          "Les données peuvent être collectées, enregistrées, organisées, conservées, rectifiées, consultées par une personne autorisée, utilisées aux finalités indiquées, transmises de manière sécurisée aux sous-traitants, limitées, supprimées ou anonymisées.",
          "Les données de santé ne sont pas utilisées pour du profilage publicitaire, une vente à des tiers ou une décision médicale entièrement automatisée.",
        ],
      },
      {
        id: "access",
        heading: "4. Qui a accès",
        paragraphs: [
          "Le contenu médical du questionnaire et les documents sont examinés par le Dr Vlad. Une assistante peut recevoir les informations de contact et d'organisation après sa décision, sans accès au contenu médical.",
          `La mise en œuvre technique peut impliquer Google Forms, Google Workspace, Google Drive, Google Cloud, ${L("hostingProvider")}, un service de messagerie et la plateforme de visioconférence retenue, dans la seule mesure nécessaire.`,
        ],
      },
      {
        id: "storage",
        heading: "5. Conservation et traitement transfrontalier",
        paragraphs: [
          `Les durées de conservation figurent dans la Politique de confidentialité. Pays ou régions de traitement possibles : ${L("dataStorageCountries")}. Garanties de transfert : ${L("transferSafeguards")}.`,
        ],
      },
      {
        id: "voluntary",
        heading: "6. Caractère volontaire",
        paragraphs: [
          "Ce consentement est libre. Si je ne souhaite pas transmettre de données de santé, je peux ne pas commencer le questionnaire ; l'examen préalable de ma situation via le site ne sera alors pas possible, celui-ci nécessitant l'étude des informations fournies.",
          "Mon consentement ne garantit ni la tenue d'une consultation, ni le début d'un travail ultérieur.",
        ],
      },
      {
        id: "withdrawal",
        heading: "7. Retrait",
        paragraphs: [
          `Je peux retirer ce consentement à tout moment en écrivant à ${L("privacyEmail")}. Le retrait ne remet pas en cause la licéité des traitements antérieurs.`,
          "Après le retrait, les traitements fondés sur le consentement cessent, sauf conservation requise par la loi applicable ou nécessaire à la défense de droits.",
        ],
      },
      {
        id: "confirmation",
        heading: "8. Confirmation",
        paragraphs: [
          "En cochant la case « Je consens librement… » et en cliquant sur « Accepter et continuer vers le questionnaire », j'exprime un consentement au traitement décrit, y compris de mes données de santé.",
        ],
      },
    ],
    actions: [
      { label: "Politique de confidentialité", page: "privacy" },
      { label: "Conditions d'utilisation", page: "terms" },
      { label: "Revenir aux confirmations", page: "consultation" },
    ],
  },

  terms: {
    eyebrow: "Document juridique",
    title: "Conditions d'utilisation et limites du format en ligne",
    versionLine: "",
    metaTitle: "Conditions d'utilisation — Dr Vlad",
    metaDescription:
      "Objet du site, nature de la première consultation intégrative et limites du format en ligne.",
    tocTitle: "Sommaire",
    lead: [],
    sections: [
      {
        id: "purpose",
        heading: "1. Objet du site",
        paragraphs: [
          "Le site du Dr Vlad fournit des informations générales sur l'approche intégrative, le parcours professionnel du Dr Vlad, le format possible d'une consultation en ligne et la procédure de demande préalable.",
          "Les contenus publics ne constituent pas un avis médical individuel et ne remplacent pas une prise en charge présentielle ni le suivi par votre médecin traitant.",
        ],
      },
      {
        id: "consultation",
        heading: "2. Nature de la première consultation",
        paragraphs: [
          "La première rencontre est une analyse intégrative individuelle, en ligne, du contexte médical et psycho-émotionnel. Ce n'est pas une consultation de cardiologie classique et elle n'inclut ni diagnostic officiel, ni prescription, arrêt ou modification de traitement.",
          "L'hypnothérapie n'est pas pratiquée lors de la première consultation. La pertinence d'une hypnothérapie ou d'un autre format ultérieur est appréciée individuellement et n'est pas une suite automatique.",
        ],
      },
      {
        id: "intake",
        heading: "3. Questionnaire préalable",
        paragraphs: [
          "Le questionnaire permet de comprendre la situation à l'avance et de déterminer si la demande relève de la compétence du Dr Vlad. Le remplir ne garantit ni consultation, ni programme, ni résultat particulier.",
          "Le Dr Vlad peut indiquer que le format en ligne ne correspond pas à la situation et, si possible, orienter vers un autre type de prise en charge. Cela ne constitue pas un diagnostic ni la garantie d'un parcours précis.",
        ],
      },
      {
        id: "emergency",
        heading: "4. Situations d'urgence",
        paragraphs: [
          "Le site, le questionnaire, l'e-mail et les messageries ne sont pas des canaux d'urgence.",
          "En cas de douleur thoracique forte ou croissante, d'essoufflement marqué, de perte de conscience, de faiblesse soudaine, de troubles de la parole ou de dégradation rapide de l'état, contactez immédiatement les services d'urgence locaux.",
        ],
      },
      {
        id: "treatment",
        heading: "5. Traitement prescrit",
        paragraphs: [
          "Ni le site ni l'analyse intégrative en ligne ne justifient l'arrêt, le remplacement ou la modification de la posologie d'un traitement prescrit. Ces décisions se prennent avec votre médecin traitant dans un cadre médical approprié.",
        ],
      },
      {
        id: "age",
        heading: "6. Âge et capacité",
        paragraphs: [
          "Le formulaire en ligne est destiné aux personnes de 18 ans et plus, capables de comprendre ces conditions et de donner elles-mêmes les confirmations requises.",
        ],
      },
      {
        id: "documents",
        heading: "7. Documents médicaux",
        paragraphs: [
          "Les documents sont transmis volontairement et servent à comprendre le contexte à l'avance. Leur envoi ne signifie ni diagnostic à distance, ni prise en charge.",
        ],
      },
      {
        id: "privacy",
        heading: "8. Confidentialité",
        paragraphs: [
          "Le traitement des données personnelles est régi par la Politique de confidentialité et un consentement distinct. Les informations médicales ne doivent pas être envoyées via les réseaux sociaux publics ou des canaux non sécurisés.",
        ],
      },
      {
        id: "contacts",
        heading: "9. Contacts",
        paragraphs: [
          `Questions d'organisation : ${L("publicContactEmail")}.`,
          `Questions relatives aux données : ${L("privacyEmail")}.`,
        ],
      },
    ],
    actions: [{ label: "Revenir aux confirmations", page: "consultation" }],
  },
};
