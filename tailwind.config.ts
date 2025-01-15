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
        "myshadow": "box-shadow: 0px 10px 7px 0px rgba(61,60,76,1)",
        "myshahero": "inset 0px 0px 105px 55px rgba(0,0,0,0.75)",
        "myfade": "linear-gradient(90deg, #1e293b, transparent 30%, transparent 70%, #1e293b)"
      }
    },
  },
  plugins: [],
  darkMode: "selector",
} satisfies Config;
