"use client";

import { motion } from "framer-motion";
import {
  Clock,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  Zap,
  CalendarCheck,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import KiaNavbar from "@/components/kia/Navbar";
import KiaFooter from "@/components/kia/Footer";

export default function WaktuPengerjaanPage() {
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
            <Clock className="w-3.5 h-3.5 mr-1.5 inline-block" />
            Waktu Pengerjaan
          </span>

          <h1 className="text-[40px] md:text-[64px] font-bold tracking-[-0.02em] leading-[1.05] text-white mt-6 mb-6">
            Berapa lama waktu
            <br />
            <span className="text-[#A8B0BC]">pengerjaan servis?</span>
          </h1>

          <p className="text-[15px] text-[#A8B0BC] max-w-3xl leading-relaxed mb-10">
            Estimasi pengerjaan tergantung jenis kerusakan dan ketersediaan
            spare part. Kami selalu berusaha menyelesaikan servis secepat
            mungkin tanpa mengorbankan kualitas.
          </p>
        </motion.div>

        {/* Detail content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Estimasi per jenis servis */}
          <div className="border border-white/[0.06] bg-[#141619] p-8 hover:border-white/[0.12] transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-white/[0.06] bg-white/[0.03] flex items-center justify-center shrink-0">
                <Zap className="w-7 h-7 text-[#A8B0BC]" />
              </div>
              <div>
                <h2 className="text-[17px] font-semibold text-white mb-3">
                  Estimasi Waktu Servis
                </h2>
                <p className="text-[13px] text-[#A8B0BC] leading-relaxed mb-5">
                  Berikut adalah estimasi waktu pengerjaan untuk masing-masing
                  jenis layanan:
                </p>
                <div className="space-y-2">
                  {[
                    {
                      service: "Instalasi OS (Windows/Linux)",
                      time: "1 - 3 Jam",
                    },
                    {
                      service: "Instalasi Software & Office",
                      time: "1 - 2 Jam",
                    },
                    {
                      service: "Upgrade RAM / SSD",
                      time: "30 Menit - 1 Jam",
                    },
                    {
                      service: "Ganti Keyboard Laptop",
                      time: "1 - 2 Jam",
                    },
                    {
                      service: "Bersihkan Debu & Ganti Thermal Paste",
                      time: "1 - 2 Jam",
                    },
                    {
                      service: "Rakit PC Baru",
                      time: "2 - 4 Jam",
                    },
                    {
                      service: "Servis BlueScreen / Lemot",
                      time: "1 - 2 Hari (diagnosa + perbaikan)",
                    },
                    {
                      service: "Ganti LCD Laptop",
                      time: "1 - 2 Hari (tergantung ketersediaan spare part)",
                    },
                    {
                      service: "Perbaikan Motherboard",
                      time: "2 - 5 Hari",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 px-4 border border-white/[0.06] bg-white/[0.02]"
                    >
                      <span className="text-[13px] text-[#A8B0BC]">
                        {item.service}
                      </span>
                      <span className="text-[13px] font-semibold text-[#1C69D4] shrink-0 ml-4">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Faktor yang mempengaruhi */}
          <div className="border border-white/[0.06] bg-[#141619] p-8 hover:border-white/[0.12] transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-white/[0.06] bg-white/[0.03] flex items-center justify-center shrink-0">
                <AlertCircle className="w-7 h-7 text-[#A8B0BC]" />
              </div>
              <div>
                <h2 className="text-[17px] font-semibold text-white mb-3">
                  Faktor yang Mempengaruhi Waktu Pengerjaan
                </h2>
                <p className="text-[13px] text-[#A8B0BC] leading-relaxed mb-4">
                  Beberapa hal yang dapat mempengaruhi lama waktu pengerjaan
                  servis:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Ketersediaan spare part di distributor",
                    "Tingkat kerusakan (ringan / berat)",
                    "Antrian servis yang sedang berlangsung",
                    "Kompleksitas perbaikan (misal: motherboard rusak)",
                    "Perlunya waktu testing & quality control",
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

          {/* Prioritas */}
          <div className="border border-white/[0.06] bg-[#141619] p-8 hover:border-white/[0.12] transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-white/[0.06] bg-white/[0.03] flex items-center justify-center shrink-0">
                <CalendarCheck className="w-7 h-7 text-[#A8B0BC]" />
              </div>
              <div>
                <h2 className="text-[17px] font-semibold text-white mb-3">
                  Layanan Prioritas
                </h2>
                <p className="text-[13px] text-[#A8B0BC] leading-relaxed">
                  Untuk kebutuhan yang mendesak, kami menyediakan layanan
                  prioritas dengan waktu pengerjaan lebih cepat. Silakan hubungi
                  kami untuk informasi lebih lanjut mengenai biaya dan
                  ketersediaan layanan prioritas.
                </p>
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
            Ingin servis secepatnya?
          </h3>
          <p className="text-[13px] text-[#A8B0BC] mb-6 max-w-md mx-auto">
            Konsultasi dulu gratis! Ceritakan masalah perangkat Anda dan kami
            akan berikan estimasi waktu yang akurat.
          </p>
          <Link
            href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20tanya%20estimasi%20waktu%20pengerjaan%20servis"
            target="_blank"
          >
            <span className="inline-flex items-center justify-center bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90 font-medium px-8 py-6 text-[15px] rounded-lg">
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
