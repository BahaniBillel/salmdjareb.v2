/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    colors: {
      bluegreen: "#252525",
      goldenBeige: "#c7a663",
      beige: "#fbd1a2",
      white: "#ffffff",
      blackgrey: "#1f2937",
      gray: "#9ca3af",
      lightGray: "#e5e7eb",
      transparent: "transparent",
      lightOrange: "#808080",
    },
  },
};
