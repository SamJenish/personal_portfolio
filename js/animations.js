/* ═══════════════════════════════════════════════════════
   ANIMATIONS.JS — Sam Jenish Portfolio (Redesign)
   No particles. No glow. Clean & minimal.
═══════════════════════════════════════════════════════ */

'use strict';

/* ══════════════ SUBTLE HERO AMBIENT SHAPE ════════════ */
/* A single, very dim, warm orb — not a glow, just warmth */
(function createAmbient() {
    const heroBg = document.querySelector('.hero-bg');
    if (!heroBg) return;

    const orb = document.createElement('div');
    orb.style.cssText = `
    position: absolute;
    width: 560px;
    height: 560px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(212,98,26,0.07) 0%, transparent 70%);
    top: -120px;
    right: -80px;
    pointer-events: none;
    animation: orb-drift 18s ease-in-out infinite alternate;
  `;
    heroBg.appendChild(orb);

    const style = document.createElement('style');
    style.textContent = `
    @keyframes orb-drift {
      from { transform: translate(0, 0); }
      to   { transform: translate(-30px, 30px); }
    }
  `;
    document.head.appendChild(style);
})();

/* ══════════════ PROJECT CARD MOUSE PARALLAX ════════════ */
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 4;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 4;
        card.style.transform = `translateY(-4px) rotateX(${-y}deg) rotateY(${x}deg)`;
        card.style.perspective = '600px';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.perspective = '';
    });
});

/* ══════════════ TIMELINE REVEAL ════════════ */
document.querySelectorAll('.timeline-item').forEach((item, i) => {
    item.classList.add('reveal-up');
    item.style.transitionDelay = `${i * 0.09}s`;
});

/* ══════════════ RE-OBSERVE NEW REVEAL ELEMENTS ════════════ */
(function observeNewReveals() {
    const els = document.querySelectorAll('.reveal-up:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible)');
    if (!els.length) return;

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    els.forEach(el => obs.observe(el));
})();

/* ══════════════ SMOOTH SECTION TRANSITIONS ════════════ */
/* Slightly stagger children of grids when they enter view */
(function staggerGridChildren() {
    const grids = document.querySelectorAll('.projects-grid, .about-cards, .skills-grid');
    grids.forEach(grid => {
        const children = Array.from(grid.children);
        children.forEach((child, i) => {
            if (!child.classList.contains('reveal-up')) {
                child.classList.add('reveal-up');
                child.style.transitionDelay = `${i * 0.06}s`;
            }
        });
    });

    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.reveal-up:not(.visible)').forEach(el => obs.observe(el));
})();
