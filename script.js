// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: false
});

// Auto-update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
let isDark = true; // Already dark by default

themeToggle.addEventListener('click', () => {
  if (isDark) {
    // Switch to Light Mode
    document.body.classList.remove('bg-slate-900', 'text-white');
    document.body.classList.add('bg-white', 'text-slate-900');
    document.querySelectorAll('.card, .btn-gradient, .btn-purple').forEach(el => {
      el.classList.add('shadow', 'shadow-slate-200');
    });
    themeToggle.textContent = '🌙';
    isDark = false;
  } else {
    // Switch to Dark Mode
    document.body.classList.remove('bg-white', 'text-slate-900');
    document.body.classList.add('bg-slate-900', 'text-white');
    document.querySelectorAll('.card, .btn-gradient, .btn-purple').forEach(el => {
      el.classList.remove('shadow', 'shadow-slate-200');
    });
    themeToggle.textContent = '💡';
    isDark = true;
  }
});
