import { motion } from "framer-motion";
import { productResearchItems } from "../data/content";
import type { ProductResearchItem } from "../data/content";
import { SectionHeader } from "./SectionHeader";

function PhoneCardPreview({ url }: { url: string }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Open the live CueCue card in a new tab"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22 }}
      className="group relative mx-auto block w-[220px] shrink-0 rounded-[2rem] border border-stone-300 bg-stone-900 p-2 shadow-lg shadow-columbia/10 transition hover:shadow-xl hover:shadow-columbia/20 sm:mx-0"
    >
      <motion.span
        aria-hidden="true"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-3 top-3 z-20 grid h-6 w-6 place-items-center rounded-full bg-white/90 text-stone-950 shadow"
      >
        <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5" fill="none">
          <path
            d="M5 3h8v8M12.5 3.5 4 12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
      </motion.span>
      <div className="absolute left-1/2 top-[0.6rem] z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-stone-700" />
      <div className="relative h-[442px] w-[202px] overflow-hidden rounded-[1.5rem] bg-white">
        <iframe
          src={url}
          title="Live CueCue card preview"
          loading="lazy"
          tabIndex={-1}
          className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
          style={{ width: "390px", height: "852px", transform: "scale(0.518)" }}
        />
        <span className="absolute inset-0" aria-hidden="true" />
      </div>
      <p className="mt-2 text-center text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone-400 transition group-hover:text-columbia">
        Live card ↗
      </p>
    </motion.a>
  );
}

function ScenarioMatrix({
  rows,
  total,
}: {
  rows: NonNullable<ProductResearchItem["scenarioMatrix"]>;
  total?: number;
}) {
  const more = total ? total - rows.length : 0;
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-columbia/15 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-stone-200 bg-[#f7fbff] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-columbia">
          Scenario matrix · beauty vertical
        </p>
        <span className="rounded-full bg-burgundy/10 px-2.5 py-1 text-[0.65rem] font-semibold text-burgundy">
          Real research
        </span>
      </div>
      <div className="divide-y divide-stone-100">
        {rows.map((row) => (
          <div
            key={row.en}
            className="grid grid-cols-[0.85fr_1fr] gap-3 px-4 py-2.5"
          >
            <div>
              <p className="text-xs font-semibold text-navy">{row.en}</p>
              <p className="mt-0.5 text-[0.7rem] text-stone-400">{row.zh}</p>
            </div>
            <p className="text-[0.72rem] leading-5 text-stone-600">{row.gap}</p>
          </div>
        ))}
      </div>
      {more > 0 && (
        <div className="mt-auto border-t border-stone-200 bg-[#f7fbff] px-4 py-2 text-center text-[0.7rem] font-semibold text-stone-500">
          +{more} more scenarios mapped
        </div>
      )}
    </div>
  );
}

function GrowthStats({
  data,
}: {
  data: NonNullable<ProductResearchItem["growthStats"]>;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-columbia/15 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-stone-200 bg-[#f7fbff] px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-columbia">
          {data.label}
        </p>
        <span className="rounded-full bg-columbia/10 px-2.5 py-1 text-[0.65rem] font-semibold text-columbia">
          Live test
        </span>
      </div>
      <div className="grid grid-cols-2 gap-px bg-stone-100 sm:grid-cols-4">
        {data.metrics.map((metric) => (
          <div key={metric.label} className="bg-white px-4 py-3">
            <p className="text-lg font-bold text-navy">{metric.value}</p>
            <p className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-stone-500">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
      <p className="border-t border-stone-200 px-4 py-2.5 text-[0.72rem] leading-5 text-stone-600">
        {data.note}
      </p>
    </div>
  );
}

export function ProductResearchSection() {
  return (
    <section
      id="research"
      className="border-y border-columbia/10 bg-white/62 px-5 py-16 sm:px-6 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeader
            eyebrow="Product strategy & research"
            title="User analysis, competitor research, and product requirement thinking."
            description="This section separates product discovery and analysis work from build-heavy interface projects, so recruiters can see the product judgment behind the prototypes."
          />
        </motion.div>

        <div className="grid gap-6">
          {productResearchItems.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35 }}
              className="rounded-lg border border-columbia/20 bg-white p-5 shadow-sm"
            >
              {/* Header */}
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-columbia">
                    {item.category}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base font-medium text-stone-600">
                    {item.subtitle}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                      Role
                    </span>
                    <span className="font-semibold text-stone-900">
                      {item.role}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 md:max-w-[240px] md:justify-end">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Narrative evidence */}
              <div className="mt-10 grid gap-10">
                {/* 01 · Scenario research */}
                {item.scenarioMatrix && (
                  <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.05fr]">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-burgundy">
                        01 · Scenario research
                      </p>
                      <h4 className="mt-3 text-xl font-semibold text-navy">
                        Mapped real use cases — and why today's tools fall short
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-stone-600">
                        {item.summary}
                      </p>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                        Approach
                      </p>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {item.methods.map((method) => (
                          <li
                            key={method}
                            className="flex gap-2.5 text-sm leading-6 text-stone-700"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-columbia" />
                            <span>{method}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <ScenarioMatrix
                      rows={item.scenarioMatrix}
                      total={item.scenarioMatrixTotal}
                    />
                  </div>
                )}

                {/* 02 · Prompt → card */}
                {item.cardEmbedUrl && (
                  <div className="flex flex-col items-center gap-8 border-t border-stone-200 pt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-16">
                    <PhoneCardPreview url={item.cardEmbedUrl} />
                    <div className="max-w-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-burgundy">
                        02 · Prompt → card
                      </p>
                      <h4 className="mt-3 text-xl font-semibold text-navy">
                        Structured prompts that output booking-ready cards
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-stone-600">
                        {item.insight}
                      </p>
                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                        Deliverables
                      </p>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {item.artifacts.map((artifact) => (
                          <li
                            key={artifact}
                            className="flex gap-2.5 text-sm leading-6 text-stone-700"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-columbia" />
                            <span>{artifact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* 03 · Growth validation */}
                {item.growthStats && (
                  <div className="grid items-start gap-6 border-t border-stone-200 pt-10 lg:grid-cols-[1fr_1.05fr]">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-burgundy">
                        03 · Growth validation
                      </p>
                      <h4 className="mt-3 text-xl font-semibold text-navy">
                        Pressure-tested demand with a live paid-search experiment
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-stone-600">
                        Ran a small Google Ads keyword test to check whether the
                        card concept pulls real booking intent — not just
                        interest — before scaling the build.
                      </p>
                    </div>
                    <GrowthStats data={item.growthStats} />
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
