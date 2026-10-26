import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { otherProjects, CuratedProject } from "../data/projects";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Archive & Additional Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Other Notable Projects
          </h2>
          <p className="mt-3 text-text-secondary text-base max-w-2xl">
            A curated selection of client platforms, developer tools, component
            libraries, and data management applications built over the past several years.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project: CuratedProject) => (
            <article
              key={project.id}
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

              {/* Action Links - Clean spacing without awkward tight divider line */}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
