import { Briefcase, GraduationCap, MapPin, Laptop } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const facts = [
  { icon: MapPin, label: "Based in", value: site.location },
  { icon: GraduationCap, label: "Education", value: "BS Information Technology, Cebu Technological University (2026)" },
  { icon: Briefcase, label: "Internship", value: "E-commerce Operations Intern, Company of Cebu" },
  { icon: Laptop, label: "Focus", value: "Frontend web development with React" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="An IT graduate who enjoys building useful things for the web.">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-5 text-pretty text-lg leading-relaxed text-muted">
          <p>
            I hold a Bachelor of Science in Information Technology from Cebu Technological
            University, graduating in June 2026. My studies built my foundation in computer
            hardware, computer software, and general IT.
          </p>
          <p>
            During my internship in e-commerce operations, I handled product research and sourcing,
            analyzed pricing and competition, created logo concepts, and edited product images. The
            work taught me to stay organized, pay attention to detail, and make decisions from data.
          </p>
          <p>
            I am most interested in web development. I am building my skills in HTML, CSS,
            JavaScript, and React, and I am eager to keep learning and grow professionally on a
            team that builds real products.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="divide-y divide-border rounded-xl border border-border bg-surface">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4 p-5">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-subtle">{label}</dt>
                  <dd className="mt-1 text-sm">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
