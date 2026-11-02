import { useState } from "react";
import { Code, Database, Monitor, Server, Terminal, Check, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { skillGroups, SkillGroup } from "../data/skills";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Frontend Architecture":
      return <Code className="w-3.5 h-3.5 text-slate-300" />;
    case "Backend & Full Stack Development":
      return <Server className="w-3.5 h-3.5 text-slate-300" />;
    case "State Management & Form Validation":
      return <Database className="w-3.5 h-3.5 text-slate-300" />;
    case "Desktop & Systems Engineering":
      return <Monitor className="w-3.5 h-3.5 text-slate-300" />;
    default:
      return <Terminal className="w-3.5 h-3.5 text-slate-300" />;
  }
};

const categoryShortLabels: Record<string, string> = {
  All: "All Capabilities",
  "Frontend Architecture": "Frontend",
  "Backend & Full Stack Development": "Backend & APIs",
  "State Management & Form Validation": "State & Forms",
  "Desktop & Systems Engineering": "Desktop & Systems",
  "Enterprise Domain & Tooling": "Enterprise & Tools",
};

const Skill: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillGroups.map((g) => g.category)];

  const displayedGroups =
    activeCategory === "All"
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeCategory);

  return (
    <section id="skills" className="py-20 border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Technical Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Skills & Technical Scope
          </h2>
          <p className="mt-2 text-text-secondary text-sm sm:text-base max-w-2xl">
            Technologies and engineering domains grounded in production
            development across frontend architectures, backend APIs (Node.js & NestJS), and native desktop software.
          </p>
        </div>

        {/* Clean, Non-Scrolling Wrap Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            const label = categoryShortLabels[cat] || cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-navy text-text-primary border border-slate-500 shadow-xs font-semibold"
                    : "bg-surface-card text-text-secondary hover:text-text-primary hover:bg-surface-elevated border border-surface-border"
                }`}
              >
                {cat === "All" ? (
                  <Layers className="w-3.5 h-3.5 text-slate-400" />
                ) : (
                  getCategoryIcon(cat)
                )}
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className={`grid gap-5 ${
              activeCategory === "All"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {displayedGroups.map((group: SkillGroup) => (
              <div
                key={group.category}
                className={`bg-surface-card border border-surface-border rounded-xl p-5 flex flex-col justify-between hover:border-surface-border-hover transition-colors ${
                  activeCategory !== "All" ? "lg:p-7" : ""
                }`}
              >
                <div>
                  {/* Domain Header */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded bg-navy border border-navy-border flex-shrink-0">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 className="text-base font-display font-semibold text-text-primary">
                      {group.category}
                    </h3>
                  </div>

                  <p className="text-xs text-text-muted leading-relaxed mb-4">
                    {group.description}
                  </p>

                  {/* Skills List */}
                  {activeCategory === "All" ? (
                    <div className="space-y-2">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-2.5 rounded-lg bg-surface-elevated/50 border border-surface-border hover:bg-surface-elevated transition-colors"
                        >
                          <div className="font-mono text-xs font-medium text-text-primary">
                            {skill.name}
                          </div>
                          {skill.detail && (
                            <div className="text-[11px] text-text-muted mt-0.5 leading-snug line-clamp-1">
                              {skill.detail}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3.5 rounded-lg bg-surface-elevated border border-surface-border"
                        >
                          <div className="flex items-center gap-1.5 mb-1.5 text-sky-400 font-mono text-xs font-medium">
                            <Check className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                            <span className="text-text-primary">{skill.name}</span>
                          </div>
                          {skill.detail && (
                            <div className="text-xs text-text-secondary leading-relaxed">
                              {skill.detail}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {activeCategory === "All" && (
                  <div className="pt-3.5 mt-4 border-t border-surface-border flex items-center justify-between">
                    <span className="text-[11px] font-mono text-text-muted">
                      {group.skills.length} skills
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveCategory(group.category)}
                      className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    >
                      Focus view →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skill;
