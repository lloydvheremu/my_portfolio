// Matrix Rain Effect - Canvas Animation
class MatrixRain {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿ';
    this.fontSize = 14;
    this.columns = 0;
    this.drops = [];

    this.init();
    this.animate();
  }

  init() {
    // Set canvas size
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;

    // Calculate columns
    this.columns = Math.floor(this.canvas.width / this.fontSize);

    // Initialize drops
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = Math.floor(Math.random() * -100);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
      this.canvas.width = this.canvas.offsetWidth;
      this.canvas.height = this.canvas.offsetHeight;
      this.columns = Math.floor(this.canvas.width / this.fontSize);
      this.drops = [];
      for (let i = 0; i < this.columns; i++) {
        this.drops[i] = Math.floor(Math.random() * -100);
      }
    });
  }

  draw() {
    // Semi-transparent black to create fade effect
    this.ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Matrix green text
    this.ctx.fillStyle = '#00ff41';
    this.ctx.font = `${this.fontSize}px monospace`;

    // Draw characters
    for (let i = 0; i < this.drops.length; i++) {
      const char = this.chars[Math.floor(Math.random() * this.chars.length)];
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;

      this.ctx.fillText(char, x, y);

      // Reset drop to top randomly
      if (y > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }

      this.drops[i]++;
    }
  }

  animate() {
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

// Auto-initialize if canvas exists
document.addEventListener('DOMContentLoaded', () => {
  const matrixCanvas = document.getElementById('matrix-canvas');
  if (matrixCanvas) {
    new MatrixRain('matrix-canvas');
  }

  // Initialize for background matrix on other pages
  const matrixBg = document.querySelector('.matrix-bg');
  if (matrixBg) {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-bg-canvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    matrixBg.appendChild(canvas);
    new MatrixRain('matrix-bg-canvas');
  }
});
