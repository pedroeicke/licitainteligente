"use client";

import { motion } from "framer-motion";
import content from "@/content/content.json";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Counter } from "@/components/ui/Counter";
import { JourneyCard } from "@/components/hero/JourneyCard";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export function Hero() {
  const { hero, about } = content;

  return (
    <section className="relative overflow-hidden bg-paper pb-20 pt-32 md:pb-28 md:pt-40">
      {/* fundo: halos azuis */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[720px] w-[720px] rounded-full opacity-60 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, rgba(31,169,255,0.35), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-60 bottom-0 h-[500px] w-[500px] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, rgba(13,108,200,0.35), transparent)" }}
      />

      <div className="relative mx-auto grid max-w-container grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:gap-12">
        {/* Texto */}
        <div className="lg:col-span-7">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-action-hover opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-action" />
              </span>
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-7 text-[clamp(40px,5.4vw,74px)] font-semibold leading-[1] tracking-[-0.035em]"
          >
            {hero.titleA}{" "}
            <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em] text-brand-500">
              {hero.titleB}
            </span>
            <span className="mt-2 block text-[0.6em] font-medium leading-[1.1] tracking-[-0.02em] text-inkSoft">
              {hero.titleC}
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="mt-7 max-w-xl text-lg leading-relaxed text-inkSoft">
            {hero.subtitle}
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#contato" size="lg">
              {hero.ctaPrimary}
            </Button>
            <Button href="#cursos" variant="outline" size="lg">
              {hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.dl {...fadeUp(0.32)} className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-8">
            {about.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <Counter value={s.value} className="block text-3xl font-semibold tracking-tight md:text-4xl" />
                  <span className="mt-1 block text-sm leading-snug text-muted">{s.label}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Card da jornada */}
        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative mx-auto max-w-[480px]"
          >
            {/* cartão escuro atrás, levemente girado */}
            <div aria-hidden className="absolute inset-x-6 -bottom-4 top-6 rotate-[3deg] rounded-[28px] bg-action" />
            <div className="relative">
              <JourneyCard />
            </div>

            {/* chip flutuante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              className="absolute -bottom-16 -left-4 hidden sm:block md:-left-12"
            >
              <div className="animate-float flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-3 text-white shadow-lift">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-action">
                  <Icon name="award" size={18} />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold">4 normas ISO</p>
                  <p className="text-[11px] text-white/60">10015 · 10018 · 29992 · 21001</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
