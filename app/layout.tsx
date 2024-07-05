import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MSSN Unilag, 2024.",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
