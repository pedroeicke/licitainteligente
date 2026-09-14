import Link from "next/link";
import clsx from "clsx";
import { Icon } from "@/components/ui/Icon";

type Props = {
  href: string;
  children: React.ReactNode;
  /** primary azul · dark preto · outline borda · light branco (sobre fundos escuros/azuis) */
  variant?: "primary" | "dark" | "outline" | "light" | "ghostLight";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  className,
}: Props) {
  const cls = clsx(
    "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300",
    size === "lg" ? "px-7 py-4 text-[15px]" : "px-5 py-3 text-sm",
    {
      primary: "bg-brand-500 text-white shadow-[0_10px_30px_-10px_rgba(47,95,255,0.7)] hover:bg-brand-600 hover:-translate-y-0.5",
      dark: "bg-ink text-white hover:bg-brand-600 hover:-translate-y-0.5",
      outline: "border border-line bg-white text-ink hover:border-ink hover:-translate-y-0.5",
      light: "bg-white text-ink hover:bg-brand-50 hover:-translate-y-0.5",
      ghostLight: "border border-white/25 text-white hover:bg-white/10",
    }[variant],
    className
  );

  const inner = (
    <>
      <span>{children}</span>
      <Icon
        name="arrow"
        size={16}
        strokeWidth={2}
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Eyebrow({
  children,
  tone = "brand",
  className,
}: {
  children: React.ReactNode;
  tone?: "brand" | "light";
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em]",
        tone === "brand" ? "text-brand-600" : "text-white/80",
        className
      )}
    >
      <span className={clsx("h-px w-6", tone === "brand" ? "bg-brand-500" : "bg-white/60")} />
      {children}
    </span>
  );
}
