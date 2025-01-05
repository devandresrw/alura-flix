import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "allura": ["Allura", "serif"],
        "roboto": ["Roboto", "serif"],
      },
      colors: {
        "mybgwhite": "#f3f3f3",
        "mybgblack": "#3d3c4c"
      },
      boxShadow: {
        "myshadow": "box-shadow: 0px 10px 7px 0px rgba(61,60,76,1)"

      }
    },
  },
  plugins: [],
  darkMode: "selector",
} satisfies Config;
