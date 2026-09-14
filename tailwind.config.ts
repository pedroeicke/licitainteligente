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
        // Base clara
        paper: "#FFFFFF",
        mist: "#F5F7FB",
        // Tipografia / blocos escuros
        ink: "#0B0D12",
        inkSoft: "#3A4150",
        muted: "#6B7280",
        line: "#E6E9F0",
        // Azul de destaque
        brand: {
          50: "#EEF3FF",
          100: "#DCE6FF",
          200: "#B9CCFF",
          400: "#5B84FF",
          500: "#2F5FFF",
          600: "#1F4AE6",
          700: "#1A3CB8",
          900: "#0E1F5C",
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
        soft: "0 1px 2px rgba(11,13,18,0.04), 0 12px 32px -12px rgba(11,13,18,0.12)",
        lift: "0 2px 4px rgba(11,13,18,0.04), 0 28px 60px -20px rgba(31,74,230,0.28)",
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
