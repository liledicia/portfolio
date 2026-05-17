import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { BRANCHES, type Branch } from "../data/branches";
import { CenterNode } from "./CenterNode";
import { BranchNode } from "./BranchNode";
import { ExpandedPanel } from "./ExpandedPanel";
import { useLang } from "../i18n/context";
import { ui } from "../data/content";

interface Point {
  x: number;
  y: number;
}

function polar(cx: number, cy: number, r: number, angleDeg: number): Point {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function RadialTree() {
  const { lang } = useLang();
  const labels = ui[lang];
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 900, h: 700 });
  const [active, setActive] = useState<Branch | null>(null);

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

  // Center of stage
  const cx = size.w / 2;
  const cy = size.h / 2;
  // Branch radius scales with viewport
  const radius = Math.min(size.w, size.h) * 0.38;

  const positions = BRANCHES.map((b) => polar(cx, cy, radius, b.angle));

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[min(90vh,820px)] max-h-[820px] flex items-center justify-center"
    >
      {/* SVG layer for connection lines */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width={size.w}
        height={size.h}
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="centerGlow">
            <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft glow under center */}
        <circle cx={cx} cy={cy} r={radius * 1.1} fill="url(#centerGlow)" />

        {/* Connection lines */}
        {BRANCHES.map((b, i) => {
          const p = positions[i];
          const isActive = active?.id === b.id;
          const dimmed = active && !isActive;
          // Slightly curved path: control point pulled toward center
          const mx = (cx + p.x) / 2;
          const my = (cy + p.y) / 2;
          // perpendicular offset for slight curve
          const dx = p.x - cx;
          const dy = p.y - cy;
          const len = Math.hypot(dx, dy);
          const perp = { x: -dy / len, y: dx / len };
          const curveAmt = 18;
          const cpx = mx + perp.x * curveAmt;
          const cpy = my + perp.y * curveAmt;
          const path = `M ${cx} ${cy} Q ${cpx} ${cpy} ${p.x} ${p.y}`;

          return (
            <motion.path
              key={b.id}
              d={path}
              fill="none"
              stroke={isActive ? b.color : "url(#lineGrad)"}
              strokeWidth={isActive ? 2.5 : 1.5}
              strokeLinecap="round"
              className="flow-line"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: dimmed ? 0.15 : 1,
              }}
              transition={{
                pathLength: { duration: 1.2, delay: 0.2 + i * 0.1, ease: "easeOut" },
                opacity: { duration: 0.4 },
              }}
            />
          );
        })}
      </svg>

      {/* Center node */}
      <div className="absolute" style={{ left: cx, top: cy, transform: "translate(-50%, -50%)" }}>
        <CenterNode dimmed={!!active} />
      </div>

      {/* Branch nodes */}
      {BRANCHES.map((b, i) => {
        const p = positions[i];
        return (
          <BranchNode
            key={b.id}
            branch={b}
            x={p.x}
            y={p.y}
            delay={0.4 + i * 0.08}
            onClick={() => setActive(b)}
            dimmed={!!active && active.id !== b.id}
            active={active?.id === b.id}
          />
        );
      })}

      {/* Hint at bottom */}
      {!active && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-sky-600/60 tracking-wider"
        >
          {labels.explore}
        </motion.div>
      )}

      <ExpandedPanel branch={active} onClose={() => setActive(null)} />
    </div>
  );
}
