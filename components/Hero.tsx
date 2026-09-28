"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Download, MessageCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  faktaSingkat,
  FILE_CV,
  GELAR,
  NAMA,
  POSISI_DICARI,
  tautanWhatsApp,
} from "@/lib/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6 pb-20 pt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-4xl text-center"
      >
        {/* Foto profil — bulat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-border bg-muted shadow-sm sm:h-48 sm:w-48 md:h-56 md:w-56">
            <Image
              src="/sendy.png"
              alt={NAMA}
              fill
              priority
              sizes="(max-width: 640px) 10rem, (max-width: 768px) 12rem, 14rem"
              className="object-cover"
            />
          </div>
        </motion.div>

        <Badge variant="secondary" className="mb-6 py-1 text-xs font-medium">
          {NAMA} · {GELAR}
        </Badge>

        <h1 className="mb-6 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          IT Support
          <span className="block text-muted-foreground">Komputer, Laptop</span>
          <span className="block text-muted-foreground">dan Jaringan</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Servis dan dukungan IT sejak 2013 di Tangerang. 13 tahun terbiasa
          bekerja sistem shift 1/2/3 di lini produksi, jadi siap mendukung
          operasional IT yang berjalan non-stop. Terbuka untuk posisi{" "}
          <span className="font-medium text-foreground">{POSISI_DICARI}</span>.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/servis">Lihat Layanan Servis</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
          >
            <a href={FILE_CV} download>
              <Download />
              Unduh CV (PDF)
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
          >
            <a
              href={tautanWhatsApp(
                "Halo Sendy, saya mau tanya soal dukungan/servis komputer.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* FAKTA SINGKAT */}
        <Separator className="my-14" />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {faktaSingkat.map((fakta) => (
            <Card key={fakta.label} className="p-6 text-center">
              <p className="text-2xl font-semibold tabular-nums md:text-3xl">
                {fakta.nilai}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {fakta.label}
              </p>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
