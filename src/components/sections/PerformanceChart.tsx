"use client";

import { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts";
import ScrollReveal from "@/components/ui/ScrollReveal";

const MONTHLY_DATA = [
  { month: "Fev/25", fund: 0, benchmark: 0 },
  { month: "Mar/25", fund: -2.7, benchmark: -2.8 },
  { month: "Abr/25", fund: -1.05, benchmark: -2.9 },
  { month: "Mai/25", fund: 7.95, benchmark: 3.32 },
  { month: "Jun/25", fund: 9.79, benchmark: 2.39 },
  { month: "Jul/25", fund: 15.61, benchmark: 6.99 },
  { month: "Ago/25", fund: 12.26, benchmark: 6.03 },
  { month: "Set/25", fund: 15.97, benchmark: 7.62 },
  { month: "Out/25", fund: 18.29, benchmark: 11.17 },
  { month: "Nov/25", fund: 14.39, benchmark: 10.06 },
  { month: "Dez/25", fund: 16.33, benchmark: 14.47 },
  { month: "Jan/26", fund: 18.95, benchmark: 12.90 },
];

const MAISRETORNO_URL =
  "https://maisretorno.com/gestores/reach-capital-investimentos/fundos";

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string; color: string }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: TooltipProps) {
  if (!active || !payload) return null;
  return (
    <div className="bg-navy-900/95 border border-white/10 rounded-lg px-4 py-3 shadow-xl backdrop-blur-sm">
      <p className="text-xs text-white/50 mb-2 font-medium">{label}</p>
      {payload.map((entry) => (
        <div key={entry.dataKey} className="flex items-center gap-2 text-sm">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-white/70">
            {entry.dataKey === "fund" ? "Reach Global" : "ACWI"}:
          </span>
          <span className="font-semibold" style={{ color: entry.color }}>
            {entry.value >= 0 ? "+" : ""}
            {entry.value.toFixed(2)}%
          </span>
        </div>
      ))}
      {payload.length === 2 && (
        <div className="mt-1 pt-1 border-t border-white/10 text-xs text-white/40">
          Alpha:{" "}
          <span className="text-accent font-medium">
            {(payload[0].value - payload[1].value) >= 0 ? "+" : ""}
            {(payload[0].value - payload[1].value).toFixed(2)}pp
          </span>
        </div>
      )}
    </div>
  );
}

export default function PerformanceChart() {
  const alphaData = useMemo(() => {
    const last = MONTHLY_DATA[MONTHLY_DATA.length - 1];
    return {
      fundReturn: last.fund,
      benchReturn: last.benchmark,
      alpha: last.fund - last.benchmark,
    };
  }, []);

  return (
    <section className="pb-20 md:pb-28 bg-navy-900">
      <div className="container-custom">
        <ScrollReveal>
          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Rentabilidade Acumulada
                </h3>
                <p className="text-sm text-white/50">
                  Reach Global USD vs. MSCI ACWI — desde o início
                </p>
              </div>
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-0.5 bg-accent rounded" />
                  <span className="text-xs text-white/60">Reach Global</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-0.5 bg-white/30 rounded" />
                  <span className="text-xs text-white/60">ACWI</span>
                </div>
              </div>
            </div>

            <div className="h-[350px] md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={MONTHLY_DATA}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="fundGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#29AF3C"
                        stopOpacity={0.3}
                      />
                      <stop
                        offset="95%"
                        stopColor="#29AF3C"
                        stopOpacity={0}
                      />
                    </linearGradient>
                    <linearGradient
                      id="benchGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#ffffff"
                        stopOpacity={0.1}
                      />
                      <stop
                        offset="95%"
                        stopColor="#ffffff"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.05)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
                    axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v: number) => `${v}%`}
                    width={45}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine
                    y={0}
                    stroke="rgba(255,255,255,0.15)"
                    strokeDasharray="2 2"
                  />
                  <Area
                    type="monotone"
                    dataKey="fund"
                    stroke="#29AF3C"
                    strokeWidth={2.5}
                    fill="url(#fundGradient)"
                    dot={false}
                    activeDot={{
                      r: 5,
                      fill: "#29AF3C",
                      stroke: "#0D1F3C",
                      strokeWidth: 2,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="benchmark"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth={1.5}
                    fill="url(#benchGradient)"
                    dot={false}
                    strokeDasharray="4 4"
                    activeDot={{
                      r: 4,
                      fill: "rgba(255,255,255,0.5)",
                      stroke: "#0D1F3C",
                      strokeWidth: 2,
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Summary + Mais Retorno link */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-6">
                <div>
                  <span className="text-xs text-white/40 block">
                    Reach Global
                  </span>
                  <span className="text-lg font-bold text-accent">
                    +{alphaData.fundReturn.toFixed(2)}%
                  </span>
                </div>
                <div>
                  <span className="text-xs text-white/40 block">ACWI</span>
                  <span className="text-lg font-bold text-white/60">
                    +{alphaData.benchReturn.toFixed(2)}%
                  </span>
                </div>
                <div>
                  <span className="text-xs text-white/40 block">Alpha</span>
                  <span className="text-lg font-bold text-accent">
                    +{alphaData.alpha.toFixed(2)}pp
                  </span>
                </div>
              </div>

              <a
                href={MAISRETORNO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/10 hover:border-accent/30 hover:bg-white/[0.08] rounded-lg px-5 py-2.5 transition-all text-sm text-white/70 hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Fundos Reach no Mais Retorno
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
