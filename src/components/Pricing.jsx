import { motion } from "framer-motion";
import { Check, Sparkles, Rocket, Crown } from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";

const PLANS = [
  {
    name: "Free",
    icon: Sparkles,
    price: "0",
    suffix: "/月",
    description: "まず試したいゲーマー向け",
    features: [
      "月10時間まで翻訳利用",
      "字幕表示 (テキストのみ)",
      "12言語対応",
      "Discord Bot 利用可",
      "コミュニティサポート",
    ],
    cta: "無料で始める",
    highlighted: false,
    accent: "from-white/10 to-white/0",
  },
  {
    name: "Pro",
    icon: Rocket,
    price: "1,480",
    suffix: "円 / 月",
    description: "本気で海外プレイヤーと遊ぶ人へ",
    features: [
      "無制限の翻訳利用",
      "AI音声読み上げ・音声出力",
      "32言語フル対応",
      "ゲーム用語辞書 (全ジャンル)",
      "OBS 配信オーバーレイ",
      "優先サポート",
    ],
    cta: "Proを試す",
    highlighted: true,
    accent: "from-neon-violet to-neon-cyan",
  },
  {
    name: "Team",
    icon: Crown,
    price: "4,980",
    suffix: "円 / 月",
    description: "プロチーム・スクリム・配信スタジオ向け",
    features: [
      "最大16人 同時翻訳",
      "話者識別 & ログ出力",
      "AI音声クローン (β) 早期アクセス",
      "API・カスタム統合",
      "専任カスタマーサクセス",
      "SLA 99.95% 保証",
    ],
    cta: "チームで導入",
    highlighted: false,
    accent: "from-fuchsia-400 to-neon-violet",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-36">
      <div className="container-page">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger(0.1)}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-pink" />
            Pricing
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title text-white">
            あなたのプレイスタイルに合わせて、
            <br />
            <span className="text-gradient-violet">3つのプラン</span>
            から。
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-white/60 md:text-lg">
            完全フリーで始められ、配信者・プロチーム向けの上位プランへスムーズに移行できます。
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger(0.1)}
          className="mt-16 grid items-stretch gap-6 lg:grid-cols-3"
        >
          {PLANS.map(({ icon: Icon, ...p }) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className={`relative flex flex-col overflow-hidden rounded-3xl p-8 backdrop-blur-md ${
                p.highlighted
                  ? "border border-transparent bg-ink-900/70 shadow-violet"
                  : "border border-white/10 bg-ink-900/40"
              }`}
            >
              {p.highlighted && (
                <>
                  <span className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-neon-violet/30 via-neon-blue/20 to-neon-cyan/30" />
                  <span className="pointer-events-none absolute inset-px -z-10 rounded-[calc(1.5rem-1px)] bg-ink-900/85" />
                  <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-neon-violet to-neon-cyan px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-950">
                    Most Popular
                  </span>
                </>
              )}

              <div
                className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${p.accent} text-white shadow-lg`}
              >
                <Icon className="h-5 w-5" strokeWidth={2.5} />
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-white">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-white/60">{p.description}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-5xl font-extrabold text-white">
                  {p.price}
                </span>
                <span className="mb-2 text-sm text-white/60">{p.suffix}</span>
              </div>

              <ul className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-white/75"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 ring-1 ring-inset ring-white/15">
                      <Check className="h-3 w-3 text-neon-cyan" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-8 justify-center ${
                  p.highlighted ? "btn-primary" : "btn-ghost"
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center font-mono text-[11px] text-white/40">
          ※価格はLP用のサンプル表示です。表示価格はすべて税込。
        </p>
      </div>
    </section>
  );
}
