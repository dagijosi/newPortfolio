export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    detail?: string;
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend Architecture",
    description: "Building responsive, maintainable, and type-safe client applications",
    skills: [
      { name: "React & Next.js", detail: "App router, SSR, hooks, performance optimization" },
      { name: "TypeScript", detail: "Strict typing, generics, schema contracts, zero-any" },
      { name: "JavaScript (ESNext)", detail: "Modern asynchronous patterns, DOM architecture" },
      { name: "Tailwind CSS", detail: "Design systems, utility-first UI, responsive layouts" },
      { name: "Vite", detail: "Fast build tooling, bundle optimization, tree-shaking" },
      { name: "Component Architecture", detail: "Atomic design, modularity, composability" },
      { name: "React Native", detail: "Cross-platform mobile UI development" },
    ],
  },
  {
    category: "Backend & Full Stack Development",
    description: "Building scalable APIs, server-side business logic, and database architecture",
    skills: [
      { name: "NestJS", detail: "Currently mastering: modular architecture, controllers, services, dependency injection" },
      { name: "Node.js & Express", detail: "RESTful API services, middleware, authentication flows" },
      { name: "Laravel & PHP", detail: "Backend workflows, data processing, routing" },
      { name: "MySQL & PostgreSQL", detail: "Relational database modeling, indexing, schema design" },
      { name: "REST API Design", detail: "Clean endpoint contracts, validation, status codes" },
    ],
  },
  {
    category: "State Management & Form Validation",
    description: "Managing asynchronous server state, local stores, and resilient form lifecycles",
    skills: [
      { name: "TanStack Query", detail: "Cache invalidation, optimistic updates, query sync" },
      { name: "Zustand & Redux", detail: "Client state slices, Redux Saga asynchronous workflows" },
      { name: "React Hook Form", detail: "Performant uncontrolled forms, complex validation" },
      { name: "Zod", detail: "Runtime schema validation, inferred TypeScript types" },
    ],
  },
  {
    category: "Desktop & Systems Engineering",
    description: "Bridging modern web frontends with native operating system performance",
    skills: [
      { name: "Tauri 2", detail: "Desktop app architecture, IPC commands, security" },
      { name: "Rust", detail: "Native backend bindings, file system operations" },
      { name: "SQLite", detail: "Embedded database, local indexing, SQL queries" },
      { name: "libmpv", detail: "Hardware-accelerated media rendering engine" },
    ],
  },
  {
    category: "Enterprise Domain & Tooling",
    description: "Real-world engineering challenges solved across production systems",
    skills: [
      { name: "Local LLM Integration", detail: "Private offline AI workflows, contextual developer tooling" },
      { name: "Online Storefronts & SEO", detail: "Product catalogs, localized checkout, OpenGraph, Web Vitals" },
      { name: "Authentication & RBAC", detail: "Token refresh, role-based route protection, multi-tenant safety" },
      { name: "Multi-branch Warehousing", detail: "Tenant scoping, branch-specific pricing, POS inventory" },
      { name: "Open Source NPM Libraries", detail: "Component packages, semantic versioning, tree-shaking" },
      { name: "Figma UI/UX Design", detail: "Design-to-code translation, accessible prototyping" },
    ],
  },
];
