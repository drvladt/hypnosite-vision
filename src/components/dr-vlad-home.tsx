import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Brain, CalendarDays, ChevronDown, Globe2, HeartPulse, Menu, MessageCircle, Play, Stethoscope, X } from "lucide-react";

import portraitAsset from "@/assets/fotoMe.png.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import { contactEmail, type Locale } from "@/content/locales";

function ConsultationButton({ label, outline = false }: { label: string; outline?: boolean }) {
  return (
    <Button asChild size="lg" variant={outline ? "outline" : "default"} className="h-12 rounded-full px-6 text-sm shadow-none sm:px-8">
      <a href="#consultation">{label}<MessageCircle aria-hidden="true" /></a>
    </Button>
  );
}

export function DrVladHome({ locale }: { locale: Locale }) {
  const c = homeContent[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const reviewsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.setAttribute("data-visible", "true"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [locale]);

  const scrollReviews = (direction: number) => {
    reviewsRef.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  const badgeIcons = [Stethoscope, CalendarDays, Globe2, Brain];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label={c.nav.toTop}>
            <img src={logoAsset.url} alt="" className="size-11 rounded-full object-cover" />
            <span className="font-display text-lg font-medium">Dr. Vlad</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm lg:flex" aria-label={c.nav.label}>
            {c.nav.items.map((item) => (
              <a key={item.href} className="nav-link" href={item.href}>{item.label}</a>
            ))}
            <LanguageSwitcher locale={locale} label={c.nav.languageLabel} />
            <ConsultationButton label={c.nav.bookShort} outline />
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher locale={locale} label={c.nav.languageLabel} />
            <Button variant="ghost" size="icon" aria-label={menuOpen ? c.nav.closeMenu : c.nav.openMenu} onClick={() => setMenuOpen((value) => !value)}>
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label={c.nav.mobileLabel}>
            <div className="mx-auto grid max-w-7xl gap-1">
              {c.nav.items.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="border-b border-border/60 py-3 text-sm">{item.label}</a>
              ))}
              <div className="pt-4"><ConsultationButton label={c.cta.primary} /></div>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative border-b border-border py-14 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-16">
              <div>
                <p className="eyebrow">{c.hero.eyebrow}</p>
                <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.15rem,5vw,4.65rem)] font-medium leading-[1.08]">{c.hero.title}</h1>
              </div>
              <div className="border-l border-gold/40 pl-6">
                <p className="leading-7 text-foreground/75">{c.hero.lead}</p>
                <div className="mt-7"><ConsultationButton label={c.cta.primary} /></div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-primary">
              <img src={portraitAsset.url} alt={c.hero.portraitAlt} className="aspect-[4/3] w-full object-cover object-center md:aspect-[16/7]" />
              <div className="flex items-start gap-4 border-t border-primary-foreground/15 px-6 py-6 text-primary-foreground md:px-8 md:py-7">
                <span className="font-display text-3xl leading-[0.6] text-gold-light md:text-4xl" aria-hidden="true">“</span>
                <p className="max-w-4xl text-base leading-7 text-primary-foreground/85">{c.hero.portraitCaption}</p>
              </div>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {c.hero.badges.map((badge, index) => {
                const Icon = badgeIcons[index] ?? HeartPulse;
                return <div key={badge} className="group flex min-h-28 items-end justify-between gap-4 rounded-md border border-border bg-card p-5 transition-colors duration-300 hover:border-gold/60" data-reveal style={{ "--reveal-delay": `${index * 70}ms` } as React.CSSProperties}><p className="max-w-40 text-sm font-semibold leading-5">{badge}</p><Icon className="size-5 shrink-0 text-gold transition-transform duration-300 group-hover:-translate-y-1" aria-hidden="true" /></div>;
              })}
            </div>
          </div>
        </section>

        <section id="concerns" className="section-space scroll-mt-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-20">
              <div><p className="eyebrow">{c.concerns.eyebrow}</p><h2 className="section-title mt-4">{c.concerns.title}</h2></div>
               <div className="grid gap-3 md:grid-cols-2">
                {c.concerns.items.map((text, index) => (
                   <article key={text} className="group relative min-h-56 overflow-hidden rounded-md border border-primary-foreground/12 bg-primary-foreground/[0.035] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/55 hover:bg-primary-foreground/[0.065] md:p-8" data-reveal style={{ "--reveal-delay": `${index * 75}ms` } as React.CSSProperties}><span className="font-display text-4xl text-gold/70">0{index + 1}</span><div className="mt-7 h-px w-10 bg-gold/45 transition-all duration-300 group-hover:w-16"/><p className="mt-6 leading-7 text-primary-foreground/78">{text}</p></article>
                ))}
              </div>
            </div>
            <div className="mt-12 border-t border-primary-foreground/15 pt-10 lg:ml-[calc(27.5%+2.5rem)]">
              <p className="max-w-4xl text-lg leading-8 text-primary-foreground/82">{c.concerns.summary}</p>
              <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center"><Button asChild size="lg" className="h-12 rounded-full bg-gold px-6 text-primary shadow-none hover:bg-gold-light sm:px-8"><a href="#consultation">{c.cta.primary}<MessageCircle aria-hidden="true" /></a></Button><span className="text-sm text-primary-foreground/55">{c.cta.note}</span></div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="eyebrow">{c.bigPicture.eyebrow}</p>
              <h2 className="section-title mt-4">{c.bigPicture.title}</h2>
              {c.bigPicture.paragraphs.map((text, index) => (
                <p key={text} className={`${index === 0 ? "mt-7" : "mt-5"} max-w-xl leading-7 text-foreground/75`}>{text}</p>
              ))}
            </div>
            <blockquote className="self-end border-l-2 border-gold py-2 pl-7 font-display text-2xl leading-relaxed md:text-3xl">{c.bigPicture.quote}<footer className="mt-6 font-sans text-sm text-muted-foreground">— Dr. Vlad</footer></blockquote>
          </div>
        </section>

        <section id="approach" className="scroll-mt-24 border-y border-border bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-28">
            <div><p className="eyebrow text-gold-light">{c.approach.eyebrow}</p><h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{c.approach.title}</h2></div>
            <div className="space-y-6 text-base leading-8 text-primary-foreground/78">
              {c.approach.paragraphs.map((text) => <p key={text}>{text}</p>)}
              <div id="hypnotherapy" className="scroll-mt-28 border-t border-primary-foreground/20 pt-6">
                {c.approach.hypnotherapy.map((text, index) => <p key={text} className={index === 0 ? undefined : "mt-4"}>{text}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section id="consultation" className="section-space scroll-mt-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-4xl"><p className="eyebrow">{c.consultation.eyebrow}</p><h2 className="section-title mt-4">{c.consultation.title}</h2><p className="mt-7 text-lg leading-8 text-foreground/75">{c.consultation.lead}</p></div>
            <div className="mt-12 rounded-md bg-primary px-6 py-4 text-primary-foreground md:px-9 md:py-6">
              {c.consultation.outcomes.map((item, index) => <div key={item} className="grid gap-3 border-b border-primary-foreground/12 py-6 last:border-b-0 md:grid-cols-[4rem_1fr] md:items-start" data-reveal style={{ "--reveal-delay": `${index * 75}ms` } as React.CSSProperties}><span className="font-display text-2xl text-gold-light">0{index + 1}</span><p className="max-w-3xl text-base leading-7 text-primary-foreground/82">{item}</p></div>)}
            </div>
            <div className="mt-16 grid gap-8 border-t border-border pt-12 lg:grid-cols-[.55fr_1.45fr]">
              <h3 className="font-display text-3xl">{c.consultation.suitableTitle}</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {c.consultation.suitableFor.map((item) => <div className="flex gap-3" key={item}><span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"/><p className="leading-7 text-foreground/75">{item}</p></div>)}
                <p className="md:col-span-2 mt-4 border-t border-border pt-6 leading-7">{c.consultation.suitableNote}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-y border-border bg-secondary/35">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-20 lg:grid-cols-[.55fr_1.45fr] lg:px-8 lg:py-28">
            <div><p className="eyebrow">{c.about.eyebrow}</p><div className="mt-6 h-px w-16 bg-gold"/></div>
            <div>
              <h2 className="section-title">{c.about.title}</h2>
              <div className="mt-7 space-y-5 leading-7 text-foreground/75">{c.about.paragraphs.map((text) => <p key={text}>{text}</p>)}</div>
              <div id="research" className="mt-10 scroll-mt-28 rounded-md bg-primary p-7 text-primary-foreground md:p-9"><p className="eyebrow text-gold-light">{c.about.research.eyebrow}</p><p className="mt-4 max-w-3xl leading-7 text-primary-foreground/78">{c.about.research.text}</p><a className="mt-6 inline-flex items-center gap-2 border-b border-gold/60 pb-1 text-sm font-semibold text-gold-light transition-colors hover:text-primary-foreground" href="https://www.isrctn.com/ISRCTN21345687" target="_blank" rel="noreferrer">{c.about.research.linkLabel}<ArrowRight className="size-4" aria-hidden="true" /></a></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="reviews-title" className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow">{c.reviews.eyebrow}</p><h2 id="reviews-title" className="section-title mt-4 max-w-3xl">{c.reviews.title}</h2></div>{c.reviews.items.length > 0 && <div className="flex gap-2"><Button variant="outline" size="icon" onClick={() => scrollReviews(-1)} aria-label={c.reviews.previousLabel}><ArrowLeft /></Button><Button variant="outline" size="icon" onClick={() => scrollReviews(1)} aria-label={c.reviews.nextLabel}><ArrowRight /></Button></div>}</div>
            {c.reviews.items.length > 0 ? <div ref={reviewsRef} className="review-track mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">{c.reviews.items.map((review) => <article key={`${review.name}-${review.videoUrl}`} className="relative aspect-[9/14] w-[78vw] max-w-80 shrink-0 snap-start overflow-hidden rounded-md bg-primary text-primary-foreground">{review.posterUrl && <img src={review.posterUrl} alt="" className="absolute inset-0 size-full object-cover opacity-55"/>}<video className="absolute inset-0 size-full object-cover" src={review.videoUrl} poster={review.posterUrl} controls preload="metadata" aria-label={`${c.reviews.playLabel}: ${review.name}`} /><div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/80 to-transparent px-6 pb-6 pt-24"><Play className="mb-5 size-7 text-gold-light" aria-hidden="true"/><h3 className="font-display text-2xl">{review.name}</h3><p className="mt-2 text-sm leading-6 text-primary-foreground/70"><span className="font-semibold text-gold-light">{c.reviews.concernLabel}</span> {review.concern}</p></div></article>)}</div> : <div className="mt-12 grid min-h-52 place-items-center rounded-md border border-dashed border-border bg-secondary/25 px-6 text-center"><div><Play className="mx-auto size-7 text-gold" aria-hidden="true"/><p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-muted-foreground">{c.reviews.emptyLabel}</p></div></div>}
          </div>
        </section>

        <section className="section-space bg-secondary/35">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="eyebrow">{c.steps.eyebrow}</p>
            <h2 className="section-title mt-4 max-w-4xl">{c.steps.title}</h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-4">
              {c.steps.items.map(([title, text], index) => (
                <article key={title} className="bg-background p-7">
                  <span className="font-display text-4xl text-gold">0{index + 1}</span>
                  <h3 className="mt-8 font-display text-xl leading-snug">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-foreground/70">{text}</p>
                  {index === c.steps.items.length - 1 && <p className="mt-4 text-sm font-semibold">{c.steps.noHypnosisNote}</p>}
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-3xl leading-7 text-foreground/75">{c.steps.closing}</p>
            <div className="mt-7"><ConsultationButton label={c.cta.primary} /></div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.55fr_1.45fr] lg:px-8">
            <div><p className="eyebrow">{c.faq.eyebrow}</p><h2 className="section-title mt-4">{c.faq.title}</h2></div>
            <div>{c.faq.items.map(([question, answer]) => (
              <details key={question} className="group border-t border-border py-6 last:border-b">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-xl marker:content-none"><span>{question}</span><ChevronDown className="mt-1 size-5 shrink-0 text-gold transition-transform duration-200 group-open:rotate-180" /></summary>
                <p className="max-w-3xl pt-5 leading-7 text-foreground/70">{answer}</p>
              </details>
            ))}</div>
          </div>
        </section>

        <section className="border-t border-border bg-primary text-primary-foreground">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-end lg:px-8 lg:py-20">
            <div><p className="eyebrow text-gold-light">{c.finalCta.eyebrow}</p><h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">{c.finalCta.title}</h2></div>
            <Button asChild size="lg" className="h-13 shrink-0 rounded-full bg-gold px-7 text-primary hover:bg-gold-light"><a href={`mailto:${contactEmail}`}>{c.cta.write} <ArrowRight /></a></Button>
          </div>
        </section>
      </main>

      <footer className="bg-background py-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 md:flex-row lg:px-8">
           <div className="flex items-center gap-3"><img src={logoAsset.url} alt="" className="size-12 rounded-full"/><div><p className="font-display text-xl">Dr. Vlad Tettegah</p><p className="text-xs text-muted-foreground">{c.footer.role}</p></div></div>
          <div className="md:text-right"><a href={`mailto:${contactEmail}`} className="text-sm text-gold hover:text-foreground">{contactEmail}</a><p className="mt-2 text-xs text-muted-foreground">{c.footer.disclaimer}</p></div>
        </div>
      </footer>
    </div>
  );
}
