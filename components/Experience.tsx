"use client";

import { motion } from "framer-motion";
import { pendidikan, pengalaman } from "../lib/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-header"
        >
          <p className="section-label">04 — Pengalaman</p>
          <h2 className="section-title">Yang sudah dikerjakan</h2>
          <p className="section-desc">
            Tiga belas tahun terakhir isinya dua hal: kerja shift di lini
            produksi, dan memperbaiki komputer orang. Yang kedua itu yang saya
            mau lanjutkan sebagai karier.
          </p>
        </motion.div>

        <div className="space-y-14">
          {pengalaman.map((kerja, index) => (
            <motion.article
              key={kerja.perusahaan}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
              className="grid md:grid-cols-[9rem_1fr] gap-x-8 gap-y-4 border-b border-border pb-12 last:border-0"
            >
              <div>
                <p className="numbered-label text-2xl">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className=" uppercase tracking-wider text-[0.65rem] text-muted-foreground/80 mt-1">
                  {kerja.periode}
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl  font-bold text-foreground">
                  {kerja.jabatan}
                </h3>
                <p className="text-muted-foreground font-body mb-1">{kerja.perusahaan}</p>
                <p className=" uppercase tracking-wider text-[0.65rem] text-muted-foreground/80 mb-6">
                  {kerja.lokasi}
                </p>

                <ul className="space-y-3 mb-6">
                  {kerja.poin.map((poin, idx) => (
                    <li
                      key={idx}
                      className="text-muted-foreground font-body flex items-start leading-relaxed"
                    >
                      <span className="text-primary mr-3 mt-1 text-xs">◆</span>
                      {poin}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {kerja.tag.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted border border-border text-xs text-muted-foreground/80  uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* PENDIDIKAN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-20"
        >
          <p className="section-label">05 — Pendidikan</p>
          <h2 className="text-3xl md:text-4xl  font-bold text-foreground mb-8">
            Latar belakang
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {pendidikan.map((didik) => (
              <div
                key={didik.institusi}
                className="card-elegant p-6"
              >
                <p className=" uppercase tracking-wider text-[0.65rem] text-muted-foreground/80 mb-3">
                  {didik.periode}
                </p>
                <h3 className="text-xl  font-bold text-foreground mb-1">
                  {didik.jenjang}
                </h3>
                <p className="text-muted-foreground font-body mb-3">{didik.institusi}</p>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {didik.catatan}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;