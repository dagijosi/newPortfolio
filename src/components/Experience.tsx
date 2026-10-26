import { Calendar, CheckCircle2, ExternalLink } from "lucide-react";
import { experiences, ExperienceItem } from "../data/experience";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Career Timeline
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Work Experience
          </h2>
          <p className="mt-3 text-text-secondary text-base max-w-2xl">
            My professional journey engineering scalable web applications, modular ERP platforms, and localized systems.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {experiences.map((item: ExperienceItem, idx: number) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-surface-card border border-surface-border hover:border-surface-border-hover rounded-xl transition-colors shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-surface-border">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl font-display font-bold text-text-primary">
                      {item.role}
                    </h3>
                    <span className="text-text-muted">·</span>
                    <span className="text-lg font-medium text-slate-300">
                      {item.company}
                    </span>
                  </div>
                  {item.location && (
                    <span className="text-xs font-mono text-text-muted mt-1 block">
                      {item.location}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-elevated text-xs font-mono text-text-secondary border border-surface-border">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.period}
                  </span>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                      aria-label={`Visit ${item.company}`}
                    >
                      <span>Website</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-5">
                {item.description}
              </p>

              <div>
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">
                  Key Achievements & Responsibilities
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {item.achievements.map((achievement, achIdx) => (
                    <li
                      key={achIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
