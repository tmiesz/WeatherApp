import { z } from "zod";

export const AirPollutionSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  generationtime_ms: z.number(),
  utc_offset_seconds: z.number(),
  timezone: z.string(),
  timezone_abbreviation: z.string(),
  elevation: z.number(),

  hourly_units: z.object({
    time: z.string(),
    pm10: z.string(),
    pm2_5: z.string(),
    carbon_monoxide: z.string(),
    nitrogen_dioxide: z.string(),
    nitrogen_monoxide: z.string(),
    sulphur_dioxide: z.string(),
    ozone: z.string(),
    ammonia: z.string(),
  }),

  hourly: z.object({
    time: z.array(z.string()),
    pm10: z.array(z.number().nullable()),
    pm2_5: z.array(z.number().nullable()),
    carbon_monoxide: z.array(z.number().nullable()),
    nitrogen_dioxide: z.array(z.number().nullable()),
    nitrogen_monoxide: z.array(z.number().nullable()),
    sulphur_dioxide: z.array(z.number().nullable()),
    ozone: z.array(z.number().nullable()),
    ammonia: z.array(z.number().nullable()),
  }),
});
