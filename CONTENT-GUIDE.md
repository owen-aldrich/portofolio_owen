# Content Guide — Owen Aldrich Setiawan Portfolio

All site content lives in **one file**: `src/data/content.js`. Update that file and the site updates automatically — no component code changes needed.

---

## Table of Contents

1. [Update Personal Info](#1-update-personal-info)
2. [Add a New Project](#2-add-a-new-project)
3. [Add a New Certificate](#3-add-a-new-certificate)
4. [Update Nav Links](#4-update-nav-links)
5. [Update the Tech Stack](#5-update-the-tech-stack)
6. [Add Real Profile Photos](#6-add-real-profile-photos)
7. [Set the Web3Forms API Key](#7-set-the-web3forms-api-key)

---

## 1. Update Personal Info

Open `src/data/content.js` and edit the `personal` object at the top of the file.

| Field | Purpose | Example |
|---|---|---|
| `firstName` | Short name used in the navbar logo | `'Owen'` |
| `fullName` | Full name shown in the footer and About section | `'Owen Aldrich Setiawan'` |
| `heroName` | Exact string shown in the Hero heading | `'Owen Aldrich S'` |
| `tagline` | One-line tagline beneath the hero name | `'AI Engineer & ...'` |
| `bio` | Two-paragraph bio in the About section (array of two strings) | `['Para 1...', 'Para 2...']` |
| `focusChips` | Focus area chips below the bio | `['Machine Learning', ...]` |
| `location` | Location shown in the About info bar | `'Jakarta, Indonesia'` |
| `status` | Availability shown in the About info bar | `'Open to opportunities'` |
| `focus` | Focus label shown in the About info bar | `'AI Engineering'` |
| `email` | Contact email used in Hero links and the Contact section | `'you@example.com'` |
| `heroLinks` | Social/contact cards in the Hero section | see existing array |
| `socials` | Social links in the Contact section | see existing array |
| `footerLinks` | Navigation links in the Footer | see existing array |
| `copyright` | Copyright line in the Footer | `'© 2026 Owen Aldrich. All rights reserved.'` |

**Example — update the tagline:**

```js
// src/data/content.js
export const personal = {
  // ...
  tagline: 'Your updated tagline goes here.',
  // ...
};
```

---

## 2. Add a New Project

### Step 1 — Create the image folder

```
public/images/projects/<slug>/
```

Replace `<slug>` with a URL-safe, lowercase, hyphen-separated identifier (e.g. `my-project`).

### Step 2 — Add the cover image

Save a **2:1 landscape** image (recommended size: **882 × 440 px**) as:

```
public/images/projects/<slug>/cover.jpg
```

This image appears on the project card in the Work section.

### Step 3 — Add the detail image

Save a **wider landscape** image (recommended size: **2064 × 1040 px**) as:

```
public/images/projects/<slug>/detail.jpg
```

This image appears at the top of the project detail page.

### Step 4 — Add the data entry

Open `src/data/content.js`, find the `projects` array, and append a new object:

```js
{
  slug:        'my-project',                        // must match the folder name above
  title:       'My Project — Short Title',
  description: 'One sentence shown on the card.',
  category:    '// CATEGORY LABEL',                 // e.g. '// MACHINE LEARNING'
  coverImage:  '/images/projects/my-project/cover.jpg',
  detailImage: '/images/projects/my-project/detail.jpg',
  year:        '2025',
  techStack:   ['React', 'FastAPI', 'PostgreSQL'],   // rendered as pills
  features: [
    { title: 'Feature one',  description: 'What it does.' },
    { title: 'Feature two',  description: 'What it does.' },
  ],
  outcomes: [
    { title: 'Result one', description: 'Measurable outcome.' },
    { title: 'Result two', description: 'Measurable outcome.' },
  ],
  githubUrl: 'https://github.com/you/my-project',   // or null to hide button
  liveUrl:   'https://my-project.vercel.app',        // or null to hide button
},
```

### Step 5 — Check the result

Run `npm run dev` and navigate to `/projects/my-project` to preview the detail page, or scroll to the Work section on the home page to see the card.

---

## 3. Add a New Certificate

### Step 1 — Add the certificate image

Save a **landscape** image (recommended ratio: **1.41:1**, e.g. **1414 × 1000 px**) to:

```
public/images/certificates/<filename>.jpg
```

### Step 2 — Add the data entry

Open `src/data/content.js`, find the `certificates` array, and append a new object:

```js
{
  id:          'issuer-cert-name',           // unique kebab-case key
  title:       'Certificate Name',
  issuer:      'Issuing Organisation',
  platform:    'Platform / Provider',        // shown as "Issuer · Platform"
  date:        'Jan 2025',                   // display string
  grade:       '99%',                        // or null to hide the grade pill
  description: 'One sentence shown in the modal.',
  image:       '/images/certificates/filename.jpg',
  pdfUrl:      'https://link-to-pdf.com',    // or null to hide the PDF button
},
```

### Step 3 — Verify

Run `npm run dev`, scroll to the Work section, click the **Certificates** tab, and confirm the new card appears. Click the card to open the modal.

---

## 4. Update Nav Links

The navbar links are driven by the `navLinks` array in `src/data/content.js`.

```js
export const navLinks = [
  { label: 'About',        id: 'about'        },
  { label: 'Work',         id: 'work'         },
  { label: 'Stack',        id: 'stack'        },
  { label: 'Capabilities', id: 'capabilities' },
  { label: 'Contact',      id: 'contact'      },
];
```

- `label` — text shown in the nav pill
- `id` — the `id` attribute of the target `<section>` on `HomePage`

To reorder links, reorder the objects. To rename a link, change `label`. The `id` must match an existing `<section id="...">` on the page.

---

## 5. Update the Tech Stack

The Core Stack section is driven by the `coreStack` array in `src/data/content.js`. Each entry is a card with a `title`, `subtitle`, and `items` array.

### To add a new technology icon

**Step 1 — Save the SVG icon**

Place a 22 × 22 px SVG file in:

```
src/assets/icons/<name>.svg
```

**Step 2 — Add an entry to the relevant card**

Open `src/data/content.js` and find the appropriate card object inside `coreStack`. Add a new item:

```js
{ name: 'MyTech', icon: 'my-tech.svg' }
```

The icon filename must match exactly (case-sensitive). If no matching file is found, the tech name is displayed as a text badge automatically — no component changes needed.

### To add a new stack card

Append a new object to the `coreStack` array:

```js
{
  title:    'New Category',
  subtitle: 'Short subtitle line',
  items: [
    { name: 'Tool A', icon: 'tool-a.svg' },
    { name: 'Tool B', icon: null },          // null shows a text badge
  ],
},
```

---

## 6. Add Real Profile Photos

Profile photo placeholders are shown until real images are added. Place the actual files at the paths below — the placeholders disappear automatically.

| Image | Path | Recommended size |
|---|---|---|
| Hero portrait (right column) | `public/images/profile/hero.jpg` | 460 × 540 px (portrait) |
| About photo (square card) | `public/images/profile/about.jpg` | 720 × 720 px (1:1) |

Both files should be JPG. After adding them, run `npm run dev` to confirm they load correctly.

---

## 7. Set the Web3Forms API Key

The contact form submits via [Web3Forms](https://web3forms.com). Without a valid API key the form renders a configuration error and the submit button is disabled.

### Step 1 — Get your access key

1. Go to [web3forms.com](https://web3forms.com) and sign in.
2. Create a new form and copy the **Access Key**.

### Step 2 — Add the key locally

Open `.env` at the project root and paste your key:

```
VITE_WEB3FORMS_KEY=your-access-key-here
```

Restart the dev server (`npm run dev`) after editing `.env`.

> **Note:** `.env` is listed in `.gitignore` and will never be committed to the repository. Do not share this key publicly.

### Step 3 — Add the key in Vercel

1. Open your project in the [Vercel dashboard](https://vercel.com).
2. Go to **Settings → Environment Variables**.
3. Add a variable named `VITE_WEB3FORMS_KEY` with your access key as the value.
4. Set the environment to **Production** (and optionally Preview).
5. Trigger a new deployment — the contact form will be live.

### Step 4 — Update the Website URL in Web3Forms

After deployment, go back to your Web3Forms dashboard and set the **Website URL** to your production domain (e.g. `https://owenaldrich.vercel.app`). This enables spam filtering tied to your domain.
