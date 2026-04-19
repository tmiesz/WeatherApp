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

type Props = {
  code: number;
};
export default function WeatherIcon({ code }: Props) {
  return <p>{getWeatherIcon(code)}</p>;
}
