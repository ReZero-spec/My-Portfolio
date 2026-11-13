export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  responsibilities: string[];
  tools: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Company of Cebu",
    role: "E-commerce Operations Intern",
    period: "February 2026 – June 2026",
    responsibilities: [
      "Conducted product research and sourcing for online marketplaces.",
      "Collected and organized product information using Google Sheets.",
      "Performed product analysis, including pricing, competition, and product viability.",
      "Used Keepa and SellerAmp for Amazon US product research.",
      "Created logo concepts and branding materials.",
      "Edited product images using Adobe Photoshop.",
    ],
    tools: ["Google Sheets", "Keepa", "SellerAmp", "Adobe Photoshop"],
  },
];
