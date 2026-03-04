"use client";

import { useScrollAnimation } from "@/lib/useScrollAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Volunteer from "@/components/Volunteer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Volunteer />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
