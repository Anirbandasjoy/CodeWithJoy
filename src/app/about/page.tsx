"use client";

import MaxWidth from "@/components/shared/maxWidth";
import React from "react";

import {
  FaPhone,
  FaGraduationCap,
  FaCode,
  FaUsers,
  FaRocket,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const BRAND_COLORS: Record<string, string> = {
  "Primary Email": "#D44638", // Gmail red
  "Professional Email": "#D44638",
  Phone: "#25A162", // Green for phone
  Location: "#EA4335", // Google Maps red
  GitHub: "#181717", // GitHub black
  LinkedIn: "#0A66C2", // LinkedIn blue
};

const timeline = [
  {
    year: "2021 - 2024",
    title: "Diploma in Computer Science & Technology",
    institution: "Moulvibazar Polytechnic Institute",
    description:
      "Completed a comprehensive education in computer science fundamentals, software engineering principles, and modern development practices. Achieved strong academic results while building solid practical development skills.",
    icon: <FaGraduationCap className="w-6 h-6" />,
    color: "bg-gray-600",
    skills: [
      "Data Structures",
      "Algorithms",
      "Database Design",
      "Software Engineering",
      "Architecture Design",
    ],
  },
  {
    year: "2020 - Present",
    title: "Full-Stack Developer",
    institution: "Self-Directed Learning & Practice",
    description:
      "Specialized in building enterprise-grade web applications using modern JavaScript ecosystem. Focused on scalable architecture, performance optimization, and exceptional user experiences.",
    icon: <FaCode className="w-6 h-6" />,
    color: "bg-gray-600",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Nest.js",
      "MongoDB",
      "Postgresql",
    ],
  },
  {
    year: "2023 - Present",
    title: "Freelance Developer",
    institution: "Remote Collaboration",
    description:
      "Delivered high-quality solutions for diverse clients. Specialized in frontend architecture, authentication systems, and API integration with focus on maintainable code.",
    icon: <FaUsers className="w-6 h-6" />,
    color: "bg-gray-600",
    skills: [
     
      "API Design",
      "Code Review",
      "System Architecture",
      "Application Architecture",
      "Software Architecture Design",
    ],
  },
  {
    year: "2024 - Future",
    title: "Open Source Contributor & Tech Innovator",
    institution: "Global Developer Community",
    description:
      "Committed to contributing to open source projects, building developer tools, and solving real-world problems through innovative web solutions. Passionate about knowledge sharing and community building.",
    icon: <FaRocket className="w-6 h-6" />,
    color: "bg-gray-600",
    skills: ["Open Source", "DevOps", "System Design", "Mentoring"],
  },
];

const contactInfo = [
  {
    icon: <MdEmail className="w-6 h-6" />,
    label: "Primary Email",
    value: "joy600508@gmail.com",
    href: "mailto:joy600508@gmail.com",
    description: "For business inquiries and opportunities",
  },
  {
    icon: <MdEmail className="w-6 h-6" />,
    label: "Professional Email",
    value: "anirbandasjoy404@gmail.com",
    href: "mailto:anirbandasjoy404@gmail.com",
    description: "For technical discussions and collaborations",
  },
  {
    icon: <FaPhone className="w-6 h-6" />,
    label: "Phone",
    value: "+88017772838734",
    href: "tel:+88017772838734",
    description: "Available for urgent matters",
  },
  {
    icon: <GoLocation className="w-6 h-6" />,
    label: "Location",
    value: "Moulvibazar, Sylhet, Bangladesh",
    href: null,
    description: "Open to remote opportunities worldwide",
  },
  {
    icon: <FaGithub className="w-6 h-6" />,
    label: "GitHub",
    value: "github.com/Anirbandasjoy",
    href: "https://github.com/Anirbandasjoy",
    description: "View my open source contributions",
  },
  {
    icon: <FaLinkedin className="w-6 h-6" />,
    label: "LinkedIn",
    value: "Connect with me professionally",
    href: "https://linkedin.com/in/anirbandasjoy404",
    description: "Professional networking and career updates",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <MaxWidth className="px-4 lg:py-16 py-6">
        {/* Hero Section */}
        <div className="lg:mb-16 mb-10 max-w-3xl">
          <h1 className="text-3xl font-extrabold text-slate-800 mb-4">
            About Me
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed max-w-[37rem]">
            I enjoy solving problems with simple and effective solutions. Always
            eager to learn new things and grow as a developer.
          </p>
        </div>

        {/* Timeline */}
        <section className="relative max-w-[940px] mb-24">
          {/* Vertical line */}
          <div className=" absolute left-16 top-0 bottom-0 w-1.5 bg-gray-200 rounded-full"></div>

          {/* Timeline items */}
          <div className="space-y-14">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative flex  items-start gap-10">
                {/* Dot */}
                <div className="absolute sm:left-8 left-3  top-6 w-10 h-10 rounded-full border-2 border-gray-400  flex items-center justify-center">
                  <div
                    className={`${item.color} w-6 h-6 rounded-full p-1 flex items-center justify-center text-white`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="sm:pl-20 pl-15 flex-1 bg-white rounded-xl border border-gray-100 p-8">
                  <h3 className="text-xl font-semibold text-slate-700">
                    {item.title}
                  </h3>
                  <p className="text-sm text-blue-600 mt-1 mb-2">
                    {item.institution}
                  </p>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium bg-blue-50 text-slate-700 rounded-full px-3 py-1 border border-blue-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="mt-2 text-sm text-gray-500 italic">
                    {item.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & Networking */}
        <section className="max-w-3xl">
          <h2 className="text-[25px] font-extrabold text-slate-800 mb-2">
            Lets Connect & Collaborate
          </h2>
          {/* Subtitle */}
          <p className="text-gray-600 text-sm mb-8 max-w-xl">
            Always open to new opportunities, collaborations, and meaningful
            conversations. Reach out and lets create something amazing together.
          </p>

          <div className="flex flex-col divide-y divide-gray-200 rounded-lg border border-gray-100 bg-white">
            {contactInfo.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-6 hover:bg-blue-50 transition-colors cursor-pointer"
              >
                {/* Icon wrapper with brand bg */}
                <div
                  className="w-10 h-10  rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: BRAND_COLORS[item.label] || "transparent",
                  }}
                >
                  {React.cloneElement(item.icon, {
                    className: "w-5 h-5",
                    style: { color: "#fff" },
                  })}
                </div>

                <div>
                  <p className="text-xs font-bold uppercase text-gray-500 mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-blue-700 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-800 font-semibold">{item.value}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </MaxWidth>
    </div>
  );
};

export default About;
