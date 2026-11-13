export type SkillIcon = "frontend" | "tools" | "it" | "research";

export interface SkillGroup {
  title: string;
  description: string;
  icon: SkillIcon;
  skills: string[];
}

// No proficiency ratings on purpose: list only what you can speak to in an interview.
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    description: "The core technologies I use to build for the web.",
    icon: "frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Tools & Software",
    description: "Software I used in day-to-day internship work.",
    icon: "tools",
    skills: ["Google Sheets", "Adobe Photoshop", "Canva", "Keepa", "SellerAmp"],
  },
  {
    title: "IT Knowledge",
    description: "Foundations from my Information Technology degree.",
    icon: "it",
    skills: ["Computer Hardware", "Computer Software", "Computer Literacy"],
  },
  {
    title: "Research & Creative",
    description: "Skills from e-commerce operations and design tasks.",
    icon: "research",
    skills: [
      "Amazon Product Research",
      "Product Sourcing",
      "Product Analysis",
      "Data Organization",
      "Logo Design",
      "Photo Editing",
    ],
  },
];
