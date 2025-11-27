import type { Config } from "tailwindcss";

// Use class-based dark mode so the theme toggle works regardless of OS preference.
const config: Config = {
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
