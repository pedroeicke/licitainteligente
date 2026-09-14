import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import content from "@/content/content.json";
import { getTalent, waLink } from "@/lib/site";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CheckBullet, Icon } from "@/components/ui/Icon";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return content.talents.list.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const t = getTalent(params.slug);
  if (!t) return {};
  return { title: t.name, description: `${t.name} · ${t.role}` };
}

export default function TalentPage({ params }: Params) {
  const talent = getTalent(params.slug);
  if (!talent) notFound();

  const list = content.talents.list;
  const idx = list.findIndex((t) => t.slug === talent.slug);
  const next = list[(idx + 1) % list.length];
  const prev = list[(idx - 1 + list.length) % list.length];
  const fullName = (talent as { fullName?: string }).fullName;
  const [first, ...lastParts] = talent.name.split(" ");

  return (
    <main>
      <PageIntro
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Talentos", href: "/#talentos" },
          { label: talent.name },
        ]}
      >
        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-5 lg:col-span-4">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-[32px] bg-mist shadow-lift md:mx-0">
              <Image src={talent.photo} alt={talent.name} fill priority sizes="(max-width: 768px) 90vw, 380px" className="object-cover object-top" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                {talent.group}
              </span>
            </div>
          </Reveal>

          <div className="md:col-span-7 lg:col-span-8">
            <Reveal delay={0.05}>
              <span className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                {talent.role}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-[clamp(44px,7vw,96px)] font-semibold leading-[0.95] tracking-[-0.04em]">
                {first}{" "}
                <span className="font-serif font-normal italic text-brand-500">{lastParts.join(" ")}</span>
              </h1>
            </Reveal>
            {fullName && (
              <Reveal delay={0.12}>
                <p className="mt-3 text-muted">{fullName}</p>
              </Reveal>
            )}
            <Reveal delay={0.15}>
              <ul className="mt-8 flex flex-col gap-3">
                {talent.summary.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-lg text-inkSoft">
                    <CheckBullet />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </PageIntro>

      <section className="bg-mist py-20 md:py-24">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-10 px-6 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-8">
            {talent.sections.map((sec) => (
              <Reveal key={sec.title}>
                <div className="rounded-[28px] bg-white p-7 md:p-9">
                  <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{sec.title}</h2>
                  <ul className="mt-6 flex flex-col divide-y divide-line">
                    {sec.items.map((it) => (
                      <li key={it} className="flex gap-4 py-3.5 text-[15px] leading-relaxed text-inkSoft">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}

            {talent.history.length > 0 && (
              <Reveal>
                <div className="rounded-[28px] bg-white p-7 md:p-9">
                  <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Histórico profissional</h2>
                  <div className="mt-6 flex flex-col gap-4">
                    {talent.history.map((p, i) => (
                      <p key={i} className="leading-relaxed text-inkSoft">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {talent.publications.length > 0 && (
              <Reveal>
                <div className="rounded-[28px] bg-white p-7 md:p-9">
                  <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Principais publicações</h2>
                  <ul className="mt-6 flex flex-col gap-3">
                    {talent.publications.map((pub, i) => {
                      const p = pub as { ref: string; url?: string; note?: string };
                      return (
                        <li key={i} className="flex flex-col gap-4 rounded-2xl border border-line p-5 md:flex-row md:items-center md:justify-between">
                          <div className="flex items-start gap-4">
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                              <Icon name="book" size={18} />
                            </span>
                            <div>
                              <p className="text-sm leading-relaxed text-inkSoft">{p.ref}</p>
                              {p.note && (
                                <span className="mt-2 inline-flex rounded-full bg-brand-500 px-3 py-1 text-[11px] font-semibold text-white">{p.note}</span>
                              )}
                            </div>
                          </div>
                          {p.url && (
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-500 md:self-auto"
                            >
                              Acessar <Icon name="arrow" size={12} strokeWidth={2} />
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="flex flex-col gap-4 lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-[28px] bg-brand-500 p-7 text-white">
                <h3 className="relative text-2xl font-semibold leading-tight tracking-tight">
                  Leve {first} para a sua{" "}
                  <span className="font-serif font-normal italic">organização</span>
                </h3>
                <p className="relative mt-3 text-sm text-white/80">
                  Solicite uma proposta de capacitação sob medida com o nosso corpo docente.
                </p>
                <div className="relative mt-6">
                  <Button href={waLink(`Olá! Gostaria de uma proposta de capacitação com ${talent.name}.`)} external variant="light">
                    Solicitar proposta
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link href={`/talentos/${prev.slug}`} className="rounded-2xl bg-white p-4 transition-shadow hover:shadow-soft">
                  <span className="text-xs text-muted">← Anterior</span>
                  <span className="mt-1 block text-sm font-semibold">{prev.name}</span>
                </Link>
                <Link href={`/talentos/${next.slug}`} className="rounded-2xl bg-white p-4 text-right transition-shadow hover:shadow-soft">
                  <span className="text-xs text-muted">Próximo →</span>
                  <span className="mt-1 block text-sm font-semibold">{next.name}</span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
