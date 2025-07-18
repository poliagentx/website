document.addEventListener('DOMContentLoaded', function () {
  // Support multiple slideshows by passing IDs and button IDs
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

  // Initialize all slideshows you have
  setupSlideshow('slideshow', 'prevSlide', 'nextSlide');
  setupSlideshow('team-slideshow', 'team-prev', 'team-next');
  setupSlideshow('partners-slideshow', 'partners-prev', 'partners-next');
});

