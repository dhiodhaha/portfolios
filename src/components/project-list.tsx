// components/ProjectList.tsx
import React from "react";
import { Project } from "@/lib/types";
import ProjectItem from "@/components/project-items";

interface Props {
  projects: Project[];
}

const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
    <div className="p-4">
      <div className="flex flex-wrap items-center gap-1 justify-center">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            isLast={index === projects.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
