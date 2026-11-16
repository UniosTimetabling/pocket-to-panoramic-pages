import { createFileRoute } from "@tanstack/react-router";
import { ApiReferencePage } from "@/components/developer-docs";

export const Route = createFileRoute("/developers/api")({
  head: () => ({
    meta: [
      { title: "Proposed API Reference | DravTech Fintech" },
      { name: "description", content: "Review illustrative wallet, transfer, institution, and identity endpoint proposals from DravTech's draft architecture." },
      { property: "og:title", content: "Proposed API Reference | DravTech Fintech" },
      { property: "og:description", content: "Draft API path proposals for planning; they are not confirmed as live services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApiReferencePage,
});