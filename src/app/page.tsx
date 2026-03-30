"use client";

import { useScrollAnimation } from "@/lib/useScrollAnimation";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Currently from "@/components/Currently";
import Education from "@/components/Education";
import Volunteer from "@/components/Volunteer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <CustomCursor />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Currently />
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
