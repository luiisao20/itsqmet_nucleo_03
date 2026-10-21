export interface City {
  id: number;
  name: string;
  description: string;
  image: string;
  coordinates: {
    lan: number;
    lon: number;
  };
  weather?: Weather;
}

export interface Weather {
  temperature: number;
  pressure: number;
  humidity: number;
  description: string
  speedWind: number;
}

export interface ApiResponse {
  coord: Coord;
  weather: WeatherApi[];
  main: Main;
  rain: Rain;
  name: string;
  wind: Wind;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Rain {
  "1h": number;
}

export interface WeatherApi {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
}
