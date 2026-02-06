import { createSlug } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/app/actions/projects";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-header mb-12">
          What We&apos;ve Built
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id || index}
              href={`/projects/${createSlug(project.name)}`}
              className="portfolio-card rounded-xl cursor-pointer overflow-hidden"
            >
              <div className="h-48 rounded-t-xl mb-4 overflow-hidden bg-bunker relative">
                {project.cover_img ? (
                  <Image
                    src={project.cover_img}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-gray-500 text-sm">No image</div>
                  </div>
                )}
              </div>
              <h3 className="text-subheader text-xl font-semibold mb-2 px-4">
                {project.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
