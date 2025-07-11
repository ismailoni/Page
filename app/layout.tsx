import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Archivo } from "next/font/google";


const archivo = Archivo({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MSSN Unilag, 2025.",
  description: "Built with salaam by the web team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/unilag-logo.svg" />
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
