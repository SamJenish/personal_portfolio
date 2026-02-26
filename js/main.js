/* ═══════════════════════════════════════════════
   MAIN JS — Sam Jenish Portfolio
   ═══════════════════════════════════════════════ */

'use strict';

/* ── DOM Refs ── */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');
const backToTop = document.getElementById('backToTop');
const cursorGlow = document.getElementById('cursorGlow');
const contactForm = document.getElementById('contactForm');
const formStatus  = document.getElementById('formStatus');

/* ══════════════════ CURSOR GLOW ══════════════════ */
let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;
  if (cursorGlow) {
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top  = glowY + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

/* ══════════════════ NAVBAR ══════════════════ */
function updateNavbar() {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

/* ══════════════════ HAMBURGER ══════════════════ */
hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  navMenu.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu when nav link clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});

/* ══════════════════ ACTIVE NAV LINK ══════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ══════════════════ BACK TO TOP ══════════════════ */
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ══════════════════ TYPING EFFECT ══════════════════ */
const typedEl = document.getElementById('typedText');
const phrases = [
  'scalable web apps',
  'full-stack solutions',
  'clean, modern UIs',
  'RESTful APIs',
  'pixel-perfect designs',
  'real-world products',
];

let phraseIdx = 0;
let charIdx   = 0;
let deleting  = false;
let typingTimer;

function typeWriter() {
  const phrase = phrases[phraseIdx];

  if (!typedEl) return;

  if (!deleting) {
    typedEl.textContent = phrase.slice(0, charIdx + 1);
    charIdx++;
    if (charIdx === phrase.length) {
      deleting = true;
      typingTimer = setTimeout(typeWriter, 1800);
      return;
    }
  } else {
    typedEl.textContent = phrase.slice(0, charIdx - 1);
    charIdx--;
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
    }
  }
  typingTimer = setTimeout(typeWriter, deleting ? 50 : 90);
}

typeWriter();

/* ══════════════════ COUNTER ANIMATION ══════════════════ */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutExpo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }

  requestAnimationFrame(update);
}

const counterEls = document.querySelectorAll('.stat-number[data-target]');
let countersStarted = false;

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersStarted) {
      countersStarted = true;
      counterEls.forEach(el => animateCounter(el));
    }
  });
}, { threshold: 0.5 });

counterEls.forEach(el => counterObserver.observe(el));

/* ══════════════════ SCROLL REVEAL ══════════════════ */
const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ══════════════════ SKILL BARS ══════════════════ */
function animateSkillBars(panel) {
  panel.querySelectorAll('.chip-fill').forEach((bar, i) => {
    setTimeout(() => {
      bar.classList.add('animated');
      bar.style.width = bar.style.getPropertyValue('--w') || getComputedStyle(bar).getPropertyValue('--w');
    }, i * 60);
  });
}

/* ══════════════════ SKILLS TABS ══════════════════ */
const tabs   = document.querySelectorAll('.skill-cat');
const panels = document.querySelectorAll('.skills-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    const panel = document.getElementById(`tab-${target}`);
    panel.classList.add('active');

    // Reset and re-animate bars
    panel.querySelectorAll('.chip-fill').forEach(b => b.classList.remove('animated'));
    setTimeout(() => animateSkillBars(panel), 50);
  });
});

// Animate first tab on load when in view
const skillsSection = document.getElementById('skills');
let skillsAnimated = false;

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !skillsAnimated) {
      skillsAnimated = true;
      const activePanel = document.querySelector('.skills-panel.active');
      if (activePanel) animateSkillBars(activePanel);
    }
  });
}, { threshold: 0.2 });

if (skillsSection) skillsObserver.observe(skillsSection);

/* ══════════════════ CONTACT FORM ══════════════════ */
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');

    // Validate
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const fname = document.getElementById('fname').value;

    if (!fname.trim() || !email.trim() || !message.trim()) {
      showStatus('Please fill in all required fields.', 'error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    // Loading state
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    submitBtn.classList.add('btn-loading');
    formStatus.textContent = '';

    // Simulate send (replace with actual fetch to backend)
    await new Promise(r => setTimeout(r, 1500));

    // Success
    submitBtn.disabled = false;
    btnText.textContent = 'Send Message';
    submitBtn.classList.remove('btn-loading');
    contactForm.reset();
    showStatus('🎉 Message sent! I\'ll get back to you soon.', 'success');
  });
}

function showStatus(msg, type) {
  formStatus.textContent = msg;
  formStatus.className = `form-status ${type}`;
  setTimeout(() => {
    formStatus.textContent = '';
    formStatus.className = 'form-status';
  }, 5000);
}

/* ══════════════════ SMOOTH ANCHOR SCROLL ══════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ══════════════════ HERO CARD TILT ══════════════════ */
const heroCard = document.querySelector('.hero-card');
if (heroCard) {
  heroCard.addEventListener('mousemove', (e) => {
    const rect = heroCard.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    heroCard.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-8px)`;
  });
  heroCard.addEventListener('mouseleave', () => {
    heroCard.style.transform = '';
  });
}

/* ══════════════════ INIT ══════════════════ */
console.log('%cHey there! 👋 I see you checking the console — smart!', 'color:#6366f1;font-size:14px;font-weight:bold;');
console.log('%cBuilt with ❤️ by Sam Jenish C', 'color:#06b6d4;font-size:12px;');
