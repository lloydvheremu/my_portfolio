// Keypress Ripple Effect
class KeypressRipple {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('keydown', (e) => {
      // Get mouse position (or use center if no mouse event)
      const x = window.innerWidth / 2;
      const y = window.innerHeight / 2;

      this.createRipple(x, y);
    });
  }

  createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'keypress-ripple';
    ripple.style.left = (x - 50) + 'px';
    ripple.style.top = (y - 50) + 'px';

    document.body.appendChild(ripple);

    // Remove ripple after animation completes
    setTimeout(() => {
      ripple.remove();
    }, 800);
  }
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => {
  new KeypressRipple();
});
