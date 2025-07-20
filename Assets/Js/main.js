// document.addEventListener('DOMContentLoaded', function () {
//   // Support multiple slideshows by passing IDs and button IDs
//   function setupSlideshow(slideshowId, prevBtnId, nextBtnId) {
//     const slideshow = document.getElementById(slideshowId);
//     if (!slideshow) return;
//     const slides = slideshow.querySelectorAll('.slide');
//     if (!slides.length) return;
//     const prevBtn = document.getElementById(prevBtnId);
//     const nextBtn = document.getElementById(nextBtnId);
//     let current = 0;

//     function showSlide(idx) {
//       slides.forEach((slide, i) => {
//         slide.classList.toggle('block', i === idx);
//         slide.classList.toggle('hidden', i !== idx);
//       });
//     }

//     if (prevBtn) {
//       prevBtn.onclick = function () {
//         current = (current - 1 + slides.length) % slides.length;
//         showSlide(current);
//       };
//     }
//     if (nextBtn) {
//       nextBtn.onclick = function () {
//         current = (current + 1) % slides.length;
//         showSlide(current);
//       };
//     }

//     setInterval(() => {
//       current = (current + 1) % slides.length;
//       showSlide(current);
//     }, 5000);

//     showSlide(current);
//   }

//   // Initialize all slideshows you have
//   setupSlideshow('slideshow', 'prevSlide', 'nextSlide');
//   setupSlideshow('team-slideshow', 'team-prev', 'team-next');
//   setupSlideshow('partners-slideshow', 'partners-prev', 'partners-next');
// });



  // Accordion toggle
  function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const svg = button.querySelector('svg');
    const isOpen = !content.classList.contains('hidden');

    // Collapse all others
    document.querySelectorAll('#accordion-parent .accordion-button').forEach(btn => {
      const otherContent = btn.nextElementSibling;
      const otherSvg = btn.querySelector('svg');
      if (otherContent !== content) {
        otherContent.classList.add('hidden');
        otherSvg.classList.remove('rotate-180');
      }
    });

    // Toggle current
    if (!isOpen) {
      content.classList.remove('hidden');
      svg.classList.add('rotate-180');
    } else {
      content.classList.add('hidden');
      svg.classList.remove('rotate-180');
    }
  }

  // Slideshow setup
  function setupSlideshow(slideshowId, prevBtnId, nextBtnId) {
    const slideshow = document.getElementById(slideshowId);
    if (!slideshow) return;
    const slides = slideshow.querySelectorAll('.slide');
    if (!slides.length) return;
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    let current = 0;

    function showSlide(idx) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('block', i === idx);
        slide.classList.toggle('hidden', i !== idx);
      });
    }

    if (prevBtn) {
      prevBtn.onclick = function () {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
      };
    }

    if (nextBtn) {
      nextBtn.onclick = function () {
        current = (current + 1) % slides.length;
        showSlide(current);
      };
    }

    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 5000);

    showSlide(current);
  }

  // Menu toggle (icons included)
  function toggleMenu() {
    const menu = document.getElementById('menu');
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');

    menu.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }

  // On load
  document.addEventListener('DOMContentLoaded', function () {
    // Scroll restoration
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
    } else {
      const saved = localStorage.getItem('scrollPosition');
      if (saved !== null) window.scrollTo(0, parseInt(saved, 10));
    }
    document.body.classList.add('ready');

    // Menu toggle (simple)
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
      menuToggle.addEventListener('click', function () {
        document.getElementById('menu')?.classList.toggle('hidden');
      });
    }

    // Alert button
    const getStartedBtn = document.getElementById('get-started-btn');
    if (getStartedBtn) {
      getStartedBtn.addEventListener('click', function () {
        alert("Coming soon");
      });
    }

    // Init all slideshows
    setupSlideshow('slideshow', 'prevSlide', 'nextSlide');
    setupSlideshow('team-slideshow', 'team-prev', 'team-next');
    setupSlideshow('partners-slideshow', 'partners-prev', 'partners-next');
  });

  // Save scroll position before unload
  window.addEventListener('beforeunload', function () {
    localStorage.setItem('scrollPosition', window.scrollY);
  });

