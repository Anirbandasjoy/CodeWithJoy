"use client";

import MaxWidth from "@/components/shared/maxWidth";
import ProjectPreview from "@/utils/ProjectPreview";
import React from "react";

const projectLinks = ["https://www.rcictowhid.ca", "https://www.qrinux.com"];

const ProjectsPage = () => {
  return (
    <MaxWidth className="px-4 lg:px-0 sm:my-16 my-6">
      <h1 className="text-3xl font-semibold text-slate-700 mb-2">Projects</h1>

      <p className="text-gray-600 mb-6 max-w-xl">
        Explore some of my collaborative and solo projects that highlight
        teamwork, problem-solving, and modern UI practices with performance in
        mind.
      </p>

      <div className="flex flex-wrap gap-4">
        {projectLinks.map((url) => (
          <ProjectPreview key={url} url={url} />
        ))}
      </div>
    </MaxWidth>
  );
};

export default ProjectsPage;
