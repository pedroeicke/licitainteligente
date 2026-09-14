"use client";

import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import content from "@/content/content.json";
import { Reveal } from "@/components/ui/Reveal";
import { Button, Eyebrow } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { waLink } from "@/lib/site";

const AREA_ICONS = ["scales", "building", "briefcase", "chart", "shield", "doc"];

/** Catálogo interativo: lista de áreas à esquerda, cursos da área selecionada à direita */
export function Areas() {
  const { areas, site } = content;
  const [active, setActive] = useState(0);
  const area = areas.items[active];

  return (
    <section id="cursos" className="scroll-mt-24 bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-container px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>{areas.badge}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-[clamp(34px,4.6vw,60px)] font-semibold leading-[1.02] tracking-[-0.03em]">
                Seis áreas temáticas,{" "}
                <span className="font-serif font-normal italic text-brand-500">um só propósito</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg text-inkSoft">{areas.body}</p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Button href={site.catalogUrl} external variant="dark">
              Baixar catálogo completo
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Abas */}
          <Reveal className="lg:col-span-5">
            <ul className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0" role="tablist">
              {areas.items.map((a, i) => {
                const isActive = i === active;
                return (
                  <li key={a.slug} className="shrink-0 lg:shrink">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(i)}
                      onMouseEnter={() => window.matchMedia("(min-width: 1024px)").matches && setActive(i)}
                      className={clsx(
                        "relative flex w-full items-center gap-4 rounded-2xl px-4 py-3.5 text-left transition-colors duration-300 lg:px-5 lg:py-5",
                        isActive ? "text-white" : "bg-white text-ink hover:bg-brand-50"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="area-active"
                          className="absolute inset-0 rounded-2xl bg-ink"
                          transition={{ type: "spring", stiffness: 380, damping: 34 }}
                        />
                      )}
                      <span
                        className={clsx(
                          "relative grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors",
                          isActive ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-600"
                        )}
                      >
                        <Icon name={AREA_ICONS[i]} size={20} />
                      </span>
                      <span className="relative flex-1 whitespace-nowrap text-sm font-semibold lg:whitespace-normal lg:text-base">
                        {a.title}
                      </span>
                      <span
                        className={clsx(
                          "relative hidden text-xs font-medium tabular-nums lg:block",
                          isActive ? "text-white/60" : "text-muted"
                        )}
                      >
                        {String(a.courses.length).padStart(2, "0")}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Painel */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-[28px] border border-line bg-white p-6 md:p-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                        Área {String(active + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{area.title}</h3>
                    </div>
                    <span className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
                      {area.courses.length} {area.courses.length === 1 ? "solução" : "soluções"}
                    </span>
                  </div>

                  <ul
                    data-lenis-prevent
                    className="mt-7 grid max-h-[460px] grid-cols-1 gap-2 overflow-y-auto pr-1 sm:grid-cols-2"
                  >
                    {area.courses.map((c, i) => (
                      <motion.li
                        key={c}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: Math.min(i * 0.025, 0.4) }}
                        className="flex items-start gap-3 rounded-xl border border-line px-4 py-3 text-sm leading-snug transition-colors hover:border-brand-200 hover:bg-brand-50/60"
                      >
                        <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        {c}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                    <p className="text-sm text-inkSoft">Quer uma turma fechada para sua equipe nesta área?</p>
                    <Button
                      href={waLink(`Olá! Tenho interesse em capacitação na área "${area.title}".`)}
                      external
                    >
                      Solicitar proposta
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
