import Image from "next/image";
import Link from "next/link";
import content from "@/content/content.json";
import { SocialIcon } from "@/components/ui/Icon";
import { waLink } from "@/lib/site";

export function Footer() {
  const { footer, site, nav, areas } = content;

  return (
    <footer className="bg-paper pb-10 pt-16">
      <div className="mx-auto max-w-container px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image src="/brand/logo.png" alt="Licitações Inteligentes" width={927} height={109} className="h-auto w-[210px]" />
            <p className="mt-5 max-w-xs text-sm text-inkSoft">{footer.tagline}</p>
            <div className="mt-6 flex gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-inkSoft transition-all hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  <SocialIcon label={s.label} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Navegação</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-inkSoft transition-colors hover:text-brand-600">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Áreas temáticas</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {areas.items.map((a) => (
                <li key={a.slug}>
                  <Link href="/#cursos" className="text-inkSoft transition-colors hover:text-brand-600">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Contato</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-inkSoft">
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all hover:text-brand-600">
                  {site.email}
                </a>
              </li>
              <li className="pt-1">
                {site.address}
                <br />
                {site.city} · {site.cep}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <span>{footer.copyright}</span>
          <span>
            {site.legalName} · CNPJ {site.cnpj}
          </span>
        </div>
      </div>
    </footer>
  );
}
