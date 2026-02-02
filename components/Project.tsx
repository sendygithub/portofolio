import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projectImages } from '../lib/projectImages';



const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      y: -5,
      transition: { duration: 0.3 },
    },
  };

const Project = () => {
  return (
     <section id="proyek" className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-400">A curation of my best work in HRIS, E-commerce, and Corporate solutions.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 1, title: "Enterprise HRIS", tech: ["Laravel", "MySQL"], desc: "Comprehensive Human Resource Information System with payroll and attendance automation." },
              { id: 2, title: "Modern Hotel Booking", tech: ["Next.js", "Prisma"], desc: "High-performance booking engine with real-time availability and secure checkout." },
              { id: 3, title: "Taman Baca Platform", tech: ["React", "Firebase"], desc: "Interactive community platform for regional literacy programs and book tracking." },
              { id: 4, title: "Cooperative ERP", tech: ["Next.js", "PostgreSQL"], desc: "Internal financial ecosystem for micro-finance institutions with ledger reporting." },
              { id: 5, title: "Portfolio V2", tech: ["Framer Motion", "Tailwind"], desc: "The current high-performance portfolio highlighting modern UI/UX principles." },
              { id: 6, title: "Manufacturing Dashboard", tech: ["Node.js", "Socket.io"], desc: "Real-time production monitoring system for factory floor efficiency." },
            ].map((proj) => (
              <motion.div
                key={proj.id}
                variants={cardVariants}
                initial="rest"
                whileHover="hover"
                className="glass-card overflow-hidden group"
              >
                <div className="h-56 bg-gradient-to-br from-gray-800 to-gray-900 relative">
                  <Image
                    src={projectImages[`Proyek${proj.id <= 5 ? proj.id : 1}`] ?? projectImages.Proyek1}
                    alt={proj.title}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <div className="flex gap-2">
                      {proj.tech.map(t => (
                        <span key={t} className="text-[10px] px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-md border border-yellow-500/30 backdrop-blur-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{proj.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{proj.desc}</p>
                  <Link href="#" className="inline-flex items-center text-yellow-500 font-semibold group-hover:gap-3 transition-all">
                    Case Study <i className="ri-arrow-right-line ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Project