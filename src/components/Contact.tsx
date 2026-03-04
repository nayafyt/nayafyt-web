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
    <section id="contact" className="py-24 px-6 bg-[var(--color-primary)]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="animate-on-scroll font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white">
          Let&apos;s Connect
        </h2>
        <div className="mt-2 w-16 h-1 bg-[var(--color-accent)] rounded-full mx-auto animate-on-scroll" />

        <p className="animate-on-scroll mt-6 text-zinc-400 text-lg max-w-xl mx-auto">
          I&apos;m always open to discussing new opportunities, interesting
          projects, or just having a chat about technology.
        </p>

        <div className="animate-on-scroll mt-4 inline-flex items-center gap-2 text-zinc-400 text-sm">
          <MapPin size={14} />
          {personalInfo.location}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="animate-on-scroll group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--color-accent)]/50 transition-all duration-300 cursor-pointer"
            >
              <link.icon
                size={22}
                className="text-zinc-400 group-hover:text-[var(--color-accent)] transition-colors duration-200"
              />
              <span className="text-sm font-medium text-white">
                {link.label}
              </span>
              <span className="text-xs text-zinc-500">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
