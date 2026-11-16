import { createFileRoute } from "@tanstack/react-router";
import { PlatformPage } from "@/components/site";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "DRAVPAY Platform | Wallets, collections, and transfers" },
      { name: "description", content: "Explore DRAVPAY's planned wallet, payment collection, SACCO transfer, and payout workflows." },
      { property: "og:title", content: "DRAVPAY Platform | Wallets, collections, and transfers" },
      { property: "og:description", content: "Planned wallet and payment workflows for institutions, businesses, and developers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlatformPage,
});