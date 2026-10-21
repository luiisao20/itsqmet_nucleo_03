import { ApiResponse } from "@/interfaces/models";
import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const getWeatherFromCoordinates = async (
  lat: number,
  lon: number,
): Promise<ApiResponse> => {
  try {
    const { data } = await axios.get<ApiResponse>(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          lat,
          lon,
          appid: API_KEY,
          units: "metric",
          lang: "es",
        },
      },
    );
    return data;
  } catch (error) {
    throw error;
  }
};
