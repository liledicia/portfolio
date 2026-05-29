import { motion } from "framer-motion";
import { experienceItems } from "../data/content";
import { SectionHeader } from "./SectionHeader";

export function ExperienceTimeline() {
  const internships = experienceItems.filter((item) => item.type === "internship");
  const projects = experienceItems.filter((item) => item.type === "project");

  return (
    <section
      id="experience"
      className="border-y border-stone-200 bg-white/62 px-5 py-16 sm:px-6 lg:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeader
            eyebrow="Experience"
            title="Product, growth, and technical work in real operating contexts."
            description="A concise view of the roles and workflows that shape how I build: from AI product operations to merchant dashboards and enterprise systems."
          />
        </motion.div>

        <div className="grid gap-10">
          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-stone-950">
                Internship Experience
              </h3>
              <span className="h-px flex-1 bg-stone-200" />
            </div>
            <div className="grid gap-4">
              {internships.map((item, index) => (
                <motion.article
                  key={item.company}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm"
                >
                  <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="flex gap-4">
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg border border-columbia/25 bg-columbia/10 text-sm font-bold text-navy">
                        {item.logoText}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-columbia">
                          {item.company}
                        </p>
                        <h4 className="mt-2 text-xl font-semibold text-stone-950">
                          {item.role}
                        </h4>
                        {item.period && (
                          <p className="mt-2 text-sm text-stone-500">
                            {item.period}
                          </p>
                        )}
                        <p className="mt-4 text-sm leading-7 text-stone-600">
                          {item.focus}
                        </p>
                        {item.website && (
                          <a
                            href={item.website}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex rounded-lg border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-950 transition hover:border-stone-400 hover:bg-stone-50"
                          >
                            Company Website
                          </a>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-3 text-sm leading-7 text-stone-700">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-stone-950">
                Project Experience
              </h3>
              <span className="h-px flex-1 bg-stone-200" />
            </div>
            <div className="grid gap-4">
              {projects.map((item, index) => (
                <motion.article
                  key={item.company}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="rounded-lg border border-columbia/20 bg-columbia/10 p-5"
                >
                  <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="flex gap-4">
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-navy text-sm font-bold text-white">
                        {item.logoText}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-columbia">
                          {item.company}
                        </p>
                        <h4 className="mt-2 text-xl font-semibold text-stone-950">
                          {item.role}
                        </h4>
                        <p className="mt-4 text-sm leading-7 text-stone-600">
                          {item.focus}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-sm leading-7 text-stone-700">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
