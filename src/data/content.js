// ============================================================
// src/data/content.js  —  SINGLE SOURCE OF TRUTH
// Edit ONLY this file to update text, images, and data.
// ============================================================

// ── PERSONAL INFO ────────────────────────────────────────────
// Change name, title, bio, email, and social links here.
export const personal = {
  firstName:   'Owen',                   // shown in navbar logo
  fullName:    'Owen Aldrich Setiawan',  // shown in footer and About
  name:        'Owen',                   // navbar logo (first word)
  heroName:    'Owen Aldrich S',         // exact Figma node 2:11 string
  tagline:     'AI Engineer & Full-Stack Developer crafting scalable products, end to end, from model to interface.',

  // ── Hero buttons  ─────────────────────────────────────────
  heroBtns: [
    { label: 'View projects', href: '#work',                    dark: true,  download: false },
    { label: 'View CV',       href: '/cv/owen-aldrich-cv.pdf',  dark: false, download: true  },
  ],

  // ── Social / contact link cards in Hero ───────────────────
  // Icon files: src/assets/icons/<icon>.svg (20×20)
  heroLinks: [
    { label: 'GitHub',   value: 'github.com/owen-aldrich',                 href: 'https://github.com/owen-aldrich',                      icon: 'github.svg'   },
    { label: 'Email',    value: 'owenaldrichsetiawan@gmail.com',            href: 'https://mail.google.com/mail/?view=cm&to=owenaldrichsetiawan@gmail.com',                 icon: 'mail.svg'     },
    { label: 'LinkedIn', value: 'linkedin.com/in/owen-aldrich-setiawan',    href: 'https://www.linkedin.com/in/owen-aldrich-setiawan',    icon: 'linkedin.svg' },
  ],

  // ── About bio (two paragraphs) ────────────────────────────
  bio: [
    "I'm Owen Aldrich Setiawan, an AI Engineer who builds innovative intelligent systems that are proven in real-world use and measurable by results. My focus is Applied Machine Learning and AI-powered products, with full-stack development as a supporting strength to ship them as dependable digital products, from first prototype to final application.",
    "Outside of computer science, I have strong teamwork and communication skills, and I'm interested in learning new languages. I always strive to learn new things and create technology that is both useful and easy to use.",
  ],

  // ── About right-column info bar ───────────────────────────
  location: 'Indonesia',
  status:   'Open to opportunities',
  focus:    'AI + Full-Stack Delivery',

  // ── About photo ───────────────────────────────────────────
  // Path:  public/images/profile/about.jpg  (1:1, ~720×720 px)
  aboutPhoto: '/images/profile/about.jpg',

  // ── Focus chips under About bio ───────────────────────────
  focusChips: [
    'Machine Learning',
    'Computer Vision',
    'NLP & Speech Processing',
    'Full-Stack Engineering',
  ],

  // ── Contact section ───────────────────────────────────────
  email:   'owenaldrichsetiawan@gmail.com',
  socials: [
    { label: 'GitHub',   href: 'https://github.com/owen-aldrich',                   icon: 'github.svg'   },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/owen-aldrich-setiawan', icon: 'linkedin.svg' },
    { label: 'Email',    href: 'https://mail.google.com/mail/?view=cm&to=owenaldrichsetiawan@gmail.com', icon: 'mail.svg' },
  ],

  // ── Footer nav links ──────────────────────────────────────
  footerLinks: [
    { label: 'Projects', href: '/#work'    },
    { label: 'About',    href: '/#about'   },
    { label: 'Contact',  href: '/#contact' },
    { label: 'Email',    href: 'https://mail.google.com/mail/?view=cm&to=owenaldrichsetiawan@gmail.com' },
  ],

  copyright: '© 2026 Owen Aldrich. All rights reserved.',
};

// ── PROJECTS ─────────────────────────────────────────────────
// To ADD a new project:
//   1. Create folder: public/images/projects/<slug>/
//   2. Add cover.jpg  (2:1, ~882×440 px)  — shown on card
//   3. Add detail.jpg (~2064×1040 px)    — shown on detail page
//   4. Copy one object below, paste it at the end of the array
//   5. Change every field (slug must be URL-safe, lowercase, hyphens)
//   6. Add tech names to techStack[] — they render as pills automatically
//
// Fields:
//   slug         – URL slug, e.g. "my-project"
//   title        – project name
//   description  – short description shown on card
//   category     – shown as badge on detail page (e.g. "// NEURAL AGENTS")
//   coverImage   – path relative to /public  (see step 2)
//   detailImage  – path relative to /public  (see step 3)
//   year         – string, e.g. "2025"
//   techStack    – array of tech name strings
//   features     – array of { title, description }
//   outcomes     – array of { title, description }
//   githubUrl    – string or null
//   liveUrl      – string or null
export const projects = [
  {
    slug:        'vidnote',
    title:       'VidNote — Video in, Notes Out',
    description: 'Local app that turns any video or YouTube link into color-coded speaker subtitles, a clickable transcript, and a timestamped summary — no API key, runs fully offline.',
    category:    '// AI / NLP',
    coverImage:  '/images/projects/vidnote/cover.jpg',
    detailImage: '/images/projects/vidnote/detail.jpg',
    year:        '2025',
    techStack:   ['Python', 'Whisper', 'Ollama', 'Gemma', 'FFmpeg'],
    features: [
      { title: 'Speaker diarization',     description: 'Transcript automatically split and color-coded per speaker using pyannote.' },
      { title: 'Hardsubbed video output', description: 'Colored subtitles burned directly into the video via FFmpeg using NVENC or libx264.' },
      { title: 'Timestamped summary',     description: 'Key points and conclusion generated locally by Ollama (Gemma), with clickable timestamps.' },
      { title: 'Fully offline pipeline',  description: 'No API key or internet connection required after the one-time model download.' },
      { title: 'Web UI and CLI',          description: 'Three-step browser interface (Source → Process → Result) plus a headless CLI mode for scripting.' },
    ],
    outcomes: [
      { title: 'No recurring cost',        description: 'Runs entirely on local hardware — no API fees, no subscriptions, no data sent to third parties.' },
      { title: 'Works on any machine',     description: 'GPU accelerates processing; CPU fallback means it runs on any laptop without special hardware.' },
      { title: 'Ready-to-use output',      description: 'Each run produces a hardsubbed video, multiple subtitle formats, and a timestamped summary in one go.' },
    ],
    githubUrl: 'https://github.com/owen-aldrich/VidNote',
    liveUrl:   null,
  },
  {
    slug:        'smart-demand',
    title:       'SmartDemand — Sales Volume Prediction',
    description: 'Random Forest ML model trained on the Brazilian E-Commerce (Olist) dataset that predicts monthly sales volume per product category based on pricing, quality, and market factors.',
    category:    '// MACHINE LEARNING',
    coverImage:  '/images/projects/smart-demand/cover.jpg',
    detailImage: '/images/projects/smart-demand/detail.jpg',
    year:        '2025',
    techStack:   ['Python', 'Scikit-Learn', 'FastAPI', 'HTML', 'CSS', 'Railway'],
    features: [
      { title: 'Random Forest model',           description: 'Trained on the Olist Brazilian e-commerce dataset to predict monthly sales volume per product category.' },
      { title: 'Category-level target',         description: 'Target aggregated per category per month, which reduces noise compared with product-level sales.' },
      { title: 'FastAPI prediction endpoint',   description: 'Accepts input features and returns a sales volume prediction, served with a lightweight Vanilla JS frontend.' },
      { title: 'Iterative modeling notebooks',  description: 'Two notebooks documenting the move from product-level to category-level modeling, including feature engineering decisions.' },
    ],
    outcomes: [
      { title: 'R² 0.9541, MAE 8.92 on test set', description: 'Forecasts monthly category sales volume, outperforming a Linear Regression baseline (R² 0.9445) on held-out data.' },
      { title: 'Deployed as a public web app',     description: 'FastAPI app live on Railway — accessible in the browser without a local Python setup.' },
    ],
    githubUrl: 'https://github.com/owen-aldrich/Smart-Demand',
    liveUrl:   null,
  },
  {
    slug:        'toxicheck',
    title:       'ToxiCheck — Indonesian Hate Speech Detector',
    description: 'Web app that classifies Indonesian tweets into Hate Speech, Abusive, or Neutral using four ML models (Naive Bayes, K-NN, Logistic Regression, SVM) with a majority-vote mechanism and Streamlit UI.',
    category:    '// NLP / MACHINE LEARNING',
    coverImage:  '/images/projects/toxicheck/cover.jpg',
    detailImage: '/images/projects/toxicheck/detail.jpg',
    year:        '2025',
    techStack:   ['Python', 'Scikit-Learn', 'Streamlit', 'NLTK', 'PySastrawi', 'Docker'],
    features: [
      { title: 'Four-model ensemble',          description: 'Naive Bayes, K-NN, Logistic Regression, and linear SVM with majority vote; SVM breaks 2-2 ties.' },
      { title: 'Indonesian NLP preprocessing', description: 'Slang normalization via Kamus Alay, NLTK stopword removal, and PySastrawi stemming.' },
      { title: 'Dual vectorization',           description: 'CountVectorizer for Naive Bayes and TF-IDF for the other three models.' },
      { title: 'Streamlit UI',                 description: 'Shows per-model predictions and the vote distribution for every input.' },
    ],
    outcomes: [
      { title: 'Single decision for every input',        description: 'Labels Indonesian tweets as Neutral, Abusive, or Hate Speech — majority vote always produces one result.' },
      { title: 'SVM: 81.66% accuracy, 0.7865 macro F1', description: 'Highest of the four models on 2,634 held-out tweets.' },
      { title: 'One-command Docker deployment',          description: 'Runs in a container without installing Python or any dependencies.' },
    ],
    githubUrl: 'https://github.com/owen-aldrich/ToxiCheck',
    liveUrl:   'https://huggingface.co/spaces/AldRichss/ToxiCheck',
  },
  {
    slug:        'school-uniform-detection',
    title:       'School Uniform Attribute Detection',
    description: 'Real-time computer vision app that detects school uniform attributes (tie, school badge, hat, belt) from a live webcam feed using HOG feature extraction and an SVM classifier with sliding window.',
    category:    '// COMPUTER VISION',
    coverImage:  '/images/projects/school-uniform-detection/cover.jpg',
    detailImage: '/images/projects/school-uniform-detection/detail.png',
    year:        '2025',
    techStack:   ['Python', 'OpenCV', 'Scikit-Learn', 'Scikit-Image', 'NumPy'],
    features: [
      { title: 'Real-time webcam detection',      description: 'Detects four uniform attributes — tie, school badge, hat, and belt — live from a webcam feed with a compliance checklist overlay.' },
      { title: 'HOG feature extraction',          description: 'Each 96×96 crop is processed with CLAHE lighting normalization before being converted to a HOG feature vector for robust shape representation.' },
      { title: 'Linear SVM with hard negatives',  description: 'SVM classifier trained with hard negative mining — randomly sampled background patches are iteratively added to reduce false positives.' },
      { title: 'Sliding-window pipeline',         description: 'Per-class confidence thresholds, face exclusion via Haar cascade, and non-maximum suppression combine to clean up overlapping detections.' },
      { title: 'Live compliance checklist',       description: 'On-screen overlay shows which uniform attributes are currently detected, giving instant visual feedback during the webcam session.' },
    ],
    outcomes: [
      { title: '83.7% mAP (crop-level)',          description: 'Achieved on the held-out test set, with 0.84 F1 specifically on school badge detection.' },
      { title: 'Full pipeline — no deep learning', description: 'Covers raw Pascal VOC annotations all the way to a live webcam demo using only classical computer vision and ML.' },
      { title: 'Lightweight & CPU-only',           description: 'Runs without a GPU or deep learning runtime, making it a practical starting point for automating uniform compliance checks.' },
    ],
    githubUrl: 'https://github.com/owen-aldrich/School-Uniform-Attribute-Detection',
    liveUrl:   null,
  },
  {
    slug:        'sss-dealer',
    title:       'SSS+Dealer — Luxury Car Dealership Platform',
    description: 'Full-stack luxury and sports car dealership platform with browsing, filtering, side-by-side comparison, favorites, and online test drive booking — plus a full admin panel.',
    category:    '// FULL-STACK WEB',
    coverImage:  '/images/projects/sss-dealer/cover.jpg',
    detailImage: '/images/projects/sss-dealer/detail.jpg',
    year:        '2025',
    techStack:   ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'HTML', 'CSS', 'JavaScript'],
    features: [
      { title: 'Car catalog with filters',  description: 'Browse 18 seeded luxury and sports cars; filter by brand, type, price range, and drivetrain.' },
      { title: 'Side-by-side comparison',   description: 'Compare any two cars on full specifications in a structured table; compare history saved per user account.' },
      { title: 'Favorites list',            description: 'Logged-in users can toggle favorites on any car and view them in the account dashboard.' },
      { title: 'Test drive booking',        description: 'Booking form open to both guests and logged-in users; submissions stored in the database and managed from the admin panel.' },
      { title: 'Admin panel',               description: 'Full CRUD for car listings, lead management, and test drive schedule — protected by admin role middleware.' },
    ],
    outcomes: [
      { title: 'Covers the full buyer journey', description: 'From browsing and comparing to booking a test drive — all flows work end-to-end in a single application.' },
      { title: 'Secure by default',             description: 'JWT middleware protects all user-specific and admin routes; passwords hashed with bcrypt.' },
      { title: 'Easy to extend',                description: 'Prisma schema and seeded data make it straightforward to add new car listings or expand filtering without touching frontend logic.' },
    ],
    githubUrl: 'https://github.com/owen-aldrich/SSS-Dealer',
    liveUrl:   null,
  },
  {
    slug:        'tutor-in',
    title:       'Tutor-In — Peer Tutoring Platform',
    description: 'Commercial 1-on-1 peer tutoring platform connecting students (mentees) with high-achieving student mentors, featuring escrow payments, Discord-based sessions, and mentor wallets.',
    category:    '// FULL-STACK WEB',
    coverImage:  '/images/projects/tutor-in/cover.jpg',
    detailImage: '/images/projects/tutor-in/detail.jpg',
    year:        '2025',
    techStack:   ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind', 'Zod'],
    features: [
      { title: 'Tutor discovery and booking', description: 'Public directory with search and filters by subject, hourly rate, and rating; each profile shows available slots and a booking button.' },
      { title: 'Escrow payment flow',         description: 'Funds held via payment gateway (Midtrans/Xendit) and released to the mentor wallet only after the session is automatically marked complete.' },
      { title: 'Mentor wallet and payout',    description: 'Mentors track available balance, on-hold funds, and transaction history; withdrawals via bank transfer with no minimum or admin fee.' },
      { title: 'In-app notification system',  description: 'Notifications sent for every key event — new booking, payment confirmed, session complete, new review, and payout — each with full context.' },
      { title: 'Role-based dashboards',       description: 'Separate dashboards for Mentee and Mentor roles; route protection enforced via a custom proxy middleware.' },
    ],
    outcomes: [
      { title: 'Both sides are protected',      description: 'Escrow holds funds until session completion — students are not charged for no-shows and mentors are guaranteed payment for completed sessions.' },
      { title: 'Mentors can earn without admin overhead', description: 'Wallet, payout, and session tracking are handled by the platform, so mentors focus on teaching rather than managing payments.' },
      { title: 'Transparent fee structure',     description: 'The 8% service fee is added on top of the mentor rate and shown at checkout — mentors always receive their full listed rate.' },
    ],
    githubUrl: 'https://github.com/owen-aldrich/Tutor-In',
    liveUrl:   null,
  },
];

// ── CERTIFICATES ─────────────────────────────────────────────
// To ADD a new certificate:
//   1. Add image: public/images/certificates/<filename>.jpg
//      (landscape, ratio ~1.41:1, e.g. 1414×1000 px)
//   2. Copy one object below, paste it at the end of the array
//   3. Fill in all fields
//
// Fields:
//   id          – unique key string (kebab-case)
//   title       – certificate name
//   issuer      – issuing organisation
//   platform    – platform/provider (shown as "Issuer · Platform")
//   date        – display string, e.g. "Jan 2025"
//   grade       – string or null (shown as "Grade: 99%" or hidden)
//   description – one sentence shown in the modal
//   image       – path relative to /public
//   pdfUrl      – direct URL to the PDF or null
export const certificates = [
  {
    id:          'beelingua-c2-market-research',
    title:       'Market Research & Business Communication (V2)',
    issuer:      'Beelingua · Binus University',
    platform:    'Beelingua',
    date:        'Jul 2026',
    grade:       'C2.2',
    description: 'Verified Certificate — completed English course at CEFR C2.2 level with a passing grade. Certificate ID: 2026-C-sayuwmw0AhguF.',
    image:       '/images/certificates/market research belingua.png',
    pdfUrl:      '/images/certificates/Beelingua-2026-C-sayuwmw0AhguF (1).pdf',
  },
  {
    id:          'beelingua-c1-professional-office',
    title:       'Professional Office (V2)',
    issuer:      'Beelingua · Binus University',
    platform:    'Beelingua',
    date:        'Jun 2026',
    grade:       'C1.2',
    description: 'Verified Certificate — completed English course at CEFR C1.2 level with a passing grade. Certificate ID: 2026-C-pFs7K38MIrcU5.',
    image:       '/images/certificates/preofessional office belingua.png',
    pdfUrl:      '/images/certificates/Beelingua-2026-C-pFs7K38MIrcU5.pdf',
  },
  {
    id:          'microsoft-azure-ai-900',
    title:       'Microsoft Elevate AI Training Session',
    issuer:      'Microsoft · Binus University · GreatNusa',
    platform:    'GreatNusa',
    date:        'Mar 2026',
    grade:       null,
    description: 'Certificate of Completion — 15 hours of Azure AI Fundamentals training (AI-900T00-A), signed by Microsoft Indonesia and GreatNusa. Cert No: 111541121814949/GreatNusa/III/2026.',
    image:       '/images/certificates/greatnusa.png',
    pdfUrl:      '/images/certificates/1115.85.41121.pdf',
  },
  {
    id:          'bncc-activist-37',
    title:       'Activist — 37th Board of BNCC',
    issuer:      'Bina Nusantara Computer Club',
    platform:    'BNCC',
    date:        'Sep 2026',
    grade:       null,
    description: 'Certificate of Completion for demonstrating exceptional commitment, teamwork, and innovation as an Activist of the 37th Board of Bina Nusantara Computer Club. #VIVABNCC.',
    image:       '/images/certificates/Owen Aldrich Setiawan (1).png',
    pdfUrl:      null,
  },
];

// ── CORE STACK (Section 03) ───────────────────────────────────
// 5 categories matching Framer design. Each category has title, subtitle, items[].
// To ADD a new tech icon:
//   1. Save the SVG as src/assets/icons/<name>.svg
//   2. Add { name: 'TechName', icon: 'name.svg' } to the right items[]
// If no icon file exists, a text badge is shown automatically.
export const coreStack = [
  {
    title:    'Languages',
    subtitle: '// Programming Languages',
    items: [
      { name: 'Python',     icon: 'python.svg'     },
      { name: 'JavaScript', icon: 'javascript.svg' },
      { name: 'Java',       icon: 'java.svg'       },
      { name: 'C',          icon: 'c-lang.svg'     },
    ],
  },
  {
    title:    'AI & Machine Learning',
    subtitle: '// Intelligent Systems & Models',
    items: [
      { name: 'TensorFlow',   icon: 'tensorflow.svg'  },
      { name: 'PyTorch',      icon: 'pytorch.svg'     },
      { name: 'HuggingFace',  icon: 'huggingface.svg' },
      { name: 'NumPy',        icon: 'numpy.svg'       },
      { name: 'Pandas',       icon: 'pandas.svg'      },
    ],
  },
  {
    title:    'Web Development',
    subtitle: '// Interactive Web Interfaces',
    items: [
      { name: 'React',   icon: 'react.svg'    },
      { name: 'Tailwind',icon: 'tailwind.svg' },
      { name: 'HTML5',   icon: 'html5.svg'    },
      { name: 'CSS3',    icon: 'css3.svg'     },
    ],
  },
  {
    title:    'Backend & Database',
    subtitle: '// Scalable Server Architectures',
    items: [
      { name: 'Node.js',    icon: 'nodejs.svg'     },
      { name: 'Express',    icon: 'express.svg'    },
      { name: 'FastAPI',    icon: 'fastapi.svg'    },
      { name: 'PostgreSQL', icon: 'postgresql.svg' },
      { name: 'MySQL',      icon: 'mysql.svg'      },
      { name: 'Prisma',     icon: 'prisma.svg'     },
      { name: 'Supabase',   icon: 'supabase.svg'   },
    ],
  },
  {
    title:    'DevOps & Cloud',
    subtitle: '// Infrastructure & Deployment',
    items: [
      { name: 'Docker', icon: 'docker.svg' },
      { name: 'Git',    icon: 'git.svg'    },
      { name: 'Vercel', icon: 'vercel.svg' },
    ],
  },
];

// ── TECHNICAL CAPABILITIES (Section 04) ──────────────────────
// 3-column grid (2 rows = 6 cards). Hover inverts to dark.
// number, title (2 lines, uppercase), description
export const capabilities = [
  {
    number:      '01',
    title:       ['MACHINE', 'LEARNING'],
    description: 'Predictive modeling, regression, neural pipelines, and algorithmic solutions.',
  },
  {
    number:      '02',
    title:       ['DEEP', 'LEARNING'],
    description: 'Multi-layered neural architectures, transformer models, and custom model fine-tuning.',
  },
  {
    number:      '03',
    title:       ['COMPUTER', 'VISION'],
    description: 'Real-time object detection, image classification, pose tracking, and edge perception.',
  },
  {
    number:      '04',
    title:       ['NLP &', 'GENERATIVE AI'],
    description: 'Large Language Models, agentic workflows, contextual RAG, and prompt orchestration.',
  },
  {
    number:      '05',
    title:       ['DATA', 'ANALYSIS'],
    description: 'High-dimensional data processing, statistical modeling, insights, and feature engineering.',
  },
  {
    number:      '06',
    title:       ['SOFTWARE', 'ENGINEERING'],
    description: 'Scalable full-stack systems, modern responsive interfaces, robust APIs, and cloud deployments.',
  },
];

// ── NAVBAR LINKS ──────────────────────────────────────────────
export const navLinks = [
  { label: 'About',        id: 'about'        },
  { label: 'Work',         id: 'work'         },
  { label: 'Stack',        id: 'stack'        },
  { label: 'Capabilities', id: 'capabilities' },
  { label: 'Contact',      id: 'contact'      },
];
