import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, Check, FileText, Info, MessageCircle, Paperclip } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site";
import type { InfoPage } from "@/content/site-types";
import { contactEmail, homePath, pagePath, type Locale } from "@/content/locales";
import { intakeFormUrl } from "@/lib/case-api";
import {
  markIntakeDone,
  readIntakeSession,
  restoreIntakeSession,
  type IntakeSession,
} from "@/lib/intake-session";


const WRAP = "mx-auto w-full max-w-4xl px-5 lg:px-8";

function PageHeader({ page }: { page: InfoPage }) {
  return (
    <header className="pt-12 md:pt-16">
      <p className="eyebrow">{page.eyebrow}</p>
      <h1 className="section-title mt-3">{page.title}</h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{page.lead}</p>
    </header>
  );
}

function Notice({ text, tone = "info" }: { text: string; tone?: "info" | "warn" }) {
  const Icon = tone === "warn" ? AlertTriangle : Info;
  return (
    <div
      className={`mt-8 flex gap-3 rounded-2xl border p-4 text-sm leading-relaxed ${
        tone === "warn" ? "border-gold/40 bg-gold/8 text-foreground" : "border-primary/15 bg-secondary/40 text-muted-foreground"
      }`}
    >
      <Icon className={`mt-0.5 size-4 shrink-0 ${tone === "warn" ? "text-gold" : "text-primary"}`} aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
}

function Sections({ page }: { page: InfoPage }) {
  return (
    <div className="mt-10 space-y-10">
      {page.sections.map((section, index) => (
        <section key={index}>
          {section.heading && (
            <h2 className="font-display text-xl font-medium text-primary md:text-2xl">{section.heading}</h2>
          )}
          {section.paragraphs?.map((text, i) => (
            <p key={i} className="mt-4 text-base leading-relaxed text-foreground/90">
              {text}
            </p>
          ))}
          {section.bullets && (
            <ul className="mt-5 space-y-3 border-l-2 border-gold/40 pl-6">
              {section.bullets.map((text, i) => (
                <li key={i} className="relative text-base leading-relaxed text-foreground/90">
                  <span className="absolute -left-[1.85rem] top-2.5 size-1.5 rotate-45 bg-gold" aria-hidden="true" />
                  {text}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}

function FlowCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 rounded-3xl border border-primary/12 bg-card p-6 shadow-[0_10px_30px_-24px_color-mix(in_oklab,var(--primary)_40%,transparent)] md:p-8">
      {children}
    </div>
  );
}

function CaseCode({ label, code }: { label: string; code: string | null }) {
  if (!code) return null;
  return (
    <p className="text-xs uppercase tracking-widest text-muted-foreground">
      {label}: <span className="font-display text-base normal-case tracking-normal text-gold">{code}</span>
    </p>
  );
}


/** Information and legal pages. */
export function InfoPageView({ locale, page }: { locale: Locale; page: InfoPage }) {
  const c = siteContent[locale];
  return (
    <div className={`${WRAP} pb-16`}>
      <PageHeader page={page} />
      {page.draft && <Notice text={c.common.draftNotice} tone="warn" />}
      {page.pending && <Notice text={c.common.pendingNotice} />}
      <Sections page={page} />
      <div className="mt-12 flex flex-wrap gap-3">
        <Button asChild size="lg" className="h-12 rounded-full px-6 text-sm shadow-none">
          <Link to={pagePath(locale, "consultation")}>
            {c.common.ctaPrimary}
            <MessageCircle aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-6 text-sm shadow-none">
          <a href={`mailto:${contactEmail}`}>{c.common.writeLabel}</a>
        </Button>
      </div>
    </div>
  );
}

/** Guard: the flow pages only open once the consents are given. */

function useFlowSession() {
  const [state, setState] = useState<{ ready: boolean; session: IntakeSession | null }>({
    ready: false,
    session: null,
  });
  useEffect(() => {
    setState({ ready: true, session: readIntakeSession() });
  }, []);
  return [state, setState] as const;
}

function ConsentRequired({ locale }: { locale: Locale }) {
  const c = siteContent[locale];
  return (
    <FlowCard>
      <h2 className="font-display text-xl font-medium text-primary">{c.intake.missingConsentTitle}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.intake.missingConsentText}</p>
      <Button asChild size="lg" className="mt-6 h-12 rounded-full px-6 text-sm shadow-none">
        <Link to={pagePath(locale, "consultation")}>
          {c.intake.missingConsentAction}
          <ArrowRight aria-hidden="true" />
        </Link>
      </Button>
    </FlowCard>
  );
}

export function IntakePageView({ locale }: { locale: Locale }) {
  const c = siteContent[locale];
  const page = c.intake;
  const navigate = useNavigate();
  const [{ ready, session }] = useFlowSession();

  const continueToDocuments = () => {
    markIntakeDone();
    void navigate({ to: pagePath(locale, "documents") });
  };

  return (
    <div className={`${WRAP} pb-16`}>
      <PageHeader page={page} />
      <Sections page={page} />
      {!ready ? null : !session ? (
        <ConsentRequired locale={locale} />
      ) : (
        <FlowCard>
          <CaseCode label={page.caseLabel} code={session.caseCode} />
          {session.caseCode ? (
            <div className="mt-5 overflow-hidden rounded-2xl border border-primary/20">
              <iframe
                src={`${intakeFormUrl(session.caseCode)}&embedded=true`}
                title={page.title}
                className="h-[70vh] w-full"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="mt-5 flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-primary/25 bg-secondary/30 p-6 text-center">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="size-4 text-primary" aria-hidden="true" />
                {page.formPlaceholder}
              </p>
            </div>
          )}
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{page.demoNote}</p>

          <Button size="lg" onClick={continueToDocuments} className="mt-6 h-12 rounded-full px-6 text-sm shadow-none">
            {page.continueLabel}
            <ArrowRight aria-hidden="true" />
          </Button>
        </FlowCard>
      )}
    </div>
  );
}

export function DocumentsPageView({ locale }: { locale: Locale }) {
  const c = siteContent[locale];
  const page = c.documents;
  const navigate = useNavigate();
  const [{ ready, session }, setState] = useFlowSession();
  const [files, setFiles] = useState(0);
  const [code, setCode] = useState("");
  const [restoreError, setRestoreError] = useState(false);

  const finish = () => void navigate({ to: pagePath(locale, "thanks") });

  const restore = () => {
    const restored = restoreIntakeSession(code, c.consultation.consent.version);
    if (!restored) {
      setRestoreError(true);
      return;
    }
    setRestoreError(false);
    setState({ ready: true, session: restored });
  };

  return (
    <div className={`${WRAP} pb-16`}>
      <PageHeader page={page} />
      <Sections page={page} />
      {!ready ? null : !session ? (
        <FlowCard>
          <h2 className="font-display text-xl font-medium text-primary">{page.errorTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{page.errorText}</p>
          <div className="mt-5 flex flex-wrap items-end gap-3">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">
              {page.restoreLabel}
              <input
                value={code}
                onChange={(event) => setCode(event.target.value)}
                placeholder={page.restorePlaceholder}
                className="mt-2 block h-11 w-44 rounded-full border border-border bg-background px-4 text-sm normal-case tracking-normal text-foreground outline-none transition-colors focus:border-gold/60"
              />
            </label>
            <Button size="lg" onClick={restore} className="h-11 rounded-full px-6 text-sm shadow-none">
              {page.restoreAction}
            </Button>
          </div>
          {restoreError && (
            <p className="mt-3 text-xs text-destructive">
              {page.restoreLabel}: {page.restorePlaceholder}
            </p>
          )}
          <div className="mt-6">
            <Link to={pagePath(locale, "consultation")} className="text-sm text-primary underline underline-offset-4">
              {c.intake.missingConsentAction}
            </Link>
          </div>
        </FlowCard>
      ) : (
        <FlowCard>
          <CaseCode label={page.caseLabel} code={session.caseCode} />
          <p className="mt-4 text-sm text-muted-foreground">{page.optionalNote}</p>
          <label className="mt-5 flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-primary/25 bg-secondary/30 p-5 text-sm text-foreground/90 transition-colors hover:border-gold/45">
            <Paperclip className="size-4 text-primary" aria-hidden="true" />
            {page.pickLabel}
            <input
              type="file"
              multiple
              className="hidden"
              onChange={(event) => setFiles(event.target.files?.length ?? 0)}
            />
          </label>
          {files > 0 && (
            <p className="mt-3 flex items-center gap-2 text-sm text-primary">
              <Check className="size-4" aria-hidden="true" />
              {page.selectedLabel}: {files}
            </p>
          )}
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{c.intake.demoNote}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" onClick={finish} className="h-12 rounded-full px-6 text-sm shadow-none">
              {page.continueLabel}
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={finish}
              className="h-12 rounded-full px-6 text-sm shadow-none"
            >
              {page.skipLabel}
            </Button>
          </div>
        </FlowCard>
      )}
    </div>
  );
}

export function ThanksPageView({ locale }: { locale: Locale }) {
  const c = siteContent[locale];
  const page = c.thanks;
  const [{ ready, session }] = useFlowSession();

  return (
    <div className={`${WRAP} pb-16`}>
      <PageHeader page={page} />
      <Sections page={page} />
      {ready && session && (
        <FlowCard>
          <CaseCode label={page.caseLabel} code={session.caseCode} />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{page.caseHint}</p>
        </FlowCard>
      )}
      <div className="mt-10">
        <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-6 text-sm shadow-none">
          <Link to={homePath[locale]}>{page.homeLabel}</Link>
        </Button>
      </div>
    </div>
  );
}
