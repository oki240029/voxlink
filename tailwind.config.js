/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "'Inter'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "'Noto Sans JP'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
        jp: ["'Noto Sans JP'", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#03030a",
          900: "#070716",
          800: "#0b0b22",
          700: "#101034",
        },
        neon: {
          cyan: "#5eead4",
          ice: "#7dd3fc",
          blue: "#60a5fa",
          violet: "#a78bfa",
          purple: "#c084fc",
          pink: "#f0abfc",
          lime: "#a3e635",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(125,211,252,0.25), 0 0 40px rgba(96,165,250,0.25)",
        violet: "0 0 0 1px rgba(167,139,250,0.35), 0 0 60px rgba(167,139,250,0.35)",
        card: "inset 0 1px 0 rgba(255,255,255,0.06), 0 30px 60px -20px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        radial: "radial-gradient(ellipse at top, rgba(120, 90, 255, 0.25), transparent 60%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, #5eead4, #60a5fa, #a78bfa, #f0abfc, #5eead4)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      animation: {
        "spin-slow": "spin 22s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
        scan: "scan 4s linear infinite",
        marquee: "marquee 30s linear infinite",
        "border-rotate": "borderRotate 6s linear infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%,100%": { opacity: "0.7", filter: "blur(40px)" },
          "50%": { opacity: "1", filter: "blur(60px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        borderRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseSoft: {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
