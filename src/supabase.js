import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hspyxwotamukotwzhzlx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzcHl4d290YW11a290d3poemx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0MjAwMzQsImV4cCI6MjA3NTk5NjAzNH0.03J53X4uN9twtvjC1RPENl24tsh0IS4tvIxaBfIepWE";

export const supabase = createClient(supabaseUrl, supabaseKey);
