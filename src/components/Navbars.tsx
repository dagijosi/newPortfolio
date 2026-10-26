import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";

const navItems = [
  { label: "Featured", href: "#featured" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbars: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const sections = ["hero", "featured", "projects", "about", "experience", "skills", "contact"];
      const scrollPosition = scrollY + 140;

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

      if (scrollY < 80) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{
        y: 0,
        top: scrolled ? "16px" : "0px",
      }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "max-w-5xl mx-4 sm:mx-6 md:mx-auto bg-charcoal-900/95 backdrop-blur-xl border border-surface-border shadow-2xl rounded-2xl"
          : "max-w-6xl mx-auto bg-transparent border-transparent"
      }`}
    >
      <nav className="px-5 sm:px-7">
        <motion.div
          className="flex items-center justify-between"
          animate={{ height: scrolled ? "60px" : "80px" }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight rounded-lg"
            aria-label="Dagmawi Yoseph - Home"
          >
            <div className="w-8 h-8 rounded-md bg-navy border border-navy-border flex items-center justify-center font-display font-semibold text-text-primary text-xs group-hover:border-slate-500 transition-colors">
              DY
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-text-primary text-sm tracking-tight leading-tight group-hover:text-white transition-colors">
                Dagmawi Yoseph
              </span>
              <span className="text-[10px] text-text-muted font-mono leading-none mt-0.5">
                Senior Frontend & Full Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`text-xs font-medium px-3.5 py-1.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-highlight ${
                      isActive
                        ? "bg-navy text-text-primary font-semibold border border-navy-border shadow-xs"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated/70"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="/Dagmawi_Yoseph_CV_main.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary px-3 py-1.5 rounded-md border border-surface-border hover:border-surface-border-hover transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-highlight"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-1.5 text-xs font-medium bg-text-primary text-charcoal-950 px-3.5 py-1.5 rounded-md hover:bg-white transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary rounded-md border border-surface-border hover:bg-surface-card transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-surface-border py-4"
            >
              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-surface-elevated rounded-md transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-3 mt-2 border-t border-surface-border flex flex-col gap-2">
                  <a
                    href="/Dagmawi_Yoseph_CV_main.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 text-sm text-text-secondary hover:text-text-primary border border-surface-border rounded-md"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Resume (PDF)</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-1.5 py-2 text-sm font-medium bg-text-primary text-charcoal-950 rounded-md"
                  >
                    <span>Contact</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbars;
