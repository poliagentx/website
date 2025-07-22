
  function toggleAccordion1(button) {
    const content = button.nextElementSibling;
    const svg = button.querySelector('svg');
    const isOpen = !content.classList.contains('hidden');

    // Collapse all
    document.querySelectorAll('#accordion-parent > div > div:not(.hidden)').forEach(div => {
      div.classList.add('hidden');
      div.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
    });

    // Expand if not open
    if (!isOpen) {
      content.classList.remove('hidden');
      svg.classList.add('rotate-180');
    }
  }
