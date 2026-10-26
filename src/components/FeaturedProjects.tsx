import {
  ExternalLink,
  Briefcase,
  Monitor,
  CheckCircle2,
  Cpu,
  Layers,
  Calendar,
  UserCheck,
} from "lucide-react";
import { featuredProjects, FeaturedProject } from "../data/projects";

const FeaturedProjects: React.FC = () => {
  return (
    <section id="featured" className="py-24 border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Selected Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Featured Case Studies
          </h2>
          <p className="mt-3 text-text-secondary text-base max-w-2xl">
            In-depth examinations of production enterprise systems and independent
            software engineering, highlighting architecture, technical decisions, and contributions.
          </p>
        </div>

        {/* Featured Case Studies List */}
        <div className="space-y-24">
          {featuredProjects.map((project: FeaturedProject, index: number) => {
            const isProfessional = project.type === "professional";

            return (
              <article
                key={project.id}
                id={`case-study-${project.id}`}
                className="bg-surface-card border border-surface-border rounded-xl overflow-hidden shadow-card"
              >
                {/* Header Banner / Category & Metadata */}
                <div className="p-6 sm:p-8 border-b border-surface-border bg-charcoal-850/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono font-medium ${
                        isProfessional
                          ? "bg-navy text-sky-200 border border-navy-border"
                          : "bg-charcoal-800 text-emerald-300 border border-emerald-900/40"
                      }`}
                    >
                      {isProfessional ? (
                        <Briefcase className="w-3.5 h-3.5" />
                      ) : (
                        <Monitor className="w-3.5 h-3.5" />
                      )}
                      <span>{project.category}</span>
                    </span>

                    <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-md bg-navy hover:bg-navy-light text-text-primary border border-navy-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
                      >
                        <span>Visit Live Platform</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-md bg-surface-elevated hover:bg-charcoal-700 text-text-secondary hover:text-text-primary border border-surface-border transition-colors"
                      >
                        <span>Repository</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title & Summary */}
                <div className="px-6 sm:px-8 pt-8 pb-6">
                  <div className="flex flex-wrap items-baseline gap-3 mb-4">
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary tracking-tight">
                      {project.title}
                    </h3>
                    {project.nativeTitle && (
                      <span className="text-xl sm:text-2xl font-display font-medium text-text-muted">
                        ({project.nativeTitle})
                      </span>
                    )}
                  </div>

                  {/* Role indicator */}
                  <div className="flex items-center gap-2 text-sm text-text-secondary mb-4">
                    <UserCheck className="w-4 h-4 text-slate-400" />
                    <span className="font-medium text-text-primary">Role:</span>
                    <span>{project.role}</span>
                  </div>

                  <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-4xl">
                    {project.description}
                  </p>
                </div>

                {/* Clean Screenshot Container (No fake circular window dots) */}
                <div className="px-6 sm:px-8 pb-8">
                  <div className="rounded-lg border border-surface-border overflow-hidden bg-charcoal-950">
                    <img
                      src={project.image}
                      alt={`${project.title} overview`}
                      className="w-full h-auto max-h-[540px] object-cover object-top"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                </div>

                {/* Two-Column Deep-Dive */}
                <div className="p-6 sm:p-8 bg-charcoal-850/40 border-t border-surface-border grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left Column: Contributions */}
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-text-primary font-display font-semibold text-lg">
                      <Layers className="w-5 h-5 text-slate-400" />
                      <h4>Key Engineering Contributions</h4>
                    </div>
                    <ul className="space-y-3">
                      {project.contributions.map((contribution, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-slate-400 flex-shrink-0 mt-1" />
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Architecture & Tech Stack */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-4 text-text-primary font-display font-semibold text-lg">
                        <Cpu className="w-5 h-5 text-slate-400" />
                        <h4>Technical Highlights & Architecture</h4>
                      </div>
                      <ul className="space-y-3">
                        {project.technicalHighlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0 mt-2"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="pt-4 border-t border-surface-border">
                      <span className="block text-xs font-mono text-text-muted uppercase tracking-wider mb-3">
                        Technologies Used
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-3 py-1 rounded bg-navy text-text-primary border border-navy-border"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
