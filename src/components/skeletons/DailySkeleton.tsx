import Card from "../cards/Card";
import Skeleton from "../ui/Skeleton";

export default function DailySkeleton() {
  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-8">
      <div className="flex flex-col gap-3.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex justify-between">
            <Skeleton className="w-9 h-5" />
            <Skeleton className="size-5 rounded-full" />
            <Skeleton className="size-5" />
            <Skeleton className="size-5" />
            <Skeleton className="size-5" />
          </div>
        ))}
      </div>
    </Card>
  );
}
