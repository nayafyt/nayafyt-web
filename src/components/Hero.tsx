import { MapPin, ArrowDown } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-on-scroll flex justify-center mb-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-[var(--color-border)] ring-offset-4 ring-offset-[var(--color-bg)]">
            <Image
              src="/naya.jpeg"
              alt="Naya Fytali"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-sm text-[var(--color-text-muted)] mb-8">
            <MapPin size={14} />
            {personalInfo.location}
          </div>
        </div>

        <h1 className="animate-on-scroll font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--color-primary)] leading-tight">
          {personalInfo.name}
        </h1>

        <p className="animate-on-scroll mt-6 text-xl sm:text-2xl text-[var(--color-text-muted)] font-light max-w-2xl mx-auto leading-relaxed">
          {personalInfo.title} crafting enterprise web applications with modern
          technologies
        </p>

        <div className="animate-on-scroll mt-10 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-secondary)] transition-colors duration-200 cursor-pointer"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="px-8 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text)] font-medium hover:bg-[var(--color-bg-alt)] transition-colors duration-200 cursor-pointer"
          >
            View My Work
          </a>
        </div>

        <div className="animate-on-scroll mt-20">
          <a
            href="#about"
            aria-label="Scroll to about section"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors duration-200 cursor-pointer animate-bounce"
          >
            <ArrowDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
