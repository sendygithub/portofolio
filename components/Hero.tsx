"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";


export function Hero() {
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <section
      id="home"
      
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto text-center "
      >
        
        <motion.div
  variants={itemVariants}
  className="flex flex-col items-center justify-center text-primary-gold tracking-wider uppercase"
>
  {/* FOTO */}
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
    }}
    whileHover={{ scale: 1.05 }}
    className="
      relative
      mb-4
      rounded-full
      p-1
      ring-2 ring-primary-white/40
      hover:ring-primary-gray
      transition-all
      duration-300
      shadow-lg
      hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] mt-20
    "
  >
    <Image
      src="/sendy.png"
      alt="Sendy Andreansah"
      width={500}
      height={500}
      className="
        rounded-full
        object-cover
        w-500 h-45
        sm:w-36 sm:h-36
        md:w-44 md:h-44
        lg:w-80 lg:h-80
      "
    />
  </motion.div>

  {/* NAMA */}
  <motion.span
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.4 }}
    className="text-sm sm:text-base text-3xl md:text-4xl lg:text-2xl font-bold mb-5 mt-5"
  >
    Sendy Andreansah s.kom
  </motion.span>
</motion.div>


      <motion.h1
  variants={itemVariants}
  className="
    font-bold mb-6 leading-tight
    text-4xl sm:text-5xl lg:text-6xl
    flex flex-col lg:block
  "
>
  <span className="bg-gradient-to-r from-white via-primary-gold-light to-primary-blue bg-clip-text text-transparent">
    Junior Developer
  </span>

  <span className="block lg:inline text-white lg:ml-3">
    Building Digital
  </span>

  <span className="block lg:inline bg-gradient-to-r from-primary-blue to-primary-gold bg-clip-text text-transparent lg:ml-3">
    Experiences
  </span>
</motion.h1>


        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I craft beautiful and functional web applications with modern
          technologies. Passionate about creating digital solutions that make a
          difference.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-gold to-primary-blue text-background font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-blue/50 transition-all duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-primary-gold text-primary-gold font-semibold rounded-full hover:bg-primary-gold hover:text-background transition-all duration-300"
          >
            Download CV
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-primary-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
export default Hero