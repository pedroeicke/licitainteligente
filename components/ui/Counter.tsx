"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

/** Número que conta de 0 até o valor quando entra na tela ("30+" → conta 30 e mantém o "+") */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const target = match ? parseInt(match[2], 10) : 0;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || !match) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target]);

  if (!match) return <span className={className}>{value}</span>;
  const pad = match[2].length > 1 && match[2].startsWith("0") ? match[2].length : 0;

  return (
    <span ref={ref} className={className}>
      {match[1]}
      {pad ? String(n).padStart(pad, "0") : n}
      {match[3]}
    </span>
  );
}
