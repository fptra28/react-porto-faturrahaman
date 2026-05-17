interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <div className="w-full rounded-full bg-white/20 px-3 py-1 text-center backdrop-blur-md">
      <p className="text-sm text-white">{label}</p>
    </div>
  );
}
