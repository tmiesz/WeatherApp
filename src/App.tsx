import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";

function App() {
  return (
    <>
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
    </>
  );
}

export default App;
