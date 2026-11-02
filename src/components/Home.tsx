import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Home: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="pt-28 md:pt-36 pb-20 border-b border-surface-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Clean Discipline Tag */}
        <div className="mb-6 flex items-center gap-3 text-xs font-mono text-slate-400">
          <span className="text-text-primary font-medium">Senior Frontend & Full Stack Developer</span>
          <span>·</span>
          <span>Building LoomERP & scalable systems with NestJS</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight max-w-4xl leading-[1.12] mb-6">
          I build products, <br className="hidden sm:inline" />
          <span className="text-slate-400 font-medium">not just interfaces.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-text-secondary text-lg sm:text-xl max-w-3xl leading-relaxed mb-10 font-sans">
          I'm a Senior Frontend and Full Stack Developer focused on building
          thoughtful web experiences, complex business applications, and useful
          software products. With deep expertise in React, TypeScript, and
          maintainable architecture, I build end-to-end systems from polished
          client interfaces to resilient backend services with Node.js and NestJS.
        </p>

        {/* Action Buttons & Secondary Links */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="#featured"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-text-primary text-charcoal-950 font-semibold text-sm hover:bg-white hover:shadow-subtle transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/dagijosi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-navy hover:bg-navy-light text-text-primary font-medium text-sm border border-navy-border hover:border-slate-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
          >
            <Github className="w-4 h-4 text-text-secondary" />
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-text-muted" />
          </a>

          <a
            href="https://www.linkedin.com/in/dagmawi-yoseph-4b4aa6296"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-card hover:bg-surface-elevated text-text-secondary hover:text-text-primary text-sm border border-surface-border transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-highlight"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href="mailto:Dagijossy18@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-surface-card hover:bg-surface-elevated text-text-secondary hover:text-text-primary text-sm border border-surface-border transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-highlight"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>

        {/* Quick Orientation Strip */}
        <div className="pt-8 border-t border-surface-border grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
              Experience
            </span>
            <p className="text-sm font-medium text-text-primary">
              3+ Years in Production
            </p>
          </div>

          <div>
            <span className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
              Current Work
            </span>
            <p className="text-sm font-medium text-text-primary">
              Lead Frontend @ LoomERP
            </p>
          </div>

          <div>
            <span className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
              Core Technologies
            </span>
            <p className="text-sm font-medium text-text-primary">
              React · TypeScript · NestJS · Node
            </p>
          </div>

          <div>
            <span className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-1">
              Location
            </span>
            <p className="text-sm font-medium text-text-primary">
              Addis Ababa, Ethiopia (UTC+3)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
