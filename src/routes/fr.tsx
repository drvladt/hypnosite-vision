import { createFileRoute } from "@tanstack/react-router";

import { DrVladHome } from "@/components/dr-vlad-home";
import { homeHead } from "@/content/head";

export const Route = createFileRoute("/fr")({
  head: () => homeHead("fr"),
  component: () => <DrVladHome locale="fr" />,
});
