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
    <main className="min-h-screen bg-background text-foreground selection:bg-accent">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/90  border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/servis"
            className="flex items-center gap-2 text-muted-foreground/80 hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Kembali ke Servis</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 border border-primary px-3 py-1  uppercase text-[10px] tracking-wider text-primary">
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
            className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight"
          >
            {activeCategory === "all"
              ? "Galeri Dokumentasi"
              : activeCat?.label || "Galeri Dokumentasi"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground/80 max-w-2xl"
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
              className={`px-4 py-2 text-[11px]  uppercase tracking-wider border transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-accent border-primary text-primary"
                  : "bg-muted border-input text-muted-foreground/80 hover:border-foreground/30 hover:text-foreground"
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
                className={`px-4 py-2 text-[11px]  uppercase tracking-wider border transition-all duration-300 flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? "border-primary text-primary bg-accent"
                    : "bg-muted border-input text-muted-foreground/80 hover:border-foreground/30 hover:text-foreground"
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
                <div className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground">
                  {cat.icon}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-foreground">
                    {cat.label}
                  </h2>
                  <p className="text-xs text-muted-foreground/80">
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
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden border border-border"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`${cat.label} - ${index + 1}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                    <p className="truncate text-xs font-medium text-white">
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
            <p className="text-muted-foreground/80">
              Tidak ada dokumentasi untuk kategori ini.
            </p>
            <Link href="/servis/gallery">
              <span className="inline-flex items-center justify-center mt-4 border border-input text-muted-foreground px-4 py-2 text-[11px]  uppercase tracking-wider hover:border-primary hover:text-primary transition-all">
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
          className="fixed inset-0 z-50 bg-foreground/80  flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 border border-input bg-card hover:border-primary hover:text-primary flex items-center justify-center text-foreground transition-all z-10"
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
              className="object-contain"
              priority
            />
          </motion.div>

          <p className="absolute bottom-8 text-muted-foreground/80 text-sm">
            Klik di luar gambar untuk menutup
          </p>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="border-t border-border py-10 px-8 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/servis"
            className="text-sm text-muted-foreground/80 hover:text-primary transition-colors"
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
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="w-8 h-8 border border-primary rounded-full animate-spin" />
        </div>
      }
    >
      <GalleryContent />
    </Suspense>
  );
}
