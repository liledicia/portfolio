import { motion } from "framer-motion";
import { educationItems } from "../data/content";
import { SectionHeader } from "./SectionHeader";

function FloatingLogoArrow({ isBarnard }: { isBarnard: boolean }) {
  return (
    <motion.span
      aria-hidden="true"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute right-2 top-2 z-10 grid h-5 w-5 place-items-center ${
        isBarnard ? "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]" : "text-stone-950"
      }`}
    >
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
      >
        <path
          d="M5 3h8v8M12.5 3.5 4 12"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    </motion.span>
  );
}

export function EducationSection() {
  return (
    <section
      id="education"
      className="border-y border-stone-200 bg-white/58 px-5 py-14 sm:px-6 lg:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
        >
          <SectionHeader
            eyebrow="Education"
            title="My academic journey"
            description="I began at Purdue in Fall 2024 studying Aeronautics and Astronautics Engineering, then transferred to Barnard in Fall 2025 after finding my strongest interest in Computer Science, AI agents, and product building."
            className="max-w-4xl"
          />
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {educationItems.map((item, index) => (
            <motion.article
              key={item.school}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={
                index === 0
                  ? "rounded-lg border border-columbia/25 bg-columbia/[0.08] p-5 shadow-sm"
                  : "rounded-lg border border-stone-200 bg-white p-5 shadow-sm"
              }
            >
              <div className="flex flex-col gap-5 sm:flex-row">
                {(() => {
                  const isBarnard = item.school.includes("Barnard");

                  return (
                <motion.a
                  href={item.website}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${item.school} website`}
                  whileHover={{ y: -4, scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.22 }}
                  className={
                    isBarnard
                      ? "group relative h-24 w-32 shrink-0 overflow-hidden rounded-lg shadow-sm shadow-columbia/10 ring-1 ring-columbia/15 transition hover:shadow-xl hover:shadow-columbia/20"
                      : "group relative flex h-24 w-32 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-stone-200 bg-white p-2 shadow-sm shadow-columbia/10 transition hover:border-columbia/35 hover:shadow-xl hover:shadow-columbia/20"
                  }
                >
                  <FloatingLogoArrow isBarnard={isBarnard} />
                  <img
                    src={item.logo}
                    alt={item.logoAlt}
                    className={
                      isBarnard
                        ? "h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                        : "max-h-full max-w-full object-contain transition duration-300 group-hover:scale-[1.04]"
                    }
                  />
                </motion.a>
                  );
                })()}
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-semibold leading-tight text-stone-950">
                        {item.school}
                      </h3>
                      <p className="mt-2 text-base font-medium text-stone-700">
                        {item.degree}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm font-medium text-columbia">
                    {item.period} · {item.location}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-700">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
