import type { Locale } from "./locales";

export type HypnotherapySection = {
  title?: string;
  paragraphs?: string[];
  emphasis?: string;
};

export type HypnotherapyContent = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: HypnotherapySection[];
};

export const hypnotherapyContent: Record<Locale, HypnotherapyContent> = {
  ru: {
    eyebrow: "Метод",
    title: "Что такое гипнотерапия",
    lead:
      "Когда люди слышат слово «гипноз», многие представляют маятник перед глазами, сон и человека, который внезапно теряет контроль над собой. Этот образ скорее связан со сценическими представлениями, чем с современной медициной.",
    sections: [
      {
        paragraphs: [
          "В клинической практике применяют преимущественно недирективный, или эриксоновский, гипноз. Выбор техники зависит от ситуации и цели терапии. Во время такой работы специалист не даёт готовых ответов. Он задаёт вопросы, использует образы и помогает человеку лучше понять собственные чувства, реакции и привычные способы мыслить. Человек остаётся в сознании и слышит специалиста. Он может делиться тем, что возникает во время сеанса, без необходимости в обязательном порядке следовать заданному сценарию. Если захочет, человек в любой момент может открыть глаза и остановить сеанс.",
          "Сам процесс во многом можно сравнить с медитативным состоянием. Человек при поддержке специалиста направляет внимание внутрь себя и сосредоточивается на мыслях, ощущениях и образах. Специалист не управляет им извне: он помогает удерживать внимание, задаёт вопросы и сопровождает человека в исследовании собственных реакций. Состояние такой сосредоточенности или фокуса на определенных чувствах иногда называют в немедицинских источниках – трансом.",
        ],
        emphasis:
          "Состояние такой сосредоточенности или фокуса на определенных чувствах иногда называют в немедицинских источниках – трансом.",
      },
      {
        paragraphs: [
          "Простой пример… Представим ребенка которого очередной раз вызвали к доске. После неправильно решенной задачи, учитель резко ответил, а одноклассники засмеялись. В этот момент он впервые почувствовал чувство стыда и страха.",
          "Проходят годы, и человек может уже даже не помнить это событие. Теперь это взрослый человек, который готовится к важному выступлению. Он знает, что может справиться, но ещё до выступления он необоснованно переживает, боится, утром перед выступлением его даже тошнит и вырывает… В нынешней ситуации нет ни школьной доски, ни смеющегося класса. Однако есть знакомый страх ошибиться на глазах у других — и телесная реакция в виде рвоты которая вызвана именно этим страхом.",
        ],
      },
      {
        paragraphs: [
          "Во время гипнотерапевтической сессии человек может при поддержке специалиста мысленно вернуться к тому школьному дню и вновь обратиться к чувствам, которые тогда пережил. Теперь человек может посмотреть на случившееся с позиции взрослого и увидеть, что ошибка не делает его неспособным, а чужой смех не определяет его ценность. Во время сессии этот старый вывод может утратить прежнюю силу. Тогда перед выступлением человек всё ещё может волноваться, но уже не обязательно чувствует себя как тот ребёнок, который снова стоит у доски.",
          "Такие процессы происходит в многих моментах наши жизни и вызывают различные психосоматические проявления. Регрессивные техники позволяют найти корень этих процессов, и изменить установки и выводы, принятые в те моменты. При этом возникающие во время сеанса образы нельзя считать точной записью прошлого. Для терапии важнее понять, какое значение человек придаёт своему опыту сегодня: какой вывод он сделал о себе и помогает ли ему этот вывод теперь.",
        ],
        emphasis:
          "Для терапии важнее понять, какое значение человек придаёт своему опыту сегодня: какой вывод он сделал о себе и помогает ли ему этот вывод теперь.",
      },
      {
        paragraphs: [
          "Прошедшие события нельзя изменить. Но мысль «я всегда должен быть безупречным» можно научиться замечать, проверять и постепенно перестать принимать за единственную правду о себе. Когда меняется отношение к себе и своим переживаниям, появляется возможность иначе реагировать и в настоящем.",
          "Гипнотерапия может помочь человеку не только разобраться с реакциями, которые мешают ему сегодня, но и увидеть, сколько решений он привык принимать из страха и неуверенности в себе. За привычкой откладывать важный шаг, молчать о своих потребностях или отказываться от нового и неизвестного иногда стоит давний страх ошибиться, получить отказ или не оправдать ожиданий. Когда человек начинает понимать, откуда берётся этот страх, и по-новому относиться к прежнему опыту, ему становится легче действовать иначе. Он может решиться на важные шаги и реализовать то, что давно хотел, но постоянно откладывал. Такие шаги постепенно меняют не отдельную реакцию, а саму жизнь, в которой у человека появляется больше свободы выбирать.",
        ],
      },
      {
        emphasis:
          "В этом одна из целей гипнотерапии — помочь человеку лучше понять свои реакции и получить больше свободы в собственных решениях.",
      },
    ],
  },
  en: {
    eyebrow: "Method",
    title: "What is hypnotherapy",
    lead:
      "When people hear the word “hypnosis”, many picture a swinging pendulum, sleep and a person who suddenly loses control. This image owes more to stage performance than to modern medicine.",
    sections: [
      {
        paragraphs: [
          "In clinical practice, predominantly non-directive, or Ericksonian, hypnosis is used. The choice of technique depends on the situation and the goal of therapy. During such work, the therapist does not give ready-made answers. They ask questions, use imagery and help the person better understand their own feelings, reactions and habitual ways of thinking. The person remains conscious and hears the therapist. They can share what arises during the session without having to follow a set script. If they wish, the person can open their eyes and stop the session at any moment.",
          "The process can largely be compared to a meditative state. With the therapist's support, the person directs attention inward and concentrates on thoughts, sensations and images. The therapist does not control them from outside: they help hold attention, ask questions and accompany the person in exploring their own reactions. This state of concentration or focus on particular feelings is sometimes called — in non-medical sources — a trance.",
        ],
        emphasis:
          "This state of concentration or focus on particular feelings is sometimes called — in non-medical sources — a trance.",
      },
      {
        paragraphs: [
          "A simple example… Imagine a child called to the blackboard once again. After solving a problem incorrectly, the teacher responds sharply and classmates laugh. In that moment, the child feels shame and fear for the first time.",
          "Years pass, and the person may no longer even remember the event. Now it is an adult preparing for an important presentation. They know they can manage, but even before the presentation they feel ungrounded anxiety and fear; that morning they are even nauseous and sick. There is no blackboard, no laughing class in the present situation. Yet there is a familiar fear of making a mistake in front of others — and a bodily reaction in the form of vomiting caused precisely by that fear.",
        ],
      },
      {
        paragraphs: [
          "During a hypnotherapy session, the person can — with the therapist's support — mentally return to that school day and turn once again to the feelings they experienced then. Now the person can look at what happened from an adult's perspective and see that a mistake does not make them incapable, and another's laughter does not define their worth. During the session, this old conclusion can lose its former power. Before the presentation, the person may still feel nervous, but no longer necessarily feels like that child standing at the blackboard again.",
          "Such processes occur in many moments of our lives and give rise to various psychosomatic manifestations. Regressive techniques make it possible to find the root of these processes and change the attitudes and conclusions adopted at those moments. At the same time, the images that arise during the session cannot be taken as an exact record of the past. For therapy, what matters more is understanding the significance the person gives to their experience today: what conclusion they drew about themselves and whether that conclusion still helps them now.",
        ],
        emphasis:
          "For therapy, what matters more is understanding the significance the person gives to their experience today: what conclusion they drew about themselves and whether that conclusion still helps them now.",
      },
      {
        paragraphs: [
          "Past events cannot be changed. But the thought “I must always be flawless” can be learned to be noticed, tested and gradually no longer taken as the only truth about oneself. When the relationship to oneself and to one's experiences changes, the possibility arises to react differently in the present as well.",
          "Hypnotherapy can help a person not only make sense of the reactions that hinder them today, but also see how many decisions they have grown accustomed to making out of fear and self-doubt. Behind the habit of postponing an important step, staying silent about one's needs, or turning away from the new and unfamiliar, there sometimes lies an old fear of making a mistake, of being rejected, or of failing to meet expectations. When a person begins to understand where this fear comes from and relates to past experience in a new way, it becomes easier to act differently. They may dare to take important steps and realise what they have long wanted but kept putting off. Such steps gradually change not a single reaction, but life itself — a life in which the person gains more freedom to choose.",
        ],
      },
      {
        emphasis:
          "This is one of the goals of hypnotherapy — to help a person better understand their reactions and gain more freedom in their own decisions.",
      },
    ],
  },
  fr: {
    eyebrow: "Méthode",
    title: "Qu'est-ce que l'hypnothérapie",
    lead:
      "Quand on entend le mot « hypnose », beaucoup s'imaginent un pendule devant les yeux, le sommeil et une personne qui perd soudain le contrôle de soi. Cette image tient davantage du spectacle de scène que de la médecine moderne.",
    sections: [
      {
        paragraphs: [
          "En pratique clinique, on utilise principalement l'hypnose non directive, ou ericksonienne. Le choix de la technique dépend de la situation et de l'objectif de la thérapie. Lors de ce travail, le thérapeute ne donne pas de réponses toutes faites. Il pose des questions, utilise des images et aide la personne à mieux comprendre ses propres sentiments, ses réactions et ses manières habituelles de penser. La personne reste consciente et entend le thérapeute. Elle peut partager ce qui surgit pendant la séance, sans avoir à suivre un scénario défini. Si elle le souhaite, la personne peut ouvrir les yeux et interrompre la séance à tout moment.",
          "Le processus ressemble par bien des aspects à un état méditatif. Avec l'aide du thérapeute, la personne dirige son attention vers l'intérieur et se concentre sur ses pensées, ses sensations et ses images. Le thérapeute ne la dirige pas de l'extérieur : il aide à maintenir l'attention, pose des questions et accompagne la personne dans l'exploration de ses propres réactions. Cet état de concentration ou de focalisation sur certains sentiments est parfois appelé — dans les sources non médicales — une transe.",
        ],
        emphasis:
          "Cet état de concentration ou de focalisation sur certains sentiments est parfois appelé — dans les sources non médicales — une transe.",
      },
      {
        paragraphs: [
          "Un exemple simple… Imaginons un enfant une fois de plus appelé au tableau. Après avoir mal résolu un exercice, le professeur répond sèchement et les camarades rient. À ce moment, l'enfant ressent pour la première fois la honte et la peur.",
          "Les années passent, et la personne peut ne même plus se souvenir de l'événement. C'est désormais un adulte qui se prépare à une présentation importante. Il sait qu'il peut y arriver, mais avant même la présentation, il éprouve une anxiété injustifiée, de la peur ; le matin de la présentation, il a même la nausée et vomit. Dans la situation présente, il n'y a ni tableau, ni classe rieuse. Pourtant, il y a la peur familière de se tromper sous les yeux des autres — et une réaction corporelle sous forme de vomissements causée précisément par cette peur.",
        ],
      },
      {
        paragraphs: [
          "Lors d'une séance d'hypnothérapie, la personne peut, avec l'aide du thérapeute, revenir mentalement à cette journée d'école et se tourner à nouveau vers les sentiments qu'elle a alors éprouvés. Désormais, la personne peut regarder ce qui s'est passé avec le regard d'un adulte et voir que l'erreur ne la rend pas incapable, et que le rire des autres ne définit pas sa valeur. Pendant la séance, cette ancienne conclusion peut perdre sa force d'autrefois. Avant la présentation, la personne peut encore ressentir de l'appréhension, mais sans se sentir nécessairement comme cet enfant qui se tient à nouveau au tableau.",
          "De tels processus se produisent à de nombreux moments de nos vies et donnent lieu à diverses manifestations psychosomatiques. Les techniques régressives permettent de trouver la racine de ces processus et de modifier les attitudes et les conclusions adoptées en ces moments. Toutefois, les images qui surgissent pendant la séance ne peuvent être considérées comme un enregistrement exact du passé. Pour la thérapie, ce qui importe davantage, c'est de comprendre la signification que la personne donne aujourd'hui à son expérience : quelle conclusion elle a tirée sur elle-même et si cette conclusion l'aide encore maintenant.",
        ],
        emphasis:
          "Pour la thérapie, ce qui importe davantage, c'est de comprendre la signification que la personne donne aujourd'hui à son expérience : quelle conclusion elle a tirée sur elle-même et si cette conclusion l'aide encore maintenant.",
      },
      {
        paragraphs: [
          "Les événements passés ne peuvent être modifiés. Mais la pensée « je dois toujours être irréprochable » peut s'apprendre à être remarquée, vérifiée et cesser progressivement d'être prise pour la seule vérité sur soi. Quand le rapport à soi-même et à ses propres vécus change, la possibilité apparaît de réagir autrement dans le présent également.",
          "L'hypnothérapie peut aider une personne non seulement à comprendre les réactions qui la gênent aujourd'hui, mais aussi à voir combien de décisions elle a pris l'habitude de prendre par peur et par manque de confiance en soi. Derrière l'habitude de repousser une étape importante, de se taire sur ses besoins, ou de refuser le nouveau et l'inconnu, se cache parfois une ancienne peur de se tromper, d'essuyer un refus, ou de ne pas répondre aux attentes. Quand la personne commence à comprendre d'où vient cette peur et aborde son expérience passée d'une manière nouvelle, il lui devient plus facile d'agir autrement. Elle peut se risquer à des étapes importantes et réaliser ce qu'elle souhaitait depuis longtemps mais qu'elle repoussait sans cesse. Ces étapes modifient peu à peu non pas une réaction isolée, mais la vie elle-même — une vie dans laquelle la personne gagne davantage de liberté de choix.",
        ],
      },
      {
        emphasis:
          "C'est l'un des objectifs de l'hypnothérapie — aider la personne à mieux comprendre ses réactions et à gagner davantage de liberté dans ses propres décisions.",
      },
    ],
  },
};
