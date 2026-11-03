import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "IKOMI PERÚ S.R.L. | Repuestos de Korea y Japón para Camiones y Buses",
    template: "%s | IKOMI PERÚ",
  },
  description:
    "Importadora y comercializadora de repuestos originales y alternativos para camiones y buses Hyundai, Kia, Mitsubishi, Hino, Isuzu y Nissan en Perú. RUC: 20522459829.",
  keywords: [
    "repuestos camiones peru",
    "repuestos hyundai hd78",
    "embragues valeo peru",
    "frenos sangsin brake",
    "ikomi peru",
    "repuestos ate vitarte",
  ],
  authors: [{ name: "Jonel Aron Villanueva" }],
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://www.ikomiperu.com"),
  openGraph: {
    title: "IKOMI PERÚ S.R.L. | Repuestos de Korea y Japón",
    description:
      "Venta e importación de repuestos para camiones y buses asiáticos en Perú.",
    siteName: "IKOMI Perú",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
