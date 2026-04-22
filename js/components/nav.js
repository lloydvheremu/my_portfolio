// Navigation Component - Active State Management
class Navigation {
  constructor() {
    this.init();
  }

  init() {
    this.setActiveLink();
  }

  setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');

      // Check if this is the current page
      if (href === currentPage ||
          (currentPage === '' && href === 'index.html') ||
          (currentPage === '/' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
});
