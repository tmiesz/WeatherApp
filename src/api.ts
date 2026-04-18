import { weatherSchema } from "./schemas/weatherSchema";

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code` +
      `&hourly=temperature_2m,weather_code,wind_speed_10m` +
      `&daily=temperature_2m_max,temperature_2m_min,weather_code` +
      `&timezone=auto`,
  );
  const data = await res.json();

  return weatherSchema.parse(data);
}
