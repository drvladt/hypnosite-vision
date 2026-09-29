import { Link } from "@tanstack/react-router";
import { MessageCircle, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { researchContent, type ResearchSection } from "@/content/research";
import { contactEmail, pagePath, type Locale } from "@/content/locales";
import { siteContent } from "@/content/site";

function ProseSection({ section, number }: { section: ResearchSection; number?: string | undefined }) {
  const title = section.title?.trim();
  return (
    <section>
      {title && (
        <div className="mb-7 grid gap-3 md:grid-cols-[3rem_1fr] md:items-start">
          {number ? <span className="pt-2 text-xs font-bold text-gold">{number}</span> : null}
          <h2 className="font-display text-3xl font-medium leading-tight text-primary md:text-4xl">
            {title}
          </h2>
        </div>
      )}
      <div className={title ? "md:pl-12" : ""}>
        {section.epigraph && (
          <p className="mb-7 font-display text-2xl italic leading-snug text-primary md:text-3xl">
            “{section.epigraph}”
          </p>
        )}
        <div className="space-y-5">
          {(section.paragraphs ?? []).map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-foreground/85 md:text-lg md:leading-9">
              {paragraph}
            </p>
          ))}
        </div>
        {section.emphasis && (
          <blockquote className="mt-8 border-l-2 border-gold pl-6 font-display text-xl leading-relaxed text-primary md:text-2xl">
            {section.emphasis}
          </blockquote>
        )}
        {section.outro && (
          <p className="mt-6 text-base leading-8 text-foreground/85 md:text-lg md:leading-9">{section.outro}</p>
        )}
        {section.study && (
          <div className="mt-8 rounded-lg border border-gold/30 bg-gold/5 p-6 md:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{section.study.label}</p>
            <p className="mt-3 font-display text-xl font-medium leading-snug text-primary md:text-2xl">
              {section.study.title}
            </p>
            <div className="mt-4 space-y-1.5 text-base leading-7 text-foreground/85 md:text-lg md:leading-8">
              <p>
                <span className="font-semibold text-primary">{section.study.registrationLabel}:</span>{" "}
                {section.study.registration}
              </p>
              <p>{section.study.partner}</p>
            </div>
          </div>
        )}
        {section.callout && (
          <div className="mt-8 flex gap-4 rounded-lg border border-gold/30 bg-gold/10 p-5 md:p-6">
            <Info aria-hidden="true" className="mt-0.5 shrink-0 text-gold" size={22} />
            <p className="text-base font-semibold leading-8 text-primary md:text-lg md:leading-9">
              {section.callout}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export function ResearchPageView({ locale }: { locale: Locale }) {
  const c = researchContent[locale];
  const common = siteContent[locale].common;
  const [intro, hypothesis, recruitment] = c.sections;

  if (!intro || !hypothesis || !recruitment) return null;

  return (
    <article className="pb-20 md:pb-28">
      <header className="mx-auto w-full max-w-4xl px-5 pt-12 md:px-8 md:pt-16">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="section-title mt-4">{c.title}</h1>
        {c.lead.trim() && (
          <p className="mt-6 max-w-3xl border-l-2 border-gold/40 pl-5 text-lg font-medium leading-8 text-primary md:text-xl md:leading-9">
            {c.lead}
          </p>
        )}
      </header>

      <div className="mx-auto mt-8 w-full max-w-4xl px-5 md:mt-10 md:px-8">
        <ProseSection section={intro} number={intro.title ? "01" : undefined} />
      </div>

      <section className="mt-8 border-y border-border bg-secondary/35 py-8 md:mt-10 md:py-12">
        <div className="mx-auto w-full max-w-4xl px-5 md:px-8">
          <ProseSection section={hypothesis} number={hypothesis.title ? "02" : undefined} />
        </div>
      </section>

      <div className="mx-auto mt-8 w-full max-w-4xl px-5 md:mt-10 md:px-8">
        <ProseSection section={recruitment} number={recruitment.title ? "03" : undefined} />
      </div>

      <div className="mx-auto mt-14 w-full max-w-4xl px-5 md:px-8">
        <div className="flex flex-wrap gap-3 border-t border-border pt-10">
          <Button asChild size="lg" className="h-12 rounded-full px-6 text-sm shadow-none">
            <Link to={pagePath(locale, "consultation")}>
              {common.ctaPrimary}
              <MessageCircle aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-6 text-sm shadow-none">
            <a href={`mailto:${contactEmail}`}>{common.writeLabel}</a>
          </Button>
        </div>
      </div>
    </article>
  );
}
