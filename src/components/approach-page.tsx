import { Link } from "@tanstack/react-router";
import { MessageCircle, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { YouTubeFacade } from "@/components/youtube-facade";
import { approachContent, type ApproachSection } from "@/content/approach";
import { contactEmail, pagePath, type Locale } from "@/content/locales";
import { siteContent } from "@/content/site";

function ProseSection({ section, number }: { section: ApproachSection; number?: string | undefined }) {
  const title = section.title?.trim();
  return (
    <section className="lg:grid lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-12">
      {title && (
        <div className="mb-7 grid gap-3 md:grid-cols-[3rem_1fr] md:items-start lg:sticky lg:top-24 lg:mb-0 lg:block lg:self-start">
          {number ? <span className="pt-2 text-xs font-bold text-gold lg:block lg:pt-0">{number}</span> : null}
          <h2 className="font-display text-3xl font-medium leading-tight text-primary md:text-4xl lg:mt-3">
            {title}
          </h2>
        </div>
      )}
      <div className={title ? "" : "lg:col-span-2"}>
        <div className="space-y-5">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-foreground/85 md:text-lg md:leading-9">
              {paragraph}
            </p>
          ))}
        </div>
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
