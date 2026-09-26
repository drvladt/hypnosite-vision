import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { hypnotherapyContent, type HypnotherapySection } from "@/content/hypnotherapy";
import { contactEmail, pagePath, type Locale } from "@/content/locales";
import { siteContent } from "@/content/site";

function ProseSection({ section, number }: { section: HypnotherapySection; number?: string | undefined }) {
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
      </div>
    </section>
  );
}

export function HypnotherapyPageView({ locale }: { locale: Locale }) {
  const c = hypnotherapyContent[locale];
  const common = siteContent[locale].common;
  const [intro, example, session, change, goal] = c.sections;

  if (!intro || !example || !session || !change || !goal) return null;

  return (
    <article className="pb-20 md:pb-28">
      <header className="mx-auto w-full max-w-4xl px-5 pt-12 md:px-8 md:pt-16">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="section-title mt-4">{c.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
          {c.lead}
        </p>
      </header>

      <section className="mt-8 border-y border-border bg-secondary/35 py-8 md:mt-10 md:py-12">
        <div className="mx-auto w-full max-w-4xl px-5 md:px-8">
          <ProseSection section={intro} number={intro.title ? "01" : undefined} />
        </div>
      </section>

      <div className="mx-auto mt-8 w-full max-w-4xl px-5 md:mt-10 md:px-8">
        <ProseSection section={example} number={example.title ? "02" : undefined} />
        <div className="mt-8 md:mt-10">
          <ProseSection section={session} number={session.title ? "03" : undefined} />
        </div>
        <div className="mt-8 md:mt-10">
          <ProseSection section={change} number={change.title ? "04" : undefined} />
        </div>
      </div>

      <section className="mt-8 bg-primary py-8 text-primary-foreground md:mt-10 md:py-12">
        <div className="mx-auto w-full max-w-4xl px-5 md:px-8">
          <div className="[&_blockquote]:text-gold-light [&_h2]:text-primary-foreground [&_p]:text-primary-foreground/80">
            <ProseSection section={goal} number={goal.title ? "05" : undefined} />
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
