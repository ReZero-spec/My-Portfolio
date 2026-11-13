"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { displayUrl, isPlaceholder, site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const details = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: displayUrl(site.social.linkedin), href: site.social.linkedin, external: true },
  { icon: GithubIcon, label: "GitHub", value: displayUrl(site.social.github), href: site.social.github, external: true },
  { icon: MapPin, label: "Location", value: site.location },
] as const;

const fieldClass =
  "mt-2 w-full rounded-md border border-border bg-bg px-3.5 py-2.5 text-sm placeholder:text-subtle focus:border-accent focus:outline-none focus-visible:outline-none";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "opened">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("opened");
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together."
      intro="Open to junior web development roles, internships, and freelance opportunities. Send a message and I will get back to you."
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ul className="divide-y divide-border rounded-xl border border-border bg-surface">
            {details.map((item) => {
              const Icon = item.icon;
              const placeholder = "href" in item && isPlaceholder(item.value);
              const content = (
                <>
                  <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-subtle">
                      {item.label}
                      {placeholder && <span className="ml-2 normal-case tracking-normal text-accent">(placeholder)</span>}
                    </span>
                    <span className="mt-1 block truncate text-sm">{item.value}</span>
                  </span>
                </>
              );
              return (
                <li key={item.label}>
                  {"href" in item ? (
                    <a
                      href={item.href}
                      {...("external" in item ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-4 p-5 transition-colors hover:bg-surface-2"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-5">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-surface p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={fieldClass} />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" name="message" required rows={5} placeholder="How can I help?" className={`${fieldClass} resize-y`} />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-fg px-5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send via email
              </button>
              <p role="status" className="text-sm text-muted">
                {status === "opened"
                  ? "Your email app should open with the message ready to send."
                  : "Opens your email app with the message prefilled."}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
