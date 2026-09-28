"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { tautanWhatsApp } from "../lib/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Layanan", href: "#layanan" },
    { name: "Proyek", href: "#projects" },
    { name: "Keahlian", href: "#skills" },
    { name: "Pengalaman", href: "#experience" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral/90 backdrop-blur-md border-b border-secondary/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold text-primary tracking-wider">
            Sendy<span className="text-tertiary">.</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: "#C96F2E" }}
                className="text-primary hover:text-tertiary transition-colors duration-200 font-bold uppercase tracking-widest text-sm"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <motion.a
            href={tautanWhatsApp("Halo Sendy, saya mau tanya soal dukungan/servis komputer.")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary font-bold"
          >
            WhatsApp
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
