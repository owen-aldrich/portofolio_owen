# Implementation Plan: Owen Aldrich Portfolio

## Overview

Pixel-accurate implementation of the Figma design as a React 18 + Vite 5 static site with Tailwind CSS,
react-router-dom v6, and Web3Forms contact submission. All content flows from `src/data/content.js`.
The project scaffold (package.json, vite.config.js, tailwind.config.js, index.html, index.css, main.jsx)
and a partial Navbar are already present — tasks pick up from where the scaffold leaves off.

---

## Tasks

---

### Phase 1 — Project Scaffold (update & complete existing files)

- [x] 1. Verify and complete the project scaffold files
  - [x] 1.1 Update `vite.config.js` to add the Vitest test block (environment jsdom, setupFiles, globals true) so the same config handles both dev and test
    - Add `test: { environment: 'jsdom', setupFiles: ['./src/test/setup.js'], globals: true }` inside `defineConfig`
    - _Requirements: 18.1 — Design: Test Configuration_
  - [x] 1.2 Update `index.html` to set `<title>Owen Aldrich Setiawan</title>`, the correct `og:title`, `og:description`, `og:url`, and `og:image` meta tags using the exact name and tagline from Figma
    - `<meta name="description" content="Owen Aldrich Setiawan — AI Engineer & Full-Stack Developer crafting scalable products, end to end, from model to interface.">`
    - `<meta property="og:title" content="Owen Aldrich Setiawan">`
    - `<meta property="og:url" content="">` (to be filled after deployment)
    - _Requirements: 16.1, 16.2_
  - [x] 1.3 Create `.env` at project root with `VITE_WEB3FORMS_KEY=` (empty placeholder)
    - _Requirements: 11.9_
  - [x] 1.4 Create `.env.example` at project root with `VITE_WEB3FORMS_KEY=` and no real value
    - _Requirements: 11.10_
  - [x] 1.5 Ensure `.gitignore` lists `.env` so the access key is never committed; add it if absent
    - _Requirements: 11.11_
  - [x] 1.6 Create `src/test/setup.js` that imports `@testing-library/jest-dom` for extended matchers
    - `import '@testing-library/jest-dom'`
    - _Requirements: 18.1 — Design: Test Configuration_

---

### Phase 2 — Content Data File

- [x] 2. Rewrite `src/data/content.js` with all verbatim Figma text and correct Owen Aldrich data
  - [x] 2.1 Replace the `personal` export with Owen's exact Figma values
    - `firstName: 'Owen'`, `fullName: 'Owen Aldrich Setiawan'`, `heroName: 'Owen Aldrich S'` (exact Figma node 2:11 string)
    - `tagline: 'AI Engineer & Full-Stack Developer crafting scalable products, end to end, from model to interface.'`
    - `bio[0]`: "I'm Owen Aldrich Setiawan, an AI Engineer who builds innovative intelligent systems that are proven in real-world use and measurable by results. My focus is Applied Machine Learning and AI-powered products, with full-stack development as a supporting strength to ship them as dependable digital products, from first prototype to final application."
    - `bio[1]`: "Outside of computer science, I have strong teamwork and communication skills, and I'm interested in learning new languages. I always strive to learn new things and create technology that is both useful and easy to use."
    - `focusChips`: `['Machine Learning', 'Computer Vision', 'NLP & Speech Recognition', 'Full-Stack Engineering']` (verbatim Figma)
    - `copyright: '© 2026 Owen Aldrich. All rights reserved.'`
    - `location`, `status`, `focus`, `email`, `heroLinks`, `socials`, `footerLinks` — fill with Figma values
    - _Requirements: 4.4, 4.8, 13.3, 13.8_
  - [x] 2.2 Verify `navLinks` export contains the five links matching Figma nav labels, with correct `id` anchors (`about`, `work`, `stack`, `capabilities`, `contact`)
    - _Requirements: 2.3, 13.1–13.5_
  - [x] 2.3 Verify `projects` array has at least the three seed projects (nexusflow, datasentinel, promptlens) each with all required fields (`slug`, `title`, `description`, `year`, `category`, `coverImage`, `detailImage`, `techStack`, `features`, `outcomes`, `githubUrl`, `liveUrl`)
    - _Requirements: 6.1, 7.3, 13.1_
  - [x] 2.4 Verify `certificates` array has at least the three seed certificates each with all required fields (`id`/unique key, `title`, `issuer`, `platform`, `date`, `grade`, `description`, `image`, `pdfUrl`)
    - _Requirements: 8.1, 13.2_
  - [x] 2.5 Verify `coreStack` array has four card objects, each with `title`, `subtitle`, and `items: [{ name, icon }]`
    - _Requirements: 9.2, 9.3, 13.4_
  - [x] 2.6 Verify `capabilities` array has exactly six objects each with `number`, `title` (two-line array, uppercase), and `description`
    - _Requirements: 10.2, 10.3, 13.5_

---

### Phase 3 — Shared / Utility Components

- [x] 3. Create shared utility components
  - [x] 3.1 Create `src/components/PlaceholderImage.jsx`
    - Renders a `<div>` (never an `<img>`) with `className="bg-image-bg"` plus any passed `className` and `style` props
    - For the about photo slot specifically: overlay two lines of JetBrains Mono text — `"PROFILE PHOTO — ADD LATER"` and `"[ aspect-ratio 1:1 ]"` — centered, in `text-muted` at 10px
    - Export a `variant` prop (`'default' | 'about'`) to control whether the text overlay is shown
    - The block must never collapse to zero size — it relies on passed `style` or parent sizing
    - _Requirements: 14.1, 14.2 — Design: PlaceholderImage, Property 5_
  - [x] 3.2 Create `src/components/IconBox.jsx`
    - Accept `{ icon, name }` props where `icon` is an SVG filename string or `null`
    - Use `import.meta.glob('../../assets/icons/*.svg', { eager: true, import: 'default' })` to build a lookup map at module load time
    - If the icon key resolves: render `<img src={resolvedUrl} alt={name} width={22} height={22} />` inside a `w-9 h-9 rounded-icon border border-icon-border bg-white flex items-center justify-center` box
    - If the icon key does not resolve: render the `name` string as a text badge with `bg-chip-bg text-secondary text-xs rounded-full px-3 py-1`
    - _Requirements: 9.4, 9.5, 9.6 — Design: Icon Loading Strategy_

---

### Phase 4 — App Shell & Routing

- [x] 4. Create App.jsx, routing, and page skeletons
  - [x] 4.1 Create `src/App.jsx` with react-router-dom v6 route definitions
    - Import `Routes`, `Route`, `Navigate` from `react-router-dom`
    - Route `/` → `<HomePage />`; route `/projects/:slug` → `<ProjectDetailPage />`; catch-all `*` → `<Navigate to="/" replace />`
    - _Requirements: 7.11, 18.1 — Design: Application Shell_
  - [x] 4.2 Update `src/main.jsx` to import `App` from `./App` (already wraps in `BrowserRouter` — confirm it remains intact)
    - _Requirements: 18.1 — Design: Application Shell_
  - [x] 4.3 Create `src/pages/HomePage.jsx` as a skeleton that renders `<Navbar />`, a `<main>` wrapper, and `<Footer />` with placeholder `<section>` elements for each of the six home sections; assign IDs: `about`, `work`, `stack`, `capabilities`, `contact`
    - _Requirements: 2.3, 16.3 — Design: Page Composition_
  - [x] 4.4 Create `src/pages/ProjectDetailPage.jsx` as a skeleton that reads `useParams()`, looks up the project from `content.js`, and returns `<Navigate to="/" replace />` when no match is found; otherwise renders `<Navbar />`, a `<main className="pt-[120px]">`, and `<Footer />`
    - _Requirements: 7.1, 7.11 — Design: ProjectDetailPage_

---

### Phase 5 — Navbar (complete existing component)

- [x] 5. Complete `src/components/Navbar.jsx` to match the Figma design fully
  - [x] 5.1 Add `menuOpen` boolean state and a hamburger `<button>` that appears only on mobile (`md:hidden`); clicking it toggles `menuOpen`
    - Button renders a three-line hamburger SVG icon; `aria-expanded={menuOpen}` for accessibility
    - _Requirements: 2.4 — Design: Navbar_
  - [x] 5.2 Render the mobile dropdown nav menu — visible only when `menuOpen === true` — containing all `navLinks` as full-width links; each link closes the menu on click
    - Style: white background, rounded-card-sm, shadow-card, stacked links with `py-3 px-6` padding
    - _Requirements: 2.5 — Design: Navbar_
  - [x] 5.3 Verify the desktop nav pill renders `personal.name` (first word of `firstName`) as the logo at 20px Plus Jakarta Sans Bold, and all five `navLinks` with hover `bg-white shadow-card-sm` treatment on the pill buttons
    - _Requirements: 2.1, 2.2, 2.3 — Design: Navbar_

---

### Phase 6 — Footer

- [x] 6. Create `src/components/Footer.jsx`
  - [x] 6.1 Render a full-width `<footer>` with a top border `border-t border-border-color`
    - Inner content max-w-content mx-auto px-6, flex row between: left side shows `personal.fullName` ("Owen Aldrich Setiawan") and `personal.copyright` ("© 2026 Owen Aldrich. All rights reserved.") in Plus Jakarta Sans; right side maps `personal.footerLinks` to `<a>` links
    - Use semantic `<footer>` element
    - _Requirements: 12.1, 12.2, 12.3, 16.3 — Design: Footer_

---

### Phase 7 — Hero Section

- [x] 7. Create `src/components/HeroSection.jsx`
  - [x] 7.1 Implement the 12-column desktop grid (`grid grid-cols-12 gap-9`) with text content in cols 1–7 and portrait card in cols 8–12
    - _Requirements: 3.7 — Design: HeroSection_
  - [x] 7.2 Render the hero name using `personal.heroName` ("Owen Aldrich S") in Newsreader Bold at `text-[62px]` desktop / `text-[44px]` mobile
    - _Requirements: 3.1, 15.3 — Design: HeroSection_
  - [x] 7.3 Render the tagline from `personal.tagline` below the name in Plus Jakarta Sans
    - _Requirements: 3.2_
  - [x] 7.4 Render two CTA buttons from `personal.heroBtns`: dark-filled ("View projects" → `#work`) and outlined ("About me" → `#about`), both with `rounded-full`
    - Dark button: `bg-dark-btn text-dark-btn-text`; outlined: `border border-primary text-primary bg-transparent`
    - _Requirements: 3.3 — Design: HeroSection_
  - [x] 7.5 Render the two `personal.heroLinks` social cards (GitHub and Email) — each shows label, icon via `<IconBox>`, and value string
    - _Requirements: 3.4_
  - [x] 7.6 Render the portrait card (`w-[460px] h-[540px]` desktop, `h-[360px]` mobile) loading from `/images/profile/hero.jpg`; use `onError` → swap to `<PlaceholderImage>` of the same dimensions with `bg-image-bg`
    - Apply `rounded-card-lg` and `shadow-card`
    - _Requirements: 3.5, 3.6, 14.1, 14.6_
  - [x] 7.7 Apply mobile stacked layout (`flex-col md:grid`) — portrait card below text content, portrait at 360px tall, 24px radius on mobile
    - _Requirements: 3.8, 15.3_

---

### Phase 8 — About Section

- [x] 8. Create `src/components/AboutSection.jsx`
  - [x] 8.1 Render the section label `"// 01 — ABOUT"` in JetBrains Mono with `text-muted text-sm`
    - _Requirements: 4.1_
  - [x] 8.2 Render the heading `"AI Engineer"` at `text-[48px] font-bold font-jakarta` and subtitle `"turning models into real products"` at `text-[36px] font-normal font-jakarta`
    - _Requirements: 4.2_
  - [x] 8.3 Map `personal.bio` array to `<p>` elements — two paragraphs with verbatim Figma text
    - _Requirements: 4.3, 4.8_
  - [x] 8.4 Map `personal.focusChips` to chip `<span>` elements with `bg-chip-bg rounded-full px-4 py-1.5 font-jakarta text-sm text-secondary`; chips must be: "Machine Learning", "Computer Vision", "NLP & Speech Recognition", "Full-Stack Engineering"
    - _Requirements: 4.4_
  - [x] 8.5 Render the about photo card — yellow card offset container (`bg-accent-yellow border border-accent-yellow-border rounded-card-lg`) containing the photo loaded from `personal.aboutPhoto`; `onError` swaps to `<PlaceholderImage variant="about">` with the JetBrains Mono overlay text "PROFILE PHOTO — ADD LATER" + "[ aspect-ratio 1:1 ]"
    - Apply 1:1 aspect ratio to the image slot
    - _Requirements: 4.5, 4.6, 14.1, 14.7 — Design: PlaceholderImage_
  - [x] 8.6 Render the info bar at the bottom of the section showing three labeled values: `personal.location`, `personal.status`, and `personal.focus` — each with a small label above in JetBrains Mono and the value below in Plus Jakarta Sans
    - _Requirements: 4.7_

---

### Phase 9 — Work Section (Tab Switcher + Project Card + Certificate Card + Certificate Modal)

- [x] 9. Create the Work section and all child components
  - [x] 9.1 Create `src/components/WorkSection.jsx`
    - Render section label `"// 02 — WORK & LEARNING"` in JetBrains Mono
    - Own `activeTab` state (`'projects' | 'certificates'`), defaulting to `'projects'`
    - Render `<TabSwitcher>` and conditionally render `<ProjectsPanel>` or `<CertificatesPanel>` based on `activeTab`
    - _Requirements: 5.1, 5.2, 5.3, 5.4_
  - [x] 9.2 Create `src/components/TabSwitcher.jsx`
    - Accept `{ activeTab, onTabChange }` props; render two buttons ("Projects", "Certificates")
    - Active tab: `bg-white border border-border-color shadow-card-sm rounded-full`; inactive: `text-secondary`
    - _Requirements: 5.2, 5.3, 5.4_
  - [x] 9.3 Create `src/components/ProjectsPanel.jsx`
    - Accept `{ projects }` prop; map to `<ProjectCard>` components; wrap in outer panel card with `bg-white rounded-card-lg shadow-card border border-border-color`
    - _Requirements: 5.5, 5.7, 13.6_
  - [x] 9.4 Create `src/components/ProjectCard.jsx`
    - Accept `{ project }` prop with shape `{ slug, title, description, year, category, coverImage }`
    - Render `category` badge (`bg-badge-bg text-badge-text rounded-full text-xs`), `title`, `description`, `year`
    - Render cover image from `coverImage`; `onError` → `<PlaceholderImage>` with `bg-image-bg` and 2:1 aspect ratio
    - Add `data-testid="project-card"` for property-based test targeting
    - Render "View details" link navigating to `/projects/${slug}`
    - Desktop: image right, text left; mobile: single-column stacked without image
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 14.1, 14.8 — Design: Property 1_
  - [x] 9.5 Create `src/components/CertificatesPanel.jsx`
    - Accept `{ certificates }` prop; own `activeCertificate` state (`object | null`)
    - Map certificates → `<CertificateCard onOpen={cert => setActiveCertificate(cert)}>`
    - When `activeCertificate !== null`, render `<CertificateModal>` via `ReactDOM.createPortal` into `document.body`
    - _Requirements: 5.6, 5.8, 13.7 — Design: CertificatesPanel_
  - [x] 9.6 Create `src/components/CertificateCard.jsx`
    - Accept `{ certificate, onOpen }` props
    - Render `title`, `issuer`, `platform`, `date`; call `onOpen(certificate)` on click
    - Add `data-testid="certificate-card"` for property-based test targeting
    - _Requirements: 8.1 — Design: Property 2_
  - [x] 9.7 Create `src/components/CertificateModal.jsx`
    - Accept `{ certificate, onClose }` props; render via `ReactDOM.createPortal`
    - Dark backdrop `bg-[rgba(26,28,28,0.55)] fixed inset-0 z-50`; clicking backdrop calls `onClose`
    - Modal panel: `w-[760px]` desktop / `w-[366px]` mobile, `shadow-modal rounded-card-lg bg-white`
    - Display `title`, `issuer`, `platform`, `description`; render grade pill when `grade !== null`; render "Open original PDF" button when `pdfUrl !== null`; render "Open full image" button always
    - Certificate image at `h-[440px]`; `onError` → `<PlaceholderImage>` of same height
    - On mount: `document.body.classList.add('overflow-hidden')`; cleanup removes it
    - Close button in header calls `onClose`
    - _Requirements: 8.2–8.12, 14.1, 15.6 — Design: CertificateModal_

---

### Phase 10 — Core Stack Section

- [x] 10. Create `src/components/CoreStackSection.jsx`
  - [x] 10.1 Render section label `"// 03 — CORE STACK"` in JetBrains Mono; render heading `"Core Stack."` at `text-[48px] font-bold`
    - _Requirements: 9.1_
  - [x] 10.2 Render four `CoreStackCard` sub-components in a `grid grid-cols-2 gap-6` layout from `coreStack` array
    - Each card: `bg-white rounded-card-lg shadow-card border border-border-color p-6`
    - Render card `title` in Plus Jakarta Sans Bold and `subtitle` in muted text
    - Map `items` array — for each item render `<IconBox icon={item.icon} name={item.name} />`
    - _Requirements: 9.2, 9.3, 9.4, 9.5, 13.4 — Design: CoreStackSection_

---

### Phase 11 — Capabilities Section

- [x] 11. Create `src/components/CapabilitiesSection.jsx`
  - [x] 11.1 Render section label `"// 04 — TECHNICAL CAPABILITIES"` in JetBrains Mono; render heading `"TECHNICAL CAPABILITIES."` at `text-[42px] font-bold uppercase`
    - _Requirements: 10.1_
  - [x] 11.2 Render six `CapabilityCard` sub-components in a `grid grid-cols-3 gap-6 md:grid-cols-3` layout (1-col on mobile)
    - Each card: `group border border-border-color rounded-card-lg p-6 cursor-default`
    - Apply Tailwind `group-hover:` for color inversion: `hover:bg-primary hover:text-dark-btn-text` on the card; `group-hover:text-dark-btn-text` on number and description
    - Render `number` in JetBrains Mono, `title` lines (uppercase, two lines), and `description`
    - _Requirements: 10.2–10.6, 13.5 — Design: CapabilitiesSection_

---

### Phase 12 — Contact Section

- [x] 12. Create `src/components/ContactSection.jsx`
  - [x] 12.1 Render a white card using a 12-column grid (`grid grid-cols-12 gap-9`): left 5 cols for contact info, right 7 cols for form
    - Render `personal.email` and each `personal.socials` link on the left
    - _Requirements: 11.1, 11.2_
  - [x] 12.2 Implement the three-field form (Name text, Email email, Message textarea) and "Send Message" submit button matching Figma field styles
    - Field borders: `border border-border-color rounded-card-sm`; labels in Plus Jakarta Sans Medium; focus ring using Tailwind `focus:ring-2`
    - _Requirements: 11.3_
  - [x] 12.3 Read `import.meta.env.VITE_WEB3FORMS_KEY`; when missing/empty render inline error `"Contact form is not configured. Please set the VITE_WEB3FORMS_KEY environment variable."` and `disabled` submit button
    - _Requirements: 11.5 — Design: Missing Web3Forms API Key_
  - [x] 12.4 Implement `submitStatus` state (`'idle' | 'submitting' | 'success' | 'error'`) and field validation — reject empty or whitespace-only Name, Email, or Message before submitting
    - _Requirements: 11.6 — Design: Property 4_
  - [x] 12.5 On valid submit: POST to `https://api.web3forms.com/submit` with `access_key`, `name`, `email`, `message` fields; on 2xx response set `submitStatus = 'success'`; on error set `submitStatus = 'error'`
    - Display success confirmation message on success; display error message on failure
    - _Requirements: 11.4, 11.7, 11.8_

---

### Phase 13 — Project Detail Page (full implementation)

- [x] 13. Complete `src/pages/ProjectDetailPage.jsx`
  - [x] 13.1 Look up the project from `content.js` using `useParams().slug`; redirect to `/` if not found (skeleton already handles this — verify and keep)
    - _Requirements: 7.11 — Design: Invalid Project Slug_
  - [x] 13.2 Render `<BackLink>` — an `<a href="/#work">` with a left arrow icon and label "Back to projects"
    - _Requirements: 7.2_
  - [x] 13.3 Render the project title block: `category` badge (`bg-badge-bg text-badge-text`), `title` in Plus Jakarta Sans Bold at 40px, and `year`
    - _Requirements: 7.3_
  - [x] 13.4 Render the detail image at `h-[520px]` desktop; load from `project.detailImage`; `onError` → `<PlaceholderImage>` of same height; apply `rounded-card-lg object-cover w-full`
    - _Requirements: 7.4, 7.5, 14.1, 14.9_
  - [x] 13.5 Render the white info card with `bg-white rounded-card-lg shadow-card border border-border-color p-8` in a two-column layout
    - Left column: `description` paragraph, then `techStack` items each as a pill `bg-chip-bg text-tech-pill-text rounded-full px-4 py-1.5`
    - Right column: `features` as numbered rows (`number`, `title`, `description`) and `outcomes` below with same structure
    - _Requirements: 7.6, 7.7, 7.8_
  - [x] 13.6 Render GitHub link button when `project.githubUrl !== null`; render Live Demo link button when `project.liveUrl !== null`
    - GitHub button: dark-btn style; Live Demo: outlined style
    - _Requirements: 7.9, 7.10_

---

### Phase 14 — SEO & Semantic HTML Audit

- [x] 14. Apply semantic HTML and confirm SEO meta tags across all pages
  - [x] 14.1 Ensure `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>` are used appropriately in `Navbar`, `HomePage`, `ProjectDetailPage`, and `Footer`
    - Wrap each major section element with `<section id="...">` and corresponding aria labels
    - _Requirements: 16.3_
  - [x] 14.2 Confirm `index.html` has `<meta name="description">` and all four Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) — already added in task 1.2; verify values match final Figma text
    - _Requirements: 16.1, 16.2_

---

### Phase 15 — Checkpoint

- [x] 15. Checkpoint — run the dev build and visually verify all sections
  - Run `npm run build` — confirm zero errors
  - Run `npm run preview` — check all six home sections render and scroll anchors work
  - Verify mobile layout at 390px in browser devtools: hamburger visible, hero stacked, cards single-column
  - Ensure all tests pass, ask the user if questions arise.

---

### Phase 16 — Test Infrastructure Setup

- [x] 16. Install test dependencies and configure the test environment
  - [x] 16.1 Install `vitest`, `@vitest/coverage-v8`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, and `fast-check` as dev dependencies
    - Run: `npm install --save-dev vitest@^1.6.0 @vitest/coverage-v8@^1.6.0 jsdom@^24.0.0 @testing-library/react@^16.0.0 @testing-library/jest-dom@^6.4.0 @testing-library/user-event@^14.5.0 fast-check@^3.19.0`
    - _Requirements: 18.1 — Design: Test Configuration_
  - [x] 16.2 Confirm `src/test/setup.js` exists (created in task 1.6) and `vite.config.js` test block is present (added in task 1.1)
    - _Requirements: 18.1_

---

### Phase 17 — Property-Based Tests

- [x] 17. Implement all five correctness property tests in `src/test/properties.test.jsx`
  - [x] 17.1 Write Property 1 — data-driven project card count
    - Use `fc.array(projectArbitrary(), { minLength: 0, maxLength: 20 })` to generate random project arrays
    - Render `<ProjectsPanel projects={generated} />`; assert `screen.queryAllByTestId('project-card').length === generated.length` for each run
    - 100 iterations minimum; comment: `// Property 1: data-driven card count — Validates: Requirements 5.5, 13.6`
    - _Requirements: 5.5, 13.6 — Design: Property 1_
  - [x] 17.2 Write Property 2 — data-driven certificate card count
    - Use `fc.array(certificateArbitrary(), { minLength: 0, maxLength: 20 })`
    - Render `<CertificatesPanel certificates={generated} />`; assert count of `data-testid="certificate-card"` equals array length
    - Comment: `// Property 2: data-driven certificate count — Validates: Requirements 5.6, 13.7`
    - _Requirements: 5.6, 13.7 — Design: Property 2_
  - [x] 17.3 Write Property 3 — slug-based project lookup
    - Use `fc.array(projectArbitrary(), { minLength: 1, maxLength: 20 })` with unique slugs (use `fc.uniqueArray`)
    - For each generated array: find by `projects[0].slug` → assert correct object returned; find by `'__not_a_real_slug__'` → assert `undefined`
    - Comment: `// Property 3: slug-based project lookup — Validates: Requirements 7.11`
    - _Requirements: 7.11 — Design: Property 3_
  - [x] 17.4 Write Property 4 — contact form rejects whitespace-only input
    - Use `fc.stringOf(fc.constantFrom(' ', '\t', '\n', '\r'))` to generate whitespace strings
    - Render `<ContactSection />`; fire change on Name field with whitespace; click "Send Message"; assert success message does NOT appear
    - Comment: `// Property 4: contact form whitespace validation — Validates: Requirements 11.6`
    - _Requirements: 11.6 — Design: Property 4_
  - [x] 17.5 Write Property 5 — PlaceholderImage preserves passed dimensions
    - Use `fc.integer({ min: 10, max: 2000 })` for width and height
    - Render `<PlaceholderImage style={{ width: \`${w}px\`, height: \`${h}px\` }} />`; assert `container.firstChild.style.width === \`${w}px\`` and same for height
    - Comment: `// Property 5: PlaceholderImage dimensions — Validates: Requirements 14.1, 14.2`
    - _Requirements: 14.1, 14.2 — Design: Property 5_

---

### Phase 18 — Unit Tests

- [x] 18. Write unit tests covering all major components and edge cases
  - [x]* 18.1 Write unit tests for `PlaceholderImage` and `Navbar` in `src/test/layout.test.jsx`
    - PlaceholderImage: assert no `<img>` tag renders; verify `className` and `style` are applied to the outer div
    - Navbar desktop: assert all `navLinks` labels render; verify logo shows "Owen"
    - Navbar mobile: mock viewport < 768px; assert hamburger button visible; click it → dropdown nav appears; click a nav link → dropdown closes
    - _Requirements: 2.1–2.5, 14.1, 14.2_
  - [x]* 18.2 Write unit tests for `WorkSection`, `TabSwitcher` in `src/test/worksection.test.jsx`
    - Assert "Projects" tab is active on initial render
    - Click "Certificates" tab → projects panel hidden, certificates panel visible
    - Click "Projects" tab again → certificates panel hidden, projects panel visible
    - _Requirements: 5.2, 5.3, 5.4_
  - [x]* 18.3 Write unit tests for `ProjectCard` in `src/test/projectcard.test.jsx`
    - Renders `title`, `description`, `year`, `category` from project object
    - "View details" link href equals `/projects/<slug>`
    - When `onError` fires on the image, `<PlaceholderImage>` renders (no `<img>` in the slot)
    - _Requirements: 6.1–6.4_
  - [x]* 18.4 Write unit tests for `CertificateCard` and `CertificateModal` in `src/test/certificate.test.jsx`
    - Clicking a `CertificateCard` opens the modal (modal node appears in the DOM)
    - Clicking the backdrop calls `onClose`
    - Clicking the close button calls `onClose`
    - Grade pill renders only when `grade !== null`
    - PDF button renders only when `pdfUrl !== null`
    - _Requirements: 8.1–8.12_
  - [x]* 18.5 Write unit tests for `ContactSection` in `src/test/contact.test.jsx`
    - When `VITE_WEB3FORMS_KEY` is empty: inline error message renders; submit button is `disabled`
    - When form is submitted with empty Name field: success message does NOT appear
    - After a mocked successful POST (mock `fetch`): success confirmation message renders
    - After a mocked failed POST: error message renders
    - _Requirements: 11.5–11.8_
  - [x]* 18.6 Write unit tests for `ProjectDetailPage` in `src/test/projectdetail.test.jsx`
    - When slug matches a project: title, category, and year render on screen
    - When slug does not match any project: component returns a redirect (assert location changes to `/`)
    - GitHub button renders only when `githubUrl !== null`; Live Demo button renders only when `liveUrl !== null`
    - _Requirements: 7.3, 7.9, 7.10, 7.11_

---

### Phase 19 — Documentation

- [x] 19. Write project documentation files
  - [x] 19.1 Create `CONTENT-GUIDE.md` at project root covering:
    - How to add a new project (5 steps: create folder, add cover.jpg/detail.jpg, copy data object, fill fields, check result)
    - How to add a new certificate (3 steps: add image, copy object, fill fields)
    - Image path conventions and recommended dimensions for each image type (hero portrait, about photo, project cover, project detail, certificate)
    - Two-step process for adding a new Tech_Icon (save SVG to `src/assets/icons/`, add entry to `coreStack` items array — no component code changes)
    - Web3Forms setup section: (a) obtain key at web3forms.com, (b) paste into `.env` locally, (c) add as Vercel environment variable in Project Settings → Environment Variables, (d) update Website URL in Web3Forms dashboard after deployment
    - _Requirements: 9.7, 11.12, 14.11, 17.1_
  - [x] 19.2 Create `README.md` at project root containing: prerequisites (Node 18+), local setup (`npm install`, `npm run dev`), build command (`npm run build`), preview command (`npm run preview`), test command (`npx vitest --run`), Vercel deployment steps (import repo, set Vite preset, add `VITE_WEB3FORMS_KEY` env var), and a link to `CONTENT-GUIDE.md`
    - _Requirements: 17.2_

---

### Phase 20 — Final Build Verification

- [x] 20. Run final build check and verify correctness
  - [x] 20.1 Run `npx vitest --run` — confirm all property-based tests and unit tests pass with zero failures
    - _Requirements: 18.1_
  - [x] 20.2 Run `npm run build` — confirm `vite build` completes with zero errors and zero warnings about missing modules
    - _Requirements: 18.1_
  - [x] 20.3 Confirm `.env` is listed in `.gitignore` and is NOT tracked by git (`git status` should not show `.env`)
    - _Requirements: 11.11_
  - [x] 20.4 Final checkpoint — Ensure all tests pass, ask the user if questions arise.

---

## Notes

- Tasks marked with `*` are optional test tasks and can be skipped for a faster MVP delivery; the property-based tests in Phase 17 are NOT marked optional and must be implemented
- The project scaffold (package.json, tailwind.config.js, vite.config.js, postcss.config.js, index.html, index.css, main.jsx, Navbar.jsx skeleton, content.js skeleton) already exists — Phase 1 and 2 tasks update/complete these files rather than creating them from scratch
- Each task references specific requirements for traceability; design document section names are also noted after the em-dash
- Checkpoints in Phase 15 and Phase 20 ensure incremental validation
- Property tests validate universal correctness properties; unit tests validate specific examples and edge cases
- `import.meta.glob` for icon loading requires no component changes when new SVG icons are dropped into `src/assets/icons/` — only a `content.js` update is needed
- The `PlaceholderImage` component must never render an `<img>` tag to avoid broken-image browser rendering; all image fallback is handled via `onError` on the parent `<img>`, which replaces it with `<PlaceholderImage>`

---

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6"] },
    { "id": 1, "tasks": ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6"] },
    { "id": 2, "tasks": ["3.1", "3.2"] },
    { "id": 3, "tasks": ["4.1", "4.2", "6.1"] },
    { "id": 4, "tasks": ["4.3", "4.4", "5.1", "5.2", "5.3"] },
    { "id": 5, "tasks": ["7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "7.7"] },
    { "id": 6, "tasks": ["8.1", "8.2", "8.3", "8.4", "8.5", "8.6"] },
    { "id": 7, "tasks": ["9.1", "9.2", "9.3", "9.4", "9.5", "9.6", "9.7"] },
    { "id": 8, "tasks": ["10.1", "10.2", "11.1", "11.2"] },
    { "id": 9, "tasks": ["12.1", "12.2", "12.3", "12.4", "12.5"] },
    { "id": 10, "tasks": ["13.1", "13.2", "13.3", "13.4", "13.5", "13.6"] },
    { "id": 11, "tasks": ["14.1", "14.2"] },
    { "id": 12, "tasks": ["16.1", "16.2"] },
    { "id": 13, "tasks": ["17.1", "17.2", "17.3", "17.4", "17.5"] },
    { "id": 14, "tasks": ["18.1", "18.2", "18.3", "18.4", "18.5", "18.6"] },
    { "id": 15, "tasks": ["19.1", "19.2"] },
    { "id": 16, "tasks": ["20.1", "20.2", "20.3"] }
  ]
}
```
