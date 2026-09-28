"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { layanan, tautanWhatsApp } from "../lib/portfolio";

export default function Layanan() {
  return (
    <section id="layanan" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14 border-b border-secondary/20 pb-6"
        >
          <p className="font-label uppercase tracking-widest text-xs text-tertiary mb-3">
            01 — Layanan
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-3">
            Servis komputer & laptop
          </h2>
          <p className="text-primary/70 font-body max-w-2xl">
            Dikerjakan sendiri sejak 2013 untuk teman dan rekan kerja di
            Tangerang. Diagnosa dulu, baru diperbaiki — bukan langsung instal
            ulang.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 mb-12">
          {layanan.map((item, index) => (
            <motion.div
              key={item.judul}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              className="border-t border-secondary/20 pt-6"
            >
              <p className="font-display font-bold text-tertiary text-lg mb-2">
                {item.nomor}
              </p>
              <h3 className="text-xl font-display font-bold text-primary mb-2">
                {item.judul}
              </h3>
              <p className="text-primary/70 font-body text-sm leading-relaxed mb-4">
                {item.deskripsi}
              </p>
              <p className="text-secondary font-body text-sm">
                {item.poin.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/servis" className="btn-primary hover:opacity-90 transition-opacity">
            Lihat layanan lengkap
          </Link>
          <a
            href={tautanWhatsApp("Halo Sendy, saya mau tanya soal servis komputer/laptop.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 border-2 border-secondary/40 text-secondary font-label uppercase tracking-widest text-xs rounded-md hover:border-tertiary hover:text-tertiary transition-all duration-300 inline-block cursor-pointer"
          >
            Tanya lewat WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
