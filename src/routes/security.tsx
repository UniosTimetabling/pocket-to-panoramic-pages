import { createFileRoute } from "@tanstack/react-router";
import { SecurityPage } from "@/components/site";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security & Controls | DravTech Fintech" },
      { name: "description", content: "Review the proposed ledger, audit, access, reconciliation, and compliance control principles for the DravTech platform." },
      { property: "og:title", content: "Security & Controls | DravTech Fintech" },
      { property: "og:description", content: "Proposed platform safeguards, subject to implementation and partner validation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SecurityPage,
});