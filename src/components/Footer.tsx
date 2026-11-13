import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./icons";

const iconLink =
  "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-surface-2 hover:text-fg";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium">{site.name}</p>
          <p className="mt-1 text-sm text-subtle">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className={iconLink}>
            <GithubIcon className="h-4 w-4" />
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className={iconLink}>
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="#home"
            className="inline-flex h-9 items-center gap-2 rounded-md border border-border px-3 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
