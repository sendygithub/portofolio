"use client";
import Image from "next/image";
import DataImage from "@/public/data";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  // Variant stagger yang lebih halus
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart lembut
      },
    },
  };

  // Variant card proyek hover
  const cardVariants = {
    rest: { scale: 1, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" },
    hover: {
      scale: 1.05,
      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)",
      transition: { duration: 0.3 },
    },
  };

  // Data pengalaman untuk timeline
  const experiences = [
    {
      title: "Junior Engineering",
      company: "PT Gajah Tunggal Tbk",
      period: "2024 – Present",
      desc: [
        "Developing new modules based on user requirements",
        "Maintaining and improving existing systems",
        "Revamping legacy systems using Next.js",
      ],
      tech: ["Next.js", "Laravel", "TailwindCSS", "PostgreSQL", "MySQL", "Bitbucket", "Docker"],
    },
    {
      title: "S1. Sistem Informasi",
      company: "STMIK Insan Pembangunan",
      period: "2021 – 2024",
      desc: [
        "Built and maintained the company's corporate website",
        "Developed internal systems for production management, HR, and IT",
        "Provided technical documentation and training for internal staff",
      ],
      tech: ["Laravel", "React.js", "PostgreSQL", "MySQL", "GitHub"],
    },
    {
      title: "Freelance Fullstack Developer",
      company: "Freelance • Remote",
      period: "2020 – Present",
      desc: [
        "Developed web-based cooperative (koperasi) applications for small businesses",
        "Created corporate websites for SMEs (UMKM)",
      ],
      tech: ["Laravel", "Next.js", "React Native", "TailwindCSS", "PostgreSQL", "MySQL", "GitHub"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="py-20 max-w-5xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="sm:text-6xl/tight text-5xl/tight sm:text-center text-left font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, Saya Sendy Andreansah
        </motion.h1>
        <motion.p
          className="sm:text-center text-left mx-auto mt-8 max-w-3xl text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Lulusan Sistem Informasi Universitas Insan Pembangunan Banten dan telah bekerja sebagai Junior Engineer di PT Gajah Tunggal Tbk sejak 2013. Kini fokus di software engineering, menguasai framework Next.js dan Laravel, serta terus belajar JavaScript dan PHP untuk menciptakan aplikasi web modern dan efisien.
        </motion.p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="rounded-full max-w-xs mx-auto overflow-hidden shadow-2xl my-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={DataImage.Hero}
          alt="Sendy Andreansah"
          className="rounded-full aspect-square object-cover"
          priority
        />
      </motion.div>

      {/* Layanan */}
      <motion.section
        id="layanan"
        className="my-32 max-w-5xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-4 gap-10 md:grid-cols-2 grid-cols-1">
          {[
            { icon: "ri-javascript-line", title: "JavaScript", desc: "Menguasai JavaScript untuk membangun aplikasi web yang dinamis dan interaktif." },
            { icon: "ri-nextjs-line", title: "Next.js Framework", desc: "Mengembangkan aplikasi React full-stack dengan Next.js, memanfaatkan SSR, SSG, dan API Routes." },
            { icon: "ri-database-2-line", title: "PostgreSQL & MongoDB", desc: "Berpengalaman dalam berbagai sistem database, mulai dari SQL hingga NoSQL." },
            { icon: "ri-computer-line", title: "PC & Hardware Maintenance", desc: "Berpengalaman dalam merancang dan merakit sistem komputer untuk gaming, editing, dan komputasi intensif." },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="text-center"
            >
              <i className={`${item.icon} ri-4x text-yellow-400 mb-6 block`} />
              <p className="font-semibold text-2xl mb-3">{item.title}</p>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Proyek */}
      <section id="proyek" className="my-32 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold">Proyek yang Dikerjakan</h2>
          <p className="text-gray-300 mt-4">Sudah mengerjakan lebih dari 100 proyek besar pemerintahan</p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[1, 2, 3, 4, 5, 1].map((n, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={DataImage[`Proyek${n}`]}
                alt={`Proyek ${idx + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  {idx === 0 ? "LARAVEL HRIS " : `Proyek ${idx === 3 ? "NextJS HRIS" : idx === 4 ? "Aplikasi Booking Hotel" : idx + 1 === 2 ? "Kedua" : idx + 1 === 3 ? "Company Profile Taman Baca" : "Keenam"}`}
                </h3>
                <p className="text-gray-400 mb-8">
                  Deserunt cillum ex ea cillum ipsum duis. Aliquip elit officia dolor eiusmod incididunt tempor irure.
                </p>
                <Link
                  href="#"
                  className="block text-center py-3 bg-slate-700 hover:bg-slate-600 rounded-xl text-white font-medium transition-colors"
                >
                  Lihat Website
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Career & Experience */}
      <section className="my-40 max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-semibold text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Career & Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600" aria-hidden="true" />

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="relative mb-16 last:mb-0"
              whileHover={{ x: 20 }}
            >
              <div className="absolute left-8 w-5 h-5 bg-yellow-500 rounded-full -translate-x-1/2 border-4 border-gray-900 z-10" />

              <motion.div
                className="bg-gray-800 p-8 rounded-xl ml-16 shadow-xl border border-gray-700"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 40px -10px rgba(0,0,0,0.6)",
                  borderColor: "#eab308",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{item.company}</p>
                <p className="text-gray-500 text-xs mb-6">{item.period}</p>
                <ul className="list-disc pl-5 text-gray-300 space-y-2 text-sm mb-6">
                  {item.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span key={tech} className="bg-slate-600 text-white text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <motion.section
        id="kontak"
        className="my-40 max-w-4xl mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hubungi Saya untuk Bekerja Sama
        </motion.h2>

        <motion.form
          className="bg-gray-800/50 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-700"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Pesan terkirim! (Demo mode)");
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div initial={{ x: -30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
              <label className="block text-sm font-medium mb-2">Nama</label>
              <input
                type="text"
                required
                placeholder="Masukkan nama Anda"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </motion.div>

            <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                placeholder="email@contoh.com"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </motion.div>
          </div>

          <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="mb-8">
            <label className="block text-sm font-medium mb-2">Pesan</label>
            <textarea
              required
              rows={6}
              placeholder="Ceritakan tentang proyek atau kolaborasi yang ingin Anda ajak..."
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors resize-none"
            />
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button
              type="submit"
              className="px-12 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              Kirim Pesan
            </button>
          </motion.div>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-10 mt-16 text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a whileHover={{ scale: 1.3, rotate: 15 }} href="#"><i className="ri-youtube-fill" /></motion.a>
          <motion.a whileHover={{ scale: 1.3, rotate: -15 }} href="#"><i className="ri-instagram-fill" /></motion.a>
          <motion.a whileHover={{ scale: 1.3, rotate: 15 }} href="#"><i className="ri-twitter-fill" /></motion.a>
          <motion.a whileHover={{ scale: 1.3, rotate: -15 }} href="#"><i className="ri-reddit-fill" /></motion.a>
        </motion.div>
      </motion.section>
    </>
  );
}