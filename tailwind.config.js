/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./*.html",
    "./Assets/Js/**/*.js",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        myorange: {
          100: "#f5e7cc",
          200: "#eacf99",
          300: "#e0b766",
          400: "#d59f33",
          500: "#cb8700",
          600: "#a26c00",
          700: "#7a5100",
          800: "#513600",
          900: "#291b00",
        },
        mywhite: {
          100: "#fcfcfc",
          200: "#fafafa",
          300: "#f7f7f7",
          400: "#f5f5f5",
          500: "#f2f2f2",
          600: "#c2c2c2",
          700: "#919191",
          800: "#616161",
          900: "#303030",
        },
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
