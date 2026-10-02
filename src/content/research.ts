import type { Locale } from "./locales";

export type ResearchSection = {
  title?: string;
  paragraphs?: string[];
  emphasis?: string;
  callout?: string;
  epigraph?: string;
  outro?: string;
  study?: {
    label: string;
    title: string;
    registrationLabel: string;
    registration: string;
    orcid: string;
  };
};

export type ResearchContent = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: ResearchSection[];
};

export const researchContent: Record<Locale, ResearchContent> = {
  ru: {
    eyebrow: "Исследования",
    title: "Исследовательская работа",
    lead:
      "Изучение возможности интеграции гипнотерапевтических методов в комплексное лечение пациентов с артериальной гипертензией.",
    sections: [
      {
        paragraphs: [
          "«Вам нужно меньше нервничать» — этот совет нередко слышит человек, у которого повышается артериальное давление. Но он мало помогает тому, кто живёт в постоянном напряжении, тревожится о близких, остро реагирует на конфликты или даже в спокойный момент мысленно готовится к новым проблемам. Невозможно просто решить больше не испытывать стресс. Важнее понять, что поддерживает это состояние и как постепенно изменить привычную реакцию на него.",
        ],
      },
      {
        paragraphs: [
          "Современное лечение артериальной гипертензии требует комплексного подхода. Оно включает изменение образа жизни и, когда необходимо, лекарственную терапию. При этом у части людей тревога, длительный стресс и привычка постоянно находиться в напряжении могут влиять на показатели давления и затруднять его контроль. Первые клинические наблюдения позволяют предположить, что работа с фоновым постоянным стрессом, тревожностью, непроявленным гневом или злостью с помощью гипнотерапии может улучшать контроль артериального давления.",
        ],
        emphasis:
          "Насколько выражен и устойчив этот эффект, предстоит оценить научными методами в рамках доказательной медицины.",
      },
      {
        paragraphs: [
          "Набор участников начался в августе 2026 года. Набор и участие в исследовании возможны независимо от того, где человек находится на момент включения в исследование. Необходимо соответствовать клиническим критериям, а также иметь возможность пройти предусмотренные протоколом обследования и последующее наблюдение.",
        ],
        study: {
          label: "Исследование",
          title:
            "Интеграция эриксоновской недирективной гипнотерапии в комплексное ведение артериальной гипертензии I–II степени",
          registrationLabel: "Регистрация",
          registration: "В процессе",
          orcid: "0009-0009-6738-1913",
        },
        callout:
          "В дальнейшем на сайте появится форма для обращения по вопросам участия. Пока она недоступна, возможность участия и его условия можно обсудить с врачом во время консультации.",
      },
    ],
  },
  en: {
    eyebrow: "Research",
    title: "Research work",
    lead:
      "Exploring how hypnotherapy can be integrated into the treatment of people with high blood pressure.",
    sections: [
      {
        epigraph: "You need to stress less.",
        paragraphs: [
          "People with high blood pressure often hear this advice. But it is not always easy to follow.",
          "Some people live with stress for years. They worry about their family, react strongly to conflicts, or constantly expect something to go wrong. Even when everything seems calm, their mind may still be preparing for the next problem.",
          "You cannot simply decide to stop feeling stressed.",
          "A more important question is why this state continues and whether we can change the way we respond to stress.",
        ],
      },
      {
        title: "Why study this?",
        paragraphs: [
          "Modern treatment of high blood pressure includes lifestyle changes and, when needed, medication.",
          "But blood pressure can also be influenced by stress and emotional state. For some people, anxiety and long periods of tension may make blood pressure more difficult to control.",
          "This raises an important question. Could working with chronic stress, anxiety, anger, or other emotional reactions help improve blood pressure control?",
          "Hypnotherapy may be one way to work with these factors. But its role needs to be studied properly.",
        ],
        outro: "My current research focuses on this question.",
        study: {
          label: "The study",
          title:
            "Integration of Ericksonian Non-Directive Hypnotherapy into the Comprehensive Management of Grade I–II Arterial Hypertension",
          registrationLabel: "Registration",
          registration: "In progress",
          orcid: "0009-0009-6738-1913",
        },
      },
      {
        title: "Participation",
        paragraphs: [
          "Participant recruitment began in August 2026.",
          "You don't need to live in a specific country or location to take part. However, you must meet the clinical criteria for the study. You must also be able to complete the required medical examinations and follow-up.",
        ],
        callout:
          "A participation enquiry form will be added to the website in the future. Until then, you can discuss possible participation and the study requirements with me during a consultation.",
      },
    ],
  },
  fr: {
    eyebrow: "Recherche",
    title: "Travail de recherche",
    lead:
      "Étudier comment l'hypnothérapie peut être intégrée à la prise en charge des personnes souffrant d'hypertension artérielle.",
    sections: [
      {
        epigraph: "Il faut moins stresser.",
        paragraphs: [
          "Les personnes qui ont une tension artérielle élevée entendent souvent ce conseil. Mais il n'est pas toujours facile à appliquer.",
          "Certaines personnes vivent sous tension pendant des années. Elles s'inquiètent beaucoup, réagissent fortement aux conflits ou ont constamment l'impression qu'un nouveau problème va arriver. Même dans les moments calmes, leur esprit reste en alerte.",
          "On ne peut pas simplement décider de ne plus ressentir de stress.",
          "La question est plutôt de comprendre ce qui entretient cet état et comment apprendre à y réagir autrement.",
        ],
      },
      {
        title: "Pourquoi étudier cette question ?",
        paragraphs: [
          "La prise en charge de l'hypertension repose notamment sur des changements du mode de vie et, lorsque cela est nécessaire, sur un traitement médicamenteux.",
          "Mais chez certaines personnes, le stress prolongé, l'anxiété et la tension intérieure peuvent aussi influencer la pression artérielle et rendre son contrôle plus difficile.",
          "Cela soulève une question importante : travailler sur le stress chronique, l'anxiété, la colère ou certaines réactions émotionnelles peut-il aider à améliorer le contrôle de la pression artérielle ?",
          "L'hypnothérapie pourrait être l'un des outils permettant de travailler sur ces facteurs. Son effet doit cependant être évalué de manière rigoureuse et scientifique.",
        ],
        outro: "Mon travail de recherche porte sur cette question.",
        study: {
          label: "À propos de l'étude",
          title:
            "Intégration de l'hypnothérapie non directive ericksonienne dans la prise en charge globale de l'hypertension artérielle de grades I–II",
          registrationLabel: "Enregistrement",
          registration: "En cours",
          orcid: "0009-0009-6738-1913",
        },
      },
      {
        title: "Participation",
        paragraphs: [
          "Le recrutement des participants a débuté en août 2026.",
          "Il n'est pas nécessaire de vivre dans un pays ou une région spécifique pour participer. Il faut cependant répondre aux critères cliniques de l'étude et pouvoir effectuer les examens et le suivi prévus par le protocole.",
        ],
        callout:
          "Un formulaire de demande de participation sera prochainement disponible sur le site. En attendant, la possibilité de participer ainsi que les conditions de l'étude peuvent être discutées lors d'une consultation.",
      },
    ],
  },
};
