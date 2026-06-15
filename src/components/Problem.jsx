import { motion } from "framer-motion";
import { Headphones, MessageSquareOff, ScanText } from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";

const PROBLEMS = [
  {
    icon: MessageSquareOff,
    tag: "Language Wall",
    title: "海外プレイヤーと話したいのに、言葉が出てこない。",
    text: "せっかくマッチした海外チームメイトと連携できず、ピンと絵文字だけのコミュニケーション。試合の重要な瞬間に「分からない」が起きる。",
    accent: "from-rose-400 to-neon-pink",
  },
  {
    icon: Headphones,
    tag: "Voice Chat",
    title: "ゲームVCで使える翻訳が、ほとんど存在しない。",
    text: "Discord・ゲーム内VC・配信ソフトに後付けできるリアルタイム翻訳は皆無。テキスト翻訳アプリを開いている間に、戦況は変わっている。",
    accent: "from-neon-blue to-neon-violet",
  },
  {
    icon: ScanText,
    tag: "Slang & Jargon",
    title: "普通の翻訳は、ゲームのスラングに弱すぎる。",
    text: "「peek」「nade」「ult」「gg ez」── 一般翻訳アプリは直訳しすぎて意味不明。ゲーマー文化を理解した翻訳が必要。",
    accent: "from-neon-cyan to-neon-blue",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-28 md:py-36">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger(0.1)}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
            The Problem
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title text-white">
            ゲーム × 海外 ×{" "}
            <span className="text-gradient-violet">言語の壁</span>。<br />
            この3つの交差点に、答えはなかった。
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-white/60 md:text-lg"
          >
            グローバル化したオンラインゲーム市場で、いま最も切実に求められているのは
            「ゲームの中で使えるリアルタイム翻訳」。
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.12)}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {PROBLEMS.map(({ icon: Icon, ...p }) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-ink-900/80 to-ink-950/40 p-7 backdrop-blur-xl"
            >
              <div
                className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-40`}
              />
              <div className="relative">
                <div
                  className={`mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${p.accent} text-ink-950 shadow-lg`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                  {p.tag}
                </p>
                <h3 className="font-display text-xl font-bold leading-snug text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {p.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
