"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Monitor,
  Cpu,
  HardDrive,
  Wrench,
  ShieldCheck,
  Zap,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";
import { Suspense, useState } from "react";

const categories = [
  {
    id: "perbaikan-hardware",
    label: "Perbaikan Hardware",
    icon: <Wrench className="w-4 h-4" />,
    gradient: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/30",
    textColor: "text-amber-300",
    images: [
      "/servis/servis 1.jpeg",
      "/servis/servis 2.jpeg",
      "/servis/servis 3.jpeg",
      "/servis/servis 4.jpeg",
    ],
  },
  {
    id: "instalasi-software",
    label: "Instalasi Software",
    icon: <Monitor className="w-4 h-4" />,
    gradient: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    textColor: "text-violet-300",
    images: [
      "/servis/servis 5.jpeg",
      "/servis/servis 6.jpeg",
      "/servis/servis 7.jpeg",
    ],
  },
  {
    id: "fix-bluescreen",
    label: "Fix Problem Sistem BlueScreen",
    icon: <Zap className="w-4 h-4" />,
    gradient: "from-red-500/20 to-rose-500/10",
    border: "border-red-500/30",
    textColor: "text-red-300",
    images: [
      "/servis/servis 8.jpeg",
      "/servis/servis 9.jpeg",
      "/servis/servis 10.jpeg",
    ],
  },
  {
    id: "upgrade-komponen",
    label: "Upgrade Komponen",
    icon: <Cpu className="w-4 h-4" />,
    gradient: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30",
    textColor: "text-cyan-300",
    images: [
      "/servis/servis 11.jpeg",
      "/servis/servis 12.jpeg",
      "/servis/servis 14.jpeg",
      "/servis/servis 15.jpeg",
    ],
  },
  {
    id: "perbaikan-laptop",
    label: "Perbaikan Laptop",
    icon: <HardDrive className="w-4 h-4" />,
    gradient: "from-pink-500/20 to-fuchsia-500/10",
    border: "border-pink-500/30",
    textColor: "text-pink-300",
    images: [
      "/servis/servis 16.jpeg",
      "/servis/servis 17.jpeg",
      "/servis/servis 18.jpeg",
      "/servis/servis 19.jpeg",
      "/servis/servis 20.jpeg",
      "/servis/servis 21.jpeg",
      "/servis/servis 22.jpeg",
    ],
  },
];

function GalleryContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("category") || "all";
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  const activeCat = categories.find((c) => c.id === activeCategory);

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-[#d4af37]/20">
      {/* Ambient Glow */}
      <div className="fixed top-0 -left-10 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[150px] -z-10" />
      <div className="fixed bottom-0 -right-10 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] -z-10" />
      <div
        className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Header */}
      <div className="sticky top-0 z-40 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/servis"
            className="flex items-center gap-2 text-slate-400 hover:text-[#d4af37] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Kembali ke Servis</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center bg-gradient-to-r from-amber-500/20 to-blue-500/20 text-amber-300 border border-amber-400/30 rounded-full px-3 py-1 text-xs font-medium">
              <Sparkles className="w-3 h-3 mr-1" />
              Gallery
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Category Filter */}
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            {activeCategory === "all"
              ? "Galeri Dokumentasi"
              : activeCat?.label || "Galeri Dokumentasi"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl"
          >
            {activeCategory === "all"
              ? "Koleksi dokumentasi pekerjaan servis komputer dan laptop Prisma Komputer."
              : `Dokumentasi kategori: ${activeCat?.label}`}
          </motion.p>

          {/* Category Chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <button
              onClick={() => router.push("/servis/gallery")}
              className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-[#d4af37]/20 border-[#d4af37]/40 text-[#d4af37]"
                  : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              Semua
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() =>
                  router.push(`/servis/gallery?category=${cat.id}`)
                }
                className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-300 flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? `${cat.border} ${cat.textColor} bg-white/10`
                    : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        {filteredCategories.map((cat) => (
          <div key={cat.id} className="mb-16">
            {activeCategory === "all" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center ${cat.textColor}`}
                >
                  {cat.icon}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">{cat.label}</h2>
                  <p className="text-xs text-slate-500">
                    {cat.images.length} foto
                  </p>
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cat.images.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`${cat.label} - ${index + 1}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                    <p className="text-white text-xs font-medium truncate">
                      {cat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {filteredCategories.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500">
              Tidak ada dokumentasi untuk kategori ini.
            </p>
            <Link href="/servis/gallery">
              <span className="inline-flex items-center justify-center mt-4 border border-white/10 text-slate-400 px-4 py-2 rounded-full text-xs font-medium hover:border-white/20 hover:text-white transition-all">
                Lihat Semua
              </span>
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Dokumentasi"
              fill
              className="object-contain rounded-2xl"
              priority
            />
          </motion.div>

          <p className="absolute bottom-8 text-slate-400 text-sm">
            Klik di luar gambar untuk menutup
          </p>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-8 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/servis"
            className="text-sm text-slate-500 hover:text-[#d4af37] transition-colors"
          >
            ← Kembali ke halaman Servis
          </Link>
        </div>
      </footer>
    </main>
  );
}

export default function GalleryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#020617] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <GalleryContent />
    </Suspense>
  );
}
