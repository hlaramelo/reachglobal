"use client";

import { SCORING_CRITERIA, POSITION_SIZING } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function InvestmentProcess() {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
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
              Processo de Investimento
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Scoring quantitativo com 7 critérios — cada um pesando 14,3%
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Scoring Criteria */}
          <ScrollReveal delay={100}>
            <div>
              <h3 className="text-lg font-bold mb-6 text-accent">
                Critérios de Avaliação
              </h3>
              <div className="space-y-3">
                {SCORING_CRITERIA.map((criterion, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-lg p-4 hover:border-accent/20 transition-colors"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="font-medium">{criterion}</span>
                    <span className="ml-auto text-white/40 text-sm">
                      14,3%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Position Sizing */}
          <ScrollReveal delay={200}>
            <div>
              <h3 className="text-lg font-bold mb-6 text-accent">
                Dimensionamento de Posição
              </h3>
              <div className="space-y-3">
                {POSITION_SIZING.map((item, i) => {
                  const barWidth = item.score * 10;
                  return (
                    <div
                      key={i}
                      className="bg-white/[0.03] border border-white/10 rounded-lg p-4 hover:border-accent/20 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-white/70">
                          Score:{" "}
                          <span className="font-bold text-white">
                            {item.score}
                          </span>
                        </span>
                        <span className="text-accent font-bold">
                          {item.allocation}
                        </span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-2">
                        <div
                          className="bg-accent/60 rounded-full h-2 transition-all duration-500"
                          style={{ width: `${barWidth}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
