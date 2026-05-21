import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BRANCHES } from "../data/branches";
import { CenterNode } from "./CenterNode";
import { BranchNode } from "./BranchNode";
import { useLang } from "../i18n/context";
import { profile } from "../data/content";

interface Point { x: number; y: number; }
function polar(cx: number, cy: number, r: number, angleDeg: number): Point {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function HeroTree() {
  const { lang } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 900, h: 700 });

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setSize({ w: rect.width, h: rect.height });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const cx = size.w / 2;
  const cy = size.h / 2;
  const radius = Math.min(size.w, size.h) * 0.35;
  const positions = BRANCHES.map((b) => polar(cx, cy, radius, b.angle));

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      <svg
        className="absolute inset-0 pointer-events-none"
        width={size.w}
        height={size.h}
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="centerGlow">
            <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={cx} cy={cy} r={radius * 1.15} fill="url(#centerGlow)" />

        {BRANCHES.map((b, i) => {
          const p = positions[i];
          const mx = (cx + p.x) / 2;
          const my = (cy + p.y) / 2;
          const dx = p.x - cx;
          const dy = p.y - cy;
          const len = Math.hypot(dx, dy);
          const perp = { x: -dy / len, y: dx / len };
          const cpx = mx + perp.x * 22;
          const cpy = my + perp.y * 22;
          const path = `M ${cx} ${cy} Q ${cpx} ${cpy} ${p.x} ${p.y}`;

          return (
            <motion.path
              key={b.id}
              d={path}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth={2}
              strokeLinecap="round"
              className="flow-line"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { duration: 1.2, delay: 0.2 + i * 0.1, ease: "easeOut" },
                opacity: { duration: 0.5, delay: 0.2 + i * 0.1 },
              }}
            />
          );
        })}
      </svg>

      <div className="absolute" style={{ left: cx, top: cy, transform: "translate(-50%, -50%)" }}>
        <CenterNode size={240} />
      </div>

      {BRANCHES.map((b, i) => {
        const p = positions[i];
        return (
          <BranchNode
            key={b.id}
            branch={b}
            x={p.x}
            y={p.y}
            delay={0.5 + i * 0.1}
            onClick={() => scrollToSection(b.id)}
            dimmed={false}
            active={false}
          />
        );
      })}

      {/* Quick contact row below name */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10"
      >
        <a
          href={`mailto:${profile.email}`}
          className="glass px-3 py-1.5 rounded-full text-xs text-sky-700 font-medium hover:scale-105 hover:text-sky-600 transition-all flex items-center gap-1.5"
        >
          ✉ {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="glass px-3 py-1.5 rounded-full text-xs text-sky-700 font-medium hover:scale-105 hover:text-sky-600 transition-all flex items-center gap-1.5"
        >
          ◐ GitHub
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.6, duration: 0.6 },
          y: { delay: 1.6, duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sky-500 text-xl"
        aria-label="Scroll"
      >
        {lang === "en" ? "↓ scroll" : "↓ 向下滑动"}
      </motion.button>
    </section>
  );
}
