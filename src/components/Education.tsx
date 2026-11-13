import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background.">
      <Reveal>
        <article className="flex items-start gap-5 rounded-xl border border-border bg-surface p-6 md:p-8">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-surface-2 text-accent">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg font-semibold">Bachelor of Science in Information Technology</h3>
            <p className="mt-1 text-muted">Cebu Technological University</p>
            <p className="mt-3 font-mono text-xs text-accent">Graduated June 2026</p>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
