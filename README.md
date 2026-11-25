# Código Base Piloto — Sites de Apresentação

Base extraída do projeto `fhr-imports` sem o módulo de catálogo, preservando toda a infraestrutura pronta de segurança, SEO, LGPD, FAQ, galeria/avaliações com lightbox e conversão via WhatsApp.

## O que já vem pronto
- **Segurança HTTP (`next.config.ts`)**: HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy` e `Permissions-Policy`.
- **SEO completo**: Metadata, OpenGraph, Twitter Card, JSON-LD (`app/layout.tsx`), `app/robots.ts`, `app/sitemap.ts` e `app/not-found.tsx`.
- **LGPD & Compliance**: Banner de cookies (`components/CookieConsent.tsx` + `services/storage.ts`) e modal legal com 4 abas (`components/LegalModal.tsx`).
- **Estrutura de Apresentação**:
  - `components/Navbar.tsx` (com Dock animado)
  - `components/Hero.tsx` (suporta vídeo ambiente ou imagem de capa)
  - `components/PresentationSection.tsx` (blocos de diferenciais / ambientes / serviços)
  - `components/ui/marquee-card.tsx` (carrossel horizontal + zoom em lightbox)
  - `components/FAQSection.tsx` (perguntas filtráveis por categoria + CTA WhatsApp)
  - `components/Footer.tsx` e `components/WhatsAppFloat.tsx`

## Como usar em um novo nicho (ex.: Pousadas & Casas de Luxo)
1. Duplique a pasta `codigo-base-piloto` com o nome do novo projeto.
2. Edite **`lib/data.ts`** com nome da marca, domínio, WhatsApp, Instagram, textos do Hero, destaques de apresentação, fotos/avaliações e FAQ.
3. Substitua as imagens/vídeos em **`public/`** (`logo-icon.svg`, fotos da galeria e capa/vídeo do Hero).
4. Ajuste a paleta e fontes em **`app/globals.css`** (e classes de destaque se quiser outra cor principal).
5. Instale e rode:
   ```bash
   npm install
   npm run dev
   ```
