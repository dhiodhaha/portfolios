"use client";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { useProjects } from "@/hooks/useProject";
import ProjectList from "@/components/project-list";
import React from "react";

const DemoVariant1: React.FC = () => {
  const { projects } = useProjects();
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Gradient Background */}
      <AnimatedGradientBackground />

      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-32 text-center">
        <div className="mt-4 text-lg text-gray-300 md:text-xl max-w-lg">
          Dhafin's page is under construction
          <ProjectList projects={projects} />
        </div>
      </div>
    </div>
  );
};

export { DemoVariant1 };
