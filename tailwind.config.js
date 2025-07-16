// module.exports = {
//   content: ["./index.html", "./*.html", "./Assets/**/*.{html,js}"],
//  theme: {
//   extend: {
//     colors: {
//       primary: '#6D28D9', // example purple
//       secondary: '#0b132b', // dark blue-gray background
//       lightGray: '#f2f2f2',
//     },
//   },
// },

//   plugins: [],
  
// }
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Ensure your main HTML file is included here
    // If you have other HTML/JS files, add their paths:
    // "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Define your custom keyframes here
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(50px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        // Define utility classes that use your keyframes
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
