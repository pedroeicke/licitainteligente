import Link from "next/link";
import clsx from "clsx";
import content from "@/content/content.json";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/** Bento com os 4 cursos em destaque — o primeiro ocupa o bloco grande em azul */
export function Featured() {
  const { featured } = content;
  const [first, ...rest] = featured.items;

  return (
    <section id="destaques" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-container px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow>{featured.badge}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-[clamp(34px,4.6vw,60px)] font-semibold leading-[1.02] tracking-[-0.03em]">
                {featured.titleLead}{" "}
                <span className="font-serif font-normal italic text-brand-500">{featured.titleHighlight}</span>{" "}
                {featured.titleRest}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="text-lg text-inkSoft">{featured.body}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Destaque grande */}
          <Reveal className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <Link
              href={`/cursos/${first.slug}`}
              className="group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-[28px] bg-accent-grad p-8 text-white md:p-10"
            >
              <div
                aria-hidden
                className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#5BC0FF] opacity-50 blur-3xl transition-transform duration-700 group-hover:scale-125"
              />
              <div className="relative flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur">{first.law}</span>
                <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                  {first.ementa.length} tópicos
                </span>
              </div>
              <div className="relative mt-auto pt-16">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-card text-brand-600">
                  <Icon name={first.icon} size={26} />
                </span>
                <h3 className="mt-6 max-w-xl text-[clamp(28px,3.4vw,44px)] font-semibold leading-[1.05] tracking-[-0.02em]">
                  {first.title}
                </h3>
                <p className="mt-4 max-w-xl text-white/80">{first.subtitle}</p>
                <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-card px-5 py-3 text-sm font-semibold text-ink transition-transform duration-300 group-hover:translate-x-1">
                  Ver ementa completa <Icon name="arrow" size={16} strokeWidth={2} />
                </span>
              </div>
            </Link>
          </Reveal>

          {rest.map((c, i) => (
            <Reveal key={c.slug} delay={0.08 * (i + 1)} className={clsx(i === 2 && "md:col-span-2 lg:col-span-3")}>
              <Link
                href={`/cursos/${c.slug}`}
                className="group flex h-full flex-col rounded-[28px] border border-line bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cardSoft text-brand-400 transition-colors duration-500 group-hover:bg-action group-hover:text-white">
                    <Icon name={c.icon} size={22} />
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-all duration-500 group-hover:rotate-45 group-hover:border-action-border group-hover:bg-action group-hover:text-white">
                    <Icon name="arrow" size={16} strokeWidth={2} />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-snug tracking-tight">{c.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-inkSoft">{c.subtitle}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  <span className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-inkSoft">{c.law}</span>
                  {c.cargaHoraria && (
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">{c.cargaHoraria}</span>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
