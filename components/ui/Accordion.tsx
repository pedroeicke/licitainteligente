"use client";

import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

type Item = { q: string; a: string };

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={clsx(
              "rounded-2xl border bg-white transition-colors",
              isOpen ? "border-brand-200 shadow-soft" : "border-line hover:border-brand-200"
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-6"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold md:text-lg">{item.q}</span>
              <span
                aria-hidden
                className={clsx(
                  "grid h-8 w-8 shrink-0 place-items-center rounded-full text-lg transition-all duration-300",
                  isOpen ? "rotate-45 bg-brand-500 text-white" : "bg-mist text-ink"
                )}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-inkSoft md:px-6 md:pr-16">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
