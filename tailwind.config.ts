import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,json}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta PS26: azul-marinho profundo + azul elétrico
        paper: "#020A1A", // fundo principal
        mist: "#061127", // seções alternadas / elementos internos
        deep: "#000613", // blocos mais escuros
        card: "#0A1730",
        cardSoft: "#0E1F3C",
        // Tipografia (sobre fundo escuro)
        ink: "#FFFFFF",
        inkSoft: "rgba(255,255,255,0.72)",
        muted: "rgba(255,255,255,0.55)",
        line: "rgba(255,255,255,0.10)",
        // Azul dos elementos clicáveis (mesmo tom da badge do hero)
        action: {
          DEFAULT: "#14396A",
          hover: "#1B4A86",
          border: "#2A5C9A",
        },
        // Destaque
        brand: {
          50: "#0B2A4F",
          100: "#123B6B",
          200: "#2E7FC4",
          400: "#5BC0FF",
          500: "#1FA9FF",
          600: "#1FA9FF",
          700: "#5BC0FF",
          900: "#BFE6FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      boxShadow: {
        soft: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
        lift: "0 30px 60px -25px rgba(31,169,255,0.35)",
      },
      animation: {
        marquee: "marquee var(--duration, 40s) linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
