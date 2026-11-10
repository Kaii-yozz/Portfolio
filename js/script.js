(function () {
  'use strict';
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.addEventListener('load', function () {
    if (window.lucide) window.lucide.createIcons();
    setTimeout(function () { $('#loader').classList.add('done'); }, 400);
  });

  // Typing animation
  var full = ['Student', 'Organization Enthusiast', 'Futsal Player', 'Gamer'].join(' | ');
  var typed = $('#typed'), i = 0;
  if (reduce) { typed.textContent = full; }
  else (function type() {
    typed.textContent = full.slice(0, ++i);
    if (i < full.length) setTimeout(type, 70);
  })();

  // Mobile menu
  var burger = $('#burger'), menu = $('#menu');
  burger.addEventListener('click', function () {
    burger.setAttribute('aria-expanded', menu.classList.toggle('open'));
  });
  $$('#menu a').forEach(function (a) {
    a.addEventListener('click', function () { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); });
  });

  // Scroll reveal + animated counters
  function count(el) {
    var end = +el.dataset.count, n = 0;
    var t = setInterval(function () { el.textContent = ++n; if (n >= end) clearInterval(t); }, 90);
  }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      $$('[data-count]', e.target).forEach(count);
      io.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  $$('.reveal').forEach(function (el) { io.observe(el); });

  // Active nav link
  var links = $$('#menu a');
  var so = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id); });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(function (s) { so.observe(s); });

  // Achievement filter
  $$('.chip').forEach(function (b) {
    b.addEventListener('click', function () {
      $$('.chip').forEach(function (c) { c.classList.remove('on'); });
      b.classList.add('on');
      $$('#ach .card').forEach(function (c) { c.classList.toggle('hide', b.dataset.f !== 'all' && c.dataset.c !== b.dataset.f); });
    });
  });

  // Back to top
  $('#top').addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });

  // Custom cursor (desktop only)
  var cur = $('.cursor');
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduce) {
    window.addEventListener('mousemove', function (e) { cur.style.left = e.clientX + 'px'; cur.style.top = e.clientY + 'px'; });
    document.addEventListener('mouseover', function (e) { cur.classList.toggle('big', !!e.target.closest('a,button,.card')); });
  }
})();
