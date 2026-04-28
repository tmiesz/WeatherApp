import { WeatherSchema } from "./schemas/WeatherSchema";
import { GeoCodeSchema } from "./schemas/GeoCodeSchema";
import { AirPollutionSchema } from "./schemas/AirPollutionSchema";

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=auto&current=temperature_2m,weather_code,apparent_temperature,relative_humidity_2m,wind_speed_10m&hourly=temperature_2m,weather_code&daily=temperature_2m_mean,temperature_2m_min,temperature_2m_max,weather_code,uv_index_max,sunrise,sunset,cloud_cover_mean,pressure_msl_mean,wind_direction_10m_dominant`,
  );
  const data = await res.json();

  return WeatherSchema.parse(data);
}

export async function getGeoCode(city: string) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`,
  );
  const data = await res.json();

  return GeoCodeSchema.parse(data.results);
}

export async function getAirPollution({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) {
  const res = await fetch(
    `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,ozone,carbon_monoxide,nitrogen_monoxide,sulphur_dioxide,ammonia&forecast_hours=1`,
  );
  const data = await res.json();

  return AirPollutionSchema.parse(data);
}
