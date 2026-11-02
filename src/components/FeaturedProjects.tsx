import { useState } from "react";
import {
  ExternalLink,
  Briefcase,
  Monitor,
  CheckCircle2,
  Cpu,
  Layers,
  Calendar,
  UserCheck,
  Workflow,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Layers3,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { featuredProjects, FeaturedProject } from "../data/projects";

const FeaturedProjectCard: React.FC<{
  project: FeaturedProject;
  index: number;
}> = ({ project, index }) => {
  const isProfessional = project.type === "professional";
  const hasScreenshots = Boolean(project.screenshots && project.screenshots.length > 0);
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState(false);

  const currentImage = hasScreenshots
    ? project.screenshots![activeScreenshot].image
    : project.image;
  const currentCaption = hasScreenshots
    ? project.screenshots![activeScreenshot].description
    : null;

  // Top 3 executive bullet points for fast scanning
  const summaryBullets = project.contributions.slice(0, 3);

  return (
    <article
      id={`case-study-${project.id}`}
      className="bg-surface-card border border-surface-border rounded-xl overflow-hidden shadow-card transition-all duration-300"
    >
      {/* Header Banner / Category & Metadata */}
      <div className="p-5 sm:p-6 border-b border-surface-border bg-charcoal-850/60 flex flex-wrap items-center justify-between gap-4">
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

      {/* Project Title & Overview */}
      <div className="px-5 sm:px-8 pt-6 pb-5">
        <div className="flex flex-wrap items-baseline gap-3 mb-3">
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

        <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-4xl">
          {project.description}
        </p>
      </div>

      {/* Compact Screenshot Preview */}
      <div className="px-5 sm:px-8 pb-6">
        {hasScreenshots && (
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {project.screenshots!.map((screenshot, sIdx) => {
              const isSelected = activeScreenshot === sIdx;
              return (
                <button
                  key={sIdx}
                  type="button"
                  onClick={() => setActiveScreenshot(sIdx)}
                  className={`px-3 py-1 rounded-md text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-navy text-text-primary border border-slate-500 font-semibold shadow-xs"
                      : "bg-charcoal-850 text-text-muted hover:text-text-primary hover:bg-surface-elevated border border-surface-border"
                  }`}
                >
                  <span className={isSelected ? "text-sky-300 font-bold" : "text-text-muted"}>
                    0{sIdx + 1}.
                  </span>
                  <span>{screenshot.title}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="rounded-lg border border-surface-border overflow-hidden bg-charcoal-950">
          <img
            src={currentImage}
            alt={`${project.title} preview`}
            className="w-full h-auto max-h-[340px] sm:max-h-[380px] object-cover object-top transition-opacity duration-200"
            loading={index === 0 ? "eager" : "lazy"}
          />
          {currentCaption && (
            <div className="p-3 bg-charcoal-900 border-t border-surface-border flex items-start gap-2 text-xs font-mono text-text-secondary">
              <Sparkles className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
              <span>{currentCaption}</span>
            </div>
          )}
        </div>
      </div>

      {/* Quick Executive Takeaways & Tech Badges */}
      <div className="px-5 sm:px-8 pb-6">
        <div className="p-4 rounded-lg bg-surface-elevated/40 border border-surface-border mb-4">
          <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-slate-400" />
            Core Highlights
          </span>
          <ul className="space-y-2">
            {summaryBullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-mono text-text-muted mr-1.5 uppercase tracking-wider">
            Stack:
          </span>
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-navy text-text-primary border border-navy-border"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Expand / Collapse Toggle Bar */}
      <div className="px-5 sm:px-8 py-3.5 bg-charcoal-850 border-t border-surface-border flex items-center justify-between">
        <span className="text-xs font-mono text-text-muted flex items-center gap-1.5">
          <Layers3 className="w-3.5 h-3.5 text-slate-400" />
          <span>Full Architecture & Deep-Dive Breakdown</span>
        </span>

        <button
          type="button"
          onClick={() => setIsDeepDiveOpen(!isDeepDiveOpen)}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-medium text-text-primary bg-surface-card hover:bg-surface-elevated border border-surface-border hover:border-surface-border-hover transition-colors"
          aria-expanded={isDeepDiveOpen}
        >
          <span>{isDeepDiveOpen ? "Collapse Deep-Dive" : "Expand Full Case Study"}</span>
          {isDeepDiveOpen ? (
            <ChevronUp className="w-4 h-4 text-slate-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-400" />
          )}
        </button>
      </div>

      {/* Expandable Deep-Dive Drawer */}
      <AnimatePresence>
        {isDeepDiveOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-surface-border bg-charcoal-900/60"
          >
            {/* System Pipeline Architecture (Optional) */}
            {project.architecturePipeline && project.architecturePipeline.length > 0 && (
              <div className="p-5 sm:p-8 border-b border-surface-border">
                <div className="p-5 rounded-lg bg-charcoal-900 border border-surface-border">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                      <Workflow className="w-4 h-4 text-slate-400" />
                      System Pipeline Architecture
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-900/50 px-2 py-0.5 rounded flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      100% Air-Gapped / Zero Cloud Egress
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    {project.architecturePipeline.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-md bg-charcoal-950 border border-surface-border flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-[10px] font-mono text-slate-500 mb-1">
                            STAGE {step.step}
                          </div>
                          <div className="text-xs font-semibold text-text-primary mb-1.5">
                            {step.title}
                          </div>
                        </div>
                        <p className="text-[11px] text-text-muted leading-relaxed mt-1">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Two-Column Deep-Dive */}
            <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column: Contributions */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-text-primary font-display font-semibold text-base sm:text-lg">
                  <Layers className="w-5 h-5 text-slate-400" />
                  <h4>Key Engineering Contributions</h4>
                </div>
                <ul className="space-y-3">
                  {project.contributions.map((contribution, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Architecture & Technical Highlights */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-text-primary font-display font-semibold text-base sm:text-lg">
                  <Cpu className="w-5 h-5 text-slate-400" />
                  <h4>Technical Highlights & Decisions</h4>
                </div>
                <ul className="space-y-3">
                  {project.technicalHighlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0 mt-1.5"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

const FeaturedProjects: React.FC = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const activeProject = featuredProjects[activeProjectIdx];

  const handlePrev = () => {
    setActiveProjectIdx((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveProjectIdx((prev) =>
      prev === featuredProjects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="featured" className="py-20 border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading with Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                Selected Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
              Featured Case Studies
            </h2>
            <p className="mt-2 text-text-secondary text-sm sm:text-base max-w-2xl">
              In-depth examinations of production enterprise systems and independent
              software engineering, highlighting architecture and technical decisions.
            </p>
          </div>

          {/* Quick Prev / Next Pagination Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <span className="text-xs font-mono text-text-muted mr-2">
              {activeProjectIdx + 1} of {featuredProjects.length}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous featured case study"
              className="p-2 rounded-lg bg-surface-card border border-surface-border hover:bg-surface-elevated text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-highlight"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next featured case study"
              className="p-2 rounded-lg bg-surface-card border border-surface-border hover:bg-surface-elevated text-text-secondary hover:text-text-primary transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-highlight"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Project Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {featuredProjects.map((proj, idx) => {
            const isActive = activeProjectIdx === idx;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setActiveProjectIdx(idx)}
                className={`px-4 py-2.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2.5 ${
                  isActive
                    ? "bg-navy text-text-primary border border-slate-500 shadow-sm"
                    : "bg-surface-card text-text-secondary hover:text-text-primary hover:bg-surface-elevated border border-surface-border"
                }`}
              >
                <span
                  className={`font-mono text-[11px] ${
                    isActive ? "text-sky-300 font-bold" : "text-text-muted"
                  }`}
                >
                  0{idx + 1}.
                </span>
                <span className="font-semibold">{proj.title}</span>
                <span className="hidden sm:inline text-[11px] text-text-muted font-normal">
                  ({proj.category.split("·")[0].trim()})
                </span>
              </button>
            );
          })}
        </div>

        {/* Render Only the Active Featured Project */}
        <div key={activeProject.id}>
          <FeaturedProjectCard
            project={activeProject}
            index={activeProjectIdx}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
