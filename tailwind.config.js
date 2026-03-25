/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a1a1a",
        slate: "#5a5550",
        mist: "#f5f2ed",
        paper: "#ede9e2",
        line: "#1a1a1a",
        signal: "#c0392b",
        brand: {
          50: "#ede9e2",
          100: "#e8e4dd",
          200: "#d8d1c7",
          500: "#b0aa9f",
          600: "#8e877c",
          700: "#5a5550",
        },
        iris: {
          50: "#f2efe9",
          100: "#e8e4dd",
          200: "#d6d0c6",
          500: "#8f8678",
          600: "#736b5f",
          700: "#4f4a44",
        },
        accent: "#c0392b",
      },
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        body: ["Barlow Condensed", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        panel: "0 24px 60px rgba(26, 26, 26, 0.08)",
        glow: "0 0 0 rgba(0, 0, 0, 0)",
      },
    },
  },
  plugins: [],
};
