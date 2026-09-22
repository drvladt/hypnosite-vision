import { createFileRoute } from "@tanstack/react-router";

import { DrVladHome } from "@/components/dr-vlad-home";
import { homeHead } from "@/content/head";
import { getSiteOrigin } from "@/lib/site-origin.functions";

export const Route = createFileRoute("/en")({
  loader: async () => ({ siteOrigin: await getSiteOrigin() }),
  head: ({ loaderData }) => homeHead("en", loaderData.siteOrigin),
  component: () => <DrVladHome locale="en" />,
});
