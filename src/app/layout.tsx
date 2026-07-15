import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";

import "./globals.css";
import { Toaster } from "react-hot-toast";
import { site } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";

// Body / UI font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Elegant serif for display headlines (matches the flyer's "Protect What Matters Most")
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-serif",
  display: "swap",
});

// Script accent (matches the flyer's "Helping You" / "Business")
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.personName} | Life Insurance & Living Benefits — ${site.brokerage}`,
    template: `%s | ${site.personName}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  keywords: [
    "life insurance",
    "living benefits",
    "indexed annuities",
    "mortgage protection",
    "final expense",
    "retirement planning",
    "Vantage Financial Alliance",
    "West Covina insurance agent",
    "California life insurance",
    "Cecile Villacorta",
  ],
  authors: [{ name: site.personName }],
  creator: site.personName,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.personName} — Life Insurance & Living Benefits`,
    description: site.description,
    url: site.url,
    locale: "en_US",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.personName} — ${site.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.personName} — Life Insurance & Living Benefits`,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}
    >
      <body className="font-sans text-body bg-surface antialiased">
        <JsonLd />
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
