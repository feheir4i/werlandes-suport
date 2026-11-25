"use client";

import { useState, useEffect } from "react";
import { Cookie, ShieldCheck, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import { getCookieConsent, setCookieConsent } from "@/services/storage";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = getCookieConsent(SITE_CONFIG.cookieStorageKey);
    if (!stored) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpen = () => setIsVisible(true);
    window.addEventListener("open-cookie-preferences", handleOpen);
    return () => window.removeEventListener("open-cookie-preferences", handleOpen);
  }, []);

  const handleAcceptAll = () => {
    setCookieConsent(SITE_CONFIG.cookieStorageKey, "all");
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: "all" }));
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    setCookieConsent(SITE_CONFIG.cookieStorageKey, "essential");
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: "essential" }));
    setIsVisible(false);
  };

  const handleOpenPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-legal", { detail: "privacidade" }));
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Aviso de Privacidade e Gestão de Cookies"
      role="region"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 rounded-3xl bg-[#09121F]/95 backdrop-blur-xl border border-[#C9A45C]/28 p-5 shadow-[0_24px_50px_-16px_rgba(0,0,0,0.65)] text-[#F7F4EE] transition-[transform,opacity] duration-200 ease-out"
    >
      <div className="flex items-start gap-3.5">
        <div className="w-9 h-9 rounded-full bg-[#C9A45C]/15 text-[#E6CFA0] flex items-center justify-center shrink-0 mt-0.5">
          <Cookie className="w-4 h-4" aria-hidden="true" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h4 className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
              <span>Privacidade &amp; Cookies</span>
              <span className="inline-flex items-center gap-1 text-[10px] text-[#E6CFA0] font-semibold bg-[#C9A45C]/15 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3" aria-hidden="true" /> LGPD
              </span>
            </h4>
            <button
              type="button"
              onClick={handleAcceptEssential}
              aria-label="Fechar aviso e manter apenas cookies essenciais"
              className="text-white/55 hover:text-white p-1 rounded-full transition-colors duration-150 cursor-pointer"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <p className="text-xs text-white/75 leading-relaxed">
            Usamos cookies técnicos essenciais para segurança e funcionamento do site, em conformidade com a LGPD.
          </p>

          <div className="mt-2 text-xs">
            <button
              type="button"
              onClick={handleOpenPrivacy}
              className="text-[#E6CFA0] hover:text-white underline font-medium transition-colors duration-150 cursor-pointer"
            >
              Ler Política de Privacidade
            </button>
          </div>

          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/12">
            <button
              type="button"
              onClick={handleAcceptAll}
              className="flex-1 py-2.5 px-4 rounded-full bg-[#C9A45C] hover:bg-[#DFBD77] text-[#09121F] text-xs font-semibold transition-[transform,background-color] duration-150 ease-out active:scale-[0.97] cursor-pointer"
            >
              Aceitar Todos
            </button>

            <button
              type="button"
              onClick={handleAcceptEssential}
              className="py-2.5 px-4 rounded-full bg-white/8 hover:bg-white/14 border border-white/15 text-white text-xs font-medium transition-[transform,background-color] duration-150 ease-out active:scale-[0.97] cursor-pointer"
            >
              Apenas Essenciais
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
