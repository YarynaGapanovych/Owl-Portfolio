import { createClient } from "@supabase/supabase-js";

// Get environment variables - these MUST be available at build time for NEXT_PUBLIC_ vars
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate environment variables are present
if (!supabaseUrl || !supabaseAnonKey) {
  const missing = [];
  if (!supabaseUrl) missing.push("NEXT_PUBLIC_SUPABASE_URL");
  if (!supabaseAnonKey) missing.push("NEXT_PUBLIC_SUPABASE_ANON_KEY");
  
  throw new Error(
    `Missing required environment variables: ${missing.join(", ")}\n` +
    `Please set these in your Railway project settings.\n` +
    `Go to: Railway Dashboard > Your Project > Variables tab`
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
