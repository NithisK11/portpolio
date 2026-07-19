// ============ ACTIVE NAV LINK ON SCROLL ============
const sections = document.querySelectorAll('main section, main header[id]');
const navLinks = document.querySelectorAll('.site-nav .nav-link');

const setActive = (id) => {
  navLinks.forEach(link => {
    link.style.color = '';
    link.style.borderBottomColor = '';
  });
  const active = document.querySelector(`.site-nav .nav-link[href="#${id}"]`);
  if (active) {
    active.style.color = 'var(--ink)';
    active.style.borderBottomColor = 'var(--accent)';
  }
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-40% 0px -50% 0px' });

  sections.forEach(section => { if (section.id) observer.observe(section); });
}

// ============ CONTACT FORM (mailto fallback, no backend) ============
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    window.location.href = `mailto:knisthiswaran11@gmail.com?subject=${subject}&body=${body}`;
  });
}
