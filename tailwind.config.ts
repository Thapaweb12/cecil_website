import type { Config } from "tailwindcss";

/** Map a CSS "R G B" token to a Tailwind color that supports /opacity. */
const token = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: token("--teal"),
        teal: {
          DEFAULT: token("--teal"),
          600: token("--teal-600"),
          700: token("--teal-700"),
        },
        secondary: token("--secondary"),
        navy: {
          DEFAULT: token("--navy"),
          deep: token("--navy-deep"),
        },
        "dark-blue": token("--navy"),
        ink: token("--ink"),
        body: token("--body"),
        muted: token("--muted"),
        surface: {
          DEFAULT: token("--surface"),
          2: token("--surface-2"),
          3: token("--surface-3"),
        },
        line: token("--line"),
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      backgroundImage: {
        "grad-brand": "var(--grad-brand)",
        "grad-navy": "var(--grad-navy)",
      },
      boxShadow: {
        soft: "var(--shadow-sm)",
        card: "var(--shadow-md)",
        lift: "var(--shadow-lg)",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
          margin: "auto",
          "@screen md": {
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          "@screen xl": {
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
            maxWidth: "1200px",
            margin: "auto",
          },
        },
      });
    },
  ],
} satisfies Config;
