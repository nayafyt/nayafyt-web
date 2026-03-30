import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nayafytali",
    href: personalInfo.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/nayafyt",
    href: personalInfo.github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">Let&apos;s Connect</h2>
          <div className="mt-2 w-10 h-0.5 bg-[var(--color-accent)]" />
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <MapPin size={14} />
              {personalInfo.location}
            </div>
          </div>

          <div className="space-y-4 stagger-children">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="animate-on-scroll group flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <link.icon size={18} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <span className="text-sm font-medium text-[var(--color-primary)]">{link.label}</span>
                  <span className="block text-xs text-[var(--color-text-muted)]">{link.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
