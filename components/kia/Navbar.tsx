"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

const WA_KONSULTASI =
  "https://wa.me/6281281916880?text=" +
  encodeURIComponent("Halo Kia Komputer, saya mau konsultasi gratis");

const navLinks = [
  { name: "Showroom", href: "/showroom" },
  { name: "Servis", href: "/servis" },
  { name: "Harga", href: "/harga" },
  { name: "FAQ", href: "/faq" },
];

export default function KiaNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "border-b border-border bg-background"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Garis rambut progres gulir — bukan glow */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px] origin-left bg-primary z-[60]"
        style={{ scaleX }}
      />

      <div className="shell flex items-center justify-between py-5">
        {/* Brand */}
        <Link href="/kiarakomputer" className="flex items-baseline gap-2">
          <span className=" text-[20px] font-bold leading-none text-foreground">
            Kia Komputer
          </span>
          <span className="h-1.5 w-1.5 translate-y-[-2px] bg-primary" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="eyebrow transition-transform duration-300 hover:translate-x-1 hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions — satu aksi terisi saja */}
        <div className="flex items-center gap-3">
          <a
            href={WA_KONSULTASI}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent px-4 py-2.5"
          >
            Konsultasi
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
