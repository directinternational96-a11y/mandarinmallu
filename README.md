# MANDARINMALLU — Study in China

Marketing site for MANDARINMALLU, rebuilt on **Next.js 15 (App Router) + TypeScript** so every
section is server-rendered HTML (SEO-friendly), with metadata, Open Graph, JSON-LD, `sitemap.xml`
and `robots.txt` built in.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
npm run start    # serve the production build
npm run lint
```

## Deploy (Vercel)

Push the repo to GitHub and import it in Vercel — the framework is auto-detected, no extra config.
Or run `npx vercel` from this folder.

If the site moves to a custom domain, set `NEXT_PUBLIC_SITE_URL=https://your-domain.com` in the
Vercel project settings so canonical/OG URLs, the sitemap and structured data point at it.

## Where things live

| Path | Purpose |
| --- | --- |
| `lib/site.ts` | Brand name, phone, WhatsApp number, email, address, social links, site URL |
| `lib/content.ts` | All page copy: nav, majors, process steps, values, team, services, stats, insights, FAQ, success stories, search suggestions |
| `lib/programs.ts` | Program/university normalisation and formatting helpers |
| `lib/catalogue.ts` | Build-time loader that reads `data/programs.json` |
| `data/programs.json` | University programs dataset (395 programs). Replace this file to update the catalogue, then redeploy |
| `components/` | One component per page section (`Hero`, `Programs`, `Faq`, …) |
| `app/globals.css` | All styling (plain CSS, grouped by section). Design tokens live in `:root`: colours (`--primary` scholar navy, `--navy`, `--accent` gold, `--tint*`), corner radii (`--r-sm/md/lg` = 4/6/10px) and font stacks (`--font-head` serif, `--font-body` sans). Change them there to re-theme |
| `app/layout.tsx` | Fonts (Source Serif 4 for headings, Source Sans 3 for body, self-hosted via `next/font`), `<head>` metadata, Open Graph / Twitter cards |
| `app/sitemap.ts`, `app/robots.ts` | Generated `sitemap.xml` and `robots.txt` |
| `public/assets/` | Images (hero, logo, team photos, success stories) |

## Updating content

- **Text / links / contact details** → edit `lib/site.ts` or `lib/content.ts`.
- **Programs catalogue** → replace `data/programs.json` (same shape as before, `raw_json` not needed).
- **Team or success-story photos** → drop the image in `public/assets/` and update the path in `lib/content.ts`.
