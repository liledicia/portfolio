import { motion } from "framer-motion";
import { productResearchItems } from "../data/content";
import { SectionHeader } from "./SectionHeader";

function ResearchArtifactPreview() {
  return (
    <div className="overflow-hidden rounded-lg border border-columbia/15 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-stone-200 bg-[#f7fbff] px-4 py-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-columbia">
            Research workspace
          </p>
          <p className="mt-1 text-sm font-semibold text-navy">
            Scenario analysis · Requirement notes
          </p>
        </div>
        <span className="rounded-full bg-burgundy/10 px-3 py-1 text-xs font-semibold text-burgundy">
          PRD input
        </span>
      </div>
      <div className="grid gap-4 p-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-stone-200 bg-white p-4">
          <div className="h-3 w-28 rounded bg-navy/80" />
          <div className="mt-4 space-y-3">
            {["User goal", "Pain point", "Decision trigger", "CTA intent"].map(
              (label, index) => (
                <div key={label} className="grid grid-cols-[0.55fr_1fr] gap-3">
                  <span className="text-xs font-semibold text-stone-500">
                    {label}
                  </span>
                  <span
                    className={
                      index === 2
                        ? "h-5 rounded bg-burgundy/15"
                        : "h-5 rounded bg-columbia/15"
                    }
                  />
                </div>
              ),
            )}
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-stone-200">
          <div className="grid grid-cols-[0.95fr_0.75fr_0.8fr] bg-stone-50 text-xs font-semibold text-navy">
            <div className="border-r border-stone-200 px-3 py-2">Scenario</div>
            <div className="border-r border-stone-200 px-3 py-2">Output QA</div>
            <div className="px-3 py-2">Requirement</div>
          </div>
          {["Campus match", "Event RSVP", "Service booking", "Rental page"].map(
            (row, index) => (
              <div
                key={row}
                className="grid grid-cols-[0.95fr_0.75fr_0.8fr] border-t border-stone-200 text-xs"
              >
                <div className="border-r border-stone-200 px-3 py-2 text-stone-700">
                  {row}
                </div>
                <div className="border-r border-stone-200 px-3 py-2">
                  <span className="rounded bg-columbia/15 px-2 py-1 font-semibold text-columbia">
                    {index === 1 ? "Revise" : "Clear"}
                  </span>
                </div>
                <div className="px-3 py-2 text-stone-500">tighten CTA</div>
              </div>
            ),
          )}
        </div>
      </div>
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
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-columbia">
                    {item.category}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base font-medium text-stone-600">
                    {item.subtitle}
                  </p>
                  <div className="mt-5 border-l-2 border-columbia/35 pl-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                      Role
                    </p>
                    <p className="mt-1 text-sm font-semibold text-stone-900">
                      {item.role}
                    </p>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-stone-600">
                    {item.summary}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-stone-700">
                    {item.insight}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  {item.links.product && (
                    <a
                      href={item.links.product}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-stone-950 transition hover:border-stone-400 hover:bg-stone-50"
                    >
                      Product Site
                    </a>
                  )}
                </div>

                <div className="grid gap-5">
                  <ResearchArtifactPreview />
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border border-stone-200 bg-[#f7fbff] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-columbia">
                        Methods
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.methods.map((method) => (
                          <span
                            key={method}
                            className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-stone-700 shadow-sm"
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg border border-stone-200 bg-[#f7fbff] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-columbia">
                        Artifacts
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.artifacts.map((artifact) => (
                          <span
                            key={artifact}
                            className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-stone-700 shadow-sm"
                          >
                            {artifact}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg border border-stone-200 bg-[#f7fbff] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-columbia">
                        Tested Scenarios
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.examples.map((example) => (
                          <span
                            key={example}
                            className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-stone-700 shadow-sm"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
