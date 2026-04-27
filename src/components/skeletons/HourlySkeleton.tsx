import Card from "../cards/Card";
import Skeleton from "../ui/Skeleton";

export default function HourlySkeleton() {
  return (
    <Card
      title="Hourly Forecast (48 Hours)"
      childrenClassName="flex gap-6 overflow-x-scroll"
    >
      {Array.from({ length: 48 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-2 items-center p-2">
          <Skeleton className="w-15 size-8" />
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="w-8 h-6" />
        </div>
      ))}
    </Card>
  );
}
