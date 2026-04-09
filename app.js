// === AI Volution — Shared App Logic ===

// Navbar scroll (alleen homepage: toggle 'scrolled' class op basis van scrollpositie)
if (document.body.classList.contains('homepage')) {
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', scrollY > 50);
  });
}

// Scroll reveal observer
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Scan Modal
function openScanModal() {
  document.getElementById('scanModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeScanModal() {
  document.getElementById('scanModal').classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('scanModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeScanModal();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeScanModal();
});
