"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { buildWhatsAppUrl, ROLES_SECTION } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function RolesAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-role-row]",
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            stagger: 0.08,
            ease: "expo.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 85%",
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
      id="funcoes"
      ref={sectionRef}
      className="relative bg-[#EFEAE0] py-24 sm:py-32 md:py-40 border-y border-[#0D1829]/10"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10">
        {/* Editorial Split Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#8C6B28] mb-4">
              {ROLES_SECTION.eyebrow}
            </p>
            <h2 className="text-[clamp(2rem,4.2vw,3.65rem)] leading-[1.06] tracking-[-0.035em] font-medium text-[#0D1829]">
              {ROLES_SECTION.title}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#475569] max-w-md leading-relaxed">
            {ROLES_SECTION.subtitle}
          </p>
        </div>

        {/* Interactive Numbered Editorial List (01–05) */}
        <div ref={listRef} className="relative">
          {ROLES_SECTION.items.map((role, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={role.id}
                data-role-row
                className={`group border-t border-[#0D1829]/14 last:border-b transition-colors duration-300 ${
                  isOpen ? "bg-[#F7F4EE]/92" : "hover:bg-[#F7F4EE]/55"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`role-panel-${role.id}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full py-6 sm:py-8 px-2 sm:px-4 grid grid-cols-[44px_1fr_40px] md:grid-cols-[72px_1fr_auto_44px] items-center gap-4 sm:gap-6 text-left cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-[#8C6B28] tabular-nums">
                      {role.index}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[clamp(1.4rem,2.6vw,2.4rem)] font-medium tracking-[-0.03em] leading-[1.1] text-[#0D1829] transition-transform duration-500 ease-out group-hover:translate-x-2">
                        {role.title}
                      </span>
                      <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#8C6B28] mt-1 md:hidden">
                        {role.context}
                      </span>
                    </span>
                    <span className="hidden md:inline-block text-sm text-[#475569] font-medium">
                      {role.context}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`w-10 h-10 rounded-full border flex items-center justify-center justify-self-end transition-all duration-300 ${
                        isOpen
                          ? "bg-[#09121F] border-[#09121F] text-[#E6CFA0] rotate-45"
                          : "border-[#0D1829]/20 text-[#0D1829] group-hover:border-[#8C6B28] group-hover:text-[#8C6B28]"
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={`role-panel-${role.id}`}
                  role="region"
                  aria-label={role.title}
                  className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    <div className="pb-8 px-2 sm:px-4 md:pl-[96px] md:pr-12 space-y-6">
                      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <div className="space-y-4 max-w-2xl">
                          <p className="text-base sm:text-[17px] text-[#475569] leading-relaxed">
                            {role.detail}
                          </p>
                          <ul className="flex flex-wrap gap-2">
                            {role.tags.map((tag) => (
                              <li
                                key={tag}
                                className="px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium bg-white border border-[#0D1829]/12 text-[#0D1829]"
                              >
                                {tag}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <a
                          href={buildWhatsAppUrl(role.whatsappMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-[#09121F] hover:bg-[#162740] text-[#E6CFA0] text-sm font-medium transition-[transform,background-color] duration-150 ease-out active:scale-[0.97] shrink-0 self-start lg:self-end cursor-pointer"
                        >
                          <span>Solicitar {role.title}</span>
                          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                      </div>

                      {/* Real WebP Gallery Strip for Each Role */}
                      <div
                        className={`grid gap-3.5 ${
                          role.gallery.length === 2
                            ? "grid-cols-1 sm:grid-cols-2 max-w-2xl"
                            : "grid-cols-1 sm:grid-cols-3"
                        }`}
                      >
                        {role.gallery.map((photo) => (
                          <div
                            key={photo.src}
                            className={`relative rounded-2xl overflow-hidden bg-[#09121F]/8 border border-[#0D1829]/10 group/img ${
                              role.galleryAspect === "square"
                                ? "aspect-square"
                                : "aspect-[3/2]"
                            }`}
                          >
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              fill
                              unoptimized
                              sizes="(max-width: 640px) 92vw, 360px"
                              className="object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-105"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
