import { motion } from "framer-motion";
import {
  Zap,
  Gamepad2,
  MonitorSmartphone,
  Users,
  Globe,
  Wand2,
} from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";

const FEATURES = [
  {
    icon: Zap,
    badge: "Realtime",
    title: "超低遅延翻訳 < 60ms",
    text: "独自のストリーミング推論によって、相手の発話とほぼ同時に翻訳音声を返す。プロチームの試合中VCでも違和感なし。",
    color: "from-amber-300 to-rose-400",
  },
  {
    icon: Gamepad2,
    badge: "Gaming Dict",
    title: "ゲーム特化辞書 200k+ エントリ",
    text: "FPS / MOBA / RPG / 格ゲー / Minecraft / Apex / Valorant など、ジャンル毎の用語ライブラリを切替。",
    color: "from-neon-violet to-neon-pink",
  },
  {
    icon: MonitorSmartphone,
    badge: "Streamer",
    title: "配信画面用 オーバーレイ",
    text: "OBS / Streamlabs / YouTube Live 向けに、翻訳字幕を画面上に表示。海外視聴者にも会話の意味が伝わる。",
    color: "from-neon-cyan to-neon-blue",
  },
  {
    icon: Users,
    badge: "Team",
    title: "チームVC 最大16人 対応",
    text: "プロチームやスクリム向けに、複数話者を識別して同時翻訳。誰が何を言ったか、字幕で正確に表示。",
    color: "from-indigo-400 to-neon-violet",
  },
  {
    icon: Globe,
    badge: "Multilingual",
    title: "32言語 双方向対応",
    text: "英語・中国語・韓国語・スペイン語・ポルトガル語・タイ語など主要ゲーマー言語を全方向翻訳。",
    color: "from-emerald-300 to-neon-cyan",
  },
  {
    icon: Wand2,
    badge: "Coming Soon",
    title: "AI 音声クローン (β)",
    text: "あなたの声で、海外言語を発話。本人が話しているような自然なボイスで、世界中のプレイヤーと交流。",
    color: "from-fuchsia-400 to-neon-violet",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 md:py-36">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger(0.1)}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-violet" />
            Features
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title text-white">
            プロが選ぶ理由は、
            <span className="text-gradient">この6つ。</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-white/60 md:text-lg">
            速さ、精度、ゲーム理解、配信対応、チーム性能、未来性 ──
            VOXLINK は「ゲーマーにとって必要な機能」だけを、最高品質で。
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger(0.08)}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map(({ icon: Icon, ...f }, i) => (
            <motion.article
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group neon-border relative overflow-hidden rounded-2xl bg-ink-900/50 p-6 backdrop-blur-md"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${f.color} shadow-glow`}
                >
                  <Icon className="h-5 w-5 text-ink-900" strokeWidth={2.5} />
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                  {f.badge}
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-bold leading-snug text-white">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {f.text}
              </p>

              <div className="mt-6 flex items-center justify-between text-[11px] text-white/40">
                <span className="font-mono">FEATURE / 0{i + 1}</span>
                <span className="h-px flex-1 mx-3 bg-gradient-to-r from-white/20 to-transparent" />
                <span className="font-mono text-neon-cyan">ACTIVE</span>
              </div>

              {/* hover glow */}
              <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${f.color} opacity-20 blur-2xl`}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
