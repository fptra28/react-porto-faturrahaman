interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <div className="w-fit rounded bg-stone-700/20 px-2 py-1 text-center backdrop-blur-md">
      <p className="text-xs text-white">{label}</p>
    </div>
  );
}
