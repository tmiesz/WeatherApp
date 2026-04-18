import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import Card from "./components/cards/Card";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 50, lon: 50 }),
  });

  return (
    <>
      <Card>{JSON.stringify(data?.current)}</Card>
      <Card>{JSON.stringify(data?.hourly)}</Card>
      <Card>{JSON.stringify(data?.daily)}</Card>
    </>
  );
}

export default App;
