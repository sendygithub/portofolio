"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  Lock,
  Eye,
  FileWarning,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import KiaNavbar from "@/components/kia/Navbar";
import KiaFooter from "@/components/kia/Footer";

export default function KeamananDataPage() {
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
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5 inline-block" />
            Keamanan Data
          </span>

          <h1 className="text-[40px] md:text-[64px] font-bold tracking-[-0.02em] leading-[1.05] text-white mt-6 mb-6">
            Data saya
            <br />
            <span className="text-[#A8B0BC]">aman tidak?</span>
          </h1>

          <p className="text-[15px] text-[#A8B0BC] max-w-3xl leading-relaxed mb-10">
            Kami menjaga keamanan data pelanggan selama proses servis
            berlangsung. Privasi Anda adalah prioritas utama kami.
          </p>
        </motion.div>

        {/* Detail content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Komitmen keamanan */}
          <div className="border border-white/[0.06] bg-[#141619] p-8 hover:border-white/[0.12] transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-white/[0.06] bg-white/[0.03] flex items-center justify-center shrink-0">
                <Lock className="w-7 h-7 text-[#A8B0BC]" />
              </div>
              <div>
                <h2 className="text-[17px] font-semibold text-white mb-3">
                  Komitmen Keamanan Data
                </h2>
                <p className="text-[13px] text-[#A8B0BC] leading-relaxed mb-4">
                  Kami memahami bahwa perangkat Anda menyimpan data-data penting
                  dan pribadi. Oleh karena itu, kami menerapkan standar keamanan
                  yang ketat:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Data Anda tidak akan kami akses, salin, atau sebarkan",
                    "Kami tidak bertanggung jawab atas data yang tidak di-backup",
                    "Disarankan untuk backup data penting sebelum servis",
                    "Teknisi kami profesional dan terikat kode etik",
                    "Area kerja teknisi diawasi CCTV untuk keamanan",
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

          {/* Saran backup */}
          <div className="border border-white/[0.06] bg-[#141619] p-8 hover:border-white/[0.12] transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-white/[0.06] bg-white/[0.03] flex items-center justify-center shrink-0">
                <FileWarning className="w-7 h-7 text-[#A8B0BC]" />
              </div>
              <div>
                <h2 className="text-[17px] font-semibold text-white mb-3">
                  Saran Sebelum Servis
                </h2>
                <p className="text-[13px] text-[#A8B0BC] leading-relaxed mb-4">
                  Untuk keamanan data Anda, kami sangat menyarankan:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Backup data penting ke hardisk eksternal atau cloud",
                    "Hapus data sensitif jika tidak diperlukan",
                    "Logout dari akun-akun penting (email, sosial media, banking)",
                    "Catat password yang mungkin diperlukan untuk testing",
                    "Untuk servis berat, lepaskan hardisk jika data sangat rahasia",
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

          {/* Kebijakan privasi */}
          <div className="border border-white/[0.06] bg-[#141619] p-8 hover:border-white/[0.12] transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 border border-white/[0.06] bg-white/[0.03] flex items-center justify-center shrink-0">
                <Eye className="w-7 h-7 text-[#A8B0BC]" />
              </div>
              <div>
                <h2 className="text-[17px] font-semibold text-white mb-3">
                  Kebijakan Privasi
                </h2>
                <p className="text-[13px] text-[#A8B0BC] leading-relaxed">
                  Prisma Komputer berkomitmen untuk melindungi privasi setiap
                  pelanggan. Kami tidak akan pernah meminta password akun
                  pribadi Anda (email, sosial media, banking, dll) tanpa alasan
                  teknis yang jelas. Jika ada kebutuhan teknis yang mengharuskan
                  akses ke akun tertentu, kami akan meminta izin tertulis
                  terlebih dahulu. Setelah servis selesai, kami merekomendasikan
                  Anda untuk mengganti password akun-akun penting sebagai
                  langkah keamanan tambahan.
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
            Ada kekhawatiran soal data?
          </h3>
          <p className="text-[13px] text-[#A8B0BC] mb-6 max-w-md mx-auto">
            Tanyakan langsung via WhatsApp. Kami akan jelaskan bagaimana kami
            menjaga keamanan data Anda.
          </p>
          <Link
            href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20tanya%20soal%20keamanan%20data%20saat%20servis"
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
