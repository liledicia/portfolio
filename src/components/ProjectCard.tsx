import { motion } from "framer-motion";
import type { CaseStudy } from "../data/content";
import { WorkPreview } from "./WorkPreview";

interface ProjectCardProps {
  project: CaseStudy;
  isSelected: boolean;
  onViewCaseStudy: (id: string) => void;
}

export function ProjectCard({
  project,
  isSelected,
  onViewCaseStudy,
}: ProjectCardProps) {
  return (
    <motion.article
      layout
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
      className="rounded-xl border border-[#c8c9c4] bg-[linear-gradient(135deg,#f5f5f2_0%,#e7e8e4_100%)] p-4 shadow-lg shadow-navy/10 ring-1 ring-white/70 sm:p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-2xl font-semibold leading-tight text-navy sm:text-3xl">
          {project.title}
        </h3>
        <button
          type="button"
          aria-expanded={isSelected}
          aria-controls={`case-${project.id}`}
          className={
            isSelected
              ? "shrink-0 rounded-full bg-burgundy px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-navy"
              : "shrink-0 rounded-full border border-columbia/25 bg-[#edf5fc] px-4 py-2.5 text-sm font-semibold text-navy shadow-sm transition hover:-translate-y-0.5 hover:border-columbia/40 hover:bg-white"
          }
          onClick={() => onViewCaseStudy(project.id)}
        >
          {isSelected ? "Hide Details" : "View Details"}
        </button>
      </div>

      <div className="mt-5">
        <WorkPreview project={project} size="showcase" />
      </div>
    </motion.article>
  );
}
