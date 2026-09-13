// Navigation Component - Active State & Mobile Menu
class Navigation {
  constructor() {
    this.init();
  }

  init() {
    this.setActiveLink();
    this.setupMobileMenu();
  }

  setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage ||
          (currentPage === '' && href === 'index.html') ||
          (currentPage === '/' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  setupMobileMenu() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('nav-menu-list');

    if (toggleBtn && menu) {
      toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
        const isExpanded = menu.classList.contains('open');
        toggleBtn.setAttribute('aria-expanded', isExpanded);
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
});
