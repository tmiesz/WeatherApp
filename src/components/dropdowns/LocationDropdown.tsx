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

export default function LocationDropdown() {
  return (
    <Dropdown
      buttonLabel="Choose a location"
      items={cities.map((city) => ({
        title: city,
        action: () => console.log({ city }),
      }))}
    ></Dropdown>
  );
}
