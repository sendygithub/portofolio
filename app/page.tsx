"use client";

import Hero from "../components/Hero";
import { Footer } from "../components/Footer";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
