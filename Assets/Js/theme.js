// const themeToggleBtn = document.getElementById('theme-toggle');
//         const sunIcon = document.getElementById('sun-icon');
//         const moonIcon = document.getElementById('moon-icon');
//         const htmlElement = document.documentElement; // This is the <html> tag

//         // Function to set theme based on preference or local storage
//         function setTheme(theme) {
//             if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//                 htmlElement.classList.add('dark');
//                 moonIcon.classList.add('hidden');
//                 sunIcon.classList.remove('hidden');
//             } else {
//                 htmlElement.classList.remove('dark');
//                 sunIcon.classList.add('hidden');
//                 moonIcon.classList.remove('hidden');
//             }
//             localStorage.setItem('theme', theme); // Save preference
//         }

//         // Initialize theme on page load
//         document.addEventListener('DOMContentLoaded', () => {
//             const savedTheme = localStorage.getItem('theme');
//             setTheme(savedTheme); // Set theme from localStorage or system preference
//         });

//         // Toggle theme on button click
//         themeToggleBtn.addEventListener('click', () => {
//             if (htmlElement.classList.contains('dark')) {
//                 setTheme('light');
//             } else {
//                 setTheme('dark');
//             }
//         });

//         // Mobile menu toggle (from your previous code)
//         function toggleMenu() {
//             const menu = document.getElementById('menu');
//             const menuOpenIcon = document.getElementById('menu-open-icon');
//             const menuCloseIcon = document.getElementById('menu-close-icon');

//             menu.classList.toggle('hidden');
//             menuOpenIcon.classList.toggle('hidden');
//             menuCloseIcon.classList.toggle('hidden');
//         }

// // Assets/Js/theme.js

// document.addEventListener('DOMContentLoaded', () => {
//   const themeToggle = document.getElementById('theme-toggle');
//   const sunIcon = document.getElementById('sun-icon');
//   const moonIcon = document.getElementById('moon-icon');
//   const htmlElement = document.documentElement; // Represents the <html> tag

//   // Check user's preference from localStorage or system setting
//   const savedTheme = localStorage.getItem('theme');
//   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//   // Apply initial theme
//   if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
//     htmlElement.classList.add('dark');
//     sunIcon.classList.remove('hidden');
//     moonIcon.classList.add('hidden');
//   } else {
//     htmlElement.classList.remove('dark');
//     sunIcon.classList.add('hidden');
//     moonIcon.classList.remove('hidden');
//   }

//   // Add event listener for theme toggle
//   themeToggle.addEventListener('click', () => {
//     if (htmlElement.classList.contains('dark')) {
//       // Switch to light mode
//       htmlElement.classList.remove('dark');
//       sunIcon.classList.add('hidden');
//       moonIcon.classList.remove('hidden');
//       localStorage.setItem('theme', 'light');
//     } else {
//       // Switch to dark mode
//       htmlElement.classList.add('dark');
//       sunIcon.classList.remove('hidden');
//       moonIcon.classList.add('hidden');
//       localStorage.setItem('theme', 'dark');
//     }
//   });
// });

// Ensure the mobile menu toggle function is globally accessible if needed elsewhere
// This function was provided in your previous context and is assumed to be in Assets/Js/toggle.js or similar
// function toggleMenu() {
//     const menu = document.getElementById('menu');
//     const menuOpenIcon = document.getElementById('menu-open-icon');
//     const menuCloseIcon = document.getElementById('menu-close-icon');

//     menu.classList.toggle('hidden');
//     menuOpenIcon.classList.toggle('hidden');
//     menuCloseIcon.classList.toggle('hidden');
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const themeToggleBtn = document.getElementById('theme-toggle');
//     const sunIcon = document.getElementById('sun-icon');
//     const moonIcon = document.getElementById('moon-icon');
//     const htmlElement = document.documentElement; // <html>

//     // Set theme based on preference
//     function setTheme(theme, persist = true) {
//         const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//         const isDark = htmlElement.classList.contains('dark');

//         if (theme === 'dark' || (!theme && prefersDark)) {
//             if (!isDark) {
//                 htmlElement.classList.add('dark');
//                 moonIcon?.classList.add('hidden');
//                 sunIcon?.classList.remove('hidden');
//                 if (persist) localStorage.setItem('theme', 'dark');
//             }
//         } else {
//             if (isDark) {
//                 htmlElement.classList.remove('dark');
//                 sunIcon?.classList.add('hidden');
//                 moonIcon?.classList.remove('hidden');
//                 if (persist) localStorage.setItem('theme', 'light');
//             }
//         }
//     }

//     // Initialize theme
//     const savedTheme = localStorage.getItem('theme');
//     setTheme(savedTheme, false);

//     // Respond to system preference changes (if no saved theme)
//     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
//         if (!localStorage.getItem('theme')) {
//             setTheme(null, false);
//         }
//     });

//     // Theme toggle button
//     if (themeToggleBtn) {
//         themeToggleBtn.addEventListener('click', () => {
//             const newTheme = htmlElement.classList.contains('dark') ? 'light' : 'dark';
//             setTheme(newTheme);
//         });
//     }

//     // Mobile menu toggle function
//     window.toggleMenu = function () {
//         const menu = document.getElementById('menu');
//         const menuOpenIcon = document.getElementById('menu-open-icon');
//         const menuCloseIcon = document.getElementById('menu-close-icon');

//         if (menu && menuOpenIcon && menuCloseIcon) {
//             menu.classList.toggle('hidden');
//             menuOpenIcon.classList.toggle('hidden');
//             menuCloseIcon.classList.toggle('hidden');
//         }
//     };
// });
// document.addEventListener('DOMContentLoaded', () => {
//     const themeToggle = document.getElementById('theme-toggle');
//     const sunIcon = document.getElementById('sun-icon');
//     const moonIcon = document.getElementById('moon-icon');
//     const htmlElement = document.documentElement;

//     // Function to set theme
//     const setTheme = (theme) => {
//         if (theme === 'dark') {
//             htmlElement.classList.add('dark');
//             sunIcon.classList.remove('hidden');
//             moonIcon.classList.add('hidden');
//         } else {
//             htmlElement.classList.remove('dark');
//             sunIcon.classList.add('hidden');
//             moonIcon.classList.remove('hidden');
//         }
//         localStorage.setItem('theme', theme);
//     };

//     // Initialize theme on page load
//     const savedTheme = localStorage.getItem('theme');
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//     if (savedTheme) {
//         setTheme(savedTheme);
//     } else if (prefersDark) {
//         setTheme('dark');
//     } else {
//         setTheme('light'); // Default to light if no preference
//     }

//     // Add event listener for button click
//     if (themeToggle) {
//         themeToggle.addEventListener('click', () => {
//             const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
//             const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//             setTheme(newTheme);
//         });
//     }
// });
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const htmlElement = document.documentElement; // Represents the <html> tag

    // Function to set theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            htmlElement.classList.remove('dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
        localStorage.setItem('theme', theme);
        console.log(`Theme set to: ${theme}`); // For debugging
    };

    // Initialize theme on page load
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    } else {
        setTheme('light'); // Default to light if no preference
    }

    // Add event listener for button click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    } else {
        console.error('Theme toggle button not found!'); // For debugging
    }

    // Also include the toggleMenu function for the mobile menu
    function toggleMenu() {
        const menu = document.getElementById('menu');
        const openIcon = document.getElementById('menu-open-icon');
        const closeIcon = document.getElementById('menu-close-icon');

        if (menu && openIcon && closeIcon) {
            menu.classList.toggle('hidden');
            openIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
            console.log('Mobile menu toggled.'); // For debugging
        } else {
            console.error('Mobile menu elements not found!'); // For debugging
        }
    }
    // Make toggleMenu globally accessible if it's called from onclick in HTML
    window.toggleMenu = toggleMenu;

    // And the toggleAccordion function
    function toggleAccordion(button) {
        const content = button.nextElementSibling;
        const icon = button.querySelector('.icon');

        if (content && icon) {
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-45'); // Assuming rotate-45 is defined in your CSS/Tailwind
            console.log('Accordion toggled.'); // For debugging
        } else {
            console.error('Accordion content or icon not found!'); // For debugging
        }
    }
    // Make toggleAccordion globally accessible if it's called from onclick in HTML
    window.toggleAccordion = toggleAccordion;
});