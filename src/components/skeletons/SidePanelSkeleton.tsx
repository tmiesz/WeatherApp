import SideCardSkeleton from "./SideCardSkeleton";

export default function SidePanelSkeleton() {
  return (
    <div className="flex flex-col gap-4 items-center overflow-y-auto overflow-x-hidden">
      <h1 className="text-4xl font-semibold">Air Pollution</h1>
      <SideCardSkeleton />
    </div>
  );
}
