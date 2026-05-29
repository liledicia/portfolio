import { motion } from "framer-motion";
import { about, languages } from "../data/content";
import { SectionHeader } from "./SectionHeader";

export function AboutSection() {
  return (
    <section
      id="about"
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
            eyebrow="About"
            title="A product-minded CS student building at the edge of AI and growth."
            description="I care about the translation layer between business intent, user behavior, and working interfaces."
          />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35 }}
            className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm"
          >
            <p className="text-lg leading-8 text-stone-700">{about}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: 0.06 }}
            className="grid gap-5"
          >
            <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-columbia">
                Languages & Certificates
              </p>
              <div className="mt-4 grid gap-3">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    className="border-b border-stone-100 pb-3 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-medium text-stone-900">
                        {language.name}
                      </span>
                      <span className="text-sm font-medium text-stone-500">
                        {language.level}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-stone-600">
                      {language.strength}
                    </p>
                    {language.certificate && language.certificateUrl && (
                      <a
                        href={language.certificateUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold text-stone-950 transition hover:border-stone-400 hover:bg-stone-50"
                      >
                        View Certification
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
