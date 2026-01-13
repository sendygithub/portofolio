"use client";
import Image from "next/image";
import DataImage from "@/public/data";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
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

  const skills = [
    { name: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"], icon: "ri-layout-masonry-line" },
    { name: "Backend", items: ["Laravel", "Node.js", "Express", "REST API"], icon: "ri-server-line" },
    { name: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"], icon: "ri-database-2-line" },
    { name: "Tools & Others", items: ["Git/GitHub", "Docker", "Postman", "CI/CD"], icon: "ri-tools-line" },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section id="beranda" className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            scale: { type: "spring", damping: 15, stiffness: 100 }
          }}
          className="relative mb-12"
        >
          <div className="absolute -inset-6 bg-yellow-500/20 blur-[100px] rounded-full animate-pulse" />
          <Image
            src={DataImage.Hero}
            alt="Sendy Andreansah"
            width={220}
            height={220}
            className="relative rounded-full aspect-square object-cover border-4 border-yellow-500 shadow-[0_0_50px_rgba(234,179,8,0.3)] hover:scale-105 transition-transform duration-500"
            priority
          />
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="flex items-center justify-center gap-2 mb-4" variants={itemVariants}>
            <span className="w-8 h-[1px] bg-yellow-500"></span>
            <p className="text-yellow-500 font-mono text-sm tracking-widest uppercase">Available for work</p>
            <span className="w-8 h-[1px] bg-yellow-500"></span>
          </motion.div>

          <motion.h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none" variants={itemVariants}>
            Building <span className="gradient-text">Scalable</span> <br />
            Digital <span className="gradient-text">Ecosystems</span>
          </motion.h1>

          <motion.p className="max-w-xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-light" variants={itemVariants}>
            Hi, I&apos;m <span className="text-white font-bold underline decoration-yellow-500 decoration-2 underline-offset-4">Sendy Andreansah</span>.
            Crafting high-performance web experiences with precision and modern architecture.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-6" variants={itemVariants}>
            <Link href="#proyek" className="group relative px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-black rounded-full transition-all overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 uppercase text-xs tracking-widest">
                View My Work <i className="ri-arrow-right-up-line transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
            <Link href="#kontak" className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 backdrop-blur-sm transition-all text-xs uppercase tracking-widest">
              Let&apos;s Talk
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Skills Section */}
      <section id="layanan" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
            <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 hover:border-yellow-500/50 transition-colors group"
              >
                <i className={`${skill.icon} text-4xl text-yellow-500 mb-6 block group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-yellow-500/50 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
                    src={DataImage[`Proyek${proj.id <= 5 ? proj.id : 1}`]}
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

      {/* Experience Timeline */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Career Journey</h2>
            <div className="h-1.5 w-24 bg-yellow-500 mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto border-l-2 border-gray-800 pl-8 ml-4 md:ml-auto">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative mb-16 last:mb-0"
              >
                <div className="absolute -left-10.5 top-1.5 w-5 h-5 bg-yellow-500 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
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

      {/* Contact Section */}
      <section id="kontak" className="py-32">
        <div className="container mx-auto px-6">
          <div className="glass-card max-w-5xl mx-auto overflow-hidden grid lg:grid-cols-2 shadow-2xl">
            <div className="p-12 bg-yellow-500 text-black flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-black mb-6">Let&apos;s Build <br />Something Great</h2>
                <p className="text-black/70 font-medium mb-12">
                  Open for collaborations, freelance opportunities, or just a coffee chat.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                      <i className="ri-mail-line text-2xl" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold opacity-50">Email</p>
                      <p className="font-bold">sendy.andreansah@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                      <i className="ri-map-pin-line text-2xl" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold opacity-50">Location</p>
                      <p className="font-bold">Banten, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                {["linkedin", "github", "instagram", "twitter"].map(social => (
                  <Link key={social} href="#" className="w-10 h-10 bg-black/10 hover:bg-black/20 rounded-lg flex items-center justify-center transition-colors">
                    <i className={`ri-${social}-line text-xl`} />
                  </Link>
                ))}
              </div>
            </div>

            <form className="p-12 space-y-6 bg-black/20" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-400">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors resize-none" placeholder="How can I help you?" />
              </div>
              <button className="w-full py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-extrabold rounded-xl transition-all shadow-lg hover:shadow-yellow-500/20 uppercase tracking-widest text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}