import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import { projects } from "../data/projects";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        ease: "anticipate",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 0.5,
      },
    },
  };

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projects.length));
  };

  return (
    <section
      id="projects"
      className="px-6 py-20 border-gray-800 border-b min-h-screen"
    >
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="mb-16 font-bold text-white text-4xl md:text-5xl"
          variants={itemVariants}
        >
          <span className="text-secondary">#</span> Projects
        </motion.h2>

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visibleCount).map((project) => (
            <motion.div
              key={project.title}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="group relative bg-gray-900/80 backdrop-blur-md border border-gray-800/50 hover:border-secondary/50 rounded-xl transition-all overflow-hidden"
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 255, 136, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative rounded-t-xl h-48 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                </motion.div>
              </div>

              <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30">
                <h3 className="mb-2 font-semibold text-white text-xl font-display">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-400 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: techIndex * 0.1 + 0.2 }}
                      className="bg-gray-800/50 backdrop-blur-sm hover:bg-secondary/20 px-3 py-1 border border-gray-700/50 hover:border-secondary/30 rounded-full text-secondary text-sm transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors group-hover:text-secondary"
                    whileHover={{ x: 5 }}
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FiGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors group-hover:text-secondary"
                    whileHover={{ x: 5 }}
                    aria-label={`View ${project.title} live demo`}
                  >
                    <FiExternalLink /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-20 text-center" variants={itemVariants}>
          {visibleCount < projects.length && (
            <button
              onClick={handleSeeMore}
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-transparent border-2 border-secondary rounded-lg hover:bg-secondary focus:outline-none ring-offset-2 focus:ring-2 ring-secondary"
            >
             <span className="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
             <span className="relative w-full text-left text-secondary transition-colors duration-300 ease-in-out group-hover:text-gray-900">View All Projects</span>
            </button>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
