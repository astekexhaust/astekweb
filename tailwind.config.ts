import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ffffff",
        muted: "#666666",
        accent: "#2563eb",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
