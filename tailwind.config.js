/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10172f",
        slate: "#5d6b8a",
        mist: "#f6f8ff",
        brand: {
          50: "#edf3ff",
          100: "#dce7ff",
          200: "#bfd3ff",
          500: "#4378ff",
          600: "#365fe4",
          700: "#2947b2",
        },
        iris: {
          50: "#f4f0ff",
          100: "#e7deff",
          200: "#d3c2ff",
          500: "#7f5cff",
          600: "#6d49f2",
          700: "#5638c8",
        },
        accent: "#7f5cff",
        line: "#dfe5f5",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        panel: "0 30px 90px rgba(30, 41, 82, 0.18)",
        glow: "0 20px 60px rgba(99, 102, 241, 0.24)",
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at 12% 18%, rgba(67,120,255,0.24), transparent 30%), radial-gradient(circle at 82% 14%, rgba(127,92,255,0.20), transparent 26%), radial-gradient(circle at 50% 72%, rgba(87,124,255,0.10), transparent 34%), linear-gradient(180deg, #fbfcff 0%, #eef2ff 45%, #edf2fb 100%)",
      },
    },
  },
  plugins: [],
};
