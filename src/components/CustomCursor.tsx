"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("input") ||
        target?.closest("textarea") ||
        target?.closest(".interactive-hover")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    const updateTrailing = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision inner dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C6FF3D] pointer-events-none z-[70] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
      {/* Outer ambient follower ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#C6FF3D]/40 pointer-events-none z-[69] transition-[width,height,background-color,border-color] duration-200 ease-out ${
          isHovered
            ? "w-12 h-12 bg-[#C6FF3D]/10 border-[#C6FF3D]"
            : "w-8 h-8 bg-transparent"
        }`}
        style={{
          transform: `translate3d(${trailing.x - (isHovered ? 24 : 16)}px, ${
            trailing.y - (isHovered ? 24 : 16)
          }px, 0)`,
        }}
      />
    </>
  );
}
