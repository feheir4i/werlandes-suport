import Link from "next/link";
import { SITE_CONFIG, WHATSAPP_NOT_FOUND_URL } from "@/lib/data";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#09121F] text-[#F7F4EE] flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center py-14 px-7 rounded-3xl bg-[#101D30] border border-[#C9A45C]/25 shadow-2xl">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#E6CFA0] mb-3">
          Página não encontrada
        </span>
        <h1 className="font-serif-editorial text-4xl text-white mb-3">404</h1>
        <p className="text-[#F7F4EE]/75 text-sm leading-relaxed mb-7">
          O endereço acessado não existe ou foi atualizado. Volte para a página oficial da {SITE_CONFIG.brandName} ou fale direto no WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-11 rounded-full bg-[#C9A45C] hover:bg-[#DFBD77] text-[#09121F] text-sm font-semibold transition-colors"
          >
            Voltar ao Início
          </Link>
          <a
            href={WHATSAPP_NOT_FOUND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 h-11 rounded-full bg-white/10 hover:bg-white/18 text-white text-sm font-medium transition-colors"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
