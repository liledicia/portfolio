import { motion } from "framer-motion";
import { experienceItems } from "../data/content";
import type { ExperienceItem } from "../data/content";
import { SectionHeader } from "./SectionHeader";

function CompanyLogo({ item }: { item: ExperienceItem }) {
  if (!item.logo) {
    return (
      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg border border-columbia/25 bg-columbia/10 text-sm font-bold text-navy">
        {item.logoText}
      </div>
    );
  }

  const isCover = item.logoFit === "cover";

  const image = (
    <img
      src={item.logo}
      alt={item.logoAlt ?? `${item.company} logo`}
      className={
        isCover
          ? "h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
          : "max-h-full max-w-full object-contain transition duration-300 group-hover:scale-[1.04]"
      }
    />
  );

  const boxBase = "h-16 w-16 shrink-0 overflow-hidden rounded-lg";
  const containBox = "grid place-items-center border border-stone-200 bg-white p-2 shadow-sm";
  const coverBox = "ring-1 ring-stone-200 shadow-sm";

  if (!item.website) {
    return (
      <div className={`${boxBase} ${isCover ? coverBox : containBox}`}>{image}</div>
    );
  }

  return (
    <motion.a
      href={item.website}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${item.company} website`}
      whileHover={{ y: -4, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.22 }}
      className={`group relative ${boxBase} shadow-columbia/10 transition hover:shadow-xl hover:shadow-columbia/20 ${
        isCover
          ? `${coverBox} hover:ring-columbia/35`
          : `${containBox} hover:border-columbia/35`
      }`}
    >
      <motion.span
        aria-hidden="true"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className={`pointer-events-none absolute right-1 top-1 z-10 grid h-4 w-4 place-items-center ${
          isCover ? "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]" : "text-stone-950"
        }`}
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
      {image}
    </motion.a>
  );
}

export function ExperienceTimeline() {
  const internships = experienceItems.filter((item) => item.type === "internship");
  const campus = experienceItems.filter((item) => item.type === "campus");

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
                      <CompanyLogo item={item} />
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
                Campus Experience
              </h3>
              <span className="h-px flex-1 bg-stone-200" />
            </div>
            <div className="grid gap-4">
              {campus.map((item, index) => (
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
                      <CompanyLogo item={item} />
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
