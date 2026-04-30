import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getWeather } from "../../api";
import WeatherIcon from "../WeatherIcon";
import type { Coords } from "../../types";

type Props = {
  coords: Coords;
};

export default function DailyForecast({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
  });
  return (
    <Card
      title="Daily Forecast"
      childrenClassName="flex flex-col gap-8 2xl:justify-between"
    >
      {data.daily.time.map((time, i) => (
        <div key={time} className="flex justify-between">
          <p className="w-9">
            {new Date(time).toLocaleDateString(undefined, {
              weekday: "long",
            })}
          </p>
          <WeatherIcon code={data.daily.weather_code[i]} />
          <p>
            {Math.round(data.daily.temperature_2m_mean[i])}
            {data.daily_units.temperature_2m_mean}
          </p>
          <p className="text-gray-500/75">
            {Math.round(data.daily.temperature_2m_min[i])}
            {data.daily_units.temperature_2m_min}
          </p>
          <p className="text-gray-500/75">
            {Math.round(data.daily.temperature_2m_max[i])}
            {data.daily_units.temperature_2m_max}
          </p>
        </div>
      ))}
    </Card>
  );
}
