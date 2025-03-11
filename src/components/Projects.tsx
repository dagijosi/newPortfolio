import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import imagePaths from "./Image";
import { useState } from "react";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const projects = [
    {
      title: "DMovies",
      description:
        "A comprehensive movie and TV series platform with advanced search, categorization, and personalized content discovery features.",
      tech: ["React", "Tailwind CSS", "HTML", "JavaScript"],
      image: imagePaths.find((img) => img.includes("dmovies.png")),
      github: "https://github.com/dagijosi/NewDMovie",
      demo: "https://new-d-movie.vercel.app/",
    },
    {
      title: "Eco-Web",
      description:
        "A user-centric eCommerce platform with secure login, detailed product catalog, multi-currency cart system, SEO optimization, and social media integration.",
      tech: ["Next.js", "Tailwind CSS", "HTML", "JavaScript"],
      image: imagePaths.find((img) => img.includes("eco-web.png")),
      github: "https://github.com/dagijoseph/eco-web",
      demo: "https://eco-web.vercel.app/",
    },
    {
      title: "DagiComponents",
      description:
        "A modern, responsive component library for faster and easier React development with extensive customization options.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image: imagePaths.find((img) => img.includes("dagi-components.png")),
      github: "https://github.com/dagijosi/Dagicomponets",
      demo: "https://dagicomponets.vercel.app/",
    },
    {
      title: "ET-Coffee-EUDR",
      description:
        "An application built to address the EU Deforestation Regulation (EUDR).",
      tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "React Saga"],
      image: imagePaths.find((img) => img.includes("login.png")),
      github: "https://github.com/dagijoseph/et-coffee-eudr",
      demo: "http://et-coffee-eudr.vercel.app/",
    },
    {
      title: "Bean Scene",
      description:
        "A coffee shop landing page with a modern, responsive layout and smooth animations.",
      tech: ["React", "Tailwind CSS", "TypeScript"],
      image: imagePaths.find((img) => img.includes("bean-scene.png")),
      github: "https://github.com/dagijosi/coffeeLanding",
      demo: "https://coffee-landing-xi.vercel.app/",
    },
    {
      title: "Tree Based Restoration Registry",
      description:
        "A platform to register and track deforested regions in Ethiopia, supporting tree-based restoration efforts.",
      tech: ["React", "JavaScript", "React Query", "Tailwind CSS", "Laravel"],
      image: imagePaths.find((img) => img.includes("tree-restoration.png")),
      github: "https://github.com/dagijoseph/tree-based-restoration-registry",
      demo: "https://treebaserestorationregistry.org/",
    },
    {
      title: "Website Builder",
      description:
        "A website builder that allows users to create and customize their own websites.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Next.js"],
      image: imagePaths.find((img) => img.includes("website-builder.png")),
      github: "https://github.com/dagijosi/web-builder",
      demo: "https://web-builder-eta-eight.vercel.app/",
    },
    {
      title: "Component Builder",
      description:
        "A tool for creating and customizing reusable React components.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Next.js"],
      image: imagePaths.find((img) => img.includes("component-builder.png")),
      github: "https://github.com/dagijosi/CustomComponent",
      demo: "https://custom-componet.vercel.app/",
    },
    {
      title: "Music Library & Player",
      description:
        "A music library and player that allows users to listen to their favorite songs.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Next.js"],
      image: imagePaths.find((img) => img.includes("music-player.png")),
      github: "https://github.com/dagijosi/music-player",
      demo: "https://music-player-eta-eight.vercel.app/",
    },
  ];

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
              className="group relative bg-gray-900 border border-gray-800 hover:border-secondary rounded-xl transition-all"
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px -15px rgba(0, 255, 136, 0.1)",
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

              <div className="p-6">
                <h3 className="mb-2 font-semibold text-white text-xl">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-400">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: techIndex * 0.1 + 0.2 }}
                      className="bg-gray-800 hover:bg-secondary/10 px-3 py-1 border border-gray-700 rounded-full text-secondary text-sm transition-colors cursor-default"
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
                    className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FiGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FiExternalLink /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16 text-center" variants={itemVariants}>
          {visibleCount < projects.length && (
            <motion.button
              className="hover:bg-secondary/10 px-8 py-3 border border-secondary rounded-lg text-secondary transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 255, 136, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSeeMore}
            >
              View All Projects
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
