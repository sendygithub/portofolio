"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socialLinks = [
  { name: "GitHub", icon: "💻", url: "#" },
  { name: "LinkedIn", icon: "💼", url: "#" },
  { name: "Twitter", icon: "🐦", url: "#" },
  { name: "Instagram", icon: "📷", url: "#" },
  { name: "Email", icon: "✉️", url: "#" },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
];

const services = [
  "Web Development",
  "UI/UX Design",
  "Mobile Apps",
  "Consulting",
];

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer
      ref={ref}
      className="relative border-t border-white/10 bg-background"
    >
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-5"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-gold to-primary-blue bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Creating exceptional digital experiences through innovative design
              and cutting-edge technology.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-white/80">
                <span className="text-primary-gold">📍</span>
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <span className="text-primary-blue">✉️</span>
                <a
                  href="mailto:contact@portfolio.com"
                  className="hover:text-primary-gold transition-colors"
                >
                  contact@portfolio.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <span className="text-primary-gold">📞</span>
                <a
                  href="tel:+621234567890"
                  className="hover:text-primary-blue transition-colors"
                >
                  +62 123 456 7890
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#d4af37" }}
                    className="text-white/70 hover:text-primary-gold transition-colors flex items-center gap-2"
                  >
                    <span className="text-primary-blue">→</span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <motion.div
                    whileHover={{ x: 5, color: "#00d4ff" }}
                    className="text-white/70 hover:text-primary-blue transition-colors flex items-center gap-2"
                  >
                    <span className="text-primary-gold">•</span>
                    {service}
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media & Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-white">
              Connect With Me
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-xl hover:bg-gradient-to-r hover:from-primary-gold hover:to-primary-blue hover:border-transparent transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div>
              <p className="text-white/70 text-sm mb-3">Subscribe to Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary-gold transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-gold to-primary-blue text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-blue/50 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div variants={itemVariants}>
          <p className="text-sm text-white/70 mt-1">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-50" />
    </footer>
  );
}
export default Footer;