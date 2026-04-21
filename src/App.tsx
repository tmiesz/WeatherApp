import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import Map from "./components/Map";
import type { Coords } from "./types";
import { useState } from "react";

function App() {
  const [coords, setCoords] = useState<Coords>({ lat: 50, lon: 50 });

  return (
    <div className="flex flex-col gap-8">
      <Map coords={coords} />
      <CurrentWeather coords={coords} />
      <HourlyForecast coords={coords} />
      <DailyForecast coords={coords} />
      <AdditionalInfo coords={coords} />
    </div>
  );
}

export default App;
