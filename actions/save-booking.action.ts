import { supabase } from "@/lib/supabase";

interface Props {
  userId: string;
  cityId: number;
  date: string;
}

export const saveBookingAction = async ({ userId, cityId, date }: Props) => {
  const { error } = await supabase
    .from("users_booking")
    .insert({ user_id: userId, city_id: cityId, date });

  if (error) throw new Error(error.message);
};
