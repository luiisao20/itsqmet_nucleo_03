import { supabase } from "@/lib/supabase";

export const deleteBooking = async (id: number) => {
  const { error } = await supabase.from("users_booking").delete().eq("id", id);

  if (error) throw new Error(error.message);
};
