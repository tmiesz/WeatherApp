import type { Dispatch, SetStateAction } from "react";
import Dropdown from "../ui/Dropdown";

const types = [
  { value: "clouds_new", label: "Clouds" },
  { value: "precipitation_new", label: "Precipitation" },
  { value: "pressure_new", label: "Pressure" },
  { value: "wind_new", label: "Wind" },
  { value: "temp_new", label: "Temperature" },
];

type Props = {
  mapType: string | null;
  setMapType: Dispatch<SetStateAction<string | null>>;
};

export default function MapTypeDropdown({
  mapType,
  setMapType: setMapType,
}: Props) {
  const selected = types.find((t) => t.value == mapType);
  return (
    <Dropdown
      buttonLabel={selected?.label ?? "None"}
      items={types.map((type) => ({
        title: type.label,
        action: () => setMapType(type.value),
      }))}
    ></Dropdown>
  );
}
