import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Back to Projects</span>
        </Link>

        {/* Project Content */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-subheader mb-6">
            {project.name}
          </h1>

          {/* Images Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden border border-purple-500/20"
              >
                <Image
                  src={image}
                  alt={`${project.name} - Image ${index + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Full Description */}
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold text-subheader">
              About this project
            </h2>
            <p className="text-primary text-lg leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* URL Link */}
          {project.url && (
            <div className="pt-6 border-t border-purple-500/20">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-lg font-medium"
              >
                <span>Visit Website</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
