import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../../i18n/context";
import { languages, ui } from "../../data/content";

export function Languages() {
  const { lang } = useLang();
  const labels = ui[lang];
  const [activePdf, setActivePdf] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {languages.map((l) => {
        const name = lang === "en" ? l.nameEn : l.nameZh;
        const cert = lang === "en" ? l.certEn : l.certZh;
        return (
          <div
            key={l.nameEn}
            className="rounded-xl bg-white/60 border border-sky-200/50 p-4 flex items-center justify-between hover:shadow-md hover:shadow-sky-200/30 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{l.flag}</span>
              <div>
                <div className="font-semibold text-slate-800 text-sm">{name}</div>
                <div className="text-xs text-sky-600">{cert}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-[11px] text-slate-400 uppercase tracking-wider">Level</div>
                <div className="text-sm font-bold gradient-text">{l.level}</div>
              </div>
              {l.pdf && (
                <button
                  onClick={() => setActivePdf(l.pdf!)}
                  className="ml-3 px-3 py-1.5 rounded-lg bg-sky-100 hover:bg-sky-200 text-sky-700 text-xs font-semibold transition-colors"
                >
                  {labels.openCert}
                </button>
              )}
            </div>
          </div>
        );
      })}

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
              <iframe
                src={activePdf}
                title="Certificate"
                className="w-full h-full bg-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
