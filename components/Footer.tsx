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
    <footer className="relative border-t border-secondary/10 bg-neutral">
      <div className="absolute top-0 left-0 right-0 h-px bg-tertiary/30" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-display font-bold mb-4 text-primary">
              {NAMA}
              <span className="text-tertiary">.</span>
            </h3>
            <p className="text-primary/70 mb-6 leading-relaxed font-body text-sm">
              {GELAR} — IT Support dan servis komputer/laptop sejak 2013 di
              Tangerang. 13 tahun bekerja sistem shift di lini produksi.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-primary/80 font-body text-sm">
                <span className="text-tertiary">◈</span>
                <span>{LOKASI}</span>
              </div>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-primary/80 font-body text-sm hover:text-tertiary transition-colors"
              >
                <span className="text-tertiary">✉</span>
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Tautan */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-primary">
              Halaman
            </h4>
            <ul className="space-y-3">
              {tautanCepat.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary/70 hover:text-tertiary transition-colors flex items-center gap-2 font-body text-sm"
                  >
                    <span className="text-tertiary">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Keahlian */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-primary">
              Yang dikerjakan
            </h4>
            <ul className="space-y-3">
              {keahlianUtama.map((item) => (
                <li
                  key={item}
                  className="text-primary/70 font-body text-sm flex items-start gap-2"
                >
                  <span className="text-tertiary">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sosial */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-primary">
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
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-surface border border-secondary/20 rounded-sm flex items-center justify-center hover:bg-tertiary hover:border-tertiary transition-all duration-300"
                    aria-label={sosial.nama}
                  >
                    <Icon
                      className="text-secondary"
                      size={18}
                    />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-secondary font-body text-sm leading-relaxed">
              Terbuka untuk posisi {POSISI_DICARI}.
            </p>
          </div>
        </div>

        <div className="border-t border-secondary/10 pt-6">
          <p className="text-sm text-secondary font-body">
            &copy; {new Date().getFullYear()} {NAMA}. Dibangun dengan Next.js
            dan Tailwind CSS.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-tertiary/20" />
    </footer>
  );
}

export default Footer;
