import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  FileText,
  Info,
  MessageCircle,
  Loader2,
  Paperclip,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { siteContent } from "@/content/site";
import type { InfoPage } from "@/content/site-types";
import { contactEmail, homePath, pagePath, type Locale } from "@/content/locales";
import { intakeFormUrl } from "@/lib/case-api";
import {
  markIntakeDone,
  readIntakeSession,
  restoreIntakeSession,
  completeIntakeSession,
  type IntakeSession,
} from "@/lib/intake-session";

const WRAP = "mx-auto w-full max-w-4xl px-5 lg:px-8";

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

function Notice({ text, tone = "info" }: { text: string; tone?: "info" | "warn" }) {
  const Icon = tone === "warn" ? AlertTriangle : Info;
  return (
    <div
      className={`mt-8 flex gap-3 rounded-2xl border p-4 text-sm leading-relaxed ${
        tone === "warn"
          ? "border-gold/40 bg-gold/8 text-foreground"
          : "border-primary/15 bg-secondary/40 text-muted-foreground"
      }`}
    >
      <Icon
        className={`mt-0.5 size-4 shrink-0 ${tone === "warn" ? "text-gold" : "text-primary"}`}
        aria-hidden="true"
      />
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
            <h2 className="font-display text-xl font-medium text-primary md:text-2xl">
              {section.heading}
            </h2>
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
                  <span
                    className="absolute -left-[1.85rem] top-2.5 size-1.5 rotate-45 bg-gold"
                    aria-hidden="true"
                  />
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
      {label}:{" "}
      <span className="font-display text-base normal-case tracking-normal text-gold">{code}</span>
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
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-12 rounded-full px-6 text-sm shadow-none"
        >
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
      <h2 className="font-display text-xl font-medium text-primary">
        {c.intake.missingConsentTitle}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {c.intake.missingConsentText}
      </p>
      <Button asChild size="lg" className="mt-6 h-12 rounded-full px-6 text-sm shadow-none">
        <Link to={pagePath(locale, "consultation")}>
          {c.intake.missingConsentAction}
          <ArrowRight aria-hidden="true" />
        </Link>
      </Button>
    </FlowCard>
  );
}

const RESTORE_TEXT: Record<
  Locale,
  { title: string; text: string; label: string; action: string; invalid: string; completed: string; newRequest: string }
> = {
  ru: {
    title: "У меня уже есть код",
    text: "Если вы уже получили код обращения, введите его, чтобы вернуться к анкете.",
    label: "Код обращения",
    action: "Открыть анкету",
    invalid: "Проверьте код: он должен выглядеть как DV000123.",
    completed:
      "Это обращение уже отправлено и принято в работу. Изменить его или вернуться к нему нельзя. Чтобы отправить новые данные, оформите новое обращение.",
    newRequest: "Оформить новое обращение",
  },
  en: {
    title: "I already have a code",
    text: "If you have already received a reference code, enter it to return to the questionnaire.",
    label: "Reference code",
    action: "Open the questionnaire",
    invalid: "Please check the code: it should look like DV000123.",
    completed:
      "This request has already been submitted and is being processed. It can no longer be changed or reopened. To send new information, please start a new request.",
    newRequest: "Start a new request",
  },
  fr: {
    title: "J'ai déjà un code",
    text: "Si vous avez déjà reçu un code de dossier, saisissez-le pour revenir au questionnaire.",
    label: "Code de dossier",
    action: "Ouvrir le questionnaire",
    invalid: "Vérifiez le code : il doit ressembler à DV000123.",
    completed:
      "Cette demande a déjà été envoyée et est en cours de traitement. Elle ne peut plus être modifiée ni rouverte. Pour transmettre de nouvelles informations, veuillez faire une nouvelle demande.",
    newRequest: "Faire une nouvelle demande",
  },
};

function CompletedNotice({ locale }: { locale: Locale }) {
  const t = RESTORE_TEXT[locale];
  return (
    <div className="mt-4 rounded-2xl border border-gold/50 bg-gold/10 p-4">
      <p role="alert" className="text-sm leading-relaxed text-foreground/90">{t.completed}</p>
      <Button asChild size="sm" className="mt-3 rounded-full shadow-none">
        <Link to={pagePath(locale, "consultation")}>
          {t.newRequest}
          <ArrowRight aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
}

function RestoreByCode({
  locale,
  intakeDone,
  onRestored,
}: {
  locale: Locale;
  intakeDone: boolean;
  onRestored: (session: IntakeSession) => void;
}) {
  const t = RESTORE_TEXT[locale];
  const [code, setCode] = useState("");
  const [error, setError] = useState<"invalid" | "completed" | null>(null);
  const submit = () => {
    const result = restoreIntakeSession(code, siteContent[locale].consultation.consent.version, intakeDone);
    if (result === "invalid" || result === "completed") {
      setError(result);
      return;
    }
    setError(null);
    onRestored(result);
  };
  return (
    <div>
      <h2 className="font-display text-xl font-medium text-primary">{t.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
      <form
        className="mt-5 flex flex-wrap items-end gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
      >
        <label className="text-xs uppercase tracking-widest text-muted-foreground">
          {t.label}
          <input
            value={code}
            onChange={(event) => setCode(event.target.value)}
            placeholder="DV000123"
            autoComplete="off"
            className="mt-2 block h-11 w-44 rounded-full border border-border bg-background px-4 text-sm normal-case tracking-normal text-foreground outline-none transition-colors focus:border-gold/60"
          />
        </label>
        <Button type="submit" size="lg" className="h-11 rounded-full px-6 text-sm shadow-none">
          {t.action}
        </Button>
      </form>
      {error === "invalid" && <p className="mt-3 text-xs text-destructive">{t.invalid}</p>}
      {error === "completed" && <CompletedNotice locale={locale} />}
    </div>
  );
}

export function IntakePageView({ locale }: { locale: Locale }) {
  const c = siteContent[locale];
  const page = c.intake;
  const navigate = useNavigate();
  const [{ ready, session }, setState] = useFlowSession();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const continueToDocuments = () => {
    if (!session?.caseCode || !formSubmitted) return;
    markIntakeDone();
    void navigate({ to: pagePath(locale, "documents") });
  };

  return (
    <div className={`${WRAP} pb-16`}>
      <PageHeader page={page} />
      <Sections page={page} />
      {!ready ? null : !session ? (
        <>
          <ConsentRequired locale={locale} />
          <FlowCard>
            <RestoreByCode
              locale={locale}
              intakeDone={false}
              onRestored={(restored) => setState({ ready: true, session: restored })}
            />
          </FlowCard>
        </>
      ) : (
        <FlowCard>
          <CaseCode label={page.caseLabel} code={session.caseCode} />
          {session.caseCode ? (
            <div className="-mx-4 mt-5 overflow-hidden rounded-2xl border border-primary/20 sm:-mx-6 md:mx-0">
              <iframe
                src={`${intakeFormUrl(session.caseCode, locale)}&embedded=true`}
                title={page.title}
                className="h-[85vh] min-h-[560px] w-full md:h-[90vh]"
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
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{page.formNote}</p>

          {session.caseCode && (
            <label
              htmlFor={`intake-form-submitted-${locale}`}
              className="mt-5 flex cursor-pointer items-start gap-3 rounded-2xl border border-primary/20 bg-secondary/30 p-4 text-sm leading-relaxed text-foreground/90"
            >
              <Checkbox
                id={`intake-form-submitted-${locale}`}
                checked={formSubmitted}
                onCheckedChange={(checked) => setFormSubmitted(checked === true)}
                className="mt-0.5"
              />
              <span>{page.formSubmittedLabel}</span>
            </label>
          )}

          <Button
            size="lg"
            onClick={continueToDocuments}
            disabled={!session.caseCode || !formSubmitted}
            className="mt-6 h-12 rounded-full px-6 text-sm shadow-none"
          >
            {page.continueLabel}
            <ArrowRight aria-hidden="true" />
          </Button>
        </FlowCard>
      )}
    </div>
  );
}

const MAX_FILES = 20;
const MAX_FILE_BYTES = 50 * 1024 * 1024;
const ACCEPT = ".pdf,.jpg,.jpeg,.png,.heic,.heif,.webp,.doc,.docx,.txt,.rtf";

export function DocumentsPageView({ locale }: { locale: Locale }) {
  const c = siteContent[locale];
  const page = c.documents;
  const navigate = useNavigate();
  const [{ ready, session }, setState] = useFlowSession();
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [restoreError, setRestoreError] = useState(false);

  const finish = () => void navigate({ to: pagePath(locale, "thanks") });

  const addFiles = (list: FileList | null) => {
    setUploadError(null);
    const picked = Array.from(list ?? []);
    const next = [...files, ...picked.filter((f) => f.size <= MAX_FILE_BYTES)];
    if (picked.some((f) => f.size > MAX_FILE_BYTES)) setUploadError(page.tooLargeLabel);
    if (next.length > MAX_FILES) setUploadError(page.tooManyLabel);
    setFiles(next.slice(0, MAX_FILES));
  };

  const submitFiles = async () => {
    if (!session || files.length === 0) return finish();
    setUploading(true);
    setUploadError(null);
    const remaining: File[] = [];
    for (const file of files) {
      try {
        const res = await fetch("/api/public/upload-document", {
          method: "PUT",
          headers: {
            "Content-Type": file.type || "application/octet-stream",
            "x-case-code": session.caseCode ?? "",
            "x-file-name": encodeURIComponent(file.name),
          },
          body: file,
        });
        if (!res.ok) remaining.push(file);
      } catch {
        remaining.push(file);
      }
    }
    setUploading(false);
    if (remaining.length) {
      setFiles(remaining);
      setUploadError(page.uploadErrorLabel);
      return;
    }
    finish();
  };

  const [restoreCompleted, setRestoreCompleted] = useState(false);
  const restore = () => {
    const restored = restoreIntakeSession(code, c.consultation.consent.version);
    if (restored === "invalid" || restored === "completed") {
      setRestoreError(restored === "invalid");
      setRestoreCompleted(restored === "completed");
      return;
    }
    setRestoreError(false);
    setRestoreCompleted(false);
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
            <Button
              size="lg"
              onClick={restore}
              className="h-11 rounded-full px-6 text-sm shadow-none"
            >
              {page.restoreAction}
            </Button>
          </div>
          {restoreError && (
            <p className="mt-3 text-xs text-destructive">
              {page.restoreLabel}: {page.restorePlaceholder}
            </p>
          )}
          {restoreCompleted && <CompletedNotice locale={locale} />}
          <div className="mt-6">
            <Link
              to={pagePath(locale, "consultation")}
              className="text-sm text-primary underline underline-offset-4"
            >
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
              accept={ACCEPT}
              disabled={uploading}
              className="hidden"
              onChange={(event) => {
                addFiles(event.target.files);
                event.target.value = "";
              }}
            />
          </label>
          {files.length > 0 && (
            <div className="mt-3">
              <p className="flex items-center gap-2 text-sm text-primary">
                <Check className="size-4" aria-hidden="true" />
                {page.selectedLabel}: {files.length}
              </p>
              <ul className="mt-2 space-y-1">
                {files.map((file, i) => (
                  <li
                    key={`${file.name}-${i}`}
                    className="flex items-center justify-between gap-3 rounded-lg bg-secondary/30 px-3 py-1.5 text-xs text-foreground/85"
                  >
                    <span className="truncate">{file.name}</span>
                    <button
                      type="button"
                      disabled={uploading}
                      onClick={() => setFiles(files.filter((_, j) => j !== i))}
                      aria-label={page.removeLabel}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="size-3.5" aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {uploadError && <p className="mt-3 text-xs text-destructive">{uploadError}</p>}
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            {page.uploadPendingNote}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() => void submitFiles()}
              disabled={uploading}
              className="h-12 rounded-full px-6 text-sm shadow-none"
            >
              {uploading ? page.uploadingLabel : page.continueLabel}
              {uploading ? (
                <Loader2 className="animate-spin" aria-hidden="true" />
              ) : (
                <ArrowRight aria-hidden="true" />
              )}
            </Button>
            <Button
              size="lg"
              variant="outline"
              disabled={uploading}
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
  // Reaching this page closes the request: its code can no longer be reopened.
  useEffect(() => {
    completeIntakeSession();
  }, []);

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
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-12 rounded-full px-6 text-sm shadow-none"
        >
          <Link to={homePath[locale]}>{page.homeLabel}</Link>
        </Button>
      </div>
    </div>
  );
}
