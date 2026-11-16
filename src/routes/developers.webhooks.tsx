import { createFileRoute } from "@tanstack/react-router";
import { WebhooksPage } from "@/components/developer-docs";

export const Route = createFileRoute("/developers/webhooks")({
  head: () => ({
    meta: [
      { title: "Webhook Guidance | DravTech Fintech" },
      { name: "description", content: "Read proposed webhook event-delivery and message-verification guidance for future DravTech integrations." },
      { property: "og:title", content: "Webhook Guidance | DravTech Fintech" },
      { property: "og:description", content: "Draft webhook notes; event delivery and signing requirements are not yet confirmed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WebhooksPage,
});