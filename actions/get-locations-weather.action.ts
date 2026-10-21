import { ApiResponse, City } from "@/interfaces/models";
import { getWeatherFromCoordinates } from "./weather-api.action";

export const getLocationsWeather = async (cities: City[]): Promise<City[]> => {
  try {
    const promises = cities.map(async (city): Promise<City> => {
      const data = await getWeatherFromCoordinates(
        city.coordinates.lan,
        city.coordinates.lon,
      );
      return {
        ...city,
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
