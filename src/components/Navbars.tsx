import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight, FiArrowUp } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

const Navbars: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Reset to home if at very top of page
      if (scrollY === 0) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  return (
    <>
      <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0, top: scrolled ? "16px" : "0px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`left-0 right-0 z-50 fixed transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 shadow-2xl shadow-secondary/10 rounded-2xl mx-4"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center justify-between"
          animate={{ height: scrolled ? "64px" : "80px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: scrolled ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 group"
            aria-label="Dagmawi Yoseph - Portfolio"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("home");
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 transition-opacity rounded-lg opacity-0 bg-secondary/20 blur-lg group-hover:opacity-100"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative p-2 rounded-lg bg-gradient-to-br from-secondary to-accent">
                <span className="text-xl font-bold text-gray-900 font-display">DY</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-white font-display">Dagmawi</span>
              <span className="ml-1 text-lg font-bold text-secondary font-display">Yoseph</span>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <motion.ul
            className="items-center hidden gap-1 md:flex"
            animate={{ scale: scrolled ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map(({ label, href }) => {
              const isActive = activeSection === href.substring(1);
              return (
                <motion.li key={href}>
                  <motion.a
                    href={href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-5 py-2.5 transition-colors font-medium group ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {label}
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 transition-opacity rounded-lg opacity-0 bg-secondary/10 group-hover:opacity-100"
                      animate={{ opacity: isActive ? 1 : 0 }}
                    />
                  </motion.a>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* CTA Button - Desktop */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: scrolled ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-secondary to-accent px-6 py-2.5 rounded-lg font-semibold text-gray-900 transition-all hover:shadow-lg hover:shadow-secondary/25"
          >
            Let's Talk
            <FiArrowRight className="w-4 h-4" />
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: scrolled ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
            className="relative p-3 text-gray-300 transition-colors md:hidden hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <motion.div
              animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t md:hidden border-gray-800/50"
            >
              <div className="py-6 space-y-2">
                {navItems.map(({ label, href }, index) => {
                  const isActive = activeSection === href.substring(1);
                  return (
                    <motion.a
                      key={href}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      variants={menuVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      className={`flex items-center justify-between px-4 py-4 rounded-xl transition-all group ${
                        isActive
                          ? "text-white bg-secondary/20 border border-secondary/30"
                          : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      }`}
                    >
                      <span className="font-medium">{label}</span>
                      <motion.div
                        className="transition-opacity opacity-0 group-hover:opacity-100"
                        whileHover={{ x: 5 }}
                      >
                        <FiArrowRight className="text-secondary" />
                      </motion.div>
                    </motion.a>
                  );
                })}
                <motion.a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  custom={navItems.length}
                  className="flex items-center justify-center gap-2 px-6 py-4 font-semibold text-gray-900 transition-all bg-gradient-to-r from-secondary to-accent rounded-xl hover:shadow-lg"
                >
                  Let's Talk
                  <FiArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>

    {/* Back to Top Button */}
    <AnimatePresence>
      {scrolled && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed z-50 p-4 text-gray-900 transition-all rounded-full shadow-lg bottom-8 right-8 bg-gradient-to-r from-secondary to-accent shadow-secondary/25"
          aria-label="Back to top"
        >
          <FiArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
    </>
  );
};

export default Navbars;
