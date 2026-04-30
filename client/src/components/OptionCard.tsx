// ============================================================
// NRMA EXECUTIVE BROADSHEET — Option Card Component
// ============================================================

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertTriangle, Star } from "lucide-react";
import type { OptionData } from "@/lib/briefingData";

interface OptionCardProps {
  option: OptionData;
  index: number;
}

const statusConfig = {
  recommended: {
    border: "border-[oklch(0.65_0.15_155)]",
    bg: "bg-[oklch(0.97_0.03_155)]",
    badge: "badge-recommended",
    badgeText: "Recommended",
    icon: <Star size={14} className="text-[oklch(0.55_0.15_155)]" />,
    headerBg: "bg-[oklch(0.94_0.04_155)]",
  },
  viable: {
    border: "border-border",
    bg: "bg-card",
    badge: "",
    badgeText: "",
    icon: null,
    headerBg: "bg-muted/50",
  },
  caution: {
    border: "border-[oklch(0.75_0.15_70)]",
    bg: "bg-card",
    badge: "badge-caution",
    badgeText: "Requires Assessment",
    icon: <AlertTriangle size={14} className="text-[oklch(0.65_0.15_70)]" />,
    headerBg: "bg-[oklch(0.97_0.03_80)]",
  },
  eliminated: {
    border: "border-[oklch(0.52_0.22_25)]/40",
    bg: "bg-card opacity-80",
    badge: "badge-risk",
    badgeText: "Not Recommended",
    icon: <XCircle size={14} className="text-[oklch(0.52_0.22_25)]" />,
    headerBg: "bg-[oklch(0.97_0.02_25)]",
  },
};

export default function OptionCard({ option, index }: OptionCardProps) {
  const config = statusConfig[option.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.4, ease: "easeOut" }}
      className={`rounded-lg border-2 ${config.border} ${option.status === 'recommended' ? 'shadow-lg shadow-[oklch(0.65_0.15_155)]/10' : 'shadow-sm'} overflow-hidden`}
    >
      {/* Card Header */}
      <div className={`${config.headerBg} px-5 py-4 border-b border-border`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className="text-2xl font-black text-muted-foreground/30 leading-none"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              {option.number}
            </span>
            <div>
              <h3
                className="text-base font-semibold text-foreground leading-tight"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                {option.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">{option.subtitle}</p>
            </div>
          </div>
          {config.badgeText && (
            <div className="flex items-center gap-1.5 flex-shrink-0">
              {config.icon}
              <span className={config.badge}>{config.badgeText}</span>
            </div>
          )}
        </div>
      </div>

      {/* Cost Summary */}
      <div className="px-5 py-4 border-b border-border bg-white/50">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {option.hardwareCost && (
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Hardware</div>
              <div className="cost-figure text-sm text-foreground">{option.hardwareCost}</div>
            </div>
          )}
          {option.licenseCost3yr && (
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">License (3yr)</div>
              <div className="cost-figure text-sm text-foreground">{option.licenseCost3yr}</div>
            </div>
          )}
          {option.licenseCost5yr && (
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">License (5yr)</div>
              <div className="cost-figure text-sm text-foreground">{option.licenseCost5yr}</div>
            </div>
          )}
          {option.additionalCost && (
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Additional</div>
              <div className="cost-figure text-sm text-foreground">{option.additionalCost}</div>
            </div>
          )}
          <div className="col-span-2 md:col-span-1">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
              Total Estimate
            </div>
            <div
              className={`cost-figure text-base font-bold ${
                option.status === "recommended"
                  ? "text-[oklch(0.45_0.15_155)]"
                  : option.status === "eliminated"
                  ? "text-[oklch(0.52_0.22_25)]"
                  : "text-foreground"
              }`}
            >
              {option.totalLow}
              {option.totalHigh && (
                <span className="text-xs font-normal text-muted-foreground ml-1">
                  – {option.totalHigh}
                </span>
              )}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Effort</div>
            <div className="cost-figure text-sm text-foreground">{option.effort}</div>
          </div>
        </div>
      </div>

      {/* Pros & Cons */}
      <div className="px-5 py-4 grid md:grid-cols-2 gap-4">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <CheckCircle2 size={13} className="text-[oklch(0.55_0.15_155)]" />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Advantages</span>
          </div>
          <ul className="space-y-1.5">
            {option.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-foreground/80 leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-[oklch(0.55_0.15_155)] mt-1.5 flex-shrink-0" />
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <XCircle size={13} className="text-[oklch(0.52_0.22_25)]" />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Considerations</span>
          </div>
          <ul className="space-y-1.5">
            {option.cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-foreground/80 leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-[oklch(0.52_0.22_25)] mt-1.5 flex-shrink-0" />
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
