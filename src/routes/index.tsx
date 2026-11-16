import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DravTech Fintech | Financial connectivity for East Africa" },
      { name: "description", content: "DravTech Fintech is building financial connectivity for SACCOs, banks, mobile money networks, and merchants across East Africa." },
      { property: "og:title", content: "DravTech Fintech | Financial connectivity for East Africa" },
      { property: "og:description", content: "A proposed financial switch connecting institutions and payment networks across East Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});