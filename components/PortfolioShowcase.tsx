"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, X } from "lucide-react";
import {
  SHOWCASE_SECTION,
  SITE_CONFIG,
  WHATSAPP_GENERAL_URL,
  type ShowcaseCard,
} from "@/lib/data";

export default function PortfolioShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [lightboxItem, setLightboxItem] = useState<ShowcaseCard | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const closeLightboxBtnRef = useRef<HTMLButtonElement | null>(null);

  const totalCount = SHOWCASE_SECTION.items.length + 1;

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-showcase-card]");
    const step = firstCard ? firstCard.offsetWidth + 24 : 520;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);

    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < maxScroll - 8);

    if (maxScroll <= 0) {
      setActiveIndex(0);
      return;
    }

    if (el.scrollLeft >= maxScroll - 12) {
      setActiveIndex(totalCount - 1);
      return;
    }

    const idx = Math.min(totalCount - 1, Math.max(0, Math.round(el.scrollLeft / step)));
    setActiveIndex(idx);
  }, [totalCount]);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-showcase-card]");
    const step = firstCard ? firstCard.offsetWidth + 24 : 520;

    el.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!lightboxItem) return;
    document.body.style.overflow = "hidden";
    closeLightboxBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxItem(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxItem]);

  return (
    <section
      id="portfolio"
      aria-label="Portfólio de operação da Werlandes Suport"
      className="relative bg-[#F7F4EE] py-20 sm:py-28 overflow-hidden"
    >
      {/* Header + Carousel Navigation Controls */}
      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-10 mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#8C6B28] mb-3.5">
            {SHOWCASE_SECTION.eyebrow}
          </p>
          <h2 className="text-[clamp(1.9rem,4vw,3.45rem)] leading-[1.06] tracking-[-0.035em] font-medium text-[#0D1829]">
            {SHOWCASE_SECTION.title}
          </h2>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
          <span className="text-sm font-medium text-[#0D1829]/80 tabular-nums">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(totalCount).padStart(2, "0")}
          </span>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Foto anterior"
              className="w-12 h-12 rounded-full border border-[#0D1829]/15 bg-white text-[#0D1829] hover:bg-[#09121F] hover:text-[#E6CFA0] hover:border-[#09121F] disabled:opacity-30 disabled:pointer-events-none transition-[transform,background-color,color,border-color] duration-150 ease-out active:scale-[0.95] flex items-center justify-center shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Próxima foto"
              className="w-12 h-12 rounded-full bg-[#09121F] text-[#E6CFA0] hover:bg-[#162740] border border-[#C9A45C]/35 disabled:opacity-30 disabled:pointer-events-none transition-[transform,background-color,color,border-color] duration-150 ease-out active:scale-[0.95] flex items-center justify-center shadow-md cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Smooth Horizontal Carousel Track */}
      <div
        ref={scrollerRef}
        onScroll={updateScrollState}
        className="flex flex-row gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-5 sm:px-10 lg:px-[max(2.5rem,calc((100vw-1240px)/2+2.5rem))] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {SHOWCASE_SECTION.items.map((card) => (
          <article
            key={card.id}
            data-showcase-card
            className="group snap-start flex-none w-[86vw] sm:w-[460px] lg:w-[540px] rounded-[28px] overflow-hidden bg-white border border-[#0D1829]/10 shadow-[0_20px_50px_-28px_rgba(9,18,31,0.22)] flex flex-col"
          >
            <button
              type="button"
              onClick={() => setLightboxItem(card)}
              aria-label={`Ampliar foto: ${card.title}`}
              className="relative w-full aspect-[16/10] overflow-hidden bg-[#09121F]/10 cursor-pointer text-left"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                unoptimized
                sizes="(max-width: 640px) 86vw, (max-width: 1024px) 460px, 540px"
                style={{ objectPosition: card.objectPosition || "center center" }}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#09121F]/70 backdrop-blur-md text-[#E6CFA0] flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:bg-[#09121F] transition-all">
                <Maximize2 className="w-4 h-4" aria-hidden="true" />
              </span>
            </button>

            <div className="p-6 sm:p-7 flex flex-col justify-between gap-4 flex-1">
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C6B28]">
                    {card.tag}
                  </p>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#EFEAE0] text-[#0D1829]">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-[-0.025em] leading-snug text-[#0D1829]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </article>
        ))}

        {/* Closing Conversion Card */}
        <article
          data-showcase-card
          className="snap-start flex-none w-[86vw] sm:w-[400px] lg:w-[420px] rounded-[28px] overflow-hidden bg-[#09121F] text-[#F7F4EE] border border-[#C9A45C]/30 p-8 sm:p-10 flex flex-col justify-between gap-10 shadow-[0_24px_50px_-24px_rgba(9,18,31,0.65)]"
        >
          <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-[#C9A45C]/40">
            <Image
              src={SITE_CONFIG.logoPath}
              alt={SITE_CONFIG.brandName}
              fill
              unoptimized
              sizes="56px"
              className="object-cover scale-110"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl sm:text-4xl font-medium tracking-[-0.04em] leading-[1.06] text-[#F7F4EE]">
              {SHOWCASE_SECTION.nextCardTitle}
            </h3>
            <p className="text-sm sm:text-base text-[#F7F4EE]/78 leading-relaxed">
              {SHOWCASE_SECTION.nextCardText}
            </p>
            <a
              href={WHATSAPP_GENERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-[#C9A45C] hover:bg-[#DFBD77] text-[#09121F] text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{SHOWCASE_SECTION.nextCardCta}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </article>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-[#09121F]/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-[#F7F4EE] border border-[#C9A45C]/30 shadow-2xl cursor-default"
          >
            <button
              ref={closeLightboxBtnRef}
              type="button"
              onClick={() => setLightboxItem(null)}
              aria-label="Fechar ampliação"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#09121F]/80 hover:bg-[#09121F] text-[#E6CFA0] flex items-center justify-center transition-[transform,background-color] duration-150 ease-out active:scale-[0.95] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full aspect-[16/10] bg-[#09121F]">
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.title}
                fill
                unoptimized
                sizes="(max-width: 1200px) 100vw, 960px"
                className="object-cover"
              />
            </div>

            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C6B28]">
                  {lightboxItem.tag}
                </p>
                <p className="text-lg font-medium text-[#0D1829] mt-0.5">
                  {lightboxItem.title}
                </p>
              </div>
              <a
                href={WHATSAPP_GENERAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-[#09121F] hover:bg-[#162740] text-[#E6CFA0] text-sm font-medium transition-colors shrink-0"
              >
                <span>Solicitar Equipe</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
