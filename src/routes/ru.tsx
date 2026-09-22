import { createFileRoute } from "@tanstack/react-router";

import { DrVladHome } from "@/components/dr-vlad-home";
import { homeHead } from "@/content/head";
import { canonicalSiteOrigin } from "@/content/seo";
import { getSiteOrigin } from "@/lib/site-origin.functions";

export const Route = createFileRoute("/ru")({
  loader: async () => ({ siteOrigin: await getSiteOrigin() }),
  head: ({ loaderData }) => homeHead("ru", loaderData?.siteOrigin ?? canonicalSiteOrigin),
  component: () => <DrVladHome locale="ru" />,
});
