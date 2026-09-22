import { useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { detectPreferredLocale, homePath } from "@/content/locales";

export const Route = createFileRoute("/")({
  // The root path only redirects to the visitor's language version; keep it
  // out of search results so the spinner placeholder is never indexed.
  head: () => ({
    meta: [
      { title: "Dr. Vlad" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: LocaleRedirect,
});

/**
 * Entry point: sends the visitor straight to their language version —
 * a previously chosen language if there is one, otherwise the device language
 * (ru / fr, everything else falls back to en).
 */
function LocaleRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    void navigate({ to: homePath[detectPreferredLocale()], replace: true });
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background" aria-hidden="true">
      <div className="h-8 w-8 animate-pulse rounded-full bg-secondary" />
    </div>
  );
}
