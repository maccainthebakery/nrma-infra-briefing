// ============================================================
// NRMA EXECUTIVE BROADSHEET — Section Header Component
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
      <div className="flex items-start gap-5">
        <span
          className="text-5xl font-black leading-none text-border flex-shrink-0 mt-1 select-none"
          style={{ fontFamily: 'Fraunces, serif' }}
        >
          {number}
        </span>
        <div className="flex-1 pt-1 border-t-2 border-[oklch(0.38_0.09_196)]">
          {tag && (
            <span className="text-[10px] uppercase tracking-widest text-[oklch(0.38_0.09_196)] font-semibold mb-1 block">
              {tag}
            </span>
          )}
          <h2
            className="text-2xl md:text-3xl font-semibold text-foreground leading-tight"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
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
