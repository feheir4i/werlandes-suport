import type { Metadata, Viewport } from "next";
import "./globals.css";
import { FAQ_DATA, ROLES_SECTION, SITE_CONFIG } from "@/lib/data";

export const viewport: Viewport = {
  themeColor: "#09121F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: SITE_CONFIG.seo.title,
  description: SITE_CONFIG.seo.description,
  alternates: {
    canonical: SITE_CONFIG.siteUrl,
  },
  icons: {
    icon: SITE_CONFIG.logoPath,
    apple: SITE_CONFIG.logoPath,
  },
  keywords: [...SITE_CONFIG.seo.keywords],
  authors: [{ name: SITE_CONFIG.brandName }],
  creator: SITE_CONFIG.brandName,
  publisher: SITE_CONFIG.brandName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    url: SITE_CONFIG.siteUrl,
    type: "website",
    locale: "pt_BR",
    siteName: SITE_CONFIG.brandName,
    images: [
      {
        url: SITE_CONFIG.ogImagePath,
        width: 1672,
        height: 941,
        alt: `${SITE_CONFIG.brandName} — Trancoso, Bahia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    images: [SITE_CONFIG.ogImagePath],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": SITE_CONFIG.seo.schemaType,
      "@id": `${SITE_CONFIG.siteUrl}/#organization`,
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.siteUrl,
      logo: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.logoPath}`,
      image: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.ogImagePath}`,
      description: SITE_CONFIG.seo.description,
      telephone: "+5573999438994",
      email: SITE_CONFIG.companyEmail,
      priceRange: SITE_CONFIG.seo.priceRange,
      currenciesAccepted: "BRL",
      paymentAccepted: SITE_CONFIG.seo.paymentAccepted,
      founder: {
        "@type": "Person",
        name: "Werlandes",
        jobTitle: "Fundador e Diretor de Operações",
      },
      areaServed: [
        { "@type": "Place", name: "Trancoso, Porto Seguro - BA" },
        { "@type": "State", name: "Bahia" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Trancoso",
        addressRegion: "BA",
        addressCountry: "BR",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Equipes para Casas de Temporada e Eventos em Trancoso",
        itemListElement: ROLES_SECTION.items.map((role) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: role.title,
            description: role.detail,
            areaServed: "Trancoso, BA",
          },
        })),
      },
      sameAs: [SITE_CONFIG.instagramUrl],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.siteUrl}/#website`,
      url: SITE_CONFIG.siteUrl,
      name: SITE_CONFIG.brandName,
      publisher: { "@id": `${SITE_CONFIG.siteUrl}/#organization` },
      inLanguage: "pt-BR",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_CONFIG.siteUrl}/#faq`,
      mainEntity: FAQ_DATA.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preload" as="image" href="/images/hero-werlandes-poster.webp" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd }}
        />
      </head>
      <body className="bg-[#F7F4EE] text-[#0D1829] antialiased selection:bg-[#C9A45C] selection:text-[#09121F]">
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-[#09121F] focus:text-[#E6CFA0] focus:border focus:border-[#C9A45C] focus:text-sm focus:font-semibold"
        >
          Ir para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
