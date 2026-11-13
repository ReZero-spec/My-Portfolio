export interface Project {
  title: string;
  description: string;
  /** Short label shown on the card, e.g. "In development". */
  status: string;
  technologies: string[];
  /** Optional screenshot in /public/images, e.g. "/images/helpdesk.png". Falls back to a visual placeholder. */
  image?: string;
  /** Leave undefined until the link is real. A missing link renders a disabled button, never a broken one. */
  liveUrl?: string;
  githubUrl?: string;
  /** Marks an entry as a template to replace. Delete the entry (or set false) once you add real content. */
  placeholder?: boolean;
}

/**
 * HOW TO ADD A PROJECT
 * 1. Copy one object below and edit the fields.
 * 2. Optionally add a screenshot to /public/images and set `image`.
 * 3. Add `liveUrl` / `githubUrl` once they exist.
 * 4. Delete the placeholder entry at the bottom when you no longer need it.
 */
export const projects: Project[] = [
  {
    title: "IT Helpdesk Ticketing System",
    description:
      "A ticketing system for managing IT support requests. Currently in development; details and links will be added once it is ready.",
    status: "In development",
    technologies: [],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This website: a responsive, accessible portfolio built with Next.js, TypeScript and Tailwind CSS.",
    status: "This site",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
  },
  {
    title: "Amazon Product Research",
    description:
      "Product research and sourcing from my internship at Company of Cebu, analyzing pricing, competition and viability for Amazon US.",
    status: "Internship work",
    technologies: ["Google Sheets", "Keepa", "SellerAmp"],
  },
  {
    title: "Your Project Name",
    description:
      "Placeholder: describe what you built, the problem it solves, and what you learned. Replace this entry in src/data/projects.ts.",
    status: "Placeholder",
    technologies: ["Technology"],
    placeholder: true,
  },
];
