import type { Locale } from "./locales";

export type HypnotherapySection = {
  title?: string;
  /** Italic lines rendered before the paragraphs (e.g. a continuation of the previous section's lead-in). */
  openingItalics?: string[];
  paragraphs?: string[];
  /** Highlighted question lines rendered after the paragraphs (gold left border, indented). */
  highlightLines?: string[];
  /** Paragraphs rendered after the highlighted lines. */
  paragraphsAfter?: string[];
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
    title: "Qu'est-ce que l'hypnothérapie ?",
    lead:
      "Quand on entend le mot « hypnose », on imagine souvent un pendule, un état de trance ou une personne qui perd le contrôle. En réalité, l'hypnothérapie moderne est très différente.",
    sections: [
      {
        title: "Vous restez conscient et gardez le contrôle",
        paragraphs: [
          "L'hypnothérapie ne consiste pas à vous endormir ni à prendre le contrôle de votre esprit.",
          "Pendant une séance, vous restez conscient de ce qui se passe. Vous m'entendez, vous pouvez parler, faire vos propres choix, ouvrir les yeux et arrêter la séance à tout moment.",
          "Dans ma pratique, j'utilise principalement une approche non directive et ericksonienne.",
          "Je ne vous dis pas quoi penser et je ne vous donne pas de réponses toutes faites. J'utilise plutôt des questions, et la focalisation de l'attention pour vous aider à explorer vos pensées, vos émotions, vos sensations physiques et vos réactions.",
        ],
        emphasis:
          "Vous restez conscient de ce qui se passe et gardez le contrôle tout au long de la séance.",
      },
      {
        title: "Que ressent-on pendant l'hypnose ?",
        paragraphs: [
          "Pensez à un moment où vous étiez complètement absorbé par un livre, un film, de la musique ou simplement par vos pensées.",
          "Vous étiez toujours éveillé et conscient. Mais votre attention était tellement concentrée que ce qui se passait autour de vous semblait moins important pendant un moment.",
          "L'hypnose peut ressembler à cela.",
          "Votre attention devient plus focalisée. Il peut alors être plus facile de remarquer certaines pensées, émotions, images, souvenirs ou sensations physiques qui passent habituellement inaperçus.",
          "Je ne contrôle pas ce qui se passe dans votre esprit. Mon rôle est de guider votre attention, et de vous accompagner dans ce qui apparaît pendant la séance.",
          "Cet état d'attention particulièrement focalisée est souvent appelé état hypnotique ou transe.",
        ],
      },
      {
        title: "Pourquoi certaines expériences du passé peuvent-elles encore nous influencer ?",
        paragraphs: [
          "Imaginez un enfant devant le tableau a l'ecole.",
          "Il fait une erreur. Le professeur réagit sèchement. Quelques camarades rient. L'enfant se sent honteux et commence à avoir peur de se tromper à nouveau.",
          "Les années passent... A un moment, il se souvient peut-être à peine de cette journée.",
          "Maintenant, imaginez cette même personne à l'âge adulte. Elle doit faire une présentation importante ou participer a une conference.",
          "Elle connaît son sujet. Elle est bien préparée.",
          "Pourtant, à mesure que la la conference approche, l'anxiété augmente. Son cœur s'accélère. Son ventre se noue. Elle peut même avoir des nausées ou vomissements.",
          "Dans la tète, une pensée revient a tout moment :",
        ],
        italicLines: ["« Et si je me trompe et que tout le monde me juge ? »"],
      },
      {
        paragraphs: [
          "Il n'y a plus de tableau. Plus de professeur. Plus de camarades qui rient.",
          "Mais quelque chose dans cette situation lui semble familier.",
          "Les circonstances ont changé. Pourtant, une réaction émotionnelle et physique similaire continue d'apparaître.",
          "Cela ne signifie pas que toutes nos réactions actuelles viennent d'un seul événement de l'enfance.",
          "Nos réactions se construisent généralement à travers de nombreuses expériences. Mais certaines d'entre elles peuvent influencer ce que nous attendons, ce que nous craignons et ce que nous finissons par croire sur nous-mêmes.",
        ],
      },
      {
        title: "Travailler avec des expériences passées",
        paragraphs: [
          "C'est là que l'hypnothérapie peut parfois être utile.",
          "Lorsque cela est pertinent, nous pouvons explorer certaines expériences passées qui semblent liées à une réaction encore présente aujourd'hui.",
          "Le but n'est pas simplement de retrouver un ancien souvenir.",
          "Ce qui compte, c'est de comprendre comment cette expérience peut encore vous influencer aujourd'hui.",
          "Avec le temps, une personne peut par exemple avoir appris :",
        ],
        italicLines: [
          "« Si je fais une erreur, je serai humilié. »",
          "« Je ne suis pas assez bien. »",
          "« Je dois toujours réussir. »",
          "« Si je déçois les autres, ils vont me rejeter. »",
        ],
      },
      {
        paragraphs: [
          "À l'âge adulte, vous pouvez parfaitement comprendre que ces idées ne sont pas forcément vraies.",
          "Et pourtant, vos émotions, et parfois votre corps, peuvent encore réagir comme si elles l'étaient.",
          "L'hypnothérapie permet d'explorer cet écart entre ce que vous savez et la façon dont vous réagissez encore.",
        ],
      },
      {
        title: "Il ne s'agit pas de retrouver un souvenir parfait",
        paragraphs: [
          "La mémoire n'est pas un enregistrement vidéo.",
          "Une image, une émotion, un souvenir ou une association qui apparaît pendant l'hypnose ne doit pas être considéré automatiquement comme une reproduction exacte du passé.",
          "Le but n'est pas de prouver exactement ce qui s'est passé il y a plusieurs années.",
          "Il est plutôt important de comprendre ce que cette expérience représente pour vous aujourd'hui.",
        ],
        italicLines: [
          "Qu'est-ce que j'en ai appris ?",
          "Qu'ai-je commencé à croire sur moi-même ?",
          "Est-ce que cette croyance influence encore mes réactions aujourd'hui ?",
        ],
        emphasis:
          "Nous ne pouvons pas changer le passé. Mais nous pouvons changer la façon dont une ancienne expérience continue à influencer le présent.",
      },
      {
        title: "Plus de liberté dans le présent",
        paragraphs: [
          "Ces schémas ne prennent pas toujours la forme d'une peur évidente.",
        ],
        highlightLines: [
          "Peut-être repoussez-vous sans cesse quelque chose qui compte vraiment pour vous.",
          "Peut-être restez-vous silencieux alors que vous aimeriez dire ce dont vous avez besoin.",
          "Peut-être évitez-vous certaines opportunités par peur d'échouer.",
          "Ou peut-être vous imposez-vous une pression constante pour tout faire parfaitement.",
          "Vous pouvez même comprendre pourquoi vous agissez ainsi et continuer malgré tout à répéter le même schéma.",
        ],
        paragraphsAfter: [
          "L'hypnothérapie peut aider à explorer les émotions, les croyances et les réactions automatiques qui se trouvent derrière ces comportements.",
          "Le but n'est pas d'effacer votre passé ni de changer qui vous êtes.",
          "Il s'agit de mieux comprendre pourquoi certaines situations vous affectent encore aujourd'hui et de créer davantage de liberté dans votre façon d'y réagir.",
        ],
        emphasis:
          "L'un des objectifs de l'hypnothérapie est simple : mieux comprendre ce qui guide vos réactions afin que d'anciens schémas ne continuent pas à décider à votre place.",
      },
    ],
  },
};
