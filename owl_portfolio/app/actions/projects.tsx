"use server";

import { createSlug } from "@/lib/projects";
import { supabaseServer } from "@/lib/supabase/server";

export type Project = {
  id?: number;
  name: string;
  description: string;
  url?: string;
  cover_img?: string;
  images?: string[];
  display_order?: number; // Optional: for custom ordering
};

export async function getProjects(): Promise<Project[]> {
  try {
    const { data, error } = await supabaseServer.from("projects").select("*");

    if (error) {
      console.error("Error fetching projects:", error);
      return [];
    }

    if (!data) return [];

    return data.sort((a, b) => {
      if (a.display_order != null && b.display_order != null) {
        return a.display_order - b.display_order;
      }
      if (a.display_order != null) return -1;
      if (b.display_order != null) return 1;
      return a.name.localeCompare(b.name);
    });
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
