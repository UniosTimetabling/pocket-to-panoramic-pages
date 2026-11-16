import { createFileRoute } from "@tanstack/react-router";
import { DevelopersOverviewPage } from "@/components/developer-docs";

export const Route = createFileRoute("/developers/")({
  head: () => ({
    meta: [
      { title: "Developer Overview | DravTech Fintech" },
      { name: "description", content: "Explore draft developer notes for the proposed DravTech financial switch and partner integrations." },
      { property: "og:title", content: "Developer Overview | DravTech Fintech" },
      { property: "og:description", content: "Technical planning material for institutions exploring a future DravTech connection." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DevelopersOverviewPage,
});