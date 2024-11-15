import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cecile M. Villacorta",
  description: "Cecile M. Villacorta - Qualified Field Director - PFA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
