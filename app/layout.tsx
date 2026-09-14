import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Licitações Inteligentes · Desenvolvimento em contratações públicas",
    template: "%s · Licitações Inteligentes",
  },
  description:
    "Desenvolvimento profissional e gerencial em contratações públicas e temas correlatos, com soluções especializadas para a Administração Pública e empresas que contratam com o Poder Público.",
  metadataBase: new URL("https://www.licitainteligente.com.br"),
  openGraph: {
    title: "Licitações Inteligentes",
    description:
      "Cursos e soluções em licitações, contratos, concessões, regulação, controle e direito sancionador.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${serif.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <SmoothScroll />
        <SiteHeader />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
