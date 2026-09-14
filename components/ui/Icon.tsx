type Props = {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

/** Conjunto de ícones em traço (stroke = currentColor) */
const PATHS: Record<string, React.ReactNode> = {
  gov: <path d="M3 21h18M4 21V10M20 21V10M3 10h18L12 4 3 10zM8 21v-7M12 21v-7M16 21v-7" />,
  building: (
    <>
      <rect x="4" y="7" width="16" height="14" rx="1.5" />
      <path d="M9 21V12h6v9M8 4h8l1 3H7l1-3z" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
    </>
  ),
  scales: <path d="M12 3v18M7 21h10M5 7h14M8 7l-3 6a3 3 0 0 0 6 0L8 7zM16 7l-3 6a3 3 0 0 0 6 0l-3-6z" />,
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="m9 11 2 2 4-4" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
  doc: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  flow: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path d="M9 6h4a3 3 0 0 1 3 3v6" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 3 7.5 12 12l9-4.5L12 3z" />
      <path d="M3 12.5 12 17l9-4.5" />
      <path d="M3 17.5 12 22l9-4.5" />
    </>
  ),
  "doc-search": (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
      <path d="M14 3v5h5" />
      <circle cx="11" cy="14" r="2.2" />
      <path d="m13 16 2 2" />
    </>
  ),
  tool: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z" />,
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 7.5 21l4.5-2.5L16.5 21 15 13.5" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5z" />
      <path d="M4 19a2 2 0 0 1 2-2h13M9 7h6" />
    </>
  ),
  crane: (
    <>
      <path d="M6 21V4l12 3H6M6 11h8M3 21h8M14 7v5" />
      <rect x="12" y="12" width="4" height="3" rx="0.5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4M4 20h16" />
      <path d="m7 15 4-4 3 3 5-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  arrow: <path d="M7 17 17 7M9 7h8v8" />,
  download: <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  id: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="11" r="2" />
      <path d="M6 16a3 3 0 0 1 6 0M14 10h4M14 14h4" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.4L12 17l-1.9-5.6L4.5 10l5.6-1.4L12 3z" />
    </>
  ),
};

export function Icon({ name, size = 24, strokeWidth = 1.6, className }: Props) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {PATHS[name] ?? PATHS.sparkles}
    </svg>
  );
}

export function CheckBullet({ tone = "brand" }: { tone?: "brand" | "light" }) {
  return (
    <span
      className={
        "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full " +
        (tone === "brand" ? "bg-brand-500 text-white" : "bg-card text-brand-600")
      }
    >
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden>
      <path d="M16.003 3C9.376 3 4 8.376 4 15.003c0 2.117.553 4.187 1.604 6.012L4 29l8.18-1.572a11.96 11.96 0 0 0 3.823.626h.005C22.628 28.054 28 22.677 28 16.05 28 12.86 26.755 9.865 24.49 7.6A11.93 11.93 0 0 0 16.003 3Zm.003 21.92h-.004a9.94 9.94 0 0 1-5.06-1.39l-.362-.216-4.852.93.96-4.73-.236-.376a9.93 9.93 0 0 1-1.52-5.218c0-5.49 4.464-9.954 9.95-9.954a9.882 9.882 0 0 1 7.04 2.92 9.872 9.872 0 0 1 2.915 7.04c0 5.49-4.464 9.994-9.83 9.994Zm5.452-7.453c-.298-.149-1.764-.87-2.038-.97-.274-.099-.473-.149-.672.149-.198.298-.768.97-.942 1.17-.174.198-.348.223-.646.074-.298-.149-1.256-.464-2.39-1.476-.883-.787-1.48-1.76-1.654-2.058-.174-.298-.018-.46.13-.608.133-.133.298-.348.447-.522.149-.174.198-.298.298-.497.099-.198.05-.373-.025-.522-.075-.149-.673-1.62-.92-2.214-.243-.583-.49-.504-.673-.514l-.572-.01c-.198 0-.522.074-.795.373-.273.298-1.041 1.017-1.041 2.488s1.066 2.89 1.214 3.088c.149.198 2.097 3.2 5.08 4.49.71.307 1.263.49 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.764-.72 2.014-1.416.248-.696.248-1.293.174-1.416-.074-.124-.273-.198-.572-.347Z" />
    </svg>
  );
}

export function SocialIcon({ label, className }: { label: string; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (label) {
    case "Instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...common}>
          <rect x="2.5" y="5" width="19" height="14" rx="4" />
          <path d="m10 9 5 3-5 3V9z" fill="currentColor" />
        </svg>
      );
    case "TikTok":
      return (
        <svg {...common}>
          <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.5 2.5 2.5 4.5 5 5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
        </svg>
      );
  }
}
