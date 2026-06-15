import { motion } from "framer-motion";
import {
  Mic2,
  Brain,
  BookOpenCheck,
  Volume2,
  Cable,
  Captions,
} from "lucide-react";
import { fadeUp, stagger } from "../lib/motion";

const SERVICES = [
  {
    icon: Mic2,
    title: "高精度 音声認識",
    text: "ゲーム中の雑音・銃声・キーボード音を学習したノイズ耐性モデルが、相手の声だけをクリーンに抽出。",
  },
  {
    icon: Brain,
    title: "AI ニューラル翻訳",
    text: "大規模言語モデルがコンテキストを読み、口語・命令調・チームコールも自然な日本語に変換。",
  },
  {
    icon: BookOpenCheck,
    title: "ゲーム用語・スラング辞書",
    text: "FPS / MOBA / MMO / 格ゲー それぞれの用語データベースを内蔵。peek, ult, push, GG, smurf も完璧に。",
  },
  {
    icon: Volume2,
    title: "AI 音声読み上げ",
    text: "翻訳結果をその場で自然な合成音声に変換。VC内・ヘッドセットに直接フィードバック。",
  },
  {
    icon: Cable,
    title: "Discord / 各種VC 連携",
    text: "Discord Bot、Steam VoiceChat、Riot Voice まで対応。ボタン1つで翻訳セッションを開始。",
  },
  {
    icon: Captions,
    title: "配信向け字幕オーバーレイ",
    text: "OBS / Streamlabs 用のオーバーレイ生成。視聴者にも会話を見せて、配信のグローバル化を後押し。",
  },
];

export default function Service() {
  return (
    <section
      id="service"
      className="relative py-28 md:py-36"
    >
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
            What is VOXLINK
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title text-white">
            音を、意味に。意味を、声に。
            <br />
            <span className="text-gradient">All in one AI pipeline.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-white/60 md:text-lg">
            VOXLINK は「音声認識 → 翻訳 → 合成 → 配信」までを単一のレイテンシーで処理。
            <br className="hidden md:block" />
            ゲーマー特化の完全自動ボイス翻訳パイプラインです。
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger(0.08)}
          className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/40 p-6 backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-1 bg-gradient-to-br from-neon-violet/15 via-transparent to-neon-cyan/15 blur-xl" />
              </div>
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-neon-violet/30 to-neon-blue/30 ring-1 ring-inset ring-white/10">
                  <Icon className="h-5 w-5 text-neon-cyan" strokeWidth={2.2} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {text}
              </p>
              <div className="mt-5 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-neon-cyan/60 via-neon-violet/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
