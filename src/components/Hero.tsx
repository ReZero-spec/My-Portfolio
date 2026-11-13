import { ArrowDown, Download, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

const btnBase =
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-28">
      <div aria-hidden="true" className="bg-dots pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-success" />
              Open to opportunities
              <span aria-hidden="true" className="text-border">|</span>
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {site.location}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1
              id="hero-title"
              className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m Argem.
              <span className="block text-muted">I build for the web.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 font-mono text-sm text-accent">
              IT Graduate | Aspiring Frontend Developer | Technology Enthusiast
            </p>
            <p className="mt-4 max-w-xl text-pretty text-lg text-muted">
              An IT graduate passionate about technology, web development, and creating useful
              digital experiences.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className={`${btnBase} bg-fg text-bg hover:opacity-90`}>
              View My Work
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className={`${btnBase} border border-border bg-surface hover:bg-surface-2`}
            >
              Contact Me
            </a>
            <a
              href={site.resume.href}
              download={site.resume.downloadName}
              className={`${btnBase} text-muted hover:text-fg`}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="hidden lg:block">
          <div
            aria-hidden="true"
            className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm"
          >
            <div className="flex items-center gap-1.5 border-b border-border bg-surface-2 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="ml-3 font-mono text-xs text-subtle">argem.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-muted">
              <code>
                <span className="text-accent">const</span> argem = {"{"}
                {"\n"}  role: <span className="text-fg">&quot;Junior Web Developer&quot;</span>,
                {"\n"}  education: <span className="text-fg">&quot;BS Information Technology&quot;</span>,
                {"\n"}  based: <span className="text-fg">&quot;Cebu, Philippines&quot;</span>,
                {"\n"}  stack: [<span className="text-fg">&quot;HTML&quot;</span>, <span className="text-fg">&quot;CSS&quot;</span>,
                {"\n"}    <span className="text-fg">&quot;JavaScript&quot;</span>, <span className="text-fg">&quot;React&quot;</span>],
                {"\n"}  status: <span className="text-fg">&quot;Open to opportunities&quot;</span>,
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
