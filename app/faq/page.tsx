"use client";

import { motion } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  Lock,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import KiaNavbar from "@/components/kia/Navbar";
import KiaFooter from "@/components/kia/Footer";

const faqs = [
  {
    icon: <Truck className="w-5 h-5" />,
    title: "Antar Jemput",
    desc: "Apakah antar jemput benar-benar gratis? Cek area layanan dan cara kerjanya.",
    href: "/faq/antar-jemput",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Garansi Servis",
    desc: "Garansi jasa & spare part sesuai jenis perbaikan yang dilakukan.",
    href: "/faq/garansi-servis",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Keamanan Data",
    desc: "Data Anda aman selama proses servis. Privasi pelanggan prioritas kami.",
    href: "/faq/keamanan-data",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Waktu Pengerjaan",
    desc: "Estimasi waktu servis per jenis layanan, lengkap dengan faktor pengaruhnya.",
    href: "/faq/waktu-pengerjaan",
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-black text-[#A8B0BC] selection:bg-[#1C69D4]/20 overflow-x-hidden">
      <KiaNavbar />
      <div className="h-20 w-full" />

      <section className="px-6 pt-16 pb-24 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4]">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 inline-block" />
            FAQ
          </span>
          <h1 className="text-[40px] md:text-[64px] font-bold tracking-[-0.02em] leading-[1.05] text-white mt-6 mb-6">
            Pertanyaan yang
            <br />
            <span className="text-[#A8B0BC]">sering diajukan</span>
          </h1>
          <p className="text-[15px] text-[#A8B0BC] max-w-2xl mx-auto leading-relaxed">
            Jawaban lengkap seputar layanan servis komputer & laptop Kia
            Komputer Tangerang.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={faq.href}
                className="group flex items-start gap-5 border border-white/[0.06] bg-[#141619] p-8 hover:border-[#1C69D4]/30 transition-all duration-500 h-full"
              >
                <div className="w-12 h-12 border border-white/[0.06] bg-white/[0.03] flex items-center justify-center text-[#A8B0BC] group-hover:text-[#1C69D4] group-hover:border-[#1C69D4]/30 transition-colors shrink-0">
                  {faq.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-[17px] font-semibold text-white mb-2 group-hover:text-[#1C69D4] transition-colors">
                    {faq.title}
                  </h2>
                  <p className="text-[13px] text-[#A8B0BC] leading-relaxed">
                    {faq.desc}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#A8B0BC]/50 group-hover:text-[#1C69D4] group-hover:translate-x-1 transition-all mt-1 shrink-0" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <KiaFooter />
    </main>
  );
}
