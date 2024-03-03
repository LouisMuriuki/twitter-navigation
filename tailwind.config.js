/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      dark: "#181818",
      white: "#fff",
    },
    extend: {},
  },
  plugins: [],
};

