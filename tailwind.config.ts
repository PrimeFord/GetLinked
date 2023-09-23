import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-clash)"],
        montserrat: ["var(--font-montserrat)"],
        unica_one: ["var(--font-unica_one)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        swing: {
          "0%": { width: "0rem" },
          "100%": { width: "4rem" },
        },
        under: {
          "0%": { width: "0rem" },
          "100%": { width: "4rem" },
        },
      },
      animation: {
        swing: "swing 3s ease-in-out infinite",
        under: "swing 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
