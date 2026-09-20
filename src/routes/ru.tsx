import { createFileRoute } from "@tanstack/react-router";
import { DrVladHome } from "@/components/dr-vlad-home";

export const Route = createFileRoute("/ru")({
  head: () => ({
    meta: [
      { title: "Консультация Dr Vlad — интегративный подход" },
      { name: "description", content: "Русскоязычная страница практики Dr Vlad: кардиология, гипнотерапия и индивидуальный разбор состояния." },
      { property: "og:title", content: "Консультация Dr Vlad" },
      { property: "og:description", content: "Индивидуальный интегративный разбор состояния онлайн." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DrVladHome,
});
