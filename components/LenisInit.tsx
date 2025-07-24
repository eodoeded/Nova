"use client";

import { useEffect } from "react";

export default function LenisInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    import("@studio-freight/lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 0.2, // very low for near-native feel
        easing: (t: number) => t, // linear easing
        gestureOrientation: "vertical",
        smoothWheel: true,
      });
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    });
  }, []);
  return null;
} 