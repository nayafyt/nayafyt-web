import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-[var(--color-bg-alt)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="animate-on-scroll font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
          Education
        </h2>
        <div className="mt-2 w-16 h-1 bg-[var(--color-accent)] rounded-full animate-on-scroll" />

        <div className="mt-12 space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-white rounded-2xl p-8 border border-[var(--color-border)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <GraduationCap
                      size={18}
                      className="text-[var(--color-accent)]"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                      {edu.institution}
                    </h3>
                    <p className="text-[var(--color-text-muted)]">
                      {edu.degree}
                    </p>
                    {edu.note && (
                      <p className="text-sm text-[var(--color-accent)] mt-1 font-medium">
                        {edu.note}
                      </p>
                    )}
                  </div>
                </div>
                <span className="text-sm text-[var(--color-text-muted)] font-medium whitespace-nowrap sm:ml-4">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
