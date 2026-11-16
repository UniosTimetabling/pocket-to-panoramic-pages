import { createFileRoute } from "@tanstack/react-router";
import { IntegrationsPage } from "@/components/site";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "DRAVPAY Integrations | Payment and payout connections" },
      { name: "description", content: "Explore planned DRAVPAY connections for websites, NGOs, SACCOs, mobile money, banks, cards, and digital assets." },
      { property: "og:title", content: "DRAVPAY Integrations | Payment and payout connections" },
      { property: "og:description", content: "Partner integrations are planned and subject to institution and provider confirmation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IntegrationsPage,
});