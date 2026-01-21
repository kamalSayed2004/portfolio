import React from "react";
import data from "@/assets/data";
import ProjectClient from "./ProjectClient";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return data.projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const projectId = parseInt(resolvedParams.id);
  const project = data.projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return <ProjectClient project={project} />;
}
