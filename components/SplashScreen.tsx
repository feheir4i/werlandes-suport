"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { hasSeenSplash, markSplashSeen } from "@/lib/splashStorage";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const BRAND_LETTERS = "WERLANDES".split("");

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const curtainRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!curtainRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion || hasSeenSplash()) {
        setVisible(false);
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          markSplashSeen();
          setVisible(false);
        },
      });

      tl.fromTo(
        "[data-splash-char]",
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.62,
          stagger: 0.032,
          ease: "expo.out",
        },
        0.04,
      )
        .fromTo(
          "[data-splash-rule]",
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.48,
            ease: "expo.out",
          },
          0.22,
        )
        .fromTo(
          "[data-splash-sub]",
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.42,
            ease: "expo.out",
          },
          0.32,
        )
        .to(
          "[data-splash-content]",
          {
            y: -18,
            opacity: 0,
            duration: 0.34,
            ease: "power2.in",
          },
          0.84,
        )
        .to(
          curtainRef.current,
          {
            yPercent: -100,
            duration: 0.62,
            ease: "expo.inOut",
          },
          0.92,
        );
    },
    { scope: curtainRef },
  );

  if (!visible) return null;

  return (
    <div
      ref={curtainRef}
      aria-hidden="true"
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#09121F] overflow-hidden select-none pointer-events-none"
    >
      {/* Subtle warm gold ambient glow behind the wordmark */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,164,92,0.14)_0%,rgba(9,18,31,0)_58%)]" />

      <div
        data-splash-content
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <div className="flex items-center justify-center overflow-hidden py-1">
          {BRAND_LETTERS.map((letter, idx) => (
            <span
              key={`${letter}-${idx}`}
              data-splash-char
              className="inline-block opacity-0 font-semibold uppercase tracking-[0.14em] text-[#F5E6C4] leading-none text-[clamp(2rem,9vw,5.25rem)] will-change-transform"
            >
              {letter}
            </span>
          ))}
        </div>

        <div
          data-splash-rule
          className="mt-4 h-px w-24 sm:w-32 opacity-0 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent origin-center will-change-transform"
        />

        <p
          data-splash-sub
          className="mt-3.5 opacity-0 text-[10px] sm:text-xs font-medium uppercase tracking-[0.38em] text-[#C9A45C] pl-[0.38em]"
        >
          Suport · Trancoso
        </p>
      </div>
    </div>
  );
}
