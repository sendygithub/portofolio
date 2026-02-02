import React from 'react'
import { motion } from 'framer-motion'
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
    }
  ];
export function Experience () {
  return (
    <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-gold to-primary-blue bg-clip-text text-transparent">Career Journey</h2>
            <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto border-l-2 bg-gradient-to-r from-primary-gold to-primary-blue bg-clip-text text-transparent pl-8 ml-4 md:ml-auto">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative mb-16 last:mb-0"
              >
                 
                <div className="absolute -left-10.5 top-1.5 w-5 h-5 bg-yellow-500 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
                <br></br>
                <span className="text-yellow-500 font-mono text-sm mb-2 block">{exp.period}</span>
                
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <p className="text-gray-400 mb-6">{exp.company}</p>
                <ul className="space-y-3 mb-6">
                  {exp.desc.map((d, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <i className="ri-checkbox-circle-line text-yellow-500 mr-3 mt-1" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Experience