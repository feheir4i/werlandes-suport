"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MANIFESTO_DATA } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-man-word]",
          { opacity: 0.18 },
          {
            opacity: 1,
            stagger: 0.06,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-man-block]",
              start: "top 82%",
              end: "bottom 54%",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  const beforeWords = MANIFESTO_DATA.leadBefore.split(" ");
  const afterWords = MANIFESTO_DATA.leadAfter.split(" ");

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative bg-[#F7F4EE] py-24 sm:py-32 md:py-40"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10">
        <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#8C6B28] mb-7">
          {MANIFESTO_DATA.eyebrow}
        </p>

        <p
          data-man-block
          className="text-[clamp(1.75rem,3.8vw,3.55rem)] leading-[1.16] tracking-[-0.035em] font-medium text-[#0D1829] max-w-[24ch] sm:max-w-[27ch]"
        >
          {beforeWords.map((word, idx) => (
            <span key={`b-${idx}`} data-man-word className="inline-block mr-[0.24em]">
              {word}
            </span>
          ))}
          {afterWords.map((word, idx) => (
            <span key={`a-${idx}`} data-man-word className="inline-block mr-[0.24em]">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
