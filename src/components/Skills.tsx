import { Cpu, Monitor, Search, Wrench, type LucideIcon } from "lucide-react";
import { skillGroups, type SkillIcon } from "@/data/skills";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const icons: Record<SkillIcon, LucideIcon> = {
  frontend: Monitor,
  tools: Wrench,
  it: Cpu,
  research: Search,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies and tools I work with."
      intro="Grouped by area. I list only skills I can speak to, without ratings or percentages."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon];
          return (
            <Reveal key={group.title} delay={i * 0.05}>
              <article className="h-full rounded-xl border border-border bg-surface p-6 transition-colors hover:border-subtle">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface-2 text-accent">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-medium">{group.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted">{group.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-bg px-2.5 py-1 text-sm text-fg"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
