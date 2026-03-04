import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[var(--color-bg-alt)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="animate-on-scroll font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
          Experience
        </h2>
        <div className="mt-2 w-16 h-1 bg-[var(--color-accent)] rounded-full animate-on-scroll" />

        <div className="mt-12 space-y-8">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <Briefcase size={18} className="text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                      {exp.role}
                    </h3>
                    <p className="text-[var(--color-accent)] font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {exp.location}
                    </p>
                    {exp.note && (
                      <p className="text-sm text-[var(--color-text-muted)] italic mt-1">
                        {exp.note}
                      </p>
                    )}
                  </div>
                </div>
                <span className="text-sm text-[var(--color-text-muted)] font-medium whitespace-nowrap sm:ml-4">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3 ml-14">
                {exp.points.map((point, j) => (
                  <li
                    key={j}
                    className="text-[var(--color-text-muted)] leading-relaxed relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-accent)]"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              {exp.technologies && (
                <div className="mt-6 ml-14 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
