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

export const skillIconMap: Record<string, JSX.Element> = {
  React: <FaReact />,
  "Node.js": <FaNode />,
  "Vue.js": <FaVuejs />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  Tailwind: <SiTailwindcss />,
  Next: <SiNextdotjs />,
  HTML: <SiHtml5 />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  Laravel: <SiLaravel />,
  "React Query": <SiReactquery />,  // React Query Icon
  "React Saga": <FaRecycle />,     // React Saga Icon
};

const Projects = () => {
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
      skills: ["React", "Tailwind", "JavaScript", "HTML"],
    },
    {
      name: "Friend-Chat",
      description:
        "A dynamic messaging platform allowing users to share text, files, emojis, and record audio conversations with a user-friendly interface.",
      skills: ["React", "Tailwind", "JavaScript", "HTML"],
    },
    {
      name: "Eco-Web",
      description:
        "A user-centric eCommerce platform with secure login, detailed product catalog, multi-currency cart system, SEO optimization, and social media integration.",
      skills: ["Next", "Tailwind", "JavaScript", "HTML"],
    },
    {
      name: "DagiComponents",
      description:
        "DagiComponents is a modern, responsive component library that makes building beautiful React applications faster and easier. Enjoy seamless integration, extensive customization options, and optimized performance for a delightful development experience.",
      skills: ["React", "TypeScript", "Tailwind"],
    },
    {
      name: "ET-Coffee-EUDR",
      description:
        "An application built to address the EU Deforestation Regulation (EUDR), leveraging React, TypeScript, Node.js, Tailwind CSS, and React Saga for optimal performance.",
      skills: ["React", "TypeScript", "Node.js", "Tailwind", "React Saga"],
    },
    {
      name: "Bean Scene",
      description:
        "A coffee shop landing page designed with a modern, responsive layout, featuring smooth animations and a user-friendly interface.",
      skills: ["React", "Tailwind", "TypeScript"],
    },
    {
      name: "Tree Based Restoration Registry",
      description:
        "A platform to register and track deforested regions in Ethiopia, supporting tree-based restoration efforts with a comprehensive data management system.",
      skills: ["React", "JavaScript", "React Query", "Tailwind", "Laravel"],
    },
  ];
  

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="max-w-[85rem] py-32 px-8 relative overflow-hidden mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <h2 className="text-polo-200 text-4xl mb-12 relative inline-block">
        Projects
        <span className="absolute bottom-[-10px] left-0 w-3/5 h-0.5 bg-gradient-to-r from-polo-500 to-transparent"></span>
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-polo-900 to-polo-800 p-[2rem] rounded-2xl text-white"
            variants={itemVariants}
          >
            <MdInfoOutline className="w-10 h-10 mb-4 text-polo-300" />
            <h3 className="text-2xl text-polo-200 mb-4 font-semibold">
              {project.name}
            </h3>
            <p className="text-sm text-polo-300 mb-6 leading-[1.6]">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 bg-gradient-to-r from-polo-700 to-polo-800 text-polo-100 py-2 px-4 rounded-3xl text-sm"
                >
                  {skillIconMap[skill] || <MdInfoOutline />}{" "}
                  {/* Fallback icon */}
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
