// ============================================================
// NRMA EXECUTIVE BROADSHEET — Sidebar Navigation
// Dark sidebar with section tree, NRMA branding, filter pills
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, FileText } from "lucide-react";
import { navItems, filterTags, type SectionTag } from "@/lib/briefingData";

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
      {/* Logo / Brand */}
      <div className="px-6 pt-8 pb-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-8 h-8 rounded bg-[oklch(0.52_0.22_25)] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs tracking-wider" style={{ fontFamily: 'Fraunces, serif' }}>N</span>
          </div>
          <div>
            <div className="text-sidebar-foreground font-semibold text-sm tracking-wide" style={{ fontFamily: 'Fraunces, serif' }}>
              NRMA
            </div>
            <div className="text-[oklch(0.6_0.02_260)] text-[10px] uppercase tracking-widest">
              Infrastructure Advisory
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 text-[oklch(0.55_0.04_196)] text-[11px]">
          <FileText size={11} />
          <span>April 2026 — Confidential</span>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="px-4 py-4 border-b border-sidebar-border">
        <div className="text-[oklch(0.5_0.02_260)] text-[10px] uppercase tracking-widest mb-3 px-2">
          Jump to topic
        </div>
        <div className="flex flex-wrap gap-1.5">
          {filterTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => onFilterChange(tag.id)}
              className={`text-[10px] px-2.5 py-1 rounded-full border transition-all duration-200 font-medium tracking-wide ${
                activeFilter === tag.id
                  ? "bg-[oklch(0.38_0.09_196)] border-[oklch(0.38_0.09_196)] text-white"
                  : "bg-transparent border-[oklch(0.35_0.015_260)] text-[oklch(0.65_0.02_260)] hover:border-[oklch(0.38_0.09_196)] hover:text-[oklch(0.75_0.06_196)]"
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
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
                  className={`w-full text-left px-3 py-3 rounded-md mb-1 flex items-center gap-3 group transition-all duration-200 ${
                    isActive
                      ? "bg-[oklch(0.25_0.05_196)] border-l-2 border-[oklch(0.55_0.09_196)]"
                      : "hover:bg-[oklch(0.22_0.01_260)]"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono flex-shrink-0 transition-colors ${
                      isActive
                        ? "text-[oklch(0.65_0.09_196)]"
                        : "text-[oklch(0.45_0.02_260)] group-hover:text-[oklch(0.55_0.04_196)]"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span
                    className={`text-[13px] leading-tight transition-colors flex-1 ${
                      isActive
                        ? "text-[oklch(0.92_0.04_196)] font-medium"
                        : "text-[oklch(0.72_0.01_260)] group-hover:text-[oklch(0.88_0.01_260)]"
                    }`}
                    style={{ fontFamily: 'Libre Franklin, sans-serif' }}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <ChevronRight
                      size={12}
                      className="text-[oklch(0.55_0.09_196)] flex-shrink-0"
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-sidebar-border">
        <p className="text-[oklch(0.4_0.01_260)] text-[10px] leading-relaxed">
          Prepared by Manus AI · April 30, 2026
          <br />
          For internal executive use only.
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
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar border-b border-sidebar-border px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded bg-[oklch(0.52_0.22_25)] flex items-center justify-center">
            <span className="text-white font-bold text-xs" style={{ fontFamily: 'Fraunces, serif' }}>N</span>
          </div>
          <div>
            <div className="text-sidebar-foreground font-semibold text-sm" style={{ fontFamily: 'Fraunces, serif' }}>NRMA</div>
            <div className="text-[oklch(0.5_0.04_196)] text-[9px] uppercase tracking-widest">Infrastructure Advisory</div>
          </div>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-sidebar-foreground p-1.5 rounded hover:bg-[oklch(0.25_0.01_260)] transition-colors"
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
                  className="text-sidebar-foreground p-1.5 rounded hover:bg-[oklch(0.25_0.01_260)]"
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
