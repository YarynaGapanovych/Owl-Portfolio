"use server";

import { supabaseServer } from "@/lib/supabase/server";
import { createSlug } from "@/lib/projects";

export type Project = {
  id?: number;
  name: string;
  description: string;
  url?: string;
  cover_img?: string;
  images?: string[];
};

export async function getProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabaseServer
      .from("projects")
      .select("*")
      .order("name");

    if (error) {
      console.error("Error fetching projects:", error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error("Unexpected error fetching projects:", err);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const { data, error } = await supabaseServer.from("projects").select("*");

    if (error) {
      console.error("Error fetching project:", error);
      return null;
    }

    if (!data || data.length === 0) {
      return null;
    }

    const foundProject = data.find((p) => createSlug(p.name) === slug);
    return foundProject || null;
  } catch (err) {
    console.error("Unexpected error fetching project:", err);
    return null;
  }
}
