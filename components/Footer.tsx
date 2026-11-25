"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUp, Mail } from "lucide-react";
import {
  FOOTER_INFO_ITEMS,
  SITE_CONFIG,
  WHATSAPP_GENERAL_URL,
} from "@/lib/data";
import LegalModal, { type LegalTab } from "@/components/LegalModal";

function TrancosoClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      try {
        setTime(
          new Intl.DateTimeFormat("pt-BR", {
            timeZone: "America/Bahia",
            hour: "2-digit",
            minute: "2-digit",
          }).format(new Date()),
        );
      } catch {
        setTime("");
      }
    };
    update();
    const id = window.setInterval(update, 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-2 text-sm text-[#F7F4EE]/85 tabular-nums">
      <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-pulse" aria-hidden="true" />
      <span>Trancoso {time ? `· ${time}` : "· Bahia"}</span>
    </span>
  );
}

export default function Footer() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>("termos");
  const [wordmarkVisible, setWordmarkVisible] = useState(false);
  const wordmarkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOpenLegal = (e: Event) => {
      const customEvent = e as CustomEvent<LegalTab>;
      if (customEvent.detail) {
        setLegalTab(customEvent.detail);
        setIsLegalOpen(true);
      }
    };
    window.addEventListener("open-legal", handleOpenLegal);
    return () => window.removeEventListener("open-legal", handleOpenLegal);
  }, []);

  useEffect(() => {
    const node = wordmarkRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setWordmarkVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setWordmarkVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 80px 0px", threshold: 0.01 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const openLegal = (tab: LegalTab) => {
    setLegalTab(tab);
    setIsLegalOpen(true);
  };

  const handleOpenCookiePreferences = () => {
    window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
  };

  const wordmarkChars = Array.from(SITE_CONFIG.brandName.toUpperCase());

  return (
    <footer
      className="relative bg-[#09121F] text-[#F7F4EE] pt-20 sm:pt-24 overflow-hidden border-t border-[#C9A45C]/15"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-white/12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#C9A45C]/40 bg-[#09121F] shrink-0">
                <Image
                  src={SITE_CONFIG.logoPath}
                  alt={SITE_CONFIG.brandName}
                  fill
                  unoptimized
                  sizes="40px"
                  className="object-cover scale-110"
                />
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#E6CFA0]">
                {SITE_CONFIG.brandName}
              </span>
            </div>
            <p className="text-sm text-[#F7F4EE]/72 leading-relaxed max-w-xs">
              Profissionais treinados para casas de aluguel, pousadas e eventos em Trancoso: camareiras, chefes de cozinha, bartenders, garçons e jardineiros.
            </p>
            <TrancosoClock />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F7F4EE]/50 mb-4">
              Navegação
            </p>
            <ul className="space-y-2.5 text-sm text-[#F7F4EE]/80">
              <li>
                <a href="#inicio" className="hover:text-[#E6CFA0] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-[#E6CFA0] transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#funcoes" className="hover:text-[#E6CFA0] transition-colors">
                  Profissionais (5 funções)
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#E6CFA0] transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-[#E6CFA0] transition-colors">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#fundador" className="hover:text-[#E6CFA0] transition-colors">
                  Fundador
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E6CFA0] transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F7F4EE]/50 mb-4">
              Atendimento Direto
            </p>
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_GENERAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Werlandes Suport"
                title="WhatsApp"
                className="w-11 h-11 rounded-full bg-white/8 hover:bg-[#C9A45C] text-[#E6CFA0] hover:text-[#09121F] border border-white/15 hover:border-[#C9A45C] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </a>

              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Werlandes Suport"
                title="Instagram"
                className="w-11 h-11 rounded-full bg-white/8 hover:bg-[#C9A45C] text-[#E6CFA0] hover:text-[#09121F] border border-white/15 hover:border-[#C9A45C] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.companyEmail}`}
                aria-label="E-mail da Werlandes Suport"
                title="E-mail"
                className="w-11 h-11 rounded-full bg-white/8 hover:bg-[#C9A45C] text-[#E6CFA0] hover:text-[#09121F] border border-white/15 hover:border-[#C9A45C] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-4 text-sm text-[#F7F4EE]/55">{SITE_CONFIG.companyLocation}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F7F4EE]/50 mb-4">
              Padrão de Operação
            </p>
            <ul className="space-y-2.5 text-sm text-[#F7F4EE]/75">
              {FOOTER_INFO_ITEMS.map((item) => (
                <li key={item.label} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                      item.accent === "primary" ? "bg-[#C9A45C]" : "bg-[#E6CFA0]"
                    }`}
                  />
                  {"opensLegal" in item && item.opensLegal ? (
                    <button
                      type="button"
                      onClick={() => openLegal(item.opensLegal)}
                      className="hover:text-[#E6CFA0] transition-colors cursor-pointer text-left"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Giant Metallic Gold Wordmark */}
      <div
        ref={wordmarkRef}
        data-wordmark
        aria-hidden="true"
        className="w-full overflow-hidden flex justify-center select-none pt-10 sm:pt-14 pb-3 px-3"
      >
        <div className="flex items-baseline justify-center font-semibold tracking-[-0.055em] leading-[0.86] text-[clamp(1.85rem,8.8vw,9.8rem)] whitespace-nowrap">
          {wordmarkChars.map((ch, idx) => (
            <span
              key={idx}
              style={{
                transitionDelay: wordmarkVisible ? `${idx * 28}ms` : "0ms",
              }}
              className={`inline-block transition-all duration-700 ease-out ${
                wordmarkVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <span className="inline-block bg-gradient-to-b from-[#F5E6C4] via-[#C9A45C]/85 to-[#C9A45C]/18 bg-clip-text text-transparent transition-transform duration-300 hover:-translate-y-2">
                {ch === " " ? "\u00A0" : ch}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Legal & LGPD Bar */}
      <div className="max-w-[1240px] mx-auto px-5 sm:px-10 pt-6 pb-24 sm:pb-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F7F4EE]/60">
          <p>
            © {SITE_CONFIG.year} {SITE_CONFIG.brandName} · Trancoso, Bahia.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openLegal("termos")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => openLegal("privacidade")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacidade
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => openLegal("garantia")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Condições
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => openLegal("reembolso")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Reembolso
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={handleOpenCookiePreferences}
              className="text-[#E6CFA0] hover:text-white font-medium transition-colors cursor-pointer"
            >
              Cookies
            </button>
          </div>

          <a
            href="#inicio"
            className="inline-flex items-center gap-1.5 text-[#F7F4EE]/85 hover:text-[#E6CFA0] transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        <p className="mt-4 text-[11px] text-[#F7F4EE]/38 text-center">
          Operação em conformidade com a LGPD (Lei Nº 13.709/2018) e CDC (Lei Nº 8.078/1990) · DPO: {SITE_CONFIG.dpoEmail}
        </p>
      </div>

      <LegalModal
        isOpen={isLegalOpen}
        activeTab={legalTab}
        onClose={() => setIsLegalOpen(false)}
        onSelectTab={(tab) => setLegalTab(tab)}
      />
    </footer>
  );
}
