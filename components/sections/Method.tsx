"use client";

import { motion } from "framer-motion";
import content from "@/content/content.json";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Button";

/** Bloco azul: metodologia em 4 passos + normas ISO */
export function Method() {
  const { method, differential } = content;

  return (
    <section className="px-3 md:px-6">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[36px] border border-line bg-deep px-6 py-20 text-white md:px-12 md:py-28">
        <div
          aria-hidden
          className="absolute -left-40 top-0 h-[560px] w-[560px] rounded-full opacity-50 blur-[120px]"
          style={{ background: "radial-gradient(closest-side, #1FA9FF, transparent)" }}
        />

        <div className="relative mx-auto max-w-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow tone="light">{method.badge}</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 text-[clamp(34px,4.6vw,60px)] font-semibold leading-[1.02] tracking-[-0.03em]">
                  {differential.titleLead}{" "}
                  <span className="font-serif font-normal italic text-brand-400">{differential.titleHighlight}</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-lg text-white/70">{method.title}.</p>
            </Reveal>
          </div>

          {/* Passos com linha de progresso */}
          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-white/15 lg:block" />
            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 right-0 top-5 hidden h-px origin-left bg-action-hover lg:block"
            />
            <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {method.items.map((s, i) => (
                <Reveal key={s.title} delay={0.15 + i * 0.12}>
                  <li className="relative">
                    <span className="relative grid h-10 w-10 place-items-center rounded-full bg-action text-sm font-semibold ring-8 ring-deep">
                      {i + 1}
                    </span>
                    <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{s.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Normas ISO */}
          <div className="mt-20 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {differential.norms.map((n, i) => (
              <Reveal key={n.code} delay={i * 0.06} className="h-full">
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors duration-500 hover:border-action-border hover:bg-action/40">
                  <p className="font-serif text-3xl italic text-brand-200">{n.code}</p>
                  <p className="mt-4 font-semibold">{n.title}</p>
                  <p className="mt-1 text-sm text-white/60">{n.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
