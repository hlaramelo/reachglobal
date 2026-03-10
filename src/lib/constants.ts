export const FUND_INFO = {
  name: "Reach Global USD",
  strategy: "Long Only Global Equities",
  currency: "USD (sem variação cambial)",
  benchmark: "MSCI ACWI",
  liquidity: "D+60",
  targetAudience: "Investidor Qualificado",
  positions: "10–20 empresas",
  manager: "Henrique Lara",
  regulation: "ANBIMA — Código de Melhores Práticas",
  aum: "+R$ 2,8 bilhões",
  fundPL: "R$ 35,4 milhões / USD 6,78 milhões",
  navCalculation: "Diário",
};

export const HERO_STATS = [
  { value: "+19,0%", label: "Retorno Acumulado", sublabel: "USD, desde o início" },
  { value: "+6,1pp", label: "Alpha vs. ACWI", sublabel: "ACWI +12,9% no mesmo período" },
  { value: "D+60", label: "Liquidez", sublabel: "Investidores qualificados" },
];

export const MONTHLY_RETURNS = {
  headers: [
    "Mar", "Abr", "Mai", "Jun", "Jul", "Ago",
    "Set", "Out", "Nov", "Dez", "Jan'26", "Ano", "Acum.",
  ],
  fund: [
    "-2,7%", "+1,7%", "+9,1%", "+1,7%", "+5,3%", "-2,9%",
    "+3,3%", "+2,0%", "-3,3%", "+1,7%", "+2,2%", "+16,4%", "+19,0%",
  ],
  benchmark: [
    "-2,8%", "-0,1%", "+6,4%", "-0,9%", "+4,5%", "-0,9%",
    "+1,5%", "+3,3%", "-1,0%", "+4,0%", "-1,5%", "+14,7%", "+12,9%",
  ],
};

export const STRATEGY_PILLARS = [
  {
    title: "Oportunidades Assimétricas",
    description:
      "Retorno esperado acima do custo de oportunidade; baixo risco de perda permanente de capital.",
    icon: "asymmetric",
  },
  {
    title: "Crescimento Estrutural",
    description:
      "Do lado certo de tendências de longo prazo, especialmente tecnologia; permite alongar permanência das teses.",
    icon: "growth",
  },
  {
    title: "Flexibilidade Geográfica",
    description:
      "Sem restrições de índice, país ou setor; vamos onde as melhores empresas estão.",
    icon: "globe",
  },
  {
    title: "Qualidade Importa",
    description:
      "Vantagens competitivas duráveis, poder de mercado, governança alinhada.",
    icon: "quality",
  },
  {
    title: "Mitigação de Risco",
    description:
      "Processo robusto, checklist quantitativo, dimensionamento disciplinado, consciência macro integrada.",
    icon: "shield",
  },
];

export const PORTFOLIO_TIERS = [
  {
    percentage: "70%",
    title: "Principais Posições",
    subtitle: "Alta convicção, longo prazo",
    description:
      "Teses que passaram por processo rigoroso; ficamos expostos enquanto o fundamento justifica.",
  },
  {
    percentage: "20%",
    title: "Posições Táticas",
    subtitle: "Catalisador de curto/médio prazo identificado",
    description:
      "Resultados, eventos regulatórios, rotação setorial.",
  },
  {
    percentage: "10%",
    title: "Posições Exploratórias",
    subtitle: "Teses em construção, situações especiais",
    description:
      "Assimetria evidente e risco controlado.",
  },
];

export const TOP_CONTRIBUTORS = [
  { ticker: "TSM", name: "Taiwan Semiconductor", sector: "Semicondutores", region: "Ásia", domain: "tsmc.com" },
  { ticker: "NVDA", name: "Nvidia", sector: "Semicondutores", region: "EUA", domain: "nvidia.com" },
  { ticker: "ASML", name: "ASML", sector: "Semicondutores", region: "Europa", domain: "asml.com" },
  { ticker: "AAPL", name: "Apple", sector: "Tecnologia", region: "EUA", domain: "apple.com" },
  { ticker: "AMAT", name: "Applied Materials", sector: "Semicondutores", region: "EUA", domain: "appliedmaterials.com" },
  { ticker: "AEM", name: "Agnico Eagle", sector: "Mineração", region: "Americas", domain: "agnicoeagle.com" },
  { ticker: "SCCO", name: "Southern Copper", sector: "Mineração", region: "Americas", domain: "southerncoppercorp.com" },
  { ticker: "BYMA", name: "BYMA", sector: "Financeiro", region: "Americas", domain: "byma.com.ar" },
  { ticker: "SK", name: "SK Hynix", sector: "Semicondutores", region: "Ásia", domain: "skhynix.com" },
  { ticker: "GEV", name: "GE Vernova", sector: "Energia", region: "EUA", domain: "gevernova.com" },
  { ticker: "CAT", name: "Caterpillar", sector: "Industrial", region: "EUA", domain: "caterpillar.com" },
  { ticker: "JPM", name: "JPMorgan", sector: "Financeiro", region: "EUA", domain: "jpmorganchase.com" },
];

export const SCORING_CRITERIA = [
  "Valor da Empresa",
  "Vantagens Competitivas",
  "Governança",
  "Eventos Específicos",
  "Alinhamento Macro",
  "Assimetria",
  "Convicção",
];

export const POSITION_SIZING = [
  { score: 10, allocation: "20%" },
  { score: 7, allocation: "14%" },
  { score: 5, allocation: "10%" },
  { score: 3, allocation: "6%" },
  { score: 1, allocation: "2%" },
];

export const ATTRIBUTION_BY_SECTOR = [
  { name: "Tecnologia", value: 11.19 },
  { name: "Semicondutores", value: 10.72 },
  { name: "Commodities", value: 8.61 },
  { name: "Financeiro", value: 0.72 },
  { name: "Varejo", value: 0.62 },
  { name: "Saúde", value: 0.27 },
  { name: "Infraestrutura", value: 0.05 },
  { name: "Caixa", value: 0.03 },
  { name: "Crypto", value: -0.12 },
  { name: "Industrial", value: -0.13 },
  { name: "Imobiliário", value: -0.19 },
  { name: "Defesa e Segurança", value: -0.20 },
  { name: "Energia", value: -0.81 },
  { name: "Custos", value: -4.18 },
  { name: "Câmbio", value: -7.64 },
];

export const ATTRIBUTION_BY_REGION = [
  { name: "EUA", value: 13.03 },
  { name: "Americas Ex-EUA", value: 10.08 },
  { name: "Ásia", value: 7.33 },
  { name: "Oceania", value: 0.62 },
  { name: "Crypto", value: -0.12 },
  { name: "Europa", value: -0.16 },
  { name: "Custos", value: -4.18 },
  { name: "Câmbio", value: -7.64 },
];

export const CONTACT_INFO = {
  email: "comercial@reachcapital.com.br",
  phone: "+55 11 2348-0100",
  address: "Rua Iguatemi 448, 16º andar — Itaim Bibi, São Paulo SP 01451-010",
  website: "www.reachcapital.com.br",
  instagram: "@reachasset",
  linkedin: "/company/reachcapital",
};

export const NAV_LINKS = [
  { label: "Performance", href: "#performance" },
  { label: "Estratégia", href: "#strategy" },
  { label: "Carteira", href: "#portfolio" },
  { label: "Processo", href: "#process" },
  { label: "Atribuição", href: "#attribution" },
  { label: "Detalhes", href: "#facts" },
  { label: "Contato", href: "#contact" },
];
