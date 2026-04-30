// ============================================================
// NRMA INFRASTRUCTURE ADVISORY — Briefing Content Data
// Executive Broadsheet Design
// ============================================================

export type SectionTag = 
  | "overview"
  | "problem"
  | "options"
  | "recommendation"
  | "market-context"
  | "tech-horizon"
  | "next-steps";

export interface NavItem {
  id: string;
  label: string;
  number: string;
  tag: SectionTag;
}

export const navItems: NavItem[] = [
  { id: "executive-summary", label: "Executive Summary", number: "00", tag: "overview" },
  { id: "current-state", label: "Current State & Risks", number: "01", tag: "problem" },
  { id: "options-comparison", label: "Options Comparison", number: "02", tag: "options" },
  { id: "option-4-deep-dive", label: "NC2 on AWS — Deep Dive", number: "03", tag: "options" },
  { id: "market-context", label: "Market Context", number: "04", tag: "market-context" },
  { id: "tech-horizon", label: "Technology Horizon", number: "05", tag: "tech-horizon" },
  { id: "recommendation", label: "Recommendation", number: "06", tag: "recommendation" },
  { id: "next-steps", label: "Next Steps", number: "07", tag: "next-steps" },
];

export const filterTags: { id: SectionTag | "all"; label: string }[] = [
  { id: "all", label: "All Sections" },
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "options", label: "Options" },
  { id: "recommendation", label: "Recommendation" },
  { id: "market-context", label: "Market Context" },
  { id: "tech-horizon", label: "Tech Horizon" },
  { id: "next-steps", label: "Next Steps" },
];

export interface OptionData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  status: "eliminated" | "viable" | "recommended" | "caution";
  hardwareCost?: string;
  licenseCost3yr?: string;
  licenseCost5yr?: string;
  additionalCost?: string;
  totalLow: string;
  totalHigh?: string;
  effort: string;
  pros: string[];
  cons: string[];
  isRecommended?: boolean;
}

export const options: OptionData[] = [
  {
    id: "option1",
    number: "01",
    title: "Refresh HPE Hardware",
    subtitle: "New HPE servers + Nutanix license renewal",
    status: "viable",
    hardwareCost: "~$900,000",
    licenseCost3yr: "~$341,000",
    licenseCost5yr: "~$524,000",
    totalLow: "~$1,241,000",
    totalHigh: "~$1,424,000",
    effort: "4 weeks",
    pros: [
      "Familiar hardware vendor and support model",
      "Minimal operational change required",
      "Proven platform for existing workloads",
    ],
    cons: [
      "Highest CapEx outlay of all on-premises options",
      "Does not resolve VMware licensing unless AHV migration is included",
      "Buying at peak memory pricing cycle",
    ],
  },
  {
    id: "option2",
    number: "02",
    title: "SuperMicro Hardware + AHV",
    subtitle: "New SuperMicro servers with in-place VMware to AHV migration",
    status: "viable",
    hardwareCost: "~$772,000",
    licenseCost3yr: "~$341,000",
    licenseCost5yr: "~$524,000",
    totalLow: "~$1,113,000",
    totalHigh: "~$1,296,000",
    effort: "4 weeks hardware + migration",
    pros: [
      "Lower hardware CapEx than HPE option",
      "Eliminates VMware licensing costs permanently",
      "Modernises hypervisor to AHV",
    ],
    cons: [
      "Significant CapEx during peak hardware pricing",
      "Requires concurrent hardware refresh and hypervisor migration",
      "Maintains full on-premises footprint",
    ],
  },
  {
    id: "option3",
    number: "03",
    title: "SuperMicro Hardware + Retain VMware",
    subtitle: "New SuperMicro servers with continued VMware subscription",
    status: "eliminated",
    hardwareCost: "~$772,000",
    licenseCost5yr: "~$524,000",
    additionalCost: "ESX 3yr ~$240,000",
    totalLow: "~$1,536,000",
    effort: "4 weeks",
    pros: [
      "Avoids hypervisor migration complexity",
    ],
    cons: [
      "Highest total cost of ownership across all options",
      "Locks organisation into Broadcom subscription model",
      "Directly contradicts strategic goal of moving off VMware",
      "Compounding costs: hardware + Nutanix + VMware",
    ],
  },
  {
    id: "option4",
    number: "04",
    title: "Nutanix NC2 on AWS",
    subtitle: "Cloud Clusters on AWS Bare Metal — full cloud migration",
    status: "caution",
    licenseCost3yr: "~$86,400 USD (Nutanix NCI)",
    additionalCost: "AWS Bare Metal 3yr ~$509,700 USD",
    totalLow: "~$596,100 USD (~$864k AUD) production",
    totalHigh: "~$653,056 USD (~$946k AUD) incl. DR",
    effort: "5–8 weeks (pilot to prod)",
    pros: [
      "Eliminates on-premises hardware lifecycle management",
      "Rapid migration via Nutanix Move (no app refactoring)",
      "OpEx model — no large upfront CapEx",
      "Cloud elasticity and native AWS service integration",
      "Familiar Nutanix/Prism management plane",
    ],
    cons: [
      "3-year AWS Bare Metal commitment at current peak pricing",
      "Enterprise backup redesign required for cloud",
      "IP remediation complexity across 80 VMs",
      "Stretched VLAN complexity (Layer 2 extension to AWS)",
      "Egress costs excluded from proposal — potentially significant",
      "Third-party licensing (SQL Server etc.) excluded from proposal",
      "Significant operational overhead for networking team",
    ],
  },
  {
    id: "option5",
    number: "05",
    title: "Sweat the Asset",
    subtitle: "Retain existing HPE hardware, migrate ESXi → AHV, defer major decision 12 months",
    status: "recommended",
    licenseCost3yr: "~$125,000 (1-year Nutanix)",
    additionalCost: "~$30,000 hardware maintenance",
    totalLow: "~$155,000",
    effort: "1 FTE × 6–8 weeks (internal)",
    pros: [
      "Lowest immediate financial outlay by far",
      "Eliminates VMware licensing risk immediately",
      "Defers CapEx/OpEx decision until market stabilises",
      "12 months to assess geopolitical and supply chain conditions",
      "Migration treated as BAU operational activity",
      "Preserves optionality for cloud or on-premises refresh",
    ],
    cons: [
      "Relies on aging HPE hardware — elevated failure risk",
      "Only delays the hardware refresh/cloud decision by 12 months",
      "Requires internal resource allocation (6–8 weeks FTE)",
    ],
    isRecommended: true,
  },
];

export interface RiskItem {
  title: string;
  severity: "high" | "medium" | "low";
  description: string;
}

export const currentStateRisks: RiskItem[] = [
  {
    title: "VMware ESXi 7.0 End of General Support",
    severity: "high",
    description: "VMware vSphere 7.0 reached End of General Support on October 2, 2025. No further security patches or official support are available. Running unsupported hypervisor software exposes the organisation to unpatched CVEs and potential compliance failures.",
  },
  {
    title: "HPE Hardware End of Life",
    severity: "high",
    description: "HPE servers purchased August 2021 are approaching end of their 5-year lifecycle. Currently on year-by-year support. Hardware is incompatible with VMware ESXi 9.0 (latest release), limiting upgrade paths.",
  },
  {
    title: "Nutanix License Expiry",
    severity: "high",
    description: "Nutanix software licenses expire August 2026. Without renewal or migration, the HCI platform loses software support and update entitlements.",
  },
  {
    title: "Broadcom Licensing Model Change",
    severity: "medium",
    description: "Broadcom has ended perpetual VMware license sales. Renewing VMware support now requires a subscription model at significantly elevated cost, making the status quo financially unsustainable.",
  },
];

export interface MarketFactor {
  title: string;
  stat: string;
  statLabel: string;
  description: string;
  source: string;
  sourceUrl: string;
  type: "warning" | "info";
}

export const marketFactors: MarketFactor[] = [
  {
    title: "Server Memory Price Surge",
    stat: "80–90%",
    statLabel: "QoQ price increase in Q1 2026",
    description: "Memory prices surged 80–90% quarter-on-quarter in Q1 2026, with 64GB RDIMM server DIMMs doubling from $450 to over $900. Prices are forecast to exceed $1,000 in Q2 2026. This is driven by AI workload demand pulling manufacturing capacity into High Bandwidth Memory (HBM), creating structural undersupply of standard server DRAM.",
    source: "Counterpoint Research, Feb 2026",
    sourceUrl: "https://counterpointresearch.com/en/insights/Memory-Prices-Surge-Up-to-90-From-Q4-2025",
    type: "warning",
  },
  {
    title: "HBM & NAND Structural Undersupply",
    stat: "40%+",
    statLabel: "Global MLC NAND capacity drop forecast 2026",
    description: "The memory super-cycle is structural, not cyclical. DRAM supply remains tight throughout 2026 as HBM growth consumes premium wafer output. Samsung ended MLC NAND production in March 2025 (final shipments June 2026). Analysts expect this tightness to persist into 2027. Procurement frameworks should prioritise supply security over cost minimisation.",
    source: "Neumonda / Memphis Electronic, Jan 2026",
    sourceUrl: "https://www.neumonda.com/memory-market-2026-scarcity-strategy-and-security-of-supply/",
    type: "warning",
  },
  {
    title: "US Tariffs on Data Centre Hardware",
    stat: "10–145%",
    statLabel: "Tariff range on technology imports",
    description: "US trade policy changes in 2025 introduced baseline 10% reciprocal tariffs on all imports, with China-specific tariffs reaching 145% at peak. These directly inflate the cost of structural steel, electrical components, and semiconductors used in server hardware. Supply chain fragmentation is causing procurement delays and equipment compatibility issues globally.",
    source: "DataSpan / Reuters, 2025",
    sourceUrl: "https://dataspan.com/blog/how-are-tariffs-impacting-data-center-technology/",
    type: "warning",
  },
  {
    title: "Cloud Pricing Exposure",
    stat: "3-year",
    statLabel: "AWS Bare Metal commitment required for proposal pricing",
    description: "The NC2 on AWS proposal pricing relies on a 3-year EC2 Savings Plan commitment. Locking in this commitment during a period of peak underlying hardware costs means the organisation risks paying inflated rates for the full term. Waiting 12 months allows cloud providers time to absorb or pass on normalised hardware costs.",
    source: "Internal analysis",
    sourceUrl: "#",
    type: "info",
  },
];

export interface NextStep {
  number: string;
  title: string;
  timeframe: string;
  owner: string;
  description: string;
  priority: "immediate" | "short-term" | "planning";
}

export interface TechHorizonItem {
  title: string;
  stat: string;
  statLabel: string;
  description: string;
  implication: string;
  source: string;
  sourceUrl: string;
  type: "opportunity" | "trend" | "watch";
}

export const techHorizonItems: TechHorizonItem[] = [
  {
    title: "Google TurboQuant: 6× KV Cache Compression",
    stat: "6×",
    statLabel: "KV cache memory reduction, zero accuracy loss",
    description: "Published at ICLR 2026 (March 24, 2026), Google's TurboQuant algorithm compresses the key-value cache of large language models by a factor of 6× with zero accuracy loss, and achieves up to 8× inference speedup on H100 GPUs. It requires no model retraining or fine-tuning. The algorithm works by combining PolarQuant (which converts vector coordinates into polar form, eliminating normalisation overhead) with QJL (a 1-bit residual error correction step). This directly reduces the HBM memory required to run frontier AI models at inference time.",
    implication: "If TurboQuant-class compression becomes standard across AI inference infrastructure, the structural demand pressure on HBM — which is the primary driver of the current server memory price surge — could ease significantly within 12–18 months. This is a direct argument for deferring hardware procurement: the memory price you pay today may not reflect the memory you actually need in 2027.",
    source: "Google Research Blog, March 2026",
    sourceUrl: "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/",
    type: "opportunity",
  },
  {
    title: "Small Language Models (SLMs): Enterprise AI Without the Memory Tax",
    stat: "1B–7B",
    statLabel: "Parameter range of leading enterprise SLMs in 2026",
    description: "The AI landscape is bifurcating. While frontier LLMs (GPT-4o, Gemini Ultra, Claude 3.5) require massive HBM-equipped accelerators, a parallel generation of Small Language Models — Microsoft Phi-4, Google Gemma 3, Meta Llama 3.2 — deliver 80–90% of the capability at 5–10% of the memory footprint. SLMs in the 1B–7B parameter range can run inference on standard server DRAM (not HBM), making them viable on existing enterprise infrastructure. Enterprise deployments are achieving 200–400% ROI within the first year, with deployment cycles measured in weeks.",
    implication: "NRMA's AI workloads — document processing, customer service automation, internal knowledge retrieval — are strong candidates for SLM deployment. This means the assumption that \"AI = massive GPU cluster = HBM demand\" may not apply to NRMA's specific workload profile. Waiting 12 months allows the SLM ecosystem to mature and gives the team time to validate which model tier is actually required.",
    source: "OpenSourceForU / LinkedIn, April 2026",
    sourceUrl: "https://www.opensourceforu.com/2026/04/the-quiet-revolution-how-small-language-models-are-redefining-enterprise-ai-strategy/",
    type: "trend",
  },
  {
    title: "Agentic AI & Token Compression: The Efficiency Paradox",
    stat: "60–80%",
    statLabel: "Token cost reduction achievable via compression in agent loops",
    description: "The agentic AI economy — where AI models autonomously chain tools, APIs, and sub-agents to complete complex tasks — is driving a significant increase in token volume. However, this is being met by a parallel wave of token compression techniques. Context window compression, tool output summarisation, and KV cache eviction strategies are achieving 60–80% reductions in token costs in production agent loops. Techniques such as DOM sanitisation (85% HTML compression), structured output caching, and prompt distillation are becoming standard practice. The net effect is that AI traffic volume rises, but memory and compute cost per unit of useful work falls.",
    implication: "For NRMA's infrastructure planning, this means AI-driven workload growth should not be modelled as a linear increase in raw compute and memory demand. The efficiency curve is steep. Infrastructure sized for today's AI token economics will likely be over-provisioned for 2027's workloads. This further supports deferring a large infrastructure commitment until the efficiency curve stabilises.",
    source: "Towards Data Science / arXiv, April 2026",
    sourceUrl: "https://towardsdatascience.com/agentic-ai-how-to-save-on-tokens/",
    type: "trend",
  },
  {
    title: "The Convergence Signal: When Efficiency Meets Demand",
    stat: "2027",
    statLabel: "Analyst consensus for HBM supply normalisation",
    description: "The current memory price spike is the intersection of two curves: AI demand rising faster than HBM supply. But both curves are moving. On the demand side, TurboQuant-class compression, SLM adoption, and token efficiency techniques are reducing memory per inference unit. On the supply side, Samsung, SK Hynix, and Micron are all expanding HBM capacity — with meaningful new supply expected in H2 2026 and H1 2027. The structural tightness is real but time-bounded. Analyst consensus from TrendForce and Counterpoint Research points to supply normalisation in 2027.",
    implication: "The 12-month bridge of Option 5 is not just a cost-deferral play — it is timed to land NRMA's procurement decision at the point where both the technology efficiency curve and the supply normalisation curve converge. This is the optimal procurement window.",
    source: "TrendForce / Counterpoint Research, Jan–Feb 2026",
    sourceUrl: "https://www.trendforce.com/insights/memory-wall",
    type: "watch",
  },
];

export const nextSteps: NextStep[] = [
  {
    number: "01",
    title: "Approve Option 5 Budget",
    timeframe: "Immediate",
    owner: "Finance / CTO",
    description: "Approve the ~$155,000 budget for 1-year Nutanix license renewal (~$125k) and HPE hardware maintenance (~$30k). This is the lowest-risk, lowest-cost action to stabilise the environment.",
    priority: "immediate",
  },
  {
    number: "02",
    title: "Allocate Internal FTE for ESXi → AHV Migration",
    timeframe: "Within 2 weeks",
    owner: "Infrastructure Team Lead",
    description: "Identify and formally allocate one FTE for 6–8 weeks to plan and execute the in-place VMware ESXi to Nutanix AHV migration. This is treated as a BAU operational activity and eliminates the VMware licensing risk.",
    priority: "immediate",
  },
  {
    number: "03",
    title: "Execute ESXi to AHV Migration",
    timeframe: "Weeks 3–8",
    owner: "Infrastructure Team",
    description: "Migrate all virtual machines from VMware ESXi 7.0 to Nutanix AHV using Nutanix Move. Validate workload performance post-migration. This removes the End of Support exposure and positions the environment for a future cloud migration.",
    priority: "short-term",
  },
  {
    number: "04",
    title: "NC2 on AWS Operational Readiness Assessment",
    timeframe: "Months 2–4",
    owner: "Network & Infrastructure Architects",
    description: "Use the 12-month window to formally assess the operational overhead of a future NC2 migration. Specifically: design a cloud-native backup strategy, evaluate IP remediation vs. stretched VLAN feasibility, and conduct a network traffic analysis to forecast egress costs.",
    priority: "planning",
  },
  {
    number: "05",
    title: "Hardware Market Review",
    timeframe: "Month 9–10",
    owner: "Procurement / CTO",
    description: "Reassess server hardware pricing and supply chain conditions. If memory prices have normalised and tariff impacts are clearer, proceed with a hardware refresh (Option 2) or cloud migration (Option 4) procurement process.",
    priority: "planning",
  },
  {
    number: "06",
    title: "Strategic Infrastructure Decision",
    timeframe: "Month 11–12",
    owner: "CTO / Executive Team",
    description: "Based on the operational readiness assessment and market review, make the final strategic decision: on-premises hardware refresh (Option 2) or cloud migration to NC2 on AWS (Option 4). Initiate procurement with 12 months of market intelligence.",
    priority: "planning",
  },
];
