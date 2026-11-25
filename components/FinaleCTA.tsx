"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_GENERAL_URL } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function FinaleCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            end: "bottom bottom",
            scrub: 0.85,
          },
        });

        tl.fromTo(
          "[data-finale-window]",
          { clipPath: "inset(7% round 36px)" },
          { clipPath: "inset(0% round 0px)", ease: "power2.inOut", duration: 0.65 },
          0,
        )
          .fromTo(
            "[data-finale-photo]",
            { scale: 1.15 },
            { scale: 1, ease: "power2.out", duration: 1 },
            0,
          )
          .fromTo(
            "[data-finale-copy]",
            { y: 36, opacity: 0 },
            { y: 0, opacity: 1, ease: "power2.out", duration: 0.45 },
            0.3,
          );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="contato"
      ref={sectionRef}
      aria-labelledby="finale-heading"
      className="relative h-[135svh] bg-[#F7F4EE]"
    >
      <div className="sticky top-0 h-[100svh] min-h-[560px] flex items-center justify-center">
        <div
          data-finale-window
          className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#09121F]"
        >
          <div data-finale-photo className="absolute inset-0 will-change-transform">
            <Image
              src="/images/bartender-drink-rosa.webp"
              alt="Drink autoral servido pela equipe de bartenders da Werlandes Suport em Trancoso"
              fill
              unoptimized
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09121F]/92 via-[#09121F]/68 to-[#09121F]/58" />
          </div>

          <div
            data-finale-copy
            className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6"
          >
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#E6CFA0]">
              Casas de Aluguel & Eventos · Trancoso
            </p>
            <h2
              id="finale-heading"
              className="text-[clamp(2.25rem,5.4vw,4.9rem)] leading-[1.06] tracking-[-0.04em] font-medium text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
            >
              <span className="block">Deixe a operação em</span>
              <span className="block font-serif-editorial italic font-normal text-[#E6CFA0]">
                boas mãos.
              </span>
            </h2>

            <div className="mt-2 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <a
                href={WHATSAPP_GENERAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-full bg-[#C9A45C] hover:bg-[#DFBD77] text-[#09121F] text-base font-semibold shadow-2xl transition-[transform,background-color] duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer"
              >
                <span>Solicitar Equipe no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#funcoes"
                className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-7 rounded-full bg-white/12 hover:bg-white/20 backdrop-blur-md border border-white/28 text-white text-sm sm:text-base font-medium transition-[transform,background-color] duration-150 ease-out active:scale-[0.97] cursor-pointer"
              >
                Ver Todas as Funções
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
