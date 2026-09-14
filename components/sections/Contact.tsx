import content from "@/content/content.json";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { ContactForm } from "@/components/ui/ContactForm";
import { Icon, WhatsAppIcon } from "@/components/ui/Icon";
import { waLink } from "@/lib/site";

/** FAQ + contato lado a lado */
export function Contact() {
  const { faq, contact, site } = content;

  const channels = [
    { icon: <WhatsAppIcon className="h-5 w-5" />, label: "WhatsApp", value: site.phone, href: waLink() },
    { icon: <Icon name="mail" size={20} />, label: "E-mail", value: site.email, href: `mailto:${site.email}` },
    { icon: <Icon name="pin" size={20} />, label: "Endereço", value: `${site.address}, ${site.city}`, href: site.mapsUrl },
  ];

  return (
    <>
      <section className="bg-paper py-24 md:py-32">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>{faq.badge}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-[clamp(34px,4.2vw,54px)] font-semibold leading-[1.02] tracking-[-0.03em]">
                Perguntas <span className="font-serif font-normal italic text-brand-500">frequentes</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-inkSoft">
                Não encontrou o que procura?{" "}
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-600 underline-offset-4 hover:underline">
                  Fale com a equipe
                </a>
                .
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-8">
            <Accordion items={faq.items} />
          </Reveal>
        </div>
      </section>

      <section id="contato" className="scroll-mt-24 px-3 pb-3 md:px-6 md:pb-6">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[36px] bg-brand-500 px-6 py-20 text-white md:px-12 md:py-24">
          <div
            aria-hidden
            className="absolute -bottom-40 -left-20 h-[520px] w-[520px] rounded-full bg-brand-700 opacity-70 blur-[100px]"
          />

          <div className="relative mx-auto grid max-w-container grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow tone="light">{contact.badge}</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 text-[clamp(38px,5vw,68px)] font-semibold leading-[0.98] tracking-[-0.035em]">
                  Vamos desenvolver a sua{" "}
                  <span className="font-serif font-normal italic">equipe?</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md text-lg text-white/80">{contact.body}</p>
              </Reveal>

              <ul className="mt-10 flex flex-col gap-3">
                {channels.map((c, i) => (
                  <Reveal key={c.label} delay={0.12 + i * 0.05}>
                    <li>
                      <a
                        href={c.href}
                        target={c.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur transition-colors hover:bg-white/20"
                      >
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-600">{c.icon}</span>
                        <span className="min-w-0">
                          <span className="block text-xs uppercase tracking-[0.16em] text-white/60">{c.label}</span>
                          <span className="block break-words font-medium">{c.value}</span>
                        </span>
                      </a>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal delay={0.15} className="lg:col-span-7">
              <div className="rounded-[28px] bg-white p-6 text-ink shadow-[0_40px_80px_-30px_rgba(14,31,92,0.6)] md:p-9">
                <h3 className="text-xl font-semibold tracking-tight">Entre em contato para mais informações</h3>
                <p className="mt-1 text-sm text-muted">Respondemos com a melhor solução para a sua organização.</p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
