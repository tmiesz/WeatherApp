import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getWeather } from "../../api";
import Cloud from "/src/assets/cloud.svg?react";
import Pressure from "/src/assets/pressure.svg?react";
import Sunrise from "/src/assets/sunrise.svg?react";
import Sunset from "/src/assets/sunset.svg?react";
import Uv from "/src/assets/uv.svg?react";
import Wind from "/src/assets/wind.svg?react";
import Direction from "/src/assets/direction.svg?react";
import type { Coords } from "../../types";

type Props = {
  coords: Coords;
};

export default function AdditionalInfo({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
  });

  return (
    <Card
      title="Additional Weather Info"
      childrenClassName="flex flex-col gap-8"
    >
      {rows.map(({ label, value, Icon }) => (
        <div className="flex justify-between" key={value}>
          <div className="flex gap-4">
            <span className="text-gray-500">{label}</span>
            <Icon className="size-8 invert" />
          </div>
          <span>
            <FormatComponent value={value} number={data.daily[value][0]} />
            {data.daily_units[value] !== "iso8601" &&
              data.daily_units[value] !== "°" &&
              data.daily_units[value]}
          </span>
        </div>
      ))}
    </Card>
  );
}

function FormatComponent({
  value,
  number,
}: {
  value: string;
  number: string | number;
}) {
  if (value === "sunrise" || value === "sunset") {
    return new Date(number).toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
  }
  if (value === "wind_direction_10m_dominant") {
    return (
      <Direction
        className="size-8 invert"
        style={{ transform: `rotate(${number}deg)` }}
      />
    );
  }
  return number;
}

const rows = [
  { label: "Cloudiness", value: "cloud_cover_mean", Icon: Cloud },
  { label: "UV Index", value: "uv_index_max", Icon: Uv },
  { label: "Wind Direction", value: "wind_direction_10m_dominant", Icon: Wind },
  { label: "Pressure", value: "pressure_msl_mean", Icon: Pressure },
  { label: "Sunrise", value: "sunrise", Icon: Sunrise },
  { label: "Sunset", value: "sunset", Icon: Sunset },
] as const;
