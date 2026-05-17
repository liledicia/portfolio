import { useLang } from "../../i18n/context";
import { about } from "../../data/content";

export function About() {
  const { lang } = useLang();
  const text = lang === "en" ? about.en : about.zh;
  return (
    <div className="space-y-4">
      {text.split("\n\n").map((p, i) => (
        <p key={i} className="text-slate-700 leading-relaxed text-[15px]">
          {p}
        </p>
      ))}
      <div className="flex flex-wrap gap-2 pt-3">
        {["Technology", "Product", "Languages", "Travel"].map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-sky-100/60 text-sky-700 text-xs font-medium border border-sky-200/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
