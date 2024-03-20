import type { Metadata } from "next";
import "./globals.css";
import { fontFiraSans, poppins } from "@/font";

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
      <body className={`${fontFiraSans.variable} ${fontFiraSans.className} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
