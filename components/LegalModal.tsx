"use client";

import { useEffect } from "react";
import {
  X,
  ShieldCheck,
  FileText,
  RefreshCw,
  Lock,
  CircleDollarSign,
} from "lucide-react";
import { SITE_CONFIG, WHATSAPP_LEGAL_URL } from "@/lib/data";

export type LegalTab = "termos" | "privacidade" | "garantia" | "reembolso";

interface LegalModalProps {
  isOpen: boolean;
  activeTab: LegalTab;
  onClose: () => void;
  onSelectTab: (tab: LegalTab) => void;
}

export default function LegalModal({
  isOpen,
  activeTab,
  onClose,
  onSelectTab,
}: LegalModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Políticas e Informações Legais"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#09121F]/82 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] rounded-3xl bg-[#F7F4EE] text-[#0D1829] border border-[#C9A45C]/30 shadow-2xl flex flex-col overflow-hidden cursor-default"
      >
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 border-b border-[#0D1829]/10 bg-white/75">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#09121F] text-[#E6CFA0] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold tracking-[-0.01em] text-[#0D1829]">
                Políticas & Informações Legais
              </h3>
              <span className="text-[11px] text-[#475569]">
                {SITE_CONFIG.brandName} · Transparência e Ética
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela"
            className="w-10 h-10 rounded-full bg-[#EFEAE0] hover:bg-[#E2DBCD] text-[#0D1829] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div
          role="tablist"
          aria-label="Seções legais"
          className="flex items-center gap-2 px-5 sm:px-7 py-3 border-b border-[#0D1829]/10 bg-[#EFEAE0]/70 overflow-x-auto no-scrollbar"
        >
          {(
            [
              { id: "termos", label: "Termos de Uso", Icon: FileText },
              { id: "privacidade", label: "Privacidade", Icon: Lock },
              { id: "garantia", label: "Condições", Icon: RefreshCw },
              { id: "reembolso", label: "Reembolso", Icon: CircleDollarSign },
            ] as const
          ).map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeTab === id}
              aria-controls={`legal-panel-${id}`}
              onClick={() => onSelectTab(id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-[transform,background-color,color] duration-150 ease-out active:scale-[0.97] whitespace-nowrap cursor-pointer ${
                activeTab === id
                  ? "bg-[#09121F] text-[#E6CFA0] shadow-sm"
                  : "text-[#475569] hover:text-[#0D1829] hover:bg-white/75"
              }`}
            >
              <Icon className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div
          id={`legal-panel-${activeTab}`}
          role="tabpanel"
          className="flex-1 overflow-y-auto p-5 sm:p-7 text-sm text-[#475569] space-y-5 leading-relaxed"
        >
          {activeTab === "termos" && (
            <div className="space-y-4">
              <div>
                <h4 className="text-[#0D1829] font-semibold text-base mb-1">
                  1. Finalidade do Site
                </h4>
                <p>
                  Este site pertence à <strong>{SITE_CONFIG.brandName}</strong> e atua como canal oficial de apresentação dos serviços de suporte para casas de aluguel, pousadas e eventos em Trancoso. Orçamentos, escalas e confirmações são conduzidos diretamente pelo WhatsApp oficial ({SITE_CONFIG.phoneDisplay}).
                </p>
              </div>
              <div>
                <h4 className="text-[#0D1829] font-semibold text-base mb-1">
                  2. Propriedade Intelectual e Imagens
                </h4>
                <p>
                  Logotipo, fotografias da equipe, vídeos e textos publicados neste domínio são de uso exclusivo da <strong>{SITE_CONFIG.companyName}</strong>. A reprodução sem autorização prévia não é permitida.
                </p>
              </div>
              <div>
                <h4 className="text-[#0D1829] font-semibold text-base mb-1">
                  3. Disponibilidade e Condições Comerciais
                </h4>
                <p>
                  Valores variam conforme a quantidade de profissionais, carga horária, época do ano e perfil da residência ou evento, sempre confirmados por escrito antes do agendamento.
                </p>
              </div>
            </div>
          )}

          {activeTab === "privacidade" && (
            <div className="space-y-4">
              <div>
                <h4 className="text-[#0D1829] font-semibold text-base mb-1">
                  1. Conformidade com a LGPD (Lei Nº 13.709/2018)
                </h4>
                <p>
                  A <strong>{SITE_CONFIG.brandName}</strong> trata os dados pessoais de visitantes e clientes em conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD).
                </p>
              </div>
              <div>
                <h4 className="text-[#0D1829] font-semibold text-base mb-1">
                  2. Navegação sem Cadastro Obrigatório
                </h4>
                <p>
                  Este site não solicita senhas nem dados bancários no navegador. Utilizamos apenas cookies técnicos essenciais para segurança e registro da sua preferência de privacidade.
                </p>
              </div>
              <div>
                <h4 className="text-[#0D1829] font-semibold text-base mb-1">
                  3. Direitos do Titular e DPO
                </h4>
                <p>
                  Solicitações de acesso, correção ou exclusão de dados podem ser enviadas a qualquer momento para <strong>{SITE_CONFIG.dpoEmail}</strong> ou WhatsApp ({SITE_CONFIG.phoneDisplay}).
                </p>
              </div>
            </div>
          )}

          {activeTab === "garantia" && (
            <div className="space-y-4">
              <div>
                <h4 className="text-[#0D1829] font-semibold text-base mb-1">
                  1. Transparência e Código de Defesa do Consumidor
                </h4>
                <p>
                  Todas as contratações realizadas à distância observam o Código de Defesa do Consumidor (Lei Nº 8.078/1990), com envio prévio das condições de horário, escopo e valores pelo atendimento oficial.
                </p>
              </div>
              <div>
                <h4 className="text-[#0D1829] font-semibold text-base mb-1">
                  2. Alterações de Escala e Cancelamento
                </h4>
                <p>
                  Prazos para alteração de datas, acréscimo de profissionais ou cancelamentos são informados com clareza antes da confirmação da equipe.
                </p>
              </div>
            </div>
          )}

          {activeTab === "reembolso" && (
            <div className="space-y-4">
              <div>
                <h4 className="text-[#0D1829] font-semibold text-base mb-1">
                  1. Diretrizes e Prazos de Estorno
                </h4>
                <p>
                  A <strong>{SITE_CONFIG.companyName}</strong> assegura a restituição de valores nos casos previstos em lei e no acordo da contratação:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    <strong>PIX ou Transferência:</strong> estorno na mesma titularidade em até <strong>48 horas úteis</strong> após aprovação.
                  </li>
                  <li>
                    <strong>Cartão de Crédito:</strong> solicitação encaminhada à operadora em até <strong>3 dias úteis</strong>.
                  </li>
                </ul>
              </div>
              <p className="text-[#0D1829] font-medium">
                Contato oficial: {SITE_CONFIG.phoneDisplay} · {SITE_CONFIG.companyEmail}
              </p>
            </div>
          )}
        </div>

        <div className="px-5 sm:px-7 py-4 border-t border-[#0D1829]/10 bg-white/75 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-[#475569] text-center sm:text-left">
            Precisa esclarecer alguma condição da contratação?
          </span>
          <a
            href={WHATSAPP_LEGAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 h-10 rounded-full bg-[#09121F] hover:bg-[#162740] text-[#E6CFA0] font-medium text-xs transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
