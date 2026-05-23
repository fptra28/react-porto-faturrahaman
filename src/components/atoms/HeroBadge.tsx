interface HeroBadgeProps {
  title: string;
}

export default function HeroBadge({ title }: HeroBadgeProps) {
  return (
    <div className="bg-red-500/20 border border-red-500/40 w-fit rounded-full px-2 py-1">
      <div className="flex items-center gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
        <p className="font-medium text-red-500 text-xs lg:text-sm">{title}</p>
      </div>
    </div>
  );
}
