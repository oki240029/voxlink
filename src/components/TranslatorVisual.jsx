import { motion } from "framer-motion";
import { Languages, Mic, Volume2, Waves } from "lucide-react";

export default function TranslatorVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* Glow halo */}
      <div className="pointer-events-none absolute -inset-10 -z-10 animate-glow rounded-[3rem] bg-gradient-to-tr from-neon-violet/40 via-neon-blue/30 to-neon-cyan/40 blur-3xl" />

      {/* Rotating conic ring */}
      <div className="pointer-events-none absolute -inset-4 -z-10 overflow-hidden rounded-[2.5rem]">
        <div className="absolute inset-0 animate-spin-slow opacity-40 [background-image:conic-gradient(from_180deg_at_50%_50%,#5eead4,#60a5fa,#a78bfa,#f0abfc,#5eead4)]" />
        <div className="absolute inset-[2px] rounded-[2.4rem] bg-ink-950" />
      </div>

      <div className="neon-border relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-ink-900/90 to-ink-950/90 p-6 shadow-card backdrop-blur-xl">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            VOXLINK · LIVE
          </div>
        </div>

        {/* Caller A (EN) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-5 flex items-start gap-3"
        >
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-blue text-xs font-bold text-ink-900">
            EN
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs text-white/50">
              <span>Alex · United Kingdom</span>
              <span className="ml-auto font-mono text-[10px] text-neon-cyan/80">
                32ms
              </span>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-white/90">
              “Cover B site, I'm flanking long. Push on three.”
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              {[6, 14, 9, 18, 11, 22, 8, 16, 12].map((h, i) => (
                <span
                  key={i}
                  style={{ height: h }}
                  className="w-[3px] rounded-full bg-neon-cyan/70"
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Arrow / pipeline */}
        <div className="my-4 flex items-center gap-3 pl-12">
          <span className="h-px flex-1 bg-gradient-to-r from-neon-cyan/60 to-neon-violet/60" />
          <span className="badge !border-white/15 !bg-ink-900/70">
            <Languages className="h-3.5 w-3.5 text-neon-violet" />
            <span className="font-mono">AI Translate · EN→JP</span>
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-neon-violet/60 to-neon-cyan/60" />
        </div>

        {/* Caller B (JP) translated */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-start gap-3"
        >
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-violet to-neon-pink text-xs font-bold text-ink-900">
            JP
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 text-xs text-white/50">
              <span className="text-gradient-violet font-semibold">
                翻訳出力（あなた向け）
              </span>
              <span className="ml-auto font-mono text-[10px] text-neon-violet/90">
                FPS DICT
              </span>
            </div>
            <p className="mt-1 text-base font-semibold leading-relaxed text-white">
              「B サイト 守って。俺はロング側から
              <span className="text-gradient">フランク</span>。3カウントで
              <span className="text-gradient">プッシュ</span>。」
            </p>
            <div className="mt-2 flex items-center gap-2 text-[11px] text-white/40">
              <Volume2 className="h-3.5 w-3.5 text-neon-cyan" />
              読み上げ ON · 字幕オーバーレイ ON
            </div>
          </div>
        </motion.div>

        {/* Bottom controls */}
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-ink-950/60 p-3">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-neon-violet to-neon-blue text-white shadow-glow">
              <Mic className="h-4 w-4" />
            </span>
            <div className="text-xs leading-tight">
              <p className="font-semibold text-white/90">Discord Voice</p>
              <p className="text-white/50">#ranked-eu / 5 users</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-white/50">
            <Waves className="h-4 w-4 text-neon-cyan" />
            <span className="font-mono">42ms latency</span>
          </div>
        </div>

        {/* Scan line */}
        <div className="pointer-events-none absolute inset-x-6 top-0 h-24 overflow-hidden opacity-30">
          <div className="absolute inset-x-0 h-24 animate-scan bg-gradient-to-b from-transparent via-neon-cyan/40 to-transparent" />
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 -top-6 hidden rounded-2xl border border-white/10 bg-ink-900/80 px-3 py-2 backdrop-blur-md sm:block"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neon-cyan">
          GPU · Edge Inference
        </p>
        <p className="mt-0.5 text-sm font-semibold text-white">12 langs ready</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-white/10 bg-ink-900/80 px-3 py-2 backdrop-blur-md sm:block"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neon-violet">
          AI Dictionary
        </p>
        <p className="mt-0.5 text-sm font-semibold text-white">
          FPS · MOBA · MMO
        </p>
      </motion.div>
    </div>
  );
}
