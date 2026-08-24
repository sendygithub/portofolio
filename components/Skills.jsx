"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCn UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Next-Js", "JavaScript", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Prisma", "Vercel", "VS Code"],
  },
];

const marqueeSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Vercel",
  "Tailwind CSS",
  "Framer Motion",
  "PostgreSQL",
  "MongoDB",
  "ShadCn UI",
  "Prisma",
  "GitHub",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
            <span className="text-primary">Skills & Expertise</span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto font-body">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Marquee Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 overflow-hidden"
        >
          <div className="flex space-x-8">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <motion.div
                key={index}
                animate={{
                  x: [0, -50 * marqueeSkills.length],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.1,
                }}
                className="flex-shrink-0 px-6 py-3 bg-surface border border-secondary/10 text-secondary font-label uppercase tracking-widest text-xs whitespace-nowrap"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="card border border-secondary/10"
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      delay: 0.3 + index * 0.1 + skillIndex * 0.05,
                      duration: 0.4,
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-tertiary rounded-sm" />
                    <span className="text-primary/80 font-body">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
