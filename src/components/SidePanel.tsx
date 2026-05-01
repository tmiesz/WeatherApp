import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense, type Dispatch, type SetStateAction } from "react";
import { getAirPollution } from "../api";
import type { Coords } from "../types";
import Card from "./cards/Card";
import Slider from "./ui/Slider";
import clsx from "clsx";
import Chevron from "/src/assets/chevron.svg?react";
import SidePanelSkeleton from "./skeletons/SidePanelSkeleton";

type Props = {
  coords: Coords;
  isSidePanelOpen: boolean;
  setIsSidePanelOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SidePanel(props: Props) {
  const { isSidePanelOpen, setIsSidePanelOpen } = props;
  return (
    <div
      className={clsx(
        "fixed top-0 right-0 h-screen w-(--sidebar-width) shadow-md bg-(--code-bg) z-1001 py-8 px-4 flex flex-col transition-transform duration-300 lg:translate-x-0!",
        isSidePanelOpen ? "translate-x-0" : "translate-x-full",
      )}
    >
      <button onClick={() => setIsSidePanelOpen(false)}>
        <Chevron className="size-8 lg:hidden" />
      </button>
      <Suspense fallback={<SidePanelSkeleton />}>
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
  ) as [string, (number | null)[]][];
  return (
    <div className="flex flex-col gap-4 items-center overflow-y-auto overflow-x-hidden">
      <h1 className="text-4xl font-semibold">Air Pollution</h1>

      {pollutants.map(([key, values]) => {
        const currentValue = values[0];
        const unit = data.hourly_units[key as keyof typeof data.hourly_units];
        return (
          <Card
            key={key}
            childrenClassName="flex flex-col gap-3"
            className="w-full text-center hover:scale-105 transition-transform duration-300 from-(--code-bg)! to-(--bg)!"
          >
            <div className="flex justify-between">
              <span className="text-lg capitalize">
                {key.replace("2_5", "2.5").replace("_", " ")}
              </span>
              <span className="text-lg font-semibold">
                {currentValue ?? "N/A"} {currentValue != null ? unit : ""}
              </span>
            </div>
            {currentValue != null &&
              (() => {
                const qualityIndex = getQualityIndex(
                  currentValue,
                  POLLUTANT_MAX[key],
                );
                return (
                  <>
                    <Slider
                      className="w-full accent-zinc-200"
                      min={0}
                      max={POLLUTANT_MAX[key]}
                      value={currentValue}
                    />
                    <div className="flex justify-between text-xs">
                      <p>0</p>
                      <p>{POLLUTANT_MAX[key]}</p>
                    </div>
                    <div className="flex justify-between">
                      {QUALITY_LABELS.map((label, index) => (
                        <span
                          key={label}
                          className={clsx(
                            "px-1 py-1 rounded-md text-xs font-medium whitespace-nowrap",
                            index === qualityIndex
                              ? "bg-(--accent) text-white"
                              : "bg-(--border) text-(--text)",
                          )}
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </>
                );
              })()}
          </Card>
        );
      })}
    </div>
  );
}
const POLLUTANT_MAX: Record<string, number> = {
  pm2_5: 75,
  pm10: 150,
  carbon_monoxide: 1000,
  nitrogen_dioxide: 200,
  nitrogen_monoxide: 200,
  sulphur_dioxide: 100,
  ozone: 180,
  ammonia: 50,
};
const QUALITY_LABELS = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];

function getQualityIndex(value: number, max: number) {
  const ratio = value / max;
  return Math.min(
    Math.floor(ratio * QUALITY_LABELS.length),
    QUALITY_LABELS.length - 1,
  );
}
