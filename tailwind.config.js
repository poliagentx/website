/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./Assets/Js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        myindigo: {
          100: "#d9dbde",
          200: "#b3b7bc",
          300: "#8e929b",
          400: "#686e79",
          500: "#424a58",
          600: "#353b46",
          700: "#282c35",
          800: "#1a1e23",
          900: "#0d0f12",
        },
      },
    },
  },
  plugins: [],
};
