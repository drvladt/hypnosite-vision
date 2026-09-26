import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/social-icon";
import { siteContent } from "@/content/site";
import type { InfoPage } from "@/content/site-types";
import {
  contactEmail,
  pagePath,
  socialLinks,
  type Locale,
} from "@/content/locales";

const WRAP = "mx-auto w-full max-w-4xl px-5 lg:px-8";

const labels: Record<Locale, { social: string; emailTitle: string; emailNote: string }> = {
  ru: {
    social: "Социальные сети",
    emailTitle: "Электронная почта",
    emailNote: "По организационным вопросам и другим темам",
  },
  en: {
    social: "Social networks",
    emailTitle: "Email",
    emailNote: "For organizational matters and other topics",
  },
  fr: {
    social: "Réseaux sociaux",
    emailTitle: "E-mail",
    emailNote: "Pour les questions organisationnelles et autres sujets",
  },
};

/** Page header reused from the generic info-page layout. */
function PageHeader({ page }: { page: InfoPage }) {
  return (
    <header className="pt-12 md:pt-16">
      <p className="eyebrow">{page.eyebrow}</p>
      <h1 className="section-title mt-3">{page.title}</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {page.lead}
      </p>
    </header>
  );
}

function Sections({ page }: { page: InfoPage }) {
  return (
    <div className="mt-10 space-y-10">
      {page.sections.map((section, index) => (
        <section key={index}>
          {section.heading && (
            <h2 className="font-display text-xl font-medium text-primary md:text-2xl">
              {section.heading}
            </h2>
          )}
          {section.paragraphs?.map((text, i) => (
            <p key={i} className="mt-4 text-base leading-relaxed text-foreground/90">
              {text}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}

export function ContactPageView({ locale }: { locale: Locale }) {
  const c = siteContent[locale];
  const page = c.info.contact;
  const t = labels[locale];

  return (
    <div className={`${WRAP} pb-16`}>
      <PageHeader page={page} />
      <Sections page={page} />

      {/* Email block */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-primary/12 bg-secondary/30 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-base font-medium text-foreground">
                {t.emailTitle}
              </h2>
              <p className="text-xs text-muted-foreground">{t.emailNote}</p>
            </div>
          </div>
          <a
            href={`mailto:${contactEmail}`}
            className="mt-5 inline-flex items-center gap-2 font-display text-lg font-medium text-primary transition-colors hover:text-gold"
          >
            {contactEmail}
          </a>
        </div>

        {/* Social networks */}
        <div className="rounded-3xl border border-primary/12 bg-secondary/30 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MessageCircle className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-base font-medium text-foreground">
                {t.social}
              </h2>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.label}
                title={link.label}
                className="group flex size-12 items-center justify-center rounded-full border border-primary/15 bg-background text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold hover:shadow-[0_8px_20px_-12px_color-mix(in_oklab,var(--gold)_60%,transparent)]"
              >
                <SocialIcon type={link.type} className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Primary path — consultation CTA */}
      <div className="mt-6 rounded-3xl border border-primary/12 bg-card p-6 shadow-[0_10px_30px_-24px_color-mix(in_oklab,var(--primary)_40%,transparent)] md:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-lg font-medium text-primary md:text-xl">
            {c.common.ctaPrimary}
          </h2>
          <Button
            asChild
            size="lg"
            className="h-12 shrink-0 rounded-full px-6 text-sm shadow-none"
          >
            <Link to={pagePath(locale, "consultation")}>
              {c.common.ctaPrimary}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
