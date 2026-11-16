import { createFileRoute } from "@tanstack/react-router";
import { QuickstartPage } from "@/components/developer-docs";

export const Route = createFileRoute("/developers/quickstart")({
  head: () => ({
    meta: [
      { title: "Integration Quickstart | DravTech Fintech" },
      { name: "description", content: "Prepare for a DravTech technical integration discussion with illustrative configuration and request examples." },
      { property: "og:title", content: "Integration Quickstart | DravTech Fintech" },
      { property: "og:description", content: "Draft integration examples only; no sandbox, credentials, or live endpoint is confirmed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuickstartPage,
});