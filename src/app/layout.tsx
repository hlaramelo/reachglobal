import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Reach Global USD — Ações Globais. Em Dólar. Sem Câmbio.",
  description:
    "Estratégia long only agnóstica a setor, país e tamanho — construída para capturar as melhores oportunidades do mundo com proteção cambial natural. +19% retorno acumulado, +6,1pp alpha vs ACWI.",
  keywords: [
    "Reach Global",
    "Reach Capital",
    "investimento global",
    "ações globais",
    "dólar",
    "MSCI ACWI",
    "long only",
    "gestão de ativos",
    "fundo de investimento",
    "investidor qualificado",
  ],
  openGraph: {
    title: "Reach Global USD — Ações Globais. Em Dólar. Sem Câmbio.",
    description:
      "Estratégia long only global com +19% de retorno acumulado e +6,1pp de alpha vs ACWI. Proteção cambial natural.",
    type: "website",
    locale: "pt_BR",
    siteName: "Reach Global USD — Reach Capital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reach Global USD — Ações Globais. Em Dólar. Sem Câmbio.",
    description:
      "Estratégia long only global com +19% de retorno acumulado e +6,1pp de alpha vs ACWI.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#0D1F3C",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InvestmentFund",
              name: "Reach Global USD",
              description:
                "Estratégia long only agnóstica a setor, país e tamanho — construída para capturar as melhores oportunidades do mundo com proteção cambial natural.",
              provider: {
                "@type": "Organization",
                name: "Reach Capital",
                url: "https://www.reachcapital.com.br",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Rua Iguatemi 448, 16º andar",
                  addressLocality: "São Paulo",
                  addressRegion: "SP",
                  postalCode: "01451-010",
                  addressCountry: "BR",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+55-11-2348-0100",
                  email: "comercial@reachcapital.com.br",
                  contactType: "sales",
                },
              },
              feesAndCommissionsSpecification:
                "Investidor Qualificado. Liquidez D+60.",
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
