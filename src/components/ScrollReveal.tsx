"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-in" | "scale-up" | "slide-left" | "slide-right";
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delay = 0,
  duration = 0.65,
  once = true,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variantsMap = {
    "fade-up": {
      initial: { opacity: 0, y: 28 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-in": {
      initial: { opacity: 0 },
      visible: { opacity: 1 },
    },
    "scale-up": {
      initial: { opacity: 0, scale: 0.96, y: 20 },
      visible: { opacity: 1, scale: 1, y: 0 },
    },
    "slide-left": {
      initial: { opacity: 0, x: -30 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
      initial: { opacity: 0, x: 30 },
      visible: { opacity: 1, x: 0 },
    },
  };

  const selected = variantsMap[variant] || variantsMap["fade-up"];

  return (
    <motion.div
      initial={selected.initial}
      whileInView={selected.visible}
      viewport={{ once, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Cinematic smooth cubic bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
