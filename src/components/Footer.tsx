import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { socialLinks } from "../data/socials";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gray-900/50 mt-auto border-gray-800 border-t">
    <motion.div
      className="mx-auto px-6 py-8 container"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <div className="gap-8 grid md:grid-cols-3 mb-8">
        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <h3 className="flex items-center gap-2 mb-4 font-semibold text-white text-lg">
            <FaCode className="text-secondary" /> Connect
          </h3>
          <div className="flex gap-4">
            {socialLinks.slice(0, 3).map((link) => (
                <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
              >
               <link.icon className="text-2xl" />
              </a>
            ))}
            <a
              href="mailto:dagijossy18@gmail.com"
              className="text-gray-400 hover:text-secondary transition-colors"
            >
              <FiMail className="text-2xl" />
            </a>
          </div>
        </motion.div>

       {/* Navigation */}
<motion.div variants={itemVariants}>
  <h3 className="mb-4 font-semibold text-white text-lg">Navigation</h3>
  <nav className="gap-2 grid grid-cols-2"> {/* Updated to use grid layout */}
    {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="text-gray-400 hover:text-secondary transition-colors"
      >
        {item}
      </a>
    ))}
  </nav>
</motion.div>


        {/* Built With */}
        <motion.div variants={itemVariants}>
          <h3 className="mb-4 font-semibold text-white text-lg">Built With</h3>
          <div className="flex items-center gap-2 text-gray-400">
            <FaCode className="text-secondary" />
            <span>React · Tailwind · Framer Motion</span>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="pt-8 border-gray-800 border-t text-gray-400 text-center"
        variants={itemVariants}
      >
        © {new Date().getFullYear()} Dagmawi Yoseph. All rights reserved.
      </motion.div>
    </motion.div>
  </footer>
  );
};

export default Footer;
