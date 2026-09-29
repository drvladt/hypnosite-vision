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
          "«Мы не всегда замечаем, как пережитое и привычный образ жизни отражаются на нашем самочувствии. Иногда первый шаг к переменам — увидеть эту связь». — Dr. Vlad",
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
    lead: "Je considère la situation dans son ensemble : l'état physique, les facteurs psycho-émotionnels et leurs interactions.",
    sections: [
      {
        title: "Un fondement scientifique",
        paragraphs: [
          "Dans ma pratique professionnelle, je m'appuie sur la médecine fondée sur les preuves et les recommandations cliniques actuelles. Un diagnostic précis et des traitements dont l'efficacité est démontrée restent la base de mon travail. Mais les années de pratique médicale m'ont appris à regarder plus largement : face à un même diagnostic, les ressentis, les réponses au traitement et la récupération peuvent différer d'une personne à l'autre.",
        ],
      },
      {
        title: "Au-delà du diagnostic",
        paragraphs: [
          "L'état de santé ne dépend pas seulement des changements dans les organes et des résultats d'analyses. Le sommeil, l'alimentation, les habitudes, le stress chronique, les émotions et la façon dont on regarde la vie comptent aussi. Parfois, on s'habitue tellement à vivre sous tension qu'on finit par ne plus la remarquer. On continue de travailler, de s'occuper des proches, de gérer le quotidien — et ce n'est qu'à bout de forces ou lorsque la santé décline qu'on réalise l'énergie que cela demande.",
        ],
        emphasis:
          "Parfois, on s'habitue tellement à vivre sous tension qu'on finit par ne plus la remarquer.",
      },
      {
        title: "Pendant la consultation",
        paragraphs: [
          "C'est pourquoi, lors d'une consultation, il m'importe de comprendre non seulement ce qui inquiète la personne, mais aussi comment elle vit avec son état. Que se passe-t-il dans sa vie ? De quoi a-t-elle peur quand les symptômes apparaissent ? Qu'est-ce qui l'aide à se sentir mieux, et qu'est-ce qui, au contraire, augmente l'anxiété ou la tension ? Les réponses à ces questions ne remplacent pas l'examen clinique, mais elles aident à brosser un tableau plus complet et à choisir une approche tenant compte des différents facteurs qui influencent la santé.",
        ],
      },
      {
        title: "De la psychologie à l'hypnothérapie",
        paragraphs: [
          "Mon intérêt pour la psychologie et la psychothérapie m'a progressivement conduit à l'hypnothérapie. En l'étudiant et en la pratiquant, j'ai constaté que le travail sur les réactions émotionnelles peut être une part utile de l'accompagnement. C'est particulièrement pertinent lorsque les symptômes s'intensifient sous l'effet du stress, qu'ils réapparaissent ou que leur évolution est difficile à expliquer par les seuls résultats d'examens. Dans ces situations, il ne suffit pas d'entendre que « tout va bien » : il faut comprendre ce qui se passe et trouver des moyens de mieux gérer son état.",
        ],
      },
      {
        title: "Ce que cela signifie en pratique",
        paragraphs: [
          "Pour moi, l'approche intégrative, c'est une aide dans laquelle les médicaments nécessaires et les autres méthodes médicales se combinent à l'attention portée au mode de vie et à l'état psychologique. Je cherche à comprendre, avec la personne, quels facteurs influencent son bien-être particulier, et à choisir des étapes qui ont du sens dans sa situation.",
        ],
        emphasis:
          "Il m'importe de voir non seulement la maladie, mais aussi la personne qui souhaite vivre à nouveau sa vie sereinement, sans guetter en permanence son état.",
      },
    ],
  },
};
