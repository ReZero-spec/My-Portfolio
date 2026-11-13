import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "./icons";

const linkBtn =
  "inline-flex h-9 items-center gap-1.5 rounded-md border px-3 text-sm transition-colors";

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, status, technologies, image, liveUrl, githubUrl, placeholder } = project;

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-xl border bg-surface transition-colors hover:border-subtle ${
        placeholder ? "border-dashed border-border" : "border-border"
      }`}
    >
      <div className="relative aspect-[2/1] border-b border-border bg-surface-2">
        {image ? (
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-cover"
          />
        ) : (
          <div aria-hidden="true" className="flex h-full flex-col p-4">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="h-2 w-2 rounded-full bg-border" />
              <span className="h-2 w-2 rounded-full bg-border" />
            </div>
            <div className="flex flex-1 items-center justify-center font-mono text-xs text-subtle">
              Screenshot placeholder
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs text-accent">{status}</p>
        <h3 className="mt-2 text-lg font-semibold">{title}</h3>
        <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {technologies.length > 0 ? (
            technologies.map((tech) => (
              <li key={tech} className="rounded-md border border-border bg-bg px-2 py-0.5 text-xs text-muted">
                {tech}
              </li>
            ))
          ) : (
            <li className="text-xs text-subtle">Technologies to be added</li>
          )}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBtn} border-fg bg-fg text-bg hover:opacity-90`}
            >
              Live Demo
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <span
              aria-disabled="true"
              className={`${linkBtn} cursor-not-allowed border-border text-subtle`}
            >
              Live Demo
              <span className="sr-only">(not available yet)</span>
            </span>
          )}
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBtn} border-border hover:bg-surface-2`}
            >
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <span
              aria-disabled="true"
              className={`${linkBtn} cursor-not-allowed border-border text-subtle`}
            >
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
              <span className="sr-only">(not available yet)</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
