"use client";

import { useState } from "react";
import clsx from "clsx";
import content from "@/content/content.json";
import { waLink } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

const UFS = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA",
  "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",
];

const field =
  "w-full rounded-xl border border-line bg-mist/60 px-4 py-3.5 text-sm text-ink placeholder:text-muted outline-none transition-all focus:border-brand-500 focus:bg-card focus:ring-4 focus:ring-brand-100";

/**
 * Formulário de contato (mesmos campos do site original).
 * Sem backend: ao enviar, abre o WhatsApp com a mensagem já preenchida.
 */
export function ContactForm() {
  const [areas, setAreas] = useState<string[]>([]);

  const toggle = (a: string) =>
    setAreas((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      "Olá! Gostaria de mais informações.",
      "",
      `Nome: ${data.get("nome")}`,
      `Telefone: ${data.get("telefone")}`,
      `E-mail: ${data.get("email")}`,
      `Cidade/UF: ${data.get("cidade")} - ${data.get("estado")}`,
      areas.length ? `Áreas de interesse: ${areas.join("; ")}` : "",
      data.get("mensagem") ? `Informações adicionais: ${data.get("mensagem")}` : "",
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <label className="sm:col-span-2">
        <span className="sr-only">Nome</span>
        <input name="nome" required placeholder="Nome" className={field} autoComplete="name" />
      </label>
      <label>
        <span className="sr-only">Telefone</span>
        <input name="telefone" required placeholder="Telefone" className={field} type="tel" autoComplete="tel" />
      </label>
      <label>
        <span className="sr-only">E-mail</span>
        <input name="email" required placeholder="E-mail" className={field} type="email" autoComplete="email" />
      </label>
      <label>
        <span className="sr-only">Cidade</span>
        <input name="cidade" required placeholder="Cidade" className={field} autoComplete="address-level2" />
      </label>
      <label className="relative">
        <span className="sr-only">Estado</span>
        <select name="estado" required defaultValue="" className={clsx(field, "appearance-none pr-10")}>
          <option value="" disabled className="bg-card">
            Estado
          </option>
          {UFS.map((uf) => (
            <option key={uf} value={uf} className="bg-card">
              {uf}
            </option>
          ))}
        </select>
        <span aria-hidden className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">▾</span>
      </label>

      <fieldset className="mt-2 sm:col-span-2">
        <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          Selecione sua(s) área(s) temática(s)
        </legend>
        <div className="flex flex-wrap gap-2">
          {content.areas.items.map((a) => {
            const active = areas.includes(a.title);
            return (
              <button
                key={a.slug}
                type="button"
                onClick={() => toggle(a.title)}
                aria-pressed={active}
                className={clsx(
                  "rounded-full border px-3.5 py-2 text-xs font-medium transition-all md:text-[13px]",
                  active
                    ? "border-brand-500 bg-brand-500 text-white"
                    : "border-line bg-card text-inkSoft hover:border-brand-400 hover:text-brand-600"
                )}
              >
                {active && "✓ "}
                {a.title}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="mt-2 sm:col-span-2">
        <span className="sr-only">Informações adicionais</span>
        <textarea name="mensagem" rows={4} placeholder="Informações adicionais" className={clsx(field, "resize-none")} />
      </label>

      <div className="mt-2 flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex items-center gap-2.5 rounded-full bg-brand-500 px-7 py-4 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-400"
        >
          Enviar mensagem
          <Icon name="arrow" size={16} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <span className="text-xs text-muted">O envio abre o WhatsApp com a mensagem preenchida.</span>
      </div>
    </form>
  );
}
