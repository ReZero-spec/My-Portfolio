import { experience } from "@/data/experience";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I have worked.">
      <ol className="space-y-6">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`}>
            <Reveal>
              <article className="grid gap-6 rounded-xl border border-border bg-surface p-6 md:grid-cols-[220px_1fr] md:p-8">
                <header>
                  <p className="font-mono text-xs text-accent">{job.period}</p>
                  <h3 className="mt-3 text-lg font-semibold">{job.role}</h3>
                  <p className="mt-1 text-sm text-muted">{job.company}</p>
                </header>
                <div>
                  <ul className="space-y-3 text-muted">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-subtle" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tools used">
                    {job.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-md border border-border bg-bg px-2.5 py-1 text-xs text-muted"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
