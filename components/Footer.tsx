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
      className="relative border-t border-secondary/10 bg-neutral"
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-tertiary/30" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-5"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-2xl font-display font-bold mb-4 text-primary">
              Sendy<span className="text-tertiary">.</span>
            </h3>
            <p className="text-primary/70 mb-6 leading-relaxed font-body">
              Creating exceptional digital experiences through innovative design
              and cutting-edge technology.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-primary/80 font-body">
                <span className="text-tertiary">◈</span>
                <span>Banten, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-primary/80 font-body">
                <span className="text-tertiary">✉</span>
                <a
                  href="mailto:sendy.lazada@gmail.com"
                  className="hover:text-tertiary transition-colors"
                >
                  sendy.lazada@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-display font-bold mb-6 text-primary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#C96F2E" }}
                    className="text-primary/70 hover:text-tertiary transition-colors flex items-center gap-2 font-body"
                  >
                    <span className="text-tertiary">→</span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-display font-bold mb-6 text-primary">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <motion.div
                    whileHover={{ x: 5, color: "#C96F2E" }}
                    className="text-primary/70 hover:text-tertiary transition-colors flex items-center gap-2 font-body"
                  >
                    <span className="text-tertiary">•</span>
                    {service}
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-display font-bold mb-6 text-primary">
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
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="w-12 h-12 bg-surface border border-secondary/20 rounded-sm flex items-center justify-center text-xl hover:bg-tertiary hover:border-tertiary transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div variants={itemVariants}>
          <p className="text-sm text-secondary font-body mt-1">
            &copy; {new Date().getFullYear()} Sendy Andreansah. All rights
            reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-tertiary/20" />
    </footer>
  );
}
export default Footer;
