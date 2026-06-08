export interface Product {
  id: string;
  name: string;
  description: string;
  stack: string[];
  signal: string;
  badge: string;
  badgeVariant: "solo" | "professional";
  url?: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  timeline: string;
  location: string;
  type: string;
  highlights: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  timeline: string;
  location: string;
}

export interface JournalEntry {
  id: string;
  slug: string;
  company: string;
  title: string;
  timeline: string;
  location: string;
  stack: string[];
  teaser: string;
  projects: {
    name: string;
    description: string;
    stack: string[];
  }[];
  narrative: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

// ─── Products ────────────────────────────────────────────────────────────────

export const products: Product[] = [
  {
    id: "skolven",
    name: "Skolven",
    description:
      "School management SaaS. Smart timetabling, attendance, exams, student profiles, white-label support, 3-tier pricing.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Multi-tenant SaaS"],
    signal:
      "Designed and built solo — full SaaS from scratch, 15-min onboarding, ready to scale.",
    badge: "Solo build · Pre-launch",
    badgeVariant: "solo",
    url: "https://skolven.com",
  },
  {
    id: "tradeai",
    name: "TradeAI",
    description:
      "AI-powered trade & logistics operations platform. Document intelligence, customs workflow automation, shipment tracking.",
    stack: ["React", "Python", "LangChain", "RAG"],
    signal: "Full-stack AI platform built solo — live and in active use.",
    badge: "Solo build · Live",
    badgeVariant: "solo",
    url: "https://tradeai.nexavinetech.com",
  },
  {
    id: "pdf-intelligence",
    name: "DocuMind",
    description:
      "Transform documents into actionable intelligence, Upload any PDF, ask questions in natural language. Semantic search with source highlighting and page navigation.",
    stack: ["React", "LangChain", "Vector DB", "Node.js"],
    signal: "Built solo — live, production-grade document QnA.",
    badge: "Solo build · Live",
    badgeVariant: "solo",
    url: "https://docai.nexavinetech.com",
  },
  {
    id: "voice-ai",
    name: "Voice AI Agent",
    description:
      "Realtime voice AI using open-source LLMs. Low-latency speech pipeline with Pipecat and Qwen.",
    stack: ["Python", "Pipecat", "Qwen", "WebRTC"],
    signal: "End-to-end voice AI agent — open-source stack, real-time, live.",
    badge: "Solo build · Live",
    badgeVariant: "solo",
    url: "https://qwen-megakernel-pipecat.vercel.app",
  },
];

// ─── Journal Entries (most recent first) ─────────────────────────────────────

export const journalEntries: JournalEntry[] = [
  {
    id: "hilabs",
    slug: "hilabs",
    company: "HiLabs",
    title: "Everything Comes Together",
    timeline: "Feb 2023 — Present",
    location: "Bengaluru, India",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Material UI",
      "Vite",
      "Module Federation",
      "LangChain",
      "RAG",
      "SOLR",
      "Flask",
      "Python",
      "Node.js",
      "AWS Lambda",
      "PWA",
      "MySQL",
    ],
    teaser:
      "Senior Engineer → Tech Lead at an AI healthtech company. Built IQT from POC to production at Elevance Health, led micro-frontend architecture, promoted twice.",
    projects: [
      {
        name: "IQT — Intelligent Query Tool",
        description:
          "RAG + LangChain pipeline on contract PDFs. TIN-based grouping, QnA and Negotiate Assist. Reduced document review time by 40%. Running in production at Elevance Health. Full-stack build.",
        stack: ["LangChain", "RAG", "React", "TypeScript", "Node.js", "SOLR"],
      },
      {
        name: "Flask PDF Highlighter API",
        description:
          "Python service: takes a PDF and list of strings, returns annotated PDF with coordinate-precise highlights and page navigation. Used across multiple products in the platform.",
        stack: ["Flask", "Python", "PDF Processing"],
      },
      {
        name: "Pricing Configuration",
        description:
          "Contract lifecycle visibility: processing status, attribute extraction, chunk evidences. Audit trail for compliance teams. Production at Elevance and Molina.",
        stack: ["React", "TypeScript", "Redux Toolkit", "Material UI"],
      },
      {
        name: "Provider 360 Infinite Scroll Rewrite",
        description:
          "Intersection Observer API at page and accordion level. 45% rendering improvement across Elevance's large clinical datasets. Now the standard pattern for all infinite-scroll views in the platform.",
        stack: ["React", "Intersection Observer", "Performance"],
      },
      {
        name: "Micro-Frontend Architecture",
        description:
          "Vite Module Federation enabling independent builds and deploys for IQT, Pricing Configuration, and Provider 360.",
        stack: ["Vite", "Module Federation", "Micro-frontends"],
      },
      {
        name: "PWA Food Ordering Platform",
        description:
          "Internal platform replacing a WhatsApp-based ordering process. Automated order compilation and vendor routing. 90% reduction in operational dependency.",
        stack: ["React", "PWA", "Node.js", "AWS Lambda", "MySQL"],
      },
      {
        name: "Elevance HOS Enterprise Dashboard",
        description:
          "React dashboard surfacing AI model performance metrics and clinical data accuracy summaries via REST APIs.",
        stack: ["React", "TypeScript", "REST APIs", "Material UI"],
      },
    ],
    narrative: `HiLabs solves a specific and unglamorous problem: clinical data accuracy for large US health insurers. Provider directories with incorrect contact information. Contracts with wrong reimbursement details. Unverified credentialing records. Unglamorous until you realise the scale: millions of patients, billions of dollars in reimbursements, regulatory compliance on the line.

I joined as Senior Software Engineer II and was promoted twice to Technical Lead. The work has compounded — each system I built became the foundation for something larger.

IQT started as an internal demo exploring a ChatGPT-style interface on contract PDFs. A user could ask: "what are the reimbursement rates for this TIN group?" The demo worked. Then it went to production at Elevance, one of the largest health insurers in the US. I built IQT full-stack: the React frontend, the Node.js backend, and the LangChain pipeline — chunking, embedding, vector indexing, retrieval, and the PDF UI with page display and coordinate-precise highlights. Document review time dropped by 40%.

The Flask PDF Highlighter started as a utility for IQT — take a PDF and a list of strings, return an annotated PDF with precise highlights. It's now used across multiple products in the platform. Small surface area, high leverage.

Pricing Configuration is the kind of product that doesn't look impressive in a demo but is genuinely essential in production. Enterprise customers need to see that the AI isn't a black box. This is the audit trail that makes it trustworthy to compliance teams at Elevance and Molina.

Provider 360 had a rendering problem. Complex provider data, nested expandable accordion entries, large clinical datasets — rendering lag. The solution was Intersection Observer API at two levels: page-level and accordion-level. Elements only load and render as they enter the viewport. Rendering time dropped by 45%. This is now the pattern used across all infinite-scrolling views in the platform.

The micro-frontend architecture came from a real problem: three products with different release cadences, one shared deployment. Every team's changes could affect every other team's release. Vite Module Federation fixed this — independent builds and deploys for IQT, Pricing Configuration, and Provider 360.

The food ordering PWA was a side project that became production infrastructure. I built a PWA: orders submitted through the app, compiled automatically, routed to vendors. Operational dependency on WhatsApp dropped by 90%. It's a small system, but it runs in production every day.

Two promotions in two years isn't something you plan. From implementing features to designing them. From following architecture decisions to making them. From writing code to reviewing it and mentoring the engineers writing it. The hardest shift wasn't technical — it was learning to define OKRs for a team, run sprint planning that matches capacity to scope, and communicate tradeoffs to stakeholders who don't care about implementation details.

The biggest thing I've learned at HiLabs: how quickly a POC becomes a production system that customers depend on. Build like it's already in production. Because it will be, sooner than you think.`,
  },
  {
    id: "doodleblue",
    slug: "doodleblue",
    company: "Doodleblue Innovations",
    title: "Where React Became Second Nature",
    timeline: "Oct 2020 — Dec 2022",
    location: "Chennai, India",
    stack: [
      "React",
      "TypeScript",
      "Redux",
      "GraphQL",
      "Next.js",
      "Node.js",
      "AWS Lambda",
      "AWS Amplify",
      "React Native",
      "MobX",
      "Firebase",
      "Tailwind CSS",
      "Material UI",
    ],
    teaser:
      "Two years, five projects, three domains — fashion, fintech, enterprise HR. Where TypeScript clicked and mobile shipping became real.",
    projects: [
      {
        name: "Fashion E-commerce Platform (Dubai)",
        description:
          "Clothing rental and sales, merchant dashboard, inventory management, customer storefront, analytics. 25% increase in order completion rate.",
        stack: ["React", "TypeScript", "Node.js", "AWS Lambda", "AWS Amplify"],
      },
      {
        name: "SHL Interview Scheduling Portal",
        description:
          "Single portal for recruiters, panellists, and candidates. One-to-one, one-to-many, many-to-many panel configs. Calendar invite automation.",
        stack: ["React", "TypeScript", "GraphQL", "Node.js"],
      },
      {
        name: "NeoGrowth NeoCash Insta Web",
        description:
          "Mobile-first instant loan application. PAN validation, Aadhaar/DIGIO verification, UTM tracking, Firebase Analytics.",
        stack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      },
      {
        name: "SalesApp (React Native)",
        description:
          "Field sales app for loan applications, KYC photo capture, lead assignment, offline form submissions. Shipped to App Store and Play Store.",
        stack: ["React Native", "MobX", "iOS", "Android"],
      },
      {
        name: "Customer App (React Native)",
        description:
          "Loan management, EMI payments, PDF downloads. 10% increase in user engagement through performance improvements.",
        stack: ["React Native", "MobX", "iOS", "Android"],
      },
      {
        name: "Serverless Backend Architecture",
        description:
          "Node.js + AWS Lambda. AWS Amplify migration cut backend costs by 50% and deployment time by 50%.",
        stack: ["Node.js", "AWS Lambda", "AWS Amplify"],
      },
    ],
    narrative: `Two years. Five projects. Multiple clients across three different domains — fashion, fintech, and enterprise HR. This is where I stopped learning React and started really knowing it. The difference is hard to describe until you've crossed it: you stop thinking about how to do things in React and start thinking about what you're building.

The fashion platform was the first serious TypeScript project. TypeScript at first feels like it slows you down — you're writing more, thinking about types you never thought about in JavaScript. But once you're in a codebase of any size with multiple engineers, TypeScript is the difference between refactoring with confidence and refactoring with fear. I never want to work on a large JavaScript codebase without it again. Full stack: React on the frontend, Node.js backend, AWS Lambda for serverless microservices. 25% increase in order completion rate compared to their previous platform.

SHL was the first GraphQL project. Three user types: recruiters, panellists, candidates. Panel configurations: one-to-one, one-to-many, many-to-many interviews. GraphQL was the right call — letting the frontend query exactly the data shape it needed for each view without overloading the API with generic endpoints.

Fintech taught me to think about error states differently. Every step in a financial journey has failure modes that matter: a failed Aadhaar OTP, a PAN that doesn't match, a network drop mid-verification. Clear, precise error handling isn't a nice-to-have in fintech. It's the product.

Mobile development is genuinely different from web. No browser as a safety net. Platform-specific behaviours requiring real device testing. App lifecycle events — backgrounding, foregrounding, push notifications — that don't exist on the web. Shipping to the App Store for the first time involves a whole category of work that doesn't exist in web: certificates, provisioning profiles, review guidelines, binary uploads. Getting rejected by App Review once — because of a missing privacy permission string — is the fastest way to learn to read the guidelines carefully.

Two years in a product studio means you see a lot of codebases, a lot of client expectations, and a lot of different ways teams can succeed or fail. Agile done properly: sprint planning that sets realistic scope, standups that solve blockers instead of reporting status, retrospectives where the team is honest. More than any specific technology, Doodleblue gave me range. I know what it means to pick up a new domain quickly, understand a client's existing system, and deliver production-ready code without months of ramp-up. That's a skill that compounds.`,
  },
  {
    id: "roamhome",
    slug: "roamhome",
    company: "RoamHome",
    title: "Stepping Into React",
    timeline: "Jan 2020 — Jul 2020",
    location: "Goa, India",
    stack: ["React", "Redux", "Razorpay", "Google Maps", "Ant Design", "SCSS"],
    teaser:
      "Built a full holiday villa booking platform — guest app, partner dashboard, and a custom OTA calendar from scratch.",
    projects: [
      {
        name: "Guest Booking Platform",
        description:
          "Property search, booking flow, Razorpay payments, user profiles, post-stay ratings. Full guest-facing experience for holiday villa rentals.",
        stack: ["React", "Redux", "Razorpay", "Google Maps"],
      },
      {
        name: "Partner Dashboard",
        description:
          "Property management, availability toggling, booking and guest info for property owners. 50% operational efficiency gain.",
        stack: ["React", "Redux", "Ant Design"],
      },
      {
        name: "Custom OTA Calendar",
        description:
          "Consolidated bookings from MakeMyTrip, Airbnb, and Booking.com into a unified calendar view. Built from scratch. 40% reduction in booking management time.",
        stack: ["React", "SCSS"],
      },
    ],
    narrative: `Coming from server-rendered Pug templates at Planys, React felt like a different planet. No full page reloads. State lives in components. Re-renders happen automatically. It takes building something with real users before the mental model clicks.

RoamHome was an early-stage holiday villa rental platform — India-focused, Airbnb-comparable — with three distinct surfaces: guest-facing booking app, partner dashboard, and payment flows via Razorpay.

The booking app covered: property search with filters, listing pages, availability checks, booking funnel, Razorpay payments, user profiles, post-stay ratings. Good practice for state management across multiple steps. Redux for the first time — and immediately realising that global state has to be structured carefully or it becomes noise you can't read.

The OTA calendar was the most interesting problem. Property owners listed on multiple platforms simultaneously. Bookings from MakeMyTrip, Airbnb, Booking.com — different sources, statuses, overlapping date ranges, colour coding per OTA, and a partner who needs to see what's blocked, what's pending, what's available — all in one view. No off-the-shelf library handled the density. I built it from scratch. 40% reduction in booking management time.

Sometimes the right answer is to build it yourself. Not because it's impressive, but because the problem is specific enough that a general library will either not fit or require more customisation than writing from scratch.

January to July 2020 — then the pandemic. The engineering work was real, and the problems were the kind that don't appear in tutorials: multi-source data synchronisation, property owner workflows, payment edge cases. It solidified React for me. Not at an expert level yet — but enough to stop fighting the framework and start working with it. That's the inflection point that matters.`,
  },
  {
    id: "planys",
    slug: "planys",
    company: "Planys Technologies",
    title: "Where It All Began",
    timeline: "Dec 2018 — Sep 2019",
    location: "Chennai, India",
    stack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "Electron.js",
      "FFmpeg",
      "bee-queue",
    ],
    teaser:
      "First real codebase — 35 models, 400+ routes, offline Windows apps for offshore ROV inspections.",
    projects: [
      {
        name: "WebDesk",
        description:
          "Full MVC platform for underwater ROV inspection campaigns. 35 models, 11 subsystems, 400+ routes. 70% efficiency improvement in report generation.",
        stack: [
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Sequelize",
          "Pug",
          "Passport.js",
        ],
      },
      {
        name: "Electron.js Offline Report Generator",
        description:
          "Windows executable for offshore sites without internet. Async video processing via FFmpeg, ImageMagick, bee-queue job queues.",
        stack: ["Electron.js", "FFmpeg", "ImageMagick", "bee-queue", "Redis"],
      },
    ],
    narrative: `First real codebase — not a tutorial, hackathon, or toy project.
Planys builds software for Remotely Operated Vehicles used in underwater inspections for offshore oil platforms. Real hardware, remote locations, real clients depending on it.

WebDesk was a full MVC web platform managing entire inspection campaigns. The data hierarchy reflected the physical process: Report → Jobs → Days → Dives → Observations → Defects. By the end it had 35 database models, 11 controller subsystems, and 400+ routes. Technologies: Node.js, Express, PostgreSQL, Sequelize ORM, Pug templating, Passport.js authentication.

The offline problem: ROV inspections happen on offshore platforms, dam sites, and remote harbours — without internet. The solution was Electron.js, packaging the report UI into a Windows .exe engineers could copy to a laptop and run on-site without a browser or connectivity.

ROV dives produce video. Processing — trimming, compressing, frame extraction — is CPU-heavy. Synchronous processing would hang the UI for minutes. The solution was bee-queue, a Redis-backed job queue for Node.js. Jobs enqueued on dive submission, processed in the background via FFmpeg and ImageMagick, with real-time status in the UI. 70% efficiency improvement in report generation, no blocking, no crashes, job persistence on failure.

The most valuable thing I learned: read the entire codebase before touching it. Git proficiency — remote/origin, stashing, reverting, branching. Writing testable functions. Thinking about failure scenarios. Real product development for users who depend on it, not tutorials.`,
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Vite",
      "GraphQL",
    ],
  },
  { label: "Backend", items: ["Node.js", "Express.js", "Flask"] },
  { label: "Mobile", items: ["React Native"] },
  {
    label: "AI / ML",
    items: ["LangChain", "RAG", "Vector Search", "Prompt Engineering"],
  },
  {
    label: "Architecture",
    items: [
      "Micro-frontends",
      "Module Federation",
      "Serverless",
      "Multi-tenant SaaS",
      "PWA",
    ],
  },
  {
    label: "Cloud & Data",
    items: [
      "AWS Lambda",
      "AWS Amplify",
      "Firebase",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SOLR",
    ],
  },
];

// ─── Work Experience ──────────────────────────────────────────────────────────

export const experience: ExperienceEntry[] = [
  {
    company: "HiLabs",
    role: "Technical Lead",
    timeline: "Feb 2023 — Present",
    location: "Bengaluru, India",
    type: "Full-time",
    highlights: [
      "Promoted twice — SDE II → Sr. SDE → Tech Lead within 2 years",
      "Built IQT full-stack: React + Node.js + LangChain RAG pipeline; 40% reduction in document review time at Elevance Health",
      "Designed Vite Module Federation micro-frontend architecture across 3 products with independent release cadences",
      "Led Provider 360 rendering rewrite using Intersection Observer — 45% performance improvement, adopted as platform standard",
      "Shipped Flask PDF Highlighter API now used across multiple products in the platform",
      "Defined team OKRs, ran sprint planning, mentored engineers",
    ],
  },
  {
    company: "Doodleblue Innovations",
    role: "Senior Software Engineer",
    timeline: "Oct 2020 — Dec 2022",
    location: "Chennai, India",
    type: "Full-time",
    highlights: [
      "Delivered 5 client products across fashion e-commerce, fintech, and enterprise HR in 2 years",
      "Fashion platform (Dubai): React + TypeScript + AWS Lambda — 25% increase in order completion rate",
      "SHL interview portal: GraphQL API for complex panel scheduling across 3 user roles",
      "Shipped 2 React Native apps to App Store and Play Store (NeoGrowth SalesApp + Customer App)",
      "AWS Amplify migration cut backend costs and deployment time by 50% each",
    ],
  },
  {
    company: "RoamHome",
    role: "Frontend Engineer",
    timeline: "Jan 2020 — Jul 2020",
    location: "Goa, India",
    type: "Full-time",
    highlights: [
      "Built full guest booking platform: search, availability, Razorpay payments, ratings",
      "Designed partner dashboard for property management — 50% operational efficiency gain",
      "Built custom OTA calendar from scratch consolidating Airbnb, MakeMyTrip, Booking.com — 40% less booking management time",
    ],
  },
  {
    company: "Planys Technologies",
    role: "Web Engineer",
    timeline: "Dec 2018 — Sep 2019",
    location: "Chennai, India",
    type: "Internship",
    highlights: [
      "Built WebDesk — full MVC inspection platform with 35 DB models, 11 subsystems, 400+ routes",
      "Developed Electron.js Windows app for offline report generation on offshore sites",
      "Implemented bee-queue + FFmpeg async video processing pipeline — 70% efficiency improvement",
    ],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education: EducationEntry[] = [
  {
    institution: "Karunya Institute of Technology and Sciences",
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    timeline: "2014 — 2018",
    location: "Coimbatore, India",
  },
];
