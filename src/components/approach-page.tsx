import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { approachContent, type ApproachSection } from "@/content/approach";
import { contactEmail, pagePath, type Locale } from "@/content/locales";
import { siteContent } from "@/content/site";

function ProseSection({ section, number }: { section: ApproachSection; number?: string | undefined }) {
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
        <div className="space-y-5">
          {section.paragraphs.map((paragraph) => (
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
      </div>
    </section>
  );
}


export function ApproachPageView({ locale }: { locale: Locale }) {
  const c = approachContent[locale];
  const common = siteContent[locale].common;
  const [foundation, broader, consultation, hypnotherapy, practice] = c.sections;

  if (!foundation || !broader || !consultation || !hypnotherapy || !practice) return null;

  return (
    <article className="pb-20 md:pb-28">
      <header className="mx-auto w-full max-w-4xl px-5 pt-12 md:px-8 md:pt-16">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="section-title mt-4">{c.title}</h1>
        {c.lead.trim() && (
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
            {c.lead}
          </p>
        )}
      </header>

      <div className="mx-auto mt-8 w-full max-w-4xl px-5 md:mt-10 md:px-8">
        <ProseSection section={foundation} number={foundation.title ? "01" : undefined} />
      </div>

      <section className="mt-8 border-y border-border bg-secondary/35 py-8 md:mt-10 md:py-12">
        <div className="mx-auto w-full max-w-4xl px-5 md:px-8">
          <ProseSection section={broader} number={broader.title ? "02" : undefined} />
        </div>
      </section>

      <div className="mx-auto mt-8 w-full max-w-4xl px-5 md:mt-10 md:px-8">
        <ProseSection section={consultation} number={consultation.title ? "03" : undefined} />
        <div className="mt-8 md:mt-10">
          <ProseSection section={hypnotherapy} number={hypnotherapy.title ? "04" : undefined} />
        </div>
      </div>

      <section className="mt-8 bg-primary py-8 text-primary-foreground md:mt-10 md:py-12">
        <div className="mx-auto w-full max-w-4xl px-5 md:px-8">
          <div className="[&_blockquote]:text-gold-light [&_h2]:text-primary-foreground [&_p]:text-primary-foreground/80">
            <ProseSection section={practice} number={practice.title ? "05" : undefined} />
          </div>
        </div>
      </section>


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
