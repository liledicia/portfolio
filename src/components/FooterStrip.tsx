import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../i18n/context";
import { languages, volunteer, travel, ui } from "../data/content";

export function FooterStrip() {
  const { lang } = useLang();
  const labels = ui[lang];
  const [activePdf, setActivePdf] = useState<string | null>(null);

  const allCountries = Object.values(travel).flat();
  const continents = Object.keys(travel).length;

  return (
    <>
      <div className="mt-12 border-t border-sky-200/40 pt-5 pb-8 max-w-5xl mx-auto px-6">
        <div className="text-[10px] text-sky-600/60 uppercase tracking-widest mb-3">
          {lang === "en" ? "Beyond Code" : "代码之外"}
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-[12px]">
          {/* Languages */}
          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-sky-500 font-semibold">
              {lang === "en" ? "Languages" : "语言"}
            </span>
            <span className="text-slate-400">·</span>
            {languages.map((l, i) => (
              <span key={l.nameEn} className="flex items-center gap-1">
                {i > 0 && <span className="text-slate-300 mr-1">·</span>}
                <span>{l.flag}</span>
                {l.pdf ? (
                  <button
                    onClick={() => setActivePdf(l.pdf!)}
                    className="hover:text-sky-600 hover:underline transition-colors"
                  >
                    {lang === "en" ? l.certEn : l.certZh}
                  </button>
                ) : (
                  <span>{lang === "en" ? l.certEn : l.certZh}</span>
                )}
              </span>
            ))}
          </div>

          {/* Volunteer */}
          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-sky-500 font-semibold">
              {lang === "en" ? "Volunteer" : "志愿者"}
            </span>
            <span className="text-slate-400">·</span>
            {volunteer.map((v, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <span className="text-slate-300 mr-1">·</span>}
                <span>{lang === "en" ? v.eventEn.replace("FIFA ", "").replace(" Summer Olympics", "") : v.eventZh.replace("国际足联", "")}</span>
                {v.status === "in-progress" && (
                  <span className="text-amber-500 text-[10px]">
                    {lang === "en" ? "(training)" : "(培训中)"}
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Travel */}
          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-sky-500 font-semibold">
              {lang === "en" ? "Travel" : "旅行"}
            </span>
            <span className="text-slate-400">·</span>
            <span>
              ✈ {allCountries.length} {labels.countriesCount} · {continents} {labels.continents}
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activePdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePdf(null)}
            className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl h-[85vh] glass-strong rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setActivePdf(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-600 shadow-md flex items-center justify-center font-bold"
                aria-label="Close"
              >
                ✕
              </button>
              <iframe src={activePdf} title="Certificate" className="w-full h-full bg-white" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
