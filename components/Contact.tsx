"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Globe, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  EMAIL,
  LABEL_WHATSAPP,
  LOKASI,
  tautanSosial,
  tautanWhatsApp,
} from "../lib/portfolio";

const ikonSosial: Record<string, LucideIcon> = {
  GitHub: Globe,
  LinkedIn: ExternalLink,
  Email: Mail,
};

export const Contact = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const kirimLewatEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subjek = `Pesan dari website — ${nama || "tanpa nama"}`;
    const isi = `Nama: ${nama}\nEmail: ${email}\n\n${pesan}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subjek
    )}&body=${encodeURIComponent(isi)}`;
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14 border-b border-secondary/20 pb-6"
        >
          <p className="font-label uppercase tracking-widest text-xs text-tertiary mb-3">
            06 — Kontak
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-3">
            Bisa dihubungi langsung
          </h2>
          <p className="text-primary/70 font-body max-w-2xl">
            Untuk lowongan kerja, panggilan servis, atau sekadar tanya-tanya
            soal perangkat. WhatsApp paling cepat dijawab.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="card border border-secondary/10"
          >
            <div className="space-y-6 mb-8">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-tertiary/20 rounded-sm flex items-center justify-center">
                  <Mail className="text-tertiary" size={20} />
                </div>
                <div>
                  <p className="text-xs font-label uppercase tracking-widest text-secondary">
                    Email
                  </p>
                  <p className="font-body text-primary group-hover:text-tertiary transition-colors">
                    {EMAIL}
                  </p>
                </div>
              </a>

              <a
                href={tautanWhatsApp(
                  "Halo Sendy, saya mau tanya soal dukungan/servis komputer."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-tertiary/20 rounded-sm flex items-center justify-center">
                  <MessageCircle className="text-tertiary" size={20} />
                </div>
                <div>
                  <p className="text-xs font-label uppercase tracking-widest text-secondary">
                    WhatsApp
                  </p>
                  <p className="font-body text-primary group-hover:text-tertiary transition-colors">
                    {LABEL_WHATSAPP}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-tertiary/20 rounded-sm flex items-center justify-center">
                  <MapPin className="text-tertiary" size={20} />
                </div>
                <div>
                  <p className="text-xs font-label uppercase tracking-widest text-secondary">
                    Lokasi
                  </p>
                  <p className="font-body text-primary">{LOKASI}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-label uppercase tracking-widest text-secondary mb-4">
                Tautan
              </p>
              <div className="flex flex-wrap gap-3">
                {tautanSosial.map((sosial) => {
                  const Icon = ikonSosial[sosial.nama] ?? Mail;
                  return (
                    <a
                      key={sosial.nama}
                      href={sosial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-4 py-2 bg-surface border border-secondary/20 hover:bg-tertiary hover:border-tertiary rounded-sm transition-all duration-300"
                      aria-label={sosial.nama}
                    >
                      <Icon
                        className="text-secondary group-hover:text-on-primary"
                        size={16}
                      />
                      <span className="text-xs font-label uppercase tracking-widest text-secondary group-hover:text-on-primary">
                        {sosial.nama}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Form Side — membuka aplikasi email dengan isi yang sudah terisi */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="card border border-secondary/10 space-y-6"
            onSubmit={kirimLewatEmail}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="nama"
                  className="text-xs font-label uppercase tracking-widest text-secondary"
                >
                  Nama
                </label>
                <input
                  id="nama"
                  type="text"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full bg-surface border border-secondary/20 px-4 py-3 text-primary font-body focus:outline-none focus:border-tertiary transition-colors"
                  placeholder="Nama Anda"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-label uppercase tracking-widest text-secondary"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface border border-secondary/20 px-4 py-3 text-primary font-body focus:outline-none focus:border-tertiary transition-colors"
                  placeholder="nama@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="pesan"
                className="text-xs font-label uppercase tracking-widest text-secondary"
              >
                Pesan
              </label>
              <textarea
                id="pesan"
                rows={4}
                required
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                className="w-full bg-surface border border-secondary/20 px-4 py-3 text-primary font-body focus:outline-none focus:border-tertiary transition-colors resize-none"
                placeholder="Ada yang bisa dibantu?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-tertiary text-on-primary font-label uppercase tracking-widest text-xs hover:bg-tertiary/90 transition-all duration-300"
            >
              Kirim Pesan
            </button>
            <p className="text-secondary font-body text-xs leading-relaxed">
              Tombol ini membuka aplikasi email Anda dengan pesan yang sudah
              terisi, lalu Anda tinggal menekan kirim. Kalau lebih suka cepat,
              pakai WhatsApp di sebelah.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
