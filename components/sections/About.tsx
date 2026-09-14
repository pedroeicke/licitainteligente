import content from "@/content/content.json";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Button";
import { WordReveal } from "@/components/ui/WordReveal";
import { Icon } from "@/components/ui/Icon";

const PILLARS = [
  { icon: "target", title: "Gestão por competência", desc: "Métodos internacionalmente reconhecidos para desenvolver o que a equipe realmente precisa." },
  { icon: "flow", title: "Abordagem de processo", desc: "Conteúdo que acompanha o fluxo real: do planejamento à fiscalização do contrato." },
  { icon: "layers", title: "Sob medida", desc: "Treinamento específico conforme a estrutura, a realidade e a complexidade da organização." },
  { icon: "doc-search", title: "Problemas concretos", desc: "Fundamentos teóricos aliados a estudos práticos e casos reais." },
];

export function About() {
  const { about, differential } = content;

  return (
    <section id="quem-somos" className="scroll-mt-24 bg-paper py-24 md:py-36">
      <div className="mx-auto max-w-container px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <Eyebrow>{about.badge}</Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <WordReveal
              text={about.body}
              className="text-[clamp(24px,3vw,40px)] font-medium leading-[1.25] tracking-[-0.02em]"
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-500 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-500 group-hover:bg-brand-500 group-hover:text-white">
                  <Icon name={p.icon} size={22} />
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-inkSoft">{p.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-muted">{differential.footnote}</p>
        </Reveal>
      </div>
    </section>
  );
}
