import type { Locale } from "./locales";

export type AboutSection = {
  title?: string;
  paragraphs: string[];
  emphasis?: string;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: AboutSection[];
  captions: {
    childhood: string;
    university: string;
    graduation: string;
    endovascular: string;
    certificate: string;
    togo: string;
    minsk: string;
    libya: string;
    team: string;
  };
};

export const aboutContent: Record<Locale, AboutContent> = {
  ru: {
    eyebrow: "Обо мне",
    title: "От клинической кардиологии — к целостному пониманию человека",
    lead: "Мой путь — от клинической кардиологии к более глубокому пониманию взаимосвязи психики, тела и жизненного опыта человека.",
    sections: [
      {
        paragraphs: [
          "Я родился в 1993 году в городе Лида, в Республике Беларусь. Я вырос в семье врачей. Поэтому медицина вошла в мою жизнь задолго до того, как стала профессией.",
          "С детства я видел медицину не только с внешней стороны, но и изнутри. Я слышал, как родители обсуждали различные диагнозы, сложные клинические ситуации и подходы к лечению. Благодаря этому я рано начал понимать, насколько глубоких знаний, внимательности и умения анализировать требует работа врача.",
          "Меня всегда интересовало устройство человеческого организма: как он функционирует, каким образом взаимодействуют его органы и системы и почему возникают те или иные нарушения. Мне нравились биология и естественные науки, а стремление понять живые процессы постепенно переросло в осознанный профессиональный интерес.",
          "Мне всегда хотелось заниматься делом, которое приносит реальную пользу и способно менять жизнь людей к лучшему. Поэтому после школы я без сомнений выбрал медицину.",
        ],
      },
      {
        title: "Профессиональное становление",
        paragraphs: [
          "Я окончил с отличием Белорусский государственный медицинский университет по специальности «Лечебное дело». Уже во время учёбы мне было недостаточно просто запомнить симптомы, диагнозы и схемы лечения. Я стремился понять, как связаны между собой разные процессы, почему одно и то же заболевание у разных людей развивается по-разному и какую роль в этом играют физиологические, психологические, социальные и поведенческие факторы.",
          "После университета я продолжил обучение в клинической ординатуре по кардиологии. Кардиология привлекала меня своей точностью, динамичностью и необходимостью рассматривать организм как единую систему, поскольку состояние сердца неразрывно связано с работой других органов.",
          "Параллельно с основной подготовкой я проходил дополнительную стажировку в рентгеноперационной, где освоил самостоятельное выполнение коронарографии и эндоваскулярных вмешательств, включая стентирование артерий сердца. Этот опыт позволил мне увидеть кардиологию с разных сторон — от первичной диагностики и медикаментозного лечения до интенсивной терапии и высокотехнологичных интервенционных вмешательств.",
        ],
      },
      {
        title: "Медицина в разных странах и обстоятельствах",
        paragraphs: [
          "После завершения ординатуры я отправился работать в Республику Того — на родину моего отца. Работа в частной клинической практике в Западной Африке стала для меня важным профессиональным и жизненным этапом.",
          "Я столкнулся с другой системой здравоохранения, иными культурными особенностями и совершенно другими жизненными обстоятельствами людей. Этот опыт научил меня гибкости, самостоятельности и умению видеть за диагнозом конкретного человека — с его историей, страхами, убеждениями и доступными ему возможностями. В какой-то момент мне этого опыта стало достаточно.",
          "Вернувшись в Беларусь, я продолжил профессиональную деятельность в РНПЦ «Кардиология» и Больнице скорой медицинской помощи г. Минска. Дополнительно прошёл подготовку в области эндоваскулярной кардиологии и параллельно работал как интервенционный кардиолог в 4-й городской клинической больнице г.Минска.",
          "За это время мне довелось работать в кардиологических и инфарктных отделениях, палатах интенсивной терапии, рентгеноперационной и экстренной медицине. Я видел острые состояния, сложные клинические решения, тяжёлые диагнозы и ситуации, в которых современная медицина буквально спасает жизнь или наоборот разводит руками .",
        ],
        emphasis: "Но именно этот опыт постепенно привёл меня к более широкому вопросу: всегда ли достаточно воздействовать только на физические проявления заболевания?",
      },
      {
        title: "Почему я пришёл к гипнотерапии",
        paragraphs: [
          "Чем больше становился мой клинический опыт, тем яснее я видел: организм человека нельзя рассматривать изолированно от его психики и жизненной истории.",
          "Очень часто человек обращается за помощью лишь тогда, когда организм уже не позволяет игнорировать проблему: симптомы становятся постоянными, привычная жизнь начинает меняться в худшую сторону, а обследования выявляют стойкие, иногда необратимые изменения. Но задолго до этого могли годами сохраняться первые сигналы — хронический стресс, тревога, внутреннее напряжение, эмоциональное истощение и привычки, постепенно влияющие на здоровье. На сегоднейшний день я понмаю, что психологические факторы не объясняют каждое заболевание, однако своевременная работа с ними в сочетании с качественной профилактикой во многих случаях могли бы изменить дальнейшее течение событий.",
          "Именно стремление глубже понять эти процессы привело меня к гипнотерапии.",
          "Сначала это был профессиональный интерес. Затем — специализированное обучение, многочисленные тренинги и дополнительная переподготовка по гипнотерапии. Постепенно я начал применять полученные знания в консультативной практике, объединяя клиническое мышление врача с пониманием психологических механизмов и возможностей психотерапевтической работы.",
          "Чем глубже я погружался в эту сферу, тем отчётливее видел её потенциал. Гипнотерапия стала для меня не альтернативой медицине, а серьёзным терапевтическим инструментом. Она может помочь человеку исследовать внутренние причины устойчивых реакций, изменить привычные эмоциональные и поведенческие сценарии, снизить выраженность тревоги и восстановить ощущение внутренней опоры.",
          "Так сформировался мой нынешний подход: не разделять человека на отдельные органы и симптомы, а стремиться понять, как именно всё это связано между собой.",
        ],
      },
      {
        title: "Моя работа сегодня",
        paragraphs: [
          "Сегодня я работаю в Ливии в рамках международной медицинской миссии, в профильном кардиохирургическом центре. Клиническая кардиология по-прежнему остаётся важной частью моей профессиональной жизни.",
          "Одновременно я развиваю консультативную практику в области гипнотерапии и интегративного подхода к здоровью. Я провожу консультации очно и онлайн, работая с эмоциональными, психосоматическими и поведенческими запросами, а также с состояниями, при которых психологические процессы влияют на физическое самочувствие и качество жизни.",
        ],
      },
      {
        title: "Во что я верю",
        paragraphs: [
          "Я убеждён, что человек — это не диагноз и не набор симптомов. За каждой жалобой находится личная история, а за внешне похожими проявлениями у разных людей могут стоять совершенно разные причины, переживания и жизненные обстоятельства.",
          "Поэтому моя задача заключается не в том, чтобы навязать готовое объяснение или пообещать универсальное решение. Мне важно внимательно выслушать, понять индивидуальную ситуацию, исключить опасные медицинские причины и вместе найти направление, которое действительно может помочь.",
          "Мой профессиональный путь прошёл через университетские аудитории, кардиологические отделения, палаты интенсивной терапии, рентгеноперационные и работу в разных странах. Всё это сформировало главный принцип моей практики:",
        ],
        emphasis: "В жизни многое можно изменить, а многого — не допустить, если вовремя остановиться, услышать себя и сделать первый честный шаг к той жизни, которой действительно хочется жить.",
      },
    ],
    captions: {
      childhood: "Минск, 1996",
      university: "В университете",
      graduation: "Окончание медицинского университета",
      endovascular: "Работа в рентгеноперационной",
      certificate: "Начало моей деятельности в новом образе, 2025",
      togo: "Работа в западной африке, Того",
      minsk: "Работа в РНПЦ «Кардиология», Минск",
      libya: "Консультативный прием",
      team: "Наша команда кардиологов и кардиохирургов",
    },
  },
  en: {
    eyebrow: "About me",
    title: "From clinical cardiology to understanding the whole person",
    lead: "My path has led from clinical cardiology to a deeper understanding of the relationship between the mind, the body and a person's life experience.",
    sections: [
      { paragraphs: [
        "I was born in 1993 in Lida, Belarus, and grew up in a family of doctors. Medicine therefore entered my life long before it became my profession.",
        "From childhood, I saw medicine not only from the outside but from within. I heard my parents discuss diagnoses, complex clinical situations and approaches to treatment. This helped me understand early how much knowledge, attentiveness and analytical skill the work of a doctor requires.",
        "I was always interested in how the human body works, how its organs and systems interact, and why disorders arise. I enjoyed biology and the natural sciences, and the desire to understand living processes gradually became a conscious professional interest.",
        "I wanted to do work that brings tangible benefit and can change people's lives for the better. After school, I chose medicine without hesitation.",
      ]},
      { title: "Professional formation", paragraphs: [
        "I graduated with honours in General Medicine from the Belarusian State Medical University in Minsk. Even as a student, simply memorising symptoms, diagnoses and treatment protocols was not enough for me. I wanted to understand how different processes are connected, why the same disease develops differently in different people, and what roles physiological, psychological, social and behavioural factors play.",
        "After university, I continued with clinical residency training in cardiology. Cardiology attracted me through its precision, dynamism and the need to see the body as one system, because the condition of the heart is inseparable from the work of other organs.",
        "Alongside my main training, I completed additional work in the catheterisation laboratory, where I learned to perform coronary angiography and endovascular procedures independently, including coronary artery stenting. This experience allowed me to see cardiology from many perspectives — from initial diagnosis and medical treatment to intensive care and advanced interventional procedures.",
      ]},
      { title: "Medicine across countries and circumstances", paragraphs: [
        "After completing my residency, I went to work in the Republic of Togo, my father's homeland. Working in private clinical practice in West Africa became an important professional and personal chapter.",
        "I encountered a different healthcare system, different cultural contexts and entirely different life circumstances. This experience taught me flexibility, independence and the ability to see beyond a diagnosis to the individual person — with their history, fears, beliefs and available possibilities. At a certain point, I felt that this stage had given me what I needed.",
        "After returning to Belarus, I continued my professional work at the Republican Scientific and Practical Centre ‘Cardiology’ and the Minsk Emergency Hospital. I also trained in endovascular cardiology and worked as an interventional cardiologist at Minsk City Clinical Hospital No. 4.",
        "During this time, I worked in cardiology and coronary care departments, intensive care units, catheterisation laboratories and emergency medicine. I witnessed acute conditions, difficult clinical decisions, serious diagnoses and situations in which modern medicine quite literally saves lives.",
      ], emphasis: "Yet this experience gradually led me to a broader question: is addressing only the physical manifestations of illness always enough?" },
      { title: "Why I came to hypnotherapy", paragraphs: [
        "As my clinical experience grew, I saw ever more clearly that the human body cannot be considered separately from the mind and a person's life story.",
        "People often seek help only when the body no longer allows the problem to be ignored: symptoms become persistent, everyday life changes for the worse, and investigations reveal lasting, sometimes irreversible changes. Yet years earlier there may have been initial signals — chronic stress, anxiety, inner tension, emotional exhaustion and habits that gradually affect health. Psychological factors do not explain every illness, but timely work with them, together with medical prevention, could in many cases alter what happens next.",
        "It was the wish to understand these processes more deeply that led me to hypnotherapy.",
        "It began as a professional interest. This was followed by specialist education, numerous training programmes and further professional retraining in hypnotherapy. I gradually began applying this knowledge in my consultation practice, combining a physician's clinical reasoning with an understanding of psychological mechanisms and the possibilities of psychotherapeutic work.",
        "The deeper I went into this field, the more clearly I saw its potential. Hypnotherapy became for me not an alternative to medicine, but a serious therapeutic tool. It can help a person explore the internal causes of persistent reactions, change habitual emotional and behavioural patterns, reduce anxiety and restore a sense of inner stability.",
        "This is how my present approach took shape: not to divide a person into separate organs and symptoms, but to understand how everything is connected.",
      ]},
      { title: "My work today", paragraphs: [
        "Today I work in Libya as part of an international medical mission at a specialist cardiac surgery centre. Clinical cardiology remains an important part of my professional life.",
        "At the same time, I am developing a consultation practice in hypnotherapy and an integrative approach to health. I consult in person and online, working with emotional, psychosomatic and behavioural concerns, as well as conditions in which psychological processes may influence physical wellbeing and quality of life.",
      ]},
      { title: "What I believe", paragraphs: [
        "I believe that a person is not a diagnosis or a collection of symptoms. Behind every complaint is a personal story, and outwardly similar manifestations may arise from very different causes, experiences and life circumstances.",
        "My task is therefore not to impose a ready-made explanation or promise a universal solution. It is important to listen carefully, understand the individual situation, rule out dangerous medical causes and find together a direction that can genuinely help.",
        "My professional path has passed through university lecture halls, cardiology departments, intensive care units, catheterisation laboratories and work in different countries. All of this has shaped the central principle of my practice:",
      ], emphasis: "Much in life can be changed, and much can be prevented, if we pause in time, listen to ourselves and take the first honest step towards the life we truly want to live." },
    ],
    captions: { childhood: "Minsk, 1996", university: "At university", graduation: "Graduating from medical university", endovascular: "Work in the catheterisation laboratory", certificate: "Associated Hypnosis Coach certificate, 2025", togo: "Clinical practice in Togo", minsk: "Work at the RSPC Cardiology, Minsk", libya: "MHCC cardiac surgery centre, Libya", team: "International medical team" },
  },
  fr: {
    eyebrow: "À propos",
    title: "De la cardiologie clinique à une compréhension globale de la personne",
    lead: "Mon parcours m'a conduit de la cardiologie clinique vers une compréhension plus profonde des liens entre le psychisme, le corps et l'expérience de vie d'une personne.",
    sections: [
      { paragraphs: [
        "Je suis né en 1993 à Lida, en République de Biélorussie, et j'ai grandi dans une famille de médecins. La médecine est donc entrée dans ma vie bien avant de devenir ma profession.",
        "Dès l'enfance, j'ai vu la médecine non seulement de l'extérieur, mais aussi de l'intérieur. J'entendais mes parents parler de diagnostics, de situations cliniques complexes et d'approches thérapeutiques. J'ai ainsi compris très tôt combien le métier de médecin exige de connaissances, d'attention et de capacité d'analyse.",
        "Le fonctionnement du corps humain m'a toujours intéressé : la manière dont ses organes et ses systèmes interagissent, et les raisons pour lesquelles certains troubles apparaissent. J'aimais la biologie et les sciences naturelles, et mon désir de comprendre les processus du vivant est progressivement devenu un intérêt professionnel conscient.",
        "J'ai toujours voulu exercer une activité réellement utile, capable d'améliorer la vie des personnes. Après l'école, j'ai donc choisi la médecine sans hésitation.",
      ]},
      { title: "Formation professionnelle", paragraphs: [
        "J'ai obtenu avec mention mon diplôme de médecine générale à l'Université d'État de médecine de Biélorussie, à Minsk. Dès mes études, mémoriser les symptômes, les diagnostics et les protocoles ne me suffisait pas. Je cherchais à comprendre comment les différents processus sont reliés, pourquoi une même maladie évolue différemment selon les personnes et quel rôle jouent les facteurs physiologiques, psychologiques, sociaux et comportementaux.",
        "Après l'université, j'ai poursuivi ma formation par un internat clinique en cardiologie. La cardiologie m'attirait par sa précision, son dynamisme et la nécessité de considérer l'organisme comme un système unique, l'état du cœur étant indissociable du fonctionnement des autres organes.",
        "En parallèle, j'ai suivi une formation complémentaire en salle de cathétérisme, où j'ai appris à réaliser de façon autonome des coronarographies et des interventions endovasculaires, notamment la pose de stents coronaires. Cette expérience m'a permis d'aborder la cardiologie sous différents angles — du diagnostic initial et du traitement médicamenteux aux soins intensifs et aux interventions de haute technicité.",
      ]},
      { title: "La médecine dans différents pays et contextes", paragraphs: [
        "Après mon internat, je suis parti travailler en République togolaise, le pays d'origine de mon père. La pratique clinique privée en Afrique de l'Ouest a constitué une étape professionnelle et personnelle importante.",
        "J'y ai découvert un autre système de santé, d'autres réalités culturelles et des conditions de vie très différentes. Cette expérience m'a appris la souplesse, l'autonomie et la capacité de voir derrière le diagnostic une personne concrète — avec son histoire, ses peurs, ses convictions et les possibilités qui lui sont accessibles. À un moment donné, j'ai senti que cette étape m'avait apporté ce dont j'avais besoin.",
        "De retour en Biélorussie, j'ai poursuivi mon activité au Centre républicain scientifique et pratique de cardiologie ainsi qu'à l'Hôpital d'urgence de Minsk. Je me suis également formé en cardiologie endovasculaire et j'ai exercé comme cardiologue interventionnel au 4e hôpital clinique de Minsk.",
        "J'ai travaillé dans des services de cardiologie et d'infarctologie, en soins intensifs, en salle de cathétérisme et en médecine d'urgence. J'ai été confronté à des états aigus, à des décisions cliniques difficiles, à des diagnostics graves et à des situations où la médecine moderne sauve littéralement des vies.",
      ], emphasis: "Mais cette expérience m'a progressivement conduit à une question plus large : suffit-il toujours d'agir uniquement sur les manifestations physiques de la maladie ?" },
      { title: "Pourquoi je me suis tourné vers l'hypnothérapie", paragraphs: [
        "Plus mon expérience clinique grandissait, plus une évidence s'imposait : le corps humain ne peut être considéré séparément du psychisme et de l'histoire de vie.",
        "Très souvent, une personne ne demande de l'aide que lorsque son corps ne lui permet plus d'ignorer le problème : les symptômes deviennent constants, la vie quotidienne se dégrade et les examens révèlent des changements durables, parfois irréversibles. Pourtant, les premiers signaux ont pu persister pendant des années — stress chronique, anxiété, tension intérieure, épuisement émotionnel et habitudes qui influencent progressivement la santé. Les facteurs psychologiques n'expliquent pas toutes les maladies, mais les prendre en charge à temps, parallèlement à la prévention médicale, pourrait dans de nombreux cas modifier la suite des événements.",
        "C'est le désir de mieux comprendre ces processus qui m'a conduit à l'hypnothérapie.",
        "Ce fut d'abord un intérêt professionnel, puis une formation spécialisée, de nombreux entraînements et une reconversion complémentaire en hypnothérapie. J'ai progressivement intégré ces connaissances à ma pratique de consultation, en associant le raisonnement clinique du médecin à la compréhension des mécanismes psychologiques et des possibilités du travail psychothérapeutique.",
        "Plus j'approfondissais ce domaine, plus j'en percevais le potentiel. L'hypnothérapie est devenue pour moi non pas une alternative à la médecine, mais un outil thérapeutique sérieux. Elle peut aider à explorer les causes internes de réactions persistantes, à modifier des schémas émotionnels et comportementaux habituels, à réduire l'anxiété et à retrouver un sentiment de stabilité intérieure.",
        "C'est ainsi que mon approche actuelle s'est formée : ne pas diviser la personne en organes et symptômes isolés, mais chercher à comprendre comment tout est relié.",
      ]},
      { title: "Mon travail aujourd'hui", paragraphs: [
        "Aujourd'hui, je travaille en Libye dans le cadre d'une mission médicale internationale, au sein d'un centre spécialisé de chirurgie cardiaque. La cardiologie clinique reste une part importante de ma vie professionnelle.",
        "Parallèlement, je développe une pratique de consultation en hypnothérapie et en approche intégrative de la santé. Je consulte en présentiel et en ligne pour des problématiques émotionnelles, psychosomatiques et comportementales, ainsi que pour des états dans lesquels les processus psychologiques peuvent influencer le bien-être physique et la qualité de vie.",
      ]},
      { title: "Ce en quoi je crois", paragraphs: [
        "Je suis convaincu qu'une personne n'est ni un diagnostic ni un ensemble de symptômes. Derrière chaque plainte se trouve une histoire personnelle, et des manifestations apparemment similaires peuvent avoir des causes, des vécus et des circonstances de vie très différents.",
        "Mon rôle n'est donc pas d'imposer une explication toute faite ni de promettre une solution universelle. Il m'importe d'écouter attentivement, de comprendre la situation individuelle, d'écarter les causes médicales dangereuses et de trouver ensemble une direction réellement utile.",
        "Mon parcours professionnel m'a conduit des amphithéâtres universitaires aux services de cardiologie, aux unités de soins intensifs, aux salles de cathétérisme et à l'exercice dans différents pays. Tout cela a façonné le principe central de ma pratique :",
      ], emphasis: "Beaucoup de choses peuvent être changées dans la vie, et beaucoup peuvent être évitées, si l'on sait s'arrêter à temps, s'écouter et faire le premier pas honnête vers la vie que l'on souhaite réellement vivre." },
    ],
    captions: { childhood: "Minsk, 1996", university: "À l'université", graduation: "Diplôme de l'université de médecine", endovascular: "Travail en salle de cathétérisme", certificate: "Certificat Associated Hypnosis Coach, 2025", togo: "Pratique clinique au Togo", minsk: "Travail au centre de cardiologie, Minsk", libya: "Centre de chirurgie cardiaque MHCC, Libye", team: "Équipe médicale internationale" },
  },
};