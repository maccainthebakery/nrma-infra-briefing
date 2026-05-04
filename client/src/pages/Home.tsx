// ============================================================
// NRMA INFRASTRUCTURE ADVISORY — Main Briefing Page
// NRMA Brand Theme: Blue/white, Inter font, NRMA logo
// Source: NRMA Group Engineering
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
  Zap,
  Brain,
  Activity,
  BarChart3,
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import SectionHeader from "@/components/SectionHeader";
import OptionCard from "@/components/OptionCard";
import {
  options,
  currentStateRisks,
  marketFactors,
  nextSteps,
  techHorizonItems,
  siteVMBreakdown,
  highSpecVMs,
  highSpecVMSummary,
  type SectionTag,
} from "@/lib/briefingData";

const HERO_BG = "/hero-bg.jpg";
const NRMA_LOGO = "/nrma-logo.png";

export default function Home() {
  const [activeSection, setActiveSection] = useState("executive-summary");
  const [activeFilter, setActiveFilter] = useState<SectionTag | "all">("all");
  const observerRef = useRef<IntersectionObserver | null>(null);

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
    high: {
      color: "text-[oklch(0.52_0.22_25)]",
      bg: "bg-[oklch(0.97_0.02_25)]",
      border: "border-[oklch(0.52_0.22_25)]/30",
      label: "High Risk",
      icon: <ShieldAlert size={14} />,
    },
    medium: {
      color: "text-[oklch(0.65_0.15_70)]",
      bg: "bg-[oklch(0.97_0.03_80)]",
      border: "border-[oklch(0.75_0.15_70)]/30",
      label: "Medium Risk",
      icon: <AlertTriangle size={14} />,
    },
    low: {
      color: "text-[oklch(0.50_0.15_155)]",
      bg: "bg-[oklch(0.97_0.03_155)]",
      border: "border-[oklch(0.60_0.15_155)]/30",
      label: "Low Risk",
      icon: <CheckCircle2 size={14} />,
    },
  };

  const priorityConfig = {
    immediate: {
      color: "text-[oklch(0.52_0.22_25)]",
      label: "Immediate",
      bg: "bg-[oklch(0.97_0.02_25)]",
    },
    "short-term": {
      color: "text-[oklch(0.65_0.15_70)]",
      label: "Short-term",
      bg: "bg-[oklch(0.97_0.03_80)]",
    },
    planning: {
      color: "text-[oklch(0.38_0.18_258)]",
      label: "Planning",
      bg: "bg-[oklch(0.94_0.04_258)]",
    },
  };

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar
        activeSection={activeSection}
        activeFilter={activeFilter}
        onSectionClick={scrollToSection}
        onFilterChange={setActiveFilter}
      />

      <main className="flex-1 min-w-0 pt-16 lg:pt-0">

        {/* ── HERO ── */}
        <section
          id="executive-summary"
          data-section
          className="relative min-h-[320px] md:min-h-[380px] flex flex-col justify-end overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_BG})` }}
          />
          {/* NRMA blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.12_258)]/95 via-[oklch(0.22_0.12_258)]/80 to-[oklch(0.22_0.12_258)]/40" />

          {/* NRMA logo watermark top-right */}
          <div className="absolute top-5 right-6 z-10 opacity-90">
            <div className="bg-white rounded-lg px-3 py-2 flex items-center gap-2.5 shadow-lg">
              <img src={NRMA_LOGO} alt="NRMA" className="h-8 w-8 object-contain" />
              <div>
                <div className="text-[oklch(0.22_0.12_258)] font-bold text-sm leading-tight">NRMA</div>
                <div className="text-[oklch(0.45_0.10_258)] text-[9px] font-semibold leading-tight uppercase tracking-wide">Group Engineering</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 px-8 md:px-12 pb-8 pt-16 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[oklch(0.75_0.10_258)] text-[10px] uppercase tracking-widest font-bold">Executive Briefing</span>
                <span className="w-8 h-px bg-[oklch(0.60_0.12_258)]" />
                <span className="text-[oklch(0.60_0.08_258)] text-[10px] uppercase tracking-widest font-medium">April 2026</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3">
                Infrastructure Strategy:<br />
                <span className="text-[oklch(0.80_0.12_258)]">VMware EOL &amp; Migration Path</span>
              </h1>
              <p className="text-[oklch(0.82_0.04_258)] text-sm md:text-base leading-relaxed max-w-xl">
                A strategic review of NRMA's data centre infrastructure options as VMware vSphere 7.0 reaches end of support and existing HPE hardware approaches end of life.
              </p>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative z-10 bg-[oklch(0.18_0.12_258)] border-t border-[oklch(0.30_0.12_258)] px-8 md:px-12 py-4 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: <Server size={14} />, label: "Data Centres", value: "2 Sites", sub: "Global Switch + Equinix" },
              { icon: <Cpu size={14} />, label: "Total VMs", value: "80 VMs", sub: "511 vCPU / 1,578 GB RAM" },
              { icon: <Clock size={14} />, label: "VMware EoGS", value: "Oct 2025", sub: "Already expired" },
              { icon: <DollarSign size={14} />, label: "Recommended Cost", value: "~$155k", sub: "12-month bridge option" },
            ].map((stat, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="text-[oklch(0.65_0.12_258)] mt-0.5 flex-shrink-0">{stat.icon}</div>
                <div>
                  <div className="text-[10px] text-[oklch(0.55_0.08_258)] uppercase tracking-widest mb-0.5 font-semibold">{stat.label}</div>
                  <div className="text-white font-bold text-sm cost-figure">{stat.value}</div>
                  <div className="text-[oklch(0.55_0.06_258)] text-[10px]">{stat.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── EXECUTIVE SUMMARY BODY ── */}
        <div className="px-6 md:px-10 lg:px-12 py-10 max-w-4xl bg-white">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* NRMA blue recommendation callout */}
            <div className="callout-blue mb-6">
              <p className="text-sm font-bold text-[oklch(0.22_0.12_258)] mb-1">
                Recommended Path: Option 5 — "Sweat the Asset"
              </p>
              <p className="text-sm text-[oklch(0.30_0.10_258)] leading-relaxed">
                Renew Nutanix licensing for one year (~$125k), maintain HPE hardware support (~$30k), and migrate from VMware ESXi to Nutanix AHV using internal resources over 6–8 weeks. Total cost: <strong>~$155,000</strong>. This eliminates the VMware licensing risk immediately while providing 12 months of breathing room to navigate current memory price volatility and geopolitical supply chain disruption before committing to a major hardware refresh or cloud migration.
              </p>
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              NRMA operates a 4-node Nutanix HCI cluster at both Global Switch (GS) and Equinix (EQ), supporting 80 virtual machines across 511 vCPU and 1,578 GB of RAM. The HPE hardware, purchased in August 2021 under a 5-year finance deal, is now approaching end of life. VMware vSphere 7.0 — the hypervisor running these workloads — reached its End of General Support on October 2, 2025, with no further security patches or official support available. Nutanix software licenses expire in August 2026.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              Five options have been evaluated, ranging from on-premises hardware refreshes to a full cloud migration via Nutanix Cloud Clusters (NC2) on AWS. The analysis accounts for current market conditions — specifically the 80–90% surge in server memory prices in Q1 2026 and significant supply chain disruption caused by US trade tariffs — which make a large capital commitment in the near term financially imprudent.
            </p>

            {/* FY26 Budget Context */}
            <div className="rounded-lg border border-[oklch(0.65_0.15_70)]/40 bg-[oklch(0.97_0.03_80)] p-4">
              <div className="flex items-start gap-3">
                <DollarSign size={16} className="text-[oklch(0.65_0.15_70)] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[oklch(0.18_0.10_258)] mb-1.5">FY26 Budget Position — A Complicating Factor</h4>
                  <p className="text-xs text-foreground/75 leading-relaxed mb-2">
                    NRMA Group Engineering holds an existing <strong>$400,000 CapEx budget for FY26</strong>, which closes at the end of June 2026. With the financial year ending in approximately 8 weeks, full utilisation of this budget against a major hardware refresh or cloud migration commitment is unlikely within the current cycle. A rollover into FY27 is probable for any unspent allocation.
                  </p>
                  <p className="text-xs text-foreground/75 leading-relaxed">
                    <strong>CapEx vs. OpEx classification is TBC.</strong> The Nutanix NC2 on AWS option (Option 4) may qualify as OpEx under AASB 16 / IFRS 16 depending on the contract structure, which could affect whether it draws on the existing CapEx envelope or sits outside it entirely. Option 5 (~$155k) is most likely to be classified as OpEx (software licensing and maintenance), making it budget-neutral against the CapEx allocation and potentially the cleanest path through the FY26 year-end. Finance sign-off on classification is recommended before any commitment.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: "FY26 CapEx Budget", value: "$400k", note: "Existing allocation" },
                  { label: "FY26 Close", value: "June 2026", note: "~8 weeks remaining" },
                  { label: "Option 5 Classification", value: "OpEx (TBC)", note: "Likely outside CapEx envelope" },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-md p-3 text-center">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-semibold">{s.label}</div>
                    <div className="text-sm font-black cost-figure text-[oklch(0.65_0.15_70)]">{s.value}</div>
                    <div className="text-[10px] text-muted-foreground">{s.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border" />

        {/* ── CURRENT STATE & RISKS ── */}
        <section
          id="current-state"
          data-section
          className="px-6 md:px-10 lg:px-12 py-10 max-w-4xl bg-[oklch(0.98_0.01_258)]"
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
                  <h4 className="text-sm font-bold text-[oklch(0.18_0.10_258)] mb-1.5">{risk.title}</h4>
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
            <div className="bg-[oklch(0.22_0.12_258)] px-5 py-3 border-b border-border">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Infrastructure Snapshot</h4>
            </div>
            <div className="overflow-x-auto bg-white">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-[oklch(0.94_0.04_258)]">
                    <th className="text-left px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Component</th>
                    <th className="text-left px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Global Switch</th>
                    <th className="text-left px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Equinix</th>
                    <th className="text-left px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Hardware", "4-node HPE (Nutanix certified)", "4-node HPE (Nutanix certified)", "⚠ EOL / Year-by-year support"],
                    ["Hypervisor", "VMware ESXi 7.0", "VMware ESXi 7.0", "🔴 End of General Support Oct 2025"],
                    ["HCI Platform", "Nutanix AOS", "Nutanix AOS", "⚠ License expires Aug 2026"],
                    ["Production Infra VMs", "42 VMs", "20 VMs", "Active — 62 total"],
                    ["Total VMs (all)", "53 VMs (298 vCPU, 963 GB RAM)", "27 VMs (213 vCPU, 615 GB RAM)", "Active"],
                    ["Storage (in-use)", "24 TiB", "31 TiB", "Active"],
                  ].map(([comp, gs, eq, status], i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-[oklch(0.96_0.02_258)] transition-colors">
                      <td className="px-4 py-2.5 font-semibold text-[oklch(0.22_0.12_258)]">{comp}</td>
                      <td className="px-4 py-2.5 text-foreground/70 font-mono text-[11px]">{gs}</td>
                      <td className="px-4 py-2.5 text-foreground/70 font-mono text-[11px]">{eq}</td>
                      <td className="px-4 py-2.5 text-foreground/70">{status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* VM Breakdown by Site */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-6 grid sm:grid-cols-2 gap-4"
          >
            {siteVMBreakdown.map((site, i) => (
              <div key={i} className="rounded-lg border border-[oklch(0.38_0.18_258)]/20 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-md bg-[oklch(0.22_0.12_258)] flex items-center justify-center">
                    <Server size={14} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[oklch(0.18_0.10_258)]">{site.site}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{site.siteCode} Site</div>
                  </div>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-black cost-figure text-[oklch(0.28_0.18_258)]">{site.productionInfraVMs}</span>
                  <span className="text-xs text-muted-foreground">production infra VMs</span>
                </div>
                <p className="text-xs text-foreground/65 leading-relaxed">{site.description}</p>
              </div>
            ))}
          </motion.div>

          {/* High-Spec Security VM Cost Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-6 rounded-lg border border-border overflow-hidden"
          >
            <div className="bg-[oklch(0.22_0.12_258)] px-5 py-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">High-Specification Security VMs — Cloud Cost Implications</h4>
            </div>
            <div className="bg-[oklch(0.97_0.02_258)] px-5 py-4 border-b border-border">
              <div className="flex items-start gap-3">
                <AlertTriangle size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-foreground/80 leading-relaxed">
                  {highSpecVMSummary.keyInsight}
                </p>
              </div>
            </div>
            <div className="overflow-x-auto bg-white">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-[oklch(0.94_0.04_258)]">
                    <th className="text-left px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">System</th>
                    <th className="text-left px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Purpose</th>
                    <th className="text-center px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">VMs</th>
                    <th className="text-right px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Cloud Rate/VM/yr</th>
                    <th className="text-right px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Total/yr (AUD)</th>
                    <th className="text-right px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">3-yr Total</th>
                  </tr>
                </thead>
                <tbody>
                  {highSpecVMs.map((vm, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-[oklch(0.96_0.02_258)] transition-colors">
                      <td className="px-4 py-3 font-bold text-[oklch(0.22_0.12_258)]">{vm.name}</td>
                      <td className="px-4 py-3 text-foreground/65 max-w-[180px]">{vm.purpose}</td>
                      <td className="px-4 py-3 text-center font-mono font-bold text-[oklch(0.28_0.18_258)]">{vm.vmCount}</td>
                      <td className="px-4 py-3 text-right font-mono">${vm.cloudRackRatePerVMPerYear.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-[oklch(0.55_0.18_25)]">${vm.totalCloudCostPerYear.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right font-mono font-bold text-[oklch(0.45_0.18_25)]">${vm.totalCloud3yr.toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr className="bg-[oklch(0.22_0.12_258)] text-white">
                    <td className="px-4 py-3 font-bold" colSpan={2}>TOTAL (high-spec security VMs only)</td>
                    <td className="px-4 py-3 text-center font-mono font-bold">{highSpecVMSummary.totalVMs}</td>
                    <td className="px-4 py-3" />
                    <td className="px-4 py-3 text-right font-mono font-bold">${highSpecVMSummary.totalCloudCostPerYear.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right font-mono font-bold">${highSpecVMSummary.totalCloud3yr.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-5 py-4 bg-[oklch(0.97_0.02_258)] border-t border-border">
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                <strong>Note:</strong> Cloud rack rates are indicative based on AWS bare metal instance pricing at the specification required to run these workloads. Egress costs, backup redesign costs, IP remediation, and third-party licensing (e.g., Cisco ISE, CyberArk) are <em>not</em> included in these figures or in the NC2 proposal. The actual cloud cost for these workloads is likely to be materially higher.
              </p>
            </div>
          </motion.div>
        </section>

        <div className="border-t border-border" />

        {/* ── OPTIONS COMPARISON ── */}
        <section
          id="options-comparison"
          data-section
          className="px-6 md:px-10 lg:px-12 py-10 max-w-4xl bg-white"
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
            <div className="bg-[oklch(0.22_0.12_258)] px-5 py-3 border-b border-border">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">Cost Comparison Summary</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-[oklch(0.94_0.04_258)]">
                    <th className="text-left px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">#</th>
                    <th className="text-left px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Approach</th>
                    <th className="text-right px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Est. Total</th>
                    <th className="text-left px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">VMware</th>
                    <th className="text-left px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Verdict</th>
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
                          : "hover:bg-[oklch(0.96_0.02_258)]"
                      }`}
                    >
                      <td className="px-4 py-2.5 font-mono font-bold text-[oklch(0.38_0.18_258)]">{num}</td>
                      <td className="px-4 py-2.5 font-semibold text-[oklch(0.18_0.10_258)]">{approach}</td>
                      <td className={`px-4 py-2.5 text-right font-mono font-bold ${
                        status === "recommended" ? "text-[oklch(0.40_0.15_155)]"
                        : status === "eliminated" ? "text-[oklch(0.52_0.22_25)]"
                        : "text-[oklch(0.28_0.16_258)]"
                      }`}>{cost}</td>
                      <td className="px-4 py-2.5 text-foreground/70">{vmware}</td>
                      <td className="px-4 py-2.5">
                        {status === "recommended" && <span className="badge-recommended">Recommended</span>}
                        {status === "eliminated" && <span className="badge-risk">Eliminated</span>}
                        {status === "viable" && <span className="text-[oklch(0.38_0.18_258)] text-[10px] uppercase tracking-wider font-bold">Viable</span>}
                        {status === "caution" && <span className="badge-caution">Assess First</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

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
          className="px-6 md:px-10 lg:px-12 py-10 max-w-4xl bg-[oklch(0.98_0.01_258)]"
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
                type: "amber",
              },
              {
                icon: <Cloud size={16} />,
                title: "Networking & IP Remediation",
                body: "Moving 80 virtual machines to AWS requires either re-IPing all workloads or establishing complex overlay networks. IP remediation risks breaking hardcoded application dependencies, DNS records, firewall rules, and integration endpoints. A full IP dependency mapping exercise across both GS and EQ clusters is required before any migration can begin.",
                type: "amber",
              },
              {
                icon: <TrendingUp size={16} />,
                title: "Stretched VLAN Complexity",
                body: "The existing environment uses stretched VLANs across Global Switch and Equinix. Extending Layer 2 networks to AWS to preserve IP addressing requires third-party appliances or specific AWS networking constructs (e.g., AWS Transit Gateway with VXLAN overlays). This introduces latency, broadcast domain risks, and additional operational complexity that must be scoped and costed.",
                type: "amber",
              },
              {
                icon: <DollarSign size={16} />,
                title: "Egress & Excluded Costs",
                body: "The Nutanix proposal explicitly excludes AWS network transit and egress charges, third-party software licenses (e.g., SQL Server), and additional AWS services. For an environment with 80 VMs and significant inter-site traffic, egress costs can be material — potentially tens of thousands of dollars per year. A network traffic analysis is required to model this accurately.",
                type: "blue",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={item.type === "amber" ? "callout-amber" : "callout-blue"}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 flex-shrink-0 ${item.type === "amber" ? "text-[oklch(0.65_0.15_70)]" : "text-[oklch(0.38_0.18_258)]"}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[oklch(0.18_0.10_258)] mb-1">{item.title}</h4>
                    <p className="text-xs text-foreground/75 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* NC2 Commercial Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 rounded-lg border border-border overflow-hidden"
          >
            <div className="bg-[oklch(0.22_0.12_258)] px-5 py-3 border-b border-border">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">NC2 on AWS — Commercial Breakdown (USD)</h4>
            </div>
            <div className="overflow-x-auto bg-white">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-[oklch(0.94_0.04_258)]">
                    <th className="text-left px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Component</th>
                    <th className="text-left px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Detail</th>
                    <th className="text-right px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Cost (USD)</th>
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
                    <tr key={i} className="border-b border-border/50 hover:bg-[oklch(0.96_0.02_258)] transition-colors">
                      <td className="px-4 py-2.5 font-semibold text-[oklch(0.22_0.12_258)]">{comp}</td>
                      <td className="px-4 py-2.5 text-foreground/70">{detail}</td>
                      <td className="px-4 py-2.5 text-right font-mono font-bold text-[oklch(0.28_0.16_258)]">{cost}</td>
                    </tr>
                  ))}
                  <tr className="bg-[oklch(0.94_0.04_258)]">
                    <td className="px-4 py-3 font-bold text-[oklch(0.22_0.12_258)]" colSpan={2}>Total Estimated (3-Year Term)</td>
                    <td className="px-4 py-3 text-right font-mono font-bold text-[oklch(0.22_0.12_258)]">
                      $653,056 USD<br />
                      <span className="text-[10px] text-muted-foreground font-normal">~$946k AUD @ 0.69</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3 bg-[oklch(0.97_0.02_25)] border-t border-[oklch(0.52_0.22_25)]/20">
              <p className="text-[11px] text-[oklch(0.52_0.22_25)]">
                <strong>Note:</strong> Excludes AWS egress/transit costs, third-party software licenses (SQL Server etc.), and additional AWS services.
              </p>
            </div>
          </motion.div>
        </section>

        <div className="border-t border-border" />

        {/* ── MARKET CONTEXT ── */}
        <section
          id="market-context"
          data-section
          className="px-6 md:px-10 lg:px-12 py-10 max-w-4xl bg-white"
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
                className="rounded-lg border border-border bg-white shadow-sm overflow-hidden"
              >
                <div className={`px-5 py-4 border-b border-border ${factor.type === "warning" ? "bg-[oklch(0.97_0.03_80)]" : "bg-[oklch(0.94_0.04_258)]"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className={`text-2xl font-black cost-figure leading-none mb-1 ${factor.type === "warning" ? "text-[oklch(0.65_0.15_70)]" : "text-[oklch(0.38_0.18_258)]"}`}>
                        {factor.stat}
                      </div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">{factor.statLabel}</div>
                    </div>
                    {factor.type === "warning" ? (
                      <AlertTriangle size={20} className="text-[oklch(0.75_0.15_70)] flex-shrink-0 mt-1" />
                    ) : (
                      <TrendingUp size={20} className="text-[oklch(0.38_0.18_258)] flex-shrink-0 mt-1" />
                    )}
                  </div>
                </div>
                <div className="px-5 py-4">
                  <h4 className="text-sm font-bold text-[oklch(0.18_0.10_258)] mb-2">{factor.title}</h4>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-3">{factor.description}</p>
                  {factor.sourceUrl !== "#" && (
                    <a
                      href={factor.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] text-[oklch(0.38_0.18_258)] hover:text-[oklch(0.28_0.16_258)] transition-colors font-medium"
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

        {/* ── TECHNOLOGY HORIZON ── */}
        <section
          id="tech-horizon"
          data-section
          className="px-6 md:px-10 lg:px-12 py-10 max-w-4xl bg-white"
        >
          <SectionHeader
            number="05"
            title="Technology Horizon"
            subtitle="Emerging AI efficiency trends that reinforce the case for a 12-month deferral — and what to watch before committing."
            tag="Tech Horizon"
          />

          {/* Memory Price Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 rounded-lg border border-border overflow-hidden shadow-sm"
          >
            <div className="bg-[oklch(0.22_0.12_258)] px-5 py-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">64GB RDIMM Server Memory — Price Trajectory (2024–2026)</h4>
            </div>
            <div className="overflow-x-auto bg-white">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border bg-[oklch(0.94_0.04_258)]">
                    <th className="text-left px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Period</th>
                    <th className="text-right px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Price (USD)</th>
                    <th className="text-right px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Change</th>
                    <th className="text-left px-4 py-2.5 text-[oklch(0.28_0.12_258)] font-bold">Driver</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Q1–Q2 2024", "~$120–$150", "—", "Post-2023 DRAM trough; oversupply era"],
                    ["Q3–Q4 2024", "~$180–$220", "+40–50%", "AI demand begins pulling HBM capacity"],
                    ["Q1–Q2 2025", "~$230–$255", "+15–20%", "HBM ramp accelerates; DDR5 tightens"],
                    ["Q3 2025", "~$255", "Stable", "Brief plateau before AI supercycle"],
                    ["Q4 2025", "~$450", "+76%", "AI supercycle ignites; Samsung MLC NAND exits"],
                    ["Q1 2026", "~$700–$900", "+56–100%", "HBM sold out; 80–90% QoQ surge"],
                    ["Q2 2026 (forecast)", "~$900–$1,000+", "Continued rise", "Supply normalisation not expected until H2 2026"],
                  ].map(([period, price, change, driver], i) => (
                    <tr key={i} className={`border-b border-border/50 hover:bg-[oklch(0.96_0.02_258)] transition-colors ${i === 5 ? "bg-[oklch(0.97_0.03_25)]" : ""}`}>
                      <td className="px-4 py-2.5 font-semibold text-[oklch(0.22_0.12_258)]">{period}</td>
                      <td className="px-4 py-2.5 text-right font-mono font-bold text-[oklch(0.28_0.16_258)]">{price}</td>
                      <td className={`px-4 py-2.5 text-right font-bold ${
                        change === "—" ? "text-muted-foreground" :
                        change === "Stable" ? "text-[oklch(0.50_0.15_155)]" :
                        change === "Continued rise" ? "text-[oklch(0.52_0.22_25)]" :
                        "text-[oklch(0.52_0.22_25)]"
                      }`}>{change}</td>
                      <td className="px-4 py-2.5 text-foreground/70">{driver}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3 bg-[oklch(0.97_0.02_25)] border-t border-[oklch(0.52_0.22_25)]/20">
              <p className="text-[11px] text-[oklch(0.52_0.22_25)]">
                <strong>Buying new servers today means buying at the peak.</strong> A 64GB RDIMM that cost ~$150 in early 2024 now costs ~$900 — a 500%+ increase in under two years. Sources: Counterpoint Research, Octopart, NetworkWorld, X/@lamw.
              </p>
            </div>
          </motion.div>

          {/* MU Stock Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8 rounded-lg border border-[oklch(0.38_0.18_258)]/30 bg-[oklch(0.94_0.04_258)] p-5"
          >
            <div className="flex items-start gap-3 mb-3">
              <BarChart3 size={18} className="text-[oklch(0.38_0.18_258)] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[oklch(0.18_0.10_258)] mb-1">The Micron (MU) Signal: What the Market Told Us About TurboQuant</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">
                  On March 24, 2026, Google published TurboQuant. Within days, Micron Technology (NASDAQ: MU) fell <strong>30.3%</strong> from its recent high on nearly double its average daily volume — the market's immediate verdict that AI memory demand could be structurally impacted. Samsung and SK Hynix saw similar sharp declines.
                </p>
                <p className="text-xs text-foreground/75 leading-relaxed mt-2">
                  The rebound came quickly. Analysts at Bank of America invoked the <strong>Jevons Paradox</strong> — the historical pattern where efficiency gains in resource use drive <em>more</em> consumption, not less, because lower cost-per-unit expands the addressable market. Morgan Stanley reaffirmed Overweight. MU has since recovered to all-time highs of <strong>$524.56</strong> (April 27, 2026).
                </p>
                <p className="text-xs text-foreground/75 leading-relaxed mt-2">
                  <strong>The nuance for NRMA:</strong> TurboQuant is not new — the underlying research is approximately 12 months old. Its market impact was delayed by the time from research to mainstream adoption. This pattern — where efficiency innovations lag 12–18 months before affecting procurement economics — is exactly the window Option 5 is designed to capture.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3">
              {[
                { label: "MU drop post-TurboQuant", value: "−30.3%", note: "Within days of publication" },
                { label: "MU ATH (Apr 27, 2026)", value: "$524.56", note: "Recovered & exceeded prior high" },
                { label: "MU 12-month gain", value: "+550%+", note: "Driven by AI memory supercycle" },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-lg p-3 text-center">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-semibold">{s.label}</div>
                  <div className={`text-lg font-black cost-figure ${
                    s.value.startsWith("-") ? "text-[oklch(0.52_0.22_25)]" : "text-[oklch(0.38_0.18_258)]"
                  }`}>{s.value}</div>
                  <div className="text-[10px] text-muted-foreground">{s.note}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Horizon Cards */}
          <div className="space-y-5">
            {techHorizonItems.map((item, i) => {
              const typeConfig = {
                opportunity: { icon: <Zap size={16} />, color: "text-[oklch(0.50_0.15_155)]", bg: "bg-[oklch(0.97_0.03_155)]", border: "border-[oklch(0.60_0.15_155)]/30", label: "Opportunity" },
                trend: { icon: <Brain size={16} />, color: "text-[oklch(0.38_0.18_258)]", bg: "bg-[oklch(0.94_0.04_258)]", border: "border-[oklch(0.38_0.18_258)]/30", label: "Trend" },
                watch: { icon: <Activity size={16} />, color: "text-[oklch(0.65_0.15_70)]", bg: "bg-[oklch(0.97_0.03_80)]", border: "border-[oklch(0.75_0.15_70)]/30", label: "Watch" },
              }[item.type];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className={`rounded-lg border ${typeConfig.border} overflow-hidden shadow-sm`}
                >
                  <div className={`px-5 py-3 ${typeConfig.bg} border-b border-border flex items-center justify-between`}>
                    <div className="flex items-center gap-2.5">
                      <span className={typeConfig.color}>{typeConfig.icon}</span>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{typeConfig.label}</div>
                        <h4 className="text-sm font-bold text-[oklch(0.18_0.10_258)]">{item.title}</h4>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <div className={`text-2xl font-black cost-figure leading-none ${typeConfig.color}`}>{item.stat}</div>
                      <div className="text-[10px] text-muted-foreground max-w-[140px] text-right">{item.statLabel}</div>
                    </div>
                  </div>
                  <div className="px-5 py-4 bg-white">
                    <p className="text-xs text-foreground/70 leading-relaxed mb-3">{item.description}</p>
                    <div className="rounded-md bg-[oklch(0.96_0.02_258)] border border-[oklch(0.38_0.18_258)]/15 px-4 py-3 mb-3">
                      <div className="text-[10px] uppercase tracking-widest font-bold text-[oklch(0.38_0.18_258)] mb-1">Implication for NRMA</div>
                      <p className="text-xs text-foreground/80 leading-relaxed">{item.implication}</p>
                    </div>
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] text-[oklch(0.38_0.18_258)] hover:text-[oklch(0.28_0.16_258)] transition-colors font-medium"
                    >
                      <ExternalLink size={10} />
                      {item.source}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <div className="border-t border-border" />

        {/* ── RECOMMENDATION ── */}
        <section
          id="recommendation"
          data-section
          className="px-6 md:px-10 lg:px-12 py-10 max-w-4xl bg-[oklch(0.98_0.01_258)]"
        >
          <SectionHeader
            number="06"
            title="Recommendation"
            subtitle="Option 5 — Sweat the Asset — is the recommended near-term path."
            tag="Strategic Recommendation"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border-2 border-[oklch(0.60_0.15_155)] bg-[oklch(0.97_0.03_155)] p-6 mb-8 shadow-lg shadow-[oklch(0.60_0.15_155)]/10"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[oklch(0.60_0.15_155)] flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={22} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-[oklch(0.18_0.10_258)]">Option 5: Sweat the Asset</h3>
                  <span className="badge-recommended">Recommended</span>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  {[
                    { label: "Total Cost", value: "~$155,000", sub: "ex. GST" },
                    { label: "Duration", value: "12 months", sub: "bridge period" },
                    { label: "Internal Effort", value: "6–8 weeks", sub: "1 FTE (BAU activity)" },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/70 rounded-lg p-3">
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-semibold">{s.label}</div>
                      <div className="cost-figure text-xl font-bold text-[oklch(0.35_0.15_155)]">{s.value}</div>
                      <div className="text-[10px] text-muted-foreground">{s.sub}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Renew the Nutanix license for one year and maintain HPE hardware support, while allocating one internal FTE for 6–8 weeks to migrate workloads from VMware ESXi 7.0 to Nutanix AHV. This is treated as a BAU operational activity rather than a major project. The migration eliminates the VMware End of Support risk immediately and positions the environment for a future cloud migration or hardware refresh from a stable, supported baseline.
                </p>
              </div>
            </div>
          </motion.div>

          {/* FY26 Budget Alignment Note */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-6 rounded-lg border border-[oklch(0.65_0.15_70)]/40 bg-[oklch(0.97_0.03_80)] px-5 py-4"
          >
            <div className="flex items-start gap-3">
              <DollarSign size={15} className="text-[oklch(0.65_0.15_70)] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[oklch(0.18_0.10_258)] mb-1">FY26 Budget Alignment</h4>
                <p className="text-xs text-foreground/75 leading-relaxed">
                  The existing <strong>$400k FY26 CapEx budget closes at end of June 2026</strong>. With only ~8 weeks remaining in the financial year, deploying this budget against a hardware refresh or 3-year cloud commitment is not feasible within the current cycle — a rollover into FY27 is the likely outcome for any unspent CapEx. Option 5 (~$155k) is expected to be classified as <strong>OpEx</strong> (software licensing + maintenance), meaning it sits <em>outside</em> the CapEx envelope entirely and can be approved and executed immediately without competing for the FY26 allocation. <strong>CapEx vs. OpEx classification is TBC — Finance sign-off recommended.</strong> If the $400k does roll to FY27, it positions NRMA well to fund a hardware refresh (Option 2 at ~$1.3M with FY27 budget) or a properly scoped NC2 migration (Option 4) from a stable, supported AHV baseline.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Lowest Financial Risk", body: "At ~$155k and likely OpEx-classified, this is 8–10× cheaper than any hardware refresh and avoids competing for the FY26 CapEx envelope with only 8 weeks remaining in the financial year.", icon: <DollarSign size={18} /> },
              { title: "Solves the Immediate Problem", body: "Migrating to AHV eliminates the VMware End of Support exposure now, removing the security and compliance risk without waiting for a hardware refresh.", icon: <ShieldAlert size={18} /> },
              { title: "Preserves Optionality", body: "12 months of breathing room to properly scope NC2 on AWS (Option 4) or a hardware refresh (Option 2), with the FY26 CapEx rollover potentially funding the FY27 decision.", icon: <Clock size={18} /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-lg border border-[oklch(0.38_0.18_258)]/20 bg-white p-4 shadow-sm"
              >
                <div className="text-[oklch(0.38_0.18_258)] mb-3">{item.icon}</div>
                <h4 className="text-sm font-bold text-[oklch(0.18_0.10_258)] mb-1.5">{item.title}</h4>
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
          className="px-6 md:px-10 lg:px-12 py-10 max-w-4xl bg-white"
        >
          <SectionHeader
            number="07"
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
                  className="flex gap-5 rounded-lg border border-border bg-white p-5 shadow-sm hover:shadow-md hover:border-[oklch(0.38_0.18_258)]/30 transition-all"
                >
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <span className="text-2xl font-black text-[oklch(0.88_0.03_258)] leading-none tabular-nums">
                      {step.number}
                    </span>
                    {i < nextSteps.length - 1 && (
                      <div className="w-px flex-1 bg-border min-h-[20px]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h4 className="text-sm font-bold text-[oklch(0.18_0.10_258)]">{step.title}</h4>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${pCfg.bg} ${pCfg.color}`}>
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
        <footer className="border-t-2 border-[oklch(0.38_0.18_258)] bg-[oklch(0.22_0.12_258)] px-6 md:px-10 lg:px-12 py-8">
          <div className="max-w-4xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white flex items-center justify-center overflow-hidden p-1">
                <img src={NRMA_LOGO} alt="NRMA" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">NRMA Group Engineering</div>
                <p className="text-[oklch(0.60_0.06_258)] text-[11px]">
                  Infrastructure Advisory · April 30, 2026 · Confidential
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Broadcom EoGS Notice", url: "https://knowledge.broadcom.com/external/article/415405/end-of-general-support-for-vsphere-70.html" },
                { label: "Nutanix NC2 Docs", url: "https://www.nutanixbible.com/10a-book-of-nutanix-clusters-aws.html" },
                { label: "Memory Price Research", url: "https://counterpointresearch.com/en/insights/Memory-Prices-Surge-Up-to-90-From-Q4-2025" },
              ].map((ref, i) => (
                <a
                  key={i}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[oklch(0.65_0.10_258)] hover:text-white transition-colors font-medium"
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
