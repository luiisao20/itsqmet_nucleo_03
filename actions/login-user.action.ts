import { User } from "@/interfaces/supabase-models";
import { supabase } from "@/lib/supabase";

export const loginUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<User> => {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("username", username)
    .limit(1);

  if (error) throw error;

  const email = data[0].email;

  const { error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (authError) throw authError;

  return {
    email: data[0].email,
    firstName: data[0].first_name,
    lastName: data[0].last_name,
    username: data[0].username,
    id: data[0].id,
  };
};
