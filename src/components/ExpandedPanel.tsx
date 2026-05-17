import { motion, AnimatePresence } from "framer-motion";
import type { Branch } from "../data/branches";
import { useLang } from "../i18n/context";
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

interface Props {
  branch: Branch | null;
  onClose: () => void;
}

export function ExpandedPanel({ branch, onClose }: Props) {
  const { lang } = useLang();
  const Component = branch ? SECTION_MAP[branch.id] : null;

  return (
    <AnimatePresence>
      {branch && Component && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-8"
        >
          {/* Backdrop blur */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-md" />

          {/* Panel */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[85vh] glass-strong rounded-3xl overflow-hidden flex flex-col"
            style={{
              boxShadow: `0 30px 80px -20px ${branch.color}40, 0 0 0 1px ${branch.color}20`,
            }}
          >
            {/* Header */}
            <div
              className="relative px-6 sm:px-8 pt-6 pb-4 border-b border-sky-200/40"
              style={{
                background: `linear-gradient(135deg, ${branch.color}15 0%, transparent 70%)`,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xl shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${branch.color}30, ${branch.color}10)`,
                    color: branch.color,
                    boxShadow: `0 4px 12px -2px ${branch.color}40`,
                  }}
                >
                  {branch.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-display font-semibold gradient-text leading-tight">
                    {lang === "en" ? branch.labelEn : branch.labelZh}
                  </h2>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {lang === "en" ? branch.labelZh : branch.labelEn}
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/70 hover:bg-white text-slate-500 hover:text-slate-700 shadow-sm flex items-center justify-center transition-all"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6">
              <Component />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
