// Custom Cursor Effect
class CustomCursor {
  constructor() {
    this.cursor = null;
    this.init();
  }

  init() {
    // Create cursor element
    this.cursor = document.createElement('div');
    this.cursor.id = 'custom-cursor';
    document.body.appendChild(this.cursor);

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
      this.cursor.style.left = e.clientX + 'px';
      this.cursor.style.top = e.clientY + 'px';
    });

    // Add hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card, .btn');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        this.cursor.classList.add('hover');
      });
      el.addEventListener('mouseleave', () => {
        this.cursor.classList.remove('hover');
      });
    });

    // Hide default cursor
    document.body.style.cursor = 'none';
    document.querySelectorAll('a, button').forEach(el => {
      el.style.cursor = 'none';
    });
  }
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize on non-touch devices
  if (!('ontouchstart' in window)) {
    new CustomCursor();
  }
});
