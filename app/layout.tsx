import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title:
    "Sendy Andreansah — IT Support, Servis Komputer & Laptop | Tangerang",
  description:
    "IT Support dan servis komputer/laptop sejak 2013 di Tangerang. Perbaikan hardware, instalasi Windows & Linux, upgrade RAM/SSD, jaringan LAN, dan printer. 13 tahun terbiasa kerja sistem shift 1/2/3. S1 Sistem Informasi.",
  keywords: [
    "IT Support Tangerang",
    "servis komputer Tangerang",
    "servis laptop Tangerang",
    "IT Administrator",
    "Helpdesk",
    "Desktop Support",
    "IT Technician",
    "Sendy Andreansah",
  ],
  authors: [{ name: "Sendy Andreansah" }],
  openGraph: {
    title: "Sendy Andreansah — IT Support & Servis Komputer Tangerang",
    description:
      "Servis dan dukungan IT sejak 2013 di Tangerang: perbaikan hardware, instalasi OS, upgrade RAM/SSD, jaringan LAN, dan printer.",
    type: "profile",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
