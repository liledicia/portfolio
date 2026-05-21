import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "zh";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: <T,>(en: T, zh: T) => T;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");
  const toggle = () => setLang((l) => (l === "en" ? "zh" : "en"));
  const t = <T,>(en: T, zh: T): T => (lang === "en" ? en : zh);
  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
