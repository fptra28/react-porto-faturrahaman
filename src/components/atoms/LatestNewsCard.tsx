import Link from "next/link";

interface LatestNewsCardProps {
  category: string;
  title: string;
  date: string;
  href: string;
}

export default function LatestNewsCard({
  category,
  title,
  date,
  href,
}: LatestNewsCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-xl border border-red-800/30 p-4 transition duration-300 hover:border-red-500/30 hover:bg-red-500/5"
    >
      <div className="w-fit rounded-lg border border-red-500/20 bg-red-500/10 px-2.5 py-1">
        <p className="text-xs font-semibold text-red-500">{category}</p>
      </div>

      <h6 className="line-clamp-2 text-sm font-bold leading-relaxed text-white transition duration-300 group-hover:text-red-400">
        {title}
      </h6>

      <p className="text-xs text-stone-500">{date}</p>
    </Link>
  );
}
