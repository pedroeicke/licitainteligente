"use client";

import { useRef, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import content from "@/content/content.json";
import { Reveal } from "@/components/ui/Reveal";
import { Button, Eyebrow } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { scrollToEl } from "@/components/ui/SmoothScroll";
import { waLink } from "@/lib/site";

const AREA_ICONS = ["scales", "building", "briefcase", "chart", "shield", "doc"];
const ease = [0.16, 1, 0.3, 1] as const;

type Area = (typeof content.areas.items)[number];

function CourseList({ area }: { area: Area }) {
  return (
    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {area.courses.map((c, i) => (
        <motion.li
          key={c}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: Math.min(i * 0.02, 0.3), ease }}
          className="flex items-start gap-3 rounded-xl border border-line bg-card px-4 py-3 text-sm leading-snug"
        >
          <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
          {c}
        </motion.li>
      ))}
    </ul>
  );
}

function ProposalCta({ area }: { area: Area }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-brand-50 p-5">
      <p className="text-sm font-medium text-brand-900">Quer uma turma fechada para sua equipe nesta área?</p>
      <Button href={waLink(`Olá! Tenho interesse em capacitação na área "${area.title}".`)} external>
        Solicitar proposta
      </Button>
    </div>
  );
}

/**
 * Catálogo por áreas.
 * Desktop: menu fixo (sticky) à esquerda, troca por clique, lista completa à direita — sem scroll interno.
 * Mobile: sanfona vertical.
 */
export function Areas() {
  const { areas, site } = content;
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const area = areas.items[active];

  const selectDesktop = (i: number) => {
    setActive(i);
    // se o topo do painel já passou da tela, volta até ele
    const el = panelRef.current;
    if (el && el.getBoundingClientRect().top < 90) scrollToEl(el);
  };

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

        {/* ---------- Desktop ---------- */}
        <div className="mt-14 hidden grid-cols-12 items-start gap-6 lg:grid">
          <aside className="sticky top-28 col-span-4">
            <ul className="flex flex-col gap-2" role="tablist" aria-label="Áreas temáticas">
              {areas.items.map((a, i) => {
                const isActive = i === active;
                return (
                  <li key={a.slug}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => selectDesktop(i)}
                      className={clsx(
                        "relative flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition-colors duration-300",
                        isActive ? "text-white" : "bg-card text-ink hover:bg-brand-50"
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="area-active"
                          className="absolute inset-0 rounded-2xl bg-brand-500"
                          transition={{ type: "spring", stiffness: 400, damping: 36 }}
                        />
                      )}
                      <span
                        className={clsx(
                          "relative grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors",
                          isActive ? "bg-white/20 text-white" : "bg-brand-50 text-brand-600"
                        )}
                      >
                        <Icon name={AREA_ICONS[i]} size={20} />
                      </span>
                      <span className="relative flex-1 font-semibold leading-tight">{a.title}</span>
                      <span className={clsx("relative text-xs font-medium tabular-nums", isActive ? "text-white/80" : "text-muted")}>
                        {a.courses.length}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div ref={panelRef} className="col-span-8 rounded-[28px] border border-line bg-card p-9" role="tabpanel">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease }}
                className="flex flex-col gap-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                      Área {String(active + 1).padStart(2, "0")} de {areas.items.length}
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold tracking-tight">{area.title}</h3>
                  </div>
                  <span className="shrink-0 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
                    {area.courses.length} {area.courses.length === 1 ? "solução" : "soluções"}
                  </span>
                </div>
                <CourseList area={area} />
                <ProposalCta area={area} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ---------- Mobile / tablet: sanfona ---------- */}
        <ul className="mt-12 flex flex-col gap-3 lg:hidden">
          {areas.items.map((a, i) => {
            const isOpen = openMobile === i;
            return (
              <li key={a.slug} className={clsx("overflow-hidden rounded-2xl border bg-card transition-colors", isOpen ? "border-brand-200" : "border-line")}>
                <button
                  type="button"
                  onClick={() => setOpenMobile(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 p-4 text-left"
                >
                  <span className={clsx("grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors", isOpen ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-600")}>
                    <Icon name={AREA_ICONS[i]} size={20} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold leading-tight">{a.title}</span>
                    <span className="text-xs text-muted">
                      {a.courses.length} {a.courses.length === 1 ? "solução" : "soluções"}
                    </span>
                  </span>
                  <span className={clsx("grid h-8 w-8 place-items-center rounded-full bg-mist text-lg transition-transform duration-300", isOpen && "rotate-45")}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                    >
                      <div className="flex flex-col gap-4 border-t border-line p-4">
                        <CourseList area={a} />
                        <ProposalCta area={a} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
