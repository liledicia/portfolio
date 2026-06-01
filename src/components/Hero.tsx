import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { MouseEvent } from "react";
import { profile } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

type ContactPanel = "resume" | "email" | "tel" | null;

const buttonBase =
  "inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border px-4 py-3 text-sm font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-columbia/30";

function preventPlaceholderLink(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
}

export function Hero() {
  const [activePanel, setActivePanel] = useState<ContactPanel>(null);

  const togglePanel = (panel: ContactPanel) => {
    setActivePanel((current) => (current === panel ? null : panel));
  };

  return (
    <section
      id="home"
      className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-14 pt-36 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20 lg:pt-40"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.08 }}
        className="max-w-2xl"
      >
        <motion.p
          variants={fadeUp}
          className="text-sm font-semibold uppercase tracking-[0.22em] text-columbia"
        >
          {profile.education}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mt-5 font-display text-6xl font-bold leading-[0.92] text-navy sm:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-4 font-display text-2xl font-semibold italic leading-none text-stone-950 sm:text-3xl"
        >
          You can also call me{" "}
          <span className="font-bold">
            {profile.externalName}
          </span>
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-xl text-2xl font-medium text-stone-800 sm:text-3xl"
        >
          {profile.title}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex items-center gap-2 overflow-x-auto sm:gap-2.5"
        >
          <motion.button
            type="button"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            aria-expanded={activePanel === "resume"}
            onClick={() => togglePanel("resume")}
            className={`${buttonBase} border-navy bg-navy text-white shadow-navy/20 hover:bg-[#142c4f]`}
          >
            Download Resume
          </motion.button>
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className={`${buttonBase} border-columbia/25 bg-[#dfeaf4] text-navy hover:border-columbia/45 hover:bg-[#d3e2f0]`}
          >
            GitHub
          </motion.a>
          {profile.linkedin && (
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`${buttonBase} border-columbia/25 bg-[#dfeaf4] text-navy hover:border-columbia/45 hover:bg-[#d3e2f0]`}
            >
              LinkedIn
            </motion.a>
          )}
          <motion.button
            type="button"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            aria-expanded={activePanel === "email"}
            onClick={() => togglePanel("email")}
            className={`${buttonBase} border-stone-200 bg-[#eee8df] text-stone-950 hover:border-stone-300 hover:bg-[#e6ddd1]`}
          >
            Email
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            aria-expanded={activePanel === "tel"}
            onClick={() => togglePanel("tel")}
            className={`${buttonBase} border-burgundy/15 bg-[#eadde2] text-burgundy hover:border-burgundy/25 hover:bg-[#e1d0d7]`}
          >
            Tel
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          {activePanel && (
            <motion.div
              key={activePanel}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="mt-5 max-w-xl rounded-2xl border border-white/80 bg-white/82 p-4 shadow-xl shadow-columbia/10 backdrop-blur"
            >
              {activePanel === "resume" && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {profile.resumes.map((resume) => (
                    <a
                      key={resume.label}
                      href={resume.href || "#"}
                      aria-disabled={!resume.href}
                      onClick={!resume.href ? preventPlaceholderLink : undefined}
                      className="rounded-xl border border-columbia/15 bg-[#f8fbff] px-4 py-3 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:border-columbia/35 hover:bg-white"
                    >
                      {resume.label}
                    </a>
                  ))}
                </div>
              )}

              {activePanel === "email" && (
                <div className="grid gap-2">
                  {profile.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="rounded-xl border border-stone-200 bg-[#fbfaf7] px-4 py-3 text-sm font-semibold text-stone-800 transition hover:-translate-y-0.5 hover:border-columbia/30 hover:text-navy"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              )}

              {activePanel === "tel" && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {profile.phones.map((phone) => (
                    <a
                      key={phone.label}
                      href={phone.href}
                      className="rounded-xl border border-burgundy/10 bg-[#fbf8f9] px-4 py-3 text-sm font-semibold text-stone-800 transition hover:-translate-y-0.5 hover:border-burgundy/25 hover:text-burgundy"
                    >
                      <span className="mr-2 text-xs uppercase tracking-[0.18em] text-burgundy/70">
                        {phone.label}
                      </span>
                      {phone.display}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.aside
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12 }}
        className="relative mx-auto flex w-full max-w-md justify-center lg:justify-end"
      >
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-10 -bottom-4 h-10 rounded-full bg-navy/12 blur-xl"
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          whileHover={{ y: -12, scale: 1.015 }}
          transition={{
            y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.22 },
          }}
          className="relative h-72 w-72 overflow-hidden rounded-full border-[10px] border-white/85 bg-white shadow-2xl shadow-columbia/20 ring-1 ring-columbia/25 sm:h-96 sm:w-96 lg:h-[430px] lg:w-[430px]"
        >
          <img
            src="/assets/avatar.jpg"
            alt={profile.name}
            className="h-full w-full object-cover"
            style={{ objectPosition: "50% 20%" }}
          />
        </motion.div>
      </motion.aside>
    </section>
  );
}
