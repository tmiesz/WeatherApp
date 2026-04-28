import { z } from "zod";

export const WeatherSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  generationtime_ms: z.number(),
  utc_offset_seconds: z.number(),
  timezone: z.string(),
  timezone_abbreviation: z.string(),
  elevation: z.number(),

  current_units: z.object({
    time: z.string(),
    interval: z.string(),
    temperature_2m: z.string(),
    weather_code: z.string(),
    apparent_temperature: z.string(),
    relative_humidity_2m: z.string(),
    wind_speed_10m: z.string(),
  }),

  current: z.object({
    time: z.string(),
    interval: z.number(),
    temperature_2m: z.number(),
    weather_code: z.number(),
    apparent_temperature: z.number(),
    relative_humidity_2m: z.number(),
    wind_speed_10m: z.number(),
  }),

  hourly_units: z.object({
    time: z.string(),
    temperature_2m: z.string(),
    weather_code: z.string(),
  }),

  hourly: z.object({
    time: z.array(z.string()),
    temperature_2m: z.array(z.number()),
    weather_code: z.array(z.number()),
  }),

  daily_units: z.object({
    time: z.string(),
    temperature_2m_mean: z.string(),
    temperature_2m_min: z.string(),
    temperature_2m_max: z.string(),
    weather_code: z.string(),
    uv_index_max: z.string(),
    sunrise: z.string(),
    sunset: z.string(),
    cloud_cover_mean: z.string(),
    pressure_msl_mean: z.string(),
    wind_direction_10m_dominant: z.string(),
  }),

  daily: z.object({
    time: z.array(z.string()),
    temperature_2m_mean: z.array(z.number()),
    temperature_2m_min: z.array(z.number()),
    temperature_2m_max: z.array(z.number()),
    weather_code: z.array(z.number()),
    uv_index_max: z.array(z.number()),
    sunrise: z.array(z.string()),
    sunset: z.array(z.string()),
    cloud_cover_mean: z.array(z.number()),
    pressure_msl_mean: z.array(z.number()),
    wind_direction_10m_dominant: z.array(z.number()),
  }),
});
