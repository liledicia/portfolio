import { motion } from "framer-motion";
import { useLang } from "../i18n/context";
import { profile } from "../data/content";

interface Props {
  size?: number;
  dimmed?: boolean;
}

export function CenterNode({ size = 220, dimmed = false }: Props) {
  const { lang } = useLang();
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center pointer-events-auto"
      style={{ width: size, height: size }}
      animate={{ opacity: dimmed ? 0.25 : 1, scale: dimmed ? 0.95 : 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Outer glow rings */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-200 via-sky-300 to-sky-400 opacity-40 blur-2xl animate-pulse-soft" />
      <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-white via-sky-100 to-sky-200 opacity-60 blur-xl" />

      {/* Rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #7dd3fc, #38bdf8, #0ea5e9, #38bdf8, #7dd3fc)",
          padding: 3,
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Avatar */}
      <motion.div
        className="relative rounded-full overflow-hidden ring-4 ring-white/80 shadow-2xl"
        style={{ width: size * 0.75, height: size * 0.75 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img
          src="/assets/avatar.jpg"
          alt={profile.nameEn}
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 28%" }}
        />
      </motion.div>

      {/* Name + tagline below */}
      <div className="absolute top-full mt-4 text-center w-[280px] left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="font-display text-2xl font-semibold gradient-text leading-tight">
          {lang === "en" ? profile.nameEn : profile.nameZh}
        </div>
        <div className="text-xs text-sky-600/70 mt-0.5 tracking-wide">
          {lang === "en" ? `aka ${profile.alias}` : `Lédicia`}
        </div>
        <div className="text-[11px] text-slate-500 mt-1.5 leading-snug">
          {lang === "en" ? profile.taglineEn : profile.taglineZh}
        </div>
      </div>
    </motion.div>
  );
}
