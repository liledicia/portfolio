import { motion } from "framer-motion";
import type { Branch } from "../data/branches";
import { useLang } from "../i18n/context";

interface Props {
  branch: Branch;
  x: number;
  y: number;
  delay: number;
  onClick: () => void;
  dimmed: boolean;
  active: boolean;
}

export function BranchNode({ branch, x, y, delay, onClick, dimmed, active }: Props) {
  const { lang } = useLang();
  const label = lang === "en" ? branch.labelEn : branch.labelZh;
  const size = 100;

  return (
    <motion.button
      onClick={onClick}
      className="absolute pointer-events-auto group"
      style={{
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: dimmed ? 0.85 : 1,
        opacity: dimmed ? 0.25 : 1,
      }}
      transition={{
        scale: { type: "spring", stiffness: 180, damping: 18, delay },
        opacity: { duration: 0.4, delay },
      }}
      whileHover={{ scale: dimmed ? 0.85 : 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity"
        style={{ background: branch.color }}
      />
      {/* Node */}
      <div
        className="relative w-full h-full rounded-full glass-strong flex flex-col items-center justify-center transition-all"
        style={{
          boxShadow: active
            ? `0 0 0 3px ${branch.color}, 0 20px 50px -10px ${branch.color}55`
            : undefined,
        }}
      >
        <div
          className="text-2xl mb-0.5"
          style={{ color: branch.color }}
        >
          {branch.icon}
        </div>
        <div className="text-[11px] font-semibold text-slate-700 tracking-wide text-center px-1 leading-tight">
          {label}
        </div>
      </div>
    </motion.button>
  );
}
