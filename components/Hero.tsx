"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, WHATSAPP_GENERAL_URL } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Hero() {
  const { hero } = SITE_CONFIG;
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
        intro
          .fromTo(
            "[data-hero-badge]",
            { y: 14, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.85 },
            0.1,
          )
          .fromTo(
            "[data-hero-line]",
            { yPercent: 105, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 1.15, stagger: 0.1 },
            0.16,
          )
          .fromTo(
            "[data-hero-sub]",
            { y: 16, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9 },
            0.42,
          )
          .fromTo(
            "[data-hero-cta]",
            { y: 18, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.85, stagger: 0.08 },
            0.54,
          );

        // Subtle cinematic Ken Burns breathing motion on the hero portrait
        gsap.fromTo(
          "[data-hero-kenburns]",
          { scale: 1 },
          {
            scale: 1.035,
            duration: 18,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          },
        );

        // Gentle depth parallax on scroll without locking the user
        gsap.to("[data-hero-media]", {
          yPercent: 8,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="inicio"
      ref={sectionRef}
      aria-label="Apresentação da Werlandes Suport em Trancoso"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#09121F] flex flex-col justify-end"
    >
      {/* Editorial Hero Portrait (3D Gold Sign + Founder Portrait Unobstructed in Upper Frame) */}
      <div
        data-hero-media
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <div
          data-hero-kenburns
          className="relative w-full h-full will-change-transform"
        >
          <Image
            src={hero.posterUrl}
            alt="Werlandes Suport — Equipe treinada e capacitada para casas de temporada e eventos em Trancoso"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-[56%_12%] sm:object-[50%_18%]"
          />
        </div>

        {/* Focused Bottom & Top Scrims — keeps the 3D golden WERLANDES sign & portrait crystal clear */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#09121F]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-[70%] sm:h-[62%] bg-gradient-to-t from-[#09121F] via-[#09121F]/84 to-transparent pointer-events-none" />
      </div>

      {/* Bottom-Anchored Editorial Copy & Direct WhatsApp Conversion */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 sm:px-10 pt-44 sm:pt-56 pb-10 sm:pb-14">
        <div className="max-w-4xl">
          <p
            data-hero-badge
            className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#09121F]/82 backdrop-blur-md border border-[#E6CFA0]/30 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#F5E6C4] shadow-[0_8px_24px_rgba(0,0,0,0.45)] mb-4"
          >
            {hero.badge}
          </p>

          <h1 className="w-full max-w-5xl text-[#F7F4EE] font-medium tracking-[-0.035em] leading-[1.06] text-[clamp(1.95rem,7.2vw,2.65rem)] sm:text-[clamp(2.6rem,4.6vw,4.5rem)] text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
            <span className="block overflow-hidden pb-1">
              <span data-hero-line className="inline-block">
                {hero.headlineLead}
              </span>
            </span>
            <span className="block overflow-hidden pb-1.5">
              <span data-hero-line className="inline-block">
                <span className="font-serif-editorial italic font-normal text-[#E6CFA0]">
                  {hero.headlineSerif}
                </span>
                {hero.headlineTail ? (
                  <span className="ml-2.5">{hero.headlineTail}</span>
                ) : null}
              </span>
            </span>
          </h1>

          <p
            data-hero-sub
            className="mt-4 sm:mt-5 max-w-2xl text-[15px] sm:text-lg text-[#F7F4EE]/85 font-normal leading-relaxed"
          >
            {hero.subheadline}
          </p>

          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pr-12 sm:pr-0">
            <a
              data-hero-cta
              href={WHATSAPP_GENERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-13 px-7 sm:px-8 rounded-full bg-[#C9A45C] hover:bg-[#DFBD77] text-[#09121F] text-sm sm:text-[15px] font-semibold tracking-[-0.01em] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)] transition-[transform,background-color] duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer"
            >
              <span>{hero.primaryCtaLabel}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              data-hero-cta
              href={hero.primaryCtaHref}
              className="inline-flex items-center justify-center gap-2 h-13 px-7 rounded-full bg-white/10 hover:bg-white/18 backdrop-blur-md border border-white/25 text-white text-sm sm:text-[15px] font-medium transition-[transform,background-color] duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer"
            >
              <span>{hero.secondaryCtaLabel}</span>
              <ArrowDown className="w-4 h-4 text-[#E6CFA0]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
