import { createFileRoute } from "@tanstack/react-router";
import { IntegrationsPage } from "@/components/site";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations | DravTech Fintech" },
      { name: "description", content: "Learn about DravTech's planned connector approach for SACCO systems, mobile money, banks, and merchants." },
      { property: "og:title", content: "Integrations | DravTech Fintech" },
      { property: "og:description", content: "Partner integrations are planned and subject to institution and provider confirmation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IntegrationsPage,
});