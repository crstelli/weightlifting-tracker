import { supabase } from "../supabase";

export async function signUp({ email, password }) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
}

export async function logIn({ email, password }) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}
