import { useLang } from "../../i18n/context";
import { volunteer } from "../../data/content";

export function Volunteer() {
  const { lang } = useLang();
  return (
    <div className="space-y-4">
      {volunteer.map((v, i) => (
        <div
          key={i}
          className="relative rounded-xl bg-gradient-to-br from-white to-sky-50/50 border border-sky-200/50 p-4 hover:shadow-md hover:shadow-sky-200/30 transition-all"
        >
          <div className="flex items-start justify-between gap-3 mb-1">
            <div>
              <div className="font-semibold text-slate-800 text-sm">
                {lang === "en" ? v.eventEn : v.eventZh}
              </div>
              <div className="text-xs text-sky-600 mt-0.5">
                {lang === "en" ? v.titleEn : v.titleZh} · {v.period}
              </div>
            </div>
            <span
              className={`shrink-0 text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                v.status === "completed"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {v.status === "completed"
                ? lang === "en"
                  ? "Completed"
                  : "已完成"
                : lang === "en"
                ? "In training"
                : "培训中"}
            </span>
          </div>
          <p className="text-[13px] text-slate-600 leading-relaxed mt-1.5">
            {lang === "en" ? v.descEn : v.descZh}
          </p>
        </div>
      ))}
    </div>
  );
}
