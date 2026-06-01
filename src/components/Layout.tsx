import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { navigation } from "../data/content";

const sectionTabs = navigation;

const MARQUEE_QUOTE =
  "Au milieu de l'hiver, j'apprenais enfin qu'il y avait en moi un été invincible.";

export function Layout({ children }: { children: ReactNode }) {
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const sections = sectionTabs
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-42% 0px -48% 0px",
        threshold: [0, 0.18, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document
      .querySelector(`[data-section-tab="${activeHref}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeHref]);

  const handleTabClick = (href: string) => {
    setActiveHref(href);
  };

  return (
    <div className="min-h-screen bg-transparent text-navy">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/72 shadow-sm shadow-columbia/5 backdrop-blur-xl">
        <div
          className="marquee masthead-marquee py-4 sm:py-5"
          aria-hidden="true"
        >
          <div className="marquee__track">
            {[0, 1].map((group) => (
              <div className="marquee__group" key={group}>
                {[0, 1, 2].map((repeat) => (
                  <span className="marquee__item" key={repeat}>
                    <span className="masthead-text font-script text-[1.7rem] leading-[1.35] sm:text-[2.2rem]">
                      {MARQUEE_QUOTE}
                    </span>
                    <span className="marquee__sep">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/80 bg-[#e6f0f7]/74 backdrop-blur-xl">
          <div
            className="section-tabs-scroll mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-2.5 sm:px-6"
            aria-label="Section tabs"
          >
            {sectionTabs.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  data-section-tab={item.href}
                  onClick={() => handleTabClick(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 ${
                    isActive
                      ? "border-navy bg-navy text-white shadow-md shadow-navy/15"
                      : "border-white/80 bg-white/72 text-stone-700 shadow-sm shadow-columbia/5 hover:-translate-y-0.5 hover:border-columbia/35 hover:bg-white hover:text-navy"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
