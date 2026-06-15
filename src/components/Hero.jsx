import { motion } from "framer-motion";
import { ArrowRight, Globe2, PlayCircle, Sparkles } from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";
import TranslatorVisual from "./TranslatorVisual";

const STATS = [
  { value: "<60ms", label: "リアルタイム遅延" },
  { value: "32+", label: "対応言語" },
  { value: "99.2%", label: "ゲーム用語精度" },
  { value: "24/7", label: "稼働率" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        {/* Left */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.span variants={fadeUp} className="section-eyebrow">
            <Sparkles className="h-3 w-3" />
            AI Realtime Voice Translation
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-[68px]"
          >
            言語の壁を、
            <br className="hidden md:block" />
            <span className="text-gradient text-shadow-glow">0.06秒</span>
            で消す。
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            VOXLINK は、ゲーム・Discord・配信のVCをリアルタイム翻訳するAI音声プラットフォーム。
            <br className="hidden md:block" />
            スラング・ゲーム用語・略語まで理解する、ゲーマーのための次世代トランスレーター。
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#cta" className="btn-primary group">
              無料で始める
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#how" className="btn-ghost group">
              <PlayCircle className="h-4 w-4 text-neon-cyan transition-transform group-hover:scale-110" />
              30秒で体験
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50"
          >
            <span className="inline-flex items-center gap-1.5">
              <Globe2 className="h-3.5 w-3.5 text-neon-cyan" />
              Discord / Steam / OBS 対応
            </span>
            <span>クレジット不要 · 1分でセットアップ</span>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="neon-border rounded-2xl bg-ink-900/40 px-4 py-3 backdrop-blur-sm"
              >
                <p className="font-mono text-2xl font-bold text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-white/50">
                  {s.label}
                </p>
                <span
                  className="mt-2 block h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <TranslatorVisual />
        </motion.div>
      </div>

      {/* Logo marquee */}
      <div className="container-page mt-24">
        <p className="mb-5 text-center font-mono text-[10px] uppercase tracking-[0.4em] text-white/40">
          Trusted by next-gen creators · 配信者 / プロチーム / VTuber
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
          <div className="flex animate-marquee gap-12 whitespace-nowrap py-4 opacity-60">
            {[
              "NEXUS GAMING",
              "ARCANE.ESPORTS",
              "PIXELWAVE",
              "VOID//77",
              "OBSIDIAN LABS",
              "TWILIGHT VTL",
              "RAYCAST",
              "HYPERFOX",
              "NEXUS GAMING",
              "ARCANE.ESPORTS",
              "PIXELWAVE",
              "VOID//77",
              "OBSIDIAN LABS",
              "TWILIGHT VTL",
              "RAYCAST",
              "HYPERFOX",
            ].map((n, i) => (
              <span
                key={i}
                className="font-display text-base font-semibold tracking-widest text-white/40"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
