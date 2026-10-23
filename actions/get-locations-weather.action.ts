import { City } from "@/interfaces/models";
import { getWeatherFromCoordinates } from "./weather-api.action";
import { supabase } from "@/lib/supabase";

export const getLocationsWeather = async (): Promise<City[]> => {
  try {
    const { data: dataCities, error } = await supabase.from("cities").select();

    if (error) throw error;

    const promises = dataCities.map(async (city): Promise<City> => {
      const data = await getWeatherFromCoordinates(city.lan, city.lon);
      return {
        name: data.name,
        description: city.description,
        id: city.id,
        image: city.image,
        lan: city.lan,
        lon: city.lan,
        weather: {
          description: data.weather[0].description,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          speedWind: data.wind.speed,
        },
      };
    });

    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    throw error;
  }
};
