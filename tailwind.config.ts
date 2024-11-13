import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          margin: "auto",

          "@screen xl": {
            paddingLeft: "7rem",
            paddingRight: "7rem",
            maxWidth: "1440px",
            margin: "auto",
          },
          "@screen 2xl": {
            maxWidth: "1536px",
            margin: "auto",
          },
        },
      });
    },
  ],
} satisfies Config;
