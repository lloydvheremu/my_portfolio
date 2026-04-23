// Theme Toggle Functionality
class ThemeToggle {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'dark';
    this.init();
  }

  init() {
    // Apply saved theme
    this.applyTheme(this.theme);

    // Listen for toggle button clicks
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggle());
      this.updateButtonText(toggleBtn);
    }
  }

  applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    this.theme = theme;
    localStorage.setItem('theme', theme);
  }

  toggle() {
    const newTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      this.updateButtonText(toggleBtn);
    }
  }

  updateButtonText(btn) {
    btn.textContent = this.theme === 'dark' ? '☀ Light' : '🌙 Dark';
  }
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => {
  new ThemeToggle();
});
