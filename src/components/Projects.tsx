import { ExternalLink, FolderGit2, Lightbulb } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">Projects</h2>
          <div className="mt-2 w-10 h-0.5 bg-[var(--color-accent)]" />
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 stagger-children">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll group bg-[var(--color-bg-alt)] rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg hover:border-[var(--color-accent)]/30 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <FolderGit2
                    size={18}
                    className="text-[var(--color-accent)]"
                  />
                </div>
                <ExternalLink
                  size={16}
                  className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-200"
                />
              </div>

              <h3 className="text-lg font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex items-start gap-2 px-3 py-2.5 rounded-lg bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/10 flex-1">
                <Lightbulb
                  size={14}
                  className="text-[var(--color-accent)] mt-0.5 shrink-0"
                />
                <p className="text-xs text-[var(--color-accent)] leading-relaxed italic">
                  {project.highlight}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs rounded-md bg-[var(--color-bg-alt)] text-[var(--color-text-muted)] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
