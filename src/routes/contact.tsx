import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact DRAVPAY | Integration enquiries" },
      { name: "description", content: "Contact DRAVPAY to discuss your website, organization, wallet, payment collection, and payout integration needs." },
      { property: "og:title", content: "Contact DRAVPAY" },
      { property: "og:description", content: "Start a conversation about connecting your institution to a broader financial network." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});