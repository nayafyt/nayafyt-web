import { skills, languages } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="animate-on-scroll font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
          About Me
        </h2>
        <div className="mt-2 w-16 h-1 bg-[var(--color-accent)] rounded-full animate-on-scroll" />

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <p className="text-[var(--color-text-muted)] leading-relaxed text-lg">
              I&apos;m a Software Engineer based in Athens, Greece with a passion
              for building robust enterprise applications. With a BSc in
              Information Technology from AUEB and experience at Netcompany, I
              specialize in full-stack development using Java, React, and modern
              web technologies.
            </p>
            <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed text-lg">
              Alongside my industry work, I contribute to research at NCSR
              Demokritos, working on Physics-Guided Neural Networks with Python
              and PyTorch.
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-3 py-1 rounded-full text-sm bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                  >
                    {lang.name} &middot; {lang.level}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2 stagger-children">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="animate-on-scroll px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll">
              <h3 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2 stagger-children">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="animate-on-scroll px-4 py-2 rounded-lg border border-[var(--color-accent)] text-[var(--color-accent)] text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll">
              <h3 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2 stagger-children">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="animate-on-scroll px-4 py-2 rounded-lg bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[var(--color-text-muted)] text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
