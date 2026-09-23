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
    title: "Мой интегративный подход",
    lead: "Я смотрю на ситуацию целиком: физическое состояние, психоэмоциональные факторы и то, как они связаны между собой.",
    sections: [
      {
        title: "Доказательная основа",
        paragraphs: [
          "В своей профессиональной деятельности я опираюсь на доказательную медицину и актуальные клинические рекомендации. Точная диагностика и лечение с подтверждённой эффективностью остаются основой моей работы. Но годы врачебной практики научили меня смотреть шире: даже при одном и том же диагнозе люди могут по-разному чувствовать себя, реагировать на лечение и восстанавливаться.",
        ],
      },
      {
        title: "Шире диагноза",
        paragraphs: [
          "На состояние здоровья влияют не только изменения в органах и результаты анализов. Имеют значение сон, питание, привычки, хронический стресс, эмоциональные переживания и то, как человек смотрит на жизнь. Иногда человек настолько привыкает жить в напряжении, что перестаёт его замечать. Он продолжает работать, заботиться о близких, решать повседневные задачи — и лишь когда не хватает энергии или ухудшается самочувствие, понимает, как много сил на это уходит.",
        ],
        emphasis:
          "Иногда человек настолько привыкает жить в напряжении, что перестаёт его замечать.",
      },
      {
        title: "На консультации",
        paragraphs: [
          "Поэтому во время консультации мне важно понять не только что беспокоит человека, но и как он живёт с этим состоянием. Что происходит в его жизни? Чего он опасается, когда появляются симптомы? Что помогает ему чувствовать себя лучше, а что, напротив, усиливает тревогу или напряжение? Ответы на эти вопросы не заменяют обследование, но помогают увидеть более полную картину и подобрать подход с учётом разных факторов, влияющих на здоровье.",
        ],
      },
      {
        title: "От психологии — к гипнотерапии",
        paragraphs: [
          "Интерес к психологии и психотерапии постепенно привёл меня к гипнотерапии. Изучая её и применяя на практике, я увидел, что работа с эмоциональными реакциями может быть полезной частью помощи. Это особенно актуально, когда симптомы усиливаются на фоне стресса, повторяются или их течение трудно объяснить только данными обследований. В таких ситуациях человеку важно не просто услышать, что «всё в порядке», а разобраться в происходящем и найти способы лучше справляться со своим состоянием.",
        ],
      },
      {
        title: "Что это значит на практике",
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
    lead: "I look at the whole situation: physical health, psycho-emotional factors and how they interact.",
    sections: [
      {
        title: "An evidence-based foundation",
        paragraphs: [
          "In my professional work I rely on evidence-based medicine and current clinical guidelines. Accurate diagnosis and treatments with proven efficacy remain the foundation of my practice. But years of clinical work have taught me to look more broadly: even with the same diagnosis, people may feel differently, respond to treatment differently, and recover differently.",
        ],
      },
      {
        title: "Beyond the diagnosis",
        paragraphs: [
          "Health is shaped not only by changes in organs and test results. Sleep, nutrition, habits, chronic stress, emotional experiences and the way a person views life all matter. Sometimes a person becomes so accustomed to living in tension that they stop noticing it. They keep working, caring for loved ones, handling everyday tasks — and only when energy runs low or health deteriorates do they realise how much effort it takes.",
        ],
        emphasis:
          "Sometimes a person becomes so accustomed to living in tension that they stop noticing it.",
      },
      {
        title: "During the consultation",
        paragraphs: [
          "That is why, during a consultation, it matters to me to understand not only what bothers a person, but how they live with their condition. What is happening in their life? What do they fear when symptoms appear? What helps them feel better, and what, on the contrary, increases anxiety or tension? The answers to these questions do not replace examination, but they help see a more complete picture and choose an approach that accounts for the various factors affecting health.",
        ],
      },
      {
        title: "From psychology to hypnotherapy",
        paragraphs: [
          "My interest in psychology and psychotherapy gradually led me to hypnotherapy. Studying it and applying it in practice, I saw that working with emotional responses can be a useful part of care. This is especially relevant when symptoms intensify against a background of stress, recur, or their course is difficult to explain by test results alone. In such situations, a person needs not simply to hear that “everything is fine”, but to understand what is happening and find ways to manage their condition better.",
        ],
      },
      {
        title: "What this means in practice",
        paragraphs: [
          "For me, an integrative approach means care in which necessary medication and other medical methods are combined with attention to lifestyle and psychological state. I strive to work with the person to identify which factors affect their particular wellbeing and to choose steps that make sense in their situation.",
        ],
        emphasis:
          "It matters to me to see not only the illness but the person who wants to live their life calmly again, without constantly monitoring how they feel.",
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
