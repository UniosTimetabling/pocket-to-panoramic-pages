import { createFileRoute } from "@tanstack/react-router";
import { WebhooksPage } from "@/components/developer-docs";

export const Route = createFileRoute("/developers/webhooks")({
  head: () => ({
    meta: [
      { title: "DRAVPAY Webhook Guidance" },
      { name: "description", content: "Read proposed webhook event-delivery and message-verification guidance for future DRAVPAY integrations." },
      { property: "og:title", content: "DRAVPAY Webhook Guidance" },
      { property: "og:description", content: "Draft webhook notes; event delivery and signing requirements are not yet confirmed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WebhooksPage,
});