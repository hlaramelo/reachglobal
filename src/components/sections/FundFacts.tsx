"use client";

import { FUND_INFO } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

const facts = [
  { label: "Estratégia", value: FUND_INFO.strategy },
  { label: "Moeda", value: FUND_INFO.currency },
  { label: "Benchmark", value: FUND_INFO.benchmark },
  { label: "Liquidez", value: FUND_INFO.liquidity },
  { label: "Cálculo de Cota (NAV)", value: FUND_INFO.navCalculation },
  { label: "Público-alvo", value: FUND_INFO.targetAudience },
  { label: "Posições", value: FUND_INFO.positions },
  { label: "PL do Fundo", value: FUND_INFO.fundPL },
  { label: "Gestor", value: FUND_INFO.manager },
  { label: "Regulação", value: FUND_INFO.regulation },
  { label: "AuM Reach Capital", value: FUND_INFO.aum },
];

export default function FundFacts() {
  return (
    <section id="facts" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0D1F3C 0%, #122847 50%, #0D1F3C 100%)",
        }}
      />

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Detalhes do Fundo
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-3xl mx-auto bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden">
            {facts.map((fact, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-6 md:px-8 py-5 ${
                  i < facts.length - 1 ? "border-b border-white/5" : ""
                } hover:bg-white/[0.02] transition-colors`}
              >
                <span className="text-sm text-white/50 font-medium">
                  {fact.label}
                </span>
                <span className="text-sm font-semibold text-right">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
