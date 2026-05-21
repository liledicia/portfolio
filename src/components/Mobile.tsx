import { motion } from "framer-motion";
import { useLang } from "../i18n/context";
import { profile } from "../data/content";
import { Section } from "./Section";
import { About } from "./sections/About";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { FooterStrip } from "./FooterStrip";
import { BRANCHES } from "../data/branches";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Mobile() {
  const { lang } = useLang();

  return (
    <>
      {/* Mobile Hero: avatar centered, name, tagline, contacts, jump pills */}
      <section className="px-5 pt-20 pb-10 flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-200 to-sky-400 opacity-50 blur-2xl animate-pulse-soft" />
          <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-white/80 shadow-xl">
            <img
              src="/assets/avatar.jpg"
              alt={profile.nameEn}
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 28%" }}
            />
          </div>
        </div>
        <h1 className="font-display text-3xl font-semibold gradient-text mt-4">
          {lang === "en" ? profile.nameEn : profile.nameZh}
        </h1>
        <div className="text-xs text-sky-600/70 mt-0.5">aka Lédicia</div>
        <p className="text-sm text-slate-500 mt-2 max-w-xs">
          {lang === "en" ? profile.taglineEn : profile.taglineZh}
        </p>

        {/* Contacts */}
        <div className="flex gap-2 mt-4 flex-wrap justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="glass px-3 py-1.5 rounded-full text-[11px] text-sky-700 font-medium"
          >
            ✉ {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="glass px-3 py-1.5 rounded-full text-[11px] text-sky-700 font-medium"
          >
            ◐ GitHub
          </a>
        </div>

        {/* Quick anchor pills */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 gap-2 mt-6 w-full max-w-xs"
        >
          {BRANCHES.map((b) => (
            <button
              key={b.id}
              onClick={() => scrollToSection(b.id)}
              className="glass-strong rounded-xl py-2 px-3 flex items-center gap-2 text-left"
            >
              <span style={{ color: b.color }} className="text-base">{b.icon}</span>
              <span className="text-xs font-semibold text-slate-700">
                {lang === "en" ? b.labelEn : b.labelZh}
              </span>
            </button>
          ))}
        </motion.div>
      </section>

      <Section id="about" titleEn="About" titleZh="关于我" icon="✦"><About /></Section>
      <Section id="education" titleEn="Education" titleZh="教育背景" icon="✎" color="#0284c7"><Education /></Section>
      <Section id="experience" titleEn="Experience" titleZh="实习经历" icon="◆" color="#0284c7"><Experience /></Section>
      <Section
        id="projects"
        titleEn="Projects"
        titleZh="项目"
        subtitleEn="Live demos and source links."
        subtitleZh="实时 demo 与源码链接。"
        icon="▲"
        color="#38bdf8"
      >
        <Projects />
      </Section>
      <Section id="skills" titleEn="Skills" titleZh="技能" icon="●" color="#7dd3fc"><Skills /></Section>

      <FooterStrip />
    </>
  );
}
