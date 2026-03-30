"use client";

import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setVisible(true);

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        setHovering(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`cursor-dot ${hovering ? "hovering" : ""}`}
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
