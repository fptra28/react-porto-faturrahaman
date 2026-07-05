interface BlogBreadcrumbProps {
  title: string;
}

export default function BlogBreadcrumb({ title }: BlogBreadcrumbProps) {
  return (
    <div className="mb-5 flex items-center gap-1 text-xs text-stone-500">
      <span>Blog</span>
      <span>/</span>
      <span className="line-clamp-1">{title}</span>
    </div>
  );
}
