import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillIconMap } from "./Projects";
import { MdInfoOutline } from "react-icons/md";

const Skill = () => {
  // List of skills
  const skills = [
    "React",
    "Node.js",
    "Vue.js",
    "MongoDB",
    "Firebase",
    "Tailwind CSS",
    "Next.js",
    "HTML",
    "JavaScript",
    "TypeScript",
  ];

  // Intersection observer to trigger animation on view
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="max-w-6xl py-24 px-6 mx-auto relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Section Title */}
      <h2 className="text-polo-200 text-4xl mb-8 relative inline-block">
        Skills
        <span className="absolute bottom-[-10px] left-0 w-3/5 h-0.5 bg-gradient-to-r from-polo-500 to-transparent"></span>
      </h2>

      {/* Skill Items */}
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            className="flex items-center gap-2 bg-gradient-to-r from-polo-700 to-polo-800 text-polo-100 py-2 px-4 rounded-full text-sm shadow-md"
            variants={itemVariants}
          >
            {skillIconMap[skill] || <MdInfoOutline className="text-lg" />}
            <span className="sr-only">Skill icon</span>
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};

export default Skill;
