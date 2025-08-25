"use client";

import { ComingSoonFeature } from "@/components/ComingSoon";
import MaxWidth from "@/components/shared/maxWidth";

import React from "react";

const ProjectsPage = () => {
  return (
    <MaxWidth className="px-4 lg:px-0 sm:my-16 my-6">
      <ComingSoonFeature title="Projects" variant="inline" />
    </MaxWidth>
  );
};

export default ProjectsPage;
