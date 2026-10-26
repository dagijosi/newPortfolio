import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-charcoal-950 border-t border-surface-border text-text-secondary text-xs">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Identity & Rights */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-display font-medium text-text-primary text-sm">
            Dagmawi Yoseph
          </p>
          <p className="text-text-muted">
            Senior Frontend & Full Stack Developer
          </p>
          <p className="text-[11px] text-text-muted font-mono mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Quick Nav Links */}
        <nav className="flex items-center gap-6">
          <a
            href="#featured"
            className="hover:text-text-primary transition-colors focus:outline-none"
          >
            Featured
          </a>
          <a
            href="#projects"
            className="hover:text-text-primary transition-colors focus:outline-none"
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:text-text-primary transition-colors focus:outline-none"
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-text-primary transition-colors focus:outline-none"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="hover:text-text-primary transition-colors focus:outline-none"
          >
            Contact
          </a>
        </nav>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/dagijosi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-surface-card hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/dagmawi-yoseph-4b4aa6296"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-surface-card hover:text-text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:dagijossy18@gmail.com"
            className="p-2 rounded-md hover:bg-surface-card hover:text-text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-md hover:bg-surface-card hover:text-text-primary transition-colors border border-surface-border"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
