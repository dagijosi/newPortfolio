export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  achievements: string[];
  link?: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  status: string;
}

export const experiences: ExperienceItem[] = [
  {
    period: "Feb 2025 – Present",
    role: "Lead Frontend Developer",
    company: "Loom",
    location: "Addis Ababa, Ethiopia",
    description:
      "Leading frontend architecture and feature implementation for LoomERP, a modular enterprise platform unifying POS, inventory, multi-branch warehousing, sales, CRM, and storefronts.",
    achievements: [
      "Architected end-to-end modular interfaces for Inventory, POS, Multi-store Warehousing, Purchasing, Sales, and CRM with role-based access control (RBAC).",
      "Engineered offline data indexing and high-speed search for instant retrieval of inventory, store, and business records.",
      "Built interactive chat assistant integrations using indexed ERP data alongside modular frontend architecture with TanStack Query.",
      "Developed high-performance storefront functionality with branch-specific pricing, search, authentication, and structured SEO metadata.",
    ],
    link: "https://erp.loomaddis.com/",
  },
  {
    period: "06/2025 – Present",
    role: "Freelance Frontend Developer",
    company: "Private Clients & Independent Businesses",
    location: "Addis Ababa, Ethiopia",
    description:
      "Partnering directly with businesses to transform Figma designs and business concepts into high-fidelity, accessible, mobile-first web platforms and e-commerce applications.",
    achievements: [
      "Delivered Kaladoo Coffee: a responsive e-commerce web platform built with React.js, TypeScript, and Zustand with REST API integration and SEO optimization.",
      "Built reusable UI component systems and maintainable frontend structures that adapt to evolving client requirements.",
      "Handled complete frontend lifecycle from requirements analysis and UI implementation through API integration, debugging, and production deployment.",
    ],
    link: "https://kalado-coffee.vercel.app/",
  },
  {
    period: "02/2024 – 01/2026",
    role: "Full Stack Developer",
    company: "Echnoserve",
    location: "Addis Ababa, Ethiopia",
    description:
      "Developed responsive and accessible production web applications, environmental data registries, and compliance tools across an Agile engineering environment.",
    achievements: [
      "Developed mission-critical web applications using React.js, TypeScript, Tailwind CSS, and Redux.",
      "Built and integrated RESTful backend services with Node.js and Laravel for authentication, business workflows, and data processing.",
      "Implemented Redux and Redux Saga for complex asynchronous workflows alongside React Query for server-state caching and synchronization.",
      "Engineered EUDR tracking and tree-based restoration platforms with interactive geographic tree mapping and spatial visual analytics.",
    ],
  },
];

export const education = {
  institution: "HiLCoE School of Computer Science and Technology",
  degree: "Bachelor of Science in Computer Science",
  period: "01/2019 – 07/2023",
  location: "Addis Ababa, Ethiopia",
  description:
    "Comprehensive studies in computer science fundamentals, algorithm design, data structures, database architecture, distributed systems, and modern software engineering.",
};

export const certificates: CertificateItem[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    status: "Active Credential",
  },
];
