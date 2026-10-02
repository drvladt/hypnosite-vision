import { Link } from "@tanstack/react-router";

import {
  homePath,
  localeNames,
  localeShortNames,
  locales,
  pagePath,
  rememberLocale,
  type Locale,
  type PageKey,
} from "@/content/locales";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  label,
  className,
  page,
}: {
  locale: Locale;
  label: string;
  className?: string;
  /** When set, switching language keeps the visitor on the same page. */
  page?: PageKey;
}) {
  return (
    <nav aria-label={label} className={cn("flex items-center gap-0.5 text-xs font-semibold tracking-wider sm:gap-1 sm:tracking-widest", className)}>
      {locales.map((item) => (
        <Link
          key={item}
          to={page ? pagePath(item, page) : homePath[item]}
          hrefLang={item}
          onClick={() => rememberLocale(item)}
          aria-current={item === locale ? "true" : undefined}
          title={localeNames[item]}
          className={cn(
            "rounded-full px-1.5 py-1 transition-colors sm:px-2 duration-200",
            item === locale ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {localeShortNames[item]}
        </Link>
      ))}
    </nav>
  );
}
