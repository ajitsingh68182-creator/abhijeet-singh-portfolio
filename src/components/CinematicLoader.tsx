"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CinematicLoaderProps {
  onComplete?: () => void;
}

export default function CinematicLoader({ onComplete }: CinematicLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check reduced motion or previous session flag
    if (typeof window !== "undefined") {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const hasLoaded = sessionStorage.getItem("as_portfolio_loaded");

      if (prefersReduced || hasLoaded) {
        setLoading(false);
        onComplete?.();
        return;
      }
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            if (typeof window !== "undefined") {
              sessionStorage.setItem("as_portfolio_loaded", "true");
            }
            onComplete?.();
          }, 350);
          return 100;
        }
        // Smooth non-linear progress
        const increment = prev < 60 ? 12 : 8;
        return Math.min(100, prev + increment);
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080808] text-[#F5F3EF] px-6 select-none"
        >
          {/* Subtle background glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#C6FF3D]/5 blur-[120px] pointer-events-none" />

          {/* Minimal Animated Monogram "AS" */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex items-center justify-center mb-8"
          >
            <div className="w-20 h-20 border border-[#222222] rounded-2xl flex items-center justify-center bg-[#111111]/80 backdrop-blur-md relative overflow-hidden shadow-2xl">
              <span className="font-display font-extrabold text-3xl tracking-tighter text-[#F5F3EF]">
                A<span className="text-[#C6FF3D]">S</span>
              </span>
              {/* Shimmer sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C6FF3D]/10 to-transparent animate-shimmer" />
            </div>
            {/* Film frame corner tick marks */}
            <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#C6FF3D]" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#C6FF3D]" />
          </motion.div>

          {/* Subtitle Label */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex flex-col items-center space-y-3"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#A3A3A3]">
              CRAFTING VISUAL STORIES
            </span>

            {/* Thin Progress Bar */}
            <div className="w-48 h-[2px] bg-[#1F1F1F] rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-[#C6FF3D] rounded-full shadow-[0_0_8px_#C6FF3D]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Progress Percentage & Film FPS indicator */}
            <div className="flex items-center justify-between w-48 text-[10px] font-mono text-[#737373]">
              <span>24.00 FPS</span>
              <span className="text-[#C6FF3D]">{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
