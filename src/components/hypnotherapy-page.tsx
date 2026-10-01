import { Link } from "@tanstack/react-router";
import { MessageCircle, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { hypnotherapyContent, type HypnotherapySection } from "@/content/hypnotherapy";
import { contactEmail, pagePath, type Locale } from "@/content/locales";
import { siteContent } from "@/content/site";
import { YouTubeFacade } from "@/components/youtube-facade";

function ItalicLines({ lines, className }: { lines: string[]; className?: string }) {
  return (
    <div className={className ?? "mt-6 space-y-3"}>
      {lines.map((line, index) => (
        <p
          key={index}
          className="font-display text-xl italic leading-relaxed text-foreground/85 md:text-2xl"
        >
          {line}
        </p>
      ))}
    </div>
  );
}

function ProseSection({ section, number }: { section: HypnotherapySection; number?: string | undefined }) {
  const title = section.title?.trim();
  return (
    <section>
      {title && (
        <div className={`mb-5 grid gap-3 md:items-start ${number ? "md:grid-cols-[3rem_1fr]" : ""}`}>
          {number ? <span className="pt-2 text-xs font-bold text-gold">{number}</span> : null}
          <h2 className="font-display text-3xl font-medium leading-tight text-primary md:text-4xl">
            {title}
          </h2>
        </div>
      )}
      <div className={title ? "md:pl-12" : ""}>
        {section.openingItalics?.length ? (
          <ItalicLines lines={section.openingItalics} className="mb-5 space-y-3" />
        ) : null}
        <div className="space-y-4">
          {(section.paragraphs ?? []).map((paragraph, index) => (
            <p key={index} className="text-base leading-8 text-foreground/85 md:text-lg md:leading-9">
              {paragraph}
            </p>
          ))}
        </div>
        {section.highlightLines?.length ? (
          <div className="my-6 space-y-4 border-l-2 border-gold/50 pl-5 md:pl-6">
            {section.highlightLines.map((line, index) => (
              <p
                key={index}
                className="font-display text-xl italic leading-relaxed text-foreground/85 md:text-2xl"
              >
                {line}
              </p>
            ))}
          </div>
        ) : null}
        {section.video ? (
          <figure className="my-8">
            <figcaption className="text-xs uppercase tracking-wide text-muted-foreground">
              {section.video.caption}
            </figcaption>
            {section.video.youtubeId ? (
              <div className="relative mt-3 aspect-video w-full overflow-hidden rounded-md bg-primary text-primary-foreground">
                <YouTubeFacade
                  videoId={section.video.youtubeId}
                  playLabel={section.video.caption}
                  title={section.video.caption}
                />
              </div>
            ) : (
              <div className="mt-3 grid min-h-44 place-items-center rounded-md border border-dashed border-border bg-secondary/25 px-6 py-8 text-center">
                <div>
                  <Play className="mx-auto size-7 text-gold" aria-hidden="true" />
                  <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-muted-foreground">
                    {section.video.emptyLabel}
                  </p>
                </div>
              </div>
            )}
          </figure>
        ) : null}
        <div className="space-y-4">
          {(section.paragraphsAfterVideo ?? []).map((paragraph, index) => (
            <p key={index} className="text-base leading-8 text-foreground/85 md:text-lg md:leading-9">
              {paragraph}
            </p>
          ))}
        </div>
        {section.italicLines?.length ? <ItalicLines lines={section.italicLines} /> : null}
        {section.emphasis && (
          <blockquote className="mt-6 border-l-2 border-gold pl-6 font-display text-xl leading-relaxed text-primary md:text-2xl">
            {section.emphasis}
          </blockquote>
        )}
      </div>
    </section>
  );
}

function numberSections(sections: HypnotherapySection[]) {
  let count = 0;
  return sections.map((section) => {
    const titled = Boolean(section.title?.trim());
    if (titled) count += 1;
    return { section, number: titled ? String(count).padStart(2, "0") : undefined };
  });
}

export function HypnotherapyPageView({ locale }: { locale: Locale }) {
  const c = hypnotherapyContent[locale];
  const common = siteContent[locale].common;
  const [intro, ...body] = c.sections;
  const numbered = numberSections(body);
  const last = numbered[numbered.length - 1];
  const middle = numbered.slice(0, -1);

  if (!intro || !last) return null;

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
          <ProseSection section={intro} />
        </div>
      </section>

      <div className="mx-auto mt-8 w-full max-w-4xl px-5 md:mt-10 md:px-8">
        {middle.map(({ section, number }, index) => (
          <div key={index} className={index > 0 ? "mt-8 md:mt-10" : undefined}>
            <ProseSection section={section} number={number} />
          </div>
        ))}
      </div>

      <section className="mt-8 bg-primary py-10 text-primary-foreground md:mt-10 md:py-14">
        <div className="mx-auto w-full max-w-4xl px-5 md:px-8">
          <div className="[&_blockquote]:text-gold-light [&_h2]:text-primary-foreground [&_p]:text-primary-foreground/80">
            <ProseSection section={last.section} number={last.number} />
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
