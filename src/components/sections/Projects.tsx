import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../../i18n/context";
import { projects, ui } from "../../data/content";

export function Projects() {
  const { lang } = useLang();
  const labels = ui[lang];
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((p) => {
        const title = lang === "en" ? p.titleEn : p.titleZh;
        const subtitle = lang === "en" ? p.subtitleEn : p.subtitleZh;
        const desc = lang === "en" ? p.descEn : p.descZh;
        const showFrame = hoveredId === p.id && p.iframable && p.url;

        return (
          <div
            key={p.id}
            className="relative rounded-2xl bg-white/60 border border-sky-200/50 p-4 hover:shadow-lg hover:shadow-sky-200/40 transition-all duration-300 group overflow-hidden"
            onMouseEnter={() => setHoveredId(p.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Preview area */}
            <div className="relative w-full h-32 rounded-lg overflow-hidden mb-3 bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
              {p.comingSoon ? (
                <div className="text-center px-4">
                  <div className="text-2xl mb-1">🚧</div>
                  <div className="text-xs font-semibold text-sky-700">Coming Soon</div>
                  <div className="text-[10px] text-slate-500 mt-1">{labels.comingSoon}</div>
                </div>
              ) : p.iframable && p.url ? (
                <>
                  <div className="absolute inset-0 flex items-center justify-center text-sky-700 font-medium text-sm">
                    {hoveredId === p.id ? "" : "Hover to preview ↗"}
                  </div>
                  <AnimatePresence>
                    {showFrame && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 overflow-hidden"
                      >
                        <iframe
                          src={p.url}
                          title={title}
                          className="origin-top-left bg-white pointer-events-none"
                          style={{
                            width: "300%",
                            height: "300%",
                            transform: "scale(0.333)",
                            border: 0,
                          }}
                          sandbox="allow-same-origin allow-scripts"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <div className="text-center px-4">
                  <div className="text-2xl mb-1">{p.id.includes("admin") ? "⚙️" : "🌐"}</div>
                  <div className="text-xs font-semibold text-sky-700">
                    {p.id === "bite-admin" ? "Admin Portal" : "Live Web App"}
                  </div>
                </div>
              )}
            </div>

            <div className="text-[10px] text-sky-600 font-medium uppercase tracking-wider mb-0.5">
              {subtitle}
            </div>
            <h3 className="font-semibold text-slate-800 text-sm leading-snug mb-1">{title}</h3>
            <p className="text-[12px] text-slate-600 leading-relaxed line-clamp-3">{desc}</p>

            <div className="flex flex-wrap gap-1 mt-2">
              {p.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-600 text-[10px] font-medium">
                  {t}
                </span>
              ))}
            </div>

            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-sky-600 hover:text-sky-700 hover:gap-2 transition-all"
              >
                {labels.visit} <span>→</span>
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}
