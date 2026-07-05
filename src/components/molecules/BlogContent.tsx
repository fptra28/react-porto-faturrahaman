interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="text-white">
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </div>
  );
}
