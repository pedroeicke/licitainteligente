import Image from "next/image";
import content from "@/content/content.json";
import { Reveal } from "@/components/ui/Reveal";
import { Button, Eyebrow } from "@/components/ui/Button";

export function Publications() {
  const { publications, organizer } = content;

  return (
    <section id="publicacoes" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-container px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Eyebrow>{publications.badge}</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 text-[clamp(34px,4.2vw,54px)] font-semibold leading-[1.02] tracking-[-0.03em]">
                  Obras de{" "}
                  <span className="font-serif font-normal italic text-brand-500">referência</span> escritas
                  pelos nossos talentos
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <a
                  href={organizer.card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-10 block rounded-2xl border border-line p-5 transition-colors hover:border-brand-200 hover:bg-brand-50/50"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                    {organizer.card.title}
                  </span>
                  <p className="mt-2 text-sm font-medium leading-snug">{organizer.card.desc}</p>
                  <span className="mt-3 inline-block text-xs text-muted group-hover:text-white">Ler matéria na ABRAC →</span>
                </a>
              </Reveal>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-8">
            {publications.items.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <article className="group grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[28px] bg-mist p-6 sm:grid-cols-[200px_1fr] md:p-8">
                  <div className="relative mx-auto w-[170px] sm:w-full" style={{ perspective: "1200px" }}>
                    <div className="relative aspect-[734/1024] overflow-hidden rounded-lg shadow-[0_30px_60px_-20px_rgba(11,13,18,0.45)] transition-transform duration-700 [transform:rotateY(-14deg)_rotateX(4deg)] group-hover:[transform:rotateY(0deg)_rotateX(0deg)]">
                      <Image src={b.cover} alt={b.title} fill sizes="200px" className="object-cover" />
                      <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/30 to-transparent" />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="rounded-full bg-card px-3 py-1 font-semibold">{b.publisher}</span>
                      <span className="text-muted">{b.authors}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{b.title}</h3>
                    <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-inkSoft">{b.desc}</p>
                    <div className="mt-6">
                      <Button href={b.url} external variant="dark">
                        Compre já o seu
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
