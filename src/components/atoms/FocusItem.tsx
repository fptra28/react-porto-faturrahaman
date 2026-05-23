interface FocusItemProps {
  label: string;
}

export default function FocusItem({ label }: FocusItemProps) {
  return (
    <li className="flex items-center gap-3 text-sm text-stone-300">
      <span className="h-2 w-2 rounded-full bg-red-500" />

      <span>{label}</span>
    </li>
  );
}
