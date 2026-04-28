import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { getAirPollution } from "../api";
import type { Coords } from "../types";
import Card from "./cards/Card";

type Props = {
  coords: Coords;
};

export default function SidePanel(props: Props) {
  return (
    <div className="fixed top-0 right-0 h-screen w-80 shadow-md bg-zinc-900 z-1001">
      <Suspense>
        <AirPollution {...props} />
      </Suspense>
    </div>
  );
}

function AirPollution({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["pollution", coords],
    queryFn: () => getAirPollution(coords),
  });
  const pollutants = Object.entries(data.hourly).filter(
    ([key]) => key !== "time",
  );
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-5xl font-semibold">
        {data.hourly.pm2_5[0]} {data.hourly_units.pm2_5}
      </h1>

      {pollutants.map(([key, values]) => {
        const currentValue = values[0];
        const unit = data.hourly_units[key as keyof typeof data.hourly_units];

        return (
          <Card key={key}>
            <div className="flex justify-between">
              <span className="text-lg font-bold">{key}</span>
              <span className="text-lg font-semibold">
                {currentValue ?? "N/A"} {currentValue != null ? unit : ""}
              </span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
