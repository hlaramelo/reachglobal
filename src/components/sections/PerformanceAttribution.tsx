"use client";

import { ATTRIBUTION_BY_SECTOR, ATTRIBUTION_BY_REGION } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

function AttributionBar({
  name,
  value,
  maxAbsValue,
}: {
  name: string;
  value: number;
  maxAbsValue: number;
}) {
  const isPositive = value >= 0;
  const barWidth = Math.abs(value) / maxAbsValue * 100;
  const formatted = (value >= 0 ? "+" : "") + value.toFixed(2) + "%";

  return (
    <div className="flex items-center gap-3 py-2">
      <span className="text-sm text-white/70 w-36 text-right flex-shrink-0 truncate">
        {name}
      </span>
      <div className="flex-1 flex items-center h-6">
        {/* Center line is at 50% */}
        <div className="relative w-full h-full flex items-center">
          {isPositive ? (
            <>
              <div className="w-1/2" />
              <div
                className="h-5 rounded-r bg-accent/70"
                style={{ width: `${barWidth / 2}%` }}
              />
            </>
          ) : (
            <>
              <div className="w-1/2 flex justify-end">
                <div
                  className="h-5 rounded-l bg-red-400/60"
                  style={{ width: `${barWidth / 2}%` }}
                />
              </div>
            </>
          )}
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20" />
        </div>
      </div>
      <span
        className={`text-sm font-medium w-16 text-right flex-shrink-0 ${
          isPositive ? "text-accent" : "text-red-400"
        }`}
      >
        {formatted}
      </span>
    </div>
  );
}

function AttributionChart({
  title,
  data,
  total,
}: {
  title: string;
  data: { name: string; value: number }[];
  total: number;
}) {
  const maxAbsValue = Math.max(...data.map((d) => Math.abs(d.value)));

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-white/40 mb-6">Desde o início (base 30/01/2026)</p>
      <div className="space-y-0.5">
        {data.map((item) => (
          <AttributionBar
            key={item.name}
            name={item.name}
            value={item.value}
            maxAbsValue={maxAbsValue}
          />
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-sm font-semibold text-white/80">Total</span>
        <span className="text-accent font-bold">
          +{total.toFixed(2)}%
        </span>
      </div>
    </div>
  );
}

export default function PerformanceAttribution() {
  return (
    <section id="attribution" className="section-padding bg-navy-900">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Atribuição de Performance
            </h2>
            <p className="text-white/60 text-lg">
              Contribuição por setor e região desde o início
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 md:p-8">
              <AttributionChart
                title="Por Setor"
                data={ATTRIBUTION_BY_SECTOR}
                total={18.95}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 md:p-8">
              <AttributionChart
                title="Por Região"
                data={ATTRIBUTION_BY_REGION}
                total={18.95}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
