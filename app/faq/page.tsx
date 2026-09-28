"use client";

import { motion } from "framer-motion";
import {
  Truck,
  ShieldCheck,
  Lock,
  Clock,
  ArrowRight,
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
    <main className="min-h-screen bg-background text-muted-foreground selection:bg-accent overflow-x-hidden">
      <KiaNavbar />
      <div className="h-20 w-full" />

      <section className="shell pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header max-w-2xl"
        >
          <p className="section-label">FAQ</p>
          <h1 className="section-title">Pertanyaan yang sering diajukan</h1>
          <p className="section-desc">
            Jawaban lengkap seputar layanan servis komputer &amp; laptop Kia
            Komputer Tangerang.
          </p>
        </motion.div>

        <div className="border-t border-border">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={faq.href}
                className="group flex items-start gap-6 border-b border-border py-8 transition-transform duration-300 hover:translate-x-1"
              >
                <span className="numbered-label w-8 shrink-0 text-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-0.5 shrink-0 text-muted-foreground/80 transition-colors duration-300 group-hover:text-primary">
                  {faq.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="display-4 mb-1.5 transition-colors duration-300 group-hover:text-primary">
                    {faq.title}
                  </h2>
                  <p className="body-sm">{faq.desc}</p>
                </div>
                <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-muted-foreground/80 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <KiaFooter />
    </main>
  );
}
