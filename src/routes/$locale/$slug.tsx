import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import {
  ConsultationPageView,
  DocumentsPageView,
  InfoPageView,
  IntakePageView,
  ThanksPageView,
} from "@/components/site-pages";
import { pageHead } from "@/content/page-head";
import { siteContent } from "@/content/site";
import { locales, pageKeyFromSlug, type InfoPageKeyGuard, type Locale, type PageKey } from "@/content/locales";
import type { InfoPageKey } from "@/content/site-types";

const FLOW_PAGES = ["consultation", "intake", "documents", "thanks"] as const;

type Resolved = { locale: Locale; page: PageKey };

function resolve(localeParam: string, slug: string): Resolved | undefined {
  if (!(locales as readonly string[]).includes(localeParam)) return undefined;
  const locale = localeParam as Locale;
  const page = pageKeyFromSlug(locale, slug);
  return page ? { locale, page } : undefined;
}

export const Route = createFileRoute("/$locale/$slug")({
  loader: ({ params }) => {
    const resolved = resolve(params.locale, params.slug);
    if (!resolved) throw notFound();
    return resolved;
  },
  head: ({ params }) => {
    const resolved = resolve(params.locale, params.slug);
    return resolved ? pageHead(resolved.locale, resolved.page) : {};
  },
  component: SlugPage,
});

function isFlowPage(page: PageKey): page is (typeof FLOW_PAGES)[number] {
  return (FLOW_PAGES as readonly string[]).includes(page);
}

function crumbFor(locale: Locale, page: PageKey) {
  const content = siteContent[locale];
  switch (page) {
    case "consultation":
      return content.consultation.title;
    case "intake":
      return content.intake.title;
    case "documents":
      return content.documents.title;
    case "thanks":
      return content.thanks.title;
    default:
      return content.info[page as InfoPageKey].title;
  }
}

function SlugPage() {
  const { locale, page } = Route.useLoaderData();

  return (
    <SiteLayout locale={locale} page={page} crumb={crumbFor(locale, page)}>
      {!isFlowPage(page) ? (
        <InfoPageView locale={locale} page={siteContent[locale].info[page as InfoPageKey]} />
      ) : page === "consultation" ? (
        <ConsultationPageView locale={locale} />
      ) : page === "intake" ? (
        <IntakePageView locale={locale} />
      ) : page === "documents" ? (
        <DocumentsPageView locale={locale} />
      ) : (
        <ThanksPageView locale={locale} />
      )}
    </SiteLayout>
  );
}

export type { InfoPageKeyGuard };
