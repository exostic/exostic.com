/* Exostic — minimal behaviour: header shadow on scroll, mobile menu, print button. */
(function () {
  var root = document.documentElement;
  var header = document.getElementById('header');

  function onScroll() {
    if (!header) return;
    header.classList.toggle('scroll', window.scrollY > 60);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  var toggle = document.querySelector('[data-toggle-menu]');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = root.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    var nav = document.querySelector('#header nav');
    if (nav) {
      nav.addEventListener('click', function () {
        root.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    }
  }

  window.addEventListener('pageshow', function () {
    root.classList.remove('menu-open');
  });

  var printButtons = document.querySelectorAll('.print-window');
  for (var i = 0; i < printButtons.length; i++) {
    printButtons[i].addEventListener('click', function () {
      window.print();
    });
  }
})();
