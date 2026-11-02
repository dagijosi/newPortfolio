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

        {/* Skills Categorized Specification Matrix */}
        <div className="bg-surface-card border border-surface-border rounded-xl overflow-hidden divide-y divide-surface-border shadow-card">
          {skillGroups.map((group: SkillGroup) => (
            <div
              key={group.category}
              className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-surface-elevated/20 transition-colors"
            >
              {/* Domain & Scope (4 cols) */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-navy border border-navy-border">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="text-base font-display font-semibold text-text-primary">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs text-text-muted leading-relaxed pr-4">
                  {group.description}
                </p>
              </div>

              {/* Technical Capabilities (8 cols) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-lg bg-surface-elevated/60 border border-surface-border hover:border-surface-border-hover transition-colors"
                  >
                    <div className="font-mono text-xs font-medium text-text-primary mb-1">
                      {skill.name}
                    </div>
                    {skill.detail && (
                      <div className="text-[11px] text-text-secondary leading-snug">
                        {skill.detail}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
