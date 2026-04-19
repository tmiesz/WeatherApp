import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getWeather } from "../../api";
import { getWeatherLabel } from "../../utils/weatherCode";

export default function DailyForecast() {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 50, lon: 50 }),
  });
  return (
    <Card title="Daily Forecast">
      <div className="flex flec-col gap-4">
        {data.daily.time.map((time, i) => (
          <div key={time} className="flex justify-between">
            <p>{time}</p>
            <p>{getWeatherLabel(data.daily.weather_code[i])}</p>
            <p className="text-gray-500/75">
              {data.daily.temperature_2m_min[i]}°
            </p>
            <p className="text-gray-500/75">
              {data.daily.temperature_2m_max[i]}°
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
