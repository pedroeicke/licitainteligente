import Link from "next/link";

type Props = {
  crumbs: { label: string; href?: string }[];
  children: React.ReactNode;
};

/** Topo das páginas internas: grade azul sutil + breadcrumb */
export function PageIntro({ crumbs, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-paper pb-16 pt-32 md:pb-20 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full opacity-60 blur-[120px]"
        style={{ background: "radial-gradient(closest-side, #B9CCFF, transparent)" }}
      />
      <div className="relative mx-auto max-w-container px-6">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-muted">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-brand-600">
                  {c.label}
                </Link>
              ) : (
                <span className="font-medium text-ink">{c.label}</span>
              )}
              {i < crumbs.length - 1 && <span aria-hidden>/</span>}
            </span>
          ))}
        </nav>
        {children}
      </div>
    </section>
  );
}
