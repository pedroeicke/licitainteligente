"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import content from "@/content/content.json";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Talents() {
  const { talents } = content;
  const [group, setGroup] = useState("Todos");

  const list = useMemo(
    () => (group === "Todos" ? talents.list : talents.list.filter((t) => t.group === group)),
    [group, talents.list]
  );

  return (
    <section id="talentos" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-container px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow>{talents.badge}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-[clamp(34px,4.6vw,60px)] font-semibold leading-[1.02] tracking-[-0.03em]">
                Aprenda com quem{" "}
                <span className="font-serif font-normal italic text-brand-500">vive</span> as contratações públicas
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="text-lg text-inkSoft">{talents.body}</p>
          </Reveal>
        </div>

        {/* Filtros */}
        <Reveal delay={0.1}>
          <div className="no-scrollbar -mx-6 mt-10 flex gap-2 overflow-x-auto px-6 md:mx-0 md:flex-wrap md:px-0">
            {talents.groups.map((g) => {
              const count = g === "Todos" ? talents.list.length : talents.list.filter((t) => t.group === g).length;
              const active = g === group;
              return (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGroup(g)}
                  className={clsx(
                    "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    active ? "border-action-border bg-action text-white" : "border-line bg-card text-inkSoft hover:border-action-border hover:text-white"
                  )}
                >
                  {g} <span className={clsx("ml-1 tabular-nums", active ? "text-white/60" : "text-muted")}>{count}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {list.map((t) => (
              <motion.div
                key={t.slug}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={`/talentos/${t.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-mist">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-paper/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="absolute left-3 top-3 rounded-full bg-paper/75 text-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink backdrop-blur">
                      {t.group}
                    </span>
                    <span className="absolute bottom-3 right-3 grid h-10 w-10 translate-y-3 place-items-center rounded-full bg-action text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <Icon name="arrow" size={16} strokeWidth={2} />
                    </span>
                  </div>
                  <div className="px-1 pt-4">
                    <h3 className="font-semibold tracking-tight transition-colors group-hover:text-white md:text-lg">{t.name}</h3>
                    <p className="mt-0.5 line-clamp-2 text-xs text-muted md:text-sm">{t.role}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
