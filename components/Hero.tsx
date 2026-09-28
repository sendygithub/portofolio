"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  faktaSingkat,
  FILE_CV,
  GELAR,
  NAMA,
  POSISI_DICARI,
  tautanWhatsApp,
} from "../lib/portfolio";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center"
        >
          {/* FOTO */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.05 }}
            className="
              relative
              mb-4
              rounded-full
              overflow-hidden
              ring-2 ring-secondary/40
              hover:ring-tertiary
              transition-all
              duration-300
              shadow-lg
              hover:shadow-[0_0_30px_rgba(201,111,46,0.4)]
              mt-20
            "
          >
            <Image
              src="/sendy.png"
              alt={NAMA}
              width={500}
              height={500}
              className="
                rounded-full
                object-cover
                w-500 h-45
                sm:w-36 sm:h-36
                md:w-44 md:h-44
                lg:w-80 lg:h-80
              "
            />
          </motion.div>

          {/* NAMA */}
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-sm sm:text-base text-3xl md:text-4xl lg:text-2xl font-display font-bold mb-5 mt-5 text-secondary uppercase tracking-widest"
          >
            {NAMA} {GELAR}
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="
            font-display font-bold mb-6 leading-tight
            text-4xl sm:text-5xl lg:text-display
          "
        >
          <span className="text-tertiary">IT Support</span>

          <span className="block lg:inline text-primary lg:ml-3">
            Komputer, Laptop
          </span>

          <span className="block lg:inline text-primary lg:ml-3">
            dan Jaringan
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-primary/70 max-w-2xl mx-auto mb-8 leading-relaxed font-body"
        >
          Servis dan dukungan IT sejak 2013 di Tangerang. 13 tahun terbiasa
          bekerja sistem shift 1/2/3 di lini produksi, jadi siap mendukung
          operasional IT yang berjalan non-stop. Terbuka untuk posisi{" "}
          <span className="text-primary">{POSISI_DICARI}</span>.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/servis" className="btn-primary hover:opacity-90 transition-opacity">
            Lihat Layanan Servis
          </Link>
          <a
            href={FILE_CV}
            download
            className="px-5 py-3 border-2 border-tertiary text-tertiary font-label uppercase tracking-widest text-xs rounded-md hover:bg-tertiary hover:text-on-primary transition-all duration-300 inline-block cursor-pointer"
          >
            Unduh CV (PDF)
          </a>
          <a
            href={tautanWhatsApp(
              "Halo Sendy, saya mau tanya soal dukungan/servis komputer."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 border-2 border-secondary/40 text-secondary font-label uppercase tracking-widest text-xs rounded-md hover:border-tertiary hover:text-tertiary transition-all duration-300 inline-block cursor-pointer"
          >
            WhatsApp
          </a>
        </motion.div>

        {/* FAKTA SINGKAT */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-secondary/15 border border-secondary/15"
        >
          {faktaSingkat.map((fakta) => (
            <div key={fakta.label} className="bg-neutral px-4 py-6 text-center">
              <p className="font-display font-bold text-primary text-lg md:text-xl">
                {fakta.nilai}
              </p>
              <p className="font-label uppercase tracking-widest text-[0.65rem] text-secondary mt-1">
                {fakta.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
export default Hero;
