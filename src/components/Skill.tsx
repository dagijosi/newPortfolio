import { Code, Database, Monitor, Server, Terminal } from "lucide-react";
import { skillGroups, SkillGroup } from "../data/skills";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Frontend Architecture":
      return <Code className="w-4 h-4 text-slate-300" />;
    case "Backend & Full Stack Development":
      return <Server className="w-4 h-4 text-slate-300" />;
    case "State Management & Form Validation":
      return <Database className="w-4 h-4 text-slate-300" />;
    case "Desktop & Systems Engineering":
      return <Monitor className="w-4 h-4 text-slate-300" />;
    default:
      return <Terminal className="w-4 h-4 text-slate-300" />;
  }
};

const Skill: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Technical Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Skills & Technical Scope
          </h2>
          <p className="mt-3 text-text-secondary text-base max-w-2xl">
            Technologies and engineering domains grounded in real-world application
            development across frontend architectures, backend APIs (Node.js & NestJS), and native desktop software.
          </p>
        </div>

        {/* Skills Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group: SkillGroup) => (
            <div
              key={group.category}
              className="p-6 sm:p-7 bg-surface-card border border-surface-border hover:border-surface-border-hover rounded-xl transition-colors shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded bg-navy border border-navy-border">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-text-primary">
                    {group.category}
                  </h3>
                </div>

                <p className="text-xs text-text-muted mb-6 leading-relaxed">
                  {group.description}
                </p>

                <div className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded bg-surface-elevated/70 border border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                    >
                      <span className="font-mono font-medium text-text-primary">
                        {skill.name}
                      </span>
                      {skill.detail && (
                        <span className="text-[11px] text-text-muted">
                          {skill.detail}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
