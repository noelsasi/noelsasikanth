// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Years of experience
document.querySelectorAll('.exp-years[data-from]').forEach((el) => {
  const [fy, fm] = el.getAttribute('data-from').split('-').map(Number);
  const now = new Date();
  const totalMonths = (now.getFullYear() - fy) * 12 + (now.getMonth() + 1 - fm);
  const years = Math.floor(totalMonths / 12);
  const remainder = totalMonths % 12;
  el.textContent = remainder > 0 ? `${years}+` : years;
});

// Duration counters
document.querySelectorAll('.work-duration[data-from]').forEach((el) => {
  const [fy, fm] = el.getAttribute('data-from').split('-').map(Number);
  const toAttr = el.getAttribute('data-to');
  const end = toAttr ? new Date(+toAttr.split('-')[0], +toAttr.split('-')[1] - 1) : new Date();
  const totalMonths = (end.getFullYear() - fy) * 12 + (end.getMonth() + 1 - fm);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`);
  el.textContent = parts.join(' ');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
