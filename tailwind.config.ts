import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1C2B45",
        primary: "#F6F1E7",
        secondary: "#A89878",
        tertiary: "#C96F2E",
        neutral: "#1C2B45",
        surface: "#243351",
        "on-primary": "#F6F1E7",
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Oswald", "sans-serif"],
      },
      fontSize: {
        display: [
          "4.75rem",
          { lineHeight: "1.1", fontWeight: "700", letterSpacing: "0.02em" },
        ],
      },
      borderRadius: {
        sm: "0px",
        md: "2px",
        lg: "4px",
      },
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "32px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
