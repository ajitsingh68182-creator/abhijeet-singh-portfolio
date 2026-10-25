import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#111111",
        "surface-raised": "#171717",
        "surface-card": "#141414",
        "surface-border": "#222222",
        primary: {
          DEFAULT: "#C6FF3D", // Electric Lime
          hover: "#d4ff5e",
          glow: "rgba(198, 255, 61, 0.25)",
        },
        editorial: {
          white: "#F5F3EF",
          silver: "#A3A3A3",
          muted: "#737373",
          dark: "#262626",
          border: "#1F1F1F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        editorial: "0.2em",
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at center, rgba(198, 255, 61, 0.08) 0%, transparent 70%)",
        "vignette": "radial-gradient(ellipse at center, transparent 40%, rgba(8, 8, 8, 0.8) 100%)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        shimmer: "shimmer 2.5s infinite",
        "pulse-slow": "pulseSlow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
