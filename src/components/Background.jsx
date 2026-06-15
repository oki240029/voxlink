export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base color */}
      <div className="absolute inset-0 bg-ink-950" />

      {/* Conic / radial aurora */}
      <div className="aurora-a absolute -top-1/3 left-1/2 h-[80vmax] w-[80vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.35),rgba(6,182,212,0.18)_45%,transparent_70%)] blur-3xl" />
      <div className="aurora-b absolute -bottom-1/3 right-0 h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.25),rgba(99,102,241,0.18)_45%,transparent_70%)] blur-3xl" />

      {/* Grid mesh */}
      <div className="absolute inset-0 bg-grid bg-grid opacity-[0.35] mask-radial" />

      {/* Scanlines glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon-violet/70 to-transparent" />

      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay" />
    </div>
  );
}
