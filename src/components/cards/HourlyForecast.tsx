import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getWeather } from "../../api";
import WeatherIcon from "../WeatherIcon";
import type { Coords } from "../../types";

type Props = {
  coords: Coords;
};

export default function HourlyForecast({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
  });
  return (
    <Card
      title="Hourly Forecast (48 Hours)"
      childrenClassName="flex gap-6 overflow-x-scroll"
    >
      {data.hourly.time.slice(0, 48).map((hour, i) => (
        <div
          key={hour}
          className="flex flex-col gap-2 items-center p-2 2xl:justify-between"
        >
          <p className="whitespace-nowrap 2xl:scale-110">
            {new Date(hour).toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "numeric",
              hour12: false,
            })}
          </p>
          <WeatherIcon
            code={data.hourly.weather_code[i]}
            className="2xl:scale-210"
          />
          <p className="2xl:scale-110">
            {Math.round(data.hourly.temperature_2m[i])}
            {data.hourly_units.temperature_2m}
          </p>
        </div>
      ))}
    </Card>
  );
}
