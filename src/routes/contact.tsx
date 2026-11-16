import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact DravTech Fintech | Integration enquiries" },
      { name: "description", content: "Contact DravTech Fintech to discuss your institution, payment rails, and potential integration requirements." },
      { property: "og:title", content: "Contact DravTech Fintech" },
      { property: "og:description", content: "Start a conversation about connecting your institution to a broader financial network." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});