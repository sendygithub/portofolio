"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, ExternalLink, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  EMAIL,
  GELAR,
  LOKASI,
  NAMA,
  POSISI_DICARI,
  tautanSosial,
} from "../lib/portfolio";

const ikonSosial: Record<string, LucideIcon> = {
  GitHub: Globe,
  LinkedIn: ExternalLink,
  Email: Mail,
};

export function Footer() {
  const tautanCepat = [
    { name: "Layanan Servis", href: "/servis" },
    { name: "Daftar Harga", href: "/harga" },
    { name: "Proyek", href: "/#projects" },
    { name: "Keahlian", href: "/#skills" },
    { name: "Pengalaman", href: "/#experience" },
    { name: "Kontak", href: "/#contact" },
  ];

  const keahlianUtama = [
    "Servis komputer & laptop",
    "Instalasi Windows & Linux",
    "Upgrade RAM & SSD",
    "Perbaikan laptop (LCD, keyboard, engsel)",
    "Jaringan LAN & printer",
    "Dukungan pengguna",
  ];

  return (
    <footer className="border-t border-border bg-muted">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-border" />

      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl  font-bold mb-4 text-foreground">
              {NAMA}
              <span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed font-body text-sm">
              {GELAR} — IT Support dan servis komputer/laptop sejak 2013 di
              Tangerang. 13 tahun bekerja sistem shift di lini produksi.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                <span className="text-primary">◈</span>
                <span>{LOKASI}</span>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-muted-foreground font-body text-sm hover:text-primary transition-colors"
              >
                <span className="text-primary">✉</span>
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Tautan */}
          <div>
            <h4 className="text-lg  font-bold mb-6 text-foreground">
              Halaman
            </h4>
            <ul className="space-y-3">
              {tautanCepat.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 font-body text-sm"
                  >
                    <span className="text-primary">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Keahlian */}
          <div>
            <h4 className="text-lg  font-bold mb-6 text-foreground">
              Yang dikerjakan
            </h4>
            <ul className="space-y-3">
              {keahlianUtama.map((item) => (
                <li
                  key={item}
                  className="text-muted-foreground font-body text-sm flex items-start gap-2"
                >
                  <span className="text-primary">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sosial */}
          <div>
            <h4 className="text-lg  font-bold mb-6 text-foreground">
              Tautan
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {tautanSosial.map((sosial) => {
                const Icon = ikonSosial[sosial.nama] ?? Mail;
                return (
                  <motion.a
                    key={sosial.nama}
                    href={sosial.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-accent transition-all duration-300"
                    aria-label={sosial.nama}
                  >
                    <Icon
                      className="text-muted-foreground"
                      size={18}
                    />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-muted-foreground/80 font-body text-sm leading-relaxed">
              Terbuka untuk posisi {POSISI_DICARI}.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground/80 font-body">
            &copy; {new Date().getFullYear()} {NAMA}. Dibangun dengan Next.js
            dan Tailwind CSS.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-border" />
    </footer>
  );
}

export default Footer;