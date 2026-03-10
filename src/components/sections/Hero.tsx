import { HERO_STATS } from "@/lib/constants";
import CountUp from "@/components/ui/CountUp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(160deg, #0D1F3C 0%, #1A3A5C 40%, #0D1F3C 100%)",
        }}
      />

      {/* Mountain SVG overlay */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0 900L200 500L400 650L600 300L800 550L1000 200L1200 450L1440 100V900H0Z"
            fill="white"
          />
          <path
            d="M0 900L300 600L500 700L720 400L900 600L1100 350L1300 500L1440 300V900H0Z"
            fill="white"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" aria-hidden="true" />

      <div className="container-custom relative z-10 pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            <span className="text-accent text-sm font-medium">
              Reach Global USD
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            Ações Globais.
            <br />
            Em Dólar.{" "}
            <span className="text-accent">Sem Câmbio.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10 md:mb-12 text-balance">
            Estratégia long only agnóstica a setor, país e tamanho — construída
            para capturar as melhores oportunidades do mundo com proteção
            cambial natural.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#performance"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm uppercase tracking-wider"
            >
              Ver Performance
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-accent/40 text-white/80 hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-all text-sm uppercase tracking-wider"
            >
              Fale Conosco
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-20 pt-10 border-t border-white/10">
          {HERO_STATS.map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-bold text-accent mb-1">
                <CountUp value={stat.value} />
              </p>
              <p className="text-sm font-medium text-white/90">{stat.label}</p>
              <p className="text-xs text-white/50 mt-0.5">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" aria-hidden="true" />
    </section>
  );
}
