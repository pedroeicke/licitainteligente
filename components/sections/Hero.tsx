"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import content from "@/content/content.json";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Counter } from "@/components/ui/Counter";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export function Hero() {
  const { hero, talents, about } = content;
  const photos = talents.list;

  // Leve parallax da composição seguindo o mouse
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const xFar = useTransform(sx, (v) => v * -14);
  const yFar = useTransform(sy, (v) => v * -14);
  const xNear = useTransform(sx, (v) => v * 22);
  const yNear = useTransform(sy, (v) => v * 22);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const cols = [
    [photos[0], photos[8]],
    [photos[14], photos[2]],
    [photos[6], photos[15]],
  ];

  return (
    <section
      onMouseMove={onMove}
      className="relative overflow-hidden bg-paper pb-20 pt-32 md:pb-24 md:pt-36"
    >
      {/* fundo: halo azul */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[720px] w-[720px] rounded-full opacity-60 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, #B9CCFF, transparent)" }}
      />

      <div className="relative mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:gap-10">
        {/* Texto */}
        <div className="lg:col-span-6">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-7 text-[clamp(40px,5.2vw,70px)] font-semibold leading-[1] tracking-[-0.035em]"
          >
            {hero.titleA}{" "}
            <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em] text-brand-500">
              {hero.titleB}
            </span>
            <span className="mt-2 block text-[0.62em] font-medium leading-[1.1] tracking-[-0.02em] text-inkSoft">
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

          <motion.div {...fadeUp(0.32)} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-line pt-8">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {photos.slice(0, 4).map((t) => (
                  <span key={t.slug} className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white">
                    <Image src={t.photo} alt="" fill sizes="40px" className="object-cover object-top" />
                  </span>
                ))}
              </div>
              <div className="text-sm leading-tight">
                <strong className="block text-base font-semibold">16 talentos</strong>
                <span className="text-muted">autoridades e especialistas</span>
              </div>
            </div>
            {about.stats.slice(1).map((s) => (
              <div key={s.label} className="leading-tight">
                <Counter value={s.value} className="block text-3xl font-semibold tracking-tight" />
                <span className="text-sm text-muted">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Composição de retratos */}
        <div className="relative lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.1, ease }}
            style={{ x: xFar, y: yFar }}
            className="relative mx-auto grid max-w-[560px] grid-cols-3 items-start gap-3 md:gap-4"
          >
            {cols.map((col, ci) => (
              // coluna do meio levemente mais baixa — retratos sempre inteiros, sem corte
              <div key={ci} className={ci === 1 ? "mt-12 flex flex-col gap-3 md:gap-4" : "flex flex-col gap-3 md:gap-4"}>
                {col.map((t, i) => (
                  <motion.div
                    key={t.slug}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 + ci * 0.1 + i * 0.08, ease }}
                    className="group relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-3xl bg-mist"
                  >
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 33vw, 190px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-2 bottom-2 translate-y-2 rounded-xl bg-white/90 px-3 py-2 opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="truncate text-xs font-semibold">{t.name}</p>
                      <p className="truncate text-[10px] text-muted">{t.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Card flutuante: Lei */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            style={{ x: xNear, y: yNear }}
            className="absolute -bottom-6 -left-2 md:-left-8"
          >
            <div className="animate-float flex items-center gap-3 rounded-2xl border border-line bg-white/95 p-3 pr-5 shadow-lift backdrop-blur">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500 text-white">
                <Icon name="scales" size={22} />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold">Lei 14.133/2021</p>
                <p className="text-xs text-muted">Nova Lei de Licitações</p>
              </div>
            </div>
          </motion.div>

          {/* Card flutuante: ISO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.85, ease }}
            style={{ x: xNear, y: yNear }}
            className="absolute -bottom-12 -right-2 md:-right-6"
          >
            <div className="animate-float-slow rounded-2xl bg-ink p-5 text-white shadow-lift">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200">Metodologia</p>
              <p className="mt-1 text-2xl font-semibold tracking-tight">4 normas ISO</p>
              <p className="mt-1 text-xs text-white/60">10015 · 10018 · 29992 · 21001</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
