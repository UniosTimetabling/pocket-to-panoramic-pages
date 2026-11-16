import { createFileRoute } from "@tanstack/react-router";
import { QuickstartPage } from "@/components/developer-docs";

export const Route = createFileRoute("/developers/quickstart")({
  head: () => ({
    meta: [
      { title: "DRAVPAY Integration Quickstart" },
      { name: "description", content: "Prepare for a DRAVPAY integration discussion with illustrative payment collection and payout configuration examples." },
      { property: "og:title", content: "DRAVPAY Integration Quickstart" },
      { property: "og:description", content: "Draft integration examples only; no sandbox, credentials, or live endpoint is confirmed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuickstartPage,
});