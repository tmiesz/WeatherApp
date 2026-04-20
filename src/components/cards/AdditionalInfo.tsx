import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getWeather } from "../../api";

export default function AdditionalInfo() {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 50, lon: 50 }),
  });

  return (
    <Card
      title="Additional Weather Info"
      childrenClassName="flex flex-col gap-8"
    >
      {rows.map(({ label, value }) => (
        <div className="flex justify-between" key={value}>
          <span className="text-gray-500">{label}</span>
          <span>
            <FormatComponent value={value} number={data.daily[value][0]} />
            {data.daily_units[value] !== "iso8601" && data.daily_units[value]}
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
  return number;
}

const rows = [
  { label: "Cloudiness", value: "cloud_cover_mean" },
  { label: "UV Index", value: "uv_index_max" },
  { label: "Wind Direction", value: "wind_direction_10m_dominant" },
  { label: "Pressure", value: "pressure_msl_mean" },
  { label: "Sunrise", value: "sunrise" },
  { label: "Sunset", value: "sunset" },
] as const;
