import { useLang } from "../../i18n/context";
import { experience } from "../../data/content";

export function Experience() {
  const { lang } = useLang();
  return (
    <div className="space-y-6">
      {experience.map((exp, i) => (
        <div key={i} className="relative pl-5 border-l-2 border-sky-200">
          <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 ring-4 ring-white" />
          <div className="flex items-baseline justify-between flex-wrap gap-1">
            <h3 className="font-semibold text-slate-800 text-[15px]">
              {lang === "en" ? exp.roleEn : exp.roleZh}
            </h3>
            <span className="text-xs text-sky-600/70 font-medium">{exp.period}</span>
          </div>
          <div className="text-sm text-sky-700 font-medium mt-0.5">
            {lang === "en" ? exp.orgEn : exp.orgZh}
            <span className="text-slate-400"> · {exp.location}</span>
          </div>
          <ul className="mt-2 space-y-1.5">
            {(lang === "en" ? exp.bulletsEn : exp.bulletsZh).map((b, j) => (
              <li key={j} className="text-[13px] text-slate-600 leading-relaxed flex gap-2">
                <span className="text-sky-400 select-none mt-1.5 text-[8px]">●</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
