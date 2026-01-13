"use client";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Profile", href: "#beranda" },
    { name: "Skills", href: "#layanan" },
    { name: "Projects", href: "#proyek" },
    { name: "Contact", href: "#kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 bg-black/60 backdrop-blur-lg border-b border-white/10" : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="#beranda" className="text-2xl font-bold gradient-text">
            Sendy.
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-sm uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#kontak"
                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full transition-all text-sm"
              >
                Hire Me
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <i className={isOpen ? "ri-close-line ri-2x" : "ri-menu-3-line ri-2x"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl text-gray-300 hover:text-yellow-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <Link
                href="#kontak"
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-full"
              >
                Hire Me
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
