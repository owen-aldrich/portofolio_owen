# Requirements Document

## Introduction

Owen Aldrich's Portfolio is a personal portfolio website for Owen Aldrich Setiawan, an AI Engineer. The site is a pixel-accurate implementation of a Figma design, built with React (Vite) and Tailwind CSS, deployed as a static build on Vercel. It presents the owner's identity, projects, certifications, technical stack, and capabilities across three surfaces: a single-page home, a project detail page, and a certificate modal. All content is driven from a single data file (`src/data/content.js`) so that adding a project or certificate object auto-generates its card and detail view without any component changes.

---

## Glossary

- **Portfolio_Site**: The complete React/Vite web application described by this document.
- **Home_Page**: The root route (`/`) containing all primary sections.
- **Project_Detail_Page**: The route `/projects/:slug` showing full project information.
- **Certificate_Modal**: An overlay dialog shown when a user activates a certificate card.
- **Navbar**: The floating pill-shaped navigation bar present on all pages.
- **Hero_Section**: The top section of Home_Page containing name, tagline, CTAs, and portrait.
- **About_Section**: Section `// 01` of Home_Page.
- **Work_Section**: Section `// 02` of Home_Page containing tab-switched Projects and Certificates.
- **Core_Stack_Section**: Section `// 03` of Home_Page.
- **Capabilities_Section**: Section `// 04` of Home_Page.
- **Contact_Section**: The bottom content section of Home_Page containing a contact form.
- **Footer**: The full-width bottom strip of every page.
- **Content_Store**: The exported arrays and objects in `src/data/content.js`.
- **Project_Card**: A visual card rendered from a project object in Content_Store.
- **Certificate_Card**: A visual card rendered from a certificate object in Content_Store.
- **Tab_Switcher**: The "Projects / Certificates" toggle inside Work_Section.
- **Capability_Card**: A numbered card inside Capabilities_Section.
- **Core_Stack_Card**: One of four cards inside Core_Stack_Section.
- **Tech_Icon**: A 22×22 SVG file stored in `src/assets/icons/`.
- **Placeholder_Image**: A styled empty block matching Figma's placeholder style, shown when an image file is absent.
- **Figma_Design**: The source Figma file at https://www.figma.com/design/Bc2P2Bogt6UalSeYBlU3KC/Untitled.

---

## Requirements

---

### Requirement 0: Strict Scope

**User Story:** As the site owner, I want the implementation strictly limited to what exists in the Figma file, so that the live site never contains invented or assumed design decisions.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL implement ONLY sections, components, elements, text, icons, colors, shadows, borders, radii, font sizes, font weights, spacing, and effects that are explicitly present in the Figma_Design frames. No additions beyond what Figma defines are permitted.
2. THE Portfolio_Site SHALL NOT include scroll animations, page transitions, entrance animations, or any motion effects beyond the two explicitly present in the Figma_Design: the Projects/Certificates tab-switch interaction and the Capability_Card hover inversion.
3. THE Portfolio_Site SHALL use plain React and Tailwind CSS only. No UI component kits, headless UI libraries, animation libraries (e.g. Framer Motion, GSAP, AOS), or third-party icon packs shall be introduced.
4. WHEN any design value (layout, spacing, color, radius, shadow, typography) is missing or ambiguous in the Figma_Design, THE developer SHALL stop implementation of that element and ask the site owner for clarification before proceeding. Guessing or inventing values is not permitted.
5. AFTER each section is implemented, THE developer SHALL compare the rendered output against its corresponding Figma node and document any differences that could not be matched exactly.
6. ALL text that appears in the Figma_Design SHALL be reproduced in the implementation exactly as written, character for character. This includes names, bios, section labels, chip labels, placeholder text, contact details, and footer text. No string may be reworded, shortened, or substituted for another.

---

### Requirement 1: Design Fidelity

**User Story:** As the site owner, I want every visual element to match the Figma design exactly, so that the live site looks identical to the approved design.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL render all colors using only the exact hex values defined in the Figma_Design: page background `#f9f9f8`, primary text `#1a1c1c`, secondary text `#5f5e5e`, muted text `#6b6b6b`, border `#e8e8e5`, icon border `#e4e4e0`, chip background `#f3f4f3`, image background `#eeeeed`, dark button `#2f3130`, dark button text `#f1f1f0`, accent yellow `#f6e27a`, accent yellow border `#1a1a1a`, heading dot `#705953`.
2. THE Portfolio_Site SHALL apply the Newsreader Bold font exclusively to the hero name, Plus Jakarta Sans to all other headings and body text, and JetBrains Mono to section labels.
3. THE Portfolio_Site SHALL constrain all content to a maximum width of 1080px with 24px horizontal padding on both sides.
4. THE Portfolio_Site SHALL apply border-radius values of 24px to large cards, 16px to small cards, and 12px to icon boxes, as defined in the Figma_Design.
5. THE Portfolio_Site SHALL NOT introduce any color, spacing, shadow, font size, font weight, border, radius, animation, or layout value that does not appear in the Figma_Design.

---

### Requirement 2: Navbar

**User Story:** As a visitor, I want a persistent navigation bar, so that I can jump to any section from anywhere on the page.

#### Acceptance Criteria

1. THE Navbar SHALL float above page content on all pages, implemented with `position: fixed` or `position: sticky` and a `backdrop-filter: blur` background of white at 90% opacity with a visible border.
2. THE Navbar SHALL display as a pill shape with a maximum width of 1080px, centered horizontally.
3. THE Navbar SHALL render navigation links that scroll the viewport to the corresponding section anchor when activated.
4. WHEN the viewport width is below 768px, THE Navbar SHALL display a hamburger menu icon instead of the full navigation link list, matching the mobile frame (node 24:2) at 56px height.
5. WHEN the hamburger menu icon is activated on mobile, THE Navbar SHALL toggle the visibility of a navigation menu containing all nav links.

---

### Requirement 3: Hero Section

**User Story:** As a visitor, I want to see a compelling hero section, so that I immediately understand who the owner is and can take a primary action.

#### Acceptance Criteria

1. THE Hero_Section SHALL render the name exactly as it appears in Figma node 2:11 — the string "Owen Aldrich S" — using the Newsreader Bold font at 62px on desktop and 44px on mobile.
2. THE Hero_Section SHALL render the tagline "AI Engineer & Full-Stack Developer crafting scalable products, end to end, from model to interface." below the name.
3. THE Hero_Section SHALL render two CTA buttons — one dark-filled ("View projects") and one outlined ("About me") — with fully rounded corners (border-radius 9999px).
4. THE Hero_Section SHALL render two social link cards (GitHub and Email) displaying the label, icon, and value as defined in `personal.heroLinks` of Content_Store.
5. THE Hero_Section SHALL render the portrait image from `/images/profile/hero.jpg` in a card that is 460px wide and 540px tall on desktop.
6. WHEN `/images/profile/hero.jpg` is absent, THE Hero_Section SHALL display a Placeholder_Image of the same dimensions and background color `#eeeeed`.
7. THE Hero_Section SHALL use a 12-column grid with a 36px gap to position the text content on the left and the portrait card on the right on desktop.
8. WHEN the viewport width is below 768px, THE Hero_Section SHALL stack the text content above the portrait card, with the portrait card at 360px tall and 24px border radius.

---

### Requirement 4: About Section

**User Story:** As a visitor, I want to read about the owner's background and focus areas, so that I understand their expertise and approach.

#### Acceptance Criteria

1. THE About_Section SHALL display the section label "// 01 — ABOUT" in JetBrains Mono.
2. THE About_Section SHALL display the heading "AI Engineer" at 48px Bold (Plus Jakarta Sans) and the subtitle "turning models into real products" at 36px Regular.
3. THE About_Section SHALL render the bio paragraphs from `personal.bio` in Content_Store.
4. THE About_Section SHALL render each string in `personal.focusChips` as a fully-rounded chip. The chip labels SHALL be copied verbatim from Figma: the four chips shown are "Machine Learning", "Computer Vision", "NLP & Speech Recognition", and "Full-Stack Engineering".
5. THE About_Section SHALL display an offset yellow card (background `#f6e27a`, border `#1a1a1a`) containing the about photo from `personal.aboutPhoto`.
6. WHEN `personal.aboutPhoto` image file is absent, THE About_Section SHALL display a Placeholder_Image of equal dimensions with background `#eeeeed`.
7. THE About_Section SHALL display an info bar showing `personal.location`, `personal.status`, and `personal.focus` values from Content_Store.
8. THE About_Section SHALL source the bio text from `personal.bio` in Content_Store. The bio text SHALL be copied verbatim from Figma nodes 2:64 and 2:66, character for character. Paragraph 1: "I'm Owen Aldrich Setiawan, an AI Engineer who builds innovative intelligent systems that are proven in real-world use and measurable by results. My focus is Applied Machine Learning and AI-powered products, with full-stack development as a supporting strength to ship them as dependable digital products, from first prototype to final application." Paragraph 2: "Outside of computer science, I have strong teamwork and communication skills, and I'm interested in learning new languages. I always strive to learn new things and create technology that is both useful and easy to use." No word of this text may be altered.

---

### Requirement 5: Work & Learning Section (Tab Switcher)

**User Story:** As a visitor, I want to browse projects and certificates in the same section, so that I can switch between them without navigating away.

#### Acceptance Criteria

1. THE Work_Section SHALL display the section label "// 02 — WORK & LEARNING" in JetBrains Mono.
2. THE Work_Section SHALL render a Tab_Switcher with two tabs: "Projects" and "Certificates".
3. WHEN the Portfolio_Site first renders, THE Tab_Switcher SHALL display the "Projects" tab as active.
4. WHEN a tab is activated in the Tab_Switcher, THE Work_Section SHALL display only the content panel for that tab and hide the other.
5. THE Work_Section SHALL render one Project_Card for each object in the `projects` array of Content_Store, inside the Projects panel.
6. THE Work_Section SHALL render one Certificate_Card for each object in the `certificates` array of Content_Store, inside the Certificates panel.
7. WHEN an object is added to the `projects` array in Content_Store, THE Work_Section SHALL render an additional Project_Card without any component code changes.
8. WHEN an object is added to the `certificates` array in Content_Store, THE Work_Section SHALL render an additional Certificate_Card without any component code changes.

---

### Requirement 6: Project Card

**User Story:** As a visitor, I want to see a summary card for each project, so that I can decide which ones to explore in detail.

#### Acceptance Criteria

1. THE Project_Card SHALL display the project `title`, `description`, `year`, and `category` badge from the corresponding Content_Store object.
2. THE Project_Card SHALL display the cover image from the `coverImage` path of the Content_Store object.
3. WHEN the `coverImage` file is absent, THE Project_Card SHALL display a Placeholder_Image with background `#eeeeed`.
4. THE Project_Card SHALL contain a link that navigates to `/projects/:slug` where `:slug` matches the `slug` field of the Content_Store object.
5. WHEN the viewport width is below 768px, THE Project_Card SHALL render in a stacked single-column layout without a cover image, matching the mobile frame (node 25:2).

---

### Requirement 7: Project Detail Page

**User Story:** As a visitor, I want to read full details about a project, so that I can understand the scope, technology, and outcomes.

#### Acceptance Criteria

1. THE Project_Detail_Page SHALL render the Navbar and Footer matching the Home_Page layout.
2. THE Project_Detail_Page SHALL display a back navigation link that returns the visitor to the Home_Page Work_Section.
3. THE Project_Detail_Page SHALL display the project `category` badge, `title`, and `year` from the corresponding Content_Store object.
4. THE Project_Detail_Page SHALL display the `detailImage` at 520px tall on desktop.
5. WHEN the `detailImage` file is absent, THE Project_Detail_Page SHALL display a Placeholder_Image of equal dimensions.
6. THE Project_Detail_Page SHALL display a white info card containing the `description` and each item in `techStack` rendered as a pill.
7. THE Project_Detail_Page SHALL display each item in `features` as a numbered row with `title` and `description`.
8. THE Project_Detail_Page SHALL display each item in `outcomes` as a row with `title` and `description`, alongside the features list.
9. WHEN `githubUrl` is non-null, THE Project_Detail_Page SHALL display a GitHub link button.
10. WHEN `liveUrl` is non-null, THE Project_Detail_Page SHALL display a Live Demo link button.
11. WHEN a visitor navigates to `/projects/:slug` and no Content_Store object has a matching `slug`, THE Project_Detail_Page SHALL redirect the visitor to the Home_Page.

---

### Requirement 8: Certificate Card & Modal

**User Story:** As a visitor, I want to view my certificate details in a modal, so that I can inspect the credential without leaving the page.

#### Acceptance Criteria

1. THE Certificate_Card SHALL display the certificate `title`, `issuer`, `platform`, and `date` from the corresponding Content_Store object.
2. WHEN a Certificate_Card is activated, THE Certificate_Modal SHALL open as an overlay centered on the viewport.
3. THE Certificate_Modal SHALL display a dark backdrop with `rgba(26,28,28,0.55)` background covering the full viewport.
4. THE Certificate_Modal SHALL be 760px wide on desktop and full-width (366px) on mobile, matching frames node 17:2 and node 25:64 respectively.
5. THE Certificate_Modal SHALL display the certificate `title`, `issuer`, `platform`, `grade` (when non-null), `description`, and the certificate `image`.
6. THE Certificate_Modal SHALL display the certificate `image` at 440px tall.
7. WHEN the `image` file is absent, THE Certificate_Modal SHALL display a Placeholder_Image of equal dimensions.
8. WHEN `grade` is non-null, THE Certificate_Modal SHALL render it as a grade pill.
9. WHEN `pdfUrl` is non-null, THE Certificate_Modal SHALL display an "Open original PDF" button linking to that URL.
10. THE Certificate_Modal SHALL display an "Open full image" button linking to the full certificate image.
11. WHEN the close button in the Certificate_Modal header is activated, THE Certificate_Modal SHALL close.
12. WHEN the dark backdrop of an open Certificate_Modal is activated, THE Certificate_Modal SHALL close.

---

### Requirement 9: Core Stack Section

**User Story:** As a visitor, I want to see the owner's technology stack organized by category, so that I can quickly assess technical breadth.

#### Acceptance Criteria

1. THE Core_Stack_Section SHALL display the section label "// 03 — CORE STACK" in JetBrains Mono.
2. THE Core_Stack_Section SHALL render four Core_Stack_Cards in a 2×2 grid, one for each object in the `coreStack` array of Content_Store.
3. EACH Core_Stack_Card SHALL display the card `title`, `subtitle`, and all items in its `items` array.
4. WHEN an item in `items` has a non-null `icon` field and the corresponding SVG file exists in `src/assets/icons/`, THE Core_Stack_Card SHALL render the SVG as a 22×22 Tech_Icon inside a 12px radius icon box with border `#e4e4e0`.
5. WHEN an item in `items` has a null `icon` field or the corresponding SVG file is absent, THE Core_Stack_Card SHALL render the item `name` as a text badge instead.
6. TO add a new Tech_Icon to a Core_Stack_Card, THE developer SHALL: (a) save an SVG file named `<tech>.svg` (22×22 px viewBox) to `src/assets/icons/`, and (b) add one entry `{ name: 'TechName', icon: '<tech>.svg' }` to the corresponding `items` array in `src/data/content.js`. No changes to any React component file are required.
7. THE `CONTENT-GUIDE.md` SHALL document this two-step process with a copy-paste example.

---

### Requirement 10: Technical Capabilities Section

**User Story:** As a visitor, I want to see the owner's capability areas with a clear visual treatment, so that I can understand skill domains at a glance.

#### Acceptance Criteria

1. THE Capabilities_Section SHALL display the section label "// 04 — TECHNICAL CAPABILITIES" in JetBrains Mono.
2. THE Capabilities_Section SHALL render six Capability_Cards in a 3-column × 2-row grid on desktop.
3. EACH Capability_Card SHALL display the capability `number`, `title` lines (uppercase), and `description` from the corresponding Content_Store object.
4. WHEN a pointer device hovers over a Capability_Card, THE Capability_Card SHALL invert its color scheme: background becomes `#1a1c1c` and text/number become `#f1f1f0`.
5. WHEN the pointer device stops hovering over a Capability_Card, THE Capability_Card SHALL restore its default light color scheme.
6. WHEN the viewport width is below 768px, THE Capabilities_Section SHALL render Capability_Cards in a single-column stacked layout.

---

### Requirement 11: Contact Section

**User Story:** As a visitor, I want to send a message directly from the site, so that I can reach out without opening an external app.

#### Acceptance Criteria

1. THE Contact_Section SHALL display a white card using a 12-column grid with contact information on the left and the contact form on the right, matching Figma node 2:378 exactly.
2. THE Contact_Section SHALL display `personal.email` and one link for each item in `personal.socials` from Content_Store on the left side.
3. THE Contact_Section SHALL render a form with three fields — Name (type text), Email (type email), and Message (textarea) — plus a "Send Message" submit button, matching the Figma_Design field styles exactly.
4. THE Contact_Section form SHALL submit to the Web3Forms API (https://api.web3forms.com/submit) using the access key stored in the environment variable `VITE_WEB3FORMS_KEY`.
5. WHEN `VITE_WEB3FORMS_KEY` is empty or undefined at runtime, THE Contact_Section SHALL display a clear error message to the visitor instead of failing silently or throwing an unhandled error.
6. WHEN the "Send Message" button is activated and any required field is empty, THE Contact_Section SHALL display a validation error indicating the missing field without submitting the form.
7. WHEN the form is submitted successfully, THE Contact_Section SHALL display a success confirmation message to the visitor.
8. WHEN the Web3Forms API returns an error response, THE Contact_Section SHALL display an error message to the visitor.
9. THE project root SHALL contain a `.env` file with the variable `VITE_WEB3FORMS_KEY=` (empty placeholder value, to be filled by the site owner).
10. THE project root SHALL contain a `.env.example` file with the variable `VITE_WEB3FORMS_KEY=` and no real value.
11. THE `.gitignore` SHALL list `.env` so the access key is never committed to version control.
12. THE `CONTENT-GUIDE.md` SHALL include a Web3Forms setup section covering: (a) how to obtain the access key at web3forms.com, (b) how to paste it into `.env` locally, (c) how to add it as an environment variable in Vercel (Project Settings → Environment Variables), and (d) that the Website URL in the Web3Forms dashboard must be updated to the Vercel domain after deployment.

---

### Requirement 12: Footer

**User Story:** As a visitor, I want a consistent footer on every page, so that I always have access to copyright information and quick links.

#### Acceptance Criteria

1. THE Footer SHALL appear on every page below all other content, separated by a full-width top border matching color `#e8e8e5`.
2. THE Footer SHALL display the name and copyright text exactly as they appear in Figma nodes 2:450 and 2:454: name "Owen Aldrich Setiawan" on the left, copyright "© 2026 Owen Aldrich. All rights reserved." beside it.
3. THE Footer SHALL render one link for each item in `personal.footerLinks` on the right side.

---

### Requirement 13: Data-Driven Content

**User Story:** As the site owner, I want all dynamic content to come from a single data file, so that I can update the site without touching component code.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL source all project data exclusively from the `projects` array in `src/data/content.js`.
2. THE Portfolio_Site SHALL source all certificate data exclusively from the `certificates` array in `src/data/content.js`.
3. THE Portfolio_Site SHALL source all personal information (name, bio, email, links, chips) exclusively from the `personal` object in `src/data/content.js`.
4. THE Portfolio_Site SHALL source Core_Stack_Card data exclusively from the `coreStack` array in `src/data/content.js`.
5. THE Portfolio_Site SHALL source Capability_Card data exclusively from the `capabilities` array in `src/data/content.js`.
6. WHEN the `projects` array in Content_Store contains N objects, THE Work_Section SHALL render exactly N Project_Cards with no component code changes.
7. WHEN the `certificates` array in Content_Store contains M objects, THE Work_Section SHALL render exactly M Certificate_Cards with no component code changes.
8. ALL text content populated into Content_Store (personal.firstName, personal.fullName, personal.bio, personal.focusChips, personal.heroLinks values, personal.copyright, and all section headings and descriptions) SHALL be copied verbatim from the Figma_Design. Text SHALL NOT be rewritten, shortened, paraphrased, or substituted. IF any text in the Figma_Design is unclear or appears truncated, THE developer SHALL stop and ask the site owner for the exact string before proceeding.

---

### Requirement 14: Image Handling

**User Story:** As the site owner, I want images to degrade gracefully when files are missing, so that the site looks intentional even before all images are placed.

#### Acceptance Criteria

1. WHEN any image path referenced in Content_Store resolves to a missing file, THE Portfolio_Site SHALL display a Placeholder_Image block styled with background `#eeeeed` at the same dimensions as the intended image.
2. THE Placeholder_Image SHALL NOT display a broken image icon or browser-default alt-text rendering.
3. THE Portfolio_Site SHALL apply the correct aspect ratios: 4:5 for the hero portrait, 1:1 for the about photo, 2:1 for project cover images, and landscape ~1.41:1 for certificate images.
6. THE hero portrait SHALL be loaded from `public/images/profile/hero.jpg` (aspect ratio 4:5, recommended ~920×1080 px).
7. THE about photo SHALL be loaded from `public/images/profile/about.jpg` (aspect ratio 1:1, recommended ~720×720 px).
8. EACH project cover image SHALL be loaded from `public/images/projects/<slug>/cover.jpg` (aspect ratio 2:1, recommended ~882×440 px), where `<slug>` matches the project's `slug` field in Content_Store.
9. EACH project detail image SHALL be loaded from `public/images/projects/<slug>/detail.jpg` (recommended ~2064×1040 px), where `<slug>` matches the project's `slug` field in Content_Store.
10. EACH certificate image SHALL be loaded from `public/images/certificates/<name>.jpg` (aspect ratio ~1.41:1), where `<name>` matches the filename specified in the certificate's `image` field in Content_Store.
11. THE `CONTENT-GUIDE.md` SHALL document each image path, its recommended dimensions, and include a copy-paste example for each image type.

---

### Requirement 15: Responsive Layout

**User Story:** As a mobile visitor, I want the site to be fully usable on a 390px screen, so that I can browse the portfolio on my phone.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL implement breakpoint-specific layouts matching the mobile Figma frames (nodes 24:2 and 25:2) at a viewport width of 390px.
2. WHEN the viewport width is below 768px, THE Navbar SHALL render as a 56px-tall pill with a hamburger icon as defined in Requirement 2.
3. WHEN the viewport width is below 768px, THE Hero_Section SHALL render the name at 44px and stack content vertically as defined in Requirement 3.
4. WHEN the viewport width is below 768px, THE Work_Section project cards SHALL render in a single-column stacked layout as defined in Requirement 6.
5. WHEN the viewport width is below 768px, THE Capabilities_Section SHALL render in a single-column layout as defined in Requirement 10.
6. WHEN the viewport width is below 768px, THE Certificate_Modal SHALL render at full width (366px) in a stacked layout as defined in Requirement 8.

---

### Requirement 16: SEO & Meta Tags

**User Story:** As the site owner, I want the portfolio to be discoverable and shareable, so that search engines index it correctly and social shares show a preview.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL include a `<meta name="description">` tag with a relevant summary in the HTML `<head>`.
2. THE Portfolio_Site SHALL include Open Graph meta tags (`og:title`, `og:description`, `og:image`, `og:url`) in the HTML `<head>`.
3. THE Portfolio_Site SHALL use semantic HTML elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`) to improve accessibility and SEO.

---

### Requirement 17: Documentation

**User Story:** As a future maintainer, I want clear documentation, so that I can add content and deploy the site without asking for help.

#### Acceptance Criteria

1. THE Portfolio_Site repository SHALL include a `CONTENT-GUIDE.md` at the project root documenting how to add a project and how to add a certificate, including the required image dimensions and file naming conventions.
2. THE Portfolio_Site repository SHALL include a `README.md` at the project root containing local setup instructions, build commands, and Vercel deployment steps.

---

### Requirement 18: Build & Deployment

**User Story:** As the site owner, I want the site to build and deploy reliably on Vercel, so that every push produces a live static site.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL produce a valid static build output by running `vite build` with zero errors.
2. THE Portfolio_Site SHALL NOT depend on any server-side runtime, backend service, or database at deploy time.
3. THE Portfolio_Site SHALL be deployable as a static site on Vercel using the default Vite build preset with no additional configuration beyond environment variables.
4. THE Portfolio_Site SHALL achieve a Lighthouse performance score of 80 or above, accessibility score of 90 or above, and best practices score of 90 or above when measured on the deployed URL.
