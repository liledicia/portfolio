import { motion } from "framer-motion";
import { skillGroups } from "../data/content";
import { SectionHeader } from "./SectionHeader";

export function SkillsGrid() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeader
          eyebrow="Skills & tools"
          title="A toolkit for turning ambiguous ideas into testable product experiences."
          description="I combine product framing, growth thinking, front-end prototyping, and data basics to move ideas from vague to usable."
        />
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-stone-950">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-stone-100 px-2.5 py-1.5 text-sm font-medium text-stone-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
