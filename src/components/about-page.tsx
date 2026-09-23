import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import childhood from "@/assets/about/childhood.jpg.asset.json";
import endovascular from "@/assets/about/endovascular-work.png.asset.json";
import graduation from "@/assets/about/graduation.jpg.asset.json";
import mhcc from "@/assets/about/mhcc.jpg.asset.json";
import mhccSecond from "@/assets/about/mhcc-2.jpg.asset.json";
import nightShift from "@/assets/about/night-shift-libya.jpg.asset.json";
import rspcMinsk from "@/assets/about/rspc-minsk.jpg.asset.json";
import togo from "@/assets/about/togo-2022.jpg.asset.json";
import university from "@/assets/about/university.jpg.asset.json";
import workAtMhcc from "@/assets/about/work-at-mhcc.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { aboutContent, type AboutSection } from "@/content/about";
import { contactEmail, pagePath, type Locale } from "@/content/locales";
import { siteContent } from "@/content/site";

type EditorialImageProps = {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  imageClassName?: string;
};

function EditorialImage({ src, alt, caption, className = "", imageClassName = "" }: EditorialImageProps) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-md bg-muted">
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${imageClassName}`}
          loading="lazy"
        />
      </div>
      <figcaption className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="h-px w-8 bg-gold" aria-hidden="true" />
        {caption}
      </figcaption>
    </figure>
  );
}

function ProseSection({ section, number }: { section: AboutSection; number: string }) {
  return (
    <section>
      {section.title && (
        <div className="mb-7 grid gap-3 md:grid-cols-[3rem_1fr] md:items-start">
          <span className="pt-2 text-xs font-bold text-gold">{number}</span>
          <h2 className="font-display text-3xl font-medium leading-tight text-primary md:text-4xl">
            {section.title}
          </h2>
        </div>
      )}
      <div className={section.title ? "md:pl-12" : ""}>
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

export function AboutPageView({ locale }: { locale: Locale }) {
  const c = aboutContent[locale];
  const common = siteContent[locale].common;
  const [origins, education, countries, hypnotherapy, today, belief] = c.sections;

  if (!origins || !education || !countries || !hypnotherapy || !today || !belief) return null;

  return (
    <article className="pb-20 md:pb-28">
      <header className="mx-auto grid w-full max-w-6xl gap-10 px-5 pt-12 md:grid-cols-[minmax(0,1.05fr)_minmax(18rem,.72fr)] md:items-end md:px-8 md:pt-16">
        <div className="pb-2 md:pb-10">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="section-title mt-4 max-w-4xl">{c.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9">
            {c.lead}
          </p>
        </div>
        <EditorialImage
          src={childhood.url}
          alt={c.captions.childhood}
          caption={c.captions.childhood}
          className="mx-auto w-full max-w-sm md:mx-0"
          imageClassName="aspect-[3/4] object-[center_38%]"
        />
      </header>

      <div className="mx-auto mt-16 w-full max-w-4xl px-5 md:mt-24 md:px-8">
        <ProseSection section={origins} number="01" />
      </div>

      <section className="mt-20 border-y border-border bg-secondary/35 py-16 md:mt-28 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <ProseSection section={education} number="02" />
          <div className="mt-12 grid gap-5 md:grid-cols-[1.25fr_.75fr] md:items-end">
            <EditorialImage
              src={university.url}
              alt={c.captions.university}
              caption={c.captions.university}
              imageClassName="aspect-[16/10]"
            />
            <EditorialImage
              src={graduation.url}
              alt={c.captions.graduation}
              caption={c.captions.graduation}
              imageClassName="aspect-[4/5] object-[center_42%]"
            />
          </div>
          <EditorialImage
            src={endovascular.url}
            alt={c.captions.endovascular}
            caption={c.captions.endovascular}
            className="mt-12 md:ml-auto md:w-[72%]"
            imageClassName="aspect-[16/10] object-[center_42%]"
          />
        </div>
      </section>

      <div className="mx-auto mt-20 w-full max-w-6xl px-5 md:mt-28 md:px-8">
        <ProseSection section={countries} number="03" />
        <div className="mt-12 grid gap-8 md:grid-cols-[.7fr_1.3fr] md:items-center">
          <EditorialImage
            src={togo.url}
            alt={c.captions.togo}
            caption={c.captions.togo}
            imageClassName="aspect-[3/4] object-[center_42%]"
          />
          <EditorialImage
            src={rspcMinsk.url}
            alt={c.captions.minsk}
            caption={c.captions.minsk}
            imageClassName="aspect-[16/10]"
          />
        </div>
      </div>

      <section className="mx-auto mt-20 grid w-full max-w-6xl gap-12 px-5 md:mt-28 md:grid-cols-[minmax(17rem,.68fr)_minmax(0,1.32fr)] md:px-8">
        <div className="md:sticky md:top-28 md:self-start">
          <EditorialImage
            src={mhccSecond.url}
            alt={c.captions.libya}
            caption={c.captions.libya}
            imageClassName="aspect-[4/5] object-[center_40%]"
          />
        </div>
        <ProseSection section={hypnotherapy} number="04" />
      </section>

      <section className="mt-20 bg-primary py-16 text-primary-foreground md:mt-28 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="[&_blockquote]:text-gold-light [&_h2]:text-primary-foreground [&_p]:text-primary-foreground/80">
            <ProseSection section={today} number="05" />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <EditorialImage
              src={mhcc.url}
              alt={c.captions.libya}
              caption={c.captions.libya}
              imageClassName="aspect-[4/3]"
            />
            <EditorialImage
              src={nightShift.url}
              alt={c.captions.libya}
              caption={c.captions.libya}
              imageClassName="aspect-[4/3] object-[center_35%]"
            />
            <EditorialImage
              src={workAtMhcc.url}
              alt={c.captions.team}
              caption={c.captions.team}
              className="sm:col-span-2 md:col-span-1"
              imageClassName="aspect-[4/3] object-[center_38%]"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto mt-20 w-full max-w-4xl px-5 md:mt-28 md:px-8">
        <ProseSection section={belief} number="06" />
        <div className="mt-14 flex flex-wrap gap-3 border-t border-border pt-10">
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