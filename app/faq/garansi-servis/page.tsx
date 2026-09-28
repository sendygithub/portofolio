"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  Clock,
  Wrench,
  FileText,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import KiaNavbar from "@/components/kia/Navbar";
import KiaFooter from "@/components/kia/Footer";

export default function GaransiServisPage() {
  return (
    <main className="min-h-screen bg-background text-muted-foreground selection:bg-accent overflow-x-hidden">
      <KiaNavbar />
      {/* Navbar spacer */}
      <div className="h-20 w-full" />

      {/* Back button */}
      <div className="shell pt-8">
        <Link href="/servis#faq">
          <span
            className="link-plain group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke FAQ
          </span>
        </Link>
      </div>

      {/* Hero section */}
      <section className="shell pt-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow-accent">
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5 inline-block" />
            Garansi Servis
          </span>

          <h1 className="display-1 text-foreground mt-6 mb-6">
            Apakah ada garansi
            <br />
            <span className="text-muted-foreground">untuk servis?</span>
          </h1>

          <p className="body-muted text-[15px] max-w-3xl leading-relaxed mb-10">
            Garansi jasa dan spare part sesuai jenis perbaikan yang dilakukan.
            Kami memberikan garansi penuh atas setiap pekerjaan yang kami
            lakukan, baik itu jasa perbaikan maupun penggantian komponen.
          </p>
        </motion.div>

        {/* Detail content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Garansi Jasa */}
          <div className="frame">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-border bg-muted flex items-center justify-center shrink-0">
                <Wrench className="w-7 h-7 text-muted-foreground" />
              </div>
              <div>
                <h2 className="display-3 mb-3">
                  Garansi Jasa Perbaikan
                </h2>
                <p className="body-sm">
                  Setiap servis yang kami lakukan mendapatkan garansi jasa
                  sesuai dengan jenis perbaikan. Jika dalam masa garansi terjadi
                  masalah yang sama, kami akan perbaiki kembali tanpa biaya
                  tambahan. Garansi jasa berlaku untuk:
                </p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Servis laptop & PC (software & hardware)",
                    "Instalasi sistem operasi",
                    "Perbaikan motherboard & komponen",
                    "Setting & konfigurasi jaringan",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="body-sm flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Garansi Spare Part */}
          <div className="frame">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-border bg-muted flex items-center justify-center shrink-0">
                <FileText className="w-7 h-7 text-muted-foreground" />
              </div>
              <div>
                <h2 className="display-3 mb-3">
                  Garansi Spare Part
                </h2>
                <p className="body-sm">
                  Spare part yang diganti di Prisma Komputer mendapatkan garansi
                  dari distributor resmi. Garansi spare part meliputi:
                </p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "SSD / HDD: Garansi 1-3 tahun (tergantung merek)",
                    "RAM: Garansi seumur hidup (lifetime warranty)",
                    "Keyboard laptop: Garansi 3-6 bulan",
                    "Power Supply (PSU): Garansi 1-3 tahun",
                    "LCD & Flexible Cable: Garansi 3 bulan",
                    "Baterai laptop: Garansi 6 bulan",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="body-sm flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Masa Berlaku */}
          <div className="frame">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-border bg-muted flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-muted-foreground" />
              </div>
              <div>
                <h2 className="display-3 mb-3">
                  Masa Berlaku Garansi
                </h2>
                <p className="body-sm">
                  Masa berlaku garansi dimulai sejak barang selesai diperbaiki
                  dan diserahkan kembali kepada pelanggan. Garansi tidak berlaku
                  jika:
                </p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Kerusakan akibat kesalahan penggunaan",
                    "Terkena cairan atau benturan fisik",
                    "Dibongkar oleh pihak ketiga",
                    "Bencana alam (force majeure)",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="body-sm flex items-start gap-2.5"
                    >
                      <span className="w-4 h-4 text-destructive mt-0.5 shrink-0 text-center leading-none">
                        ✕
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="frame mt-12 max-w-2xl"
        >
          <Sparkles className="w-4 h-4 text-primary mb-4" />
          <h3 className="display-2 mb-3">
            Masih punya pertanyaan?
          </h3>
          <p className="body-muted mb-6 max-w-md">
            Hubungi kami langsung via WhatsApp untuk konsultasi gratis seputar
            garansi servis.
          </p>
          <Link
            href="https://wa.me/6281281916880?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20tanya%20soal%20garansi%20servis"
            target="_blank"
          >
            <span className="btn-accent">
              <MessageCircle className="mr-2 w-5 h-5" />
              Tanya via WhatsApp
              <ArrowLeft className="ml-2 w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </section>
      <KiaFooter />
    </main>
  );
}
