import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DRAVPAY | One connection for collections and payouts" },
      { name: "description", content: "DRAVPAY is planning payment collections, wallet services, SACCO transfers, and payouts to mobile money, banks, cards, and digital assets." },
      { property: "og:title", content: "DRAVPAY | One connection for collections and payouts" },
      { property: "og:description", content: "A planned payment and wallet network for websites, organizations, SACCOs, and financial partners." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});