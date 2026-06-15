import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Languages, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { hash: "problem", label: "課題" },
  { hash: "service", label: "サービス" },
  { hash: "features", label: "特徴" },
  { hash: "how", label: "使い方" },
  { hash: "pricing", label: "料金" },
  { hash: "business", label: "事業性" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const buildHref = (hash) => (isHome ? `#${hash}` : `/#${hash}`);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-lg bg-gradient-to-br from-neon-violet via-neon-blue to-neon-cyan shadow-glow">
            <Languages className="h-4 w-4 text-white" strokeWidth={2.5} />
            <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            VOX<span className="text-gradient">LINK</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.hash}
              href={buildHref(l.hash)}
              className="group relative text-sm text-white/70 transition hover:text-white"
            >
              {l.label}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-neon-cyan to-neon-violet transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={buildHref("cta")} className="btn-ghost">
            ログイン
          </a>
          <a href={buildHref("cta")} className="btn-primary">
            無料で始める
          </a>
        </div>

        <button
          aria-label="menu"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 backdrop-blur-xl md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.hash}
                href={buildHref(l.hash)}
                className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={buildHref("cta")}
              className="btn-primary mt-3 justify-center"
              onClick={() => setOpen(false)}
            >
              無料で始める
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
