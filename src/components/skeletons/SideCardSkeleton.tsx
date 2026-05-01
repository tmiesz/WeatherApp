import Card from "../cards/Card";
import Skeleton from "../ui/Skeleton";

export default function SideCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 items-center overflow-y-auto overflow-x-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <Card
          key={i}
          childrenClassName="flex flex-col gap-3"
          className="w-full text-center from-(--card-bg-alt-from)! to-(--card-bg-alt-to)!"
        >
          <div className="flex justify-between">
            <Skeleton className="w-24 h-8" />
            <Skeleton className="w-16 h-8" />
          </div>
          <Skeleton className="w-full h-6" />
          <div className="flex justify-between">
            <Skeleton className="w-2 h-4" />
            <Skeleton className="w-6 h-4" />
          </div>
          <div className="flex justify-between">
            {Array.from({ length: 5 }).map((_, j) => (
              <Skeleton key={j} className="w-14 h-6 rounded-md" />
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
