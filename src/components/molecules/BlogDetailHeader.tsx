import BlogBreadcrumb from "@/components/atoms/BlogBreadcrumb";
import BlogMeta from "@/components/atoms/BlogMeta";

interface BlogDetailHeaderProps {
  title: string;
  date: string;
  time: string;
  category: string;
}

export default function BlogDetailHeader({
  title,
  date,
  time,
  category,
}: BlogDetailHeaderProps) {
  return (
    <>
      {/* <BlogBreadcrumb title={title} /> */}

      <div className="mb-10 flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
          {title}
        </h1>

        <BlogMeta date={date} time={time} category={category} />

        <div className="h-1.5 w-36 rounded-full bg-red-500/50" />
      </div>
    </>
  );
}
