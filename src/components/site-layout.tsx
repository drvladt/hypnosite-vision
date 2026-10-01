import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Menu, X } from "lucide-react";

import logoAsset from "@/assets/logo.webp";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SocialIcon } from "@/components/social-icon";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import { siteContent } from "@/content/site";
import { legalContent } from "@/content/legal";
import { homePath, pagePath, socialLinks, type Locale, type PageKey } from "@/content/locales";

const NAV_PAGES: PageKey[] = ["approach", "about", "hypnotherapy", "research", "contact"];
const FOOTER_PAGES: PageKey[] = [
  "about",
  "hypnotherapy",
  "approach",
  "research",
  "stories",
  "contact",
  "privacy",
  "terms",
];

const LEGAL_PAGES = ["privacy", "consent", "terms"] as const;

function isLegal(page: PageKey): page is (typeof LEGAL_PAGES)[number] {
  return (LEGAL_PAGES as readonly string[]).includes(page);
}

/** Short labels keep the header on one line; full titles are used in the footer. */
function shortLabelFor(locale: Locale, page: PageKey) {
  const content = siteContent[locale];
  const legal = legalContent[locale];
  if (isLegal(page)) return legal[page].title;
  if (page === "consultation") return legal.consultation.eyebrow;
  return content.info[page as Exclude<PageKey, "consultation" | "intake" | "documents" | "thanks" | "privacy" | "consent" | "terms">].eyebrow;
}

function labelFor(locale: Locale, page: PageKey) {
  const content = siteContent[locale];
  const legal = legalContent[locale];
  if (isLegal(page)) return legal[page].title;
  if (page === "consultation") return legal.consultation.eyebrow;
  if (page === "intake") return content.intake.title;
  if (page === "documents") return content.documents.title;
  if (page === "thanks") return content.thanks.title;
  return content.info[page].title;
}

/**
 * Shared shell for every inner page: header with navigation and language switcher,
 * breadcrumbs, footer with sections, social links and the medical disclaimer.
 */
export function SiteLayout({
  locale,
  page,
  crumb,
  children,
}: {
  locale: Locale;
  page: PageKey;
  crumb: string;
  children: React.ReactNode;
}) {
  const c = siteContent[locale];
  const home = homeContent[locale];
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-md">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to={homePath[locale]} className="flex items-center gap-3" aria-label={home.nav.toTop}>
            <img src={logoAsset} alt="" className="size-11 rounded-full object-cover" />
            <span className="font-display text-lg font-medium">Dr. Vlad</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm lg:flex" aria-label={c.common.navLabel}>
            {NAV_PAGES.map((item) => (
              <Link
                key={item}
                to={pagePath(locale, item)}
                className="nav-link"
                activeProps={{ className: "nav-link text-primary" }}
              >
                {shortLabelFor(locale, item)}
              </Link>
            ))}
            <LanguageSwitcher locale={locale} label={home.nav.languageLabel} page={page} />
          </nav>
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher locale={locale} label={home.nav.languageLabel} page={page} />
            <Button
              variant="ghost"
              size="icon"
              aria-label={menuOpen ? home.nav.closeMenu : home.nav.openMenu}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label={home.nav.mobileLabel}>
            <div className="mx-auto grid max-w-7xl gap-1">
              {FOOTER_PAGES.map((item) => (
                <Link
                  key={item}
                  to={pagePath(locale, item)}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border/60 py-3 text-sm"
                >
                  {labelFor(locale, item)}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <div className="border-b border-border/60 bg-secondary/25">
        <nav
          aria-label={c.common.breadcrumbHome}
          className="mx-auto flex max-w-4xl items-center gap-1.5 px-5 py-3 text-xs text-muted-foreground lg:px-8"
        >
          <Link to={homePath[locale]} className="transition-colors hover:text-foreground">
            {c.common.breadcrumbHome}
          </Link>
          <ChevronRight className="size-3.5" aria-hidden="true" />
          <span className="text-foreground">{crumb}</span>
        </nav>
      </div>

      <main className="flex-1">{children}</main>

      <footer className="mt-16 border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xs">
              <div className="flex items-center gap-3">
                <img src={logoAsset} alt="" className="size-10 rounded-full object-cover" />
                <span className="font-display text-base font-medium">Dr. Vlad Tettegah</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{home.footer.role}</p>
              <div className="mt-4 flex items-center gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.type}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={link.label}
                    title={link.label}
                    className="flex size-9 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors duration-200 hover:border-gold/50 hover:text-gold"
                  >
                    <SocialIcon type={link.type} className="size-4" />
                  </a>
                ))}
              </div>
            </div>
            <nav className="grid gap-x-10 gap-y-2 text-sm sm:grid-cols-2" aria-label={c.common.navLabel}>
              {FOOTER_PAGES.map((item) => (
                <Link
                  key={item}
                  to={pagePath(locale, item)}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {labelFor(locale, item)}
                </Link>
              ))}
            </nav>
          </div>
          <p className="mt-10 border-t border-border/70 pt-6 text-xs leading-relaxed text-muted-foreground">
            {home.footer.disclaimer}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{c.common.emergencyShort}</p>
        </div>
      </footer>
    </div>
  );
}
