import { createFileRoute } from "@tanstack/react-router";
import { ApiReferencePage } from "@/components/developer-docs";

export const Route = createFileRoute("/developers/api")({
  head: () => ({
    meta: [
      { title: "DRAVPAY Proposed API Reference" },
      { name: "description", content: "Review illustrative DRAVPAY wallet, payment collection, transfer, and payout endpoint proposals." },
      { property: "og:title", content: "DRAVPAY Proposed API Reference" },
      { property: "og:description", content: "Draft API path proposals for planning; they are not confirmed as live services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApiReferencePage,
});