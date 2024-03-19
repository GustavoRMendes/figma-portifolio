import type { Metadata } from "next";
import "./globals.css";
import { fontFiraSans } from "@/font";

export const metadata: Metadata = {
  title: "GM",
  description: "Figma Portifólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fontFiraSans.variable} ${fontFiraSans.className}`}>{children}</body>
    </html>
  );
}
