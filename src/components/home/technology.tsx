"use client";

import React from "react";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiJava, DiPython } from "react-icons/di";
import { FaWindows } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiRedux,
  SiDocker,
  SiJest,
  SiPostman,
  SiPopos,
  SiPostgresql,
  SiC,
  SiCplusplus,
  SiNestjs,
  SiUbuntu,
} from "react-icons/si";
import Header from "../shared/Header";

type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string; color?: string }>;
  color: string;
  level: SkillLevel;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const frontendSkills: Skill[] = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26", level: "Advanced" },
  { name: "CSS", icon: SiCss3, color: "#1572B6", level: "Advanced" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38B2AC",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    level: "Advanced",
  },
  { name: "React.js", icon: SiReact, color: "#61DAFB", level: "Advanced" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    level: "Advanced",
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux,
    color: "#764ABC",
    level: "Advanced",
  },
];

const programmingLanguages: Skill[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    level: "Advanced",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    level: "Advanced",
  },
  {
    name: "C",
    icon: SiC,
    color: "#A8B9CC",
    level: "Intermediate",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C",
    level: "Intermediate",
  },
  {
    name: "Java",
    icon: DiJava,
    color: "#007396",
    level: "Intermediate",
  },

  {
    name: "Python",
    icon: DiPython,
    color: "#007396",
    level: "Intermediate",
  },
];

const backendSkills: Skill[] = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    level: "Intermediate",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#000000",
    level: "Advanced",
  },
  {
    name: "Nest.js",
    icon: SiNestjs,
    color: "#E0234E",
    level: "Intermediate",
  },
];

const databases: Skill[] = [
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "Advanced" },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    level: "Intermediate",
  },
];

const operatingSystems: Skill[] = [
  {
    name: "Pop!_OS (Currently Using)",
    icon: SiPopos,
    color: "#6D6D6D",
    level: "Advanced",
  },
  {
    name: "Ubuntu (Previously Used)",
    icon: SiUbuntu,
    color: "#E95420",
    level: "Intermediate",
  },
  {
    name: "Windows (Previously Used)",
    icon: FaWindows,
    color: "#0078D6",
    level: "Advanced",
  },
];

const tools: Skill[] = [
  { name: "Git", icon: SiGit, color: "#F05032", level: "Advanced" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", level: "Beginner" },
  { name: "Testing (Jest)", icon: SiJest, color: "#C21325", level: "Beginner" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", level: "Advanced" },
  {
    name: "VS Code",
    icon: BiLogoVisualStudio,
    color: "#007ACC",
    level: "Advanced",
  },
];

const categories: SkillCategory[] = [
  { title: "Frontend", skills: frontendSkills },
  { title: "Programming Languages", skills: programmingLanguages },
  { title: "Backend", skills: backendSkills },
  { title: "Databases", skills: databases },
  { title: "Operating Systems", skills: operatingSystems },
  { title: "Tools", skills: tools },
];

const levelColors: Record<SkillLevel, string> = {
  Beginner: "bg-yellow-200 text-yellow-900",
  Intermediate: "bg-blue-200 text-blue-900",
  Advanced: "bg-green-200 text-green-900",
};

const Technology = () => {
  return (
    <section id="skills" className=" mx-auto space-y-8 text-sm sm:text-base">
      <Header
        title="Technology"
        subtitle="Technologies and tools I frequently use for building scalable and
        efficient web applications."
      />

      {categories.map(({ title, skills }) => (
        <div key={title}>
          {/* Heading with horizontal line */}
          <div className="flex items-center mb-3 gap-3">
            <h3 className="text-lg sm:text-[16px]  text-slate-600">{title}</h3>
            <div className="flex-grow border-t-[0.1px] border-slate-200" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {skills.map(({ name, icon: Icon, color, level }) => (
              <div
                key={name}
                className="flex cursor-pointer items-center gap-2 sm:gap-3 p-2 sm:p-3 border border-gray-200 rounded-md bg-white hover:shadow-sm transition-shadow duration-300"
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" color={color} />
                <div className="flex flex-col">
                  <h4 className="text-xs sm:text-[13px] font-semibold text-gray-800">
                    {name}
                  </h4>
                  <span
                    className={`inline-block px-2 py-[1px] text-[9px] sm:text-[10px] font-semibold rounded-md ${levelColors[level]}`}
                  >
                    {level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Technology;
