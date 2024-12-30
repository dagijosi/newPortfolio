import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MdInfoOutline } from "react-icons/md";
import { FaReact, FaNode, FaVuejs } from "react-icons/fa";
import { SiMongodb, SiFirebase } from "react-icons/si";

const Projects = () => {
  const skillIconMap: Record<string, JSX.Element> = {
    React: <FaReact />,
    "Node.js": <FaNode />,
    "Vue.js": <FaVuejs />,
    MongoDB: <SiMongodb />,
    Firebase: <SiFirebase />,
  };
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
      name: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform built with React and Node.js",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates",
      skills: ["Vue.js", "Firebase", "MongoDB"],
    },
    {
      name: "Chat App",
      description: "A real-time chat application for seamless communication",
      skills: ["Vue.js", "Firebase", "MongoDB"],
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
