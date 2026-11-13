import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{eyebrow}</p>
          <h2
            id={`${id}-title`}
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {title}
          </h2>
          {intro && <p className="mt-4 text-pretty text-muted">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
