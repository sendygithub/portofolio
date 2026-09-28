"use client";

import { motion } from "framer-motion";
import { proyek, proyekLainnya } from "../lib/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14 border-b border-secondary/20 pb-6"
        >
          <p className="font-label uppercase tracking-widest text-xs text-tertiary mb-3">
            03 — Proyek
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-3">
            Aplikasi yang sudah dipakai
          </h2>
          <p className="text-primary/70 font-body max-w-2xl">
            Dibangun mulai 2022 untuk teman, UMKM, dan kepentingan sendiri.
            Semua tautan di bawah bisa diklik dan sedang aktif.
          </p>
        </motion.div>

        <div className="space-y-12">
          {proyek.map((item, index) => (
            <motion.article
              key={item.judul}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.04 }}
              className="group border-b border-secondary/10 pb-10 last:border-0"
            >
              <div className="grid md:grid-cols-[4rem_1fr] gap-x-6">
                <p className="font-display font-bold text-tertiary text-3xl mb-2 md:mb-0">
                  {item.nomor}
                </p>

                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-primary group-hover:text-tertiary transition-colors duration-300">
                    {item.judul}
                  </h3>
                  <p className="text-primary/70 font-body leading-relaxed mt-3 mb-5 max-w-3xl">
                    {item.deskripsi}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {item.teknologi.map((tek) => (
                      <span
                        key={tek}
                        className="px-3 py-1 bg-surface border border-secondary/20 text-xs text-secondary font-label uppercase tracking-widest"
                      >
                        {tek}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-tertiary font-label uppercase tracking-widest text-xs transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    Buka aplikasi →
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
          className="mt-16 border border-secondary/15 p-6 md:p-8"
        >
          <p className="font-label uppercase tracking-widest text-xs text-secondary mb-5">
            Proyek lainnya
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {proyekLainnya.map((lain) => (
              <li key={lain.url}>
                <a
                  href={lain.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/80 hover:text-tertiary font-body transition-colors duration-200 flex items-start gap-3"
                >
                  <span className="text-tertiary text-xs mt-1.5">◆</span>
                  {lain.nama}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
