interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <div className={className}>
      <h2 className="mb-3 text-center text-3xl font-bold text-white">
        {title}
      </h2>

      <div className="mx-auto h-2 w-40 rounded-full bg-white/20" />
    </div>
  );
}
