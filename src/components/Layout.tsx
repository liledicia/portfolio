import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { navigation, profile } from "../data/content";

const sectionTabs = navigation;

export function Layout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-transparent text-navy">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/72 shadow-sm shadow-columbia/5 backdrop-blur-xl">
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6"
          aria-label="Primary navigation"
        >
          <a
            href="#home"
            className="flex items-center gap-3 font-semibold tracking-tight text-navy"
            onClick={() => handleTabClick("#home")}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy text-sm text-white shadow-sm shadow-navy/20">
              CL
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm leading-tight">{profile.name}</span>
              <span className="block font-display text-base leading-tight text-burgundy">
                {profile.externalName}
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#contact"
              onClick={() => handleTabClick("#contact")}
              className="rounded-full border border-columbia/20 bg-white/76 px-4 py-2 text-sm font-semibold text-navy shadow-sm transition hover:-translate-y-0.5 hover:border-columbia/35 hover:bg-white"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-stone-300 bg-white text-stone-900 shadow-sm md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="border-t border-white/70 bg-white/86 px-5 pb-4 pt-2 backdrop-blur-xl md:hidden"
            >
              <div className="mx-auto grid max-w-6xl gap-1">
                {sectionTabs.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
                      activeHref === item.href
                        ? "bg-navy text-white"
                        : "text-stone-700 hover:bg-white hover:text-stone-950"
                    }`}
                    onClick={() => handleTabClick(item.href)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
