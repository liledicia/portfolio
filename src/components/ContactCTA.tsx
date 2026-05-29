import { motion } from "framer-motion";
import { profile } from "../data/content";

export function ContactCTA() {
  return (
    <section id="contact" className="px-5 py-16 sm:px-6 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-6xl rounded-lg border border-columbia/20 bg-white px-6 py-10 text-navy shadow-sm sm:px-8 lg:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-columbia">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Interested in AI product, growth, or prototype-heavy roles.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
              I am especially excited by teams that need someone who can connect
              user scenarios, growth channels, and fast front-end execution.
            </p>
            <div className="mt-6 grid gap-2 text-sm font-medium text-stone-700">
              <a href={`mailto:${profile.email}`} className="hover:text-burgundy">
                Email: {profile.email}
              </a>
              <a href="tel:+15743012457" className="hover:text-burgundy">
                US Phone: {profile.phoneUS}
              </a>
              <a href="tel:+8619803861212" className="hover:text-burgundy">
                China Phone: {profile.phoneChina}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg bg-columbia px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy"
            >
              Email
            </a>
            <a
              href="tel:+15743012457"
              className="rounded-lg border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:border-stone-400 hover:bg-stone-50"
            >
              Call US
            </a>
            <a
              href="tel:+8619803861212"
              className="rounded-lg border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:border-stone-400 hover:bg-stone-50"
            >
              Call China
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:border-stone-400 hover:bg-stone-50"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>

      <footer className="mx-auto max-w-6xl px-1 pt-8 text-sm text-stone-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <a href={`mailto:${profile.email}`} className="hover:text-stone-900">
            {profile.email}
          </a>
        </div>
      </footer>
    </section>
  );
}
