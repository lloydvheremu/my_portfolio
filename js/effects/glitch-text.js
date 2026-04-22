// Glitch Text Effect
class GlitchText {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
    this.init();
  }

  init() {
    this.elements.forEach(el => {
      const text = el.textContent;
      el.setAttribute('data-text', text);
      el.classList.add('glitch');
    });
  }
}

// Auto-initialize glitch text elements
document.addEventListener('DOMContentLoaded', () => {
  new GlitchText('.glitch-text');
});
