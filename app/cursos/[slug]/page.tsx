import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import content from "@/content/content.json";
import { getCourse, waLink } from "@/lib/site";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CheckBullet, Icon } from "@/components/ui/Icon";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return content.featured.items.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const c = getCourse(params.slug);
  if (!c) return {};
  return { title: c.title, description: c.subtitle };
}

export default function CoursePage({ params }: Params) {
  const course = getCourse(params.slug);
  if (!course) notFound();

  const others = content.featured.items.filter((c) => c.slug !== course.slug);

  const facts = [
    { icon: "scales", label: "Base legal", value: course.law },
    { icon: "tool", label: "Metodologia", value: course.metodologia },
    ...(course.cargaHoraria ? [{ icon: "clock", label: "Carga horária", value: course.cargaHoraria }] : []),
    { icon: "user", label: "Público-alvo", value: `${course.publico.length} ${course.publico.length === 1 ? "perfil" : "perfis"}` },
  ];

  return (
    <main>
      <PageIntro
        crumbs={[
          { label: "Início", href: "/" },
          { label: "Cursos em destaque", href: "/#destaques" },
          { label: course.title },
        ]}
      >
        <div className="mt-10 max-w-4xl">
          <Reveal>
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-500 text-white shadow-lift">
              <Icon name={course.icon} size={30} />
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-8 text-[clamp(38px,5.6vw,76px)] font-semibold leading-[1] tracking-[-0.035em]">{course.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl text-xl text-inkSoft">{course.subtitle}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={waLink(`Olá! Gostaria de uma proposta para o curso "${course.title}".`)} external size="lg">
                Solicitar proposta
              </Button>
              <Button href={content.site.catalogUrl} external variant="outline" size="lg">
                Baixar catálogo
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={0.2 + i * 0.05} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-card p-5">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name={f.icon} size={18} />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted">{f.label}</p>
                <p className="mt-1 text-sm font-medium">{f.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageIntro>

      <section className="bg-mist py-20 md:py-24">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-6 px-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="rounded-[28px] bg-card p-7 md:p-9 lg:sticky lg:top-28">
              <h2 className="text-2xl font-semibold tracking-tight">Descrição</h2>
              <p className="mt-5 leading-relaxed text-inkSoft">{course.description}</p>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-7">
            <div className="rounded-[28px] bg-card p-7 md:p-9">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold tracking-tight">Ementa</h2>
                <span className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">{course.ementa.length} tópicos</span>
              </div>
              <ol className="mt-6 flex flex-col divide-y divide-line">
                {course.ementa.map((item, i) => (
                  <li key={item} className="flex gap-4 py-3.5">
                    <span className="w-7 shrink-0 text-sm font-semibold tabular-nums text-brand-500">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[15px] text-inkSoft">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-12">
            <div className="rounded-[28px] border border-line bg-deep p-7 text-white md:p-9">
              <h2 className="text-2xl font-semibold tracking-tight">Público-alvo</h2>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {course.publico.map((p) => (
                  <li key={p} className="flex items-start gap-3 rounded-xl bg-white/[0.06] p-4 text-sm text-white/85">
                    <CheckBullet />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-24">
        <div className="mx-auto max-w-container px-6">
          <h2 className="text-2xl font-semibold tracking-tight">Outros cursos em destaque</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={0.05 * i} className="h-full">
                <Link
                  href={`/cursos/${o.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-[28px] border border-line p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cardSoft text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                    <Icon name={o.icon} size={22} />
                  </span>
                  <h3 className="text-lg font-semibold leading-snug">{o.title}</h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">
                    Ver ementa <Icon name="arrow" size={14} strokeWidth={2} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
