"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";

const ease = [0.16, 1, 0.3, 1] as const;
const STEP_MS = 3200;

/** Fases da contratação pública → cursos do catálogo relacionados a cada uma */
const STEPS = [
  {
    icon: "target",
    title: "Planejamento",
    courses: ["Estudo Técnico Preliminar", "Matriz de riscos de contratos administrativos", "Compras públicas sustentáveis"],
  },
  {
    icon: "scales",
    title: "Seleção do fornecedor",
    courses: ["Nova Lei de Licitações: atualização e aperfeiçoamento", "Procedimentos auxiliares em contratações públicas", "Contratação direta: dispensa e inexigibilidade"],
  },
  {
    icon: "doc",
    title: "Contratação",
    courses: ["Contratação integrada de obras e serviços de engenharia", "Licitações e contratos das empresas estatais", "Modelagem técnica e econômica de concessões e PPPs"],
  },
  {
    icon: "check",
    title: "Execução e fiscalização",
    courses: ["Fiscalização de contratos", "Certificações de qualidade em licitações e contratos", "Inspeção acreditada de empreendimentos de infraestrutura"],
  },
  {
    icon: "shield",
    title: "Controle",
    courses: ["Processo administrativo de responsabilização", "Compliance em contratações públicas", "Improbidade administrativa em gestão e contratos"],
  },
];

export function JourneyCard() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % STEPS.length), STEP_MS);
    return () => clearTimeout(id);
  }, [active, paused]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative rounded-[28px] border border-line bg-card p-5 shadow-lift md:p-7"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">Jornada da contratação</p>
          <p className="mt-1 text-lg font-semibold tracking-tight">Do planejamento ao controle</p>
        </div>
        <span className="rounded-full bg-mist px-3 py-1.5 text-xs font-semibold text-inkSoft">Lei 14.133/2021</span>
      </div>

      <ol className="relative mt-6">
        {/* linha vertical */}
        <span aria-hidden className="absolute bottom-6 left-5 top-6 w-px bg-line" />

        {STEPS.map((s, i) => {
          const isActive = i === active;
          const done = i < active;
          return (
            <li key={s.title} className="relative">
              <button
                type="button"
                onClick={() => setActive(i)}
                className="flex w-full items-center gap-4 rounded-2xl py-2 text-left"
                aria-expanded={isActive}
              >
                <span
                  className={clsx(
                    "relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-500",
                    isActive
                      ? "border-brand-500 bg-brand-500 text-white shadow-[0_8px_20px_-6px_rgba(31,169,255,0.7)]"
                      : done
                      ? "border-brand-200 bg-brand-50 text-brand-600"
                      : "border-line bg-card text-muted"
                  )}
                >
                  <Icon name={s.icon} size={18} strokeWidth={1.8} />
                </span>
                <span className={clsx("flex-1 font-semibold transition-colors", isActive ? "text-ink" : "text-inkSoft")}>
                  {s.title}
                </span>
                <span className={clsx("text-xs tabular-nums", isActive ? "text-brand-600" : "text-muted")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease }}
                    className="overflow-hidden"
                  >
                    <ul className="flex flex-col gap-1.5 pb-3 pl-14">
                      {s.courses.map((c, ci) => (
                        <motion.li
                          key={c}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 + ci * 0.08, ease }}
                          className="flex items-start gap-2 rounded-lg bg-mist px-3 py-2 text-[13px] leading-snug text-inkSoft"
                        >
                          <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                          {c}
                        </motion.li>
                      ))}
                    </ul>
                    {/* barra de tempo da etapa */}
                    <div className="mb-2 ml-14 h-0.5 overflow-hidden rounded-full bg-line">
                      <motion.div
                        key={`${active}-${paused}`}
                        className="h-full bg-brand-500"
                        initial={{ width: "0%" }}
                        animate={{ width: paused ? "0%" : "100%" }}
                        transition={{ duration: paused ? 0 : STEP_MS / 1000, ease: "linear" }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
