# Owen Aldrich Setiawan — Portfolio

Personal portfolio site for Owen Aldrich Setiawan, AI Engineer & Full-Stack Developer. Built with React 18, Vite 5, and Tailwind CSS. All content is managed from a single data file — no component code changes needed to update text, projects, or certificates.

---

## Prerequisites

- [Node.js](https://nodejs.org/) **18 or higher**
- npm (bundled with Node)

---

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example file and add your Web3Forms key (see [CONTENT-GUIDE.md](./CONTENT-GUIDE.md#7-set-the-web3forms-api-key)):

```bash
cp .env.example .env
# then edit .env and paste your VITE_WEB3FORMS_KEY
```

### 3. Start the dev server

```bash
npm run dev
```

The site is served at `http://localhost:5173` with hot module replacement.

---

## Build

Compile and bundle for production:

```bash
npm run build
```

Output is written to the `dist/` folder.

---

## Preview Production Build

Serve the `dist/` folder locally to verify the production build before deploying:

```bash
npm run preview
```

---

## Tests

Run the full test suite (property-based tests + unit tests):

```bash
npx vitest --run
```

---

## Deploy to Vercel

1. **Import the repository** — go to [vercel.com/new](https://vercel.com/new), click **Import Git Repository**, and select this repo.
2. **Set the framework preset** — Vercel should auto-detect **Vite**. If not, set it manually under *Framework Preset → Vite*.
3. **Add the environment variable** — in the project settings go to **Settings → Environment Variables** and add:
   - **Name:** `VITE_WEB3FORMS_KEY`
   - **Value:** your Web3Forms access key (see [CONTENT-GUIDE.md](./CONTENT-GUIDE.md#7-set-the-web3forms-api-key))
   - **Environment:** Production (and optionally Preview)
4. **Deploy** — click *Deploy*. Vercel runs `npm run build` and publishes the `dist/` folder.

After the first deploy, note the production URL (e.g. `https://owenaldrich.vercel.app`) and update the `og:url` meta tag in `index.html` and your Website URL in the Web3Forms dashboard.

---

## Project Structure

```
portofolio-owen/
├── public/
│   └── images/
│       ├── profile/          # hero.jpg, about.jpg
│       ├── projects/         # <slug>/cover.jpg, <slug>/detail.jpg
│       └── certificates/     # certificate images
├── src/
│   ├── assets/icons/         # SVG tech icons for Core Stack section
│   ├── components/           # all React components
│   ├── data/
│   │   └── content.js        # ← single source of truth for all content
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── ProjectDetailPage.jsx
│   └── test/                 # Vitest test files
├── .env                      # local secrets (git-ignored)
├── .env.example              # committed template
├── CONTENT-GUIDE.md          # how to update content
└── index.html                # SEO meta tags
```

---

## Updating Content

See **[CONTENT-GUIDE.md](./CONTENT-GUIDE.md)** for step-by-step instructions on:

- Updating personal info, bio, and social links
- Adding new projects
- Adding new certificates
- Updating nav links
- Adding tech icons to the Core Stack section
- Adding real profile photos
- Configuring the Web3Forms contact form
