import { weatherSchema } from "./schemas/weatherSchema";

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&hourly=temperature_2m,weather_code&daily=temperature_2m_mean,temperature_2m_min,temperature_2m_max,weather_code`,
  );
  const data = await res.json();

  return weatherSchema.parse(data);
}
