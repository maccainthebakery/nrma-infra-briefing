# NRMA Infrastructure Advisory — Design Brainstorm

## Context
Executive-facing briefing site for NRMA's VMware EOL migration decision. Audience: C-suite and senior IT leadership. Purpose: non-linear navigation through a complex infrastructure strategy conversation, replacing a linear PowerPoint.

---

<response>
<text>

## Idea A — "Corporate Modernism" (Bauhaus-meets-Enterprise)

**Design Movement:** Bauhaus Corporate — structured, authoritative, data-forward

**Core Principles:**
- Asymmetric grid layouts with deliberate tension between text columns and data panels
- Strict typographic hierarchy using weight contrast (heavy display vs. light body)
- Information density balanced by generous gutters
- Every interactive element has a clear affordance

**Color Philosophy:**
- Deep navy (#0A1628) as the primary canvas — conveys trust, authority, and depth
- NRMA red (#E8002D) as the sole accent — used sparingly for critical callouts and CTAs
- Warm white (#F7F5F2) for card surfaces — avoids clinical sterility
- Slate grey (#64748B) for secondary text and metadata

**Layout Paradigm:**
- Left-anchored persistent sidebar for section navigation (not a top nav)
- Main content area uses a two-column asymmetric split: 60% content / 40% data panel
- Section filters appear as horizontal pill tabs above the content area
- Mobile: sidebar collapses to a bottom sheet drawer

**Signature Elements:**
- Thin horizontal rule dividers with section numbering (01, 02, 03...)
- Data cards with left-border accent in NRMA red for key figures
- Subtle diagonal grid texture on hero/header areas

**Interaction Philosophy:**
- Smooth section transitions via framer-motion fade+slide
- Active nav item has a left-border indicator that animates on selection
- Hover states on cards lift with a subtle shadow increase

**Animation:**
- Page load: staggered fade-in of sidebar items (50ms delay each)
- Section transitions: 300ms ease-out slide from right
- Card hover: translateY(-2px) + box-shadow deepening

**Typography System:**
- Display: "Playfair Display" (serif) — for section headings, conveys gravitas
- Body: "DM Sans" (sans-serif) — clean, modern, highly readable at small sizes
- Mono: system monospace — for cost figures and technical specs

</text>
<probability>0.08</probability>
</response>

<response>
<text>

## Idea B — "Intelligence Dashboard" (Dark Command Centre)

**Design Movement:** Dark Enterprise Dashboard — analytical, immersive, data-centric

**Core Principles:**
- Dark background creates focus and reduces eye strain in boardroom settings
- Data visualisations are first-class citizens, not afterthoughts
- Navigation is spatial — users feel they are "moving through" the briefing
- Colour is used functionally: green = positive, amber = caution, red = risk

**Color Philosophy:**
- Near-black (#0D1117) base — GitHub-inspired dark, not harsh pure black
- Electric blue (#2563EB) as primary accent — modern, technical
- Amber (#F59E0B) for warnings and cost escalation callouts
- Emerald (#10B981) for recommended options
- Subtle blue-grey (#1E293B) for card surfaces

**Layout Paradigm:**
- Top navigation bar with section pills that glow on active state
- Full-width sections that snap-scroll into view
- Each section has a "data panel" sidebar that floats on desktop
- Mobile: stacked single-column with sticky top nav

**Signature Elements:**
- Glowing border cards for key metrics (CSS box-shadow with colour)
- Animated number counters for cost figures
- Subtle grid dot pattern background on dark sections

**Interaction Philosophy:**
- Section-aware scroll spy highlights active nav item
- Filter pills animate with a sliding background indicator
- Cost comparison table rows highlight on hover

**Animation:**
- Scroll-triggered entrance animations for each section
- Number counters animate from 0 to final value on section entry
- Nav active indicator slides smoothly between items

**Typography System:**
- Display: "Space Grotesk" — geometric, technical, modern
- Body: "Inter" — industry standard for dashboards
- Mono: "JetBrains Mono" — for all numerical data

</text>
<probability>0.07</probability>
</response>

<response>
<text>

## Idea C — "Executive Broadsheet" (Editorial Finance)

**Design Movement:** Financial Times / Bloomberg editorial — authoritative, editorial, premium

**Core Principles:**
- Content-first layout inspired by financial reporting
- Strong typographic hierarchy does the heavy lifting — minimal decoration
- Sidebar navigation mimics a financial report's table of contents
- Data tables and cost comparisons are the visual centrepiece

**Color Philosophy:**
- Off-white (#FAFAF8) background — warm, premium, paper-like
- Charcoal (#1C1C1E) for primary text — not pure black, softer
- Deep teal (#0F4C5C) as accent — distinctive, not overused in enterprise
- Pale amber (#FEF3C7) for highlighted/recommended sections
- Light grey (#E5E7EB) for borders and dividers

**Layout Paradigm:**
- Left sidebar (240px) with collapsible section tree — always visible on desktop
- Right content area scrolls independently
- Section filters appear as a sticky sub-header within the content area
- Mobile: sidebar becomes a hamburger drawer from the left

**Signature Elements:**
- Pull-quote callout boxes with left accent bar for key insights
- Cost comparison table with sticky header and row highlighting
- Section numbering in large, light-weight numerals as background decoration

**Interaction Philosophy:**
- Clicking a nav item smoothly scrolls to and highlights the target section
- Filter pills show/hide sections with a height-collapse animation
- Recommended option card has a distinct "stamp" badge

**Animation:**
- Sidebar items fade in on load with stagger
- Section scroll: smooth scroll with 80px offset for sticky header
- Filter transitions: 200ms height collapse/expand

**Typography System:**
- Display: "Fraunces" (variable serif) — editorial, distinctive, not generic
- Body: "Libre Franklin" — clean, neutral, excellent readability
- Data: "IBM Plex Mono" — for all cost figures and technical specs

</text>
<probability>0.09</probability>
</response>

---

## Selected Approach: **Idea C — "Executive Broadsheet"**

This approach best fits the executive audience and the nature of the content (a strategic advisory document). The editorial, content-first layout conveys authority without being flashy. The sidebar navigation enables the non-linear browsing behaviour requested. The teal accent colour differentiates from generic enterprise blue while remaining professional.
