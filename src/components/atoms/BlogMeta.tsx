interface BlogMetaProps {
  date: string;
  time: string;
  category: string;
}

export default function BlogMeta({ date, time, category }: BlogMetaProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-stone-400">
      <span>{date}</span>

      <span>|</span>

      <span>{time}</span>

      <span>-</span>

      <span className="rounded-md border border-stone-500/30 bg-stone-500/10 px-2 py-0.5 text-xs text-stone-300">
        {category}
      </span>
    </div>
  );
}
