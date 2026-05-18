// Sticky nav — add class after scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// Intersection Observer — fade in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

// Observe all animated elements
const targets = document.querySelectorAll(
  '.fade-in, .timeline-entry, .journal-card, .skill-group, .edu-entry'
);

targets.forEach((el, i) => {
  // Stagger delay for grouped items
  if (el.closest('.timeline') || el.closest('.journal-grid') || el.closest('.skills-grid') || el.closest('.edu-list')) {
    el.style.transitionDelay = `${i * 0.04}s`;
  }
  observer.observe(el);
});

// Trigger visible immediately for elements already in viewport on load
document.addEventListener('DOMContentLoaded', () => {
  targets.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('visible');
    }
  });
});
