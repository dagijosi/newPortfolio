import { useState } from "react";
import { Github, ExternalLink, FolderGit2, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { otherProjects, CuratedProject } from "../data/projects";

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const DEFAULT_COUNT = 3;
  const visibleProjects = showAll ? otherProjects : otherProjects.slice(0, DEFAULT_COUNT);
  const remainingCount = otherProjects.length - DEFAULT_COUNT;

  return (
    <section id="projects" className="py-20 border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                Curated Selection
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
              Other Notable Projects
            </h2>
            <p className="mt-2 text-text-secondary text-sm sm:text-base max-w-2xl">
              Client platforms, developer tools, component libraries, and data
              management applications built over the past several years.
            </p>
          </div>

          <div className="text-xs font-mono text-text-muted self-start sm:self-auto bg-surface-card px-3 py-1.5 rounded-md border border-surface-border">
            Showing {visibleProjects.length} of {otherProjects.length} projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleProjects.map((project: CuratedProject) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.2 }}
                className="group bg-surface-card border border-surface-border hover:border-surface-border-hover rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative h-44 overflow-hidden bg-charcoal-950 border-b border-surface-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-charcoal-900/90 text-text-secondary border border-surface-border">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 pb-2">
                    <h3 className="text-xl font-display font-bold text-text-primary mb-2.5 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    {project.differentiation && (
                      <div className="mb-3">
                        <span className="text-[11px] font-mono text-slate-400 bg-navy/60 px-2 py-0.5 rounded border border-navy-border inline-block">
                          {project.differentiation}
                        </span>
                      </div>
                    )}
                    <p className="text-text-secondary text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-slate-300 border border-surface-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Links */}
                <div className="px-6 pb-6 pt-4 flex items-center gap-5 mt-auto">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-text-primary hover:text-white transition-colors"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}

                  {!project.demo && !project.github && (
                    <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                      <FolderGit2 className="w-3.5 h-3.5" />
                      <span>Internal Client Project</span>
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Toggle Button */}
        {otherProjects.length > DEFAULT_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-card hover:bg-surface-elevated text-text-primary text-sm font-medium border border-surface-border hover:border-surface-border-hover transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
            >
              <span>
                {showAll
                  ? "Show Fewer Projects"
                  : `Show More Projects (${remainingCount} more)`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
