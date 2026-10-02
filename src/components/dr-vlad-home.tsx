import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Brain, CalendarDays, ChevronDown, HeartPulse, Menu, MessageCircle, Play, Stethoscope, X } from "lucide-react";
import { pagePath, socialLinks, type SocialType } from "@/content/locales";
import { YouTubeFacade } from "@/components/youtube-facade";

// Minimal universally-recognizable globe: circle + equator + two meridians, no extra parallels
function GlobeMinimal({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="2.75" y1="12" x2="21.25" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <ellipse cx="12" cy="12" rx="4.2" ry="9.25" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

// Brand icons for social/messenger links (lucide has no brand icons)
function SocialIcon({ type, className }: { type: SocialType; className?: string }) {
  switch (type) {
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.13c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"/>
        </svg>
      );
    case "telegram":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M11.94 2C6.46 2 2 6.46 2 11.94S6.46 21.88 11.94 21.88 21.88 17.42 21.88 11.94 17.42 2 11.94 2zm4.97 6.8-1.66 7.84c-.12.55-.45.68-.91.42l-2.52-1.86-1.22 1.17c-.24.24-.44.45-.9.45l.32-4.55 4.66-4.2c.2-.18-.04-.28-.31-.1l-5.75 3.62-2.48-.78c-.54-.17-.55-.54.11-.8l9.7-3.74c.45-.17.84.1.69.7z"/>
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.8"/>
          <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
          <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor"/>
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.1v12.4a2.45 2.45 0 0 1-2.45 2.45 2.45 2.45 0 1 1 .72-4.79V9.7a5.55 5.55 0 0 0-1.72-.27 5.55 5.55 0 1 0 5.55 5.55V8.66a7.34 7.34 0 0 0 4.28 1.37V6.93a4.28 4.28 0 0 1-3.23-1.11z"/>
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/>
        </svg>
      );
  }
}

import portraitAsset from "@/assets/fotoMe.webp";
import logoAsset from "@/assets/logo.webp";
import bannerAsset from "@/assets/banner.webp";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import { contactEmail, type Locale } from "@/content/locales";

function ConsultationButton({ label, locale, outline = false }: { label: string; locale: Locale; outline?: boolean }) {
  return (
    <Button asChild size="lg" variant={outline ? "outline" : "default"} className="h-12 rounded-full px-6 text-sm shadow-none sm:px-8">
      <Link to={pagePath(locale, "consultation")}>{label}<MessageCircle aria-hidden="true" /></Link>
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

  const scrollToSection = (href: string) => {
    const id = href.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.querySelector<HTMLElement>("[data-home-header]");
    const headerHeight = header?.getBoundingClientRect().height ?? 0;
    const top = window.scrollY + el.getBoundingClientRect().top - headerHeight - 12;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const wasMenuOpen = menuOpen;
    setMenuOpen(false);
    // Scroll without writing the hash into the URL: a stored hash would make
    // a page reload jump straight to that section. On mobile, wait until the
    // dropdown is removed so its height cannot push the target past the title.
    if (wasMenuOpen) {
      window.setTimeout(() => scrollToSection(href), 80);
      return;
    }
    scrollToSection(href);
  };


  const badgeIcons = [Stethoscope, CalendarDays, GlobeMinimal, Brain];
  const singleYoutubeReview = c.reviews.items.length === 1 && c.reviews.items[0] ? c.reviews.items[0] : undefined;

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header data-home-header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label={c.nav.toTop}>
            <img src={logoAsset} alt="" className="size-11 rounded-full object-cover" />
            <span className="flex flex-col gap-1">
              <span className="font-display text-xl font-medium leading-none">Dr. Vlad</span>
              <span className="max-w-[150px] text-[8px] font-semibold uppercase leading-tight tracking-[0.14em] text-gold sm:max-w-none sm:text-[9px] sm:leading-none sm:tracking-[0.2em]">{c.subbrand}</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm lg:flex" aria-label={c.nav.label}>
            {c.nav.items.map((item) => (
              <a key={item.href} className="nav-link" href={item.href} onClick={(e) => handleNavClick(e, item.href)}>{item.label}</a>
            ))}
            <LanguageSwitcher locale={locale} label={c.nav.languageLabel} />
            <ConsultationButton label={c.nav.bookShort} locale={locale} outline />
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
                <a key={item.href} href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="border-b border-border/60 py-3 text-sm">{item.label}</a>
              ))}
              <div className="pt-4"><ConsultationButton label={c.cta.primary} locale={locale} /></div>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative border-b border-border py-10 md:py-12 lg:py-14">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-8 grid items-end gap-7 lg:grid-cols-[1.2fr_.8fr] lg:gap-12">
              <div>
                <h1 className="max-w-4xl font-display text-[clamp(2.15rem,5vw,4.65rem)] font-medium leading-[1.08]">{c.hero.title}</h1>
              </div>
              <div className="border-l border-gold/40 pl-6">
                <p className="whitespace-pre-line leading-7 text-foreground/75">{c.hero.lead}</p>
                <div className="mt-7"><ConsultationButton label={c.cta.primary} locale={locale} /></div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-primary">
              <img src={portraitAsset} alt={c.hero.portraitAlt} className="aspect-[4/3] w-full object-cover object-center md:aspect-[16/7]" />
              <div className="flex items-start gap-4 border-t border-primary-foreground/15 px-6 py-6 text-primary-foreground md:px-8 md:py-7">
                <span className="font-display text-3xl leading-[0.6] text-gold-light md:text-4xl" aria-hidden="true">“</span>
                <p className="max-w-4xl text-base leading-7 text-primary-foreground/85">{c.hero.portraitCaption}</p>
              </div>
            </div>
            <div className="relative mt-5 overflow-hidden rounded-lg border border-primary/15 bg-card px-3 py-4 shadow-[0_18px_45px_-30px_color-mix(in_oklab,var(--primary)_38%,transparent)] sm:px-5 sm:py-5 md:px-8 md:py-7">
              <img src={bannerAsset} alt="" className="pointer-events-none absolute inset-0 size-full scale-125 object-cover object-center opacity-85" />
              <span className="pointer-events-none absolute inset-0 bg-background/10" aria-hidden="true" />
              <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 md:gap-x-20 md:gap-y-10 lg:gap-x-28">
              {c.hero.badges.map((badge, index) => {
                const Icon = badgeIcons[index] ?? HeartPulse;
                const accent = index % 2 === 0;
                return (
                  <div key={badge} className={index < 2 ? "-translate-y-1.5 sm:-translate-y-2 md:-translate-y-3 lg:-translate-y-4" : "translate-y-1.5 sm:translate-y-2 md:translate-y-3 lg:translate-y-4"}>
                  <div className="group flex min-h-20 flex-col items-start gap-2 rounded-lg border border-gold/25 bg-background/20 p-2.5 shadow-[0_12px_30px_-24px_color-mix(in_oklab,var(--primary)_30%,transparent)] backdrop-blur-[1px] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:bg-background/35 sm:min-h-24 sm:flex-row sm:items-center sm:gap-3.5 sm:p-3.5 md:min-h-20 md:p-4">
                    <span className={`flex size-8 shrink-0 items-center justify-center rounded-xl sm:size-9 ${accent ? "bg-primary/10" : "bg-gold/12"}`}>
                      <Icon className={`size-4 sm:size-[18px] ${accent ? "text-primary" : "text-gold"} transition-transform duration-300 group-hover:-translate-y-0.5`} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <p className="w-full break-words font-display text-xs font-medium leading-snug text-primary sm:text-sm">{badge}</p>
                  </div>
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-secondary/40">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[.55fr_1.45fr] lg:gap-14">
              <div><p id="concerns" className="eyebrow">{c.concerns.eyebrow}</p><h2 className="section-title mt-4">{c.concerns.title}</h2></div>
              <div className="grid gap-4 md:grid-cols-2">
                {c.concerns.items.map((text, index) => (
                  <article key={text} className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-[0_10px_30px_-18px_color-mix(in_oklab,var(--primary)_25%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_40px_-20px_color-mix(in_oklab,var(--primary)_32%,transparent)] md:p-7" data-reveal style={{ "--reveal-delay": `${index * 75}ms` } as React.CSSProperties}>
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/[0.08] font-display text-sm font-semibold text-primary ring-1 ring-inset ring-primary/15">0{index + 1}</span>
                      <span className="h-px flex-1 bg-gradient-to-r from-gold/45 via-gold/20 to-transparent" />
                    </div>
                    <p className="mt-5 leading-7 text-foreground/78">{text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-9 border-t border-border pt-7 lg:ml-[calc(27.5%+2.5rem)]">
              <p className="max-w-4xl text-lg leading-8 text-foreground/80">{c.concerns.summary}</p>
              <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center"><Button asChild size="lg" className="h-12 rounded-full bg-primary px-6 text-primary-foreground shadow-none hover:bg-primary/90 sm:px-8"><Link to={pagePath(locale, "consultation")}>{c.cta.primary}<MessageCircle aria-hidden="true" /></Link></Button><span className="text-sm text-muted-foreground">{c.cta.note}</span></div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto grid max-w-7xl gap-9 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">
            <div>
              <p className="eyebrow">{c.bigPicture.eyebrow}</p>
              <h2 id="bigPicture" className="section-title mt-4">{c.bigPicture.title}</h2>
              {c.bigPicture.paragraphs.map((text, index) => (
                <p key={text} className={`${index === 0 ? "mt-5" : "mt-4"} max-w-xl leading-7 text-foreground/75`}>{text}</p>
              ))}
            </div>
            <blockquote className="self-end border-l-2 border-gold py-2 pl-7 font-display text-2xl leading-relaxed md:text-3xl">{c.bigPicture.quote}<footer className="mt-7 flex items-center gap-3"><span className="h-px w-5 bg-gold/55" aria-hidden="true" /><span className="font-display text-base font-semibold text-gold">Dr. Vlad</span></footer></blockquote>
          </div>
        </section>

        <section id="approach" className="scroll-mt-24 border-y border-border bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-9 px-5 py-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-12 lg:px-8 lg:py-14">
            <div><p className="eyebrow text-gold-light">{c.approach.eyebrow}</p><h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{c.approach.title}</h2></div>
            <div className="space-y-5 text-base leading-8 text-primary-foreground/78">
              {c.approach.paragraphs.map((text) => <p key={text}>{text}</p>)}
              <Link className="inline-flex items-center gap-2 border-b border-gold/60 pb-1 text-sm font-semibold text-gold-light transition-colors hover:text-primary-foreground" to={pagePath(locale, "approach")}>{c.approach.moreApproachLabel}<ArrowRight className="size-4" aria-hidden="true" /></Link>
              <div id="hypnotherapy" className="scroll-mt-28 border-t border-primary-foreground/20 pt-5">
                {c.approach.hypnotherapy.map((text, index) => <p key={text} className={index === 0 ? undefined : "mt-3.5"}>{text}</p>)}
                <Link className="mt-5 inline-flex items-center gap-2 border-b border-gold/60 pb-1 text-sm font-semibold text-gold-light transition-colors hover:text-primary-foreground" to={pagePath(locale, "hypnotherapy")}>{c.approach.moreHypnotherapyLabel}<ArrowRight className="size-4" aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-4xl">
              <p className="eyebrow">{c.consultation.eyebrow}</p>
              <h2 className="section-title mt-4">{c.consultation.title}</h2>
              <p className="mt-5 text-lg leading-8 text-foreground/75">{c.consultation.lead}</p>
              <ul className="mt-6 space-y-3 border-l-2 border-gold/40 pl-6" data-reveal>
                {c.consultation.outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg leading-8 text-foreground/80">
                    <span className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 grid gap-7 border-t border-border pt-8 lg:grid-cols-[.55fr_1.45fr]">
              <div>
                <h3 id="suitable" className="font-display text-3xl">{c.consultation.suitableTitle}</h3>
                {c.consultation.suitableIntro && (
                  <div className="mt-4 space-y-3 leading-7 text-foreground/75">
                    {c.consultation.suitableIntro.map((text) => <p key={text}>{text}</p>)}
                  </div>
                )}
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {c.consultation.suitableFor.map((item) => <div className="flex gap-3" key={item}><span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"/><p className="leading-7 text-foreground/75">{item}</p></div>)}
                <p className="md:col-span-2 mt-2 border-t border-border pt-5 leading-7">{c.consultation.suitableNote}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/35">
          <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 py-10 lg:grid-cols-[.55fr_1.45fr] lg:gap-10 lg:px-8 lg:py-14">
            <div><p id="about" className="eyebrow">{c.about.eyebrow}</p><div className="mt-6 h-px w-16 bg-gold"/></div>
            <div>
              <h2 className="section-title">{c.about.title}</h2>
              <div className="mt-5 space-y-4 leading-7 text-foreground/75">{c.about.paragraphs.map((text) => <p key={text}>{text}</p>)}</div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="default" size="lg" className="font-semibold"><Link to={pagePath(locale, "about")}>{c.about.moreAboutLabel}</Link></Button>
                <Button asChild variant="outline" size="lg" className="font-semibold"><Link to={pagePath(locale, "consultation")}>{c.about.bookLabel}</Link></Button>
              </div>
              <div className="mt-7 rounded-md bg-primary p-7 text-primary-foreground md:p-8"><p id="research" className="eyebrow text-gold-light">{c.about.research.eyebrow}</p><p className="mt-4 max-w-3xl leading-7 text-primary-foreground/78">{c.about.research.text}</p><Link className="mt-5 inline-flex items-center gap-2 border-b border-gold/60 pb-1 text-sm font-semibold text-gold-light transition-colors hover:text-primary-foreground" to={pagePath(locale, "research")}>{c.about.research.linkLabel}<ArrowRight className="size-4" aria-hidden="true" /></Link></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="reviews-title" className="border-b border-border py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><h2 id="reviews-title" className="section-title max-w-3xl">{c.reviews.title}</h2>{c.reviews.items.length > 1 && <div className="flex gap-2"><Button variant="outline" size="icon" onClick={() => scrollReviews(-1)} aria-label={c.reviews.previousLabel}><ArrowLeft /></Button><Button variant="outline" size="icon" onClick={() => scrollReviews(1)} aria-label={c.reviews.nextLabel}><ArrowRight /></Button></div>}</div>
            {c.reviews.items.length > 0 ? (
              singleYoutubeReview?.youtubeId ? (
                <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-md bg-primary text-primary-foreground">
                  <YouTubeFacade videoId={singleYoutubeReview.youtubeId} playLabel={`${c.reviews.playLabel}: ${singleYoutubeReview.name}`} title={singleYoutubeReview.name} />
                </div>
              ) : <div ref={reviewsRef} className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">{c.reviews.items.map((review) => <article key={`${review.name}-${review.videoUrl}`} className="relative aspect-[9/14] w-[78vw] max-w-80 shrink-0 snap-start overflow-hidden rounded-md bg-primary text-primary-foreground">{review.youtubeId ? <YouTubeFacade videoId={review.youtubeId} playLabel={`${c.reviews.playLabel}: ${review.name}`} title={review.name} /> : <>{review.posterUrl && <img src={review.posterUrl} alt="" className="absolute inset-0 size-full object-cover opacity-55"/>}<video className="absolute inset-0 size-full object-cover" src={review.videoUrl} poster={review.posterUrl} controls preload="metadata" aria-label={`${c.reviews.playLabel}: ${review.name}`} /></>}{review.name && <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary via-primary/80 to-transparent px-6 pb-6 pt-24">{!review.youtubeId && <Play className="mb-5 size-7 text-gold-light" aria-hidden="true"/>}<h3 className="font-display text-2xl">{review.name}</h3>{review.concern && <p className="mt-2 text-sm leading-6 text-primary-foreground/70"><span className="font-semibold text-gold-light">{c.reviews.concernLabel}</span> {review.concern}</p>}</div>}</article>)}</div>
            ) : <div className="mt-6 grid min-h-32 place-items-center rounded-md border border-dashed border-border bg-secondary/25 px-6 py-8 text-center"><div><Play className="mx-auto size-7 text-gold" aria-hidden="true"/><p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-muted-foreground">{c.reviews.emptyLabel}</p></div></div>}
            {c.reviews.caption && <p className="mt-6 max-w-2xl border-l-2 border-gold/70 py-1 pl-5 text-[15px] leading-7 text-foreground/75">{c.reviews.caption}</p>}
          </div>
        </section>

        <section className="section-space bg-secondary/35">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="eyebrow">{c.steps.eyebrow}</p>
            <h2 id="steps" className="section-title mt-4 max-w-4xl">{c.steps.title}</h2>
            <div className="mt-7 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {c.steps.items.map(([title, text], index) => (
                <article key={title} className="bg-background p-5 lg:p-6" data-reveal style={{ "--reveal-delay": `${index * 120}ms` } as React.CSSProperties}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-2xl text-gold">0{index + 1}</span>
                    <h3 className="font-display text-lg leading-snug">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-foreground/70">{text}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-3xl leading-7 text-foreground/75" data-reveal style={{ "--reveal-delay": `${c.steps.items.length * 120}ms` } as React.CSSProperties}>{c.steps.closing}</p>
            <div className="mt-6" data-reveal style={{ "--reveal-delay": `${(c.steps.items.length + 1) * 120}ms` } as React.CSSProperties}><ConsultationButton label={c.cta.primary} locale={locale} /></div>
          </div>
        </section>

        <section className="section-space">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[.55fr_1.45fr] lg:gap-10 lg:px-8">
            <div><p className="eyebrow">{c.faq.eyebrow}</p><h2 id="faq" className="section-title mt-4">{c.faq.title}</h2></div>
            <div>{c.faq.items.map(([question, answer]) => (
               <details key={question} className="group border-t border-border py-5 last:border-b">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-xl marker:content-none"><span>{question}</span><ChevronDown className="mt-1 size-5 shrink-0 text-gold transition-transform duration-300 ease-out group-open:rotate-180" /></summary>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="max-w-3xl translate-y-[-8px] pt-5 leading-7 text-foreground/70 opacity-0 transition-[transform,opacity] duration-300 ease-out delay-75 group-open:translate-y-0 group-open:opacity-100">{answer}</p>
                  </div>
                </div>
              </details>
            ))}</div>
          </div>
        </section>

        <section className="border-t border-border bg-primary text-primary-foreground">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 py-10 md:flex-row md:items-end lg:px-8 lg:py-12">
            <div><p className="eyebrow text-gold-light">{c.finalCta.eyebrow}</p><h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-5xl">{c.finalCta.title}</h2></div>
            <Button asChild size="lg" className="h-13 shrink-0 rounded-full bg-gold px-7 text-background hover:bg-gold-light hover:text-background"><a href={`mailto:${contactEmail}`}>{c.cta.write} <ArrowRight /></a></Button>
          </div>
        </section>
      </main>

      <footer className="bg-background py-9">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 md:flex-row lg:px-8">
            <div className="flex items-center gap-3"><img src={logoAsset} alt="" className="size-12 rounded-full"/><div><p className="font-display text-xl">Dr. Vlad Tettegah</p><p className="text-xs text-muted-foreground">{c.footer.role}</p></div></div>
            <div className="md:text-right">
              <div className="flex items-center gap-1.5 md:justify-end">
                {socialLinks.map((social) => (
                  <a key={social.type} href={social.url} target="_blank" rel="noreferrer" aria-label={social.label}
                     className="flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold">
                    <SocialIcon type={social.type} className="size-4" />
                  </a>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{c.footer.disclaimer}</p>
            </div>
        </div>
      </footer>
    </div>
  );
}
