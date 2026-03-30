import { FlaskConical, Layers, Workflow, Compass } from "lucide-react";
import { currently } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FlaskConical,
  Layers,
  Workflow,
  Compass,
};

export default function Currently() {
  return (
    <section id="currently" className="relative py-24 px-6 bg-[var(--color-bg-alt)] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] warm-glow" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">What I&apos;m Up To</h2>
          <div className="mt-2 w-10 h-0.5 bg-[var(--color-accent)]" />
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 stagger-children">
          {currently.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.label}
                className={`animate-on-scroll ${item.rotation}`}
                style={{ marginTop: i % 2 === 1 ? "2rem" : "0" }}
              >
                <div className="mood-card rounded-xl p-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                    {Icon && <Icon size={20} className="text-[var(--color-accent)]" />}
                  </div>
                  <h3 className="text-sm font-medium text-[var(--color-accent)] mb-1">
                    {item.label}
                  </h3>
                  <p className="text-sm text-[var(--color-secondary)] leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
