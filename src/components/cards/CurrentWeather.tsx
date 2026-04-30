import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import Card from "./Card";
import WeatherIcon from "../WeatherIcon";
import type { Coords } from "../../types";

type Props = {
  coords: Coords;
};

export default function CurrentWeather({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
  });

  return (
    <Card
      title="Current Weather"
      className="md:pb-11"
      childrenClassName="flex flex-col items-center gap-6"
    >
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-6xl font-semibold text-center">
          {Math.round(data.current.temperature_2m)}
          {data.current_units.temperature_2m}
        </h2>
        <WeatherIcon
          code={data.current.weather_code}
          showDescription={true}
          className="text-5xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl text-center">Local Time:</p>
        <h3 className="text-4xl font-semibold text-center">
          {new Date(data.current.time).toLocaleTimeString(undefined, {
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          })}
        </h3>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Feels Like</p>
          <p>
            {Math.round(data.current.apparent_temperature)}
            {data.current_units.apparent_temperature}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Humidity</p>
          <p>
            {data.current.relative_humidity_2m}
            {data.current_units.relative_humidity_2m}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Wind</p>
          <p>
            {data.current.wind_speed_10m}
            {data.current_units.wind_speed_10m}
          </p>
        </div>
      </div>
    </Card>
  );
}
