import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#064EA4",
        secondary: "#0F437F",
        tertiary: "#1E3D60",
        success: "#e1edfb",
        textColor: "#62778f",
        btnhover: "#becad7",
        btnbg: "#E7EAEE",
        info: "#F99D77",
        warning: "#FCDF69",
      },
      fontFamily: {
        newsreader: ["Newsreader", "serif"],
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
