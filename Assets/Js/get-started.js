
  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const getStartedBtn = document.getElementById('get-started-btn');

    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });

    getStartedBtn.addEventListener('click', function () {
      alert("Coming soon");
    });
  });
