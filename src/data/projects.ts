export interface ProjectScreenshot {
  title: string;
  image: string;
  description?: string;
}

export interface ArchitecturePipelineStep {
  step: string;
  title: string;
  description: string;
}

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
  screenshots?: ProjectScreenshot[];
  architecturePipeline?: ArchitecturePipelineStep[];
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
  differentiation?: string;
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
    id: "qale",
    title: "Qalē",
    nativeTitle: "ቃሌ",
    category: "Independent Desktop Software · Voice-to-Code AI Assistant",
    type: "independent",
    role: "Creator and Developer",
    period: "2024 – Present",
    description:
      "A high-performance, privacy-first offline voice-to-code assistant engineered specifically for developers that converts spoken natural language directly into syntactic code, operators, and editor commands in real-time (~150–250ms). Locally accelerated on NVIDIA RTX GPUs via CUDA with FP16 compute, Qalē couples local OpenAI Whisper models with active IDE window context profiling, an AST-inspired syntax transformation engine, Butterworth DSP noise gating, and non-destructive Win32 clipboard injection with zero cloud dependencies.",
    image: "/image/qale/dashboard_general.png",
    githubUrl: "https://github.com/dagijosi/Qale",
    screenshots: [
      {
        title: "General Settings & Activation Hub",
        image: "/image/qale/dashboard_general.png",
        description:
          "Global hotkey configuration, injection mode toggles (instant clipboard vs simulated keystrokes), and non-destructive clipboard preservation settings.",
      },
      {
        title: "AI & Active Context Profiles",
        image: "/image/qale/ai_context_profiles.png",
        description:
          "Process-aware vocabulary biasing that inspects active IDE windows (VS Code, Terminal, Browser) for TypeScript, Python, Rust, DevOps, and Shell lexicons.",
      },
      {
        title: "Voice Syntax Engine & Playground",
        image: "/image/qale/syntax_playground.png",
        description:
          "Real-time speech-to-syntax testing environment verifying AST transforms (e.g., 'fat arrow' → '=>', 'camel case' → 'camelCase').",
      },
      {
        title: "Technical Vocabulary & Sound-Alikes",
        image: "/image/qale/vocabulary_presets.png",
        description:
          "Phonetic sound-alike mapping and Levenshtein distance correction table preventing misheard tech homophones like 'neck js' → 'Next.js'.",
      },
      {
        title: "Floating Precision Hardware HUD",
        image: "/image/qale/floating_hud.png",
        description:
          "Frameless, translucent floating desktop overlay rendering real-time audio waveforms, active context badges, and GPU inference latency.",
      },
    ],
    architecturePipeline: [
      {
        step: "01",
        title: "16kHz Audio & DSP Filter",
        description:
          "Mono audio capture with Butterworth 80Hz rumble cut filter, spectral noise subtraction, and dynamic RMS gating.",
      },
      {
        step: "02",
        title: "Context Window Profiler",
        description:
          "Inspects foreground process handle (VS Code, Terminal, Browser) to dynamically bias Whisper beam search prompt.",
      },
      {
        step: "03",
        title: "CUDA GPU Inference",
        description:
          "faster-whisper and CTranslate2 with FP16 compute on NVIDIA RTX GPU achieving 150–250ms real-time transcription.",
      },
      {
        step: "04",
        title: "AST & Sound-Alike Parser",
        description:
          "Phonetic correction, Levenshtein matching, and AST regex syntax transforms for casing, brackets, and operators.",
      },
      {
        step: "05",
        title: "Non-Destructive Paste",
        description:
          "Backs up clipboard buffer, pastes via Win32 API, asynchronously restores original clipboard, and renders floating HUD.",
      },
    ],
    tech: [
      "Python 3.13",
      "PyTorch (CUDA 12.4)",
      "OpenAI Whisper",
      "faster-whisper",
      "CTranslate2",
      "SoundDevice",
      "SciPy (DSP)",
      "Python AST & Regex",
      "Microsoft Edge WebView2",
      "Win32 API (ctypes)",
      "pynput & keyboard",
      "HTML5 / CSS / Vanilla JS",
    ],
    contributions: [
      "Architected and built an offline desktop voice-to-code dictation application in Python, PyTorch (CUDA 12.4), and OpenAI Whisper, delivering real-time code dictation at <250ms latency.",
      "Developed an AST-inspired syntax parsing engine that maps natural developer speech to camelCase, snake_case, punctuation, and language operators across 6 programming context profiles.",
      "Built an active context window profiler that inspects the foreground process handle to classify workflows (TypeScript/React, Python, Systems/Rust, DevOps, Shell) and guide lexicon weighting.",
      "Designed a DSP audio processing pipeline incorporating Butterworth highpass filtering (80Hz rumble cut), spectral noise subtraction, and dynamic RMS gating to minimize Word Error Rate (WER).",
      "Implemented non-destructive Win32 clipboard injection, preserving the developer's copied snippet while executing instantaneous code pasting.",
      "Engineered a resident Edge WebView2 desktop settings dashboard and a frameless translucent hardware HUD for live audio waveform and latency telemetry.",
    ],
    technicalHighlights: [
      "Zero-Latency Offline GPU Inference: Cut Whisper transcription latency from 1.8s (CPU baseline) down to 150–250ms using faster-whisper, CTranslate2, and FP16 compute on NVIDIA GeForce RTX GPUs.",
      "Context-Aware Vocabulary Profiling: Dynamically inspects focused IDE processes to weight specialized lexicons (TS/React, Python/FastAPI, Rust/C++, Docker/K8s, Shell/PowerShell).",
      "Voice-to-Code Syntax Engine: Translates spoken phrases into language primitives in real time (e.g. 'fat arrow strictly equals' → '=> ===', 'camel case fetch user profile' → 'fetchUserProfile').",
      "100% Air-Gapped Privacy: Zero cloud egress, zero external API keys, and zero telemetry. All weights, inference graphs, and audio streams execute purely on local hardware.",
      "Win32 System Integration: Native Windows single-instance mutex, global low-level keyboard hooks, non-blocking asynchronous audio threads, and system tray residency.",
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
    title: "DevOS — Developer Productivity Workspace",
    category: "Developer Workspace & Workflow Tool",
    description:
      "A developer productivity platform engineered to organize multi-project contexts, active sprints, technical notes, and daily tasks in one unified dashboard. Solves context fragmentation by combining sprint boards, project milestones, and structured engineering routines.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "/image/devos.png",
    differentiation: "Task & sprint productivity workspace",
  },
  {
    id: "component-craft",
    title: "Component Craft",
    category: "In-Browser Component Sandbox & Playground",
    description:
      "An interactive developer playground for writing, testing, and previewing React components in the browser. Features a dual-panel IDE with embedded CodeMirror editor, in-browser Babel transpilation for instant execution, PrismJS syntax highlighting, and project zip export.",
    tech: ["React 19", "TypeScript", "CodeMirror", "Babel Standalone", "Tailwind CSS", "JSZip"],
    image: "/image/component-craft.png",
    demo: "https://componet-craft.vercel.app/",
    differentiation: "Code-first editor, compilation & live preview sandbox",
  },
  {
    id: "custom-component",
    title: "Custom Component",
    category: "Visual UI Design-Token & Style Customizer",
    description:
      "A visual UI design customizer and style generator. Unlike code-first sandboxes, Custom Component provides granular visual controls—color pickers, box sizing, border radius, shadows, typography scale, and icon placements—to visually configure React components and export production-ready styled code.",
    tech: ["React", "TypeScript", "Redux", "Tailwind CSS", "Vite"],
    image: "/image/component-builder.png",
    demo: "https://custom-componet.vercel.app/",
    differentiation: "No-code visual styling & token generator",
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
