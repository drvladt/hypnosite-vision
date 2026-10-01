import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import childhood from "@/assets/about/childhood.jpg";
import endovascular from "@/assets/about/endovascular-work.png";
import graduation from "@/assets/about/graduation.jpg";
import hypnotherapyCertificate from "@/assets/about/hypnotherapy-certificate.png";
import mhcc from "@/assets/about/mhcc.jpg";
import mhccSecond from "@/assets/about/mhcc-2.jpg";
import nightShift from "@/assets/about/night-shift-libya.jpg";
import rspcMinsk from "@/assets/about/rspc-minsk.jpg";
import togo from "@/assets/about/togo-2022.jpg";
import university from "@/assets/about/university.jpg";
import workAtMhcc from "@/assets/about/work-at-mhcc.jpg";
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
        <div className="space-y-4">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7 text-foreground/85 md:text-lg md:leading-8">
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
          src={childhood}
          alt={c.captions.childhood}
          caption={c.captions.childhood}
          className="mx-auto w-full max-w-sm md:mx-0"
          imageClassName="aspect-[3/4] object-[center_38%]"
        />
      </header>

      <div className="mx-auto mt-12 w-full max-w-4xl px-5 md:mt-16 md:px-8">
        <ProseSection section={origins} number="01" />
      </div>

      <section className="mt-12 border-y border-border bg-secondary/35 py-12 md:mt-16 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <ProseSection section={education} number="02" />
          <div className="mt-10 grid gap-5 md:grid-cols-[1.25fr_.75fr] md:items-end">
            <EditorialImage
              src={university}
              alt={c.captions.university}
              caption={c.captions.university}
              imageClassName="aspect-[16/10]"
            />
            <EditorialImage
              src={graduation}
              alt={c.captions.graduation}
              caption={c.captions.graduation}
              imageClassName="aspect-[4/5] object-[center_42%]"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto mt-12 w-full max-w-6xl px-5 md:mt-16 md:px-8">
        <ProseSection
          section={{ title: countries.title ?? "", paragraphs: countries.paragraphs.slice(0, 2) }}
          number="03"
        />
        <EditorialImage
          src={togo}
          alt={c.captions.togo}
          caption={c.captions.togo}
          className="mt-10 md:ml-12 md:w-[44%]"
          imageClassName="aspect-[3/4] object-[center_42%]"
        />
        <div className="mt-10 md:pl-12">
          <ProseSection
            section={{ paragraphs: countries.paragraphs.slice(2), emphasis: countries.emphasis ?? "" }}
            number=""
          />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-center">
          <EditorialImage
            src={rspcMinsk}
            alt={c.captions.minsk}
            caption={c.captions.minsk}
            imageClassName="aspect-[16/10]"
          />
          <EditorialImage
            src={endovascular}
            alt={c.captions.endovascular}
            caption={c.captions.endovascular}
            imageClassName="aspect-[16/10] object-[center_42%]"
          />
        </div>
      </div>

      <section className="mx-auto mt-12 w-full max-w-4xl px-5 md:mt-16 md:px-8">
        <ProseSection
          section={{ title: hypnotherapy.title ?? "", paragraphs: hypnotherapy.paragraphs.slice(0, 3) }}
          number="04"
        />
        <EditorialImage
          src={hypnotherapyCertificate}
          alt={c.captions.certificate}
          caption={c.captions.certificate}
          className="mt-10 md:ml-12"
          imageClassName="aspect-[1.45/1] object-contain"
        />
        <div className="mt-10 md:pl-12">
          <ProseSection section={{ paragraphs: hypnotherapy.paragraphs.slice(3) }} number="" />
        </div>
      </section>

      <section className="mt-12 bg-primary py-12 text-primary-foreground md:mt-16 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
          <div className="[&_blockquote]:text-gold-light [&_h2]:text-primary-foreground [&_p]:text-primary-foreground/80">
            <ProseSection section={today} number="05" />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 [&_figcaption]:text-primary-foreground/65">
            <EditorialImage
              src={mhcc}
              alt={c.captions.libya}
              caption={c.captions.libya}
              imageClassName="aspect-[4/3]"
            />
            <EditorialImage
              src={nightShift}
              alt={c.captions.nightShift}
              caption={c.captions.nightShift}
              imageClassName="aspect-[4/3] object-[center_35%]"
            />
            <EditorialImage
              src={mhccSecond}
              alt={c.captions.libya}
              caption={c.captions.libya}
              imageClassName="aspect-[4/3] object-[center_40%]"
            />
            <EditorialImage
              src={workAtMhcc}
              alt={c.captions.team}
              caption={c.captions.team}
              imageClassName="aspect-[4/3] object-contain"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto mt-12 w-full max-w-4xl px-5 md:mt-16 md:px-8">
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