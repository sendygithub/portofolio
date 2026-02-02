"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Rumah Peradaban Subang",
    description: "Modern e-commerce solution with real-time inventory management and secure payment integration.",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    image: "💬",
    gradient: "from-primary-gold to-primary-blue",
    url: "https://rpsncsubang.vercel.app",
  },
  {
    id: 2,
    title: "Human Resources Management System",
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "📋",
    gradient: "from-primary-blue to-primary-gold",
    url: "https://hrms-psi.vercel.app",
  },
  {
    id: 3,
    title: "Engineering Job Order",
    description: "Beautiful portfolio website showcasing creative work with smooth animations and interactions.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "🎨",
    gradient: "from-primary-gold to-primary-blue",
  },
  {
    id: 4,
    title: "Human Resources Dashboard",
    description: "Comprehensive analytics dashboard with data visualization and real-time metrics tracking.",
    tech: ["React", "D3.js", "Python", "PostgreSQL"],
    image: "📊",
    gradient: "from-primary-blue to-primary-gold",
  },
  {
    id: 5,
    title: "RKK-Petshop",
    description: "Social networking platform with feed, messaging, and content sharing capabilities.",
    tech: ["Next.js", "Prisma", "Vercel Blob", "AWS"],
    image: "🛒",
    gradient: "from-primary-gold to-primary-blue",
    url: "https://rkk-petshop.vercel.app"
  },
  {
    id: 6,
    title: "Basic-Logic",
    description: "Interactive learning platform with courses, quizzes, and progress tracking.",
    tech: ["Vue.js", "Express", "MongoDB", "Stripe"],
    image: "📚",
    gradient: "from-primary-blue to-primary-gold",
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
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-gold to-primary-blue bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
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
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary-gold/50 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              
              <div className="relative z-10">
                <div className="text-5xl mb-4">{project.image}</div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  whileHover={{ x: 5 }}
                  className="text-primary-gold font-semibold flex items-center gap-2 group-hover:text-primary-blue transition-colors"
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
