"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Code2,
  MessageCircle,
  ArrowRight,
  Laptop,
  BrainCircuit,
  Globe,
} from "lucide-react";
import Link from "next/link";
import KiaNavbar from "@/components/kia/Navbar";
import KiaFooter from "@/components/kia/Footer";

const WA = "https://wa.me/6281281916880";

const WA_SKRIPSI = `${WA}?text=${encodeURIComponent(
  "Halo Kia Komputer, saya mau konsultasi pendampingan skripsi"
)}`;
const WA_KONSULTASI = `${WA}?text=${encodeURIComponent(
  "Halo Kia Komputer, saya mau konsultasi gratis"
)}`;

export default function KiaraKomputerPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const stackItems = [
    { name: "Next.js", icon: <Globe className="w-14 h-14 text-muted-foreground" /> },
    { name: "TypeScript", icon: <Code2 className="w-14 h-14 text-muted-foreground" /> },
    { name: "Laravel", icon: <Laptop className="w-14 h-14 text-muted-foreground" /> },
    { name: "AI/ML", icon: <BrainCircuit className="w-14 h-14 text-muted-foreground" /> },
    { name: "Supabase", icon: <Rocket className="w-14 h-14 text-muted-foreground" /> },
    { name: "Tailwind", icon: <Code2 className="w-14 h-14 text-muted-foreground" /> },
  ];

  return (
    <main className="min-h-screen bg-background text-muted-foreground selection:bg-accent overflow-x-hidden">
      <KiaNavbar />

      {/* ═══════════ HERO ═══════════ */}
      <section id="top" className="shell pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="eyebrow-accent mb-8">
            Konsultasi skripsi • Pengembangan aplikasi • Servis komputer
          </p>

          <h1 className="display-1 mb-8">
            Kia Komputer
            <br />
            <span className="text-muted-foreground">
              Partner Skripsi &amp; IT Support
            </span>
          </h1>

          <p className="body-muted max-w-2xl mb-12 text-[15px] leading-relaxed">
            Kami membantu mahasiswa mengembangkan aplikasi skripsi, memperbaiki
            bug, menyusun dokumentasi, hingga persiapan sidang. Selain itu
            tersedia layanan servis komputer dan laptop untuk kebutuhan harian
            maupun pekerjaan.
          </p>

          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <motion.a
              whileHover={{ x: 4 }}
              href={WA_SKRIPSI}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              Pendampingan Skripsi
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <Link href="/servis" className="btn-outline">
              Servis Komputer &amp; Laptop
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ═══════════ TECH STACK ═══════════ */}
      <section className="border-y border-border py-10">
        <div className="shell">
          <p className="eyebrow mb-6">Teknologi yang kami gunakan</p>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {stackItems.map((stack, index) => (
              <li
                key={stack.name}
                className="flex items-center gap-3  text-[12px] uppercase tracking-wider text-muted-foreground"
              >
                {index > 0 && (
                  <span className="text-muted-foreground/50">/</span>
                )}
                {stack.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══════════ LAYANAN ═══════════ */}
      <section id="layanan" className="shell py-28 scroll-mt-24">
        <div className="section-header">
          <p className="section-label">01 — Layanan</p>
          <h2 className="section-title">Layanan yang tersedia</h2>
          <p className="section-desc">
            Mulai dari konsultasi, pengembangan aplikasi, hingga penyelesaian
            revisi.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-x-10 gap-y-12"
        >
          {[
            {
              title: "Custom Application",
              icon: <Code2 className="w-4 h-4" />,
              desc: "Pembuatan sistem informasi kustom dengan clean architecture & siap uji.",
            },
            {
              title: "Full Chapter (Bab 1-5)",
              icon: <Rocket className="w-4 h-4" />,
              desc: "Lengkap dengan dokumen teknis, perancangan sistem, dan mentoring bimbingan.",
            },
            {
              title: "Mentoring & Debug",
              icon: <MessageCircle className="w-4 h-4" />,
              desc: "Optimasi kode yang sudah ada, perbaikan bug, dan penjelasan logika sistem.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group border-t border-border pt-6"
            >
              <div className="flex items-center justify-between">
                <p className="numbered-label text-lg">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <span className="text-muted-foreground/80 group-hover:text-primary transition-colors duration-300">
                  {item.icon}
                </span>
              </div>
              <h3 className="mt-4 mb-3  text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="body-muted mb-4 text-sm leading-relaxed">
                {item.desc}
              </p>
              <Link
                href="/showroom"
                className="link-arrow text-[13px]"
              >
                Explore <ArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══════════ PORTOFOLIO ═══════════ */}
      <section id="portofolio" className="border-y border-border py-28 scroll-mt-24">
        <div className="shell">
          <div className="section-header flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">02 — Portfolio</p>
              <h2 className="section-title">
                Beberapa project yang pernah dikerjakan
              </h2>
              <p className="section-desc">
                Beberapa sistem yang telah sukses dipresentasikan.
              </p>
            </div>
            <Link href="/showroom" className="link-arrow shrink-0">
              Lihat Semua Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
            {[
              {
                label: "AI System",
                title: "SPK Pemilihan Karyawan",
                desc: "Metode AHP & TOPSIS dengan dashboard analitik modern.",
                tags: ["Next.js", "PostgreSQL"],
              },
              {
                label: "Mobile App",
                title: "Sistem Inventori Lab",
                desc: "Tracking aset real-time menggunakan integrasi QR Code.",
                tags: ["React Native", "Node.js"],
              },
            ].map((project, i) => (
              <article key={project.title} className="row-item group">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="numbered-label text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="eyebrow">{project.label}</p>
                </div>
                <h3 className="mt-4 mb-3  text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="body-muted mb-6 text-sm leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CALL TO ACTION ═══════════ */}
      <section className="shell py-28">
        <div className="frame max-w-3xl">
          <p className="eyebrow-accent mb-4">Gratis Konsultasi</p>
          <h2 className="display-2 mb-4">
            Punya project yang ingin didiskusikan?
          </h2>
          <p className="body-muted mb-10 max-w-lg leading-relaxed">
            Hubungi kami untuk konsultasi skripsi, pengembangan aplikasi, atau
            servis komputer. Respon cepat melalui WhatsApp.
          </p>
          <motion.a
            whileHover={{ x: 4 }}
            href={WA_KONSULTASI}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            <MessageCircle className="w-4 h-4" /> Hubungi WhatsApp
          </motion.a>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <KiaFooter />
    </main>
  );
}
