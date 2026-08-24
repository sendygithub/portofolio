"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ChevronRight,
  MessageCircle,
  ArrowRight,
  Globe,
  Monitor,
  Smartphone,
  Palette,
  Zap,
  Shield,
  BarChart3,
  Layers,
  ExternalLink,
  Star,
  Clock3,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import KiaNavbar from "@/components/kia/Navbar";
import KiaFooter from "@/components/kia/Footer";

// Helper untuk mengambil URL Logo Tech Stack
const getTechIcon = (tech: string) => {
  const icons: { [key: string]: string } = {
    "Next.js": "https://svgl.app/library/nextjs_icon_dark.svg",
    Laravel: "https://svgl.app/library/laravel.svg",
    TypeScript: "https://svgl.app/library/typescript.svg",
    Python: "https://svgl.app/library/python.svg",
    React: "https://svgl.app/library/react.svg",
    MySQL: "https://svgl.app/library/mysql.svg",
    PostgreSQL: "https://svgl.app/library/postgresql.svg",
    Tailwind: "https://svgl.app/library/tailwindcss.svg",
    Prisma: "https://svgl.app/library/prisma.svg",
    Supabase: "https://svgl.app/library/supabase.svg",
    Firebase: "https://svgl.app/library/firebase.svg",
    "Node.js": "https://svgl.app/library/nodejs.svg",
    PHP: "https://svgl.app/library/php.svg",
    IoT: "https://img.icons8.com/fluency/48/internet-of-things.png",
    Bootstrap: "https://svgl.app/library/bootstrap.svg",
    MongoDB: "https://svgl.app/library/mongodb-icon.svg",
    Midtrans: "https://img.icons8.com/color/48/midtrans.png",
  };
  return icons[tech] || "https://svgl.app/library/code.svg";
};

// ===== REAL PROJECTS =====
const realProjects = [
  {
    id: "andreansah",
    title: "Andreansah — Portfolio",
    desc: "Portfolio pribadi dengan desain modern, menampilkan project, skill, dan perjalanan karier.",
    url: "https://andreansah.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "Portfolio",
    features: ["Responsive Design", "Dark Mode", "Animasi Smooth"],
  },
  {
    id: "bintang-audio",
    title: "Bintang Audio — Rental Sound System",
    desc: "Platform rental sound system profesional dengan katalog alat, harga, dan pemesanan online.",
    url: "https://bintang-audio.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "Rental",
    features: ["Katalog Produk", "Sistem Booking", "Admin Dashboard"],
  },
  {
    id: "oday-aquatic",
    title: "Oday Aquatic — Toko Ikan Hias",
    desc: "Toko online ikan hias dan perlengkapan akuarium dengan sistem belanja modern.",
    url: "https://sky-fish.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "E-Commerce",
    features: ["Katalog Produk", "Keranjang Belanja", "Pembayaran Online"],
  },
  {
    id: "rkk-petshop",
    title: "RKK Petshop — Toko Hewan Peliharaan",
    desc: "Toko online perlengkapan hewan peliharaan dengan layanan grooming dan penjualan hewan.",
    url: "https://rkk-petshop.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "E-Commerce",
    features: ["Katalog Produk", "Layanan Grooming", "Reservasi Online"],
  },
  {
    id: "rpsncsubang",
    title: "RPSNC Subang — Portal Berita",
    desc: "Portal berita dan informasi RPSNC Subang dengan sistem manajemen konten modern.",
    url: "https://rpsncsubang.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "Portal Berita",
    features: ["Manajemen Berita", "Multi Halaman", "Responsive Design"],
  },
  {
    id: "Undangan-Ulang-Tahun",
    title: "Undangan Ulang Tahun",
    desc: "Aplikasi undangan ulang tahun digital.",
    url: "https://prisma-komputer.vercel.app/ulangtahun/nama-tamu",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "Undangan",
    features: ["Desain Menarik", "Customizable", "Responsive Design"],
  },
];

// ===== DUMMY PROJECTS =====
const dummyProjects = [
  {
    id: 6,
    slug: "absensi-guru",
    title: "Absensi Guru",
    desc: "Sistem absensi guru berbasis web.",
    stack: ["Laravel", "MySQL"],
    category: "Absensi",
  },
  {
    id: 7,
    slug: "absensi-karyawan-gps-barcode",
    title: "Absensi Karyawan GPS Barcode",
    desc: "Sistem absensi karyawan dengan GPS dan barcode.",
    stack: ["Next.js", "PostgreSQL"],
    category: "Absensi",
  },
  {
    id: 8,
    slug: "absensi-kelas-sederhana",
    title: "Absensi Kelas Sederhana",
    desc: "Aplikasi absensi kelas sederhana.",
    stack: ["Laravel", "MySQL"],
    category: "Sekolah",
  },
  {
    id: 9,
    slug: "aplikasi-absensi-karyawan",
    title: "Aplikasi Absensi Karyawan",
    desc: "Manajemen absensi pegawai perusahaan.",
    stack: ["PHP", "MySQL"],
    category: "Absensi",
  },
  {
    id: 10,
    slug: "aplikasi-antrian-sederhana",
    title: "Aplikasi Antrian Sederhana",
    desc: "Sistem antrian digital sederhana.",
    stack: ["Laravel", "Bootstrap"],
    category: "Pelayanan",
  },
  {
    id: 11,
    slug: "aplikasi-cuti-karyawan",
    title: "Aplikasi Cuti Karyawan",
    desc: "Manajemen pengajuan cuti pegawai.",
    stack: ["Next.js", "Prisma"],
    category: "HR",
  },
  {
    id: 12,
    slug: "aplikasi-e-surat-desa",
    title: "Aplikasi E-Surat Desa",
    desc: "Pengelolaan surat menyurat desa.",
    stack: ["Laravel", "MySQL"],
    category: "Pemerintahan",
  },
  {
    id: 13,
    slug: "aplikasi-hr-karyawan",
    title: "Aplikasi HR Karyawan",
    desc: "Human resource management system.",
    stack: ["Next.js", "PostgreSQL"],
    category: "HR",
  },
  {
    id: 14,
    slug: "aplikasi-management-inventaris",
    title: "Aplikasi Management Inventaris",
    desc: "Sistem pengelolaan inventaris barang.",
    stack: ["Laravel", "MySQL"],
    category: "Inventory",
  },
  {
    id: 15,
    slug: "aplikasi-smart-hr",
    title: "Aplikasi Smart HR",
    desc: "Platform HR modern dengan fitur otomatisasi.",
    stack: ["Next.js", "Tailwind"],
    category: "HR",
  },
  {
    id: 16,
    slug: "booking-futsal",
    title: "Booking Futsal",
    desc: "Reservasi lapangan futsal online.",
    stack: ["Laravel", "MySQL"],
    category: "Booking",
  },
  {
    id: 17,
    slug: "cms-portal-berita",
    title: "CMS Portal Berita",
    desc: "Content management system portal berita.",
    stack: ["Next.js", "MongoDB"],
    category: "CMS",
  },
  {
    id: 18,
    slug: "ecommerce-fashion",
    title: "E-Commerce Fashion",
    desc: "Toko online fashion modern.",
    stack: ["Next.js", "Midtrans"],
    category: "E-Commerce",
  },
  {
    id: 19,
    slug: "ecommerce-tumbuhan",
    title: "E-Commerce Tumbuhan",
    desc: "Marketplace tanaman hias.",
    stack: ["Laravel", "MySQL"],
    category: "E-Commerce",
  },
  {
    id: 20,
    slug: "ecommerce-with-midtrans",
    title: "E-Commerce With Midtrans",
    desc: "E-commerce dengan integrasi pembayaran Midtrans.",
    stack: ["Next.js", "Midtrans"],
    category: "E-Commerce",
  },
  {
    id: 21,
    slug: "e-office",
    title: "E-Office",
    desc: "Sistem administrasi kantor digital.",
    stack: ["Laravel", "MySQL"],
    category: "Office",
  },
  {
    id: 22,
    slug: "e-todolist",
    title: "E-Todolist",
    desc: "Aplikasi manajemen tugas harian.",
    stack: ["React", "Firebase"],
    category: "Produktivitas",
  },
  {
    id: 23,
    slug: "hris",
    title: "HRIS",
    desc: "Human Resource Information System.",
    stack: ["Next.js", "Prisma"],
    category: "HR",
  },
  {
    id: 24,
    slug: "inventory",
    title: "Inventory",
    desc: "Manajemen stok dan barang.",
    stack: ["Laravel", "MySQL"],
    category: "Inventory",
  },
  {
    id: 25,
    slug: "kasir-restoran-sederhana",
    title: "Kasir Restoran Sederhana",
    desc: "Point of sale restoran sederhana.",
    stack: ["PHP", "MySQL"],
    category: "POS",
  },
  {
    id: 26,
    slug: "learning-management-system",
    title: "Learning Management System",
    desc: "Platform pembelajaran online.",
    stack: ["Next.js", "PostgreSQL"],
    category: "Education",
  },
  {
    id: 27,
    slug: "medical-checkup",
    title: "Medical Checkup",
    desc: "Sistem pemeriksaan kesehatan digital.",
    stack: ["Laravel", "MySQL"],
    category: "Kesehatan",
  },
  {
    id: 28,
    slug: "point-of-sale",
    title: "Point Of Sale",
    desc: "Sistem kasir modern.",
    stack: ["React", "Firebase"],
    category: "POS",
  },
  {
    id: 29,
    slug: "siakad",
    title: "SIAKAD",
    desc: "Sistem informasi akademik.",
    stack: ["Laravel", "MySQL"],
    category: "Education",
  },
  {
    id: 30,
    slug: "siakad-smp",
    title: "SIAKAD SMP",
    desc: "Sistem akademik khusus SMP.",
    stack: ["PHP", "MySQL"],
    category: "Education",
  },
  {
    id: 31,
    slug: "sistem-absensi-sekolah",
    title: "Sistem Absensi Sekolah",
    desc: "Absensi siswa dan guru sekolah.",
    stack: ["Laravel", "MySQL"],
    category: "Sekolah",
  },
  {
    id: 32,
    slug: "sistem-antrian-puskesmas",
    title: "Sistem Antrian Puskesmas",
    desc: "Digitalisasi antrian layanan kesehatan.",
    stack: ["Next.js", "PostgreSQL"],
    category: "Kesehatan",
  },
  {
    id: 33,
    slug: "sistem-informasi-desa",
    title: "Sistem Informasi Desa",
    desc: "Website dan layanan administrasi desa.",
    stack: ["Laravel", "MySQL"],
    category: "Pemerintahan",
  },
  {
    id: 34,
    slug: "sistem-management-perpustakaan-digital",
    title: "Sistem Management Perpustakaan Digital",
    desc: "Perpustakaan digital modern.",
    stack: ["Next.js", "MongoDB"],
    category: "Education",
  },
  {
    id: 35,
    slug: "website-company-profile",
    title: "Website Company Profile",
    desc: "Website profil perusahaan profesional.",
    stack: ["Next.js", "Tailwind"],
    category: "Company Profile",
  },
  {
    id: 36,
    slug: "website-donasi",
    title: "Website Donasi",
    desc: "Platform penggalangan dana online.",
    stack: ["Laravel", "Midtrans"],
    category: "Donasi",
  },
  {
    id: 37,
    slug: "web-klinik",
    title: "Web Klinik",
    desc: "Sistem layanan klinik digital.",
    stack: ["Next.js", "Prisma"],
    category: "Kesehatan",
  },
  {
    id: 38,
    slug: "web-klinik-gigi",
    title: "Web Klinik Gigi",
    desc: "Aplikasi manajemen klinik gigi.",
    stack: ["Laravel", "MySQL"],
    category: "Kesehatan",
  },
];

const filterOptions = [
  "All",
  "Next.js",
  "Laravel",
  "TypeScript",
  "React",
  "Portfolio",
  "E-Commerce",
];

const processProjects = [
  {
    title: "Portfolio Sendy",
    desc: "Halaman profil, project, skill, dan perjalanan karier pribadi.",
    href: "/",
    status: "Live preview",
    stack: ["Next.js", "Tailwind"],
  },
  {
    title: "Kiara Birthday",
    desc: "Undangan ulang tahun digital dengan galeri, countdown, dan detail acara.",
    href: "#",
    status: "On process",
    stack: ["React", "Framer Motion"],
  },
  {
    title: "Undangan Ulang Tahun",
    desc: "Template undangan personal dengan halaman tamu dinamis.",
    href: "#",
    status: "Template",
    stack: ["Next.js", "Dynamic Route"],
  },
  {
    title: "Client Dashboard",
    desc: "Area dashboard untuk tracking project, revisi, jadwal, dan pembayaran.",
    href: "#",
    status: "Prototype",
    stack: ["Shadcn UI", "Sidebar"],
  },
  {
    title: "Pricing Program",
    desc: "Daftar harga layanan program skripsi berdasarkan katalog showroom.",
    href: "/harga",
    status: "Draft",
    stack: ["Next.js", "Table"],
  },
  {
    title: "Next Project",
    desc: "Slot project baru untuk demo, template, atau studi kasus berikutnya.",
    href: "#",
    status: "Coming soon",
    stack: ["Dummy", "Planning"],
  },
];

const featureIcons = [
  Globe,
  Monitor,
  Smartphone,
  Palette,
  Zap,
  Shield,
  BarChart3,
  Layers,
];

export default function DemoPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredReal, setHoveredReal] = useState<string | null>(null);

  const filteredDummy = dummyProjects.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "All" ||
      p.stack.includes(activeFilter) ||
      p.category.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const filteredReal = realProjects.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "All" ||
      p.stack.includes(activeFilter) ||
      p.category.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-black text-[#A8B0BC] selection:bg-[#1C69D4]/20 overflow-x-hidden">
      <KiaNavbar />
      <div className="h-20 w-full" />

      <div className="px-6 max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="mb-16 pt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
              Premium Showcase
            </span>
            <h1 className="text-[40px] md:text-[80px] font-bold tracking-[-0.02em] leading-[1.05] text-white mt-4 mb-6">
              Project Showroom
            </h1>
            <p className="text-[15px] text-[#A8B0BC] max-w-2xl mx-auto mb-12 leading-relaxed">
              Eksplorasi mahakarya aplikasi Sistem Informasi yang kami bangun
              dengan standar industri dan teknologi terkini.
            </p>
          </motion.div>

          {/* SEARCH BAR */}
          <div className="relative max-w-2xl mx-auto mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A8B0BC]/50 pointer-events-none" />
            <input
              type="text"
              placeholder="Cari solusi atau teknologi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border border-white/[0.12] py-4 pl-11 pr-10 text-[14px] text-white placeholder:text-[#A8B0BC]/50 focus:outline-none focus:border-white/[0.25] transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8B0BC]/50 hover:text-[#A8B0BC] transition-colors text-[13px]"
              >
                Clear
              </button>
            )}
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-2">
            {filterOptions.map((stack) => (
              <button
                key={stack}
                onClick={() => setActiveFilter(stack)}
                className={`px-4 py-2 text-[12px] font-medium transition-all duration-300 border flex items-center gap-2 ${
                  activeFilter === stack
                    ? "bg-[#1C69D4]/10 border-[#1C69D4]/30 text-white"
                    : "bg-transparent border-white/[0.06] text-[#A8B0BC]/50 hover:border-white/[0.12] hover:text-[#A8B0BC]"
                }`}
              >
                {stack !== "All" &&
                  stack !== "Portfolio" &&
                  stack !== "E-Commerce" && (
                    <Image
                      width={20}
                      height={20}
                      src={getTechIcon(stack)}
                      alt={stack}
                      className="w-4 h-4 object-contain"
                    />
                  )}
                {stack}
              </button>
            ))}
          </div>
        </header>

        {/* ===== REAL PROJECTS SECTION ===== */}
        {filteredReal.length > 0 && (
          <section className="mb-24">
            <div className="mb-12">
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4]">
                ★ Featured Projects
              </span>
              <h2 className="text-[38px] md:text-[48px] font-bold tracking-[-0.02em] text-white mt-3 mb-3">
                Project Aktif & Live
              </h2>
              <p className="text-[15px] text-[#A8B0BC] max-w-2xl leading-relaxed">
                Klik card untuk melihat langsung website yang sudah online dan
                bisa diakses publik.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReal.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredReal(project.id)}
                  onMouseLeave={() => setHoveredReal(null)}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative overflow-hidden border border-white/[0.06] bg-[#141619] transition-all duration-500 hover:border-white/[0.12] hover:-translate-y-1"
                  >
                    {/* Browser mockup bar */}
                    <div className="px-5 pt-5 pb-3">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex-1 mx-3">
                          <div className="bg-white/[0.03] px-3 py-1.5 flex items-center gap-2">
                            <Globe className="w-3 h-3 text-[#A8B0BC]/30" />
                            <span className="text-[10px] text-[#A8B0BC]/30 truncate font-mono">
                              {project.url.replace("https://", "")}
                            </span>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-[#A8B0BC]/30 group-hover:text-[#1C69D4] transition-colors" />
                      </div>

                      {/* Preview Area */}
                      <div className="relative overflow-hidden h-48 bg-[#0D0E10] flex items-center justify-center">
                        <div className="absolute inset-0 overflow-hidden">
                          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#1C69D4]/10 rounded-full blur-3xl" />
                          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#1C69D4]/10 rounded-full blur-3xl" />
                        </div>
                        <div className="relative z-10 text-center px-6">
                          <div className="w-16 h-16 mx-auto mb-4 border border-white/[0.06] bg-white/[0.03] flex items-center justify-center">
                            <Globe className="w-8 h-8 text-[#A8B0BC]" />
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-2">
                            {project.title.split("—")[0].trim()}
                          </h3>
                          <p className="text-[13px] text-[#A8B0BC]/50 mb-4">
                            {project.title.split("—")[1]?.trim() ||
                              project.category}
                          </p>
                          <div className="flex items-center justify-center gap-3">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4]">
                              Live
                            </span>
                            <div className="flex -space-x-1.5">
                              {project.stack.slice(0, 3).map((tech) => (
                                <div
                                  key={tech}
                                  className="w-7 h-7 rounded-full bg-[#141619] border-2 border-black flex items-center justify-center p-1.5"
                                  title={tech}
                                >
                                  <Image
                                    width={28}
                                    height={28}
                                    src={getTechIcon(tech)}
                                    alt={tech}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <motion.div
                            initial={false}
                            animate={
                              hoveredReal === project.id
                                ? { scale: 1 }
                                : { scale: 0.8 }
                            }
                            className="flex flex-col items-center gap-3"
                          >
                            <div className="p-4 border border-[#1C69D4]/30 bg-[#1C69D4]/10">
                              <ExternalLink className="w-8 h-8 text-[#1C69D4]" />
                            </div>
                            <span className="text-sm font-semibold text-[#1C69D4] tracking-wider uppercase">
                              Kunjungi Website
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-5 pb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
                          {project.category}
                        </span>
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="w-3 h-3 text-[#1C69D4] fill-[#1C69D4]"
                            />
                          ))}
                        </div>
                      </div>

                      <h3 className="text-[17px] font-semibold text-white mb-2 group-hover:text-[#1C69D4] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-[13px] text-[#A8B0BC] leading-relaxed mb-4 line-clamp-2">
                        {project.desc}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.map((feature, i) => {
                          const FeatureIcon =
                            featureIcons[i % featureIcons.length];
                          return (
                            <span
                              key={feature}
                              className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-[#A8B0BC]/50 border border-white/[0.06]"
                            >
                              <FeatureIcon className="w-3 h-3" />
                              {feature}
                            </span>
                          );
                        })}
                      </div>

                      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {project.stack.map((tech) => (
                            <div
                              key={tech}
                              className="w-8 h-8 rounded-full bg-[#141619] border-2 border-black flex items-center justify-center p-2 hover:z-10 transition-transform hover:scale-125"
                              title={tech}
                            >
                              <Image
                                width={32}
                                height={32}
                                src={getTechIcon(tech)}
                                alt={tech}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ))}
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/30 group-hover:text-[#1C69D4] transition-colors">
                          Live Demo →
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ===== ON PROCESS SECTION ===== */}
        <section className="mb-24">
          <div className="mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4]">
              New Project On Process!
            </span>
            <h2 className="text-[38px] md:text-[48px] font-bold tracking-[-0.02em] text-white mt-3 mb-3">
              Project Baru & Eksperimen Aktif
            </h2>
            <p className="text-[15px] text-[#A8B0BC] max-w-2xl leading-relaxed">
              Kumpulan halaman dan demo yang sedang disiapkan. Beberapa sudah
              bisa dibuka, sisanya masih dummy untuk project berikutnya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processProjects.map((project, index) => (
              <Link
                key={project.title}
                href={project.href}
                className="group relative overflow-hidden border border-white/[0.06] bg-[#141619] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#1C69D4]/30"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1C69D4]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-white/[0.06] bg-white/[0.03] text-[#A8B0BC]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4]">
                    {project.status}
                  </span>
                </div>
                <p className="mb-3 font-mono text-xs font-bold text-[#A8B0BC]/25">
                  0{index + 1}
                </p>
                <h3 className="text-[17px] font-semibold text-white transition-colors group-hover:text-[#1C69D4]">
                  {project.title}
                </h3>
                <p className="mt-3 min-h-[72px] text-[13px] leading-relaxed text-[#A8B0BC]">
                  {project.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium uppercase tracking-wider text-[#A8B0BC]/50 border border-white/[0.06] px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== DUMMY PROJECTS GRID ===== */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32"
        >
          <AnimatePresence mode="popLayout">
            {filteredDummy.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/demo/${project.slug}`}>
                  <div className="group bg-[#141619] border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 cursor-pointer overflow-hidden h-full flex flex-col rounded-xl">
                    <div className="p-8">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
                          {project.category}
                        </span>
                        <div className="p-2 bg-white/[0.03] border border-white/[0.06] group-hover:bg-[#1C69D4]/10 group-hover:border-[#1C69D4]/30 transition-all duration-500">
                          <ChevronRight className="w-4 h-4 text-[#A8B0BC] group-hover:text-[#1C69D4]" />
                        </div>
                      </div>
                      <h3 className="text-[17px] font-semibold text-white mb-4 group-hover:text-[#1C69D4] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[13px] text-[#A8B0BC] leading-relaxed mb-8 line-clamp-3">
                        {project.desc}
                      </p>
                      <div className="mt-auto pt-6 border-t border-white/[0.06] flex items-center justify-between">
                        <div className="flex -space-x-3">
                          {project.stack.map((s) => (
                            <div
                              key={s}
                              className="w-10 h-10 rounded-full bg-[#141619] border-2 border-black flex items-center justify-center p-2.5 hover:z-10 transition-transform hover:scale-125"
                              title={s}
                            >
                              <Image
                                width={40}
                                height={40}
                                src={getTechIcon(s)}
                                alt={s}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ))}
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/30 group-hover:text-[#1C69D4] transition-colors">
                          View Details
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* FOOTER */}
      <KiaFooter />
    </main>
  );
}
