import { Booking } from "@/interfaces/models";
import { supabase } from "@/lib/supabase";

export const getUsersBookings = async (userId: string): Promise<Booking[]> => {
  const bookings: Booking[] = [];
  const { data, error } = await supabase.rpc("get_users_booking", {
    p_user_id: userId,
  });

  if (error) throw new Error(error.message);

  for (const element of data) {
    bookings.push({
      id: element.id,
      city: element.name,
      date: element.booking_date,
      lan: element.lan,
      lon: element.lon,
      image: element.image,
    });
  }

  return bookings;
};
