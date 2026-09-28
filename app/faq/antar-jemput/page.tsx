"use client";

import { motion } from "framer-motion";
import {
  Truck,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  MapPin,
  Globe,
  Clock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import KiaNavbar from "@/components/kia/Navbar";
import KiaFooter from "@/components/kia/Footer";

export default function AntarJemputPage() {
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
            <Truck className="w-3.5 h-3.5 mr-1.5 inline-block" />
            Antar Jemput Gratis
          </span>

          <h1 className="display-1 text-foreground mt-6 mb-6">
            Apakah antar jemput
            <br />
            <span className="text-muted-foreground">benar-benar gratis?</span>
          </h1>

          <p className="body-muted text-[15px] max-w-3xl leading-relaxed mb-10">
            Layanan antar jemput tersedia untuk area tertentu tanpa biaya
            tambahan. Kami jemput perangkat Anda, servis, dan antar kembali
            setelah selesai.
          </p>
        </motion.div>

        {/* Detail content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Area coverage */}
          <div className="frame">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-border bg-muted flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-muted-foreground" />
              </div>
              <div>
                <h2 className="display-3 mb-3">
                  Area Layanan Antar Jemput
                </h2>
                <p className="body-sm mb-5">
                  Layanan antar jemput gratis tersedia untuk wilayah Tangerang
                  dan sekitarnya, meliputi:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "Tangerang Kota",
                    "Tangerang Selatan",
                    "Ciputat",
                    "Pamulang",
                    "BSD City",
                    "Serpong",
                    "Ciledug",
                    "Karawaci",
                    "Pinang",
                    "Cimone",
                    "Batuceper",
                    "Periuk",
                  ].map((area, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 border border-border px-4 py-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-[13px] text-muted-foreground">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="frame">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-border bg-muted flex items-center justify-center shrink-0">
                <Globe className="w-7 h-7 text-muted-foreground" />
              </div>
              <div>
                <h2 className="display-3 mb-3">
                  Cara Kerja Antar Jemput
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Hubungi Kami",
                      desc: "WhatsApp atau telepon kami untuk menjadwalkan antar jemput.",
                    },
                    {
                      step: "2",
                      title: "Kami Jemput",
                      desc: "Kurir kami akan datang ke lokasi Anda sesuai jadwal yang disepakati.",
                    },
                    {
                      step: "3",
                      title: "Servis & Perbaikan",
                      desc: "Perangkat Anda akan kami servis dengan profesional.",
                    },
                    {
                      step: "4",
                      title: "Antar Kembali",
                      desc: "Setelah selesai, kami antar kembali perangkat Anda ke tempat Anda.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-border">
                        <span className="numbered-label text-sm">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="display-4">
                          {item.title}
                        </h3>
                        <p className="body-sm mt-1 text-[12px]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="frame">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-border bg-muted flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-muted-foreground" />
              </div>
              <div>
                <h2 className="display-3 mb-3">
                  Ketentuan Layanan
                </h2>
                <ul className="space-y-2.5">
                  {[
                    "Gratis antar jemput untuk area Tangerang dan sekitarnya",
                    "Untuk area luar Tangerang, dikenakan biaya tambahan sesuai jarak",
                    "Penjadwalan antar jemput dilakukan via WhatsApp",
                    "Waktu antar jemput menyesuaikan jadwal kurir",
                    "Perangkat harus sudah siap saat kurir datang",
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
            Mau dijemput?
          </h3>
          <p className="body-muted mb-6 max-w-md">
            Hubungi kami sekarang untuk menjadwalkan antar jemput gratis!
          </p>
          <Link
            href="https://wa.me/6281281916880?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20jadwalkan%20antar%20jemput%20servis"
            target="_blank"
          >
            <span className="btn-accent">
              <MessageCircle className="mr-2 w-5 h-5" />
              Jadwalkan Antar Jemput
              <ArrowLeft className="ml-2 w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </section>
      <KiaFooter />
    </main>
  );
}
