/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fef3c7",
        black: "#171717",
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1720px",
      },
    },
  },
  plugins: [],
};
