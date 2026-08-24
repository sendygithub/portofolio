"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

const WA_KONSULTASI =
  "https://wa.me/6281233445566?text=" +
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4 ${
        isScrolled
          ? "md:top-4 md:mx-auto md:max-w-5xl md:rounded-sm border-white/[0.06] bg-[#141619]/80 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#1C69D4] origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="flex items-center justify-between relative z-10">
        {/* Brand */}
        <Link href="/kiarakomputer" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#1C69D4] flex items-center justify-center font-semibold text-white text-[16px]">
            K
          </div>
          <span className="text-[17px] font-semibold text-white tracking-tight">
            Kia Komputer
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1 bg-white/[0.03] p-1 border border-white/[0.06]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-[13px] font-medium text-[#A8B0BC]/70 hover:text-white transition-colors rounded-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={WA_KONSULTASI}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90 font-medium rounded-sm px-5 py-2 text-[13px]"
          >
            Konsultasi
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
