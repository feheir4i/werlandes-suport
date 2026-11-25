"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SITE_CONFIG, WHATSAPP_GENERAL_URL } from "@/lib/data";

const NAV_LINKS = [
  { label: "Sobre", href: "#manifesto" },
  { label: "Profissionais", href: "#funcoes" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Equipe", href: "#equipe" },
  { label: "Fundador", href: "#fundador" },
  { label: "Dúvidas", href: "#faq" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef(false);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setSolid(y > 48);
        if (y > lastY + 6 && y > 420 && !menuOpenRef.current) {
          setHidden(true);
        } else if (y < lastY - 6 || y < 120) {
          setHidden(false);
        }
        lastY = y;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => Boolean(el),
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-42% 0px -50% 0px" },
    );
    sections.forEach((sec) => io.observe(sec));

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none transition-transform duration-500 ease-out ${
          hidden ? "-translate-y-28" : "translate-y-0"
        }`}
      >
        <div
          className={`pointer-events-auto max-w-[1240px] mx-auto h-[60px] pl-3 sm:pl-4 pr-2 sm:pr-2.5 rounded-full flex items-center justify-between gap-4 transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
            solid || menuOpen
              ? "bg-[#09121F]/92 backdrop-blur-xl border border-[#C9A45C]/25 shadow-[0_14px_40px_-16px_rgba(0,0,0,0.65)] text-[#F7F4EE]"
              : "bg-[#09121F]/45 backdrop-blur-md border border-white/18 text-white shadow-[0_10px_30px_-14px_rgba(0,0,0,0.45)]"
          }`}
        >
          {/* Brand with Real Logo Emblem */}
          <a
            href="#inicio"
            className="flex items-center gap-3 min-h-[44px] py-1 pr-2 rounded-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C]"
          >
            <span className="relative w-9 h-9 rounded-full overflow-hidden border border-[#C9A45C]/40 bg-[#09121F] shrink-0">
              <Image
                src={SITE_CONFIG.logoPath}
                alt={`Logo ${SITE_CONFIG.brandName}`}
                fill
                unoptimized
                sizes="36px"
                priority
                className="object-cover scale-110"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-semibold text-[15px] tracking-[0.04em] uppercase text-[#F7F4EE]">
                {SITE_CONFIG.brandName}
              </span>
              <span className="text-[10px] tracking-[0.16em] uppercase text-[#E6CFA0] mt-1">
                {SITE_CONFIG.brandSubtitle}
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-[#C9A45C]/20 text-[#E6CFA0]"
                      : "text-white/80 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right CTA & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_GENERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 h-10 px-5 rounded-full bg-[#C9A45C] hover:bg-[#DFBD77] text-[#09121F] text-sm font-semibold transition-[transform,background-color] duration-150 ease-out active:scale-[0.97] cursor-pointer"
            >
              <span>Solicitar Equipe</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <button
              ref={menuBtnRef}
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-sheet"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              className="lg:hidden w-10 h-10 rounded-full hover:bg-white/12 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer */}
      {menuOpen && (
        <div
          id="mobile-nav-sheet"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="fixed inset-0 z-40 bg-[#09121F] text-[#F7F4EE] pt-28 px-6 pb-10 flex flex-col justify-between lg:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Menu mobile">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-4 py-2.5 border-b border-white/12 text-3xl font-medium tracking-[-0.03em] hover:text-[#E6CFA0] transition-colors"
              >
                <span className="text-xs font-semibold tracking-wider text-[#C9A45C]">
                  0{idx + 1}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="space-y-4">
            <p className="text-sm text-white/65">
              {SITE_CONFIG.companyLocation} · {SITE_CONFIG.phoneDisplay}
            </p>
            <a
              href={WHATSAPP_GENERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 h-13 px-6 rounded-full bg-[#C9A45C] hover:bg-[#DFBD77] text-[#09121F] font-semibold text-base transition-colors"
            >
              <span>Solicitar Equipe no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
