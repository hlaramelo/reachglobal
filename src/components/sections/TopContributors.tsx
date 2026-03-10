"use client";

import { TOP_CONTRIBUTORS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { useState } from "react";

const SECTOR_COLORS: Record<string, string> = {
  Semicondutores: "bg-blue-400/15 text-blue-300",
  Tecnologia: "bg-purple-400/15 text-purple-300",
  Mineração: "bg-amber-400/15 text-amber-300",
  Financeiro: "bg-emerald-400/15 text-emerald-300",
  Energia: "bg-orange-400/15 text-orange-300",
  Industrial: "bg-cyan-400/15 text-cyan-300",
};

function CompanyLogo({
  ticker,
  name,
  domain,
}: {
  ticker: string;
  name: string;
  domain: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xs font-bold text-white/70">
        {ticker.slice(0, 3)}
      </div>
    );
  }

  return (
    <Image
      src={`https://logo.clearbit.com/${domain}`}
      alt={`${name} logo`}
      width={40}
      height={40}
      className="rounded-lg bg-white/10"
      onError={() => setFailed(true)}
      unoptimized
    />
  );
}

export default function TopContributors() {
  return (
    <section className="section-padding bg-navy-800/50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Maiores Contribuições Históricas
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Empresas que mais contribuíram para a performance do fundo desde o início
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {TOP_CONTRIBUTORS.map((company, i) => (
            <ScrollReveal key={company.ticker} delay={i * 60}>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 md:p-5 hover:border-accent/30 transition-all duration-300 hover:scale-[1.02] h-full">
                <div className="flex items-start gap-3 mb-3">
                  <CompanyLogo
                    ticker={company.ticker}
                    name={company.name}
                    domain={company.domain}
                  />
                  <div className="min-w-0">
                    <p className="font-bold text-sm text-white truncate">
                      {company.ticker}
                    </p>
                    <p className="text-xs text-white/50 truncate">
                      {company.name}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      SECTOR_COLORS[company.sector] || "bg-white/10 text-white/60"
                    }`}
                  >
                    {company.sector}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/50">
                    {company.region}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={800}>
          <p className="text-center text-xs text-white/30 mt-8 max-w-xl mx-auto">
            Posições históricas que geraram as maiores contribuições para o retorno do fundo. A composição atual pode diferir.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
