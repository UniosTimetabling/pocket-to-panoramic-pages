import { Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronRight, Globe2, Landmark, LockKeyhole, Mail, Menu, Network, Phone, ShieldCheck, Workflow, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const companyNav = [
  { label: "Platform", to: "/platform" as const },
  { label: "Integrations", to: "/integrations" as const },
  { label: "Security", to: "/security" as const },
  { label: "Developers", to: "/developers" as const },
];

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" aria-label="DravTech Fintech home" className={`inline-flex items-center gap-2.5 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      <span className={`flex size-9 items-center justify-center rounded-sm ${light ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"}`}>
        <Network size={19} strokeWidth={1.8} />
      </span>
      <span className="leading-tight"><span className="block text-sm font-bold tracking-[0.08em]">DRAVTECH</span><span className="block text-[10px] font-medium tracking-[0.23em] opacity-70">FINTECH</span></span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header sticky top-0 z-50">
      <div className="mx-auto grid h-[76px] max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:flex sm:justify-between sm:px-5 md:px-8">
        <Brand />
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {companyNav.map((item) => <Link key={item.to} to={item.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item.label}</Link>)}
        </nav>
        <Button asChild className="hidden rounded-sm px-5 md:inline-flex"><Link to="/contact">Talk to our team <ArrowUpRight /></Link></Button>
        <Button variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav aria-label="Mobile navigation" className="flex flex-col border-t border-border bg-background px-5 py-3 md:hidden">{companyNav.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="py-3 text-sm text-foreground">{item.label}</Link>)}<Button asChild className="mt-2 rounded-sm"><Link to="/contact">Talk to our team <ArrowUpRight /></Link></Button></nav>}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div><Brand light /><p className="mt-5 max-w-sm text-sm leading-6 opacity-75">Financial connectivity for East Africa’s cooperatives, institutions, and payment networks.</p></div>
        <div><p className="eyebrow">Explore</p><div className="mt-4 grid gap-3 text-sm">{companyNav.map((item) => <Link key={item.to} to={item.to} className="opacity-80 hover:opacity-100">{item.label}</Link>)}<Link to="/contact" className="opacity-80 hover:opacity-100">Contact</Link></div></div>
        <div><p className="eyebrow">Developer resources</p><div className="mt-4 grid gap-3 text-sm"><Link to="/developers" className="opacity-80 hover:opacity-100">Documentation</Link><Link to="/developers/quickstart" className="opacity-80 hover:opacity-100">Quickstart</Link><Link to="/developers/api" className="opacity-80 hover:opacity-100">API reference</Link><Link to="/developers/webhooks" className="opacity-80 hover:opacity-100">Webhooks</Link></div></div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-primary-foreground/15 px-5 py-5 text-xs opacity-65 md:flex-row md:justify-between md:px-8"><span>© {new Date().getFullYear()} DravTech Fintech</span><span>Designed for connected financial institutions.</span></div>
    </footer>
  );
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><main className="scroll-flow">{children}</main><SiteFooter /></>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="mb-4 flex items-center gap-3"><p className="eyebrow">{children}</p><span aria-hidden="true" className="reference-stripes"><span className="bg-sky" /><span className="bg-gold" /><span className="bg-orange" /></span></div>;
}

export function PageIntro({ label, title, copy }: { label: string; title: string; copy: string }) {
  return <section className="mx-auto max-w-7xl px-5 pb-12 pt-16 md:px-8 md:pb-16 md:pt-24"><Eyebrow>{label}</Eyebrow><h1 className="display-title max-w-4xl text-5xl text-foreground md:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{copy}</p></section>;
}

export function HomePage() {
  const capabilities = [
    { icon: Landmark, title: "SACCO-to-SACCO transfers", copy: "Connect separate cooperative ledgers so members can move value across institutions." },
    { icon: Globe2, title: "Cross-border payments", copy: "Plan corridors for KES, UGX, TZS, and RWF with transparent quotes and tracking." },
    { icon: Workflow, title: "One connector layer", copy: "Bring core banking, mobile money, and merchant payment rails behind one interface." },
    { icon: ShieldCheck, title: "Ledger-first design", copy: "Build around balanced entries, idempotent requests, and traceable transaction states." },
  ];
  return <SiteFrame>
    <section className="relative isolate min-h-[680px] overflow-hidden border-b border-border md:min-h-[720px]">
      <img src={cooperativePhoto.url} alt="Cooperative finance professionals working together in a bright office" width={1536} height={1024} fetchPriority="high" className="hero-image absolute inset-0 -z-20 size-full object-cover" />
      <div className="hero-visual absolute inset-0 -z-10" />
      <div className="mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-16 md:min-h-[720px] md:px-8">
        <div className="fade-up w-full max-w-[650px] min-w-0">
          <Eyebrow>Financial connectivity · East Africa · Platform in development</Eyebrow>
          <h1 className="display-title text-4xl text-foreground sm:text-5xl md:text-7xl">The infrastructure behind every <span className="text-primary">SACCO transfer.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">DravTech is building a proposed financial switch designed to connect SACCOs, banks, mobile money networks, and merchants.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><Button asChild size="lg" className="h-12 w-full rounded-sm px-4 sm:w-auto sm:px-6"><Link to="/contact">Discuss an integration <ArrowRight /></Link></Button><Button asChild variant="outline" size="lg" className="h-12 w-full rounded-sm border-foreground/20 bg-background/70 px-4 sm:w-auto sm:px-6"><Link to="/platform">Explore the platform <ChevronRight /></Link></Button></div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground"><span>Built around institutions</span><span>API-first architecture</span><span>East Africa focused</span></div>
        </div>
      </div>
      <FinancialOrbit />
    </section>

    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:py-20 md:grid-cols-[0.82fr_1.18fr] md:gap-12 md:px-8 md:py-28">
      <div><Eyebrow>What we’re building</Eyebrow><h2 className="display-title text-4xl md:text-5xl">One switch.<br />A wider network.</h2></div>
      <div><p className="max-w-2xl text-lg leading-8 text-muted-foreground">Financial institutions shouldn’t need a separate connection for every payment partner. DravTech is designed as shared infrastructure: connect once, route to the rails and institutions your members already use.</p><div className="mt-8"><Button asChild variant="link" className="h-auto px-0 text-primary"><Link to="/platform">See how the platform works <ArrowRight /></Link></Button></div></div>
    </section>

    <section className="bg-muted py-14 sm:py-20 md:py-24"><div className="mx-auto max-w-7xl px-5 md:px-8"><div className="mb-9 flex min-w-0 flex-col justify-between gap-5 sm:mb-12 md:flex-row md:items-end"><div className="min-w-0"><Eyebrow>Platform capabilities</Eyebrow><h2 className="display-title max-w-2xl text-3xl sm:text-4xl md:text-5xl">Every financial operation. One switch to route it.</h2></div><Link to="/platform" className="shrink-0 text-sm font-semibold text-primary">View platform <ArrowRight className="ml-2 inline size-4" /></Link></div><div className="grid gap-x-6 gap-y-9 border-t border-border pt-7 sm:grid-cols-2 lg:grid-cols-4">{capabilities.map(({ icon: Icon, title, copy }, i) => <article key={title} className="min-w-0 pt-2"><span className="flex size-11 items-center justify-center rounded-sm bg-signal text-signal-foreground"><Icon size={21} /></span><p className="mt-5 text-xs font-semibold text-primary">0{i + 1}</p><h3 className="mt-2 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}</div></div></section>

    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:py-20 md:grid-cols-2 md:items-center md:gap-10 md:px-8 md:py-24"><div className="min-w-0"><Eyebrow>Connected ecosystem</Eyebrow><h2 className="display-title text-3xl sm:text-4xl md:text-5xl">Your institution,<br />within reach.</h2><p className="mt-5 max-w-lg leading-7 text-muted-foreground">A connector architecture gives partners a consistent way to work across SACCO core systems, mobile money providers, and payment networks.</p><Button asChild variant="link" className="mt-5 h-auto px-0"><Link to="/integrations">Explore integrations <ArrowRight /></Link></Button></div><div className="decorative-grid grid min-h-[260px] min-w-0 place-items-center p-4 sm:min-h-[340px] sm:p-7"><NetworkMap /></div></section>

    <section className="bg-primary text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:gap-8 sm:py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-20"><div className="min-w-0"><Eyebrow>Start a conversation</Eyebrow><h2 className="display-title max-w-2xl text-3xl sm:text-4xl md:text-5xl">Connect your institution to a broader network.</h2></div><Button asChild variant="secondary" size="lg" className="h-12 w-full rounded-sm px-6 sm:w-fit"><Link to="/contact">Talk to our team <ArrowUpRight /></Link></Button></div></section>
  </SiteFrame>;
}

function FinancialOrbit() {
  return (
    <div aria-label="Connected financial network" role="img" className="pointer-events-none absolute right-[4%] top-1/2 hidden size-[min(34vw,440px)] -translate-y-1/2 items-center justify-center xl:flex">
      <div className="network-orbit relative aspect-square w-full">
        <span className="network-ring" />
        <span className="network-ring" />
        <span className="network-ring" />
        <span className="absolute left-[8%] top-[25%] size-3 rounded-full bg-signal" />
        <span className="absolute right-[12%] top-[19%] size-4 rounded-full bg-gold" />
        <span className="absolute bottom-[13%] left-[31%] size-3 rounded-full bg-amber" />
        <span className="absolute bottom-[30%] right-[5%] size-3 rounded-full bg-sky" />
        <div className="network-core absolute left-1/2 top-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full border border-border bg-primary text-primary-foreground">
          <Network size={30} strokeWidth={1.5} />
          <span className="text-center text-[10px] font-semibold">DRAVTECH<br />SWITCH</span>
        </div>
        <span className="absolute left-1/2 top-[2%] -translate-x-1/2 rounded-sm border border-border bg-background/90 px-3 py-2 text-[10px] font-semibold shadow-sm">BANKS</span>
        <span className="absolute bottom-[4%] left-[7%] rounded-sm border border-border bg-background/90 px-3 py-2 text-[10px] font-semibold shadow-sm">SACCOs</span>
        <span className="absolute bottom-[7%] right-[2%] rounded-sm border border-border bg-background/90 px-3 py-2 text-[10px] font-semibold shadow-sm">MOBILE MONEY</span>
      </div>
    </div>
  );
}

function NetworkMap() {
  return <div className="grid w-full max-w-lg min-w-0 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-2 gap-y-5 text-center text-[11px] font-semibold sm:gap-x-7 sm:text-sm"><NetworkNode>Core banking</NetworkNode><ArrowRight className="size-4 shrink-0 text-primary sm:size-5" /><NetworkNode featured>DRAVTECH<br />SWITCH</NetworkNode><ArrowDownRight className="col-start-1 size-4 justify-self-center text-muted-foreground sm:size-5" /><ArrowDownRight className="col-start-3 size-4 justify-self-center text-muted-foreground sm:size-5" /><NetworkNode>SACCOs</NetworkNode><ArrowRight className="size-4 shrink-0 text-primary sm:size-5" /><NetworkNode>Mobile money</NetworkNode><span className="col-span-3 mx-auto max-w-full rounded-sm border border-border bg-background px-2 py-3 text-muted-foreground sm:px-6">Banks · Merchants · Regional corridors</span></div>;
}

function NetworkNode({ children, featured = false }: { children: React.ReactNode; featured?: boolean }) {
  return <div className={`min-w-0 break-words rounded-sm border px-2 py-3 sm:px-4 sm:py-4 ${featured ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground"}`}>{children}</div>;
}

export function PlatformPage() {
  const steps = ["Member lookup and recipient verification", "Risk and compliance checks", "Transfer routing and ledger posting", "Notifications and reconciliation"];
  return <SiteFrame><PageIntro label="The platform" title="Every financial operation. One switch to route it." copy="DravTech is the connectivity layer between financial institutions—not a wallet. Connect your institution once and build toward a network of reachable payment partners." />
    <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-14 sm:pb-20 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:px-8"><div className="min-w-0"><Eyebrow>Transfer lifecycle</Eyebrow><h2 className="display-title text-3xl sm:text-4xl">From initiation to a traceable ledger.</h2><p className="mt-5 leading-7 text-muted-foreground">A transfer is designed to move through explicit, auditable states. Each stage can be tracked and reconciled with partner systems.</p></div><ol className="min-w-0 divide-y divide-border border-y border-border">{steps.map((step, i) => <li key={step} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 py-5 sm:gap-5"><span className="font-display text-2xl text-primary">0{i + 1}</span><span className="min-w-0 pt-1 font-medium">{step}</span><Check className="mt-1 size-4 shrink-0 text-primary" /></li>)}</ol></section>
    <section className="bg-muted py-20"><div className="mx-auto max-w-7xl px-5 md:px-8"><Eyebrow>Designed for financial correctness</Eyebrow><div className="grid gap-10 md:grid-cols-3"><Feature title="Double-entry ledger" copy="Every transfer is represented with balanced debit and credit entries in a consistent ledger." /><Feature title="Safe retries" copy="Idempotency keys help prevent a repeated request from creating a duplicate transaction." /><Feature title="Connector pattern" copy="Institution and payment integrations implement a common interface around the switch." /></div></div></section>
    <ContactBand title="Talk through your institution’s needs." />
  </SiteFrame>;
}

export function IntegrationsPage() {
  const systems = [
    ["Mobile money", "Safaricom M-Pesa", "Collections and disbursements; partner access and production status must be confirmed."],
    ["Mobile money", "Airtel Money", "A connector pattern for wallet collections and payouts across supported markets."],
    ["Cross-border", "MTN MoMo", "Corridor workflows for mobile money remittance, subject to partner approval."],
    ["Core banking", "SACCO systems", "REST, SOAP, file exchange, or a hosted adapter can support different levels of system maturity."],
    ["Bank payments", "Payment networks", "Bank and regional payment rails can be added through dedicated partner connectors."],
    ["Merchants", "QR and payment links", "A shared integration surface for merchant payment requests across connected institutions."],
  ];
  return <SiteFrame><PageIntro label="Integrations" title="Plug into the ecosystem your members already use." copy="A consistent connector architecture is designed to connect cooperative core banking systems, mobile money providers, banks, and merchants." />
    <section className="mx-auto max-w-7xl px-5 pb-14 sm:pb-20 md:px-8"><div className="grid border-t border-border sm:grid-cols-2">{systems.map(([type, name, description], i) => <article key={name} className="min-w-0 border-b border-border py-7 sm:px-4 md:px-6"><div className="flex items-center justify-between gap-3"><p className="eyebrow">{type}</p><span className="shrink-0 text-xs text-muted-foreground">0{i + 1}</span></div><h2 className="mt-3 text-xl font-semibold">{name}</h2><p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{description}</p><p className="mt-4 flex items-start gap-2 text-xs font-medium leading-5 text-accent-foreground"><span className="mt-1 size-2 shrink-0 rounded-full bg-amber" /><span>Integration availability discussed with partners</span></p></article>)}</div></section>
    <section className="bg-band-blue py-12 text-foreground sm:py-16"><div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8"><div className="min-w-0"><Eyebrow>Different starting points</Eyebrow><h2 className="display-title text-3xl sm:text-4xl">Meet institutions where they are.</h2></div><div className="grid min-w-0 gap-5 sm:grid-cols-2">{[["Direct API", "Connect through an existing REST interface."], ["Legacy adapter", "Wrap SOAP or other established protocols."], ["Scheduled exchange", "Use secure file exchange with reconciliation."], ["Hosted connector", "Plan a lightweight bridge where no API exists."]].map(([title, copy]) => <div key={title} className="min-w-0 border-t border-foreground/20 pt-4"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-foreground/75">{copy}</p></div>)}</div></div></section><ContactBand title="Planning an integration? Let’s map the path together." /></SiteFrame>;
}

export function SecurityPage() {
  const items = [
    [LockKeyhole, "Idempotent requests", "Each transfer request can be tied to a unique idempotency key to make safe retries possible."],
    [ShieldCheck, "Tamper-evident history", "Append-only ledger and audit patterns support traceable state changes."],
    [Workflow, "Structured disputes", "Reversals are designed as counter-entries rather than overwriting original activity."],
    [Network, "Institution-level access", "Partner authentication, allowlists, and credential rotation are part of the architecture plan."],
    [Globe2, "Reconciliation", "Compare switch records with partner and payment network records to surface mismatches."],
    [Check, "Compliance workflows", "KYC and transaction screening workflows are intended to support partner obligations."],
  ] as const;
  return <SiteFrame><PageIntro label="Security & controls" title="Built to be audited, not simply trusted." copy="Financial systems need clear controls, careful failure handling, and records that can be reviewed. These are the principles guiding the DravTech platform design." />
    <section className="mx-auto max-w-7xl px-5 pb-14 sm:pb-20 md:px-8"><div className="grid gap-x-8 md:grid-cols-2 md:gap-x-12">{items.map(([Icon, title, copy], i) => <article key={title} className="flex min-w-0 gap-4 border-t border-border py-7 sm:gap-5"><span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-sage text-sage-foreground"><Icon size={20} /></span><div className="min-w-0"><p className="eyebrow">Control 0{i + 1}</p><h2 className="mt-2 text-lg font-semibold">{title}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></div></article>)}</div></section>
    <section className="bg-amber/25 py-10 sm:py-12"><div className="mx-auto flex max-w-7xl items-start gap-3 px-5 sm:gap-4 md:px-8"><ShieldCheck className="mt-1 size-5 shrink-0 text-primary" /><p className="max-w-3xl text-sm leading-6 text-muted-foreground"><strong className="text-foreground">Important:</strong> These pages describe design goals and proposed controls, not a certification or claim of production readiness. Implementation details, partner controls, and regulatory obligations must be validated before launch.</p></div></section><ContactBand title="Discuss controls and partner requirements." /></SiteFrame>;
}

export function ContactPage() {
  return <SiteFrame><PageIntro label="Get in touch" title="Let’s connect your institution." copy="Tell us about your organization, payment rails, and the members you serve. We’ll start with a conversation about fit and integration requirements." />
    <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 sm:pb-24 md:grid-cols-[1fr_0.8fr] md:gap-12 md:px-8"><div className="min-w-0 space-y-5"><ContactRow icon={Mail} label="Email" href="mailto:dravislotum@gmail.com" value="dravislotum@gmail.com" /><ContactRow icon={Phone} label="Phone" href="tel:+254758067458" value="+254 758 067 458" /></div><aside className="min-w-0 bg-band-yellow p-5 text-foreground sm:p-8 md:p-10"><Eyebrow>Who we work with</Eyebrow><h2 className="display-title text-2xl sm:text-3xl">SACCOs, banks, payment providers, and merchants.</h2><p className="mt-5 text-sm leading-7 text-foreground/80">Share your current systems and the connections you want to make. Integration scope and availability are confirmed directly with each partner.</p><Button asChild variant="secondary" className="mt-7 max-w-full rounded-sm"><a href="mailto:dravislotum@gmail.com?subject=DravTech%20integration%20enquiry">Email DravTech <ArrowUpRight /></a></Button></aside></section>
  </SiteFrame>;
}

function ContactRow({ icon: Icon, label, href, value }: { icon: typeof Mail; label: string; href: string; value: string }) {
  return <a href={href} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border py-5 sm:gap-5"><span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-sage text-sage-foreground"><Icon size={20} /></span><span className="min-w-0"><span className="block text-xs text-muted-foreground">{label}</span><span className="mt-1 block break-all font-semibold">{value}</span></span><ArrowUpRight className="size-4 shrink-0 text-primary" /></a>;
}

function Feature({ title, copy }: { title: string; copy: string }) {
  return <article className="border-t border-border pt-5"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p></article>;
}

export function ContactBand({ title }: { title: string }) {
  return <section className="bg-primary text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:py-14 md:flex-row md:items-center md:justify-between md:px-8"><h2 className="display-title max-w-2xl text-2xl sm:text-3xl md:text-4xl">{title}</h2><Button asChild variant="secondary" size="lg" className="h-12 w-full shrink-0 rounded-sm px-6 sm:w-fit"><Link to="/contact">Get in touch <ArrowRight /></Link></Button></div></section>;
}

import cooperativePhoto from "@/assets/dravtech-cooperative.jpg.asset.json";