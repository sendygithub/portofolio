"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
  Monitor,
  Cpu,
  HardDrive,
  Wrench,
  ShieldCheck,
  Zap,
  Keyboard,
  ArrowRight,
  MessageCircle,
  Star,
  CheckCircle2,
  Truck,
  Clock,
  Award,
  Smile,
  Download,
  ChevronDown,
  Sparkles,
  Wifi,
  Laptop,
} from "lucide-react";
import Link from "next/link";
import KiaNavbar from "@/components/kia/Navbar";
import KiaFooter from "@/components/kia/Footer";

const services = [
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Rakit PC & Upgrade Hardware",
    desc: "Merakit PC gaming, editing, atau kantor sesuai kebutuhan. Upgrade processor, RAM, VGA, dan komponen lainnya.",
    items: [
      "Rakit PC Gaming/Editing/Kantor",
      "Upgrade Processor & Motherboard",
      "Pasang VGA Card Baru",
      "Upgrade RAM & SSD",
    ],
  },
  {
    icon: <HardDrive className="w-5 h-5" />,
    title: "Pasang SSD & Upgrade Storage",
    desc: "Tingkatkan performa laptop/PC dengan SSD NVMe atau SATA. Boot dalam hitungan detik!",
    items: [
      "Pasang SSD NVMe / SATA",
      "Clone HDD ke SSD",
      "Upgrade Hardisk Eksternal",
      "Raid Storage Configuration",
    ],
  },
  {
    icon: <Monitor className="w-5 h-5" />,
    title: "Instalasi Sistem Operasi",
    desc: "Install Windows 10/11, Linux, atau dual-boot. Bebas dari bug dan siap pakai.",
    items: [
      "Install Windows 10 / 11 Pro",
      "Install Linux (Ubuntu, Mint, dll)",
      "Dual-Boot OS",
      "Aktivasi & Driver Lengkap",
    ],
  },
  {
    icon: <Download className="w-5 h-5" />,
    title: "Instalasi Software & Office",
    desc: "Install Microsoft Office, browser, antivirus, dan software multimedia lainnya.",
    items: [
      "Microsoft Office 2021/365",
      "Chrome, Browser & Multimedia",
      "Adobe & Design Software",
      "Antivirus & Security Tools",
    ],
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Atasi Laptop Lemot & BlueScreen",
    desc: "Laptop lemot, sering nge-freeze, atau BlueScreen? Kami diagnosa dan perbaiki sampai normal.",
    items: [
      "Bersihkan Virus & Malware",
      "Optimasi Startup & Registry",
      "Atasi BlueScreen Error",
      "Bersihkan Debu & Ganti Thermal Paste",
    ],
  },
  {
    icon: <Keyboard className="w-5 h-5" />,
    title: "Ganti Keyboard & RAM Laptop",
    desc: "Keyboard laptop rusak? RAM kurang? Kami ganti dengan komponen original berkualitas.",
    items: [
      "Ganti Keyboard Laptop",
      "Upgrade RAM Laptop (solder/slot)",
      "Ganti LCD & Flexible Cable",
      "Servis Touchpad & Port",
    ],
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Upgrade OS Win10 ke Win11",
    desc: "Naikkan versi Windows 10 ke 11 dengan aman. Data tetap utuh, performa meningkat.",
    items: [
      "Upgrade Win10 ke Win11",
      "Cek Kompatibilitas TPM 2.0",
      "Migrasi Data & Setting",
      "Optimasi Pasca Upgrade",
    ],
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Ganti PSU & Casing",
    desc: "PSU rusak atau kurang daya? Ganti casing biar lebih adem dan keren.",
    items: [
      "Ganti Power Supply (PSU)",
      "Ganti Casing PC",
      "Rapihkan Cable Management",
      "Tambahan Fan & RGB",
    ],
  },
];

const whyUs = [
  {
    icon: <Truck className="w-5 h-5" />,
    title: "Antar Jemput Tangerang",
    desc: "Wilayah Tangerang dan sekitarnya. Kami jemput, servis, dan antar kembali. Gratis biaya antar!",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Cepat & Tepat Waktu",
    desc: "Pengerjaan cepat tanpa mengorbankan kualitas. Hasil rapi, terjamin, dan sesuai janji.",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Berpengalaman",
    desc: "Sudah menangani berbagai kasus dari PC kantor, gaming, hingga laptop lawas. Ribuan jam terbang!",
  },
  {
    icon: <Smile className="w-5 h-5" />,
    title: "Harga Bersahabat",
    desc: "Biaya servis transparan, tanpa biaya tersembunyi. Konsultasi GRATIS! Bayar setelah beres.",
  },
];

const testimonials = [
  {
    name: "Rudi Hartono",
    role: "Mahasiswa",
    text: "Laptop saya yang lemot parah sekarang jadi ngebut lagi. Udah kayak baru! Makasih banget servisnya.",
    rating: 5,
    initials: "RH",
  },
  {
    name: "Siti Nurhaliza",
    role: "Karyawan Swasta",
    text: "Keyboard laptop saya rusak kena tumpahan kopi. Diganti baru, sekarang berfungsi normal lagi. Recommended!",
    rating: 5,
    initials: "SN",
  },
  {
    name: "Bambang Suprapto",
    role: "Owner Warnet",
    text: "Langganan rakit PC untuk warnet. Cepat, rapi, dan harganya pas. Sangat profesional. Langganan terus!",
    rating: 5,
    initials: "BS",
  },
];

const faqs = [
  {
    q: "Apakah ada garansi untuk servis?",
    a: "Garansi jasa dan spare part sesuai jenis perbaikan yang dilakukan.",
    href: "/faq/garansi-servis",
  },
  {
    q: "Berapa lama waktu pengerjaan?",
    a: "Estimasi pengerjaan tergantung jenis kerusakan dan ketersediaan spare part.",
    href: "/faq/waktu-pengerjaan",
  },
  {
    q: "Apakah antar jemput benar-benar gratis?",
    a: "Layanan antar jemput tersedia untuk area tertentu tanpa biaya tambahan.",
    href: "/faq/antar-jemput",
  },
  {
    q: "Data saya aman tidak?",
    a: "Kami menjaga keamanan data pelanggan selama proses servis berlangsung.",
    href: "/faq/keamanan-data",
  },
];

export default function ServisPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-black text-[#A8B0BC] selection:bg-[#1C69D4]/20 overflow-x-hidden">
      {/* ===== NAVBAR ===== */}
      <KiaNavbar />

      {/* NAVBAR SPACER */}
      <div className="h-20 w-full" />

      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative px-6 pt-16 pb-20 text-center overflow-hidden"
      >
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
              Servis Komputer & Laptop Tangerang
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[40px] md:text-[80px] font-bold tracking-[-0.02em] leading-[1.05] mt-6 mb-6"
          >
            <span className="text-white">Prisma Komputer</span>
            <br />
            <span className="text-[#A8B0BC]">
              Servis & Perbaikan Profesional
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[15px] text-[#A8B0BC] max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Melayani servis komputer dan laptop di wilayah Tangerang. Dari rakit
            PC, upgrade hardware, instalasi software, hingga perbaikan
            BlueScreen dan laptop lemot.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-5 justify-center items-center"
          >
            <Link
              href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20servis%20komputer%2Flaptop"
              target="_blank"
            >
              <span className="inline-flex items-center justify-center bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90 font-medium px-10 py-6 text-[15px] rounded-lg">
                <MessageCircle className="mr-2 w-5 h-5" />
                Hubungi WhatsApp
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>

            <Link href="#services">
              <span className="inline-flex items-center justify-center border border-white/[0.12] text-[#A8B0BC] hover:text-white hover:border-white/[0.25] px-10 py-6 text-[15px] rounded-lg">
                Lihat Layanan
                <ChevronDown className="ml-2 w-4 h-4" />
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {[
              "Antar Jemput",
              "Bergaransi",
              "Berpengalaman",
              "Harga Terjangkau",
            ].map((tag, i) => (
              <span
                key={i}
                className="text-[13px] text-[#A8B0BC]/50 font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ===== DOCUMENTATION GALLERY ===== */}
      <section id="dokumentasi" className="border-y border-white/[0.06] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
              Dokumentasi
            </span>
            <h2 className="text-[38px] md:text-[48px] font-bold tracking-[-0.02em] text-white mt-3 mb-4">
              Hasil pekerjaan kami
            </h2>
            <p className="text-[15px] text-[#A8B0BC] max-w-2xl mx-auto leading-relaxed">
              Beberapa dokumentasi saat melakukan servis laptop, upgrade
              hardware, perakitan PC, instalasi sistem operasi, dan maintenance
              komputer.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                src: "/servis/servis 1.jpeg",
                label: "Perbaikan Hardware",
                category: "perbaikan-hardware",
              },
              {
                src: "/servis/servis 2.jpeg",
                label: "Instalasi Software",
                category: "instalasi-software",
              },
              {
                src: "/servis/servis 3.jpeg",
                label: "Fix Problem Sistem BlueScreen",
                category: "fix-bluescreen",
              },
              {
                src: "/servis/servis 4.jpeg",
                label: "Upgrade Komponen",
                category: "upgrade-komponen",
              },
              {
                src: "/servis/servis 5.jpeg",
                label: "Perbaikan Laptop",
                category: "perbaikan-laptop",
              },
              {
                src: "/servis/servis 6.jpeg",
                label: "Lihat Semua Dokumentasi",
                category: "all",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={`/servis/gallery${item.category !== "all" ? `?category=${item.category}` : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative overflow-hidden border border-white/[0.06] aspect-[4/3] cursor-pointer"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                  <div className="absolute bottom-5 left-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                    <p className="text-white font-semibold text-[14px]">
                      {item.label}
                    </p>
                    <p className="text-[12px] text-[#A8B0BC]">
                      Klik untuk melihat
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LAYANAN KAMI ===== */}
      <section id="services" className="px-6 py-28 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
              Layanan Kami
            </span>
            <h2 className="text-[38px] md:text-[48px] font-bold tracking-[-0.02em] text-white mt-3 mb-4">
              Solusi Lengkap
            </h2>
            <p className="text-[15px] text-[#A8B0BC] max-w-lg mx-auto">
              Dari perbaikan ringan hingga rakit PC high-end, semua kami tangani
              dengan profesional dan penuh dedikasi.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={itemVariants}>
              <div className="group bg-[#141619] border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 h-full rounded-xl">
                <div className="p-8">
                  <div className="w-12 h-12 flex items-center justify-center mb-6 text-[#A8B0BC] group-hover:text-[#1C69D4] transition-colors duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-[17px] font-semibold text-white mb-3 group-hover:text-[#1C69D4] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-[#A8B0BC] leading-relaxed mb-5">
                    {service.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {service.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-[12px] text-[#A8B0BC]/70"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#1C69D4] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== KENAPA PILIH KAMI ===== */}
      <section
        id="keunggulan"
        className="px-6 py-28 border-y border-white/[0.06]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
                Keunggulan
              </span>
              <h2 className="text-[38px] md:text-[48px] font-bold tracking-[-0.02em] text-white mt-3 mb-4">
                Kenapa Pilih Kami?
              </h2>
              <p className="text-[15px] text-[#A8B0BC] max-w-lg mx-auto">
                Kami tidak hanya servis, tapi memberikan solusi terbaik untuk
                perangkat Anda.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-[#141619] border border-white/[0.06] p-8 text-center hover:border-white/[0.12] transition-all duration-500 h-full">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-6 text-[#A8B0BC] group-hover:text-[#1C69D4] transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-[16px] font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#A8B0BC] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimoni" className="px-6 py-28 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
              Testimoni
            </span>
            <h2 className="text-[38px] md:text-[48px] font-bold tracking-[-0.02em] text-white mt-3 mb-4">
              Apa Kata Pelanggan?
            </h2>
            <p className="text-[15px] text-[#A8B0BC] max-w-lg mx-auto">
              Kepercayaan pelanggan adalah prioritas utama kami.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#141619] border border-white/[0.06] p-8 hover:border-white/[0.12] transition-all duration-500 relative group"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testi.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-[#1C69D4] text-[#1C69D4]"
                  />
                ))}
              </div>
              <p className="text-[14px] text-[#A8B0BC] leading-relaxed mb-6 italic">
                &ldquo;{testi.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div className="w-10 h-10 bg-[#1C69D4] flex items-center justify-center text-[12px] font-semibold text-white">
                  {testi.initials}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-white">
                    {testi.name}
                  </p>
                  <p className="text-[11px] text-[#A8B0BC]/50 font-medium uppercase tracking-[0.1em]">
                    {testi.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="px-6 py-28 border-y border-white/[0.06]">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
              FAQ
            </span>
            <h2 className="text-[38px] md:text-[48px] font-bold tracking-[-0.02em] text-white mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[15px] text-[#A8B0BC] max-w-lg mx-auto">
              Kami memberikan penjelasan lengkap untuk pertanyaan yang sering
              diajukan.
            </p>
          </motion.div>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={faq.href}
                className="group flex items-center justify-between border border-white/[0.06] bg-[#141619] p-6 transition-all duration-300 hover:border-white/[0.12]"
              >
                <div className="pr-6">
                  <h3 className="text-[15px] font-semibold text-white transition-colors group-hover:text-[#1C69D4]">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#A8B0BC]">
                    {faq.a}
                  </p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/[0.06] bg-white/[0.03] transition-all duration-300 group-hover:border-[#1C69D4]/30 group-hover:bg-[#1C69D4]/10">
                  <ArrowRight className="h-4 w-4 text-[#A8B0BC] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#1C69D4]" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section id="konsultasi" className="px-6 py-32 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
            Gratis Konsultasi
          </span>
          <h2 className="text-[38px] md:text-[48px] font-bold tracking-[-0.02em] text-white mt-4 mb-4">
            Siap Servis Komputer?
          </h2>
          <p className="text-[15px] text-[#A8B0BC] max-w-xl mx-auto mb-10 leading-relaxed">
            Konsultasi dulu aja gratis! Ceritakan masalah perangkat Anda, kami
            akan kasih solusi terbaik.
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <Link
              href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20konsultasi%20servis"
              target="_blank"
            >
              <span className="inline-flex items-center justify-center bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90 font-medium px-12 py-7 text-[15px] rounded-lg">
                <MessageCircle className="mr-3 w-5 h-5" />
                Klik Disini WhatsApp
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
            <p className="text-[#A8B0BC]/50 text-[13px] font-medium">
              atau hubungi{" "}
              <span className="text-white font-medium">0812-3344-5566</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <KiaFooter />
    </main>
  );
}
