"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Rumah Peradaban Subang",
    description:
      "Modern e-commerce solution with real-time inventory management and secure payment integration.",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    image: "📚",
    url: "https://rpsncsubang.vercel.app",
  },
  {
    id: 2,
    title: "Bintang Audio",
    description:
      "Rental platform for a premium audio equipment brand, featuring a sleek UI and secure checkout.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    image: "💽",
    url: "https://bintang-audio.vercel.app",
  },
  {
    id: 3,
    title: "Human Resources Divisi 4",
    description:
      "Comprehensive Human Resource Information System with payroll and attendance automation.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "🏗️",
    url: "https://divisi-4.vercel.app",
  },
  {
    id: 4,
    title: "Sky-Fish online store",
    description:
      "online shop for a premium colectible fish and rare fish, featuring a sleek UI and secure checkout.",
    tech: ["React", "D3.js", "Python", "PostgreSQL"],
    image: "🐠",
    url: "https://sky-fish.vercel.app",
  },
  {
    id: 5,
    title: "RKK-Petshop",
    description:
      "A modern full-stack PetShop web application built with Next.js, featuring product management, inventory tracking, customer management",
    tech: ["Next.js", "Prisma", "Vercel Blob", "AWS"],
    image: "🐶",
    url: "https://rkk-petshop.vercel.app",
  },
  {
    id: 6,
    title: "Rumah Sakit setia budi",
    description:
      "Interactive learning platform with courses, quizzes, and progress tracking.",
    tech: ["React.js", "Next.js", "PostgreSQL", "Stripe"],
    image: "🏪",
    url: "https://rumah-sakit-setia-budi.vercel.app",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            <span className="text-primary">Featured Projects</span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto font-body">
            A collection of my recent work showcasing creativity and technical
            expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative card border border-secondary/10 hover:border-tertiary/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-tertiary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="text-5xl mb-4">{project.image}</div>
                <h3 className="text-2xl font-display font-bold mb-3 text-primary group-hover:text-tertiary transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary/70 mb-4 leading-relaxed font-body">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-surface border border-secondary/20 text-xs text-secondary font-label uppercase tracking-widest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  whileHover={{ x: 5 }}
                  className="text-tertiary font-label uppercase tracking-widest text-xs flex items-center gap-2 group-hover:text-tertiary transition-colors"
                  href={project.url}
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
