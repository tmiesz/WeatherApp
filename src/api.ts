import { weatherSchema } from "./schemas/weatherSchema";

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=auto&current=temperature_2m,weather_code,apparent_temperature,relative_humidity_2m,wind_speed_10m&hourly=temperature_2m,weather_code&daily=temperature_2m_mean,temperature_2m_min,temperature_2m_max,weather_code,uv_index_max,sunrise,sunset,cloud_cover_mean,pressure_msl_mean,wind_direction_10m_dominant`,
  );
  const data = await res.json();

  return weatherSchema.parse(data);
}
