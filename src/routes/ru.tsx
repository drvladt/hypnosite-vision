import { createFileRoute } from "@tanstack/react-router";

import { DrVladHome } from "@/components/dr-vlad-home";
import { homeHead } from "@/content/head";
import { canonicalSiteOrigin } from "@/content/seo";

export const Route = createFileRoute("/ru")({
  head: () => homeHead("ru", canonicalSiteOrigin),
  component: () => <DrVladHome locale="ru" />,
});
