// ============================================================
// NRMA INFRASTRUCTURE ADVISORY — Sidebar Navigation
// NRMA Brand Theme: Deep navy sidebar, blue accents, white text
// Source: NRMA Group Engineering
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { navItems, filterTags, type SectionTag } from "@/lib/briefingData";

const NRMA_LOGO = "/manus-storage/nrma-logo_89638710.jpg";

interface SidebarProps {
  activeSection: string;
  activeFilter: SectionTag | "all";
  onSectionClick: (id: string) => void;
  onFilterChange: (filter: SectionTag | "all") => void;
}

export default function Sidebar({
  activeSection,
  activeFilter,
  onSectionClick,
  onFilterChange,
}: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const filteredNav =
    activeFilter === "all"
      ? navItems
      : navItems.filter((item) => item.tag === activeFilter);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* NRMA Logo & Brand Header */}
      <div className="px-5 pt-6 pb-5 border-b border-[oklch(0.30_0.10_258)]">
        {/* NRMA Logo */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded bg-white flex items-center justify-center flex-shrink-0 overflow-hidden p-1">
            <img
              src={NRMA_LOGO}
              alt="NRMA Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="text-white font-bold text-base tracking-wide leading-tight">
              NRMA
            </div>
            <div className="text-[oklch(0.75_0.08_258)] text-[10px] font-medium leading-tight">
              Group Engineering
            </div>
          </div>
        </div>
        {/* Document title */}
        <div className="bg-[oklch(0.30_0.12_258)] rounded px-3 py-2">
          <div className="text-[oklch(0.85_0.06_258)] text-[11px] font-semibold leading-tight">
            Infrastructure Advisory
          </div>
          <div className="text-[oklch(0.60_0.06_258)] text-[10px] mt-0.5">
            April 2026 · Confidential
          </div>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="px-4 py-4 border-b border-[oklch(0.30_0.10_258)]">
        <div className="text-[oklch(0.55_0.06_258)] text-[10px] uppercase tracking-widest mb-2.5 font-semibold">
          Jump to topic
        </div>
        <div className="flex flex-wrap gap-1.5">
          {filterTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => onFilterChange(tag.id)}
              className={`text-[10px] px-2.5 py-1 rounded-full border transition-all duration-200 font-semibold tracking-wide ${
                activeFilter === tag.id
                  ? "bg-[oklch(0.52_0.18_258)] border-[oklch(0.52_0.18_258)] text-white"
                  : "bg-transparent border-[oklch(0.38_0.10_258)] text-[oklch(0.65_0.06_258)] hover:border-[oklch(0.52_0.18_258)] hover:text-[oklch(0.80_0.08_258)]"
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto py-3 px-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            {filteredNav.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.2 }}
                  onClick={() => {
                    onSectionClick(item.id);
                    setMobileOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-md mb-0.5 flex items-center gap-3 group transition-all duration-200 ${
                    isActive
                      ? "bg-[oklch(0.38_0.18_258)] border-l-2 border-[oklch(0.65_0.15_258)]"
                      : "hover:bg-[oklch(0.28_0.10_258)]"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono flex-shrink-0 transition-colors ${
                      isActive
                        ? "text-[oklch(0.80_0.10_258)]"
                        : "text-[oklch(0.50_0.06_258)] group-hover:text-[oklch(0.65_0.08_258)]"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`text-[13px] leading-tight transition-colors flex-1 font-medium ${
                      isActive
                        ? "text-white"
                        : "text-[oklch(0.75_0.04_258)] group-hover:text-[oklch(0.90_0.02_258)]"
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <ChevronRight
                      size={12}
                      className="text-[oklch(0.75_0.10_258)] flex-shrink-0"
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-[oklch(0.30_0.10_258)]">
        <p className="text-[oklch(0.45_0.04_258)] text-[10px] leading-relaxed">
          NRMA Group Engineering
          <br />
          Prepared April 30, 2026
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 xl:w-72 flex-shrink-0 bg-sidebar h-screen sticky top-0 overflow-hidden">
        <SidebarContent />
      </aside>

      {/* Mobile Header Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar border-b border-[oklch(0.30_0.10_258)] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-white flex items-center justify-center overflow-hidden p-0.5">
            <img src={NRMA_LOGO} alt="NRMA" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="text-white font-bold text-sm">NRMA</div>
            <div className="text-[oklch(0.60_0.06_258)] text-[9px] font-medium">Group Engineering</div>
          </div>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white p-1.5 rounded hover:bg-[oklch(0.30_0.10_258)] transition-colors"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-black/50"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="lg:hidden fixed top-0 left-0 bottom-0 z-50 w-72 bg-sidebar overflow-y-auto"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white p-1.5 rounded hover:bg-[oklch(0.30_0.10_258)]"
                >
                  <X size={20} />
                </button>
              </div>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
