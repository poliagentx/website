

    window.addEventListener('DOMContentLoaded', function () {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
      } else {
        const saved = localStorage.getItem('scrollPosition');
        if (saved !== null) window.scrollTo(0, parseInt(saved, 10));
      }
      document.body.classList.add('ready');
    });
  
    window.addEventListener('beforeunload', function () {
      localStorage.setItem('scrollPosition', window.scrollY);
    });
 