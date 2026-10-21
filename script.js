// Physio Solutions - bespoke redesign interactions
(function () {
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reveal-on-scroll
  var els = document.querySelectorAll('.card, .review, .about-media, .about-copy, .section-head, .contact-form');
  if ('IntersectionObserver' in window) {
    els.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(22px)';
      el.style.transition = 'opacity .55s ease, transform .55s ease';
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  // Header shadow on scroll
  var header = document.getElementById('siteHeader');
  window.addEventListener('scroll', function () {
    if (header) header.style.boxShadow = window.scrollY > 20 ? '0 8px 24px rgba(90,53,111,.10)' : 'none';
  });
})();

function handleSubmit(e) {
  e.preventDefault();
  var note = document.getElementById('formNote');
  if (note) note.hidden = false;
  e.target.reset();
  return false;
}
