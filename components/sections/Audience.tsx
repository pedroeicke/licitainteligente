import content from "@/content/content.json";
import { Reveal } from "@/components/ui/Reveal";
import { Button, Eyebrow } from "@/components/ui/Button";
import { CheckBullet, Icon } from "@/components/ui/Icon";
import { waLink } from "@/lib/site";

/** Para quem: Administração Pública × Empresas */
export function Audience() {
  const { proposal, publicAudience } = content;

  return (
    <section id="para-quem" className="scroll-mt-24 bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-container px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>{publicAudience.badge}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-[clamp(34px,4.6vw,60px)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Soluções para quem contrata{" "}
              <span className="font-serif font-normal italic text-brand-500">e para quem é contratado</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-card p-8 shadow-soft md:p-10">
              <div className="flex items-center justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white">
                  <Icon name="gov" size={26} />
                </span>
              </div>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">{proposal.public.label}</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight">{proposal.public.title}</h3>
              <ul className="mt-7 flex flex-col gap-3">
                {proposal.public.includes.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-inkSoft">
                    <CheckBullet />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-9">
                <Button href={waLink("Olá! Gostaria de solicitar uma proposta para a Administração Pública.")} external>
                  {proposal.public.cta}
                </Button>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-deep p-8 text-white md:p-10">
              <div
                aria-hidden
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
                style={{ background: "radial-gradient(closest-side, #1FA9FF, transparent)" }}
              />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-card text-ink">
                <Icon name="briefcase" size={26} />
              </span>
              <p className="relative mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-brand-200">{proposal.business.label}</p>
              <h3 className="relative mt-2 text-3xl font-semibold tracking-tight">{proposal.business.title}</h3>
              <ul className="relative mt-7 flex flex-col gap-3">
                {proposal.business.includes.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-white/75">
                    <CheckBullet />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="relative mt-auto pt-9">
                <Button
                  href={waLink("Olá! Represento uma empresa e gostaria de falar com a equipe da Licitações Inteligentes.")}
                  external
                  variant="light"
                >
                  {proposal.business.cta}
                </Button>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-4 flex flex-wrap justify-center gap-2 rounded-[28px] border border-line bg-card p-5">
            {publicAudience.list.map((p) => (
              <span key={p} className="rounded-full bg-mist px-4 py-2 text-sm text-inkSoft">
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
