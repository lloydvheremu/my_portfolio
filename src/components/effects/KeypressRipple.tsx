"use client";

import { useEffect } from "react";

export default function KeypressRipple() {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #00ff41;
        opacity: 0.6;
        pointer-events: none;
        z-index: 9997;
        animation: ripple-expand 0.6s ease-out forwards;
      `;

      const style = document.createElement("style");
      style.textContent = `
        @keyframes ripple-expand {
          to { transform: translate(-50%, -50%) scale(6); opacity: 0; }
        }
      `;

      document.head.appendChild(style);
      document.body.appendChild(ripple);

      ripple.addEventListener("animationend", () => {
        ripple.remove();
        style.remove();
      });

      void e;
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return null;
}
