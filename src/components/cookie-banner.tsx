import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { CONSENT_EVENT, getConsent, setConsent } from "@/lib/analytics";
import { localeFromPathname, pagePath, type Locale } from "@/content/locales";

const TEXT: Record<Locale, { body: string; policy: string; accept: string; decline: string }> = {
  ru: {
    body: "Мы используем cookies Google Analytics и Google Ads, чтобы понимать, как посетители находят сайт. Медицинские данные не отслеживаются.",
    policy: "Политика конфиденциальности",
    accept: "Принять",
    decline: "Только необходимые",
  },
  en: {
    body: "We use Google Analytics and Google Ads cookies to understand how visitors find this site. Medical data is never tracked.",
    policy: "Privacy policy",
    accept: "Accept",
    decline: "Essential only",
  },
  fr: {
    body: "Nous utilisons les cookies Google Analytics et Google Ads pour comprendre comment les visiteurs trouvent ce site. Aucune donnée médicale n'est suivie.",
    policy: "Politique de confidentialité",
    accept: "Accepter",
    decline: "Essentiels uniquement",
  },
};

export function CookieBanner() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = localeFromPathname(pathname);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const show = () => {
      if (getConsent() === null) setOpen(true);
    };
    window.addEventListener(CONSENT_EVENT, show);
    return () => window.removeEventListener(CONSENT_EVENT, show);
  }, []);

  if (!open) return null;
  const t = TEXT[locale];
  const choose = (v: "granted" | "denied") => {
    setConsent(v);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.policy}
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-xl border border-gold/40 bg-card p-4 text-card-foreground shadow-lg sm:p-5"
    >
      <p className="text-sm leading-relaxed">
        {t.body}{" "}
        <Link to={pagePath(locale, "privacy")} className="text-primary underline underline-offset-2">
          {t.policy}
        </Link>
      </p>
      <div className="mt-3 flex flex-wrap justify-end gap-2">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent"
        >
          {t.decline}
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          {t.accept}
        </button>
      </div>
    </div>
  );
}
