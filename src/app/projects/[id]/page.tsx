import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import fs from "fs";
import path from "path";
import data from "@/assets/data";
import ProjectClient from "./ProjectClient";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectId = parseInt(id);
  const project = data.projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black p-6">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
          <Link
            href="/"
            className="text-blue-500 hover:underline flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Dynamically discover images in public/projects/[id]
  const projectDir = path.join(process.cwd(), "public", "projects", id);
  let projectImages: string[] = [];

  try {
    if (fs.existsSync(projectDir)) {
      const files = fs.readdirSync(projectDir);
      // Filter for image files and sort them numerically if possible
      projectImages = files
        .filter((file) => /\.(png|jpe?g|webp|svg)$/i.test(file))
        .sort((a, b) => {
          const numA = parseInt(a.split(".")[0]);
          const numB = parseInt(b.split(".")[0]);
          if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
          return a.localeCompare(b);
        })
        .map((file) => `/projects/${id}/${file}`);
    }
  } catch (error) {
    console.error("Error reading project directory:", error);
  }

  return <ProjectClient project={project} projectImages={projectImages} />;
}
