/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F7FBFF",
        linen: "#F1E8DA",
        ink: "#111827",
        columbia: "#4C8FD8",
        navy: "#0B1F3A",
        burgundy: "#7A1538",
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
        },
      },
      fontFamily: {
        sans: ["Inter", "PingFang SC", "Microsoft YaHei", "system-ui", "sans-serif"],
        display: ["'Cormorant Garamond'", "Inter", "serif"],
        hand: ["'Caveat'", "'Segoe Script'", "cursive"],
        masthead: ["'UnifrakturCook'", "'Cormorant Garamond'", "serif"],
        script: ["'Great Vibes'", "'Caveat'", "cursive"],
      },
    },
  },
  plugins: [],
};
