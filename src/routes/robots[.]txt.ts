import { createFileRoute } from "@tanstack/react-router";

import { absoluteUrl } from "@/content/seo";
import { resolveSiteOrigin } from "@/lib/site-origin.server";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const siteOrigin = resolveSiteOrigin(request);
        const robots = [
          "User-agent: *",
          "Allow: /",
          "",
          `Sitemap: ${absoluteUrl(siteOrigin, "/sitemap.xml")}`,
          "",
        ].join("\n");

        return new Response(robots, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
          },
        });
      },
    },
  },
});
