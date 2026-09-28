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
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-header"
        >
          <p className="section-label">06 — Kontak</p>
          <h2 className="section-title">Bisa dihubungi langsung</h2>
          <p className="section-desc">
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
            className="card-elegant p-8"
          >
            <div className="space-y-6 mb-8">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs  uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <p className="font-body text-foreground group-hover:text-primary transition-colors">
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
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <MessageCircle className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs  uppercase tracking-wider text-muted-foreground">
                    WhatsApp
                  </p>
                  <p className="font-body text-foreground group-hover:text-primary transition-colors">
                    {LABEL_WHATSAPP}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs  uppercase tracking-wider text-muted-foreground">
                    Lokasi
                  </p>
                  <p className="font-body text-foreground">{LOKASI}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs  uppercase tracking-wider text-muted-foreground mb-4">
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
                      className="group flex items-center gap-2 px-4 py-2 bg-muted border border-border hover:border-primary hover:bg-accent transition-all duration-300"
                      aria-label={sosial.nama}
                    >
                      <Icon
                        className="text-muted-foreground group-hover:text-primary"
                        size={16}
                      />
                      <span className="text-xs  uppercase tracking-wider text-muted-foreground group-hover:text-primary">
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
            className="card-elegant p-8 space-y-6"
            onSubmit={kirimLewatEmail}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="nama"
                  className="label-elegant"
                >
                  Nama
                </label>
                <input
                  id="nama"
                  type="text"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="input-elegant"
                  placeholder="Nama Anda"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="label-elegant"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-elegant"
                  placeholder="nama@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="pesan"
                className="label-elegant"
              >
                Pesan
              </label>
              <textarea
                id="pesan"
                rows={4}
                required
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                className="input-elegant resize-none"
                placeholder="Ada yang bisa dibantu?"
              />
            </div>
            <button
              type="submit"
              className="w-full btn-accent py-3.5"
            >
              Kirim Pesan
            </button>
            <p className="text-muted-foreground/80 font-body text-xs leading-relaxed">
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

export default Contact;