import clsx from "clsx";

function getWeatherIcon(code: number): string {
  if (code === 0) return "☀️";
  if (code === 1 || code === 2 || code === 3) return "🌤";
  if (code === 45 || code === 48) return "🌫";
  if (code === 51 || code === 53 || code === 55) return "🌦";
  if (code === 56 || code === 57) return "🧊";
  if (code === 61 || code === 63 || code === 65) return "🌧";
  if (code === 66 || code === 67) return "🌧🧊";
  if (code === 71 || code === 73 || code === 75) return "❄️";
  if (code === 77) return "🌨";
  if (code === 80 || code === 81 || code === 82) return "🌦";
  if (code === 85 || code === 86) return "🌨";
  if (code === 95) return "⛈";
  if (code === 96 || code === 99) return "⛈🧊";
  return "❓";
}

function getWeatherDescription(code: number): string {
  if (code === 0) return "Clear Sky";
  if (code === 1) return "Mainly Clear";
  if (code === 2) return "Partly Cloudy";
  if (code === 3) return "Overcast";
  if (code === 45) return "Fog";
  if (code === 48) return "Depositing Rime Fog";
  if (code === 51) return "Light Drizzle";
  if (code === 53) return "Moderate Drizzle";
  if (code === 55) return "Dense Drizzle";
  if (code === 56) return "Light Freezing Drizzle";
  if (code === 57) return "Dense Freezing Drizzle";
  if (code === 61) return "Slight Rain";
  if (code === 63) return "Moderate Rain";
  if (code === 65) return "Heavy Rain";
  if (code === 66) return "Light Freezing Rain";
  if (code === 67) return "Heavy Freezing Rain";
  if (code === 71) return "Slight Snowfall";
  if (code === 73) return "Moderate Snowfall";
  if (code === 75) return "Heavy snowfall";
  if (code === 77) return "Snow Grains";
  if (code === 80) return "Slight Rain Showers";
  if (code === 81) return "Moderate Rain Showers";
  if (code === 82) return "Violent Rain Showers";
  if (code === 85) return "Slight Snow Showers";
  if (code === 86) return "Heavy Snow Showers";
  if (code === 95) return "Thunderstorm";
  if (code === 96) return "Thunderstorm With Slight Hail";
  if (code === 99) return "Thunderstorm With Heavy Hail";
  return "Unknown";
}

type Props = {
  code: number;
  showDescription?: boolean;
  className?: string;
};
export default function WeatherIcon({
  code,
  showDescription,
  className,
}: Props) {
  return (
    <div className={clsx("flex flex-col items-center gap-2", className)}>
      <p>{getWeatherIcon(code)}</p>
      {showDescription && (
        <span className="text-[0.5em]">{getWeatherDescription(code)}</span>
      )}
    </div>
  );
}
