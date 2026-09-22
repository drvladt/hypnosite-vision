import { createFileRoute } from "@tanstack/react-router";

import { DrVladHome } from "@/components/dr-vlad-home";
import { homeHead } from "@/content/head";
import { canonicalSiteOrigin } from "@/content/seo";

export const Route = createFileRoute("/en")({
  head: () => homeHead("en", canonicalSiteOrigin),
  component: () => <DrVladHome locale="en" />,
});
