"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string; // e.g. "+19,0%", "+6,1pp", "D+60"
  className?: string;
}

function parseNumericPart(value: string): {
  prefix: string;
  number: number;
  suffix: string;
  decimals: number;
  useComma: boolean;
} | null {
  // Match patterns like "+19,0%", "+6,1pp", "D+60"
  const match = value.match(/^([+\-D+]*?)(\d+[,.]?\d*)(.*?)$/);
  if (!match) return null;

  const [, prefix, numStr, suffix] = match;
  const useComma = numStr.includes(",");
  const normalized = numStr.replace(",", ".");
  const number = parseFloat(normalized);
  const decimalPart = normalized.split(".")[1];
  const decimals = decimalPart ? decimalPart.length : 0;

  return { prefix, number, suffix, decimals, useComma };
}

function formatNumber(
  n: number,
  decimals: number,
  useComma: boolean
): string {
  const formatted = n.toFixed(decimals);
  return useComma ? formatted.replace(".", ",") : formatted;
}

export default function CountUp({ value, className = "" }: CountUpProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || animated.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const parsed = parseNumericPart(value);
    if (!parsed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          observer.unobserve(el);

          const duration = 1500;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = parsed!.number * eased;
            const formatted = formatNumber(
              current,
              parsed!.decimals,
              parsed!.useComma
            );
            setDisplayValue(`${parsed!.prefix}${formatted}${parsed!.suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
