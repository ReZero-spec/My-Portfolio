import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { site, isPlaceholder } from "@/data/site";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.shortName}'s Portfolio`,
  authors: [{ name: site.name }],
  keywords: [
    "Argem C. Pasuquin",
    "Junior Web Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "IT Graduate",
    "Cebu",
    "Philippines",
    "Portfolio",
  ],
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${site.name} | Portfolio`,
    title: `${site.name} | ${site.title}`,
    description: site.description,
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

// Runs before first paint so the saved theme applies without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sameAs = Object.values(site.social).filter((url) => !isPlaceholder(url));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    url: siteUrl,
    address: { "@type": "PostalAddress", addressLocality: "Cebu", addressCountry: "PH" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Cebu Technological University" },
    ...(sameAs.length ? { sameAs } : {}),
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
