import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/Icon";

/** Botão flutuante do WhatsApp — verde oficial, com etiqueta no hover (desktop) */
export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Olá! Gostaria de mais informações sobre as soluções da Licitações Inteligentes.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="group fixed bottom-4 right-4 z-50 flex items-center gap-3 md:bottom-6 md:right-6"
    >
      <span className="pointer-events-none hidden translate-x-2 whitespace-nowrap rounded-full bg-card px-4 py-2 text-sm font-semibold text-ink opacity-0 shadow-soft ring-1 ring-line transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Fale no WhatsApp
      </span>
      <span className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 group-hover:scale-105">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
}
