import { createFileRoute } from "@tanstack/react-router";
import { DrVladHome } from "@/components/dr-vlad-home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr Vlad — врач-кардиолог и гипнотерапевт" },
      { name: "description", content: "Интегративный разбор сердечно-сосудистых симптомов, тревоги за здоровье и психосоматических факторов." },
      { property: "og:title", content: "Dr Vlad — интегративная медицина и гипнотерапия" },
      { property: "og:description", content: "Врачебный подход к взаимосвязи физического состояния, тревоги и телесных реакций." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DrVladHome,
});
