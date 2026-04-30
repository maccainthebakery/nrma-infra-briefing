// ============================================================
// NRMA INFRASTRUCTURE ADVISORY — Section Header Component
// NRMA Brand Theme: Blue accent bar, Inter font
// ============================================================

import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  tag?: string;
}

export default function SectionHeader({ number, title, subtitle, tag }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-8 relative"
    >
      <div className="flex items-start gap-4">
        <span
          className="text-4xl font-black leading-none text-[oklch(0.88_0.03_258)] flex-shrink-0 mt-1 select-none tabular-nums"
        >
          {number}
        </span>
        <div className="flex-1 pt-1 border-t-2 border-[oklch(0.38_0.18_258)]">
          {tag && (
            <span className="text-[10px] uppercase tracking-widest text-[oklch(0.38_0.18_258)] font-bold mb-1 block">
              {tag}
            </span>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.18_0.10_258)] leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1.5 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
