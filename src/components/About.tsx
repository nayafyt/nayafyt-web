import { skills, languages } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="animate-on-scroll text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
          About Me
        </h2>
        <div className="mt-2 w-16 h-1 bg-[var(--color-accent)] rounded-full animate-on-scroll" />

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <p className="text-[var(--color-text-muted)] leading-relaxed text-lg">
              I like understanding how things work - whether that&apos;s a distributed
              system at scale or a neural network learning physics. Right now I
              split my time between building enterprise software at Netcompany and
              doing ML research at NCSR Demokritos, which keeps things interesting.
            </p>
            <p className="mt-4 text-[var(--color-text-muted)] leading-relaxed text-lg">
              I studied Information Technology at AUEB with a focus on
              Cybersecurity, and I&apos;ve found my sweet spot at the intersection of
              solid engineering and scientific computing. I care about writing code
              that&apos;s maintainable, not just code that works.
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
