
export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "LoomERP",
    description: "A comprehensive ERP & POS system for small to medium-sized businesses. Features include inventory management, sales tracking, expense management, and a multi-store storefront platform. Built with React for the dashboard and Next.js for the storefront, optimized for performance and localized for Ethiopia.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "/image/loomerp.png",
    demo: "https://erp.loomaddis.com/",
  },
  {
    title: "react-dagis",
    description: "A simple CLI tool to generate React starter projects with various configurations including Redux Toolkit, React Query, Zustand, and Redux Saga — in just a few seconds! Choose between TypeScript and JavaScript for your project.",
    tech: ["React","TypeScript","Tailwind CSS","CLI", "Vite"],
    image: "/image/template.png",
    github: "https://github.com/dagijosi/dagiTemplate",
    demo: "https://dagi-template.vercel.app/",
  },
  {
    title: "DMovies",
    description:
      "A comprehensive movie and TV series platform with advanced search, categorization, and personalized content discovery features.",
    tech: ["React", "Tailwind CSS", "HTML", "JavaScript"],
    image: "/image/dmovies.png",
    github: "https://github.com/dagijosi/NewDMovie",
    demo: "https://new-d-movie.vercel.app/",
  },
  {
    title: "HR Dashboard",
    description:
      "The HR Dashboard is a sleek and efficient tool for managing employee records, attendance, and performance. it streamlines HR processes with a user-friendly interface.",
    tech: ["Next", "Tailwind CSS", "HTML", "TypeScript"],
    image: "/image/hr-dashboard.png",
    github: "https://github.com/dagijosi/HR-Dashboard",
    demo: "https://tauri-hr-dashboard.vercel.app/",
  },
  {
    title: "DagiComponents",
    description:
      "A modern, responsive component library for faster and easier React development with extensive customization options.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: "/image/dagi-components.png",
    github: "https://github.com/dagijosi/Dagicomponets",
    demo: "https://dagicomponets.vercel.app/",
  },
  {
    title: "Ward Holding",
    description:
      "U.S.-based global enterprise dedicated to advancing economic development in emerging markets through sustainable value-added industrialization and multiple phases of capital formation.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/image/ward.png",
    github: "https://github.com/dagijosi/ward-holding",
    demo: "https://whafrica.com.ethtbrr.net/",
  },
  {
    title: "Bean Scene",
    description:
      "A coffee shop landing page with a modern, responsive layout and smooth animations.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    image: "/image/bean-scene.png",
    github: "https://github.com/dagijosi/coffeeLanding",
    demo: "https://coffee-landing-xi.vercel.app/",
  },
  {
    title: "ET-Coffee-EUDR",
    description:
      "An application built to address the EU Deforestation Regulation (EUDR).",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "React Saga"],
    image: "/image/login.png",
    // github: "https://github.com/dagijoseph/et-coffee-eudr",
    // demo: "http://et-coffee-eudr.vercel.app/",
  },
  {
    title: "Website Builder",
    description:
      "A website builder that allows users to create and customize their own websites.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    image: "/image/website-builder.png",
    github: "https://github.com/dagijosi/web-builder",
    demo: "https://web-builder-eta-eight.vercel.app/",
  },
  {
    title: "Component Builder",
    description:
      "A tool for creating and customizing reusable React components.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    image: "/image/component-builder.png",
    github: "https://github.com/dagijosi/CustomComponent",
    demo: "https://custom-componet.vercel.app/",
  },
  {
    title: "Tree Based Restoration Registry",
    description:
      "A platform to register and track deforested regions in Ethiopia, supporting tree-based restoration efforts.",
    tech: ["React", "JavaScript", "React Query", "Tailwind CSS", "Laravel"],
    image: "tree-restoration.png",
    // github: "https://github.com/dagijoseph/tree-based-restoration-registry",
    // demo: "https://treebaserestorationregistry.org/",
  },
  {
    title: "Music Library & Player",
    description:
      "A music library and player that allows users to listen to their favorite songs.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Next.js"],
    image: "music-player.png",
    // github: "https://github.com/dagijosi/music-player",
    // demo: "https://music-player-eta-eight.vercel.app/",
  },
  {
    title: "Eco-Web",
    description:
      "A user-centric eCommerce platform with secure login, detailed product catalog, multi-currency cart system, SEO optimization, and social media integration.",
    tech: ["Next.js", "Tailwind CSS", "HTML", "JavaScript"],
    image: "/image/eco-web.png",
    // github: "https://github.com/dagijoseph/eco-web",
    // demo: "https://eco-web.vercel.app/",
  },
];
