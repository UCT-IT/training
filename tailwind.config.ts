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
    },
  },
  plugins: [],
};
export default config;
