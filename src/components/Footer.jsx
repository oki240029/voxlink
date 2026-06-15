import { Link } from "react-router-dom";
import { Languages, Send, Code2, Video } from "lucide-react";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "サービス", to: "/#service" },
      { label: "特徴", to: "/#features" },
      { label: "使い方", to: "/#how" },
      { label: "料金", to: "/#pricing" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "事業性", to: "/#business" },
      { label: "プレスキット", to: "/" },
      { label: "投資家の方へ", to: "/" },
      { label: "採用情報", to: "/" },
    ],
  },
  {
    title: "Legal & Support",
    links: [
      { label: "利用規約", to: "/terms" },
      { label: "プライバシーポリシー", to: "/privacy" },
      { label: "特定商取引法に基づく表記", to: "/commerce" },
      { label: "お問い合わせ", to: "/#cta" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950/80 py-14 backdrop-blur-md">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-lg bg-gradient-to-br from-neon-violet via-neon-blue to-neon-cyan shadow-glow">
                <Languages className="h-4 w-4 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                VOX<span className="text-gradient">LINK</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              ゲーマーのためのリアルタイム音声翻訳プラットフォーム。
              <br />
              言語の壁を、AIで0.06秒に。
            </p>

            <div className="mt-6 flex items-center gap-2">
              {[Send, Code2, Video].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                {col.title}
              </p>
              <ul className="space-y-2.5 text-sm text-white/70">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.to.startsWith("/#") ? (
                      <a href={l.to} className="transition hover:text-white">
                        {l.label}
                      </a>
                    ) : (
                      <Link to={l.to} className="transition hover:text-white">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} VOXLINK Inc. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.2em]">
            built with AI · made for gamers
          </p>
        </div>
      </div>
    </footer>
  );
}
