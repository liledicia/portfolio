import { HeroTree } from "./HeroTree";
import { Section } from "./Section";
import { About } from "./sections/About";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { FooterStrip } from "./FooterStrip";

export function Desktop() {
  return (
    <>
      <HeroTree />

      <Section
        id="about"
        titleEn="About"
        titleZh="关于我"
        icon="✦"
        color="#0ea5e9"
      >
        <About />
      </Section>

      <Section
        id="education"
        titleEn="Education"
        titleZh="教育背景"
        icon="✎"
        color="#0284c7"
      >
        <Education />
      </Section>

      <Section
        id="experience"
        titleEn="Experience"
        titleZh="实习经历"
        icon="◆"
        color="#0284c7"
      >
        <Experience />
      </Section>

      <Section
        id="projects"
        titleEn="Projects"
        titleZh="项目"
        subtitleEn="Live demos, source links, and a quick technical summary for each."
        subtitleZh="实时 demo、源码链接和技术栈概览。"
        icon="▲"
        color="#38bdf8"
      >
        <Projects />
      </Section>

      <Section
        id="skills"
        titleEn="Skills"
        titleZh="技能"
        icon="●"
        color="#7dd3fc"
      >
        <Skills />
      </Section>

      <FooterStrip />
    </>
  );
}
