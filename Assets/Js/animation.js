// // animation.js
// $(document).ready(function () {
//     // Smooth scrolling for anchor links
//     $("a[href^='#']").on("click", function (e) {
//         e.preventDefault();
//         const target = $($(this).attr("href"));
//         if (target.length) {
//             $("html, body").animate({
//                 scrollTop: target.offset().top - 60, // Adjust 60px for fixed header height
//             }, 200); // Animation duration in milliseconds
//         }
//     });

//     // Sticky header on scroll
//     $(window).on("scroll", function () {
//         if ($(window).scrollTop() > 50) {
//             $("header").addClass("sticky top-0 bg-white shadow-lg z-50");
//         } else {
//             $("header").removeClass("sticky top-0 bg-white shadow-lg z-50");
//             $("header").addClass("bg-white text-gray-900"); // Ensure original styles are reapplied
//         }
//     });

//     // Intersection Observer for card animations
//     const cards = document.querySelectorAll('.initial-hidden');

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const cardIndex = Array.from(entry.target.parentNode.children).indexOf(entry.target);
//                 let animationClass = 'animate-fade-in';

//                 // Determine animation based on index and section
//                 if (entry.target.closest('#team') || entry.target.closest('#Partners')) {
//                     if (cardIndex % 3 === 0) {
//                         animationClass = 'animate-slide-in-left';
//                     } else if (cardIndex % 3 === 1) {
//                         animationClass = 'animate-fade-in';
//                     } else {
//                         animationClass = 'animate-slide-in-right';
//                     }
//                 } else if (entry.target.closest('#about')) {
//                     if (cardIndex % 4 === 0) { // First card of 'about' section group
//                         animationClass = 'animate-slide-in-left';
//                     } else if (cardIndex % 4 === 3) { // Fourth card of 'about' section group
//                         animationClass = 'animate-slide-in-right';
//                     } else { // Middle cards of 'about' section group
//                         animationClass = 'animate-fade-in';
//                     }
//                 }
                
//                 // Apply animation and stop observing
//                 entry.target.classList.remove('initial-hidden');
//                 entry.target.classList.add(animationClass);
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {
//         threshold: 0.2 // Trigger when 20% of the element is visible
//     });

//     // Observe each card
//     cards.forEach(card => {
//         observer.observe(card);
//     });
// });



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
 