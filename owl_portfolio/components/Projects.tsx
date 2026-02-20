"use client";

import type { Project } from "@/app/actions/projects";
import { createSlug } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const hasMore = projects.length > 3;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting && window.location.hash === "#projects") {
          history.replaceState(null, "", window.location.pathname);
        }
      },
      { threshold: 0, rootMargin: "0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-header mb-12">
          What We&apos;ve Built
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => {
            const isNewItem = index >= 3 && showAll;
            return (
              <Link
                key={project.id || index}
                href={`/projects/${createSlug(project.name)}`}
                className={`portfolio-card rounded-xl cursor-pointer overflow-hidden project-card-enter ${
                  isNewItem ? "project-card-new" : ""
                }`}
                style={{
                  animation: isNewItem
                    ? `fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${(index - 3) * 0.15}s both`
                    : "none",
                }}
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
            );
          })}
        </div>
        {hasMore && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-matisse/10 to-matisse/5 text-primary hover:from-matisse/20 hover:to-matisse/10 hover:text-subheader transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 cursor-pointer"
            >
              {showAll ? "Show Less" : "See More"}
              {showAll ? (
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
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.736m0 0L21 21"
                  />
                </svg>
              ) : (
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
