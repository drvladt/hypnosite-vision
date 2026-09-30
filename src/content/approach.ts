import type { Locale } from "./locales";

export type ApproachSection = {
  title?: string;
  paragraphs: string[];
  emphasis?: string;
};

export type ApproachContent = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: ApproachSection[];
};

export const approachContent: Record<Locale, ApproachContent> = {
  ru: {
    eyebrow: "Подход",
    title: "Мой подход к интегративной медицине",
    lead: "",
    sections: [
      {
        paragraphs: [

          "В своей профессиональной деятельности я опираюсь на доказательную медицину и актуальные клинические рекомендации. Точная диагностика и лечение с подтверждённой эффективностью остаются основой моей работы. Но годы врачебной практики научили меня смотреть шире: даже при одном и том же диагнозе люди могут по-разному чувствовать себя, реагировать на лечение и восстанавливаться.",
        ],
      },
      {
        paragraphs: [

          "На состояние здоровья влияют не только изменения в органах и результаты анализов. Имеют значение сон, питание, привычки, хронический стресс, эмоциональные переживания и то, как человек смотрит на жизнь. Иногда человек настолько привыкает жить в напряжении, что перестаёт его замечать. Он продолжает работать, заботиться о близких, решать повседневные задачи — и лишь когда не хватает энергии или ухудшается самочувствие, понимает, как много сил и энергии уходит на все эти подсознательные процессы.",
        ],
        emphasis:
          "«Мы не всегда замечаем, как пережитое и привычный образ жизни отражаются на нашем самочувствии. Иногда первый шаг к переменам — увидеть эту связь». — Dr. Vlad",
      },
      {
        paragraphs: [

          "Поэтому во время консультации мне важно понять не только что беспокоит человека, но и как он живёт с этим состоянием. Что происходит в его жизни? Чего он опасается, когда появляются симптомы? Что помогает ему чувствовать себя лучше, а что, напротив, усиливает тревогу или напряжение? Ответы на эти вопросы не заменяют обследование, но помогают увидеть более полную картину и подобрать подход с учётом комплекса факторов, влияющих на здоровье.",
        ],
      },
      {
        paragraphs: [

          "Интерес к психологии и психотерапии постепенно привёл меня к гипнотерапии. Изучая её и применяя на практике, я увидел, что работа с эмоциональными реакциями нередко становится очень важной и эффектвной частью помощи. Это особенно актуально, когда симптомы усиливаются на фоне стресса, повторяются или их течение трудно объяснить только данными обследований. В таких ситуациях человеку важно не просто услышать, что «всё в порядке», а разобраться в происходящем и найти способы лучше справляться со своим состоянием.",
        ],
      },
      {
        paragraphs: [

          "Для меня интегративный подход — это помощь, в которой необходимые лекарства и другие медицинские методы сочетаются с вниманием к образу жизни и психологическому состоянию. Я стремлюсь вместе с человеком разобраться, какие факторы влияют именно на его самочувствие, и выбрать шаги, которые имеют смысл в его ситуации.",
        ],
        emphasis:
          "Мне важно увидеть не только болезнь, но и человека, которому хочется снова спокойно жить своей жизнью, не прислушиваясь постоянно к своему самочувствию.",
      },
    ],
  },
  en: {
    eyebrow: "Approach",
    title: "My integrative approach",
    lead: "I look at the whole picture — your physical health, emotional well-being, lifestyle, and how they may influence one another.",
    sections: [
      {
        title: "Medicine comes first",
        paragraphs: [
          "My work is grounded in evidence-based medicine and current clinical guidelines. Accurate diagnosis and treatments with proven effectiveness remain the foundation of my medical practice.",
          "But a diagnosis does not always tell the whole story. Two people with the same condition may experience it very differently. One may feel well and live normally, while another continues to struggle with symptoms, anxiety, fatigue, or uncertainty despite following treatment.",
        ],
      },
      {
        title: "More than test results",
        paragraphs: [
          "How you feel is influenced by more than what appears in your test results. Sleep, nutrition, daily habits, stress, and emotional well-being can all play a role.",
          "Sometimes we live under stress for so long that it starts to feel normal. You keep working, taking care of others, solving problems, and getting through the day. You may not notice how much tension you are carrying until sleep gets worse, energy disappears, or physical symptoms become harder to ignore.",
        ],
        emphasis: "Sometimes we live with stress for so long that we stop noticing how much it affects us.",
      },
      {
        title: "Looking at the whole picture",
        paragraphs: [
          "During the consultation, I will need to understand not only your symptoms, but also what is happening around them.",
          "When did they start? What makes them better or worse? What happens when they appear? Do they make you anxious or change the way you live? How are you sleeping? What is happening in your life at the moment?",
          "These questions do not replace medical examination. They help us understand the bigger picture and identify factors that might otherwise be missed.",
        ],
      },
      {
        title: "Where hypnotherapy may fit",
        paragraphs: [
          "My work in medicine gradually led me to explore psychology and hypnotherapy. It gave me another way to work with emotional responses, stress, fears, and patterns that may sometimes contribute to how symptoms are experienced or maintained.",
          "This can be particularly relevant when symptoms become worse during periods of stress, keep returning, or continue despite normal medical tests.",
          "In these situations, hearing “everything looks normal” may not be enough. The symptoms are still real. The goal is to understand what may be contributing to them and what can be done about it.",
          "Hypnotherapy does not replace medical care and is not automatically part of treatment. It is one of the tools that may be considered when appropriate.",
        ],
      },
      {
        title: "What this means for you",
        paragraphs: [
          "An integrative approach does not mean choosing between medicine and psychology. It means using the right tools for the right situation.",
          "Medication and other medical treatments remain important when they are needed. At the same time, we can look at sleep, lifestyle, stress, emotional responses, and other factors that may be affecting how you feel.",
          "The goal is to understand what matters in your particular situation and focus on changes that are realistic, relevant, and useful for you.",
        ],
        emphasis:
          "I want to see more than a diagnosis. I want to understand the person behind it — and help them get back to living their life without constantly worrying about how they feel.",
      },
    ],
  },
  fr: {
    eyebrow: "Approche",
    title: "Mon approche intégrative",
    lead: "Je regarde votre situation dans son ensemble : votre santé physique, votre état émotionnel, votre mode de vie et la façon dont ces différents éléments peuvent interagir entre eux.",
    sections: [
      {
        title: "La médecine classique avant tout",
        paragraphs: [
          "Mon approche repose sur la médecine fondée sur les preuves et les recommandations cliniques actuelles. Un diagnostic précis et des traitements dont l'efficacité est démontrée restent la base de ma pratique.",
          "Mais un diagnostic ne raconte pas toujours toute l'histoire. Deux personnes atteintes de la même maladie peuvent la vivre très différemment. L'une peut se sentir bien, tandis que l'autre continue à avoir des symptômes, de la fatigue, de l'anxiété ou des inquiétudes malgré son traitement.",
        ],
      },
      {
        title: "Au-delà des résultats médicaux",
        paragraphs: [
          "Votre état ne dépend pas uniquement de ce que montrent les examens et analyses. Le sommeil, l'alimentation, les habitudes, le stress et l'état émotionnel y jouent un rôle important.",
          "Parfois, nous vivons sous stress depuis si longtemps que nous finissons par ne plus le remarquer. Nous continuons à travailler, à nous occuper de nos proches et à gérer le quotidien. Puis le sommeil se dégrade, l'énergie diminue ou certains symptômes deviennent plus difficiles à ignorer.",
        ],
        emphasis:
          "Parfois, nous vivons avec le stress depuis si longtemps que nous ne remarquons même plus à quel point il nous affecte.",
      },
      {
        title: "Comprendre votre situation",
        paragraphs: [
          "Pendant la consultation, je cherche à comprendre non seulement vos symptômes, mais aussi ce qui se passe autour d'eux.",
          "Quand ont-ils commencé ? Qu'est-ce qui les améliore ou les aggrave ? Que ressentez-vous lorsqu'ils apparaissent ? Vous rendent-ils anxieux ? Ont-ils changé certaines de vos habitudes ? Comment dormez-vous ? Que se passe-t-il dans votre vie en ce moment ?",
          "Ces questions ne remplacent jamais l'évaluation médicale. Elles permettent simplement de mieux comprendre votre situation et d'identifier des facteurs qui pourraient autrement passer inaperçus.",
        ],
      },
      {
        title: "La place de l'hypnothérapie",
        paragraphs: [
          "Mon parcours en médecine m'a progressivement amené à m'intéresser à la psychologie, puis à l'hypnothérapie.",
          "Elle m'a donné un outil supplémentaire pour travailler sur le stress, les peurs, les réactions émotionnelles et certains schémas qui peuvent parfois influencer la façon dont les symptômes sont ressentis ou entretenus.",
          "Cette approche peut être particulièrement intéressante lorsque les symptômes s'aggravent pendant les périodes de stress, reviennent régulièrement ou persistent malgré des examens médicaux rassurants.",
          "Dans ces situations, entendre que « tout va bien » ne suffit pas toujours. Les symptômes sont toujours là. L'objectif est de comprendre ce qui peut y contribuer et ce qu'il est possible de faire.",
          "L'hypnothérapie ne remplace pas la prise en charge médicale. Elle peut être envisagée comme un outil complémentaire lorsque la situation y est favorable.",
        ],
      },
      {
        title: "Ce que cela signifie pour vous",
        paragraphs: [
          "Une approche intégrative ne signifie pas choisir entre médecine et psychologie. Il s'agit d'utiliser les bons outils au bon moment.",
          "Les médicaments et les autres traitements médicaux restent importants lorsqu'ils sont nécessaires. Mais il est important de prendre en compte le sommeil, le mode de vie, le stress, les réactions émotionnelles et autres facteurs qui peuvent influencer votre état.",
          "L'objectif est de comprendre ce qui compte dans votre situation et de travailler sur ce qui peut réellement être utile pour vous.",
        ],
        emphasis:
          "Je veux voir plus qu'un diagnostic. Je veux comprendre la personne qui se trouve derrière et l'aider à retrouver une vie où elle n'a pas à s'inquiéter constamment de ce qu'elle ressent.",
      },
    ],
  },
};
