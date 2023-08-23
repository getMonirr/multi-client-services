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
        "multi-primary": "#4267B2",
        // "multi-secondary": "#f76331",
        "multi-secondary": "#226CE5",
        "multi-bg": "#EBF2FF",
        "multi-title": "#202C40",
        "multi-paragraph": "#2D3D59",
        "multi-icon-bg": "#D6E6FF",
        "multi-hover": "#1B56B7",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
