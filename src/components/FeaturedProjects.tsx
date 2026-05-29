import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { caseStudies } from "../data/content";
import { CaseStudyPanel } from "./CaseStudyPanel";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

export function FeaturedProjects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-6 lg:pb-20 lg:pt-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <SectionHeader
          eyebrow="Selected work"
          title="Work showcase across AI product, growth, and tooling."
          description="Three interface-led projects shown as large visual previews. Open each image for the live page, or expand details for role, process, tools, and product thinking."
        />
      </motion.div>

      <div className="mx-auto grid max-w-3xl gap-7">
        {caseStudies.map((project) => (
          <div key={project.id} className="grid gap-5">
            <ProjectCard
              project={project}
              isSelected={project.id === selectedId}
              onViewCaseStudy={(id) =>
                setSelectedId((current) => (current === id ? null : id))
              }
            />
            <AnimatePresence mode="wait">
              {project.id === selectedId && <CaseStudyPanel study={project} />}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
