import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdInfoOutline } from "react-icons/md";
import { FaReact, FaNode, FaVuejs, FaRecycle } from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiLaravel,
  SiReactquery,
} from "react-icons/si";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { desc } from "framer-motion/client";

export const skillIconMap: Record<string, JSX.Element> = {
  React: <FaReact />,
  "Node.js": <FaNode />,
  "Vue.js": <FaVuejs />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  "Tailwind CSS": <SiTailwindcss />,
  "Next.js": <SiNextdotjs />,
  HTML: <SiHtml5 />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  Laravel: <SiLaravel />,
  "React Query": <SiReactquery />, // React Query Icon
  "React Saga": <FaRecycle />, // React Saga Icon
};

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      name: "DMovies",
      description:
        "A comprehensive movie and TV series platform with advanced search, categorization, and personalized content discovery features.",
      skills: ["React", "Tailwind CSS", "HTML","JavaScript" ],
      website: "https://new-d-movie.vercel.app/",
      github: "https://github.com/dagijosi/NewDMovie",
    },
    {
      name: "Eco-Web",
      description:
        "A user-centric eCommerce platform with secure login, detailed product catalog, multi-currency cart system, SEO optimization, and social media integration.",
      skills: ["Next.js", "Tailwind CSS", "HTML", "JavaScript"],
      website: "https://eco-web.vercel.app/",
      github: "https://github.com/dagijoseph/eco-web",
    },
    {
      name: "DagiComponents",
      description:
        "DagiComponents is a modern, responsive component library that makes building beautiful React applications faster and easier. Enjoy seamless integration, extensive customization options, and optimized performance for a delightful development experience.",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      website: "https://dagicomponets.vercel.app/",
      github: "https://github.com/dagijosi/Dagicomponets",
    },
    {
      name: "ET-Coffee-EUDR",
      description:
        "An application built to address the EU Deforestation Regulation (EUDR)",
      skills: ["React", "TypeScript", "Node.js", "Tailwind CSS", "React Saga"],
      website: "http://et-coffee-eudr.vercel.app/",
      github: "https://github.com/dagijoseph/et-coffee-eudr",
    },
    {
      name: "Bean Scene",
      description:
        "A coffee shop landing page designed with a modern, responsive layout, featuring smooth animations and a user-friendly interface.",
      skills: ["React", "Tailwind CSS", "TypeScript"],
      website: "https://coffee-landing-xi.vercel.app/",
      github: "https://github.com/dagijosi/coffeeLanding",
    },
    {
      name: "Tree Based Restoration Registry",
      description:
        "A platform to register and track deforested regions in Ethiopia, supporting tree-based restoration efforts with a comprehensive data management system.",
      skills: ["React", "JavaScript", "React Query", "Tailwind CSS", "Laravel"],
      website: "https://treebaserestorationregistry.org/",
      github: "https://github.com/dagijoseph/tree-based-restoration-registry",
    },
    {
      name: "WebSite Builder",
      description: "A website builder that allows users to create their own websites.",
      skills: ["React", "JavaScript", "Tailwind CSS", "Next.js"],
      website: "https://web-builder-eta-eight.vercel.app/",
      github: "https://github.com/dagijosi/web-builder",
    },
    {
      name: "Component Builder",
      description: "A component builder that allows users to create their own components.",
      skills: ["React", "JavaScript", "Tailwind CSS", "Next.js"],
      website: "https://custom-componet.vercel.app/",
      github: "https://github.com/dagijosi/CustomComponent",
    },
    {
      name: "Music Library & Player",
      description: "A music library and player that allows users to listen to their favorite songs.",
      skills: ["React", "JavaScript", "Tailwind CSS", "Next.js"],
      website: "https://music-player-eta-eight.vercel.app/",
      github: "https://github.com/dagijosi/music-player",
    }
  ];

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="relative mx-auto px-8 py-32 max-w-[85rem] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h2 className="inline-block relative mb-12 text-polo-200 text-4xl">
        Projects
        <span className="bottom-[-10px] left-0 absolute bg-gradient-to-r from-polo-500 to-transparent w-3/5 h-0.5"></span>
      </h2>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mt-12">
        {projects.slice(0, visibleCount).map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-polo-900 to-polo-800 p-[2rem] rounded-2xl text-white"
            variants={itemVariants}
          >
            <MdInfoOutline className="mb-4 w-10 h-10 text-polo-300" />
            <h3 className="mb-4 font-semibold text-polo-200 text-2xl">
              {project.name}
            </h3>
            <p className="mb-6 text-polo-300 text-sm leading-[1.6]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 bg-gradient-to-r from-polo-700 to-polo-800 px-4 py-2 rounded-3xl text-polo-100 text-sm"
                >
                  {skillIconMap[skill] || <MdInfoOutline />}{" "}
                  {/* Fallback icon */}
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex justify-end space-x-4 mt-8">
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-polo-400 hover:text-polo-200 text-xs transition-all duration-200"
                aria-label={`Visit the ${project.name} website`}
              >
                Visit Website
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-polo-400 hover:text-polo-200 text-xs transition-all duration-200"
                aria-label={`View the ${project.name} GitHub repository`}
              >
                GitHub
                <FaGithub className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      {visibleCount < projects.length && (
        <div className="mt-8 text-center">
          <button
            onClick={handleSeeMore}
            className="bg-gradient-to-r from-polo-700 hover:from-polo-600 to-polo-800 hover:to-polo-700 px-6 py-2 rounded-full text-polo-200 transition-all duration-200"
          >
            See More
          </button>
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
