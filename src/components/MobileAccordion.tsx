import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRANCHES } from "../data/branches";
import { useLang } from "../i18n/context";
import { profile } from "../data/content";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Languages } from "./sections/Languages";
import { Travel } from "./sections/Travel";
import { Volunteer } from "./sections/Volunteer";

const SECTION_MAP: Record<string, React.ComponentType> = {
  about: About,
  experience: Experience,
  projects: Projects,
  skills: Skills,
  languages: Languages,
  travel: Travel,
  volunteer: Volunteer,
};

export function MobileAccordion() {
  const { lang } = useLang();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="px-4 pt-20 pb-16 max-w-xl mx-auto">
      {/* Center header */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-200 to-sky-400 opacity-50 blur-2xl animate-pulse-soft" />
          <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-white/80 shadow-xl">
            <img
              src="/assets/avatar.jpg"
              alt={profile.nameEn}
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 28%" }}
            />
          </div>
        </div>
        <h1 className="font-display text-3xl font-semibold gradient-text mt-4">
          {lang === "en" ? profile.nameEn : profile.nameZh}
        </h1>
        <div className="text-xs text-sky-600/70 mt-0.5">
          {lang === "en" ? `aka ${profile.alias}` : `Lédicia`}
        </div>
        <p className="text-sm text-slate-500 mt-2 max-w-xs">
          {lang === "en" ? profile.taglineEn : profile.taglineZh}
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {BRANCHES.map((b) => {
          const isOpen = openId === b.id;
          const Component = SECTION_MAP[b.id];
          return (
            <div
              key={b.id}
              className="rounded-2xl glass-strong overflow-hidden"
              style={{ boxShadow: isOpen ? `0 12px 40px -10px ${b.color}40` : undefined }}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : b.id)}
                className="w-full px-4 py-3 flex items-center gap-3 text-left"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${b.color}30, ${b.color}10)`,
                    color: b.color,
                  }}
                >
                  {b.icon}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-800 text-sm">
                    {lang === "en" ? b.labelEn : b.labelZh}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {lang === "en" ? b.labelZh : b.labelEn}
                  </div>
                </div>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  className="text-sky-500 text-sm"
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-1 border-t border-sky-100">
                      <Component />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
