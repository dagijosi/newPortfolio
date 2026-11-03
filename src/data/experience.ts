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
  link?: string;
}

export const experiences: ExperienceItem[] = [
  {
    period: "Feb 2025 – Present",
    role: "Lead Frontend Developer",
    company: "Loom",
    location: "Addis Ababa, Ethiopia",
    description:
      "Own frontend delivery for LoomERP, a modular cloud ERP, working closely with a backend developer across POS, inventory, multi-branch warehousing, purchasing, CRM, and online storefront workflows.",
    achievements: [
      "Delivered five integrated modules as the sole frontend developer and applied role-based access control throughout the application.",
      "Built offline data indexing and high-speed search for enterprise records, store data, and inventory catalogs.",
      "Improved server-state consistency and reduced redundant requests with TanStack Query caching, optimistic updates, and cache invalidation.",
      "Standardized validation for complex nested workflows using React Hook Form and Zod.",
      "Developed the customer storefront with branch-specific inventory and pricing, category filtering, authentication, and SEO metadata.",
      "Implemented an offline chat assistant that retrieves answers from indexed ERP data, reducing reliance on external AI services.",
    ],
    link: "https://erp.loomaddis.com/",
  },
  {
    period: "Feb 2025 – Present",
    role: "Freelance Frontend Developer",
    company: "Private Clients & Independent Businesses",
    location: "Addis Ababa, Ethiopia",
    description:
      "Work directly with founders and stakeholders to translate Figma designs and requirements into responsive, accessible production applications.",
    achievements: [
      "Built Kaladoo Coffee (kalado-coffee.vercel.app), a full-stack e-commerce application using React, TypeScript, Tailwind CSS, Zustand, Express, and MongoDB; implemented cart flows, mobile checkout, and REST integration.",
      "Create reusable UI components and modular frontend structures to accelerate iterations and maintain consistency.",
      "Manage frontend delivery from requirements and API contracts through implementation and Vercel deployment.",
    ],
    link: "https://kalado-coffee.vercel.app/",
  },
  {
    period: "Feb 2024 – Jan 2025",
    role: "Full Stack Developer",
    company: "Echnoserve",
    location: "Addis Ababa, Ethiopia",
    description:
      "Developed responsive and accessible production web applications, environmental data registries, and compliance tools across an Agile engineering environment.",
    achievements: [
      "Contributed to a government EUDR compliance platform featuring interactive geographic tree mapping and spatial visual analytics.",
      "Developed application modules with React, TypeScript, Tailwind CSS, and Redux within an Agile team.",
      "Built and maintained Node.js and Laravel REST endpoints for authentication, business logic, and regulatory data processing.",
      "Improved server-state caching and synchronization with React Query and managed asynchronous side effects with Redux Saga.",
    ],
  },
];

export const education = {
  institution: "HiLCoE School of Computer Science and Technology",
  degree: "Bachelor of Science in Computer Science",
  period: "Jan 2019 – Jul 2023",
  location: "Addis Ababa, Ethiopia",
  description:
    "Comprehensive studies in computer science fundamentals, algorithm design, data structures, database architecture, distributed systems, and modern software engineering.",
};

export const certificates: CertificateItem[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    status: "Active Credential",
    link: "https://www.credly.com",
  },
];
