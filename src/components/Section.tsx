import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useLang } from "../i18n/context";

interface Props {
  id: string;
  titleEn: string;
  titleZh: string;
  subtitleEn?: string;
  subtitleZh?: string;
  icon?: string;
  color?: string;
  children: ReactNode;
}

export function Section({ id, titleEn, titleZh, subtitleEn, subtitleZh, icon, color = "#0ea5e9", children }: Props) {
  const { lang } = useLang();
  return (
    <section id={id} className="relative max-w-5xl mx-auto px-6 py-16 scroll-mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-baseline gap-3 mb-2">
          {icon && (
            <span className="text-2xl" style={{ color }}>
              {icon}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl font-display font-semibold gradient-text leading-none">
            {lang === "en" ? titleEn : titleZh}
          </h2>
          <span className="text-sm text-sky-600/50 ml-1">
            {lang === "en" ? titleZh : titleEn}
          </span>
        </div>
        {(subtitleEn || subtitleZh) && (
          <p className="text-sm text-slate-500 mb-7 ml-1">
            {lang === "en" ? subtitleEn : subtitleZh}
          </p>
        )}
        <div className={subtitleEn ? "" : "mt-6"}>
          {children}
        </div>
      </motion.div>
    </section>
  );
}
