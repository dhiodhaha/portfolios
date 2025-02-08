// components/ProjectItem.tsx
import React from "react";
import { Project } from "@/lib/types";
import Link from "next/link";

interface Props {
  project: Project;
  isLast: boolean;
}

const ProjectItem: React.FC<Props> = ({ project, isLast }) => {
  return (
    <>
      {project.online ? (
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline "
        >
          {project.item.toLowerCase()}
        </Link>
      ) : (
        <span className="text-gray-500 cursor-not-allowed">
          {project.item.toLowerCase()}
        </span>
      )}
      {!isLast && <span className="text-white mx-1">/</span>}
    </>
  );
};

export default ProjectItem;
