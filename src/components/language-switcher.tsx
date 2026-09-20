import { Link } from "@tanstack/react-router";

import { homePath, localeNames, localeShortNames, locales, rememberLocale, type Locale } from "@/content/locales";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  return (
    <nav aria-label={label} className={cn("flex items-center gap-1 text-xs font-semibold tracking-widest", className)}>
      {locales.map((item) => (
        <Link
          key={item}
          to={homePath[item]}
          hrefLang={item}
          onClick={() => rememberLocale(item)}
          aria-current={item === locale ? "true" : undefined}
          title={localeNames[item]}
          className={cn(
            "rounded-full px-2 py-1 transition-colors duration-200",
            item === locale ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {localeShortNames[item]}
        </Link>
      ))}
    </nav>
  );
}
