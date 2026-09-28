"use client";

import { motion } from "framer-motion";
import { keahlian, POSISI_DICARI } from "../lib/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-header"
        >
          <p className="section-label">02 — Keahlian</p>
          <h2 className="section-title">Yang bisa saya kerjakan</h2>
          <p className="section-desc">
            Tiga blok pertama itu isi pekerjaan IT Support sehari-hari. Blok
            terakhir nilai tambahnya.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {keahlian.map((kelompok, index) => (
            <motion.div
              key={kelompok.judul}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
            >
              <div className="flex items-baseline gap-4 mb-1">
                <span className="numbered-label text-xl">
                  {kelompok.nomor}
                </span>
                <h3 className="text-xl md:text-2xl  font-bold text-foreground">
                  {kelompok.judul}
                </h3>
              </div>
              <p className="text-muted-foreground font-body text-sm mb-5 md:ml-10">
                {kelompok.ringkas}
              </p>

              <ul className="space-y-2 md:ml-10 border-l border-border pl-5">
                {kelompok.daftar.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground font-body text-sm leading-relaxed relative pl-4 before:content-['◆'] before:text-primary before:absolute before:left-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16 text-center text-muted-foreground font-body"
        >
          Sedang mencari posisi{" "}
          <span className="text-foreground font-medium">{POSISI_DICARI}</span> di Tangerang,
          Jakarta, dan sekitarnya. Bersedia kerja shift dan on-site.
        </motion.p>
      </div>
    </section>
  );
}