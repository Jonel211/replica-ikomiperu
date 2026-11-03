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
        ikomi: {
          blue: {
            DEFAULT: "#1e3a8a",
            header: "#1f4287",
            dark: "#172554",
            light: "#3b82f6",
          },
          red: {
            DEFAULT: "#dc2626",
            dark: "#b91c1c",
            light: "#ef4444",
          },
          gold: "#f59e0b",
          dark: "#121212",
          cardDark: "#1f2229",
        },
      },
    },
  },
  plugins: [],
};
export default config;
