import Link from "next/link";

interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <h2 className="text-center text-xl lg:text-2xl font-semibold text-white">
        {title}
      </h2>

      <Link
        href={"/project"}
        className="text-red-500 hover:text-red-600 transition duration-300 text-xs lg:text-sm"
      >
        View all projects <i className="fa-solid fa-arrow-right text-xs"></i>
      </Link>
    </div>
  );
}
