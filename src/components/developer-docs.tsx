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
        <div className="mb-10 border-b border-border pb-8">
          <p className="eyebrow mb-3">Developer resources / {eyebrow}</p>
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="max-w-3xl">
              <h1 className="display-title text-4xl text-foreground md:text-6xl">{title}</h1>
              <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{intro}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 border border-amber/60 bg-amber/20 px-3 py-2 text-xs font-semibold text-accent-foreground">
              <CircleAlert className="size-4" /> Draft documentation
            </span>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="Developer documentation" className="flex gap-2 overflow-x-auto border-b border-border pb-3 lg:sticky lg:top-24 lg:block lg:h-fit lg:overflow-visible lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
            <p className="mb-3 hidden text-xs font-semibold uppercase text-muted-foreground lg:block">Documentation</p>
            {docsNavigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                aria-current={current === item.title ? "page" : undefined}
                className="docs-sidebar-link shrink-0 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground lg:mb-1 lg:block"
              >
                {item.title}
              </Link>
            ))}
            <Link to="/contact" className="mt-5 hidden items-center gap-2 text-sm font-semibold text-primary hover:underline lg:flex">
              Ask about access <ArrowRight className="size-4" />
            </Link>
          </nav>

          <article className="min-w-0 max-w-4xl">
            <div className="mb-9 flex gap-4 border-l-2 border-amber bg-amber/15 px-5 py-4 text-sm leading-6 text-muted-foreground">
              <CircleAlert className="mt-0.5 size-4 shrink-0 text-accent-foreground" />
              <p><strong className="text-foreground">Planning material only.</strong> These examples are based on a proposed architecture. API access, endpoints, credentials, sandbox, partner connections, and production availability have not been confirmed.</p>
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
      <h2 className="display-title text-3xl text-foreground">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}

function CodeExample({ label, children }: { label: string; children: string }) {
  return (
    <div className="my-5 min-w-0">
      <div className="flex items-center gap-2 border border-border border-b-0 bg-muted px-4 py-2 text-xs font-semibold text-muted-foreground">
        <FileCode2 className="size-4" /> {label}
      </div>
      <pre className="code-panel overflow-x-auto border border-border p-4 text-xs leading-6"><code>{children}</code></pre>
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
    { name: "Quickstart", description: "A proposed request shape and the configuration values an eventual integration may need.", href: "/developers/quickstart" as const },
    { name: "API reference", description: "Illustrative wallet, transfer, SACCO, and member-lookup endpoint proposals.", href: "/developers/api" as const },
    { name: "Webhooks", description: "A draft approach for partner event notifications and message verification.", href: "/developers/webhooks" as const },
  ] as const;
  return (
    <DocsFrame current="Overview" eyebrow="Overview" title="Build toward a connected network." intro="Technical notes for institutions and integration teams exploring a future connection to the DravTech financial switch.">
      <DocSection title="Start with the network">
        <p>DravTech is being designed as a connectivity layer for SACCOs, banks, mobile money providers, and merchants. The proposed model uses partner connectors to translate institution-specific systems into common transfer and status workflows.</p>
        <p>The supplied architecture describes a planned platform, not a currently available developer service. Read all endpoint names and request examples as working proposals for discussion.</p>
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
        <p>The source design considers direct REST APIs, adapters for established SOAP or other protocols, scheduled file exchange, and hosted connectors. The right path depends on each institution’s core system and partner approvals.</p>
        <p>Specific provider access, timelines, supported corridors, commercial terms, and technical requirements must be confirmed with DravTech and the relevant partners.</p>
      </DocSection>
      <DocsNext next={docsNavigation[1]} />
    </DocsFrame>
  );
}

export function QuickstartPage() {
  return (
    <DocsFrame current="Quickstart" eyebrow="Quickstart" title="Prepare an integration conversation." intro="A practical starting point for a technical discussion. No live environment or credentials are implied by these examples.">
      <DocSection title="Before you begin">
        <p>Identify the institution and core banking system, the use case to explore, and whether your system can exchange REST requests, SOAP messages, or secured files. Confirm the target rails, member-lookup needs, and reconciliation expectations with the integration team.</p>
        <p>There is no confirmed sandbox URL, API key, or account provisioning flow in the supplied material. Do not send real member or payment data using these examples.</p>
      </DocSection>
      <DocSection title="Configuration shape">
        <p>If an environment is made available, keep its base URL and credentials in your own secure configuration. The names below are placeholders, not values issued by DravTech.</p>
        <CodeExample label="Environment placeholders">{`DRAVTECH_API_BASE_URL=https://your-confirmed-host
DRAVTECH_API_TOKEN=replace-with-a-provisioned-token`}</CodeExample>
      </DocSection>
      <DocSection title="Illustrative request">
        <p>The proposed transfer interface uses a unique idempotency key so a client can safely identify a retry. The exact authorization scheme, fields, and endpoint must be confirmed before implementation.</p>
        <CodeExample label="HTTP · illustrative only">{`curl -X POST "$DRAVTECH_API_BASE_URL/api/v1/transfers" \\
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
  { title: "Wallet proposals", items: [["POST", "/api/v1/wallets", "Create a wallet"], ["GET", "/api/v1/wallets/{id}/balance", "Read a balance"], ["GET", "/api/v1/wallets/{id}/statement", "Read transaction history"]] },
  { title: "Transfer proposals", items: [["POST", "/api/v1/transfers", "Initiate a transfer"], ["GET", "/api/v1/transfers/{id}", "Check transfer status"], ["POST", "/api/v1/transfers/{id}/retry", "Retry a failed transfer"]] },
  { title: "Institution and identity proposals", items: [["POST", "/api/v1/sacco/deposit", "Submit a deposit"], ["POST", "/api/v1/sacco/withdraw", "Submit a withdrawal"], ["GET", "/api/v1/sacco/members/{id}", "Look up a member"], ["POST", "/api/v1/kyc/submit", "Submit KYC information"], ["GET", "/api/v1/kyc/status", "Check a KYC status"]] },
];

export function ApiReferencePage() {
  return (
    <DocsFrame current="API reference" eyebrow="API reference" title="Proposed API surface." intro="Endpoint names below are extracted from the supplied architecture drafts. They are not a promise that a working API exists.">
      <DocSection title="Base URL and versioning">
        <p>No production or sandbox base URL has been supplied. Versioned paths below are illustrative; do not route live traffic to an assumed host.</p>
        <CodeExample label="Path pattern">{`https://<base-url-confirmed-by-DravTech>/api/v1/...`}</CodeExample>
      </DocSection>
      {endpointGroups.map((group) => (
        <DocSection key={group.title} title={group.title}>
          <div className="overflow-x-auto border-y border-border">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead><tr className="border-b border-border text-xs uppercase text-muted-foreground"><th className="py-3 pr-4 font-semibold">Method</th><th className="py-3 pr-4 font-semibold">Proposed path</th><th className="py-3 font-semibold">Intent in draft</th></tr></thead>
              <tbody>{group.items.map(([method, path, intent]) => <tr key={path} className="border-b border-border last:border-0"><td className="py-3 pr-4 text-xs font-semibold text-primary">{method}</td><td className="py-3 pr-4 text-xs text-foreground">{path}</td><td className="py-3 text-muted-foreground">{intent}</td></tr>)}</tbody>
            </table>
          </div>
        </DocSection>
      ))}
      <DocSection title="Request handling to confirm">
        <p>The supplied design proposes OAuth2/JWT authentication and an idempotency key for transfer creation. Token issuance, key format, rate limits, error responses, payload schemas, transaction states, and endpoint availability have not been provided.</p>
      </DocSection>
      <DocsNext previous={docsNavigation[1]} next={docsNavigation[3]} />
    </DocsFrame>
  );
}

export function WebhooksPage() {
  return (
    <DocsFrame current="Webhooks" eyebrow="Webhooks" title="Event delivery, as a design proposal." intro="The source architecture describes partner notifications and HMAC verification as design considerations; no webhook service is currently documented as available.">
      <DocSection title="What the draft describes">
        <p>A proposed event flow would notify partner systems when a transaction or transfer changes state. Event names, payload format, destination registration, delivery guarantees, and supported event types are not confirmed.</p>
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