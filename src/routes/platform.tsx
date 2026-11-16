import { createFileRoute } from "@tanstack/react-router";
import { PlatformPage } from "@/components/site";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform | DravTech Fintech" },
      { name: "description", content: "Explore DravTech's proposed financial switch for inter-SACCO transfers, partner routing, and ledger-first payment workflows." },
      { property: "og:title", content: "Platform | DravTech Fintech" },
      { property: "og:description", content: "A proposed connectivity layer for financial institutions and payment networks." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlatformPage,
});