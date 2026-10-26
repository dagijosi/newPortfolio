export interface FeaturedProject {
  id: string;
  title: string;
  nativeTitle?: string;
  category: string;
  type: "professional" | "independent";
  role: string;
  period: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  tech: string[];
  contributions: string[];
  technicalHighlights: string[];
}

export interface CuratedProject {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  featuredHighlight?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "loomerp",
    title: "LoomERP",
    category: "Enterprise Cloud Platform · SaaS & POS",
    type: "professional",
    role: "Lead Frontend Developer",
    period: "February 2025 – Present",
    description:
      "A comprehensive cloud-based business management platform designed to help businesses manage their operations through a unified system. It brings together inventory management, point of sale (POS), sales, purchasing, multi-store warehousing, CRM, manufacturing, rentals, financial operations, multi-branch management, and online storefronts.",
    image: "/image/loomerp.png",
    liveUrl: "https://erp.loomaddis.com/",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Node.js",
      "MySQL",
    ],
    contributions: [
      "Led frontend architecture across a modular enterprise ERP platform unifying complex business domains.",
      "Architected end-to-end modules for Inventory, POS, Multi-store Warehousing, Purchasing, Sales, and CRM with role-based access control (RBAC).",
      "Engineered offline data indexing and high-speed search for instant retrieval of inventory, store, and business records.",
      "Implemented efficient server-state management, cache invalidation, and data synchronization using TanStack Query.",
      "Developed schema-driven form handling and validation patterns with React Hook Form and Zod.",
      "Built an interactive chat assistant using indexed ERP data alongside modular frontend architecture.",
      "Built online storefront functionality, including product and category flows, branch-specific pricing, search, authentication, and structured SEO metadata.",
      "Improved the frontend architecture to support additional business modules and workflows without breaking existing operations.",
    ],
    technicalHighlights: [
      "Modular dashboard architecture allowing enterprise modules (POS, Inventory, Accounting) to load dynamically.",
      "Optimized client caching and indexing strategies to minimize redundant server requests in multi-branch setups.",
      "Strict TypeScript typing across hundreds of API payload contracts and complex internal UI states.",
      "High-performance storefront integration with server-rendered metadata for search engines and social sharing.",
    ],
  },
  {
    id: "eytaa",
    title: "EYTAA",
    nativeTitle: "እይታ",
    category: "Independent Desktop Software · Media Player",
    type: "independent",
    role: "Creator and Developer",
    period: "2024 – Present",
    description:
      "A native Windows desktop media player project focused on a refined viewing experience, local media management, playback flexibility, and a customizable interface. Designed as a modern, high-performance alternative to traditional desktop media players, EYTAA combines web-based interface precision with native system performance.",
    image: "/image/eytaa.png",
    tech: [
      "React",
      "TypeScript",
      "Tauri 2",
      "Rust",
      "libmpv",
      "SQLite",
      "Tailwind CSS",
    ],
    contributions: [
      "Designed and implemented desktop application architecture utilizing Tauri 2 and Rust backend bindings.",
      "Built an intuitive, responsive React + TypeScript frontend with dark-first cinematic controls.",
      "Integrated libmpv for versatile, high-efficiency hardware-accelerated media playback.",
      "Implemented local filesystem media scanner and playlist management systems in Rust.",
      "Designed an embedded SQLite database schema to store and query local media library metadata.",
      "Developed subtitle track selection, audio stream switching, and fine-grained playback controls.",
    ],
    technicalHighlights: [
      "Hybrid architecture: Native Rust layer for high-speed I/O and media decoding paired with a lightweight web UI via Tauri 2.",
      "Embedded SQLite database for fast local library indexing without relying on external cloud dependencies.",
      "Low CPU and RAM footprint compared to traditional Electron-based media applications.",
      "Keyboard shortcut bindings and custom window frame management tailored for Windows desktop ergonomics.",
    ],
  },
];

export const otherProjects: CuratedProject[] = [
  {
    id: "devos",
    title: "DevOS — Local AI Developer Workflow Manager",
    category: "AI & Developer Tooling",
    description:
      "An offline developer workflow manager integrating local LLMs to provide contextual AI assistance without external cloud APIs. Organizes tasks, maintains technical context, and automates repetitive planning routines.",
    tech: ["React", "TypeScript", "Node.js", "Local LLMs", "Automation"],
    image: "/image/component-builder.png",
    featuredHighlight: "Local LLM Integration",
  },
  {
    id: "kalado-coffee",
    title: "Kaladoo Coffee Platform",
    category: "E-Commerce Platform",
    description:
      "Responsive e-commerce platform built for specialty coffee sales. Features interactive product catalog, client-side cart management with Zustand, mobile-first checkout UI, and REST API integration.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    image: "/image/kalado-coffee.png",
    demo: "https://kalado-coffee.vercel.app/",
  },
  {
    id: "eudr-registry",
    title: "EUDR & Tree-Based Restoration Registry",
    category: "Regulatory Compliance Platform",
    description:
      "Environmental compliance tracking system built for forest conservation and EU Deforestation Regulation (EUDR) export verification. Features dynamic geographic tree maps and visual analytics dashboards.",
    tech: ["React", "TypeScript", "Laravel", "Tailwind CSS", "REST APIs", "MySQL"],
    image: "/image/login.png",
  },
  {
    id: "react-dagis",
    title: "react-dagis & DagiComponents",
    category: "Open Source Component Library",
    description:
      "Published open-source React component library and scaffolding CLI on NPM. Features modular, accessible, and high-performance UI components with tree-shakable exports and full TypeScript support.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "NPM"],
    image: "/image/template.png",
    github: "https://github.com/dagijosi/dagiTemplate",
    demo: "https://dagi-template.vercel.app/",
  },
  {
    id: "hr-dashboard",
    title: "HR Dashboard",
    category: "Enterprise Workforce Management",
    description:
      "Internal workforce tool for tracking employee profiles, attendance logs, and department performance metrics with clean data visualizations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/image/hr-dashboard.png",
    github: "https://github.com/dagijosi/HR-Dashboard",
    demo: "https://tauri-hr-dashboard.vercel.app/",
  },
  {
    id: "dmovies",
    title: "DMovies",
    category: "Media Discovery",
    description:
      "Media platform with real-time search, categorization, and personalized discovery feeds integrated with public entertainment APIs.",
    tech: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
    image: "/image/dmovies.png",
    github: "https://github.com/dagijosi/NewDMovie",
    demo: "https://new-d-movie.vercel.app/",
  },
];
