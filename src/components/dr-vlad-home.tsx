import { useState } from "react";
import { Activity, ArrowDown, ArrowRight, Check, ChevronDown, Menu, X } from "lucide-react";

import bannerAsset from "@/assets/banner.png.asset.json";
import portraitAsset from "@/assets/fotoMe.png.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";
import { Button } from "@/components/ui/button";

const concerns = [
  "Обследования не выявили серьёзных нарушений, но боль или дискомфорт в груди, сердцебиение и ощущение перебоев продолжаются или периодически возвращаются.",
  "Сердцебиение, дискомфорт в груди или показатели давления заметно меняются на фоне стресса, конфликтов, эмоционального напряжения, переутомления или недосыпа.",
  "Лечение подобрано, и вы соблюдаете рекомендации, но устойчивого улучшения достичь не удается: самочувствие остаётся нестабильным или улучшилось не настолько, насколько вы ожидали.",
  "После установленного диагноза появился постоянный страх осложнений, инфаркта, нарушения ритма, ухудшения заболевания или внезапной смерти.",
  "Есть ощущение, что разные специалисты рассматривают отдельные симптомы и показатели, но никто не помогает собрать общую картину и понять возможную взаимосвязь физического и психологического состояния.",
  "Из-за страха за сердце стало сложно заниматься спортом, путешествовать, летать, оставаться одному или находиться далеко от медицинской помощи.",
];

const outcomes = [
  "необходимо ли вам дообследование;",
  "какие психоэмоциональные факторы могут поддерживать ваше плохое самочувствие;",
  "есть ли основания для психоэмоциональной работы;",
  "может ли вам быть полезна гипнотерапия;",
  "какой следующий шаг целесообразно сделать.",
];

const suitableFor = [
  "взрослым от 18 лет с плановой и относительно стабильной ситуацией;",
  "пациентам, которые уже прошли обследования или имеют установленный диагноз, но не получили ожидаемого улучшения самочувствия;",
  "людям, которые замечают, что стресс, тревога или внутреннее напряжение негативно отражаются на физическом состоянии;",
  "людям с навязчивыми мыслями, страхами, внутренними ограничениями, телесными и психосоматическими проявлениями;",
  "тем, кто хочет понять, может ли клиническая гипнотерапия быть полезна именно в его конкретной ситуации.",
];

const steps = [
  ["Вы заполняете преконсультативную анкету", "В анкете вы указываете, что именно вас беспокоит, когда появились симптомы, какие обследования и лечение уже проводились и чего вы хотели бы добиться в результате работы."],
  ["Я лично изучаю информацию", "Если ваш запрос находится в области моей компетенции и консультация может быть вам полезна, мой ассистент свяжется с вами и согласует удобные дату и время."],
  ["Вы предоставляете медицинские документы", "При наличии можно заранее отправить последние медицинские заключения, результаты обследований и список принимаемых препаратов. Это позволит начать консультацию с более подготовленного и предметного разговора."],
  ["Что будет на консультации", "Консультация проходит онлайн и продолжается до 60 минут. Встреча полностью посвящена подробному анализу вашей ситуации, выявлению возможных взаимосвязей между телесными проявлениями, психологическими факторами и привычными моделями поведения, а также определению дальнейшей стратегии."],
];

const faq = [
  ["Нужно ли проходить полное обследование до консультации?", "Нет. Вы можете заполнить анкету с теми данными, которые у вас уже есть. После изучения информации и проведения консультации врач при необходимости может рекомендовать пройти дополнительные клинически значимые обследования."],
  ["Можно ли обратиться, если у меня уже установлен сердечно-сосудистый диагноз?", "Да. Наличие диагноза не исключает влияния тревоги, стресса, нарушений сна, образа жизни и других факторов на самочувствие. Интегративная работа проводится в дополнение к необходимому кардиологическому наблюдению и назначенному лечению."],
  ["Означает ли интегративный подход отказ от лекарств?", "Нет. Dr Vlad не предлагает самостоятельно отменять назначенные препараты или заменять необходимое медицинское лечение гипнотерапией либо психологическими методами. Задача интегративного подхода — объединить необходимые методы доказательной медицины и дополнительные психотерапевтические методы в рамках единого обоснованного плана."],
  ["Всем ли подходит гипнотерапия?", "Нет. Решение принимается индивидуально после изучения симптомов, истории болезни, целей и возможных ограничений. Если гипнотерапия не подходит, Dr Vlad объяснит, какие другие действия или направления помощи целесообразно рассмотреть."],
  ["Проводится ли гипнотерапия во время первичной консультации?", "Нет. Первичная консультация предназначена для подробного разбора ситуации и определения дальнейших действий. Если гипнотерапия может быть полезна, Dr Vlad отдельно объяснит, какие задачи предполагается решать с её помощью и как может быть организована дальнейшая работа."],
  ["Потеряю ли я контроль во время гипнотерапии?", "Нет. Недирективный клинический гипноз не предполагает потери контроля над собой или передачи контроля другому человеку. Это состояние сфокусированного внимания, при котором человек осознаёт происходящее, слышит специалиста, сохраняет возможность принимать решения и может прекратить сеанс в любой момент. В зависимости от цели работы внимание может быть направлено на телесные ощущения, образы, воспоминания или эмоциональные реакции."],
  ["Что будет, если моя ситуация не соответствует вашей специализации?", "Dr Vlad сообщит об этом и, насколько позволяет имеющаяся информация, порекомендует дальнейший маршрут: дополнительное обследование, очную медицинскую помощь или обращение к другому профильному специалисту."],
  ["Какие документы стоит подготовить?", "При наличии подготовьте медицинские заключения, результаты обследований и анализов за последний год, а также список принимаемых препаратов с указанием дозировок."],
  ["Сколько стоит дальнейшая работа?", "Первичная консультация проводится бесплатно. Если дальнейшая индивидуальная работа показана, Dr Vlad объяснит её рекомендуемый формат, предполагаемую продолжительность и стоимость. Решение о продолжении вы принимаете самостоятельно."],
];

function ConsultationButton({ label = "Хочу разобрать мой случай", outline = false }: { label?: string; outline?: boolean }) {
  return (
    <Button asChild size="lg" variant={outline ? "outline" : "default"} className="h-12 rounded-full px-6 text-sm shadow-none sm:px-8">
      <a href="#consultation">{label}<ArrowDown aria-hidden="true" /></a>
    </Button>
  );
}

export function DrVladHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Dr Vlad — на начало страницы">
            <img src={logoAsset.url} alt="" className="size-11 rounded-full object-cover" />
            <span className="font-display text-lg font-medium">Dr Vlad T</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm lg:flex" aria-label="Основная навигация">
            <a className="nav-link" href="#approach">Мой подход</a>
            <a className="nav-link" href="#concerns">С чем я работаю</a>
            <a className="nav-link" href="#about">Обо мне</a>
            <a className="nav-link" href="#hypnotherapy">Гипнотерапия</a>
            <a className="nav-link" href="#research">Исследование</a>
            <ConsultationButton label="Записаться" outline />
          </nav>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Мобильная навигация">
          <div className="mx-auto grid max-w-7xl gap-1">
            {[['Мой подход','#approach'],['С чем я работаю','#concerns'],['Обо мне','#about'],['Гипнотерапия','#hypnotherapy'],['Исследование','#research']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-border/60 py-3 text-sm">{label}</a>)}
            <div className="pt-4"><ConsultationButton /></div>
          </div>
        </nav>}
      </header>

      <main id="top">
        <section className="relative border-b border-border py-14 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
              <div>
                <p className="eyebrow">Интегративная медицина · Гипнотерапия</p>
                <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.15rem,5vw,4.65rem)] font-medium leading-[1.08]">Боль в груди, сердцебиение, перебои или скачки давления продолжают беспокоить — хотя вы уже прошли обследования и выполняете рекомендации врачей?</h1>
              </div>
              <div className="border-l border-gold/40 pl-6">
                <p className="leading-7 text-foreground/75">Подход Dr Vlad основан на принципах интегративной медицины. Его задача — не ограничиваться устранением отдельного симптома, а разобраться, какие медицинские, психоэмоциональные и поведенческие факторы могли привести к проблеме или продолжают её поддерживать.</p>
                <div className="mt-7"><ConsultationButton /></div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-secondary">
              <img src={portraitAsset.url} alt="Dr Vlad — врач-кардиолог и гипнотерапевт" className="aspect-[4/3] w-full object-cover object-center md:aspect-[16/7]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/75 to-transparent px-5 pb-5 pt-20 text-primary-foreground md:px-8 md:pb-7">
                <p className="max-w-4xl text-sm leading-6 md:text-base">Работа с тревогой за здоровье, навязчивыми мыслями, страхами и телесными реакциями — соединяя врачебный подход с методами недирективной гипнотерапии, когда они действительно показаны.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span>Врач-кардиолог</span><span>В медицине с 2019 года</span><span>Международная практика</span><span>Подготовка по клиническому гипнозу</span>
            </div>
          </div>
        </section>

        <section id="concerns" className="section-space scroll-mt-24 bg-secondary/35">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">
              <div><p className="eyebrow">С чем обращаются</p><h2 className="section-title mt-4">Возможно, вы узнаете здесь себя</h2></div>
              <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
                {concerns.map((text, index) => <article key={text} className="min-h-52 bg-background p-7 md:p-8"><span className="font-display text-sm text-gold">0{index + 1}</span><p className="mt-8 leading-7 text-foreground/80">{text}</p></article>)}
              </div>
            </div>
            <div className="mt-12 border-t border-border pt-10 lg:ml-[calc(27.5%+2.5rem)]">
              <p className="max-w-4xl text-lg leading-8">Если вы узнали себя хотя бы в одной из этих ситуаций, на ваше самочувствие влияет не только физическое состояние. На первичной консультации мы разберём, есть ли дополнительные факторы, с которыми можно и нужно работать.</p>
              <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center"><ConsultationButton /><span className="text-sm text-muted-foreground">Бесплатная консультация · Онлайн · До 60 минут · Конфиденциально</span></div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <div><p className="eyebrow">Видеть общую картину</p><h2 className="section-title mt-4">Почему важно видеть не только симптом</h2><p className="mt-7 max-w-xl leading-7 text-foreground/75">Современная медицина постепенно переходит от изолированного лечения отдельных симптомов или проявлений заболеваний к более целостной, ориентированной на человека модели помощи.</p><p className="mt-5 max-w-xl leading-7 text-foreground/75">Медикаментозная терапия может быть необходимой и жизненно важной. Но даже правильно подобранное лечение не всегда учитывает все факторы, влияющие на течение заболевания и самочувствие в целом.</p></div>
            <blockquote className="self-end border-l-2 border-gold py-2 pl-7 font-display text-2xl leading-relaxed md:text-3xl">«Симптом — это видимая вершина айсберга. Под ней часто находится сочетание взаимосвязанных физических и психологических факторов. Поэтому моя задача — не просто работать с отдельным проявлением, а понять общую картину».<footer className="mt-6 font-sans text-sm text-muted-foreground">— Dr Vlad</footer></blockquote>
          </div>
        </section>

        <section id="approach" className="scroll-mt-24 border-y border-border bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-28">
            <div><p className="eyebrow text-gold-light">Интегративный подход Dr Vlad</p><h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Не разделять тело и психику, а видеть человека целиком</h2></div>
            <div className="space-y-6 text-base leading-8 text-primary-foreground/78"><p>Организм не состоит из независимых частей. Физическое состояние влияет на наши эмоции и поведение, а стресс, тревога, сон и привычки отражаются на телесном самочувствии.</p><p>Именно поэтому я не использую одну универсальную схему для всех. Работа начинается с изучения индивидуальной ситуации и может включать несколько взаимосвязанных направлений.</p><div id="hypnotherapy" className="scroll-mt-28 border-t border-primary-foreground/20 pt-6"><p>Если существуют показания, гипнотерапия может использоваться как дополнительный метод работы с тревогой, страхами, телесными реакциями, а также устойчивыми эмоциональными и поведенческими паттернами.</p><p className="mt-4">Она никак не противопоставляется медикаментозному лечению и не назначается автоматически каждому человеку.</p></div></div>
          </div>
        </section>

        <section id="consultation" className="section-space scroll-mt-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-4xl"><p className="eyebrow">Индивидуальный разбор</p><h2 className="section-title mt-4">Ваша ситуация требует не общих советов, а внимательного индивидуального разбора</h2><p className="mt-7 text-lg leading-8 text-foreground/75">Первичная консультация помогает собрать разрозненную информацию в общую картину и понять, что делать дальше. Мы разберём ваши симптомы, историю состояния, имеющиеся обследования и возможное влияние психоэмоциональных факторов. После встречи вы будете лучше понимать:</p></div>
            <div className="mt-10 grid gap-3 md:grid-cols-5">{outcomes.map((item) => <div key={item} className="border-t border-gold p-4 pl-0"><Check className="mb-5 size-5 text-gold" aria-hidden="true"/><p className="text-sm leading-6">{item}</p></div>)}</div>
            <div className="mt-16 grid gap-8 border-t border-border pt-12 lg:grid-cols-[.55fr_1.45fr]"><h3 className="font-display text-3xl">Кому подходит такой формат работы</h3><div className="grid gap-4 md:grid-cols-2">{suitableFor.map((item) => <div className="flex gap-3" key={item}><span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"/><p className="leading-7 text-foreground/75">{item}</p></div>)}<p className="md:col-span-2 mt-4 border-t border-border pt-6 leading-7">Вам не нужно самостоятельно определять, является ли проблема медицинской, психологической или психосоматической. Задача первичной консультации — рассмотреть доступную информацию и понять, в каком направлении целесообразно двигаться дальше.</p></div></div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-y border-border bg-secondary/35">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-20 lg:grid-cols-[.75fr_1.25fr] lg:px-8 lg:py-28">
            <div className="overflow-hidden rounded-lg"><img src={logoAsset.url} alt="Эмблема Dr Vlad — интегративная и холистическая медицина" className="aspect-square w-full object-cover" /></div>
            <div><p className="eyebrow">Обо мне</p><h2 className="section-title mt-4">Dr Vlad — врач-кардиолог и гипнотерапевт</h2><div className="mt-7 space-y-5 leading-7 text-foreground/75"><p>Я работаю в медицине с 2019 года. Мой профессиональный опыт включает работу в ведущих медицинских учреждениях Беларуси, в том числе в РНПЦ «Кардиология» и Больнице скорой медицинской помощи г. Минска.</p><p>В настоящее время в рамках гуманитарной медицинской миссии работаю в профильном кардиохирургическом центре MHCC в Ливии.</p><p>Я прошёл профессиональную подготовку в области клинического гипноза и являюсь Associate Member American Society of Clinical Hypnosis (ASCH).</p><p>В основе моей работы лежат принципы доказательной и интегративной медицины, дополненные целостным подходом к работе с психикой и подсознательными процессами. Я не рассматриваю тело отдельно от психики и не стремлюсь применять один и тот же шаблонный метод ко всем пациентам.</p></div><div id="research" className="mt-8 scroll-mt-28 border-l-2 border-gold pl-5"><p className="eyebrow">Исследование</p><p className="mt-3 leading-7 text-foreground/75">Одно из направлений моей профессиональной и научной работы — изучение возможности интеграции гипнотерапевтических методов в комплексное лечение пациентов с артериальной гипертензией. Исследование зарегистрировано в международном реестре ISRCTN под номером ISRCTN21345687. Набор участников уже начат. Подробная информация и ссылка на анкету для участия будут добавлены позднее на отдельной странице исследования.</p></div></div>
          </div>
          <div className="mx-auto max-w-7xl px-5 pb-20 lg:px-8"><img src={bannerAsset.url} alt="Dr Vlad — взаимосвязь науки, психики и тела" className="aspect-[3/1] w-full rounded-lg object-cover" /></div>
        </section>

        <section aria-labelledby="reviews-title" className="border-b border-border py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="eyebrow">Результаты и отзывы</p><h2 id="reviews-title" className="section-title mt-4">Истории людей, которые уже прошли индивидуальную работу</h2><div className="mt-12 min-h-28 border-y border-border" aria-label="Раздел отзывов пока пуст" /></div>
        </section>

        <section className="section-space bg-secondary/35">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="eyebrow">Как всё проходит</p><h2 className="section-title mt-4 max-w-4xl">Первые шаги на пути к вашему физическому и ментальному здоровью:</h2><div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-4">{steps.map(([title, text], index) => <article key={title} className="bg-background p-7"><span className="font-display text-4xl text-gold">0{index + 1}</span><h3 className="mt-8 font-display text-xl leading-snug">{title}</h3><p className="mt-4 text-sm leading-6 text-foreground/70">{text}</p>{index === 3 && <p className="mt-4 text-sm font-semibold">На первой консультации гипнотерапия не проводится.</p>}</article>)}</div><p className="mt-8 max-w-3xl leading-7 text-foreground/75">Даже если гипнотерапия вам не показана или работа со мной не соответствует вашей ситуации, вы получите более ясное представление о возможных дальнейших действиях и о том, к какому специалисту целесообразно обратиться.</p><div className="mt-7"><ConsultationButton /></div></div>
        </section>

        <section className="section-space">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.55fr_1.45fr] lg:px-8"><div><p className="eyebrow">Ответы</p><h2 className="section-title mt-4">Частые вопросы</h2></div><div>{faq.map(([question, answer]) => <details key={question} className="group border-t border-border py-6 last:border-b"><summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-xl marker:content-none"><span>{question}</span><ChevronDown className="mt-1 size-5 shrink-0 text-gold transition-transform duration-200 group-open:rotate-180" /></summary><p className="max-w-3xl pt-5 leading-7 text-foreground/70">{answer}</p></details>)}</div></div>
        </section>

        <section className="border-t border-border bg-primary text-primary-foreground">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-end lg:px-8 lg:py-20"><div><p className="eyebrow text-gold-light">Первичная консультация бесплатна</p><h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">Хотите понять, в чём причина и как улучшить своё состояние?</h2></div><Button asChild size="lg" className="h-13 shrink-0 rounded-full bg-gold px-7 text-primary hover:bg-gold-light"><a href="mailto:dr.vladt375@gmail.com">Написать Dr Vlad <ArrowRight /></a></Button></div>
        </section>
      </main>

      <footer className="bg-background py-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 md:flex-row lg:px-8"><div className="flex items-center gap-3"><img src={logoAsset.url} alt="" className="size-12 rounded-full"/><div><p className="font-display text-xl">Dr Vlad T</p><p className="text-xs text-muted-foreground">Врач-кардиолог · Гипнотерапевт</p></div></div><div className="md:text-right"><a href="mailto:dr.vladt375@gmail.com" className="text-sm text-gold hover:text-foreground">dr.vladt375@gmail.com</a><p className="mt-2 text-xs text-muted-foreground">Информация на сайте не заменяет очную медицинскую помощь.</p></div></div></footer>
    </div>
  );
}
