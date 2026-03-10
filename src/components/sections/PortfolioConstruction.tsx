"use client";

import { PORTFOLIO_TIERS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PortfolioConstruction() {
  const tierColors = [
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
              Consciência macroeconômica permeia todas as camadas
            </p>
          </div>
        </ScrollReveal>

        {/* Pyramid */}
        <div className="max-w-3xl mx-auto space-y-4">
          {PORTFOLIO_TIERS.map((tier, i) => {
            // Full width on mobile, pyramid shape on desktop
            const widths = [
              "w-full",
              "w-full md:w-[85%]",
              "w-full md:w-[65%]",
            ];
            return (
              <ScrollReveal key={i} delay={i * 150}>
                <div className={`${widths[i]} mx-auto`}>
                  <div
                    className={`border rounded-xl p-5 md:p-8 ${tierColors[i]} transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className="flex-shrink-0">
                        <span className="text-2xl md:text-4xl font-bold text-accent">
                          {tier.percentage}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base md:text-lg font-bold mb-1">
                          {tier.title}
                        </h3>
                        <p className="text-accent/80 text-sm font-medium mb-2">
                          {tier.subtitle}
                        </p>
                        <p className="text-white/60 text-sm">
                          {tier.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Macro awareness note */}
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
                Consciência macroeconômica permeia todas as camadas
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
