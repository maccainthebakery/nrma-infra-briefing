// ============================================================
// NRMA EXECUTIVE BROADSHEET — Main Briefing Page
// Design: Editorial / Financial Times inspired
// Palette: Off-white, charcoal, deep teal accent
// ============================================================

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  TrendingUp,
  Server,
  Cloud,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  Clock,
  DollarSign,
  Cpu,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import SectionHeader from "@/components/SectionHeader";
import OptionCard from "@/components/OptionCard";
import {
  options,
  currentStateRisks,
  marketFactors,
  nextSteps,
  type SectionTag,
} from "@/lib/briefingData";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663478865359/bTwKWkJW2ep93FEn76Zb3r/hero-bg-cdQeH4UJ9mjdkcGub3UKWR.webp";

export default function Home() {
  const [activeSection, setActiveSection] = useState("executive-summary");
  const [activeFilter, setActiveFilter] = useState<SectionTag | "all">("all");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll spy
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerWidth < 1024 ? 64 : 0;
      const top = el.getBoundingClientRect().top + window.scrollY - offset - 24;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const riskSeverityConfig = {
    high: { color: "text-[oklch(0.52_0.22_25)]", bg: "bg-[oklch(0.97_0.02_25)]", border: "border-[oklch(0.52_0.22_25)]/30", label: "High Risk", icon: <ShieldAlert size={14} /> },
    medium: { color: "text-[oklch(0.65_0.15_70)]", bg: "bg-[oklch(0.97_0.03_80)]", border: "border-[oklch(0.75_0.15_70)]/30", label: "Medium Risk", icon: <AlertTriangle size={14} /> },
    low: { color: "text-[oklch(0.55_0.15_155)]", bg: "bg-[oklch(0.97_0.03_155)]", border: "border-[oklch(0.65_0.15_155)]/30", label: "Low Risk", icon: <CheckCircle2 size={14} /> },
  };

  const priorityConfig = {
    immediate: { color: "text-[oklch(0.52_0.22_25)]", label: "Immediate", bg: "bg-[oklch(0.97_0.02_25)]" },
    "short-term": { color: "text-[oklch(0.65_0.15_70)]", label: "Short-term", bg: "bg-[oklch(0.97_0.03_80)]" },
    planning: { color: "text-[oklch(0.38_0.09_196)]", label: "Planning", bg: "bg-[oklch(0.96_0.02_196)]" },
  };

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar
        activeSection={activeSection}
        activeFilter={activeFilter}
        onSectionClick={scrollToSection}
        onFilterChange={setActiveFilter}
      />

      {/* Main Content */}
      <main className="flex-1 min-w-0 lg:overflow-y-auto pt-16 lg:pt-0">

        {/* ── HERO ── */}
        <section
          id="executive-summary"
          data-section
          className="relative min-h-[340px] md:min-h-[400px] flex flex-col justify-end overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_BG})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.02_260)]/90 via-[oklch(0.12_0.02_260)]/70 to-transparent" />
          <div className="relative z-10 px-8 md:px-12 pb-10 pt-16 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[oklch(0.65_0.09_196)] text-[10px] uppercase tracking-widest font-semibold">Executive Briefing</span>
                <span className="w-8 h-px bg-[oklch(0.65_0.09_196)]" />
                <span className="text-[oklch(0.55_0.04_196)] text-[10px] uppercase tracking-widest">April 2026</span>
              </div>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Infrastructure Strategy:<br />
                <span className="text-[oklch(0.75_0.09_196)]">VMware EOL & Migration Path</span>
              </h1>
              <p className="text-[oklch(0.78_0.01_260)] text-sm md:text-base leading-relaxed max-w-xl">
                A strategic review of NRMA's data centre infrastructure options as VMware vSphere 7.0 reaches end of support and existing HPE hardware approaches end of life.
              </p>
            </motion.div>
          </div>

          {/* Summary Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative z-10 bg-[oklch(0.12_0.02_260)]/80 backdrop-blur-sm border-t border-white/10 px-8 md:px-12 py-4 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: <Server size={14} />, label: "Data Centres", value: "2 Sites", sub: "Global Switch + Equinix" },
              { icon: <Cpu size={14} />, label: "Total VMs", value: "80 VMs", sub: "511 vCPU / 1,578 GB RAM" },
              { icon: <Clock size={14} />, label: "VMware EoGS", value: "Oct 2025", sub: "Already expired" },
              { icon: <DollarSign size={14} />, label: "Recommended Cost", value: "~$155k", sub: "12-month bridge option" },
            ].map((stat, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="text-[oklch(0.55_0.09_196)] mt-0.5 flex-shrink-0">{stat.icon}</div>
                <div>
                  <div className="text-[10px] text-[oklch(0.5_0.04_196)] uppercase tracking-widest mb-0.5">{stat.label}</div>
                  <div className="text-white font-semibold text-sm cost-figure">{stat.value}</div>
                  <div className="text-[oklch(0.55_0.02_260)] text-[10px]">{stat.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── EXECUTIVE SUMMARY BODY ── */}
        <div className="px-6 md:px-10 lg:px-12 py-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="callout-teal mb-6">
              <p className="text-sm font-semibold text-[oklch(0.25_0.08_196)] mb-1" style={{ fontFamily: 'Fraunces, serif' }}>
                Recommended Path: Option 5 — "Sweat the Asset"
              </p>
              <p className="text-sm text-[oklch(0.35_0.06_196)] leading-relaxed">
                Renew Nutanix licensing for one year (~$125k), maintain HPE hardware support (~$30k), and migrate from VMware ESXi to Nutanix AHV using internal resources over 4–6 weeks. Total cost: <strong>~$155,000</strong>. This eliminates the VMware licensing risk immediately while providing 12 months of breathing room to navigate current memory price volatility and geopolitical supply chain disruption before committing to a major hardware refresh or cloud migration.
              </p>
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              NRMA operates a 4-node Nutanix HCI cluster at both Global Switch (GS) and Equinix (EQ), supporting 80 virtual machines across 511 vCPU and 1,578 GB of RAM. The HPE hardware, purchased in August 2021 under a 5-year finance deal, is now approaching end of life. VMware vSphere 7.0 — the hypervisor running these workloads — reached its End of General Support on October 2, 2025, with no further security patches or official support available. Nutanix software licenses expire in August 2026.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Five options have been evaluated, ranging from on-premises hardware refreshes to a full cloud migration via Nutanix Cloud Clusters (NC2) on AWS. The analysis accounts for current market conditions — specifically the 80–90% surge in server memory prices in Q1 2026 and significant supply chain disruption caused by US trade tariffs — which make a large capital commitment in the near term financially imprudent.
            </p>
          </motion.div>
        </div>

        <div className="border-t border-border" />

        {/* ── CURRENT STATE & RISKS ── */}
        <section
          id="current-state"
          data-section
          className="px-6 md:px-10 lg:px-12 py-10 max-w-4xl"
        >
          <SectionHeader
            number="01"
            title="Current State & Risk Assessment"
            subtitle="The existing infrastructure presents four critical risk areas requiring immediate attention."
            tag="Problem Statement"
          />

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {currentStateRisks.map((risk, i) => {
              const cfg = riskSeverityConfig[risk.severity];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className={`rounded-lg border ${cfg.border} ${cfg.bg} p-4`}
                >
                  <div className={`flex items-center gap-2 mb-2 ${cfg.color}`}>
                    {cfg.icon}
                    <span className="text-[10px] uppercase tracking-widest font-bold">{cfg.label}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1.5" style={{ fontFamily: 'Fraunces, serif' }}>
                    {risk.title}
                  </h4>
                  <p className="text-xs text-foreground/70 leading-relaxed">{risk.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Infrastructure Summary Table */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-lg border border-border overflow-hidden"
          >
            <div className="bg-muted/50 px-5 py-3 border-b border-border">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Infrastructure Snapshot</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Component</th>
                    <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Global Switch</th>
                    <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Equinix</th>
                    <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Hardware", "4-node HPE (Nutanix certified)", "4-node HPE (Nutanix certified)", "⚠ EOL / Year-by-year support"],
                    ["Hypervisor", "VMware ESXi 7.0", "VMware ESXi 7.0", "🔴 End of General Support Oct 2025"],
                    ["HCI Platform", "Nutanix AOS", "Nutanix AOS", "⚠ License expires Aug 2026"],
                    ["VMs", "53 VMs (298 vCPU, 963 GB RAM)", "27 VMs (213 vCPU, 615 GB RAM)", "Active"],
                    ["Storage (in-use)", "24 TiB", "31 TiB", "Active"],
                  ].map(([comp, gs, eq, status], i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-2.5 font-medium text-foreground">{comp}</td>
                      <td className="px-4 py-2.5 text-foreground/70 font-mono text-[11px]">{gs}</td>
                      <td className="px-4 py-2.5 text-foreground/70 font-mono text-[11px]">{eq}</td>
                      <td className="px-4 py-2.5 text-foreground/70">{status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </section>

        <div className="border-t border-border" />

        {/* ── OPTIONS COMPARISON ── */}
        <section
          id="options-comparison"
          data-section
          className="px-6 md:px-10 lg:px-12 py-10 max-w-4xl"
        >
          <SectionHeader
            number="02"
            title="Options Comparison"
            subtitle="Five strategic paths have been evaluated. Options are presented from highest to lowest total cost."
            tag="Options Analysis"
          />

          {/* Cost Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-lg border border-border overflow-hidden mb-8"
          >
            <div className="bg-muted/50 px-5 py-3 border-b border-border">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Cost Comparison Summary</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Option</th>
                    <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Approach</th>
                    <th className="text-right px-4 py-2.5 text-muted-foreground font-medium">Est. Total</th>
                    <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">VMware</th>
                    <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Verdict</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["03", "SuperMicro + Retain VMware", "~$1,536,000", "Retained", "eliminated"],
                    ["01", "Refresh HPE + Nutanix", "~$1,241k – $1,424k", "Eliminated", "viable"],
                    ["02", "SuperMicro + AHV Migration", "~$1,113k – $1,296k", "Eliminated", "viable"],
                    ["04", "NC2 on AWS (3yr)", "~$946k AUD (incl. DR)", "Eliminated", "caution"],
                    ["05", "Sweat the Asset (1yr)", "~$155,000", "Eliminated", "recommended"],
                  ].map(([num, approach, cost, vmware, status], i) => (
                    <tr
                      key={i}
                      className={`border-b border-border/50 transition-colors ${
                        status === "recommended"
                          ? "bg-[oklch(0.97_0.03_155)] hover:bg-[oklch(0.95_0.04_155)]"
                          : status === "eliminated"
                          ? "opacity-60 hover:bg-muted/20"
                          : "hover:bg-muted/20"
                      }`}
                    >
                      <td className="px-4 py-2.5 font-mono font-bold text-muted-foreground">{num}</td>
                      <td className="px-4 py-2.5 font-medium text-foreground">{approach}</td>
                      <td className={`px-4 py-2.5 text-right font-mono font-semibold ${status === "recommended" ? "text-[oklch(0.45_0.15_155)]" : status === "eliminated" ? "text-[oklch(0.52_0.22_25)]" : "text-foreground"}`}>{cost}</td>
                      <td className="px-4 py-2.5 text-foreground/70">{vmware}</td>
                      <td className="px-4 py-2.5">
                        {status === "recommended" && <span className="badge-recommended">Recommended</span>}
                        {status === "eliminated" && <span className="badge-risk">Eliminated</span>}
                        {status === "viable" && <span className="text-[oklch(0.55_0.08_260)] text-[10px] uppercase tracking-wider font-semibold">Viable</span>}
                        {status === "caution" && <span className="badge-caution">Assess First</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Option Cards */}
          <div className="space-y-5">
            {options.map((option, i) => (
              <OptionCard key={option.id} option={option} index={i} />
            ))}
          </div>
        </section>

        <div className="border-t border-border" />

        {/* ── NC2 DEEP DIVE ── */}
        <section
          id="option-4-deep-dive"
          data-section
          className="px-6 md:px-10 lg:px-12 py-10 max-w-4xl"
        >
          <SectionHeader
            number="03"
            title="NC2 on AWS — Operational Challenges"
            subtitle="While strategically sound for the future, Option 4 carries significant operational overhead that must be resolved before commitment."
            tag="Deep Dive"
          />

          <div className="space-y-4">
            {[
              {
                icon: <Server size={16} />,
                title: "Enterprise Backup Integration",
                body: "Existing on-premises backup solutions (e.g., Veeam, Commvault) are not designed for cloud-resident workloads and may not integrate natively with NC2 on AWS. A cloud-native backup strategy — likely leveraging AWS S3 and Nutanix's native snapshot capabilities — must be designed, tested, and validated before migration. Data transfer costs for backing up to an on-premises target would be significant.",
                severity: "warning" as const,
              },
              {
                icon: <Cloud size={16} />,
                title: "Networking & IP Remediation",
                body: "Moving 80 virtual machines to AWS requires either re-IPing all workloads or establishing complex overlay networks. IP remediation risks breaking hardcoded application dependencies, DNS records, firewall rules, and integration endpoints. A full IP dependency mapping exercise across both GS and EQ clusters is required before any migration can begin.",
                severity: "warning" as const,
              },
              {
                icon: <TrendingUp size={16} />,
                title: "Stretched VLAN Complexity",
                body: "The existing environment uses stretched VLANs across Global Switch and Equinix. Extending Layer 2 networks to AWS to preserve IP addressing requires third-party appliances or specific AWS networking constructs (e.g., AWS Transit Gateway with VXLAN overlays). This introduces latency, broadcast domain risks, and additional operational complexity that must be scoped and costed.",
                severity: "warning" as const,
              },
              {
                icon: <DollarSign size={16} />,
                title: "Egress & Excluded Costs",
                body: "The Nutanix proposal explicitly excludes AWS network transit and egress charges, third-party software licenses (e.g., SQL Server), and additional AWS services. For an environment with 80 VMs and significant inter-site traffic, egress costs can be material — potentially tens of thousands of dollars per year. A network traffic analysis is required to model this accurately.",
                severity: "caution" as const,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={item.severity === "warning" ? "callout-amber" : "callout-teal"}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 flex-shrink-0 ${item.severity === "warning" ? "text-[oklch(0.65_0.15_70)]" : "text-[oklch(0.38_0.09_196)]"}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1" style={{ fontFamily: 'Fraunces, serif' }}>
                      {item.title}
                    </h4>
                    <p className="text-xs text-foreground/75 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* NC2 Commercial Summary */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 rounded-lg border border-border overflow-hidden"
          >
            <div className="bg-muted/50 px-5 py-3 border-b border-border">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">NC2 on AWS — Commercial Breakdown (USD)</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Component</th>
                    <th className="text-left px-4 py-2.5 text-muted-foreground font-medium">Detail</th>
                    <th className="text-right px-4 py-2.5 text-muted-foreground font-medium">Cost (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Nutanix NCI Ultimate (Prod)", "144 Cores × 3 Years", "$86,400"],
                    ["AWS Bare Metal — Production", "3× i3en.metal, Sydney, EC2 Savings Plan, 3yr", "$509,700"],
                    ["Nutanix NCI Professional (DR)", "144 Cores, on-demand (3 days/qtr × 3yr)", "$12,939"],
                    ["AWS Bare Metal — DR", "3× i7i.metal-24xl, on-demand testing", "$28,152"],
                    ["Amazon S3 — DR Storage", "17 TB, S3 Standard, Sydney, 3 years", "$15,865"],
                  ].map(([comp, detail, cost], i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-2.5 font-medium text-foreground">{comp}</td>
                      <td className="px-4 py-2.5 text-foreground/70">{detail}</td>
                      <td className="px-4 py-2.5 text-right font-mono font-semibold text-foreground">{cost}</td>
                    </tr>
                  ))}
                  <tr className="bg-muted/40">
                    <td className="px-4 py-3 font-bold text-foreground" colSpan={2}>Total Estimated (3-Year Term)</td>
                    <td className="px-4 py-3 text-right font-mono font-bold text-foreground">$653,056 USD<br /><span className="text-[10px] text-muted-foreground font-normal">~$946k AUD @ 0.69</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3 bg-[oklch(0.97_0.02_25)] border-t border-[oklch(0.52_0.22_25)]/20">
              <p className="text-[11px] text-[oklch(0.52_0.22_25)]">
                <strong>Note:</strong> Excludes AWS egress/transit costs, third-party software licenses (SQL Server etc.), and additional AWS services. AWS costs are public list prices — customer discounts may apply.
              </p>
            </div>
          </motion.div>
        </section>

        <div className="border-t border-border" />

        {/* ── MARKET CONTEXT ── */}
        <section
          id="market-context"
          data-section
          className="px-6 md:px-10 lg:px-12 py-10 max-w-4xl"
        >
          <SectionHeader
            number="04"
            title="Market Context: Why Wait?"
            subtitle="Current geopolitical and supply chain conditions make a large capital commitment in mid-2026 financially imprudent."
            tag="Market Context"
          />

          <div className="grid md:grid-cols-2 gap-5">
            {marketFactors.map((factor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-lg border border-border bg-card shadow-sm overflow-hidden"
              >
                <div className={`px-5 py-4 border-b border-border ${factor.type === "warning" ? "bg-[oklch(0.97_0.03_80)]" : "bg-[oklch(0.96_0.02_196)]"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className={`text-2xl font-black cost-figure leading-none mb-1 ${factor.type === "warning" ? "text-[oklch(0.65_0.15_70)]" : "text-[oklch(0.38_0.09_196)]"}`}>
                        {factor.stat}
                      </div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{factor.statLabel}</div>
                    </div>
                    {factor.type === "warning" ? (
                      <AlertTriangle size={20} className="text-[oklch(0.75_0.15_70)] flex-shrink-0 mt-1" />
                    ) : (
                      <TrendingUp size={20} className="text-[oklch(0.38_0.09_196)] flex-shrink-0 mt-1" />
                    )}
                  </div>
                </div>
                <div className="px-5 py-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2" style={{ fontFamily: 'Fraunces, serif' }}>
                    {factor.title}
                  </h4>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-3">{factor.description}</p>
                  {factor.sourceUrl !== "#" && (
                    <a
                      href={factor.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] text-[oklch(0.38_0.09_196)] hover:text-[oklch(0.28_0.08_196)] transition-colors"
                    >
                      <ExternalLink size={10} />
                      {factor.source}
                    </a>
                  )}
                  {factor.sourceUrl === "#" && (
                    <span className="text-[10px] text-muted-foreground">{factor.source}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="border-t border-border" />

        {/* ── RECOMMENDATION ── */}
        <section
          id="recommendation"
          data-section
          className="px-6 md:px-10 lg:px-12 py-10 max-w-4xl"
        >
          <SectionHeader
            number="05"
            title="Recommendation"
            subtitle="Option 5 — Sweat the Asset — is the recommended near-term path."
            tag="Strategic Recommendation"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border-2 border-[oklch(0.65_0.15_155)] bg-[oklch(0.97_0.03_155)] p-6 mb-8 shadow-lg shadow-[oklch(0.65_0.15_155)]/10"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[oklch(0.65_0.15_155)] flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={22} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Fraunces, serif' }}>
                    Option 5: Sweat the Asset
                  </h3>
                  <span className="badge-recommended">Recommended</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/60 rounded-lg p-3">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Total Cost</div>
                    <div className="cost-figure text-xl font-bold text-[oklch(0.35_0.15_155)]">~$155,000</div>
                    <div className="text-[10px] text-muted-foreground">ex. GST</div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Duration</div>
                    <div className="cost-figure text-xl font-bold text-[oklch(0.35_0.15_155)]">12 months</div>
                    <div className="text-[10px] text-muted-foreground">bridge period</div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Internal Effort</div>
                    <div className="cost-figure text-xl font-bold text-[oklch(0.35_0.15_155)]">4–6 weeks</div>
                    <div className="text-[10px] text-muted-foreground">1 FTE (BAU activity)</div>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Renew the Nutanix license for one year and maintain HPE hardware support, while allocating one internal FTE for 4–6 weeks to migrate workloads from VMware ESXi 7.0 to Nutanix AHV. This is treated as a BAU operational activity rather than a major project. The migration eliminates the VMware End of Support risk immediately and positions the environment for a future cloud migration or hardware refresh from a stable, supported baseline.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Why this option wins */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Lowest Financial Risk",
                body: "At ~$155k, this is 8–10× cheaper than any hardware refresh option and avoids locking in a 3-year cloud commitment during peak memory pricing.",
                icon: <DollarSign size={18} />,
                color: "teal",
              },
              {
                title: "Solves the Immediate Problem",
                body: "Migrating to AHV eliminates the VMware End of Support exposure now, removing the security and compliance risk without waiting for a hardware refresh.",
                icon: <ShieldAlert size={18} />,
                color: "teal",
              },
              {
                title: "Preserves Optionality",
                body: "12 months of breathing room to properly evaluate NC2 on AWS (Option 4) or a hardware refresh (Option 2) with full market intelligence and operational readiness.",
                icon: <Clock size={18} />,
                color: "teal",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-lg border border-[oklch(0.65_0.15_155)]/30 bg-white p-4 shadow-sm"
              >
                <div className="text-[oklch(0.38_0.09_196)] mb-3">{item.icon}</div>
                <h4 className="text-sm font-semibold text-foreground mb-1.5" style={{ fontFamily: 'Fraunces, serif' }}>
                  {item.title}
                </h4>
                <p className="text-xs text-foreground/70 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="border-t border-border" />

        {/* ── NEXT STEPS ── */}
        <section
          id="next-steps"
          data-section
          className="px-6 md:px-10 lg:px-12 py-10 max-w-4xl"
        >
          <SectionHeader
            number="06"
            title="Next Steps"
            subtitle="A sequenced action plan across immediate, short-term, and planning horizons."
            tag="Action Plan"
          />

          <div className="space-y-4">
            {nextSteps.map((step, i) => {
              const pCfg = priorityConfig[step.priority];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex gap-5 rounded-lg border border-border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <span
                      className="text-2xl font-black text-border leading-none"
                      style={{ fontFamily: 'Fraunces, serif' }}
                    >
                      {step.number}
                    </span>
                    {i < nextSteps.length - 1 && (
                      <div className="w-px flex-1 bg-border min-h-[20px]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h4 className="text-sm font-semibold text-foreground" style={{ fontFamily: 'Fraunces, serif' }}>
                        {step.title}
                      </h4>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-semibold uppercase tracking-wider ${pCfg.bg} ${pCfg.color}`}>
                        {pCfg.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-2">
                      <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                        <Clock size={10} /> {step.timeframe}
                      </span>
                      <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                        <ArrowRight size={10} /> {step.owner}
                      </span>
                    </div>
                    <p className="text-xs text-foreground/70 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border bg-muted/30 px-6 md:px-10 lg:px-12 py-8">
          <div className="max-w-4xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-foreground mb-1" style={{ fontFamily: 'Fraunces, serif' }}>
                NRMA Infrastructure Advisory
              </div>
              <p className="text-[11px] text-muted-foreground">
                Prepared by Manus AI · April 30, 2026 · For internal executive use only.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Broadcom EoGS", url: "https://knowledge.broadcom.com/external/article/415405/end-of-general-support-for-vsphere-70.html" },
                { label: "Nutanix NC2 Docs", url: "https://www.nutanixbible.com/10a-book-of-nutanix-clusters-aws.html" },
                { label: "Memory Price Tracker", url: "https://counterpointresearch.com/en/insights/Memory-Prices-Surge-Up-to-90-From-Q4-2025" },
              ].map((ref, i) => (
                <a
                  key={i}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[oklch(0.38_0.09_196)] hover:text-[oklch(0.28_0.08_196)] transition-colors"
                >
                  <ExternalLink size={10} />
                  {ref.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
