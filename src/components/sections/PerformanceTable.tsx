"use client";

import { MONTHLY_RETURNS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PerformanceTable() {
  const isPositive = (val: string) => val.startsWith("+");

  return (
    <section id="performance" className="section-padding bg-navy-900">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Performance
            </h2>
            <p className="text-white/60 text-lg">
              Retornos mensais em USD (2025–2026)
            </p>
          </div>
        </ScrollReveal>

        {/* Alpha callout */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
            {[
              { value: "+19,0%", label: "Acumulado" },
              { value: "+6,1pp", label: "Alpha vs. ACWI" },
              { value: "+1,7pp", label: "Alpha em 2025" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-accent">
                  {item.value}
                </p>
                <p className="text-xs text-white/50 uppercase tracking-wider mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Table */}
        <ScrollReveal delay={200}>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-navy-800/50">
                  <th className="text-left py-4 px-4 font-semibold text-white/70 min-w-[140px]">
                    Fundo
                  </th>
                  {MONTHLY_RETURNS.headers.map((h) => (
                    <th
                      key={h}
                      className="text-center py-4 px-3 font-semibold text-white/70 min-w-[65px]"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Fund row */}
                <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                  <td className="py-4 px-4 font-semibold text-accent">
                    Reach Global
                  </td>
                  {MONTHLY_RETURNS.fund.map((val, i) => (
                    <td
                      key={i}
                      className={`text-center py-4 px-3 font-medium ${
                        i >= MONTHLY_RETURNS.headers.length - 2
                          ? "font-bold text-accent"
                          : isPositive(val)
                            ? "text-accent/80"
                            : "text-red-400/80"
                      }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
                {/* Benchmark row */}
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-4 font-semibold text-white/50">
                    ACWI
                  </td>
                  {MONTHLY_RETURNS.benchmark.map((val, i) => (
                    <td
                      key={i}
                      className={`text-center py-4 px-3 ${
                        i >= MONTHLY_RETURNS.headers.length - 2
                          ? "font-bold text-white/70"
                          : isPositive(val)
                            ? "text-white/50"
                            : "text-red-400/40"
                      }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
