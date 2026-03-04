import { Heart } from "lucide-react";
import { volunteer } from "@/lib/data";

export default function Volunteer() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="animate-on-scroll font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
          Volunteer Experience
        </h2>
        <div className="mt-2 w-16 h-1 bg-[var(--color-accent)] rounded-full animate-on-scroll" />

        <div className="mt-12 grid sm:grid-cols-2 gap-6 stagger-children">
          {volunteer.map((vol, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-white rounded-2xl p-6 border border-[var(--color-border)]"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center">
                  <Heart size={18} className="text-rose-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-primary)]">
                    {vol.org}
                  </h3>
                  <p className="text-sm text-[var(--color-accent)] font-medium">
                    {vol.role}
                  </p>
                  {vol.period && (
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {vol.period}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {vol.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
