// ===== THEME TOGGLE =====
const html = document.documentElement;

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Init theme: stored preference → system
const storedTheme = localStorage.getItem('theme');
applyTheme(storedTheme || getSystemTheme());

document.getElementById('themeToggle').addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ===== STICKY NAV =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    });
  });
}

// ===== SCROLL FADE-IN =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

const targets = document.querySelectorAll(
  '.fade-in, .timeline-entry, .company-entry, .journal-card, .skill-group, .edu-entry'
);

targets.forEach((el, i) => {
  if (
    el.closest('.timeline') ||
    el.closest('.journal-grid') ||
    el.closest('.skills-grid') ||
    el.closest('.edu-list')
  ) {
    el.style.transitionDelay = `${i * 0.04}s`;
  }
  observer.observe(el);
});

// Immediately reveal elements already in viewport on load
document.addEventListener('DOMContentLoaded', () => {
  targets.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
});
