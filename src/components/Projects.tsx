import { projects } from "@/data/projects";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work."
      intro="Projects and work samples. Links appear as soon as each one is published."
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <li key={project.title}>
            <Reveal delay={(i % 2) * 0.05} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
