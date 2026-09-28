"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { layanan, tautanWhatsApp } from "../lib/portfolio";

export default function Layanan() {
  return (
    <section id="layanan" className="py-24 px-6">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-header"
        >
          <p className="section-label">01 — Layanan</p>
          <h2 className="section-title">Servis komputer & laptop</h2>
          <p className="section-desc">
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
              className="border-t border-border pt-6 group"
            >
              <p className="numbered-label text-lg mb-2">
                {item.nomor}
              </p>
              <h3 className="text-xl  font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {item.judul}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                {item.deskripsi}
              </p>
              <p className="text-muted-foreground/80 font-body text-sm">
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
          <Link href="/servis" className="btn-accent">
            Lihat layanan lengkap
          </Link>
          <a
            href={tautanWhatsApp("Halo Sendy, saya mau tanya soal servis komputer/laptop.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Tanya lewat WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}