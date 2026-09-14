# Licitações Inteligentes — site

Site institucional em Next.js 14 (App Router) + Tailwind + Framer Motion,
na identidade branco, preto e azul da Licitações Inteligentes.

## Rodar localmente

```bash
npm install
npm run dev
```

## Estrutura

```
app/
  page.tsx                 # home (ordem das seções)
  talentos/[slug]/page.tsx # bio de cada talento (16 páginas estáticas)
  cursos/[slug]/page.tsx   # ementa completa dos cursos em destaque
components/
  sections/                # uma seção por arquivo
  ui/                      # Reveal, Button, Accordion, Counter, WordReveal, ContactForm...
content/content.json       # TODO o texto e dados do site — edite aqui
public/retratos            # retratos 3:4 recortados das fotos originais
```

## Observações

- O formulário de contato não tem backend: ao enviar, abre o WhatsApp com a mensagem preenchida.
- Paleta (branco, preto e azul `brand`) e fontes em `tailwind.config.ts` e `app/layout.tsx`.
