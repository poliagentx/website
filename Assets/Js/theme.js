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
