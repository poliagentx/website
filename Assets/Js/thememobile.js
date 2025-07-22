document.addEventListener('DOMContentLoaded', () => {
  
    const themeToggle1 = document.getElementById('theme-toggle-mobile');
    const sunIcon = document.getElementById('sun-icon-mobile');
    const moonIcon = document.getElementById('moon-icon-mobile');
    const htmlElement = document.documentElement; // Represents the <html> tag

    // Function to set theme
    const setTheme1 = (theme1) => {
        if (theme1 === 'dark') {
            htmlElement.classList.add('dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            htmlElement.classList.remove('dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
        localStorage.setItem('theme', theme1);
        console.log(`Theme set to: ${theme1}`); // For debugging
    };

    // Initialize theme on page load
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme1(savedTheme);
    } else if (prefersDark) {
        setTheme1('dark');
    } else {
        setTheme1('light'); // Default to light if no preference
    }

    // Add event listener for button click
    if (themeToggle1) {
        themeToggle1.addEventListener('click', () => {
            const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme1(newTheme);
        });
    } else {
        console.error('Theme toggle button not found!'); // For debugging
    }

    // Also include the toggleMenu function for the mobile menu
    function toggleMenu1() {
        const menu1 = document.getElementById('menu');
        const openIcon1 = document.getElementById('menu-open-mobile');
        const closeIcon1 = document.getElementById('menu-close-mobile');

        if (menu1 && openIcon1 && closeIcon1) {
            menu1.classList.toggle('hidden');
            openIcon1.classList.toggle('hidden');
            closeIcon1.classList.toggle('hidden');
            console.log('Mobile menu toggled.'); // For debugging
        } else {
            console.error('Mobile menu elements not found!'); // For debugging
        }
    }
    // Make toggleMenu globally accessible if it's called from onclick in HTML
    window.toggleMenu1 = toggleMenu1;

    // And the toggleAccordion function
    function toggleAccordion2(button) {
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
    window.toggleAccordion2 = toggleAccordion2;
});
