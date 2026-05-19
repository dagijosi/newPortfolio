import { motion } from "framer-motion";
import { skillCategories, additionalSkills } from "../data/skills";

const Skill = () => {
  return (
    <section
      id="skills"
      className="px-6 py-20 border-gray-800 border-b min-h-screen"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 font-bold text-white text-4xl md:text-5xl"
        >
          <span className="text-secondary">#</span> Technical Arsenal
        </motion.h2>

        <div className="gap-8 grid lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: catIndex * 0.2 }}
              className="bg-gray-900/80 backdrop-blur-md p-6 border border-gray-800/50 hover:border-secondary/50 rounded-xl transition-all"
            >
              <h3 className="mb-6 font-semibold text-white text-xl font-display">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="group relative"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-secondary text-3xl">
                        <skill.icon />
                      </span>
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-secondary">{skill.level}%</span>
                        </div>
                        <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="bg-gradient-to-r from-secondary to-accent h-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.3 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Matrix */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="gap-4 grid sm:grid-cols-2 md:grid-cols-4 mt-16"
        >
          {additionalSkills.map((skill) => (
            <motion.div
              key={skill}
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              className="bg-gray-900/80 backdrop-blur-md p-4 border border-gray-800/50 hover:border-secondary/50 rounded-lg text-center transition-all"
            >
              <span className="text-gray-300">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
