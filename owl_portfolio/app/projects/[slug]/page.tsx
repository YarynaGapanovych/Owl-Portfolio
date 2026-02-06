"use client";

import { createSlug } from "@/lib/projects";
import { supabase } from "@/lib/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Project = {
  id?: number;
  name: string;
  description: string;
  url?: string;
  cover_img?: string;
  images?: string[];
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProject() {
      try {
        console.log("🔍 Fetching project with slug:", slug);

        const { data, error, count } = await supabase
          .from("projects")
          .select("*", { count: "exact" });

        console.log("📊 Response:", {
          data,
          error,
          count,
          dataLength: data?.length,
        });

        if (error) {
          console.error("❌ Error fetching project:", error);
          console.error("Error code:", error.code);
          console.error("Error message:", error.message);
          setProject(null);
        } else {
          // Check for RLS issue: no error but empty array
          if (!data || data.length === 0) {
            console.warn("⚠️ No data returned - likely RLS policy issue!");
            console.warn(
              "Go to Supabase Dashboard > Authentication > Policies",
            );
            console.warn(
              "Add SELECT policy for 'projects' table with role 'anon'",
            );
            setProject(null);
          } else {
            console.log("✅ Projects fetched:", data);
            const foundProject = data.find((p) => createSlug(p.name) === slug);
            console.log("🔍 Looking for slug:", slug);
            console.log("✅ Found project:", foundProject);
            setProject(foundProject || null);
          }
        }
      } catch (err) {
        console.error("💥 Unexpected error:", err);
        setProject(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bunker">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-subheader mb-4"></div>
          <p className="text-primary text-lg">Loading project...</p>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen  flex flex-col">
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
          {allImages.length > 0 && (
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden cursor-pointer group flex items-center justify-center"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="relative w-full h-64">
                      <Image
                        src={image}
                        alt={`${project.name} - Image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                      <svg
                        className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt={project.name}
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-subheader transition-colors p-2"
              aria-label="Close image"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
