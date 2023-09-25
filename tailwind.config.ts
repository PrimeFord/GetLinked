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
        fadeup: {
          "0%,50%": { opacity: "0", transform: "translateY(100%)" },
          "60%,100%": { opacity: "1", transform: "translateY(100%)" },
        },
        under: {
          "0%": { width: "0rem" },
          "100%": { width: "4rem" },
        },
      },
      animation: {
        fadeup: "swing 1s ease-in-out finite",
        under: "swing 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
