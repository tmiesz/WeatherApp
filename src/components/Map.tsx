import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Coords } from "../types";

type Props = {
  coords: Coords;
};

export default function Map({ coords }: Props) {
  const { lat, lon } = coords;
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={5}
      style={{ width: "1000px", height: "500px" }}
    >
      <MapClick />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lon]} />
    </MapContainer>
  );
}

function MapClick() {
  const map = useMap();

  map.on("click", (e) => {
    const { lat, lng } = e.latlng;
    map.panTo([lat, lng]);
  });

  return null;
}
