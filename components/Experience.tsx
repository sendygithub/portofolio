import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Junior Engineering",
    company: "PT Gajah Tunggal Tbk",
    period: "2024 – Present",
    desc: [
      "Developing mission-critical internal modules to streamline production workflows.",
      "Refactoring legacy monolith systems into modern micro-services using Next.js and API-first architecture.",
      "Optimizing PostgreSQL database queries, resulting in 30% faster data retrieval for inventory reports.",
    ],
    tech: ["Next.js", "Laravel", "TailwindCSS", "PostgreSQL", "Docker"],
  },
  {
    title: "Sistem Informasi",
    company: "Various Clients • Freelance",
    period: "2020 – 2024",
    desc: [
      "Architected end-to-end web solutions for cooperatives (Koperasi) and local SMEs.",
      "Integrated secure payment gateways and real-time notification systems.",
      "Delivered 10+ high-performance corporate websites with SEO optimization.",
    ],
    tech: ["React.js", "Laravel", "Postgres", "Redux", "Framer Motion"],
  },
  {
    title: "Fullstack Developer (Specialist)",
    company: "Various Clients • Freelance",
    period: "2020 – 2024",
    desc: [
      "Architected end-to-end web solutions for cooperatives (Koperasi) and local SMEs.",
      "Integrated secure payment gateways and real-time notification systems.",
      "Delivered 10+ high-performance corporate websites with SEO optimization.",
    ],
    tech: ["React.js", "Laravel", "Postgres", "Redux", "Framer Motion"],
  },
];

export function Experience() {
  return (
    <section className="py-5 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-primary">
            Career Journey
          </h2>
          <div className="h-0.5 w-24 bg-tertiary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto border-l-2 border-secondary/20 pl-8 ml-4 md:ml-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0"
            >
              <div className="absolute -left-10.5 top-1.5 w-4 h-4 bg-tertiary rounded-sm shadow-[0_0_15px_rgba(201,111,46,0.5)]" />
              <br />
              <span className="text-tertiary font-label uppercase tracking-widest text-xs mb-2 block">
                {exp.period}
              </span>

              <h3 className="text-2xl font-display font-bold text-primary">
                {exp.title}
              </h3>
              <p className="text-secondary font-body mb-6">{exp.company}</p>
              <ul className="space-y-3 mb-6">
                {exp.desc.map((d, idx) => (
                  <li
                    key={idx}
                    className="text-primary/70 font-body flex items-start"
                  >
                    <span className="text-tertiary mr-3 mt-1">◆</span>
                    {d}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-surface border border-secondary/10 text-xs text-secondary font-label uppercase tracking-widest"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
