import { FaReact, FaNode, FaVuejs } from "react-icons/fa";
import { SiMongodb, SiFirebase } from "react-icons/si";
import { MdInfoOutline } from "react-icons/md";

const skillIconMap: Record<string, JSX.Element> = {
  React: <FaReact />,
  "Node.js": <FaNode />,
  "Vue.js": <FaVuejs />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
};

const Projects = () => {
  const projects = [
    {
      name: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform built with React and Node.js",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates",
      skills: ["Vue.js", "Firebase", "MongoDB"],
    },
    {
      name: "Chat App",
      description: "A real-time chat application for seamless communication",
      skills: ["Vue.js", "Firebase", "MongoDB"],
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-[85rem] py-32 px-8 relative overflow-hidden mx-auto"
    >
      <h2 className="text-polo-200 text-4xl mb-12 relative inline-block">
        Projects
        <span className="absolute bottom-[-10px] left-0 w-3/5 h-0.5 bg-gradient-to-r from-polo-500 to-transparent"></span>
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            className="bg-gradient-to-br from-polo-900 to-polo-800 p-[2rem] rounded-2xl text-white"
            key={index}
          >
            <MdInfoOutline className="text-2xl" />
            <h3 className="text-xl font-semibold">{project.name}</h3>

            <p className="text-sm text-gray-300">{project.description}</p>
            <div className="skills flex flex-wrap gap-2 mt-4">
              {project.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="skill-tag flex items-center bg-gray-700 text-white px-2 py-1 rounded-md text-sm gap-1"
                >
                  {skillIconMap[skill] || <MdInfoOutline />}{" "}
                  {/* Fallback icon */}
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
