"use client";

import { createSlug, type Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-header mb-12">
          What We&apos;ve Built
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${createSlug(project.name)}`}
              className="rounded-xl cursor-pointer hover:opacity-80 transition-opacity border"
            >
              <div className="h-48 rounded-t-xl mb-4 overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.name}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-subheader text-xl font-semibold mb-2">
                {project.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
