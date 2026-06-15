import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";

export default function LegalLayout({
  eyebrow,
  title,
  lastUpdated,
  toc,
  children,
}) {
  return (
    <section className="relative pb-32 pt-32 md:pt-40">
      {/* hero header */}
      <div className="container-page">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.1)}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900/80 via-ink-950/60 to-ink-900/80 p-8 md:p-12"
        >
          <div className="pointer-events-none absolute -top-32 right-0 -z-10 h-72 w-[640px] rounded-full bg-gradient-to-r from-neon-violet/30 via-neon-blue/20 to-neon-cyan/30 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-grid opacity-[0.15] mask-radial" />

          <motion.div variants={fadeUp}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs text-white/60 transition hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              トップへ戻る
            </Link>
          </motion.div>

          <motion.span
            variants={fadeUp}
            className="section-eyebrow mt-5"
          >
            <FileText className="h-3 w-3" />
            {eyebrow}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-3 font-display text-3xl font-extrabold leading-tight text-white md:text-5xl"
          >
            {title}
          </motion.h1>

          {lastUpdated && (
            <motion.p
              variants={fadeUp}
              className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40"
            >
              Last Updated · {lastUpdated}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Body */}
      <div className="container-page mt-12 grid gap-10 lg:grid-cols-[260px_1fr]">
        {/* TOC */}
        {toc && (
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              Table of Contents
            </p>
            <ul className="space-y-1 border-l border-white/10 pl-4 text-sm">
              {toc.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="block py-1 text-white/60 transition hover:text-neon-cyan"
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <article className="legal-prose">{children}</article>
      </div>
    </section>
  );
}
