/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      bluegreen: "#0d98ba",
      beige: "#fbd1a2",
      white: "#ffffff",
      blackgrey: "#1f2937",
      gray: "#9ca3af",
      lightGray: "#e5e7eb",
      transparent: "transparent",
      lightOrange: "#fff7ed",
    },
  },
};
