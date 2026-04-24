import type { Dispatch, SetStateAction } from "react";
import Dropdown from "../ui/Dropdown";

const cities = [
  "New York",
  "London",
  "Paris",
  "Tokyo",
  "Dubai",
  "Singapore",
  "Los Angeles",
  "Barcelona",
  "Rome",
  "Sydney",
  "Berlin",
  "Amsterdam",
];

type Props = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};

export default function LocationDropdown({ location, setLocation }: Props) {
  return (
    <Dropdown
      buttonLabel={location}
      items={cities.map((city) => ({
        title: city,
        action: () => setLocation(city),
      }))}
    ></Dropdown>
  );
}
