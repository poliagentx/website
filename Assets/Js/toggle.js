// toggle.js

   $(document).ready(function () {
  // mobile menu toggle
  $('#menu-toggle').click(function () {
    $('#menu').toggleClass('hidden');
  });
}); 

 function toggleMenu() {
    const menu = document.getElementById('menu');
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');

    menu.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }


// $(document).ready(function () {
//   $('#menu-toggle').click(function () {
//     $('#menu').toggleClass('hidden');
//     $('#menu-open-icon').toggleClass('hidden');
//     $('#menu-close-icon').toggleClass('hidden');
//   });
// });

