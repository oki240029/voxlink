import { motion } from "framer-motion";
import {
  Target,
  TrendingUp,
  Banknote,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";

const BUSINESS = [
  {
    icon: Target,
    label: "Target",
    title: "ターゲット",
    items: [
      "オンラインゲーム × 海外プレイヤーと交流したい個人ゲーマー",
      "海外視聴者を獲得したい配信者・VTuber",
      "国際スクリム/eスポーツ活動を行うプロチーム",
    ],
  },
  {
    icon: TrendingUp,
    label: "Market",
    title: "市場性",
    items: [
      "世界のゲーマー人口 32億人超 / 国内オンラインゲーム市場 2兆円規模",
      "AI翻訳市場は年率24%成長、音声AIは2030年に12兆円市場に到達見込み",
      "Discord MAU 2億人、配信視聴時間は前年比+40%でグローバル化が加速",
    ],
  },
  {
    icon: Banknote,
    label: "Revenue",
    title: "収益モデル",
    items: [
      "個人向け SaaS サブスクリプション (Free / Pro)",
      "チーム/スタジオ向け Team プラン + カスタム統合",
      "ゲーム会社/eスポーツ団体向け API・OEM ライセンス",
    ],
  },
  {
    icon: Rocket,
    label: "Roadmap",
    title: "今後の展開",
    items: [
      "AI音声クローンによる “本人ボイス” 翻訳の本格リリース",
      "主要ゲームタイトル向け公式パートナーシップを獲得",
      "海外展開 (北米・東南アジア) と eスポーツリーグ公式採用を狙う",
    ],
  },
];

export default function Business() {
  return (
    <section id="business" className="relative py-28 md:py-36">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger(0.1)}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" />
            For Business Plan
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title text-white">
            事業として、
            <span className="text-gradient">この市場は獲れる。</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-white/60 md:text-lg">
            ゲーム × 音声AI × 翻訳という、まだ独占プレイヤーが存在しない
            <strong className="text-white"> ブルーオーシャン領域 </strong>
            を狙います。
          </motion.p>
        </motion.div>

        {/* Key metrics row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger(0.1)}
          className="mt-14 grid gap-4 sm:grid-cols-3"
        >
          {[
            { kpi: "¥1.2兆", label: "想定 SAM (国内ゲーミング × AI音声)" },
            { kpi: "32億人", label: "世界ゲーマー人口 (2024)" },
            { kpi: "+24% YoY", label: "AI翻訳市場の年成長率" },
          ].map((m) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              className="neon-border relative overflow-hidden rounded-2xl bg-ink-900/60 p-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon-cyan/80">
                Key Metric
              </p>
              <p className="mt-2 font-display text-3xl font-extrabold text-gradient">
                {m.kpi}
              </p>
              <p className="mt-2 text-sm text-white/65">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Business detail grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger(0.1)}
          className="mt-10 grid gap-5 md:grid-cols-2"
        >
          {BUSINESS.map(({ icon: Icon, ...b }) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-900/70 to-ink-950/40 p-7 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-neon-violet/30 to-neon-blue/30 ring-1 ring-inset ring-white/10">
                  <Icon className="h-5 w-5 text-neon-cyan" strokeWidth={2.4} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                    {b.label}
                  </p>
                  <h3 className="font-display text-lg font-bold text-white">
                    {b.title}
                  </h3>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {b.items.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-2 text-sm leading-relaxed text-white/70"
                  >
                    <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-neon-cyan" />
                    {t}
                  </li>
                ))}
              </ul>

              {/* corner accent */}
              <span className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-gradient-to-tr from-neon-violet/15 to-neon-cyan/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
