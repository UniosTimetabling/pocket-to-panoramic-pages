import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CircleAlert, FileCode2 } from "lucide-react";
import type { ReactNode } from "react";
import { SiteFrame } from "@/components/site";

const docsNavigation = [
  { title: "Overview", to: "/developers" as const },
  { title: "Quickstart", to: "/developers/quickstart" as const },
  { title: "API reference", to: "/developers/api" as const },
  { title: "Webhooks", to: "/developers/webhooks" as const },
] as const;
type DocsLink = (typeof docsNavigation)[number];

function DocsFrame({
  current,
  eyebrow,
  title,
  intro,
  children,
}: {
  current: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <SiteFrame>
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 md:px-8 md:pt-16">
      <div className="mb-8 border-b border-border pb-7 sm:mb-10 sm:pb-8">
          <p className="eyebrow mb-3">DRAVPAY developer resources / {eyebrow}</p>
          <div className="grid min-w-0 gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
            <div className="min-w-0 max-w-3xl">
              <h1 className="display-title text-3xl text-foreground sm:text-4xl md:text-6xl">{title}</h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">{intro}</p>
            </div>
            <span className="inline-flex w-fit max-w-full items-center gap-2 border border-amber/60 bg-amber/20 px-3 py-2 text-xs font-semibold text-accent-foreground">
              <CircleAlert className="size-4" /> Draft documentation
            </span>
          </div>
        </div>

        <div className="grid min-w-0 gap-7 sm:gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="Developer documentation" className="grid min-w-0 grid-cols-2 gap-1 border-b border-border pb-3 sm:grid-cols-4 sm:gap-2 lg:sticky lg:top-24 lg:block lg:h-fit lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
            <p className="mb-3 hidden text-xs font-semibold uppercase text-muted-foreground lg:block">Documentation</p>
            {docsNavigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                aria-current={current === item.title ? "page" : undefined}
                className="docs-sidebar-link min-w-0 break-words px-2 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground sm:px-3 sm:text-sm lg:mb-1 lg:block"
              >
                {item.title}
              </Link>
            ))}
            <Link to="/contact" className="mt-5 hidden items-center gap-2 text-sm font-semibold text-primary hover:underline lg:flex">
              Ask about access <ArrowRight className="size-4" />
            </Link>
          </nav>

          <article className="min-w-0 max-w-4xl">
            <div className="mb-8 flex min-w-0 gap-3 border-l-2 border-amber bg-amber/15 px-4 py-4 text-sm leading-6 text-muted-foreground sm:mb-9 sm:gap-4 sm:px-5">
              <CircleAlert className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
              <p><strong className="text-foreground">Planning material only.</strong> DRAVPAY services are described as proposed capabilities. API access, endpoints, credentials, sandbox, partner connections, supported rails, and production availability have not been confirmed.</p>
            </div>
            {children}
          </article>
        </div>
      </div>
    </SiteFrame>
  );
}

function DocSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-11 border-t border-border pt-6">
      <h2 className="display-title text-2xl text-foreground sm:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}

function CodeExample({ label, children }: { label: string; children: string }) {
  return (
    <div className="my-5 min-w-0">
      <div className="flex min-w-0 items-center gap-2 border border-border border-b-0 bg-muted px-3 py-2 text-xs font-semibold text-muted-foreground sm:px-4">
        <FileCode2 className="size-4 shrink-0" /> <span className="min-w-0 break-words">{label}</span>
      </div>
      <pre className="code-panel max-w-full overflow-x-auto border border-border p-3 text-[11px] leading-6 sm:p-4 sm:text-xs"><code>{children}</code></pre>
    </div>
  );
}

function DocsNext({ previous, next }: { previous?: DocsLink | undefined; next?: DocsLink | undefined }) {
  return (
    <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-border pt-6">
      {previous ? <Link to={previous.to} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="size-4" /> {previous.title}</Link> : <span />}
      {next ? <Link to={next.to} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">{next.title} <ArrowRight className="size-4" /></Link> : <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Discuss access <ArrowRight className="size-4" /></Link>}
    </div>
  );
}

export function DevelopersOverviewPage() {
  const resources = [
    { name: "Quickstart", description: "A proposed request shape and configuration for a future website payment integration.", href: "/developers/quickstart" as const },
    { name: "API reference", description: "Illustrative payment collection, wallet, payout, transfer, and SACCO endpoint proposals.", href: "/developers/api" as const },
    { name: "Webhooks", description: "A draft approach for partner event notifications and message verification.", href: "/developers/webhooks" as const },
  ] as const;
  return (
    <DocsFrame current="Overview" eyebrow="Overview" title="Build toward connected payments." intro="Technical notes for developers, organizations, and institutions exploring future DRAVPAY payment collection, wallet, and payout connections.">
      <DocSection title="Start with the network">
        <p>DRAVPAY is being designed to support payment collection from ecommerce, NGO, and other websites through a developer API. The wider proposal includes a wallet for receiving and holding funds, SACCO-to-SACCO transfers, and payouts through connected providers.</p>
        <p>Potential destinations include mobile money such as M-Pesa and Airtel Money, banks, credit cards, and Bitcoin or other cryptocurrencies. These are intentions for discussion, not confirmation of operational services, licensing, provider access, or availability.</p>
      </DocSection>
      <DocSection title="Documentation map">
        <div className="divide-y divide-border border-y border-border">
          {resources.map(({ name, description, href }) => (
            <Link key={href} to={href} className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between">
              <span><span className="font-semibold text-foreground">{name}</span><span className="mt-1 block text-sm leading-6 text-muted-foreground">{description}</span></span>
              <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </DocSection>
      <DocSection title="Integration approach">
        <p>DRAVPAY is intended to give developers a way to integrate payment collection into online stores, NGO sites, and other websites, while supporting a broader wallet and payout network.</p>
        <p>Provider access, supported currencies and destinations, regulatory approvals, timelines, commercial terms, and technical requirements must be confirmed with DRAVPAY and the relevant partners.</p>
      </DocSection>
      <DocsNext next={docsNavigation[1]} />
    </DocsFrame>
  );
}

export function QuickstartPage() {
  return (
    <DocsFrame current="Quickstart" eyebrow="Quickstart" title="Prepare a website payment integration." intro="A practical starting point for developers exploring payment collection for an ecommerce store, NGO, or other website. No live environment or credentials are implied by these examples.">
      <DocSection title="Before you begin">
        <p>Identify your website, organization, payment collection needs, preferred checkout experience, and intended payout destinations. For institutional transfers, note the SACCO systems and partner rails involved.</p>
        <p>There is no confirmed sandbox URL, API key, or account provisioning flow in the supplied material. Do not send real customer, member, wallet, or payment data using these examples.</p>
      </DocSection>
      <DocSection title="Configuration shape">
        <p>If an environment is made available, keep its base URL and credentials in your own secure configuration. The names below are placeholders, not values issued by DRAVPAY.</p>
        <CodeExample label="Environment placeholders">{`DRAVTECH_API_BASE_URL=https://your-confirmed-host
DRAVTECH_API_TOKEN=replace-with-a-provisioned-token`}</CodeExample>
      </DocSection>
      <DocSection title="Illustrative request">
        <p>An eventual payment collection interface may use a unique idempotency key so a website can safely identify a retry. The exact authorization scheme, fields, checkout flow, settlement, and endpoint must be confirmed before implementation.</p>
        <CodeExample label="HTTP · illustrative only">{`curl -X POST "$DRAVPAY_API_BASE_URL/api/v1/payment-intents" \\
  -H "Authorization: Bearer $DRAVTECH_API_TOKEN" \\
  -H "Idempotency-Key: <unique-request-key>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": "250.00",
    "currency": "KES",
    "recipient": "<partner-defined-reference>"
  }'`}</CodeExample>
        <p>This sample is not executable against a known service. Request schemas, identifiers, permissions, idempotency behavior, validation, and transfer states are not yet verified.</p>
      </DocSection>
      <DocsNext previous={docsNavigation[0]} next={docsNavigation[2]} />
    </DocsFrame>
  );
}

const endpointGroups = [
  { title: "Payment collection proposals", items: [["POST", "/api/v1/payment-intents", "Create a website payment request"], ["GET", "/api/v1/payment-intents/{id}", "Check collection status"], ["POST", "/api/v1/payment-intents/{id}/cancel", "Cancel a pending request"]] },
  { title: "Wallet proposals", items: [["GET", "/api/v1/wallets/{id}/balance", "Read a wallet balance"], ["GET", "/api/v1/wallets/{id}/transactions", "Read wallet activity"], ["POST", "/api/v1/wallets/{id}/withdrawals", "Request a withdrawal"]] },
  { title: "Transfers and payout proposals", items: [["POST", "/api/v1/transfers", "Initiate a transfer"], ["GET", "/api/v1/transfers/{id}", "Check transfer status"], ["POST", "/api/v1/payouts", "Request an eligible partner payout"]] },
  { title: "SACCO proposals", items: [["POST", "/api/v1/sacco/transfers", "Propose a SACCO-to-SACCO transfer"], ["GET", "/api/v1/sacco/transfers/{id}", "Check transfer status"]] },
];

export function ApiReferencePage() {
  return (
    <DocsFrame current="API reference" eyebrow="API reference" title="Proposed API surface." intro="Endpoint names below are illustrative DRAVPAY proposals for website collections, wallets, transfers, and payouts. They are not a promise that a working API exists.">
      <DocSection title="Base URL and versioning">
        <p>No production or sandbox base URL has been supplied. Versioned paths below are illustrative; do not route live traffic to an assumed host. Payout destinations and supported currencies are also unconfirmed.</p>
        <CodeExample label="Path pattern">{`https://<base-url-confirmed-by-DravTech>/api/v1/...`}</CodeExample>
      </DocSection>
      {endpointGroups.map((group) => (
        <DocSection key={group.title} title={group.title}>
          <div className="max-w-full overflow-x-auto border-y border-border">
            <table className="api-table w-full min-w-[34rem] text-left text-sm">
              <thead><tr className="border-b border-border text-xs uppercase text-muted-foreground"><th className="py-3 pr-3 font-semibold sm:pr-4">Method</th><th className="py-3 pr-3 font-semibold sm:pr-4">Proposed path</th><th className="py-3 font-semibold">Intent in draft</th></tr></thead>
              <tbody>{group.items.map(([method, path, intent]) => <tr key={path} className="border-b border-border last:border-0"><td data-label="Method" className="py-3 pr-3 text-xs font-semibold text-primary sm:pr-4">{method}</td><td data-label="Proposed path" className="break-all py-3 pr-3 text-xs text-foreground sm:pr-4">{path}</td><td data-label="Intent in draft" className="py-3 text-muted-foreground">{intent}</td></tr>)}</tbody>
            </table>
          </div>
        </DocSection>
      ))}
      <DocSection title="Request handling to confirm">
        <p>Authentication, collection and payout payloads, settlement behavior, wallet permissions, supported rails, token issuance, key format, rate limits, error responses, transaction states, and endpoint availability have not been confirmed.</p>
      </DocSection>
      <DocsNext previous={docsNavigation[1]} next={docsNavigation[3]} />
    </DocsFrame>
  );
}

export function WebhooksPage() {
  return (
    <DocsFrame current="Webhooks" eyebrow="Webhooks" title="Event delivery, as a design proposal." intro="A future DRAVPAY integration may notify a website about payment collection, wallet, transfer, or payout status; no webhook service is currently documented as available.">
      <DocSection title="What the draft describes">
        <p>A proposed event flow could notify an ecommerce, NGO, or other website when a payment collection, wallet transaction, SACCO transfer, or payout changes state. Event names, payload format, destination registration, delivery guarantees, and supported event types are not confirmed.</p>
      </DocSection>
      <DocSection title="Illustrative payload shape">
        <p>The following is a generic example only. It does not define an official DravTech event schema or imply that event delivery is running.</p>
        <CodeExample label="JSON · illustrative only">{`{
  "event_id": "<unique-event-reference>",
  "event_type": "<partner-confirmed-event>",
  "created_at": "<ISO-8601-timestamp>",
  "data": {
    "transfer_id": "<transfer-reference>",
    "status": "<confirmed-status>"
  }
}`}</CodeExample>
      </DocSection>
      <DocSection title="Controls to agree before launch">
        <ul className="list-disc space-y-2 pl-5">
          <li>Signature algorithm, header format, secret provisioning, and rotation procedure.</li>
          <li>Retry schedule, timeout policy, duplicate delivery, and idempotent event handling.</li>
          <li>Event versioning, status vocabulary, payload fields, and personal-data minimization.</li>
          <li>Endpoint registration, environment separation, incident response, and delivery logs.</li>
        </ul>
        <p>The architecture mentions HMAC verification; the details above need agreement and verification with DravTech before a receiver is built.</p>
      </DocSection>
      <DocsNext previous={docsNavigation[2]} />
    </DocsFrame>
  );
}