"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let hovering = false;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onEnterLink = () => { hovering = true; };
    const onLeaveLink = () => { hovering = false; };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, input, textarea, [role=button]").forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    const loop = () => {
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;

      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      if (hovering) {
        ring.style.transform = "translate(-50%, -50%) scale(1.8)";
        ring.style.borderColor = "#00b4d8";
        dot.style.background = "#00b4d8";
      } else {
        ring.style.transform = "translate(-50%, -50%) scale(1)";
        ring.style.borderColor = "#00ff41";
        dot.style.background = "#00ff41";
      }

      rafId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 transition-colors duration-150"
        style={{ background: "#00ff41", boxShadow: "0 0 6px #00ff41" }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] w-8 h-8 rounded-full border -translate-x-1/2 -translate-y-1/2 transition-all duration-150"
        style={{ borderColor: "#00ff41", boxShadow: "0 0 6px rgba(0,255,65,0.4)" }}
        aria-hidden="true"
      />
    </>
  );
}
