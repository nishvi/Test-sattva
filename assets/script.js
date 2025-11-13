// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
  });
}

// Counters
function animateCount(el, target, duration = 1200) {
  let start = 0;
  const step = Math.max(1, Math.floor(target / (duration / 16)));
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = start.toLocaleString();
  }, 16);
}
document.querySelectorAll('[data-count]').forEach(el => {
  const target = parseInt(el.getAttribute('data-count') || '0', 10);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCount(el, target); observer.disconnect(); }
    });
  }, { threshold: 0.5 });
  observer.observe(el);
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Fake form handlers (replace with your backend / form service)
function handleForm(formId, msgId) {
  const form = document.getElementById(formId);
  const msg = document.getElementById(msgId);
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    // Replace this with your fetch() to a real endpoint
    console.log('Form submit:', formId, data);
    msg.textContent = 'Thanks! We will contact you within 24 hours.';
    msg.style.color = '#9BE15D';
    form.reset();
  });
}
handleForm('leadForm', 'leadMsg');
handleForm('deckForm', 'deckMsg');

