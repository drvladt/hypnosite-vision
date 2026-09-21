import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { legalContent, type LegalPageKey } from "@/content/legal";
import { legalConfig, missingLegalVars } from "@/content/legal-config";
import type { LegalBlock, LegalDoc } from "@/content/legal-types";
import { homePath, pagePath, type Locale } from "@/content/locales";
import { createCase } from "@/lib/case-api";
import { startIntakeSession } from "@/lib/intake-session";


const WRAP = "mx-auto w-full max-w-4xl px-5 lg:px-8";
const NOT_READY = missingLegalVars.length > 0;

function NotReadyBanner({ text }: { text: string }) {
  return (
    <div className="mt-8 flex gap-3 rounded-2xl border border-gold/50 bg-gold/10 p-4 text-sm leading-relaxed text-foreground">
      <AlertTriangle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
}

function Block({
  heading,
  paragraphs,
  bullets,
}: {
  heading?: string | undefined;
  paragraphs?: string[] | undefined;
  bullets?: string[] | undefined;
}) {
  return (
    <div className="mt-5">
      {heading && <h3 className="font-display text-base font-medium text-primary md:text-lg">{heading}</h3>}
      {paragraphs?.map((text, i) => (
        <p key={i} className="mt-3 text-base leading-relaxed text-foreground/90">
          {text}
        </p>
      ))}
      {bullets && (
        <ul className="mt-4 space-y-2.5 border-l-2 border-gold/40 pl-6">
          {bullets.map((text, i) => (
            <li key={i} className="relative text-base leading-relaxed text-foreground/90">
              <span className="absolute -left-[1.85rem] top-2.5 size-1.5 rotate-45 bg-gold" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Privacy policy, consent text and terms of use — calm document layout, no animation. */
export function LegalDocView({ locale, page }: { locale: Locale; page: LegalPageKey }) {
  const content = legalContent[locale];
  const doc: LegalDoc = content[page];

  return (
    <div className={`${WRAP} pb-16`}>
      <header className="pt-12 md:pt-16">
        <p className="eyebrow">{doc.eyebrow}</p>
        <h1 className="section-title mt-3">{doc.title}</h1>
        <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{doc.versionLine}</p>
        {doc.lead.map((text, i) => (
          <p key={i} className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {text}
          </p>
        ))}
      </header>

      {NOT_READY && <NotReadyBanner text={content.notReadyWarning} />}

      <nav className="mt-10 rounded-2xl border border-primary/12 bg-secondary/40 p-5">
        <p className="font-display text-base font-medium text-primary">{doc.tocTitle}</p>
        <ol className="mt-3 space-y-1.5">
          {doc.sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="text-sm text-primary underline underline-offset-4">
                {section.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-10 space-y-10">
        {doc.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <h2 className="font-display text-xl font-medium text-primary md:text-2xl">{section.heading}</h2>
            <Block paragraphs={section.paragraphs} bullets={section.bullets} />
            {section.subsections?.map((sub, i) => (
              <Block key={i} heading={sub.heading} paragraphs={sub.paragraphs} bullets={sub.bullets} />
            ))}
          </section>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        {doc.actions.map((action) => (
          <Button
            key={action.page}
            asChild
            size="lg"
            variant={action.page === "consultation" ? "default" : "outline"}
            className="h-12 rounded-full px-6 text-sm shadow-none"
          >
            <Link to={pagePath(locale, action.page)}>{action.label}</Link>
          </Button>
        ))}
        {doc.mailAction && doc.mailAction.email && (
          <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-6 text-sm shadow-none">
            <a href={`mailto:${doc.mailAction.email}`}>{doc.mailAction.label}</a>
          </Button>
        )}
      </div>
    </div>
  );
}

/** Mandatory step before the intake form: information + three explicit confirmations. */
export function ConsentGatePageView({ locale }: { locale: Locale }) {
  const content = legalContent[locale];
  const page = content.consultation;
  const navigate = useNavigate();
  const [checked, setChecked] = useState({ policy: false, health: false, boundaries: false });
  const [status, setStatus] = useState<"idle" | "pending" | "issued" | "error">("idle");
  const [caseCode, setCaseCode] = useState<string | null>(null);
  const allChecked = checked.policy && checked.health && checked.boundaries;

  const proceed = async () => {
    if (!allChecked || status === "pending") return;
    setStatus("pending");
    try {
      const result = await createCase(locale, checked);
      startIntakeSession(legalConfig.consentVersion, result.patientId);
      setCaseCode(result.patientId);
      setStatus("issued");
      window.setTimeout(() => {
        void navigate({ to: pagePath(locale, "intake") });
      }, result.patientId ? 1600 : 200);
    } catch {
      setStatus("error");
    }
  };


  return (
    <div className={`${WRAP} pb-16`}>
      <header className="pt-12 md:pt-16">
        <p className="eyebrow">{page.step}</p>
        <h1 className="section-title mt-3">{page.title}</h1>
        {page.intro.map((text, i) => (
          <p key={i} className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {text}
          </p>
        ))}
      </header>

      {NOT_READY && <NotReadyBanner text={content.notReadyWarning} />}

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="space-y-8">
          <section>
            <h2 className="font-display text-xl font-medium text-primary md:text-2xl">{page.next.title}</h2>
            <ol className="mt-4 space-y-3">
              {page.next.items.map((text, i) => (
                <li key={i} className="flex gap-3 text-base leading-relaxed text-foreground/90">
                  <span className="mt-0.5 font-display text-sm text-gold">{i + 1}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-2xl border border-primary/12 bg-secondary/40 p-5">
            <h2 className="font-display text-lg font-medium text-primary">{page.access.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/90">{page.access.text}</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-primary md:text-2xl">{page.important.title}</h2>
            <ul className="mt-4 space-y-3 border-l-2 border-gold/40 pl-6">
              {page.important.bullets.map((text, i) => (
                <li key={i} className="relative text-base leading-relaxed text-foreground/90">
                  <span className="absolute -left-[1.85rem] top-2.5 size-1.5 rotate-45 bg-gold" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          </section>

          <div className="flex gap-3 rounded-2xl border border-gold/50 bg-gold/10 p-4 text-sm leading-relaxed text-foreground">
            <AlertTriangle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            <span>{page.emergency}</span>
          </div>

          <section>
            <h2 className="font-display text-xl font-medium text-primary md:text-2xl">{page.summary.title}</h2>
            {page.summary.paragraphs.map((text, i) => (
              <p key={i} className="mt-3 text-base leading-relaxed text-foreground/90">
                {text}
              </p>
            ))}
            <ul className="mt-4 space-y-2">
              {page.summary.links.map((link) => (
                <li key={link.page}>
                  <Link
                    to={pagePath(locale, link.page)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary underline underline-offset-4"
                  >
                    {link.label}
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-primary/12 bg-card p-6 md:p-7">
            <h2 className="flex items-center gap-2 font-display text-xl font-medium text-primary">
              <ShieldCheck className="size-5 text-gold" aria-hidden="true" />
              {page.panel.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{page.panel.note}</p>

            <div className="mt-6 space-y-4">
              {page.panel.items.map((item) => (
                <div key={item.id} className="flex gap-3 rounded-2xl border border-border/70 bg-background p-4">
                  <input
                    id={`consent-${item.id}`}
                    type="checkbox"
                    checked={checked[item.id]}
                    onChange={(event) =>
                      setChecked((value) => ({ ...value, [item.id]: event.target.checked }))
                    }
                    className="mt-0.5 size-4 shrink-0 cursor-pointer accent-[var(--primary)]"
                  />
                  <div className="text-sm leading-relaxed text-foreground/90">
                    <label htmlFor={`consent-${item.id}`} className="cursor-pointer">
                      {item.textBefore}
                      {item.linkLabel && item.linkPage && (
                        <Link
                          to={pagePath(locale, item.linkPage)}
                          target="_blank"
                          rel="noreferrer"
                          className="text-primary underline underline-offset-4"
                        >
                          {item.linkLabel}
                        </Link>
                      )}
                      {item.textAfter}
                    </label>
                    {item.extraLinkLabel && item.extraLinkPage && (
                      <Link
                        to={pagePath(locale, item.extraLinkPage)}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-2 text-sm text-primary underline underline-offset-4"
                      >
                        {item.extraLinkLabel}
                        <ExternalLink className="size-3.5" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {error && (
              <p role="alert" tabIndex={-1} className="mt-5 text-sm leading-relaxed text-destructive">
                {page.panel.errorText}
              </p>
            )}

            <Button
              size="lg"
              disabled={!allChecked}
              onClick={proceed}
              className="mt-6 h-12 w-full rounded-full px-6 text-sm shadow-none"
            >
              {page.panel.button}
              <ArrowRight aria-hidden="true" />
            </Button>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              {allChecked ? page.panel.buttonNote : page.panel.blockedNote}
            </p>

            <div className="mt-5">
              <Link to={homePath[locale]} className="text-sm text-primary underline underline-offset-4">
                {page.panel.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
