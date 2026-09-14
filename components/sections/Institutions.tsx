import content from "@/content/content.json";

/** Faixa com as instituições onde o corpo docente atua/atuou */
export function Institutions() {
  const { institutions } = content;
  const items = [...institutions.items, ...institutions.items];

  return (
    <section className="border-y border-line bg-mist py-8">
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 px-6 md:flex-row md:gap-10">
        <p className="shrink-0 text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted md:max-w-[190px] md:text-left">
          {institutions.title}
        </p>
        <div className="mask-fade-x relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12" style={{ ["--duration" as string]: "38s" }}>
            {items.map((name, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap text-lg font-semibold tracking-tight text-ink/70">
                {name}
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
