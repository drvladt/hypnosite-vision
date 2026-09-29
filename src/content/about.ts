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
    nightShift: string;
    team: string;
  };
};

export const aboutContent: Record<Locale, AboutContent> = {
  ru: {
    eyebrow: "Обо мне",
    title: "От классической медицины — к целостному пониманию человека",
    lead: "Я родился в 1993 году в городе Лида, в Республике Беларусь. С самого детства я вырос в семье врачей. Поэтому медицина вошла в мою жизнь задолго до того, как стала профессией.",
    sections: [
      {
        paragraphs: [
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
      nightShift: "Одно из непростых дежурств в палатах интенсивной терапии, Ливия,2025г",
      team: "Наша команда кардиологов и кардиохирургов",
    },
  },
  en: {
    eyebrow: "About me",
    title: "From classical medicine to a holistic understanding of the person",
    lead: "I was born in 1993 in Lida, Belarus, and grew up in a family of doctors. Medicine therefore entered my life long before it became my profession.",
    sections: [
      { paragraphs: [
        "From childhood, I saw medicine not only from the outside but from within. I often heard my parents discussing difficult cases, diagnoses, and treatment decisions. It showed me that being a doctor is not only about knowing medicine — it is also about thinking carefully, noticing details, and making responsible decisions.",
        "I was naturally curious about how the human body works. I wanted to understand why we get sick, how different organs work together, and what happens when something goes wrong. Biology and natural sciences were always the subjects that interested me most.",
        "Over time, that curiosity became something more. I knew I wanted a profession where my knowledge could have a real impact on someone’s life.",
        "So when it was time to choose my path after school, medicine felt like a natural choice.",
      ]},
      { title: "Professional formation", paragraphs: [
        "I graduated with honours in General Medicine from the Belarusian State Medical University in Minsk.",
        "Even as a medical student, I was never satisfied with simply memorising symptoms, diagnoses, and treatment guidelines. I wanted to understand why things happen. Why can the same disease affect two people so differently? Why does one person recover quickly while another continues to struggle? And how do lifestyle, stress, emotional state, and other factors influence physical health?",
        "After medical school, I chose to specialise in cardiology. I was attracted by its precision and the need to make clear clinical decisions, sometimes very quickly. But cardiology also showed me how closely everything in the body is connected. The heart does not work on its own — blood pressure, kidneys, hormones, metabolism, nervous system, lifestyle, and emotional state can all influence cardiovascular health.",
        "During my cardiology training, I also worked in the catheterisation laboratory, where I received additional training in coronary angiography and endovascular procedures, including coronary artery stenting.",
        "This gave me the opportunity to experience cardiology from different sides — from diagnosis and medical treatment to emergency care and interventional procedures. More importantly, it taught me not to focus on a single symptom, test result, or diagnosis, but to look at the whole clinical picture.",
      ]},
      { title: "Medicine across countries and circumstances", paragraphs: [
        "After completing my residency, I went to work in the Republic of Togo, my father's homeland. Working in private clinical practice in West Africa became an important professional and personal chapter.",
        "This experience taught me to be flexible and independent. It also taught me to look beyond the diagnosis and see the person behind it  — with their history, fears, beliefs and life circumstances. \nAt some point, I felt that this chapter had given me what I needed to move forward.",
        "After returning to Belarus, I continued my professional work at the Republican Scientific and Practical Centre ‘Cardiology’ and the Minsk Emergency Hospital. I also trained in endovascular cardiology and worked as an interventional cardiologist at Minsk City Clinical Hospital No. 4.",
        "During this time, I worked in cardiology, intensive care units, catheterisation laboratories and emergency medicine. I encountered acute conditions, difficult clinical decisions, serious diagnoses and situations in which modern medicine quite literally saves lives or, on the contrary, throws up its hands.",
      ], emphasis: "Over time, this experience made me ask a broader question: is treating the physical side of illness always enough?" },
      { title: "Why I came to hypnotherapy", paragraphs: [
        "As my clinical experience grew, I saw ever more clearly that the human body cannot be considered separately from the mind and a person's life story.",
        "People often seek medical help when their symptoms become difficult to ignore. By that time, the problem may already affect their daily life. Medical tests may also show changes that are difficult or sometimes impossible to reverse.\n\nBut the first signs may have appeared years earlier. These can include chronic stress, anxiety, inner tension, emotional exhaustion, or unhealthy habits. Over time, these factors can affect physical health.\n\nToday, I understand that psychological factors cannot explain every illness. But in some cases, they can play an important role. Addressing them early, together with proper prevention, may help change how the condition develops over time.",
        "It was the wish to understand these processes more deeply that led me to hypnotherapy.",
        "It began as a professional interest and was followed by numerous training programmes and further professional retraining in hypnotherapy. I gradually began applying this knowledge in my consultation practice, combining a physician's clinical reasoning with an understanding of psychological mechanisms and the possibilities of psychotherapeutic work.",
        "The deeper I went into this field, the more clearly I saw its potential. Hypnotherapy became for me not an alternative to medicine, but a serious therapeutic tool. It can help a person explore the internal causes of persistent reactions, change habitual emotional and behavioural patterns, reduce anxiety and restore a sense of inner stability.",
        "This is how my present approach took shape: not to divide a person into separate organs and symptoms, but to understand how everything is connected.",
      ]},
      { title: "My work today", paragraphs: [
        "Today I work in Libya as part of an international medical mission at a specialized cardiac surgery centre. Clinical cardiology remains an important part of my professional life.",
        "At the same time, I am developing a consultation practice in hypnotherapy and an integrative approach to health. I consult in person and online, working with emotional, psychosomatic and behavioural concerns, as well as conditions in which psychological processes influence physical wellbeing and quality of life.",
      ]},
      { title: "What I believe", paragraphs: [
        "I believe that a person is more than a diagnosis or a list of symptoms. Every person has their own story. Similar symptoms can have different causes and can be influenced by different experiences and life circumstances.",
        "My task is therefore not to impose a ready-made explanation or promise a universal solution. It is important to listen carefully, understand the individual situation, rule out dangerous medical causes and find together a direction that can genuinely help.",
        "My professional path has passed through university lecture halls, cardiology departments, intensive care units, catheterisation laboratories and work in different countries. All of this has shaped the central principle of my practice:",
      ], emphasis: "Much in life can be changed, and much can be prevented, if we pause in time, listen to ourselves and take the first honest step towards the life we truly want to live." },
    ],
    captions: { childhood: "Minsk, 1996", university: "At university", graduation: "Graduating from medical university", endovascular: "Work in the catheterisation laboratory", certificate: "The beginning of my work in a new capacity, 2025", togo: "Work in West Africa, Togo", minsk: "Work at the RSPC Cardiology, Minsk", libya: "Consultation", nightShift: "One of the challenging shifts in the intensive care unit, Libya, 2025", team: "Our team of cardiologists and cardiac surgeons" },
  },
  fr: {
    eyebrow: "À propos",
    title: "De la médecine classique à une compréhension globale de la personne",
    lead: "Je suis né en 1993 à Lida, en Biélorussie, et j'ai grandi dans une famille de médecins. La médecine faisait donc partie de ma vie bien avant de devenir ma profession.",
    sections: [
      { title: "Mes débuts en médecine", paragraphs: [
        "Dès l'enfance, j'entendais mes parents parler de diagnostics, de cas difficiles et de traitements. J'ai compris très tôt que le métier de médecin demande beaucoup de connaissances, d'attention et de réflexion.",
        "J'ai toujours été curieux de comprendre comment fonctionne le corps humain. Comment les différents organes travaillent-ils ensemble ? Pourquoi certaines maladies apparaissent-elles ? Pourquoi une même maladie peut-elle évoluer différemment d'une personne à l'autre ?",
        "J'aimais particulièrement la biologie et les sciences naturelles. Peu à peu, cette curiosité est devenue un véritable intérêt pour la médecine.",
        "Je voulais aussi exercer un métier utile. Un métier qui puisse réellement améliorer la vie des autres. Après l'école, choisir la médecine m'a donc semblé naturel.",
      ]},
      { title: "Formation médicale", paragraphs: [
        "J'ai obtenu avec mention mon diplôme de médecine générale à l'Université d'État de médecine de Biélorussie, à Minsk.",
        "Pendant mes études, apprendre simplement les symptômes, les diagnostics et les protocoles ne me suffisait pas. Je voulais comprendre « pourquoi » les choses se produisent. Pourquoi une même maladie évolue-t-elle différemment selon les personnes ? Pourquoi certains récupèrent rapidement alors que d'autres continuent à avoir des difficultés ? Quel rôle peuvent jouer le mode de vie, le stress, et l'état émotionnel?",
        "Après mes études, j'ai choisi de me spécialiser en cardiologie. Cette spécialité m'attirait par sa précision et par la nécessité de prendre des décisions cliniques parfois très importantes. Elle m'a aussi appris à voir le corps comme un ensemble. Le cœur ne fonctionne pas de manière isolée. Les reins, les hormones, le métabolisme, le système nerveux et de nombreux autres facteurs peuvent influencer la santé cardiovasculaire.",
        "Pendant ma formation, j'ai également travaillé en salle de cathétérisme. J'y ai appris à réaliser des coronarographies et des interventions endovasculaires, notamment la pose de stents coronaires.",
        "Cette expérience m'a permis de découvrir plusieurs aspects de la cardiologie. Le diagnostic, le traitement médicamenteux, les urgences, les soins intensifs et les procédures interventionnelles les plus modernes. Elle m'a surtout appris à ne pas m'arrêter à un symptôme, à un examen ou à un diagnostic. Il faut comprendre l'ensemble de la situation clinique pour assurer un traitement réellement efficace.",
      ]},
      { title: "La médecine dans différents pays", paragraphs: [
        "Après ma formation en cardiologie, je suis parti travailler au Togo, le pays d'origine de mon père.",
        "Travailler en Afrique de l'Ouest a été une étape importante de mon parcours, autant sur le plan professionnel que personnel.",
        "J'y ai découvert un autre système de santé, une autre culture et des réalités très différentes.",
        "Cette expérience m'a appris à être flexible et autonome. Elle m'a aussi appris à regarder au-delà du diagnostic. Derrière chaque diagnostic, il y a une personne avec son histoire, ses peurs, ses convictions et ses moyens.\nÀ un certain moment, j'ai senti que cette étape m'avait apporté ce dont j'avais besoin.",
        "Je suis ensuite retourné en Biélorussie. J'ai travaillé au Centre républicain de cardiologie ainsi qu'à l'Hôpital centrale des urgences de Minsk.",
        "J'ai également poursuivi ma formation en cardiologie endovasculaire et travaillé comme cardiologue interventionnel au 4e hôpital clinique de Minsk. J'ai exercé dans des services de cardiologie, en soins intensifs, aux urgences et en salle de cathétérisme.",
        "J'ai été confronté à des situations urgentes et à des décisions difficiles. J'ai vu des situations où la médecine moderne sauve littéralement une vie. J'en ai aussi vu d'autres où, malgré tous nos efforts, les résultats du traitement restent très limitées.",
      ], emphasis: "Avec le temps, cette expérience m'a amené à me poser une question plus large : traiter uniquement l'aspect physique de la maladie est-il toujours suffisant ?" },
      { title: "Pourquoi je me suis intéressé à l'hypnothérapie", paragraphs: [
        "Avec le temps, j'ai compris de plus en plus clairement que le corps et le metal ne fonctionnent pas séparément.",
        "Les personnes consultent souvent lorsque leurs symptômes deviennent difficiles à ignorer. À ce stade, le problème peut déjà affecter leur quotidien. Les examens peuvent aussi montrer des changements chroniques, parfois irréversibles.",
        "Pourtant, certains signes peuvaient être présents depuis des années. Il peut s'agir d'un stress chronique, d'anxiété, de tension intérieure ou d'épuisement émotionnel. Certaines habitudes peuvent également influencer progressivement la santé.",
        "Aujourd'hui, je sais que les facteurs psychologiques n'expliquent pas toutes les maladies. Mais dans certaines situations, ils peuvent jouer un rôle important. Les prendre en compte suffisamment tôt, avec une prévention médicale adaptée, peut parfois influencer la façon dont une situation médicale ou maladie évolue.",
        "C'est l'envie de mieux comprendre ces mécanismes qui m'a conduit vers l'hypnothérapie.",
        "Au départ, il s'agissait d'un intérêt amateur. J'ai ensuite suivi une formation spécialisée et approfondi ma pratique. Peu à peu, j'ai commencé à intégrer ces connaissances à mes consultations. Mon objectif était de compléter le raisonnement médical par une meilleure compréhension des réactions psychologiques et émotionnelles.",
        "Plus j'avançais dans ce domaine, plus j'en voyais les possibilités.",
        "Pour moi, l'hypnothérapie n'est pas une alternative à la médecine. C'est un outil complémentaire qui peut être utile dans certaines situations. Elle peut aider à explorer des réactions qui persistent, à travailler sur certains schémas émotionnels ou comportementaux et à réduire l'anxiété.",
        "C'est ainsi que mon approche actuelle s'est construite. Je ne veux pas voir une personne comme une succession d'organes ou de symptômes. Je cherche à comprendre comment les différents éléments de sa situation peuvent être liés.",
      ]},
      { title: "Mon travail aujourd'hui", paragraphs: [
        "Aujourd'hui, je travaille en Libye dans le cadre d'une mission médicale internationale, au sein d'un centre spécialisé en cardiologie et chirurgie cardiaque. La cardiologie clinique reste une partie importante de ma vie professionnelle.",
        "En parallèle, je développe mon activité de consultation en hypnothérapie et en médecine intégrative. Je consulte en présentiel et en ligne. Mon travail concerne notamment l'anxiété, les peurs, certaines réactions physiques, ainsi que des difficultés émotionnelles ou comportementales pouvant avoir un impact sur le bien-être et la qualité de vie.",
      ]},
      { title: "Ce en quoi je crois", paragraphs: [
        "Je crois qu'une personne est bien plus qu'un diagnostic ou une liste de symptômes. Chaque personne a sa propre histoire. Des symptômes similaires peuvent avoir des causes différentes. Les expériences vécues, les émotions et les circonstances de vie peuvent aussi influencer la façon dont une personne se sent.",
        "Mon rôle n'est pas d'imposer une explication toute faite ni de promettre une solution universelle. Je cherche d'abord à écouter et à comprendre la situation. Nous pouvons ensuite réfléchir ensemble à la suite la plus adaptée.",
        "Mon parcours m'a conduit des amphithéâtres universitaires aux services de cardiologie, aux soins intensifs, aux urgences et aux salles de cathétérisme. J'ai également eu la chance de travailler dans différents pays et dans des contextes médicaux très différents. Toutes ces expériences ont progressivement façonné ma manière de travailler aujourd'hui.",
      ], emphasis: "Beaucoup de choses peuvent changer lorsque l'on apprend à s'arrêter au bon moment, à mieux s'écouter et à faire un premier pas vers la vie que l'on souhaite réellement vivre." },
    ],
    captions: { childhood: "Minsk, 1996", university: "À l'université", graduation: "Diplôme de l'université de médecine", endovascular: "Travail en salle de cathétérisme", certificate: "Le début de mon activité sous une nouvelle forme, 2025", togo: "Travail en Afrique de l'Ouest, Togo", minsk: "Travail au centre de cardiologie, Minsk", libya: "Consultation", nightShift: "L'une des gardes difficiles en unité de soins intensifs, Libye, 2025", team: "Notre équipe de cardiologues et de chirurgiens cardiaques" },
  },
};