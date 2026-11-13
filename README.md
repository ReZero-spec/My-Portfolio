# Argem C. Pasuquin | Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4, Motion, and Lucide icons.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
```

Requires Node.js 20.9 or newer.

## Project structure

```
my-portfolio/
├── public/
│   ├── images/            # project screenshots go here
│   ├── favicon.ico
│   └── resume.pdf         # PLACEHOLDER: replace with your real resume
├── src/
│   ├── app/               # layout.tsx, page.tsx, globals.css, SEO (OG image, robots, sitemap)
│   ├── components/        # one file per section + shared pieces
│   └── data/
│       ├── site.ts        # name, email, social links, nav, resume path
│       ├── skills.ts
│       ├── experience.ts
│       └── projects.ts
├── package.json
└── README.md
```

## What you need to replace

| What                     | Where                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------ |
| Email address            | `email` in `src/data/site.ts`                                                                    |
| LinkedIn and GitHub URLs | `social` in `src/data/site.ts`                                                                   |
| Resume                   | Overwrite `public/resume.pdf` (keep the filename). The current file is a labelled placeholder    |
| Projects                 | `src/data/projects.ts`. Add `liveUrl`, `githubUrl`, and an `image` in `public/images/` when real |
| Placeholder project card | Delete the "Your Project Name" entry in `src/data/projects.ts`                                   |
| Favicon                  | Replace `public/favicon.ico` if you want a different one                                         |

The "(placeholder)" labels in the Contact section disappear automatically once the email and social links no longer contain placeholder text.

## Adding a project

Copy an object in `src/data/projects.ts` and edit it. A project without `liveUrl` or `githubUrl` shows a disabled button instead of a broken link.

## Contact form

The site has no backend, so the form uses `mailto:`. It opens the visitor's email app with the message prefilled and sends nothing from the server. For real server-side submissions, add a service such as Resend or Formspree and a Next.js route handler.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New > Project**, import the repository, and keep the detected Next.js settings.
3. Optionally set `NEXT_PUBLIC_SITE_URL` to your production URL (see `.env.example`).
4. Deploy.

Or with the CLI: `npx vercel` for a preview, `npx vercel --prod` for production.

## Accessibility and SEO

Semantic landmarks, skip link, visible focus states, labelled form fields, `prefers-reduced-motion` support, metadata, Open Graph image, `robots.txt`, `sitemap.xml`, and JSON-LD for the person.
