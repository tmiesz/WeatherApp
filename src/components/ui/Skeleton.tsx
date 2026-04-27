type Props = {
  className: string | null;
};

export default function Skeleton({ className }: Props) {
  return (
    <div className={`animate-pulse bg-gray-300/20 rounded ${className}`}></div>
  );
}
