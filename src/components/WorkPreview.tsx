import { motion } from "framer-motion";
import type { CaseStudy } from "../data/content";

interface WorkPreviewProps {
  project: CaseStudy;
  size?: "card" | "panel" | "showcase";
}

function BrowserChrome() {
  return (
    <div className="flex items-center gap-1.5 border-b border-stone-200 bg-white px-3 py-2">
      <span className="h-2.5 w-2.5 rounded-full bg-burgundy/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-linen" />
      <span className="h-2.5 w-2.5 rounded-full bg-columbia/70" />
    </div>
  );
}

function getPreviewHref(project: CaseStudy) {
  return project.links.demo ?? project.links.product ?? project.links.caseStudy;
}

function FloatingOpenCue() {
  return (
    <motion.span
      aria-hidden="true"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/92 px-3 py-1.5 text-xs font-semibold text-navy shadow-lg shadow-columbia/15 backdrop-blur"
    >
      Open
      <svg
        viewBox="0 0 16 16"
        aria-hidden="true"
        className="h-3.5 w-3.5"
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

function LandingPreview() {
  return (
    <div className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
      <BrowserChrome />
      <div className="grid gap-4 p-4 sm:grid-cols-[1.05fr_0.75fr]">
        <div>
          <div className="h-3 w-24 rounded-full bg-columbia/25" />
          <div className="mt-4 h-7 w-4/5 rounded bg-navy/90" />
          <div className="mt-2 h-7 w-3/5 rounded bg-navy/90" />
          <div className="mt-4 space-y-2">
            <div className="h-2.5 w-full rounded bg-stone-200" />
            <div className="h-2.5 w-4/5 rounded bg-stone-200" />
          </div>
          <div className="mt-5 flex gap-2">
            <div className="h-9 w-24 rounded-md bg-columbia" />
            <div className="h-9 w-20 rounded-md border border-stone-200 bg-white" />
          </div>
        </div>
        <div className="rounded-xl border border-stone-200 bg-linen p-3">
          <div className="mx-auto h-44 w-24 rounded-[1.35rem] border-4 border-navy bg-white p-2 shadow-sm">
            <div className="h-12 rounded-lg bg-columbia/20" />
            <div className="mt-2 space-y-1.5">
              <div className="h-2 rounded bg-stone-200" />
              <div className="h-2 w-4/5 rounded bg-stone-200" />
              <div className="h-7 rounded bg-burgundy/20" />
              <div className="h-7 rounded bg-columbia/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpreadsheetPreview() {
  const rows = ["Campus match", "Event RSVP", "Roommate", "Rental", "Service"];

  return (
    <div className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-stone-200 bg-[#eef4fb] px-3 py-2">
        <span className="text-xs font-semibold text-navy">Prompt QA Matrix</span>
        <span className="rounded bg-burgundy/10 px-2 py-1 text-[10px] font-semibold text-burgundy">
          Excel analysis
        </span>
      </div>
      <div className="grid grid-cols-[1.1fr_0.7fr_0.7fr_1fr] text-[11px]">
        {["Scenario", "CTA", "Fields", "Notes"].map((header) => (
          <div key={header} className="border-b border-r border-stone-200 bg-stone-50 px-2 py-2 font-semibold text-navy last:border-r-0">
            {header}
          </div>
        ))}
        {rows.flatMap((row, index) => [
            <div key={`${row}-scenario`} className="border-b border-r border-stone-200 px-2 py-2 text-stone-700">
              {row}
            </div>,
            <div key={`${row}-cta`} className="border-b border-r border-stone-200 px-2 py-2">
              <span className="rounded bg-columbia/15 px-1.5 py-0.5 text-columbia">
                {index > 1 ? "Clear" : "Strong"}
              </span>
            </div>,
            <div key={`${row}-fields`} className="border-b border-r border-stone-200 px-2 py-2">
              <span className="rounded bg-burgundy/10 px-1.5 py-0.5 text-burgundy">
                {index + 4}/5
              </span>
            </div>,
            <div key={`${row}-notes`} className="border-b border-stone-200 px-2 py-2 text-stone-500">
              refine copy
            </div>,
        ])}
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
      <BrowserChrome />
      <div className="grid min-h-56 grid-cols-[0.38fr_1fr]">
        <div className="bg-navy p-3">
          <div className="h-5 w-20 rounded bg-white/90" />
          <div className="mt-5 space-y-2">
            <div className="h-7 rounded bg-white/16" />
            <div className="h-7 rounded bg-columbia/60" />
            <div className="h-7 rounded bg-white/16" />
          </div>
        </div>
        <div className="bg-stone-50 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-4 w-32 rounded bg-navy/90" />
              <div className="mt-2 h-2.5 w-24 rounded bg-stone-300" />
            </div>
            <div className="h-8 w-24 rounded-md bg-columbia" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-16 rounded-md bg-white shadow-sm" />
            <div className="h-16 rounded-md bg-white shadow-sm" />
            <div className="h-16 rounded-md bg-white shadow-sm" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-8 rounded-md bg-white shadow-sm" />
            <div className="h-8 rounded-md bg-white shadow-sm" />
            <div className="h-8 rounded-md bg-white shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

function RecommenderPreview() {
  return (
    <div className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
      <BrowserChrome />
      <div className="grid gap-4 bg-[#f8fafc] p-4 sm:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="h-5 w-28 rounded bg-navy/90" />
          <div className="mt-4 flex flex-wrap gap-2">
            {["Xianxia", "Romance", "Mystery", "Comedy"].map((tag) => (
              <span key={tag} className="rounded-full bg-columbia/15 px-3 py-1 text-xs font-semibold text-columbia">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 h-10 rounded-md bg-burgundy/85" />
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-lg bg-white p-3 shadow-sm">
              <div className="h-3 w-1/2 rounded bg-navy/80" />
              <div className="mt-2 h-2.5 w-5/6 rounded bg-stone-200" />
              <div className="mt-2 h-2.5 w-2/3 rounded bg-stone-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WorkPreview({ project, size = "card" }: WorkPreviewProps) {
  const imageSrc =
    size === "panel" && project.preview.detailImage
      ? project.preview.detailImage
      : project.preview.image;
  const href = getPreviewHref(project);

  const preview =
    project.preview.kind === "landing" ? (
      <LandingPreview />
    ) : project.preview.kind === "spreadsheet" ? (
      <SpreadsheetPreview />
    ) : project.preview.kind === "dashboard" ? (
      <DashboardPreview />
    ) : (
      <RecommenderPreview />
    );

  return (
    <div
      className={
        size === "panel" ? "min-h-72" : size === "showcase" ? "" : "min-h-56"
      }
    >
      {imageSrc ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title}`}
          className="group relative block overflow-hidden rounded-lg border border-columbia/15 bg-white/82 shadow-sm shadow-columbia/10 transition duration-300 hover:-translate-y-1 hover:border-columbia/35 hover:shadow-xl hover:shadow-columbia/15"
          onClick={(event) => {
            if (!href) event.preventDefault();
          }}
        >
          {href && <FloatingOpenCue />}
          <BrowserChrome />
          <div
            className={
              size === "panel"
                ? "aspect-[16/8.8] bg-white p-2"
                : size === "showcase"
                  ? "aspect-video bg-white p-2 sm:p-3"
                : "aspect-[16/10] bg-white p-2"
            }
          >
            <img
              src={imageSrc}
              alt={`${project.title} preview`}
              className="h-full w-full rounded-md object-contain transition duration-300 group-hover:scale-[1.015]"
            />
          </div>
        </a>
      ) : (
        preview
      )}
    </div>
  );
}
