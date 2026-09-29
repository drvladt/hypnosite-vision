import type { Locale } from "./locales";

export type HypnotherapySection = {
  title?: string;
  /** Italic lines rendered before the paragraphs (e.g. a continuation of the previous section's lead-in). */
  openingItalics?: string[];
  paragraphs?: string[];
  /** Italic lines rendered after the paragraphs (inner thoughts, beliefs, questions). */
  italicLines?: string[];
  /** Gold-bordered pull quote at the end of the section. */
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
    title: "What is hypnotherapy?",
    lead:
      "When people hear the word “hypnosis”, they often imagine a swinging pendulum, sleep, or someone losing control. In reality, hypnotherapy is very different.",
    sections: [
      {
        title: "You remain aware and in control",
        paragraphs: [
          "Hypnotherapy is not about putting you to sleep or taking control of your mind.",
          "During a session, you remain aware of what is happening. You hear me, you can speak, make your own decisions, open your eyes, and stop the session at any time.",
          "In my work, I mainly use a non-directive, Ericksonian approach. This means I do not tell you what to think or give you ready-made answers. Instead, I use questions, imagery, and focused attention to help you explore your own thoughts, emotions, physical sensations, and reactions.",
        ],
        emphasis:
          "You remain aware of what is happening and in control throughout the session.",
      },
      {
        title: "What does hypnosis feel like?",
        paragraphs: [
          "Think of a moment when you were completely absorbed in a book, a film, music, or your own thoughts. You were still awake and aware, but your attention was focused so deeply that everything around you seemed less important for a while.",
          "Hypnosis can feel somewhat similar.",
          "Your attention becomes more focused, making it easier to notice thoughts, emotions, memories, images, or physical sensations that may normally pass unnoticed.",
          "I do not control what happens in your mind. My role is to guide your attention, ask questions, and help you explore what comes up.",
          "This focused state is often called a hypnotic state or trance.",
        ],
      },
      {
        title: "Why can past experiences still affect us today?",
        paragraphs: [
          "Imagine a child standing at the blackboard.",
          "He makes a mistake. The teacher responds harshly. Some classmates laugh. He feels embarrassed and afraid of making another mistake.",
          "Years pass. He may barely remember that day.",
          "Now imagine him as an adult preparing for an important presentation. He knows the material. He is well prepared. But as the presentation gets closer, something changes.",
          "His heart starts racing. His stomach feels unsettled. He becomes increasingly anxious and one thought keeps coming back:",
        ],
      },
      {
        openingItalics: ["“What if I make a mistake and everyone judges me?”"],
        paragraphs: [
          "There is no classroom anymore. No teacher. No classmates.",
          "But something about the situation feels familiar.",
          "The circumstances have changed, yet a similar emotional and physical reaction may still appear.",
          "This does not mean that every reaction we have today comes from one childhood event. Usually, our patterns develop through many experiences over time. But some experiences can influence what we expect, what we fear, and what we come to believe about ourselves.",
        ],
      },
      {
        title: "Working with earlier experiences",
        paragraphs: [
          "This is where hypnotherapy may sometimes help.",
          "When appropriate, we can explore earlier experiences that seem connected with a reaction that is still causing difficulties today.",
          "The goal is not simply to find an old memory. What matters is understanding how that experience may still affect you today.",
          "Perhaps, somewhere along the way, a person learned:",
        ],
      },
      {
        openingItalics: [
          "“If I make a mistake, I will be humiliated.”",
          "“I am not good enough.”",
          "“I must always get things right.”",
          "“If I disappoint people, they may reject me.”",
        ],
        paragraphs: [
          "Years later, you may logically know that these beliefs are not necessarily true. And yet your emotions — and sometimes your body — may still react as if they were.",
          "Hypnotherapy gives us a way to explore that difference between what you know and how you still react.",
        ],
      },
      {
        title: "The goal is not to recover a perfect memory",
        paragraphs: [
          "Memory is not a video recording.",
          "What comes up during hypnosis — an image, feeling, memory, or association — should not automatically be treated as an exact record of what happened in the past.",
          "The goal is not to prove exactly what happened years ago.",
          "What matters more is understanding what the experience means to you today:",
          "What did I learn from it? What did I start believing about myself? Does that belief still influence the way I react today?",
        ],
        emphasis:
          "We cannot change what happened in the past. But we can change the way we relate to it today.",
      },
      {
        title: "More freedom in the present",
        paragraphs: [
          "These patterns do not always look like obvious fears.",
          "Maybe you keep postponing something you really want to do.",
          "Maybe you stay silent when you want to say what you need.",
          "Maybe you avoid opportunities because you are afraid of failing.",
          "Or perhaps you put enormous pressure on yourself to do everything perfectly.",
          "You may even understand why you do it — and still find yourself repeating the same pattern.",
          "Hypnotherapy can help explore the emotions, beliefs, and automatic reactions behind these patterns.",
          "The goal is not to erase your past or change who you are. It is to understand why certain situations still affect you the way they do — and to create more freedom in how you respond to them today.",
        ],
        emphasis:
          "One of the goals of hypnotherapy is simple: to understand what drives your reactions, so that old patterns do not have to keep making your decisions for you.",
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
