import { lv, legalConfig, retention } from "./legal-config";
import type { LegalContent } from "./legal-types";

const L = (key: Parameters<typeof lv>[0]) => lv(key, "fr");
const R = (key: keyof typeof retention) => retention[key].fr;

export const legalFr: LegalContent = {
  notReadyWarning:
    "Ce document n'est pas prêt pour une publication en production : les informations juridiques doivent encore être confirmées (responsable du traitement, adresse de contact, hébergement, pays de traitement, autorité de contrôle).",
  tocTitle: "Sommaire",

  consultation: {
    step: "Étape 1 sur 3 · Avant le questionnaire",
    eyebrow: "Avant de commencer le questionnaire",
    title: "Avant de remplir le questionnaire",
    metaTitle: "Avant de commencer le questionnaire — Dr Vlad",
    metaDescription:
      "Informations sur la consultation, la confidentialité et le traitement des données personnelles avant de remplir le questionnaire.",
    intro: [
      "Le questionnaire permet au Dr Vlad d'examiner votre situation au préalable et de déterminer si une consultation pourrait être utile dans votre cas.",
      "Vous pouvez indiquer vos coordonnées, décrire vos plaintes, votre état de santé, les examens et traitements antérieurs. Après l'envoi, vous pourrez si nécessaire joindre des documents médicaux.",
    ],
    access: {
      title: "Confidentialité",
      paragraphs: [
        "Vos informations médicales et vos documents sont examinés personnellement par le Dr Vlad. Une assistante ne peut recevoir que les coordonnées et informations organisationnelles nécessaires pour la suite, et n'a pas accès à la partie médicale de votre demande.",
        `Les services Google et ${L("hostingProvider")} peuvent être utilisés pour le fonctionnement du questionnaire et la conservation des éléments transmis. Pour en savoir plus sur le traitement, la conservation des données et vos droits, consultez la Politique de confidentialité.`,
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
        `Vous pouvez retirer votre consentement en écrivant à ${L("privacyEmail")}. Le retrait ne remet pas en cause la licéité des traitements effectués avant sa réception.`,
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
    versionLine: `Version ${legalConfig.privacyVersion} · En vigueur depuis le ${L("effectiveDate")}`,
    metaTitle: "Politique de confidentialité — Dr Vlad",
    metaDescription:
      "Traitement et protection des données personnelles des visiteurs du site du Dr Vlad.",
    tocTitle: "Sommaire",
    lead: [
      "Cette Politique explique quelles données personnelles peuvent être traitées lors de l'utilisation du site du Dr Vlad, du remplissage du questionnaire préalable, de la transmission de documents médicaux et des échanges d'organisation, à quelles fins et quels droits vous conservez.",
      "Le questionnaire pouvant contenir des informations sur votre santé physique et psycho-émotionnelle, ces données bénéficient de mesures renforcées de confidentialité et de sécurité.",
    ],
    sections: [
      {
        id: "controller",
        heading: "1. Qui est responsable du traitement",
        paragraphs: [
          `Responsable du traitement : ${L("controllerLegalName")}.`,
          `Pays : ${L("controllerCountry")}.`,
          `Pour toute question sur les données, l'exercice des droits ou le retrait du consentement : ${L("privacyEmail")}.`,
          `Pour les questions d'organisation : ${L("publicContactEmail")}.`,
        ],
      },
      {
        id: "scope",
        heading: "2. À qui s'applique cette Politique",
        paragraphs: [
          "Elle s'applique aux visiteurs majeurs qui consultent les pages publiques, initient une demande, remplissent le questionnaire, joignent des documents ou écrivent pour des questions d'organisation.",
          `Le site et le format en ligne ne sont pas destinés aux personnes de moins de 18 ans. Si les données d'un mineur ont été transmises sans base valable, merci de le signaler à ${L("privacyEmail")}.`,
        ],
      },
      {
        id: "data",
        heading: "3. Quelles données peuvent être traitées",
        subsections: [
          {
            heading: "3.1. Données de contact et d'identification",
            bullets: [
              "nom et prénom ;",
              "âge ou date de naissance si nécessaire à l'évaluation de la demande ;",
              "pays et ville ;",
              "e-mail, téléphone ou messagerie choisie ;",
              "langue de communication préférée.",
            ],
          },
          {
            heading: "3.2. Données de santé",
            bullets: [
              "description des symptômes et du ressenti ;",
              "historique de l'état de santé ;",
              "diagnostics déjà posés ;",
              "résultats d'examens et d'analyses ;",
              "traitements prescrits et médicaments en cours ;",
              "informations sur l'anxiété, le sommeil, le stress, les facteurs émotionnels et comportementaux ;",
              "objectifs et attentes concernant un éventuel travail ;",
              "toute autre information que vous indiquez volontairement.",
            ],
          },
          {
            heading: "3.3. Documents médicaux",
            paragraphs: [
              "Vous pouvez, si vous le souhaitez, téléverser des comptes rendus, résultats d'examens, analyses et la liste de vos médicaments. Ce n'est pas une condition d'envoi du questionnaire.",
            ],
          },
          {
            heading: "3.4. Données techniques",
            bullets: [
              "code de dossier technique ;",
              "langue de l'interface ;",
              "date et heure des étapes de la demande ;",
              "statut d'envoi du questionnaire et de téléversement ;",
              "type, taille et statut technique du fichier ;",
              "données de session sécurisée et journaux de sécurité ;",
              "choix de cookies sur les pages publiques.",
            ],
            paragraphs: [
              "Le code de dossier ne contient ni nom, ni e-mail, ni diagnostic, ni symptôme, et n'est pas un mot de passe d'accès.",
            ],
          },
          {
            heading: "3.5. Preuve du consentement",
            bullets: [
              "version de la Politique ;",
              "version du texte de consentement ;",
              "version des conditions d'utilisation ;",
              "langue des documents ;",
              "date et heure de la confirmation ;",
              "état des cases obligatoires ;",
              "date du retrait, le cas échéant.",
            ],
          },
          {
            heading: "3.6. Correspondance",
            paragraphs: [
              "Les messages d'organisation, les demandes relatives aux droits et l'historique des réponses peuvent être traités.",
            ],
          },
        ],
      },
      {
        id: "purposes",
        heading: "4. Finalités du traitement",
        bullets: [
          "réception et enregistrement de la demande ;",
          "étude personnelle de la situation par le Dr Vlad ;",
          "détermination du caractère approprié du format en ligne et de la compétence ;",
          "organisation d'une éventuelle consultation ;",
          "examen préalable des documents transmis volontairement ;",
          "prise de contact pour les questions d'organisation ;",
          "sécurité du questionnaire et du téléversement ;",
          "prévention des abus et des erreurs techniques ;",
          "respect des obligations légales applicables ;",
          "traitement de vos demandes d'accès, de rectification, de suppression, de limitation ou de retrait du consentement.",
        ],
        paragraphs: [
          "Les données du questionnaire et les documents médicaux ne sont jamais utilisés pour du profilage publicitaire, la création d'audiences, une vente à des tiers ou une décision médicale automatisée.",
        ],
      },
      {
        id: "basis",
        heading: "5. Bases légales",
        paragraphs: [
          "Lorsque le traitement repose sur le consentement, celui-ci est libre, spécifique, éclairé et univoque. Les données de santé reposent sur un consentement explicite distinct.",
          "Les données techniques strictement nécessaires à la sécurité, à la session sécurisée et à la fourniture du service demandé sont traitées dans la seule mesure utile.",
          "Si la loi applicable impose une autre base obligatoire pour certaines données, cette information devra figurer dans la présente Politique avant le début d'un tel traitement.",
        ],
      },
      {
        id: "access",
        heading: "6. Qui peut avoir accès",
        paragraphs: [
          "Le contenu médical du questionnaire et les documents sont consultés par le Dr Vlad, uniquement dans la mesure nécessaire à l'examen de la demande.",
          "Une assistante peut recevoir les informations de contact et d'organisation seulement après la décision du Dr Vlad, sans accès au contenu médical.",
          `Des prestataires d'infrastructure agissant comme sous-traitants peuvent intervenir, dont, après confirmation définitive de la configuration : Google Forms, Google Workspace, Google Drive, Google Cloud, ${L("hostingProvider")}, un service de messagerie et la plateforme de visioconférence retenue.`,
          "Les données peuvent aussi être communiquées à une autorité publique lorsque la loi l'impose. Elles ne sont pas transmises aux plateformes publicitaires en tant que données de santé ou résultat de la demande.",
        ],
      },
      {
        id: "google",
        heading: "7. Google Forms, Workspace et documents médicaux",
        paragraphs: [
          "Le questionnaire préalable peut être hébergé dans Google Forms. Les réponses et documents associés sont conservés dans un espace Google Workspace et Google Drive fermé, à accès restreint.",
          "Les documents sont téléversés via une interface sécurisée distincte du site, font l'objet d'une vérification technique et ne sont pas placés dans un dossier Drive public.",
          "Vous n'avez jamais à communiquer un mot de passe Google ni à partager votre Drive personnel.",
        ],
      },
      {
        id: "transfers",
        heading: "8. Traitement transfrontalier",
        paragraphs: [
          `Les données peuvent être techniquement traitées ou conservées dans les pays ou régions suivants : ${L("dataStorageCountries")}.`,
          `Le journal des consentements et l'attribution du code de dossier sont assurés par ${L("consentLogProvider")}, dans la région ${L("consentLogRegion")}. Le journal n'enregistre que le fait des trois confirmations, les versions des documents, l'heure UTC du serveur et le code de dossier — sans nom, coordonnées, symptômes, diagnostics, réponses au questionnaire ni documents médicaux. Chaque enregistrement est programmé pour une suppression automatique après un mois calendaire ; le mécanisme TTL du prestataire effectue la suppression technique après cette échéance.`,
          `Garanties de transfert appliquées : ${L("transferSafeguards")}.`,
        ],
      },
      {
        id: "retention",
        heading: "9. Durées de conservation",
        bullets: [
          `demandes non finalisées : ${R("abandoned")} ;`,
          `demandes sans consultation : ${R("declined")} ;`,
          `données et documents d'une consultation réalisée : ${R("consultation")} ;`,
          `journaux de consentement et de retrait : ${R("consentLog")} ;`,
          "journaux techniques de sécurité : uniquement la durée minimale confirmée.",
        ],
        paragraphs: [
          "À l'expiration du délai, les données sont supprimées ou anonymisées de façon irréversible, sauf si leur conservation est requise par la loi applicable, pour la défense de droits ou le règlement d'un litige.",
        ],
      },
      {
        id: "security",
        heading: "10. Sécurité",
        paragraphs: [
          "Des mesures organisationnelles et techniques adaptées à la nature des données sont appliquées : accès limité par rôle, connexion sécurisée, stockage fermé, journalisation des actions d'administration, vérification des fichiers téléversés et minimisation des données.",
          "Aucun moyen de transmission ou de conservation ne peut garantir une sécurité absolue. En cas d'incident, les mesures prévues par la loi et la procédure interne s'appliquent.",
        ],
      },
      {
        id: "cookies",
        heading: "11. Cookies, analyse et publicité",
        paragraphs: [
          "Des cookies nécessaires peuvent être utilisés pour la session sécurisée, la prévention des abus et la mémorisation de la langue.",
          "Les technologies d'analyse et de publicité sur les pages publiques sont désactivées par défaut jusqu'à votre choix. Sur les pages du questionnaire, des documents, de confirmation, de récupération et les erreurs associées, aucun pixel publicitaire, session replay, heatmap ou enregistrement d'écran n'est utilisé, quel que soit le choix de cookies.",
          "Les informations médicales, le code de dossier, le résultat de l'examen et les réponses au questionnaire ne sont jamais transmis à l'analyse marketing.",
        ],
      },
      {
        id: "automated",
        heading: "12. Décisions automatisées",
        paragraphs: [
          "Aucune décision entièrement automatisée ayant des effets juridiques ou comparables n'est prise sur la base du questionnaire. La possibilité d'un échange ultérieur est décidée par le Dr Vlad après examen personnel.",
        ],
      },
      {
        id: "rights",
        heading: "13. Vos droits",
        paragraphs: ["Selon la loi applicable, vous pouvez avoir le droit de :"],
        bullets: [
          "être informé du traitement ;",
          "demander l'accès à vos données ;",
          "rectifier des données inexactes ;",
          "demander la suppression ;",
          "limiter le traitement ;",
          "recevoir vos données dans un format portable ;",
          "vous opposer au traitement dans les cas prévus par la loi ;",
          "retirer votre consentement ;",
          "introduire une réclamation auprès de l'autorité de contrôle compétente.",
        ],
        subsections: [
          {
            paragraphs: [
              `Pour exercer vos droits, écrivez à ${L("privacyEmail")}. Une vérification raisonnable d'identité peut être nécessaire afin de ne pas divulguer vos données à un tiers.`,
            ],
          },
        ],
      },
      {
        id: "withdrawal",
        heading: "14. Retrait du consentement",
        paragraphs: [
          `Vous pouvez retirer votre consentement à tout moment en écrivant à ${L("privacyEmail")}. Le retrait ne remet pas en cause la licéité des traitements antérieurs.`,
          "Après le retrait, les traitements fondés sur le consentement cessent et les données sont supprimées ou anonymisées, sauf conservation requise par la loi ou nécessaire à la défense de droits.",
          "Un retrait avant la fin de l'examen peut rendre l'analyse en ligne impossible, celle-ci nécessitant le traitement des informations transmises.",
        ],
      },
      {
        id: "complaints",
        heading: "15. Réclamations",
        paragraphs: [
          `Adressez-vous d'abord au responsable du traitement : ${L("privacyEmail")}.`,
          `Si la question n'est pas résolue, vous pouvez saisir l'autorité de contrôle compétente : ${L("supervisoryAuthority")}.`,
        ],
      },
      {
        id: "changes",
        heading: "16. Modifications de la Politique",
        paragraphs: [
          "La Politique peut être mise à jour en cas d'évolution des processus, des prestataires ou des exigences applicables. La version en vigueur et sa date figurent toujours sur cette page. Si une modification affecte sensiblement un traitement soumis au consentement, une nouvelle confirmation est demandée avant de poursuivre.",
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
    versionLine: `Version ${legalConfig.consentVersion} · En vigueur depuis le ${L("effectiveDate")}`,
    metaTitle: "Consentement au traitement des données — Dr Vlad",
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
          "Ce consentement couvre les coordonnées, les informations indiquées dans le questionnaire préalable, les données relatives à la santé physique et psycho-émotionnelle, les symptômes, l'historique, les examens, les diagnostics, les traitements et médicaments, ainsi que les documents médicaux téléversés volontairement.",
          "Il couvre également les données techniques nécessaires à la création de la demande, à la session sécurisée, au lien entre le questionnaire et les documents et à l'enregistrement de mon choix.",
        ],
      },
      {
        id: "purposes",
        heading: "2. Finalités",
        bullets: [
          "recevoir et enregistrer la demande ;",
          "permettre au Dr Vlad d'étudier personnellement les informations ;",
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
          "Le contenu médical du questionnaire et les documents sont examinés par le Dr Vlad. Une assistante peut recevoir les informations de contact et d'organisation après sa décision, sans accès au contenu médical.",
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
    versionLine: `Version ${legalConfig.termsVersion} · En vigueur depuis le ${L("effectiveDate")}`,
    metaTitle: "Conditions d'utilisation — Dr Vlad",
    metaDescription:
      "Objet du site, nature de la première consultation intégrative et limites du format en ligne.",
    tocTitle: "Sommaire",
    lead: [],
    sections: [
      {
        id: "purpose",
        heading: "1. Objet du site",
        paragraphs: [
          "Le site du Dr Vlad fournit des informations générales sur l'approche intégrative, le parcours professionnel du Dr Vlad, le format possible d'une consultation en ligne et la procédure de demande préalable.",
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
          "Le questionnaire permet de comprendre la situation à l'avance et de déterminer si la demande relève de la compétence du Dr Vlad. Le remplir ne garantit ni consultation, ni programme, ni résultat particulier.",
          "Le Dr Vlad peut indiquer que le format en ligne ne correspond pas à la situation et, si possible, orienter vers un autre type de prise en charge. Cela ne constitue pas un diagnostic ni la garantie d'un parcours précis.",
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
        id: "no-guarantees",
        heading: "8. Absence de garanties",
        paragraphs: [
          "La réaction individuelle, l'évolution de l'état et le résultat d'un travail ultérieur ne peuvent être garantis. Le site ne promet ni disparition complète des symptômes, ni identification d'une cause unique, ni pertinence assurée de l'hypnothérapie.",
        ],
      },
      {
        id: "privacy",
        heading: "9. Confidentialité",
        paragraphs: [
          "Le traitement des données personnelles est régi par la Politique de confidentialité et un consentement distinct. Les informations médicales ne doivent pas être envoyées via les réseaux sociaux publics ou des canaux non sécurisés.",
        ],
      },
      {
        id: "contacts",
        heading: "10. Contacts",
        paragraphs: [
          `Questions d'organisation : ${L("publicContactEmail")}.`,
          `Questions relatives aux données : ${L("privacyEmail")}.`,
        ],
      },
    ],
    actions: [{ label: "Revenir aux confirmations", page: "consultation" }],
  },
};
