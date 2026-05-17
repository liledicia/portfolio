import { useLang } from "../../i18n/context";
import { skills } from "../../data/content";

export function Skills() {
  const { lang } = useLang();
  return (
    <div className="space-y-5">
      {skills.groups.map((g) => (
        <div key={g.titleEn}>
          <h3 className="text-xs font-semibold text-sky-600 uppercase tracking-wider mb-2">
            {lang === "en" ? g.titleEn : g.titleZh}
          </h3>
          <div className="flex flex-wrap gap-2">
            {g.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-200/60 text-sky-700 text-sm font-medium hover:scale-105 hover:shadow-md hover:shadow-sky-200/40 transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
