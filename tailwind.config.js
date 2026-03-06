/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg-color)",
        text: "var(--text-color)",
        muted: "var(--text-muted)",
        pink: "var(--accent-pink)",
        maroon: "var(--accent-maroon)",
        blue: "var(--accent-blue)",
        red: "var(--accent-red)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
