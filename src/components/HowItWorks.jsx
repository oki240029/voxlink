import { motion } from "framer-motion";
import { PlugZap, AudioLines, Languages, MessagesSquare } from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";

const STEPS = [
  {
    icon: PlugZap,
    step: "01",
    title: "Discord または ゲームVCに接続",
    text: "VOXLINK アプリを起動して、使用中のボイスチャットを選択。Bot招待 or デスクトップアプリの2通り。",
  },
  {
    icon: AudioLines,
    step: "02",
    title: "相手の音声をAIが認識",
    text: "ノイズキャンセル付き高精度ASRが、ゲーム音と人の声を分離。話者ごとに自動でラベリング。",
  },
  {
    icon: Languages,
    step: "03",
    title: "翻訳して字幕・音声で出力",
    text: "ゲーム用語辞書を使った翻訳で、自然な言い回しに変換。テキスト字幕・合成音声どちらでも出力。",
  },
  {
    icon: MessagesSquare,
    step: "04",
    title: "海外プレイヤーと自然に会話",
    text: "あなたが話した日本語も英語などにリアルタイム翻訳。双方向で、まるで同じ言語のように会話が成立。",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-28 md:py-36">
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
            How it works
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title text-white">
            最短 <span className="text-gradient">60秒</span>で、
            世界が会話相手になる。
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-white/60 md:text-lg">
            複雑な設定は不要。たった4ステップで、海外プレイヤーとのVCがあなたの日本語で成立します。
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger(0.12)}
          className="relative mt-20"
        >
          {/* connector line */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-neon-violet/40 to-transparent lg:block" />

          <div className="grid gap-6 lg:grid-cols-2">
            {STEPS.map(({ icon: Icon, ...s }, i) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className={`relative ${
                  i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:mt-24"
                }`}
              >
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/50 p-7 backdrop-blur-md transition-shadow duration-500 hover:shadow-violet ${
                    i % 2 === 0 ? "" : ""
                  }`}
                >
                  <div
                    className={`flex items-center gap-4 ${
                      i % 2 === 0 ? "lg:justify-end" : ""
                    }`}
                  >
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-neon-violet to-neon-cyan text-ink-900 shadow-glow ${
                        i % 2 === 0 ? "lg:order-2" : ""
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.5} />
                    </div>
                    <span className="font-mono text-3xl font-bold text-white/20">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {s.text}
                  </p>

                  {/* shimmer line */}
                  <div className="mt-6 h-px overflow-hidden">
                    <div className="h-full w-full animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.6),transparent)] bg-[length:200%_100%]" />
                  </div>
                </div>

                {/* node on the center line */}
                <span className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-cyan shadow-glow lg:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
