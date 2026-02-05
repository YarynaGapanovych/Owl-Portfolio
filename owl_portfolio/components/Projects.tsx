"use client";

import { createSlug } from "@/lib/projects";
import { supabase } from "@/lib/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Project = {
  id?: number;
  name: string;
  description: string;
  url?: string;
  cover_img?: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        console.log("🔍 Fetching projects from 'projects' table...");

        const { data, error, count } = await supabase
          .from("projects")
          .select("*", { count: "exact" })
          .order("name");

        console.log("📊 Response:", { data, error, count });

        if (error) {
          console.error("❌ Error fetching projects:", error);
          console.error("Error code:", error.code);
          console.error("Error message:", error.message);
          console.error("Error details:", error.details);
          console.error("Error hint:", error.hint);

          // Check if it's an RLS policy issue
          if (
            error.code === "PGRST116" ||
            error.message?.includes("permission") ||
            error.message?.includes("policy")
          ) {
            console.error("⚠️ RLS Policy Issue!");
            console.error(
              "Go to Supabase Dashboard > Authentication > Policies",
            );
            console.error("Add a policy for 'projects' table:");
            console.error("- Policy name: 'Allow public read access'");
            console.error("- Allowed operation: SELECT");
            console.error("- Target roles: anon");
            console.error("- USING expression: true");
          }

          setProjects([]);
        } else {
          console.log("✅ Query successful!");
          console.log("📦 Data received:", data);
          console.log("📈 Count:", count);
          console.log("🔢 Data length:", data?.length);

          if (data && data.length > 0) {
            console.log("✅ Setting projects:", data);
            setProjects(data);
          } else {
            console.warn("⚠️ Data is empty or null");
            console.warn("Check:");
            console.warn("1. RLS policies allow SELECT for anon users");
            console.warn("2. Table has data (check Supabase dashboard)");
            console.warn("3. Column names match: name, description, url");
            setProjects([]);
          }
        }
      } catch (err) {
        console.error("💥 Unexpected error:", err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-header mb-12">
            What We&apos;ve Built
          </h2>
          <div className="text-center py-8">
            <p className="text-primary">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

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
