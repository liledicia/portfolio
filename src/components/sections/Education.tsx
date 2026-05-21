import { useLang } from "../../i18n/context";
import { education } from "../../data/content";

export function Education() {
  const { lang } = useLang();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {education.map((e, i) => (
        <div
          key={i}
          className="glass rounded-2xl p-5 hover:shadow-lg hover:shadow-sky-200/40 transition-all"
        >
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <h3 className="font-semibold text-slate-800 text-[15px] leading-snug">
              {lang === "en" ? e.schoolEn : e.schoolZh}
            </h3>
            <span className="shrink-0 text-[11px] text-sky-600/70 font-medium">{e.period}</span>
          </div>
          <div className="text-sm text-sky-700 font-medium">
            {lang === "en" ? e.degreeEn : e.degreeZh}
          </div>
          <div className="text-xs text-slate-400 mt-0.5">{e.location}</div>
          {(e.noteEn || e.noteZh) && (
            <div className="text-[13px] text-slate-600 mt-2 leading-relaxed">
              {lang === "en" ? e.noteEn : e.noteZh}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
