"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import content from "@/content/content.json";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:px-6">
      <div
        className={clsx(
          "mx-auto max-w-container rounded-2xl border transition-all duration-500",
          scrolled || open
            ? "border-line bg-paper/75 shadow-soft backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 md:px-5">
          <Link href="/" aria-label="Licitações Inteligentes" className="shrink-0">
            <Image
              src="/brand/logo.png"
              alt="Licitações Inteligentes"
              width={927}
              height={109}
              priority
              className="h-auto w-[160px] md:w-[190px]"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-inkSoft transition-colors hover:bg-mist hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={content.site.catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full px-4 py-2.5 text-sm font-medium text-inkSoft transition-colors hover:text-white md:inline-flex"
            >
              Catálogo PDF
            </a>
            <Link
              href="/#contato"
              className="hidden rounded-full bg-action px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-action-hover sm:inline-flex"
            >
              Fale conosco
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-ink lg:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              <span className="relative block h-3 w-4">
                <span className={clsx("absolute left-0 top-0 h-[1.5px] w-4 bg-current transition-transform", open && "translate-y-[5px] rotate-45")} />
                <span className={clsx("absolute bottom-0 left-0 h-[1.5px] w-4 bg-current transition-transform", open && "-translate-y-[5px] -rotate-45")} />
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="flex flex-col px-4 pb-5">
                {content.nav.map((item) => (
                  <li key={item.href} className="border-t border-line">
                    <Link href={item.href} onClick={() => setOpen(false)} className="block py-3.5 text-base font-medium">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="flex gap-2 border-t border-line pt-4">
                  <Link href="/#contato" onClick={() => setOpen(false)} className="rounded-full bg-action px-5 py-2.5 text-sm font-semibold text-white">
                    Fale conosco
                  </Link>
                  <a href={content.site.catalogUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line px-5 py-2.5 text-sm font-medium">
                    Catálogo PDF
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
