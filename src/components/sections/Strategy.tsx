"use client";

import { STRATEGY_PILLARS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

const icons: Record<string, React.ReactNode> = {
  asymmetric: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  growth: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15l5.12-5.12A3 3 0 0112.24 9h1.52a3 3 0 012.12.88L21 15M3 21h18" />
    </svg>
  ),
  globe: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
    </svg>
  ),
  quality: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export default function Strategy() {
  return (
    <section id="strategy" className="section-padding relative overflow-hidden">
      {/* Background */}
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
              Filosofia de Investimento
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Cinco pilares que guiam cada decisão de alocação
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRATEGY_PILLARS.map((pillar, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group bg-white/[0.03] border border-white/10 rounded-xl p-8 hover:border-accent/30 hover:bg-white/[0.05] transition-all duration-300 h-full">
                <div className="text-accent mb-4">{icons[pillar.icon]}</div>
                <h3 className="text-lg font-bold mb-3">{pillar.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}

          {/* Key Insight card */}
          <ScrollReveal delay={500}>
            <div className="bg-accent/10 border border-accent/20 rounded-xl p-8 h-full flex flex-col justify-center">
              <p className="text-accent text-xs uppercase tracking-wider font-semibold mb-3">
                Por que carteira concentrada?
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                <span className="text-accent font-bold">83 empresas</span>{" "}
                geraram 50% de toda a riqueza criada no mercado americano entre
                1926–2019 (de 25.584 listadas). Total criado:{" "}
                <span className="font-semibold">$47 trilhões</span>.
              </p>
              <p className="text-white/50 text-xs mt-3">
                Isso justifica carteira concentrada de 10–20 posições.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
