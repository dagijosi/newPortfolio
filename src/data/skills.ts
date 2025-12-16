
import { TbBrandJavascript, TbBrandReact, TbBrandNodejs } from "react-icons/tb";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiMongodb,
  SiPhp,
  SiPostgresql,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export const skillCategories = [
    {
      title: "Frontend Mastery",
      skills: [
        { icon: TbBrandReact, name: "React", level: 95 },
        { icon: SiNextdotjs, name: "Next.js", level: 90 },
        { icon: SiTypescript, name: "TypeScript", level: 85 },
        { icon: SiTailwindcss, name: "Tailwind CSS", level: 92 },
        { icon: TbBrandReact, name: "React Styled Components", level: 88 },
        { icon: FaNodeJs, name: "React Native", level: 80 },
      ],
    },
    {
      title: "Backend Expertise",
      skills: [
        { icon: TbBrandNodejs, name: "Node.js", level: 88 },
        { icon: SiPhp, name: "PHP", level: 80 },
        { icon: SiMongodb, name: "MongoDB", level: 82 },
        { icon: SiPostgresql, name: "PostgreSQL", level: 75 },
      ],
    },
    {
      title: "Core Languages",
      skills: [
        { icon: TbBrandJavascript, name: "JavaScript", level: 95 },
        { icon: SiTypescript, name: "TypeScript", level: 85 },
        { icon: SiPython, name: "Python", level: 75 },
      ],
    },
  ];

export const additionalSkills = [
    "Redux",
    "Redux-Saga",
    "Git",
    "REST API",
    "PHP Laravel",
    "Figma UI Design",
  ];
