# MANDARINMALLU Website — Deployment Guide (Vercel)

This package contains the complete source code of the MANDARINMALLU website, built with
Next.js. Vercel is the recommended host: it understands Next.js automatically, gives you free
HTTPS, and a global CDN. The free **Hobby** plan is enough.

You need a Vercel account: https://vercel.com/signup (sign up with email, Google or GitHub).

There are two ways to deploy. Pick one:

- **Method 1 — Vercel CLI** (terminal, no GitHub needed) — about 5 commands.
- **Method 2 — GitHub upload in the browser** (no terminal) — drag-and-drop the files, then
  import into Vercel. Future updates deploy automatically.

---

## Method 1 — Vercel CLI (no GitHub)

### Requirements

- **Node.js 20 or newer** — download the LTS installer from https://nodejs.org and run it.
- A terminal: **Terminal** on macOS, **PowerShell** on Windows.

### Steps

1. Unzip `mandarinmallu-website-source.zip`. You get a folder called `mallu`.
2. Open a terminal **inside that folder**:
   - macOS: right-click the folder → *New Terminal at Folder* (or `cd ~/Downloads/mallu`).
   - Windows: open the folder, click the address bar, type `powershell`, press Enter.
3. Install the dependencies (takes about a minute):
   ```bash
   npm install
   ```
4. Log in to Vercel (a browser window opens once; the login is remembered):
   ```bash
   npx vercel login
   ```
5. Deploy a preview:
   ```bash
   npx vercel
   ```
   Answer the questions:

   | Question | Answer |
   | --- | --- |
   | Set up and deploy "…/mallu"? | **Y** |
   | Which scope should contain your project? | your account name |
   | Link to existing project? | **N** |
   | What's your project's name? | `mandarinmallu` (or any name) |
   | In which directory is your code located? | `./` (press Enter) |
   | Want to modify these settings? | **N** |

   Vercel builds the site and prints a preview URL (`https://mandarinmallu-xxxx.vercel.app`).
   Open it and check the site.
6. Publish to production:
   ```bash
   npx vercel --prod
   ```
   The site is now live at `https://<project-name>.vercel.app`.

### Updating the site later

Replace the files in the folder with the new version you receive, then run:

```bash
npx vercel --prod
```

---

## Method 2 — GitHub upload (no terminal)

1. Create a free GitHub account at https://github.com/signup.
2. Click **New repository** → name it `mandarinmallu-website` → choose **Private** → leave
   everything else unticked → **Create repository**.
3. On the empty repository page, click the link **"uploading an existing file"**.
4. Unzip `mandarinmallu-website-source.zip` on your computer and open the `mallu` folder.
   Select **everything inside** the folder (`app`, `components`, `data`, `lib`, `public`,
   `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`,
   `README.md`, `DEPLOY.md`) and drag it onto the GitHub upload area. Use Chrome or Edge — they
   support dragging folders. Wait until every file shows a green tick.
5. Click **Commit changes**.
6. Go to https://vercel.com/new → **Import Git Repository** → connect your GitHub account →
   pick `mandarinmallu-website` → **Import**. Vercel detects *Next.js* automatically; leave the
   settings as they are → **Deploy**.
7. After about a minute the site is live at `https://<project-name>.vercel.app`.

**Updating later:** upload the changed files to the GitHub repository (same drag-and-drop) and
Vercel redeploys automatically.

---

## Connect your own domain

1. Vercel dashboard → your project → **Settings → Domains** → **Add** → enter
   `yourdomain.com` (Vercel also adds `www.yourdomain.com`).
2. Vercel shows the DNS records to create at your domain registrar (GoDaddy, Namecheap,
   Hostinger, …): usually an **A record** for `@` and a **CNAME** for `www` pointing to
   `cname.vercel-dns.com`. Copy the values exactly as Vercel shows them.
3. Wait for DNS to propagate (minutes to a few hours). HTTPS is issued automatically.

## Set the site URL (important for Google)

Once the domain works, tell the site its public address so canonical links, Open Graph
previews, the sitemap and the structured data use your domain instead of `vercel.app`:

1. Project → **Settings → Environment Variables** → **Add**:
   - Key: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://www.yourdomain.com` (no trailing slash)
   - Environment: **Production**
2. **Save**, then redeploy: **Deployments** → latest deployment → **⋯ → Redeploy**
   (or run `npx vercel --prod` if you used Method 1).

## After going live — checklist

- [ ] `https://www.yourdomain.com/` opens and the catalogue shows **Programs (395)**.
- [ ] `https://www.yourdomain.com/sitemap.xml` and `/robots.txt` open.
- [ ] Right-click → *View page source*: the title reads **MANDARINMALLU — Study in China**.
- [ ] Add the site to **Google Search Console** (https://search.google.com/search-console) and
      submit the sitemap URL `https://www.yourdomain.com/sitemap.xml`.
- [ ] Test the WhatsApp buttons and the program search on a phone.

## Editing content

| What | File |
| --- | --- |
| Phone, WhatsApp number, email, address, social links | `lib/site.ts` |
| All page text (services, FAQ, team, stats, articles, success stories) | `lib/content.ts` |
| University programs catalogue | `data/programs.json` |
| Photos (team, success stories, hero) | `public/assets/` |
| Brand colours | top of `app/globals.css` (`--primary`, `--navy`, `--accent`) |

After editing, deploy again (Method 1: `npx vercel --prod`; Method 2: upload the changed file
to GitHub).

## Troubleshooting

| Problem | Fix |
| --- | --- |
| `npx` / `npm` is not recognised | Node.js is not installed, or the terminal was open before installing — install from nodejs.org and open a new terminal. |
| "No existing credentials found" | Run `npx vercel login` again. |
| Deployed to the wrong account / team | Run `npx vercel switch`, delete the hidden `.vercel` folder inside `mallu`, then `npx vercel` again. |
| Build fails on Vercel | Make sure `data/programs.json` and the `public/assets` folder were uploaded; the project must be uploaded with its folder structure intact. |
| Site shows old content after an update | Hard-refresh the page (Ctrl/Cmd + Shift + R) or wait a minute for the CDN. |
