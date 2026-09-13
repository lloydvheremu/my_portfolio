// Cursor Trail Effect - Minimal animated trail that follows cursor
class CursorTrail {
  constructor() {
    this.dots = [];
    this.maxDots = 3;
    this.init();
  }

  init() {
    // Only initialize on non-touch devices
    if ('ontouchstart' in window) return;

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
      this.createDot(e.clientX, e.clientY);
    });

    // Start animation loop
    this.animate();
  }

  createDot(x, y) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail-dot';
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    document.body.appendChild(dot);

    this.dots.push({
      element: dot,
      x: x,
      y: y,
      life: 1
    });

    // Remove oldest dot if we have too many
    if (this.dots.length > this.maxDots) {
      const oldDot = this.dots.shift();
      oldDot.element.remove();
    }
  }

  animate() {
    this.dots.forEach((dot, index) => {
      // Fade out over time
      dot.life -= 0.05;

      if (dot.life <= 0) {
        dot.element.remove();
        this.dots.splice(index, 1);
      } else {
        dot.element.style.opacity = dot.life;
        dot.element.style.transform = `translate(-50%, -50%) scale(${dot.life})`;
      }
    });

    requestAnimationFrame(() => this.animate());
  }
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => {
  new CursorTrail();
});
