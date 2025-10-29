// 🌙 Theme Toggle
const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeBtn.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
});
