import { motion } from "framer-motion";
import type { CaseStudy } from "../data/content";

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-columbia">
      {children}
    </p>
  );
}

function InfoCard({
  label,
  children,
}: {
  label: string;
  children: string;
}) {
  return (
    <div className="rounded-lg border border-columbia/15 bg-[#f7fbff] p-4">
      <SectionLabel>{label}</SectionLabel>
      <p className="mt-2 text-sm leading-6 text-stone-700">{children}</p>
    </div>
  );
}

function ChipGroup({ items }: { items: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 shadow-sm"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export function CaseStudyPanel({ study }: { study: CaseStudy }) {
  return (
    <motion.div
      id={`case-${study.id}`}
      key={study.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.24 }}
      className="mt-5 rounded-xl border border-columbia/20 bg-white/94 p-5 shadow-sm shadow-columbia/10 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <SectionLabel>Work detail</SectionLabel>
          <h3 className="mt-2 text-2xl font-semibold leading-tight text-navy">
            {study.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-700">
            {study.overview}
          </p>
        </div>
        <div className="shrink-0 rounded-full border border-columbia/20 bg-[#edf5fc] px-4 py-2 text-sm font-semibold text-navy">
          {study.role}
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <InfoCard label="Problem">{study.problem}</InfoCard>
        <InfoCard label="Solution">{study.solution}</InfoCard>
        <InfoCard label="Impact">{study.impact}</InfoCard>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-lg border border-stone-200 bg-white p-4">
          <SectionLabel>What I did</SectionLabel>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-700">
            {study.process.map((step) => (
              <li key={step} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4">
          <div className="rounded-lg border border-stone-200 bg-white p-4">
            <SectionLabel>Deliverables</SectionLabel>
            <ChipGroup items={study.deliverables} />
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-4">
            <SectionLabel>Tools</SectionLabel>
            <ChipGroup items={study.tools} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
