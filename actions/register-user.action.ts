import { User } from "@/interfaces/supabase-models";
import { supabase } from "@/lib/supabase";

export const registerUser = async (user: User) => {
  const { error: tableError } = await supabase.from("users").insert({
    first_name: user.firstName,
    last_name: user.lastName,
    username: user.username,
    email: user.email,
  });

  if (tableError) throw tableError;

  const { error } = await supabase.auth.signUp({
    email: user.email,
    password: user.password!,
  });

  if (error) throw error;
};
