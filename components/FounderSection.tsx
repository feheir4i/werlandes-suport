"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Check } from "lucide-react";
import { LEADERSHIP_SECTION, WHATSAPP_GENERAL_URL } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const FOUNDER_HIGHLIGHTS = [
  "Atendimento direto no WhatsApp, sem intermediários",
  "Seleção pessoal de cada profissional conforme o perfil da casa ou evento",
  "Acompanhamento de perto em Trancoso antes e durante a operação",
];

export default function FounderSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { founder } = LEADERSHIP_SECTION;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-founder-reveal]",
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
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
      id="fundador"
      ref={sectionRef}
      aria-labelledby="founder-heading"
      className="relative bg-[#EFEAE0] text-[#0D1829] py-24 sm:py-32 md:py-36 border-b border-[#0D1829]/10"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left: Editorial Pair of High-Res Founder Portraits */}
        <div
          data-founder-reveal
          className="lg:col-span-6 grid grid-cols-2 gap-3.5 sm:gap-5 items-start"
        >
          <div className="relative aspect-[3/4] w-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#09121F] border border-[#0D1829]/12 shadow-[0_28px_60px_-28px_rgba(9,18,31,0.32)] group">
            <Image
              src={founder.image}
              alt={`${founder.name} — ${founder.role}`}
              fill
              unoptimized
              sizes="(max-width: 1024px) 46vw, 310px"
              className="object-cover object-[50%_18%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>

          <div className="relative aspect-[3/4] w-full sm:mt-10 rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#09121F] border border-[#0D1829]/12 shadow-[0_28px_60px_-28px_rgba(9,18,31,0.32)] group">
            <Image
              src={founder.secondaryImage}
              alt={`${founder.name} vestindo uniforme oficial da Werlandes Suport em Trancoso`}
              fill
              unoptimized
              sizes="(max-width: 1024px) 46vw, 310px"
              className="object-cover object-[55%_28%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Right: Editorial Founder Story & Direct Contact */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <p
            data-founder-reveal
            className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#8C6B28] mb-4"
          >
            Fundador &amp; Direção
          </p>

          <h2
            id="founder-heading"
            data-founder-reveal
            className="text-[clamp(2rem,4.1vw,3.55rem)] leading-[1.06] tracking-[-0.035em] font-medium text-[#0D1829]"
          >
            Quem acompanha a sua operação{" "}
            <span className="font-serif-editorial italic font-normal text-[#8C6B28]">
              de perto.
            </span>
          </h2>

          <p
            data-founder-reveal
            className="mt-6 text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl"
          >
            À frente da Werlandes Suport em Trancoso,{" "}
            <strong className="font-semibold text-[#0D1829]">
              {founder.name}
            </strong>{" "}
            coordena pessoalmente cada escala — da escolha de camareiras, chefes,
            bartenders, garçons e jardineiros até o alinhamento de uniforme,
            horário e postura para que você só precise receber seus convidados.
          </p>

          <ul
            data-founder-reveal
            className="mt-7 space-y-3 border-t border-[#0D1829]/12 pt-7 w-full max-w-2xl"
          >
            {FOUNDER_HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm sm:text-base text-[#0D1829]/85"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#09121F] text-[#E6CFA0] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div
            data-founder-reveal
            className="mt-9 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7 w-full"
          >
            <a
              href={WHATSAPP_GENERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-13 px-7 rounded-full bg-[#09121F] hover:bg-[#162740] text-[#E6CFA0] text-sm sm:text-[15px] font-semibold whitespace-nowrap shrink-0 shadow-[0_16px_36px_-16px_rgba(9,18,31,0.55)] transition-[transform,background-color] duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer"
            >
              <span>Falar diretamente com {founder.name}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <div className="border-l border-[#0D1829]/15 pl-4">
              <p className="text-base font-semibold text-[#0D1829] leading-tight">
                {founder.name}
              </p>
              <p className="text-xs sm:text-sm text-[#8C6B28] mt-0.5">
                {founder.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
