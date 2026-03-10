import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "Reach Global USD — Ações Globais. Em Dólar. Sem Câmbio.",
  description:
    "Estratégia long only agnóstica a setor, país e tamanho — construída para capturar as melhores oportunidades do mundo com proteção cambial natural.",
  keywords: [
    "Reach Global",
    "Reach Capital",
    "investimento global",
    "ações globais",
    "dólar",
    "MSCI ACWI",
    "long only",
    "gestão de ativos",
  ],
  openGraph: {
    title: "Reach Global USD — Ações Globais. Em Dólar. Sem Câmbio.",
    description:
      "Estratégia long only agnóstica a setor, país e tamanho — construída para capturar as melhores oportunidades do mundo com proteção cambial natural.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#main-content" className="skip-to-content">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
