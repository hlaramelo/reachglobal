"use client";

import { PORTFOLIO_TIERS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

function TierIcon({ icon }: { icon: string }) {
  if (icon === "core") {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    );
  }
  if (icon === "options") {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    );
  }
  // cash
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function PortfolioConstruction() {
  const tierStyles = [
    "border-accent/40 bg-accent/5",
    "border-accent/25 bg-accent/[0.03]",
    "border-white/15 bg-white/[0.02]",
  ];

  return (
    <section id="portfolio" className="section-padding bg-navy-900">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Construção da Carteira
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Dois sub-portfólios complementares com gestão ativa de caixa
            </p>
          </div>
        </ScrollReveal>

        {/* Allocation bar */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex h-3 rounded-full overflow-hidden">
              <div
                className="bg-accent"
                style={{ width: "55%" }}
                title="Core ~55%"
              />
              <div
                className="bg-accent/50"
                style={{ width: "18%" }}
                title="OptionsFlow ~18%"
              />
              <div
                className="bg-white/20"
                style={{ width: "27%" }}
                title="Caixa ~27%"
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-white/50">
              <span>Core ~55%</span>
              <span>OptionsFlow ~18%</span>
              <span>Caixa ~27%</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Tier cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {PORTFOLIO_TIERS.map((tier, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div
                className={`border rounded-xl p-6 md:p-8 ${tierStyles[i]} transition-all duration-300 hover:scale-[1.02] h-full flex flex-col`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center text-accent">
                    <TierIcon icon={tier.icon} />
                  </div>
                  <span className="text-2xl font-bold text-accent">
                    {tier.percentage}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1">{tier.title}</h3>
                <p className="text-accent/80 text-sm font-medium mb-3">
                  {tier.subtitle}
                </p>
                <p className="text-white/60 text-sm leading-relaxed flex-1">
                  {tier.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Macro awareness badge */}
        <ScrollReveal delay={500}>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 rounded-full px-4 md:px-6 py-3">
              <svg
                className="w-5 h-5 text-accent flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
                />
              </svg>
              <span className="text-xs md:text-sm text-white/70">
                Consciência macroeconômica permeia todas as camadas · Cálculo diário de cota (NAV)
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
