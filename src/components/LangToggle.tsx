import { useLang } from "../i18n/context";

export function LangToggle() {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      className="glass fixed top-5 right-5 z-50 px-4 py-2 rounded-full text-sm font-medium text-sky-600 hover:scale-105 hover:text-sky-600 transition-all duration-200 flex items-center gap-2"
      aria-label="Toggle language"
    >
      <span className={lang === "en" ? "gradient-text font-semibold" : "opacity-50"}>EN</span>
      <span className="text-sky-300">·</span>
      <span className={lang === "zh" ? "gradient-text font-semibold" : "opacity-50"}>中</span>
    </button>
  );
}
