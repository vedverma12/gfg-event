import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          base: "var(--bg-base)",
          surface: "var(--bg-surface)",
          elevated: "var(--bg-elevated)",
        },
        marvel: {
          red: "var(--accent-red)",
          gold: "var(--accent-gold)",
        },
        stone: {
          space: "var(--stone-space)",
          mind: "var(--stone-mind)",
          reality: "var(--stone-reality)",
          power: "var(--stone-power)",
          time: "var(--stone-time)",
          soul: "var(--stone-soul)",
        },
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
