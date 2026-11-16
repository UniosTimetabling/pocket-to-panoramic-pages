import { createFileRoute } from "@tanstack/react-router";
import { DevelopersOverviewPage } from "@/components/developer-docs";

export const Route = createFileRoute("/developers/")({
  head: () => ({
    meta: [
      { title: "DRAVPAY Developer Overview" },
      { name: "description", content: "Explore draft developer notes for DRAVPAY payment collection, wallet, transfer, and payout integrations." },
      { property: "og:title", content: "DRAVPAY Developer Overview" },
      { property: "og:description", content: "Technical planning material for websites, organizations, and institutions exploring DRAVPAY integrations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DevelopersOverviewPage,
});