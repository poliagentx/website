/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './**/*.html',
    './Assets/Js/**/*.js',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        myorange: { /* ... */ },
        mywhite: { /* ... */ },
        myindigo: { /* ... */ },
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.mywhite.100'),
            a: { color: theme('colors.myorange.400') },
            strong: { color: theme('colors.mywhite.100') },
            h1: { color: theme('colors.mywhite.100') },
            h2: { color: theme('colors.mywhite.100') },
          },
        },
      }),
    },
  },
 
};
