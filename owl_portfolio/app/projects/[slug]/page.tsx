import { getProjectBySlug } from "@/app/actions/projects";
import ProjectImageGallery from "@/components/ProjectImageGallery";
import Link from "next/link";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bunker">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-6">
            <svg
              className="w-24 h-24 mx-auto text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-subheader mb-4">
            Project not found
          </h1>
          <p className="text-primary mb-8">
            The project you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-elephant border border-matisse/30 text-primary hover:border-matisse/60 hover:text-subheader transition-all duration-300"
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
        </div>
      </div>
    );
  }

  const allImages = project.images || [];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 md:py-16 flex-1 flex flex-col">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-primary hover:text-subheader transition-colors mb-8 group"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
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

        <div className="max-w-5xl mx-auto flex-1 flex flex-col">
          {/* Project Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-subheader mb-12">
            {project.name}
          </h1>

          {/* Image Gallery */}
          <ProjectImageGallery projectName={project.name} images={allImages} />

          {/* Description Section */}
          <div className="mb-12 backdrop-blur-lg">
            <div className="portfolio-card rounded-xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-subheader mb-6">
                About this project
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-primary text-lg md:text-xl leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action - Always at bottom */}
          {project.url && (
            <div className="mt-auto flex flex-col sm:flex-row gap-4 items-center justify-start pt-8 border-t border-matisse/20">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-primary hover:text-subheader transition-colors text-lg font-medium max-w-full"
              >
                <span className="break-all">{project.url}</span>
                <svg
                  className="w-5 h-5 shrink-0"
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
