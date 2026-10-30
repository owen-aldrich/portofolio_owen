// ============================================================
// src/data/content.js  —  SINGLE SOURCE OF TRUTH
// Detail pages and certificate modals use this data.
// Homepage content, including project cards, is maintained in index.html.
// ============================================================

// ── PERSONAL INFO ────────────────────────────────────────────
// Change name, title, bio, email, and social links here.
export const personal = {
  firstName:   'Owen',                   // shown in navbar logo
  fullName:    'Owen Aldrich Setiawan',  // shown in footer and About
  name:        'Owen',                   // navbar logo (first word)
  heroName:    'Owen Aldrich S',         // exact Figma node 2:11 string
  tagline:     'Exploring AI and software development through practical projects.',

  // ── Hero buttons  ─────────────────────────────────────────
  heroBtns: [
    { label: 'View projects', href: '#work',                    dark: true,  download: false },
    { label: 'View CV',       href: '/public/cv/owen-aldrich-cv.pdf',  dark: false, download: false },
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
    "I'm Owen Aldrich Setiawan, a Computer Science student with a strong interest in Artificial Intelligence and Software Development. I enjoy learning how intelligent systems work and applying that knowledge by building practical projects with machine learning and modern software technologies.",
    "I'm particularly interested in Machine Learning, Computer Vision, Natural Language Processing, and Full-Stack Development. I also value teamwork, communication, and continuous learning. I'm always open to exploring new technologies, improving my skills, and gaining experience through new projects and challenges.",
  ],

  // ── About right-column info bar ───────────────────────────
  location: 'Indonesia',
  status:   'Open to opportunities',
  focus:    'AI + Software Development',

  // ── About photo ───────────────────────────────────────────
  // Path:  public/images/profile/about.jpg  (1:1, ~720×720 px)
  aboutPhoto: '/public/images/profile/about.jpg',

  // ── Focus chips under About bio ───────────────────────────
  focusChips: [
    'Machine Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Software Development',
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
//   7. Add the matching project card to #projects-panel in index.html
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
    slug:        'volt',
    title:       'VOLT — Smartphone Storefront',
    description: 'Responsive Indonesian smartphone storefront built with semantic HTML, modular CSS, and Vanilla JavaScript, featuring product discovery, persistent cart state, checkout validation, demo authentication, and warranty lookup flows.',
    category:    '// FRONTEND WEB',
    coverImage:  '/public/images/projects/volt/cover-home.png',
    detailImage: '/public/images/projects/volt/detail-cart.png',
    year:        '2026',
    techStack:   ['HTML', 'CSS', 'JavaScript'],
    features: [
      { title: 'Complete storefront journey', description: 'Eight connected pages cover product discovery, catalog browsing, cart management, checkout, account access, warranty lookup, and brand information.' },
      { title: 'Interactive product catalog', description: 'Twelve products can be filtered by series, price, and capacity, sorted, viewed as a grid or list, and browsed with pagination.' },
      { title: 'Persistent cart and session state', description: 'Cart quantities persist through localStorage, while demo login sessions use localStorage or sessionStorage depending on the remember-me option.' },
      { title: 'Validated commerce flows', description: 'Address and city validation gate the simulated checkout, with clear empty, success, and error states throughout the experience.' },
      { title: 'Reusable frontend architecture', description: 'Shared navigation, footer, product details, design tokens, and component styles keep the multi-page interface consistent and maintainable.' },
    ],
    outcomes: [
      { title: 'Eight-page static website', description: 'Built a smartphone storefront with HTML, CSS, and JavaScript that runs locally without a build step or backend.' },
      { title: 'Browser-based shopping demo', description: 'Implemented product filtering, a cart saved in localStorage, and checkout form validation. Orders, payments, login, and warranty checks are frontend simulations.' },
    ],
    githubUrl: 'https://github.com/owen-aldrich/VOLT',
    liveUrl:   null,
  },
  {
    slug:        'smart-demand',
    title:       'SmartDemand — Sales Volume Prediction',
    description: 'Random Forest ML model trained on the Brazilian E-Commerce (Olist) dataset that predicts monthly sales volume per product category based on pricing, quality, and market factors.',
    category:    '// MACHINE LEARNING',
    coverImage:  '/public/images/projects/smart-demand/cover.jpg',
    detailImage: '/public/images/projects/smart-demand/detail.jpg',
    year:        '2025',
    techStack:   ['Python', 'Scikit-Learn', 'FastAPI', 'HTML', 'CSS', 'Vanilla JavaScript'],
    features: [
      { title: 'Random Forest model',           description: 'Trained on the Olist Brazilian e-commerce dataset to predict monthly sales volume per product category.' },
      { title: 'Category-level target',         description: 'Target aggregated per category per month, which reduces noise compared with product-level sales.' },
      { title: 'FastAPI prediction endpoint',   description: 'Accepts input features and returns a sales volume prediction, served with a lightweight Vanilla JS frontend.' },
      { title: 'Iterative modeling notebooks',  description: 'Two notebooks documenting the move from product-level to category-level modeling, including feature engineering decisions.' },
    ],
    outcomes: [
      { title: 'R² 0.9541, MAE 8.92 on test set', description: 'Forecasts monthly category sales volume, outperforming a Linear Regression baseline (R² 0.9445) on held-out data.' },
      { title: 'Runnable locally', description: 'The FastAPI app, trained models, and setup instructions are included so users can run predictions locally.' },
    ],
    githubUrl: 'https://github.com/owen-aldrich/Smart-Demand',
    liveUrl:   null,
  },
  {
    slug:        'toxicheck',
    title:       'ToxiCheck — Indonesian Hate Speech Detector',
    description: 'Web app that classifies Indonesian text into Hate Speech, Abusive, or Neutral using four ML models (Naive Bayes, K-NN, Logistic Regression, and SVM) with majority voting and a Gradio interface.',
    category:    '// NLP / MACHINE LEARNING',
    coverImage:  '/public/images/projects/toxicheck/cover.jpg',
    detailImage: '/public/images/projects/toxicheck/detail.jpg',
    year:        '2025',
    techStack:   ['Python', 'Scikit-Learn', 'Gradio', 'NLTK', 'PySastrawi'],
    features: [
      { title: 'Four-model ensemble',          description: 'Naive Bayes, K-NN, Logistic Regression, and linear SVM with majority voting; SVM resolves 2–2 ties.' },
      { title: 'Indonesian NLP preprocessing', description: 'Slang normalization using Kamus Alay, NLTK stopword removal, and PySastrawi stemming.' },
      { title: 'Dual vectorization',           description: 'CountVectorizer for Naive Bayes and TF-IDF for K-NN, Logistic Regression, and SVM.' },
      { title: 'Gradio web interface',         description: 'Displays predictions from all four models and the final majority-vote result for each input.' },
    ],
    outcomes: [
      { title: 'Single decision for every input',                         description: 'Classifies Indonesian text as Neutral, Abusive, or Hate Speech using ensemble majority voting.' },
      { title: 'Logistic Regression: 81.93% accuracy, 0.7909 Macro F1',   description: 'Achieved the best performance on 2,634 held-out test samples.' },
      { title: 'Hugging Face Spaces deployment',                         description: 'Provides an accessible Gradio-based web application that runs directly in the browser.' },
    ],
    githubUrl: 'https://github.com/owen-aldrich/ToxiCheck',
    liveUrl:   'https://huggingface.co/spaces/AldRichss/ToxiCheck',
  },
  {
    slug:        'school-uniform-detection',
    title:       'School Uniform Attribute Detection',
    description: 'Real-time computer vision app that detects school uniform attributes (tie, school badge, hat, belt) from a live webcam feed using HOG feature extraction and an SVM classifier with sliding window.',
    category:    '// COMPUTER VISION',
    coverImage:  '/public/images/projects/school-uniform-detection/cover.jpg',
    detailImage: '/public/images/projects/school-uniform-detection/detail.png',
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
    description: 'Full-stack luxury and sports car dealership platform with live inventory status, protected user accounts, favorites, comparisons, test-drive booking, and an admin dashboard.',
    category:    '// FULL-STACK WEB',
    coverImage:  '/public/images/projects/sss-dealer/cover.jpg',
    detailImage: '/public/images/projects/sss-dealer/detail.jpg',
    year:        '2025',
    techStack:   ['HTML', 'CSS', 'Vanilla JavaScript', 'Node.js', 'Express.js', 'MySQL/TiDB Cloud', 'JWT'],
    features: [
      { title: 'Car catalog & status',        description: 'Filter cars by brand, type, and price; available and reserved vehicles show clear status badges.' },
      { title: 'Compare & favorites',         description: 'Compare two cars side by side and save favorites with a signed-in account.' },
      { title: 'Test-drive booking',          description: 'Authenticated users book available cars while occupied slots and reserved cars are blocked.' },
      { title: 'User accounts',               description: 'JWT sign-in, profile editing, and Cloudinary profile-photo uploads.' },
      { title: 'Admin dashboard',             description: 'Manage car listings, images, test drives, and customer leads through protected routes.' },
    ],
    outcomes: [
      { title: 'Complete buyer flow',         description: 'From discovery and comparison to favorites and test-drive booking.' },
      { title: 'Accurate availability',       description: 'Four inventory states keep sold and draft vehicles off the public catalog.' },
      { title: 'Deployment-ready stack',      description: 'Node.js and Express.js power the backend, with MySQL/TiDB Cloud for data storage and JWT for authentication.' },
    ],
    githubUrl: 'https://github.com/owen-aldrich/SSS-Dealer',
    liveUrl:   'https://sss-dealer-production.up.railway.app/',
  },
  {
    slug:        'tutor-in',
    title:       'Tutor-In — Peer Tutoring Platform',
    description: 'Commercial 1-on-1 peer tutoring platform connecting students (mentees) with high-achieving student mentors, featuring escrow payments, Discord-based sessions, and mentor wallets.',
    category:    '// FULL-STACK WEB',
    coverImage:  '/public/images/projects/tutor-in/cover.jpg',
    detailImage: '/public/images/projects/tutor-in/detail.jpg',
    year:        '2025',
    techStack:   ['React 19', 'JavaScript', 'Vite', 'Express.js', 'MySQL', 'Tailwind CSS', 'JWT', 'Zod'],
    features: [
      { title: 'Tutor discovery and booking', description: 'Students can search mentors by subject, hourly rate, and rating, view available time slots, and book tutoring sessions.' },
      { title: 'Simulated escrow workflow',   description: 'A mock payment flow holds funds until a session is completed, demonstrating the transaction lifecycle without processing real payments.' },
      { title: 'Mentor wallet and payout',    description: 'Mentors can monitor available and pending balances, view transaction history, and simulate withdrawal requests.' },
      { title: 'Notifications and reviews',   description: 'Users receive contextual booking and transaction notifications, while students can review mentors after completed sessions.' },
      { title: 'Role-based dashboards',       description: 'Separate student and mentor experiences with scheduling, session management, and protected access using JWT authentication and role authorization.' },
    ],
    outcomes: [
      { title: 'Safer transaction experience',  description: 'The escrow-inspired workflow clearly separates payment, held funds, session completion, and mentor balance states.' },
      { title: 'Streamlined mentor operations', description: 'Scheduling, session tracking, wallet information, and payout requests are consolidated into one dedicated dashboard.' },
      { title: 'Transparent platform pricing',  description: 'An 8% service fee is shown separately at checkout while mentors retain their full listed hourly rate.' },
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
    image:       '/public/images/certificates/market research belingua.png',
    pdfUrl:      '/public/images/certificates/Beelingua-2026-C-sayuwmw0AhguF (1).pdf',
  },
  {
    id:          'beelingua-c1-professional-office',
    title:       'Professional Office (V2)',
    issuer:      'Beelingua · Binus University',
    platform:    'Beelingua',
    date:        'Jun 2026',
    grade:       'C1.2',
    description: 'Verified Certificate — completed English course at CEFR C1.2 level with a passing grade. Certificate ID: 2026-C-pFs7K38MIrcU5.',
    image:       '/public/images/certificates/preofessional office belingua.png',
    pdfUrl:      '/public/images/certificates/Beelingua-2026-C-pFs7K38MIrcU5.pdf',
  },
  {
    id:          'microsoft-azure-ai-900',
    title:       'Microsoft Elevate AI Training Session',
    issuer:      'Microsoft · Binus University · GreatNusa',
    platform:    'GreatNusa',
    date:        'Mar 2026',
    grade:       null,
    description: 'Certificate of Completion — 15 hours of Azure AI Fundamentals training (AI-900T00-A), signed by Microsoft Indonesia and GreatNusa. Cert No: 111541121814949/GreatNusa/III/2026.',
    image:       '/public/images/certificates/greatnusa.png',
    pdfUrl:      '/public/images/certificates/1115.85.41121.pdf',
  },
  {
    id:          'bncc-activist-37',
    title:       'Activist — 37th Board of BNCC',
    issuer:      'Bina Nusantara Computer Club',
    platform:    'BNCC',
    date:        'Sep 2026',
    grade:       null,
    description: 'Certificate of Completion for demonstrating exceptional commitment, teamwork, and innovation as an Activist of the 37th Board of Bina Nusantara Computer Club. #VIVABNCC.',
    image:       '/public/images/certificates/Owen Aldrich Setiawan (1).png',
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
      { name: 'C',          icon: 'c-lang.svg'     },
    ],
  },
  {
    title:    'AI & Machine Learning',
    subtitle: '// Intelligent Systems & Models',
    items: [
      { name: 'HuggingFace',  icon: 'huggingface.svg' },
      { name: 'NumPy',        icon: 'numpy.svg'       },
      { name: 'Pandas',       icon: 'pandas.svg'      },
    ],
  },
  {
    title:    'Web Development',
    subtitle: '// Interactive Web Interfaces',
    items: [
      { name: 'HTML5',   icon: 'html5.svg'    },
      { name: 'CSS3',    icon: 'css3.svg'     },
      { name: 'JavaScript', icon: 'javascript.svg' },
    ],
  },
  {
    title:    'Backend & Database',
    subtitle: '// Scalable Server Architectures',
    items: [
      { name: 'Node.js',    icon: 'nodejs.svg'     },
      { name: 'Express',    icon: 'express.svg'    },
      { name: 'MySQL',      icon: 'mysql.svg'      },
    ],
  },
  {
    title:    'Tools & Platforms',
    subtitle: '// Coding, Collaboration & Notebooks',
    items: [
      { name: 'GitHub',             icon: 'github.svg'       },
      { name: 'Google Colab',       icon: 'google-colab.svg' },
      { name: 'Visual Studio Code', icon: 'vscode.svg'       },
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
    title:       ['SOFTWARE', 'DEVELOPER'],
    description: 'Building responsive web applications, clean user interfaces, and reliable APIs from frontend to backend.',
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
