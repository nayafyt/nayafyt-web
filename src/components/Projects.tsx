import { ExternalLink, FolderGit2 } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="animate-on-scroll font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
          Projects
        </h2>
        <div className="mt-2 w-16 h-1 bg-[var(--color-accent)] rounded-full animate-on-scroll" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll group bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg hover:border-[var(--color-accent)]/30 transition-all duration-300 cursor-pointer flex flex-col"
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

              <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.split(", ").map((t) => (
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
