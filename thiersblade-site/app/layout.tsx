import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ThiersBlade — Rare French Folding Knives from Thiers, France",
  description: "Rare and vintage French folding knives, personally sourced in Thiers — the knife capital of the world for over 600 years. Each piece is unique. When it's gone, it's gone forever.",
  keywords: "French folding knife, vintage French knife, Thiers knife, Laguiole, pocket knife France, knife collector",
  openGraph: {
    title: "ThiersBlade — Born in Thiers. Carried by the World.",
    description: "Rare and vintage French folding knives sourced directly in Thiers, France.",
    url: "https://thiersblade.com",
    siteName: "ThiersBlade",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
