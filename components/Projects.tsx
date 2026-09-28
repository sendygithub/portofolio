"use client";

import { motion } from "framer-motion";
import { proyek, proyekLainnya } from "../lib/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-header"
        >
          <p className="section-label">03 — Proyek</p>
          <h2 className="section-title">Aplikasi yang sudah dipakai</h2>
          <p className="section-desc">
            Dibangun mulai 2022 untuk teman, UMKM, dan kepentingan sendiri.
            Semua tautan di bawah bisa diklik dan sedang aktif.
          </p>
        </motion.div>

        <div className="space-y-10">
          {proyek.map((item, index) => (
            <motion.article
              key={item.judul}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.04 }}
              className="group border-b border-border pb-10 last:border-0"
            >
              <div className="grid md:grid-cols-[4rem_1fr] gap-x-6">
                <p className="numbered-label text-3xl md:text-4xl">
                  {item.nomor}
                </p>

                <div>
                  <h3 className="text-2xl md:text-3xl  font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.judul}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed mt-3 mb-5 max-w-3xl">
                    {item.deskripsi}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {item.teknologi.map((tek) => (
                      <span
                        key={tek}
                        className="px-3 py-1 bg-muted border border-border text-xs text-muted-foreground  uppercase tracking-wider"
                      >
                        {tek}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Buka aplikasi
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* PROYEK LAINNYA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16 card-elegant p-6 md:p-8"
        >
          <p className=" uppercase tracking-wider text-xs text-muted-foreground mb-5">
            Proyek lainnya
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {proyekLainnya.map((lain) => (
              <li key={lain.url}>
                <a
                  href={lain.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary font-body transition-colors duration-200 flex items-start gap-3 group"
                >
                  <span className="text-primary text-xs mt-1.5">◆</span>
                  <span className="group-hover:translate-x-1 transition-transform">{lain.nama}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}