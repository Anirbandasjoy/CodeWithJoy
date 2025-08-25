"use client";

import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaGraduationCap,
  FaCode,
  FaUsers,
  FaRocket,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import MaxWidth from "@/components/shared/maxWidth";
import Header from "@/components/shared/Header";

// ================= TYPES ================= //
interface TimelineItemType {
  year: string;
  title: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
}

interface ContactInfoType {
  icon: React.ReactNode;
  label: keyof typeof BRAND_COLORS;
  value: string;
  href: string | null;
  description: string;
  copyable: boolean;
}

interface CopyButtonProps {
  text: string;
  label: string;
}

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
  isVisible: boolean;
}

interface ContactCardProps {
  item: ContactInfoType;
  index: number;
  isVisible: boolean;
}

// ========================================= //

const BRAND_COLORS = {
  "Primary Email": "#D44638",
  "Professional Email": "#D44638",
  Phone: "#25A162",
  Location: "#6B7280",
  GitHub: "#181717",
  LinkedIn: "#0A66C2",
} as const;

const timeline: TimelineItemType[] = [
  {
    year: "2021 - 2024",
    title: "Diploma in Computer Science & Technology",
    institution: "Moulvibazar Polytechnic Institute",
    description:
      "Completed comprehensive education in computer science fundamentals, software engineering principles, and modern development practices. Achieved strong academic results while building solid practical development skills.",
    icon: <FaGraduationCap className="w-4 h-4" />,
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
    icon: <FaCode className="w-4 h-4" />,
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Express.js",
      "Nest.js",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    year: "2023 - Present",
    title: "Freelance Developer",
    institution: "Remote Collaboration",
    description:
      "Delivered high-quality solutions for diverse clients. Specialized in frontend architecture, authentication systems, and API integration with focus on maintainable code.",
    icon: <FaUsers className="w-4 h-4" />,
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
    icon: <FaRocket className="w-4 h-4" />,
    skills: ["Open Source", "DevOps", "System Design", "Mentoring"],
  },
];

const contactInfo: ContactInfoType[] = [
  {
    icon: <MdEmail className="w-4 h-4" />,
    label: "Primary Email",
    value: "joy600508@gmail.com",
    href: "mailto:joy600508@gmail.com",
    description: "For business inquiries and opportunities",
    copyable: true,
  },
  {
    icon: <MdEmail className="w-4 h-4" />,
    label: "Professional Email",
    value: "anirbandasjoy404@gmail.com",
    href: "mailto:anirbandasjoy404@gmail.com",
    description: "For technical discussions and collaborations",
    copyable: true,
  },
  {
    icon: <FaPhone className="w-4 h-4" />,
    label: "Phone",
    value: "+88017772838734",
    href: "tel:+88017772838734",
    description: "Available for urgent matters",
    copyable: true,
  },
  {
    icon: <GoLocation className="w-4 h-4" />,
    label: "Location",
    value: "Moulvibazar, Sylhet, Bangladesh",
    href: null,
    description: "Open to remote opportunities worldwide",
    copyable: false,
  },
  {
    icon: <FaGithub className="w-4 h-4" />,
    label: "GitHub",
    value: "github.com/Anirbandasjoy",
    href: "https://github.com/Anirbandasjoy",
    description: "View my open source contributions",
    copyable: false,
  },
  {
    icon: <FaLinkedin className="w-4 h-4" />,
    label: "LinkedIn",
    value: "Connect with me professionally",
    href: "https://linkedin.com/in/anirbandasjoy404",
    description: "Professional networking and career updates",
    copyable: false,
  },
];

const CopyButton: React.FC<CopyButtonProps> = ({ text, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1.5 rounded-md hover:bg-gray-100 transition-colors duration-200"
      title={`Copy ${label}`}
      aria-label={`Copy ${label}`}
    >
      {copied ? (
        <FaCheck className="w-3 h-3 text-green-600" />
      ) : (
        <FaCopy className="w-3 h-3 text-gray-400 hover:text-gray-600" />
      )}
    </button>
  );
};

const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  index,
  isVisible,
}) => {
  return (
    <div
      className={`relative flex flex-col sm:flex-row gap-6 transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline connector */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center text-gray-600 shadow-sm">
          {item.icon}
        </div>
        {index < timeline.length - 1 && (
          <div className="w-0.5 h-16 bg-gray-200 mt-4"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-gray-600 mb-2">
                {item.institution}
              </p>
            </div>
            <span className="text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full whitespace-nowrap mt-2 sm:mt-0">
              {item.year}
            </span>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, i) => (
              <span
                key={i}
                className="text-xs font-medium bg-gray-50 text-gray-700 rounded-md px-2 py-1 border border-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactCard: React.FC<ContactCardProps> = ({
  item,
  index,
  isVisible,
}) => {
  const brandColor = BRAND_COLORS[item.label];

  return (
    <div
      className={`transform transition-all duration-500  ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-gray-300 transition-all duration-300">
        <div className="flex items-center gap-4">
          {/* Icon with brand color */}
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm"
            style={{ backgroundColor: brandColor }}
          >
            {React.cloneElement(
              item.icon as React.ReactElement<React.SVGProps<SVGSVGElement>>,
              {
                className: "w-4 h-4 text-white",
              }
            )}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
              {item.label}
            </p>

            <div className="flex items-center gap-1 mb-1">
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="font-medium text-gray-900 hover:text-black transition-colors flex items-center gap-1 group text-sm"
                >
                  <span className="truncate">{item.value}</span>
                  {item.href.startsWith("http") && (
                    <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </a>
              ) : (
                <p className="font-medium text-gray-900 truncate text-sm">
                  {item.value}
                </p>
              )}

              {item.copyable && (
                <CopyButton text={item.value} label={item.label} />
              )}
            </div>

            <p className="text-xs text-gray-500 line-clamp-1">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "-20px" }
    );

    const elements = document.querySelectorAll<HTMLElement>("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <MaxWidth>
      <div className="min-h-screen">
        <div className="py-12 lg:py-20 px-4 lg:px-0">
          {/* Hero Section */}
          <header className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium text-gray-700">
                Available for opportunities
              </span>
            </div>

            <Header
              title="About Me"
              subtitle=" I enjoy solving problems with simple and effective solutions.
              Always eager to learn new things and grow as a developer."
            />
          </header>

          {/* Timeline Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Experience & Education
            </h2>

            <div className="space-y-0">
              {timeline.map((item, index) => (
                <div key={index} id={`timeline-${index}`} data-animate>
                  <TimelineItem
                    item={item}
                    index={index}
                    isVisible={visibleItems.has(`timeline-${index}`)}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Lets Connect & Collaborate
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Always open to new opportunities, collaborations, and meaningful
                conversations. Reach out and lets create something amazing
                together.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div key={index} id={`contact-${index}`} data-animate>
                  <ContactCard
                    item={item}
                    index={index}
                    isVisible={visibleItems.has(`contact-${index}`)}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </MaxWidth>
  );
};

export default About;
