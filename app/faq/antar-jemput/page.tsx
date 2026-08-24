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
    <main className="min-h-screen bg-black text-[#A8B0BC] selection:bg-[#1C69D4]/20 overflow-x-hidden">
      <KiaNavbar />
      {/* Navbar spacer */}
      <div className="h-20 w-full" />

      {/* Back button */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/servis#faq">
          <span
            className="inline-flex items-center text-[#A8B0BC] hover:text-white hover:bg-white/[0.03] transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke FAQ
          </span>
        </Link>
      </div>

      {/* Hero section */}
      <section className="px-6 pt-12 pb-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4]">
            <Truck className="w-3.5 h-3.5 mr-1.5 inline-block" />
            Antar Jemput Gratis
          </span>

          <h1 className="text-[40px] md:text-[64px] font-bold tracking-[-0.02em] leading-[1.05] text-white mt-6 mb-6">
            Apakah antar jemput
            <br />
            <span className="text-[#A8B0BC]">benar-benar gratis?</span>
          </h1>

          <p className="text-[15px] text-[#A8B0BC] max-w-3xl leading-relaxed mb-10">
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
          <div className="border border-white/[0.06] bg-[#141619] p-8 hover:border-white/[0.12] transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-white/[0.06] bg-white/[0.03] flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-[#A8B0BC]" />
              </div>
              <div>
                <h2 className="text-[17px] font-semibold text-white mb-3">
                  Area Layanan Antar Jemput
                </h2>
                <p className="text-[13px] text-[#A8B0BC] leading-relaxed mb-5">
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
                      className="flex items-center gap-2.5 py-2 px-4 border border-white/[0.06] bg-white/[0.02]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1C69D4] shrink-0" />
                      <span className="text-[13px] text-[#A8B0BC]">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="border border-white/[0.06] bg-[#141619] p-8 hover:border-white/[0.12] transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-white/[0.06] bg-white/[0.03] flex items-center justify-center shrink-0">
                <Globe className="w-7 h-7 text-[#A8B0BC]" />
              </div>
              <div>
                <h2 className="text-[17px] font-semibold text-white mb-3">
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
                      <div className="w-9 h-9 border border-[#1C69D4]/30 bg-[#1C69D4]/10 flex items-center justify-center shrink-0">
                        <span className="text-sm font-semibold text-[#1C69D4]">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-[14px] font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="text-[12px] text-[#A8B0BC] mt-1">
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
          <div className="border border-white/[0.06] bg-[#141619] p-8 hover:border-white/[0.12] transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-white/[0.06] bg-white/[0.03] flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-[#A8B0BC]" />
              </div>
              <div>
                <h2 className="text-[17px] font-semibold text-white mb-3">
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
                      className="flex items-start gap-2.5 text-[13px] text-[#A8B0BC]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1C69D4] mt-0.5 shrink-0" />
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
          className="mt-12 text-center p-10 border border-white/[0.06] bg-[#141619]"
        >
          <Sparkles className="w-8 h-8 text-[#1C69D4] mx-auto mb-4" />
          <h3 className="text-[22px] font-semibold text-white mb-3">
            Mau dijemput?
          </h3>
          <p className="text-[13px] text-[#A8B0BC] mb-6 max-w-md mx-auto">
            Hubungi kami sekarang untuk menjadwalkan antar jemput gratis!
          </p>
          <Link
            href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20jadwalkan%20antar%20jemput%20servis"
            target="_blank"
          >
            <span className="inline-flex items-center justify-center bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90 font-medium px-8 py-6 text-[15px] rounded-lg">
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
