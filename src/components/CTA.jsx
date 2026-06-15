import { motion } from "framer-motion";
import { ArrowRight, Globe2 } from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";

export default function CTA() {
  return (
    <section id="cta" className="relative py-28 md:py-36">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger(0.1)}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900 p-10 md:p-16"
        >
          {/* aurora */}
          <div className="pointer-events-none absolute -inset-px -z-10 rounded-[2rem]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-neon-violet/25 via-neon-blue/10 to-neon-cyan/25" />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-grid opacity-[0.18] mask-radial" />
          <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-72 w-[640px] -translate-x-1/2 rounded-full bg-gradient-to-r from-neon-violet/40 via-neon-blue/40 to-neon-cyan/40 blur-3xl" />

          <motion.div variants={fadeUp} className="text-center">
            <span className="section-eyebrow">
              <Globe2 className="h-3 w-3" />
              Ready to break the language wall?
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-4 max-w-4xl text-center font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl"
          >
            言語の壁を越えて、
            <br />
            <span className="text-gradient-violet text-shadow-glow">
              世界中のプレイヤーと
            </span>
            つながる。
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-center text-white/65 md:text-lg"
          >
            今すぐ VOXLINK を起動して、最初のグローバル試合を体験しよう。
            無料プランから始められます。
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#cta" className="btn-primary group text-base">
              無料で始める
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#cta" className="btn-ghost text-base">
              チーム導入の相談
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-white/40"
          >
            credit card not required · setup in 60 seconds
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
