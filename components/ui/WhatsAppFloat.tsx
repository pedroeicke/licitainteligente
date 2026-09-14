import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/Icon";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Olá! Gostaria de mais informações sobre as soluções da Licitações Inteligentes.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand-500 text-white shadow-lift transition-transform hover:scale-110 md:bottom-6 md:right-6"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-brand-500/40 [animation-duration:2.4s]" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
