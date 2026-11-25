"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ShieldCheck } from "lucide-react";
import { LEADERSHIP_SECTION } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function LeadershipSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-leader-card]",
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="equipe"
      ref={sectionRef}
      aria-labelledby="leadership-heading"
      className="relative overflow-hidden bg-[#09121F] text-[#F7F4EE] py-24 sm:py-32 md:py-40"
    >
      {/* Subtle Ambient Gold Light */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="animate-gold-drift absolute -left-24 -top-24 w-[460px] h-[380px] rounded-full bg-[#C9A45C]/14 blur-[110px]" />
        <span className="animate-gold-drift absolute right-[4%] bottom-[8%] w-[380px] h-[360px] rounded-full bg-[#1C3B66]/35 blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-10">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-white/12">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#E6CFA0] mb-4">
              <ShieldCheck className="w-4 h-4 text-[#C9A45C]" aria-hidden="true" />
              <span>{LEADERSHIP_SECTION.eyebrow}</span>
            </p>
            <h2
              id="leadership-heading"
              className="text-[clamp(2rem,4.2vw,3.65rem)] leading-[1.06] tracking-[-0.035em] font-medium text-white"
            >
              {LEADERSHIP_SECTION.title}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#F7F4EE]/78 max-w-lg leading-relaxed">
            {LEADERSHIP_SECTION.description}
          </p>
        </div>

        {/* 3 Real Uniformed Team Photos — Balanced 3-Column Showcase */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {LEADERSHIP_SECTION.teamPhotos.map((photo) => (
            <article
              key={photo.src}
              data-leader-card
              className="rounded-[28px] overflow-hidden bg-[#101D30] border border-white/12 flex flex-col group shadow-[0_24px_56px_-28px_rgba(0,0,0,0.65)]"
            >
              <div className="relative aspect-[16/15] w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 96vw, 400px"
                  style={{ objectPosition: photo.objectPosition || "50% 20%" }}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E6CFA0]">
                  {photo.label}
                </p>
                <p className="text-sm text-[#F7F4EE]/80 mt-2 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* 4 Brand Ethics & Quality Pillars */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LEADERSHIP_SECTION.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              data-leader-card
              className="rounded-2xl bg-[#101D30]/85 border border-white/10 p-6 flex flex-col gap-2.5"
            >
              <span className="text-xs font-semibold text-[#C9A45C] tabular-nums">
                0{idx + 1}
              </span>
              <h3 className="text-lg font-medium text-white tracking-[-0.02em]">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#F7F4EE]/72 leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
