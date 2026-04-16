/* ============================================================
   ENNECI GROUP — Shared JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Custom cursor ---------------------------------------- */
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    setTimeout(() => {
      ring.style.left = e.clientX + 'px';
      ring.style.top  = e.clientY + 'px';
    }, 60);
  });

  document.querySelectorAll('a, button, [data-hover]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.transform    = 'translate(-50%, -50%) scale(1.6)';
      ring.style.borderColor  = 'rgba(196,24,122,0.7)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.transform    = 'translate(-50%, -50%) scale(1)';
      ring.style.borderColor  = 'rgba(196,24,122,0.5)';
    });
  });

  /* --- Nav scroll state ------------------------------------- */
  const nav = document.querySelector('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Reveal on scroll ------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

});
