/**
 * Central site configuration.
 * Replace every value marked "PLACEHOLDER" with your real details.
 */
export const site = {
  name: "Argem C. Pasuquin",
  shortName: "Argem",
  title: "Junior Web Developer | IT Graduate",
  description:
    "Portfolio of Argem C. Pasuquin, an IT graduate from Cebu, Philippines, building for the web with HTML, CSS, JavaScript and React.",
  location: "Cebu, Philippines",

  // PLACEHOLDER: replace with your real contact details.
  email: "your.email@example.com",
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-profile",
  },

  // Put your actual resume at public/resume.pdf (same filename) to replace the placeholder file.
  resume: {
    href: "/resume.pdf",
    downloadName: "ArgemPasuquinResume.pdf",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

/** True while a value still contains placeholder text such as "your-username". */
export function isPlaceholder(value: string): boolean {
  return /your[-._ ]|example\.com/i.test(value);
}

/** Strip the protocol so links read cleanly, e.g. "github.com/your-username". */
export function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, "");
}
