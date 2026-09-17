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
        brand: {
          blue: "#3b82f6",
          darkBlue: "#1a73e8",
          cyan: "#00d2ff",
          purple: "#9333ea",
          violet: "#8b5cf6",
          bgDark: "#0b0f1a",
          bgDarker: "#080a0f",
          slateDark: "#0f172a",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "float-bg": "floatBg 15s infinite alternate ease-in-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        floatBg: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(40px, -40px) scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
