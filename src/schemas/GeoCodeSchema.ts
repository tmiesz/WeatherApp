import { z } from "zod";

export const GeoCodeSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    country: z.string(),
    timezone: z.string(),
  }),
);
