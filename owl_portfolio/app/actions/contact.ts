"use server";

import { supabaseServer } from "@/lib/supabase/server";

export async function submitContact(formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const message = formData.get("message")?.toString();

  if (!name || !email || !message) {
    throw new Error("Missing fields");
  }

  const { error } = await supabaseServer
    .from("contact_messages")
    .insert({ name, email, message });

  if (error) {
    console.error(error);
    throw new Error("Failed to send");
  }

  return { success: true };
}
