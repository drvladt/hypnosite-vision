import type { Locale } from "./locales";

export type ResearchSection = {
  title?: string;
  paragraphs?: string[];
  emphasis?: string;
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
          "Набор участников начался в августе 2026 года. В дальнейшем через сайт также появится возможность обратиться по поводу участия в исследовании. Пока эта функция недоступна, желающие могут обсудить условия участия напрямую с врачом при консультации.",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Research",
    title: "Research work",
    lead:
      "Exploring how hypnotherapeutic methods can be integrated into the comprehensive treatment of patients with arterial hypertension.",
    sections: [
      {
        paragraphs: [
          "“You need to stress less” — this is advice a person with high blood pressure often hears. But it is of little help to someone who lives in constant tension, worries about loved ones, reacts sharply to conflicts, or even in a calm moment mentally prepares for new problems. It is impossible to simply decide to no longer experience stress. What matters more is to understand what sustains this state and how to gradually change one's habitual reaction to it.",
        ],
      },
      {
        paragraphs: [
          "Modern treatment of arterial hypertension requires a comprehensive approach. It includes lifestyle changes and, when necessary, drug therapy. At the same time, in some people anxiety, prolonged stress and the habit of constantly being in tension can affect blood pressure readings and make it harder to control. Initial clinical observations suggest that working with background chronic stress, anxiety, suppressed anger or irritability through hypnotherapy may improve blood pressure control.",
        ],
        emphasis:
          "How pronounced and lasting this effect is remains to be assessed by scientific methods within the framework of evidence-based medicine.",
      },
      {
        paragraphs: [
          "Participant recruitment began in August 2026. In the future, the option to enquire about participating in the study will also become available through the website. Until this feature is available, those interested can discuss participation conditions directly with the doctor during a consultation.",
        ],
      },
    ],
  },
  fr: {
    eyebrow: "Recherche",
    title: "Travail de recherche",
    lead:
      "Étude de l'intégration des méthodes hypnothérapeutiques dans la prise en charge globale des patients souffrant d'hypertension artérielle.",
    sections: [
      {
        paragraphs: [
          "« Il faut moins se stresser » — ce conseil, une personne dont la tension artérielle augmente l'entend souvent. Mais il est de peu d'aide pour celui qui vit dans une tension constante, s'inquiète pour ses proches, réagit vivement aux conflits ou, même au calme, se prépare mentalement à de nouveaux problèmes. Il est impossible de simplement décider de ne plus ressentir de stress. L'essentiel est de comprendre ce qui maintient cet état et comment modifier progressivement la réaction habituelle à celui-ci.",
        ],
      },
      {
        paragraphs: [
          "Le traitement moderne de l'hypertension artérielle nécessite une approche globale. Il comprend des modifications du mode de vie et, lorsque c'est nécessaire, un traitement médicamenteux. Parallèlement, chez certaines personnes, l'anxiété, le stress prolongé et l'habitude d'être constamment en tension peuvent influencer les chiffres de la tension et en compliquer le contrôle. Les premières observations cliniques permettent de supposer que le travail sur le stress de fond constant, l'anxiété, la colère refoulée ou l'irritabilité au moyen de l'hypnothérapie pourrait améliorer le contrôle de la tension artérielle.",
        ],
        emphasis:
          "L'ampleur et la durabilité de cet effet restent à évaluer par des méthodes scientifiques, dans le cadre de la médecine fondée sur les preuves.",
      },
      {
        paragraphs: [
          "Le recrutement des participants a débuté en août 2026. À l'avenir, la possibilité de se renseigner sur la participation à l'étude sera également proposée via le site. En attendant, les personnes intéressées peuvent discuter des conditions de participation directement avec le médecin lors d'une consultation.",
        ],
      },
    ],
  },
};
