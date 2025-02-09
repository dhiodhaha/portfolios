"use client";

import { useState } from "react";
import { Project } from "@/lib/types";

const initialProjects: Project[] = [
  {
    id: 2,
    href: "https://video.dhaf.in/",
    item: "Video Project",
    online: true,
  },
  {
    id: 3,
    href: "https://design.dhaf.in/",
    item: "Design Project",
    online: false,
  },
  {
    id: 4,
    href: "https://uiux.dhaf.in/",
    item: "UI/UX Project",
    online: false,
  },
  {
    id: 5,
    href: "https://dev.dhaf.in/",
    item: "App Project",
    online: false,
  },
  {
    id: 6,
    href: "https://photo.dhaf.in/",
    item: "Photo Project",
    online: false,
  },
  {
    id: 7,
    href: "https://socialmedia.dhaf.in/",
    item: "Social Media Project",
    online: true,
  },
  {
    id: 1,
    href: "https://midjourney.dhaf.in/",
    item: "Midjourneys",
    online: true,
  },
];

export const useProjects = () => {
  const [projects] = useState<Project[]>(initialProjects);
  return { projects };
};
