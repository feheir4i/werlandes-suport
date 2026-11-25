export const SITE_CONFIG = {
  siteUrl: "https://werlandessuport.com.br",
  brandName: "Werlandes Suport",
  brandShort: "Werlandes",
  brandSubtitle: "Trancoso · Bahia",
  companyName: "Werlandes Suport — Equipes para Casas de Alto Padrão e Eventos",
  companyEmail: "contato@werlandessuport.com.br",
  dpoEmail: "privacidade@werlandessuport.com.br",
  companyLocation: "Trancoso, Bahia — Brasil",
  phoneDisplay: "(73) 99943-8994",
  whatsappNumber: "5573999438994",
  instagramUrl: "https://www.instagram.com/werlandes_suport",
  instagramHandle: "@werlandes_suport",
  year: "2026",
  cookieStorageKey: "werlandes_suport_cookie_consent",
  logoPath: "/images/logo-werlandes.webp",
  ogImagePath: "/images/hero-werlandes-poster.webp",
  seo: {
    title: "Werlandes Suport | Equipes para Casas e Eventos em Trancoso",
    description:
      "Equipes treinadas em Trancoso para casas de temporada e eventos: camareiras, chefes de cozinha, bartenders, garçons e jardineiros. Solicite pelo WhatsApp.",
    keywords: [
      "Werlandes Suport Trancoso",
      "equipe para casas de aluguel Trancoso",
      "bartender para eventos Trancoso",
      "chefe de cozinha privativo Trancoso",
      "garçom casamento Trancoso",
      "camareira pousada Trancoso",
      "jardineiro Trancoso Bahia",
    ],
    priceRange: "$$$",
    paymentAccepted: "PIX, Transferência Bancária, Cartão",
    schemaType: "LocalBusiness",
  },
  hero: {
    badge: "Trancoso - Casas e Eventos",
    headlineLead: "Equipe treinada e capacitada",
    headlineSerif: "para seu evento.",
    headlineTail: "",
    headline: "Equipe treinada e capacitada para seu evento",
    subheadline:
      "Camareiras, chefes de cozinha, bartenders, garçons e jardineiros selecionados pela Werlandes Suport. Sua operação pronta antes dos convidados chegarem.",
    primaryCtaLabel: "Solicitar Equipe no WhatsApp",
    primaryCtaHref: "#funcoes",
    secondaryCtaLabel: "Ver Profissionais",
    posterUrl: "/images/hero-werlandes-poster.webp",
    imageUrl: "/images/hero-werlandes-poster.webp",
  },
  whatsappMessages: {
    general:
      "Olá, Werlandes! Vim pelo site da Werlandes Suport e gostaria de consultar disponibilidade de equipe em Trancoso.",
    faq: "Olá! Estava conferindo as informações no site da Werlandes Suport e gostaria de tirar uma dúvida sobre a contratação.",
    legal:
      "Olá! Gostaria de falar sobre os Termos de Uso ou Políticas de Privacidade da Werlandes Suport.",
    notFound:
      "Olá! Acessei uma página indisponível no site da Werlandes Suport e gostaria de falar com o atendimento.",
  },
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_GENERAL_URL = buildWhatsAppUrl(SITE_CONFIG.whatsappMessages.general);
export const WHATSAPP_FAQ_URL = buildWhatsAppUrl(SITE_CONFIG.whatsappMessages.faq);
export const WHATSAPP_LEGAL_URL = buildWhatsAppUrl(SITE_CONFIG.whatsappMessages.legal);
export const WHATSAPP_NOT_FOUND_URL = buildWhatsAppUrl(SITE_CONFIG.whatsappMessages.notFound);

export const MANIFESTO_DATA = {
  eyebrow: "Hospitalidade sob demanda em Trancoso",
  leadBefore: "Quando uma vila recebe hóspedes ou um evento começa, a Werlandes Suport",
  inlinePhoto: "/images/equipe-uniforme-preto.webp",
  leadAfter:
    "coloca em campo profissionais selecionados, uniformizados e pontuais para cuidar da cozinha, do bar, do salão, dos quartos e do jardim.",
  stats: [
    { value: "5", label: "funções especializadas sob demanda em um único contato" },
    { value: "2", label: "frentes de atuação: casas de aluguel e eventos privativos" },
    { value: "100%", label: "equipe própria e parceira uniformizada com rigor de higiene" },
    { value: "Direto", label: "alinhamento rápido pelo WhatsApp para diária ou temporada" },
  ],
};

export interface RoleItem {
  id: string;
  index: string;
  title: string;
  context: string;
  summary: string;
  detail: string;
  tags: string[];
  galleryAspect?: "square" | "landscape";
  gallery: { src: string; alt: string }[];
  whatsappMessage: string;
}

export const ROLES_SECTION = {
  eyebrow: "Profissionais Disponíveis",
  title: "Cinco funções essenciais para manter a casa e o evento impecáveis.",
  subtitle:
    "Acione um único profissional para reforçar sua rotina ou feche uma equipe completa coordenada para toda a temporada.",
  items: [
    {
      id: "camareira",
      index: "01",
      title: "Camareira",
      context: "Casas de Aluguel & Pousadas",
      summary: "Organização diária de quartos e enxoval",
      detail:
        "Arrumação padrão hotelaria de camas, troca e dobra de enxoval, reposição de amenidades e organização silenciosa das suítes para acolher cada hóspede com conforto.",
      tags: ["Padrão hotelaria", "Troca de enxoval", "Discrição total", "Diária ou temporada"],
      gallery: [
        { src: "/images/camareira-quarto-praia.webp", alt: "Camareira uniformizada preparando suíte com vista para o mar" },
        { src: "/images/camareira-suite-luxo.webp", alt: "Suíte de alto padrão organizada para receber hóspedes" },
        { src: "/images/camareira-carrinho.webp", alt: "Carrinho com toalhas e enxoval branco dobrado" },
      ],
      whatsappMessage:
        "Olá! Gostaria de solicitar disponibilidade de Camareira pela Werlandes Suport em Trancoso.",
    },
    {
      id: "chefe-de-cozinha",
      index: "02",
      title: "Chefe de Cozinha",
      context: "Casas de Aluguel & Eventos",
      summary: "Cardápios autorais, preparo e empratamento",
      detail:
        "Planejamento de cardápio, preparo de refeições frescas para a rotina da casa e empratamento de alto nível para jantares, casamentos e celebrações com rigor de higiene.",
      tags: ["Café, almoço e jantar", "Empratamento para eventos", "Rigor sanitário", "Cardápio sob medida"],
      gallery: [
        { src: "/images/chef-finalizacao-peixe.webp", alt: "Chefe finalizando prato de peixe grelhado com ervas frescas" },
        { src: "/images/chef-azeite-prato.webp", alt: "Chefe regando prato autoral com azeite de ervas" },
        { src: "/images/chef-empratamento-evento.webp", alt: "Empratamento sequencial de entradas para evento" },
      ],
      whatsappMessage:
        "Olá! Gostaria de solicitar orçamento de Chefe de Cozinha pela Werlandes Suport em Trancoso.",
    },
    {
      id: "bartender",
      index: "03",
      title: "Bartender",
      context: "Casas de Aluguel & Eventos",
      summary: "Drinks clássicos e autorais na piscina ou no bar",
      detail:
        "Coquetelaria clássica e autoral com insumos frescos, apresentação cuidada e ritmo constante de atendimento na beira da piscina, na varanda ou na pista do evento.",
      tags: ["Coquetelaria autoral", "Drinks clássicos", "Bar de piscina e eventos", "Atendimento ágil"],
      galleryAspect: "square" as const,
      gallery: [
        { src: "/images/bartender-drink-rosa.webp", alt: "Drink autoral rosa com hortelã e anis servido na varanda" },
        { src: "/images/bartender-drink-verde.webp", alt: "Drink verde refrescante finalizado com hortelã e anis estrelado" },
        { src: "/images/bartender-moscow-bolo.webp", alt: "Drink cremoso servido em caneca de cobre com bolo de rolo" },
      ],
      whatsappMessage:
        "Olá! Gostaria de contratar Bartender pela Werlandes Suport em Trancoso.",
    },
    {
      id: "garcom",
      index: "04",
      title: "Garçom",
      context: "Eventos, Jantares & Recepções",
      summary: "Serviço de salão cordial, elegante e atento",
      detail:
        "Atendimento à mesa e volante em casamentos, aniversários, eventos corporativos e jantares privativos, mantendo taças cheias e mesas organizadas com postura discreta.",
      tags: ["Serviço volante e à mesa", "Uniforme alinhado", "Casamentos e festas", "Postura discreta"],
      galleryAspect: "square" as const,
      gallery: [
        { src: "/images/equipe-branco-trancoso.webp", alt: "Equipe de atendimento vestida de branco para recepções em Trancoso" },
        { src: "/images/equipe-uniforme-preto.webp", alt: "Equipe uniformizada com a marca Werlandes Suport" },
      ],
      whatsappMessage:
        "Olá! Preciso de Garçom pela Werlandes Suport em Trancoso e gostaria de consultar disponibilidade.",
    },
    {
      id: "jardineiro",
      index: "05",
      title: "Jardineiro",
      context: "Casas de Aluguel & Condomínios",
      summary: "Manutenção de jardins tropicais e áreas externas",
      detail:
        "Corte de gramado, poda de palmeiras e helicônias, limpeza de caminhos e cuidado contínuo de paisagismo tropical para manter a fachada e o entorno da piscina sempre valorizados.",
      tags: ["Paisagismo tropical", "Poda e gramado", "Visitas periódicas", "Cuidado de áreas externas"],
      galleryAspect: "square" as const,
      gallery: [
        { src: "/images/jardim-fonte-tropical.webp", alt: "Fonte de madeira rodeada por plantas tropicais bem cuidadas" },
        { src: "/images/jardim-gramado.webp", alt: "Gramado verde aparado cercado por mata e palmeiras" },
        { src: "/images/jardim-corredor-heliconias.webp", alt: "Corredor ajardinado com helicônias e buganvílias" },
      ],
      whatsappMessage:
        "Olá! Gostaria de solicitar serviço de Jardineiro pela Werlandes Suport em Trancoso.",
    },
  ] satisfies RoleItem[],
};

export interface ShowcaseCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  badge: string;
  image: string;
  objectPosition?: string;
}

export const SHOWCASE_SECTION = {
  eyebrow: "Portfólio de Operação",
  title: "Da rotina diária da vila à última taça do evento.",
  nextCardTitle: "Monte sua equipe em Trancoso.",
  nextCardText:
    "Informe a data, o local e quais funções precisa no WhatsApp para receber o retorno direto.",
  nextCardCta: "Solicitar no WhatsApp",
  items: [
    {
      id: "gastronomia-mesa",
      tag: "Chefe de Cozinha",
      title: "Empratamento autoral para jantares e estadias",
      description:
        "Preparo fresco com técnicas de restaurante dentro da cozinha da sua casa ou evento.",
      badge: "Gastronomia",
      image: "/images/chef-finalizacao-peixe.webp",
      objectPosition: "center center",
    },
    {
      id: "coquetelaria-piscina",
      tag: "Bartender",
      title: "Coquetelaria fresca à beira da piscina e em festas",
      description:
        "Drinks autorais e clássicos com acabamento impecável e insumos selecionados.",
      badge: "Coquetelaria",
      image: "/images/bartender-drink-rosa.webp",
      objectPosition: "center center",
    },
    {
      id: "governanca-suites",
      tag: "Camareira",
      title: "Suítes impecáveis preparadas antes do check-in",
      description:
        "Cuidado rigoroso com enxoval, organização diária e discrição com os hóspedes.",
      badge: "Governança",
      image: "/images/camareira-quarto-praia.webp",
      objectPosition: "center 35%",
    },
    {
      id: "eventos-empratamento",
      tag: "Eventos & Recepções",
      title: "Ritmo coordenado para casamentos e celebrações",
      description:
        "Cozinha, bar e garçons trabalhando em sintonia para grupos grandes e eventos corporativos.",
      badge: "Eventos",
      image: "/images/chef-empratamento-evento.webp",
      objectPosition: "center center",
    },
    {
      id: "paisagismo-tropical",
      tag: "Jardineiro",
      title: "Jardins tropicais vivos, limpos e valorizados",
      description:
        "Manutenção contínua de gramados, fontes e folhagens típicas da Bahia.",
      badge: "Paisagismo",
      image: "/images/jardim-fonte-tropical.webp",
      objectPosition: "center center",
    },
    {
      id: "drink-nordeste",
      tag: "Bartender · Assinatura",
      title: "Detalhes que marcam a memória dos convidados",
      description:
        "Apresentação refinada com ingredientes locais e preparo ágil durante todo o evento.",
      badge: "Assinatura",
      image: "/images/bartender-moscow-bolo.webp",
      objectPosition: "center center",
    },
  ] satisfies ShowcaseCard[],
};

export const LEADERSHIP_SECTION = {
  eyebrow: "Nossa Equipe",
  title: "Profissionais uniformizados e prontos para a ocasião.",
  description:
    "Cada profissional é selecionado e acompanhado de perto em Trancoso, com postura discreta e uniforme alinhado ao perfil da casa, da pousada ou do evento.",
  founder: {
    name: "Werlandes",
    role: "Fundador · Coordenação de Operações",
    image: "/images/fundador-werlandes.webp",
    secondaryImage: "/images/fundador-costas-logo.webp",
  },
  teamPhotos: [
    {
      src: "/images/equipe-uniforme-preto.webp",
      label: "Uniforme oficial da marca",
      caption: "Padrão visual para eventos noturnos, corporativos e recepções",
      objectPosition: "50% 18%",
    },
    {
      src: "/images/equipe-branco-trancoso.webp",
      label: "Traje branco Trancoso",
      caption: "Leveza e elegância para casas de praia, casamentos e almoços",
      objectPosition: "50% 22%",
    },
    {
      src: "/images/equipe-praia-trancoso.webp",
      label: "Operação pé na areia",
      caption: "Atendimento diurno em casas frente-mar, beach clubs e day uses",
      objectPosition: "50% 24%",
    },
  ],
  pillars: [
    {
      title: "Profissionais Treinados",
      text: "Equipe capacitada para atender casas de alto padrão e eventos exigentes.",
    },
    {
      title: "Compromisso e Ética",
      text: "Atendimento pautado em respeito, discrição e responsabilidade dentro da residência.",
    },
    {
      title: "Higiene e Qualidade",
      text: "Padrões rigorosos de apresentação, limpeza e manipulação em cada detalhe.",
    },
    {
      title: "Foco no Cliente",
      text: "Escala personalizada conforme o número de hóspedes, o horário e o estilo da ocasião.",
    },
  ],
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_SECTION_COPY = {
  badge: "Dúvidas Frequentes",
  title: "Como funciona a contratação da equipe.",
  subtitle:
    "Atendemos desde reforços pontuais de um único profissional até equipes completas para alta temporada, casamentos e festas em Trancoso.",
  bottomCta: "Falar no WhatsApp",
};

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Posso contratar apenas um profissional ou preciso fechar a equipe inteira?",
    answer:
      "Você escolhe exatamente o que precisa. Fornecemos desde um único profissional para um dia específico, como um bartender ou uma camareira, até a equipe completa com chefe de cozinha, garçons, bar e apoio.",
  },
  {
    question: "Vocês atendem tanto casas de aluguel quanto eventos e casamentos?",
    answer:
      "Sim. Trabalhamos em duas frentes em Trancoso: suporte para casas de temporada e pousadas (diárias, semanas ou alta temporada) e equipes completas para casamentos, aniversários, jantares privativos e eventos corporativos.",
  },
  {
    question: "Os profissionais comparecem uniformizados?",
    answer:
      "Sim. A equipe atua com apresentação alinhada à ocasião, podendo usar o uniforme oficial preto da Werlandes Suport ou o traje branco praiano tradicional de Trancoso para eventos diurnos e casas de praia.",
  },
  {
    question: "Com quanta antecedência devo solicitar a equipe?",
    answer:
      "Para alta temporada, feriados e eventos maiores, recomendamos reservar assim que tiver a data definida. Para demandas urgentes em casas ou pousadas, chame direto no WhatsApp que verificamos a disponibilidade imediata.",
  },
  {
    question: "Como solicitar orçamento e confirmar a escala?",
    answer:
      "Clique no botão de WhatsApp informando data, local em Trancoso, número estimado de pessoas e as funções desejadas. Enviamos a proposta clara e alinhamos os horários antes da confirmação.",
  },
];

export const FOOTER_INFO_ITEMS = [
  { label: "Atendimento direto pelo WhatsApp", accent: "primary" as const },
  { label: "Casas de aluguel, pousadas e eventos em Trancoso", accent: "secondary" as const },
  { label: "Equipe uniformizada com foco em discrição e pontualidade", accent: "primary" as const },
  { label: "Política e Privacidade", accent: "secondary" as const, opensLegal: "privacidade" as const },
];
