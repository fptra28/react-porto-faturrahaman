interface TechStackTitleProps {
  title: string;
  description: string;
}

export default function TechStackTitle({
  title,
  description,
}: TechStackTitleProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold tracking-tight text-white lg:text-2xl">
        {title}
      </h2>

      <p className="max-w-2xl text-sm leading-relaxed text-stone-400 md:text-base">
        {description}
      </p>
    </div>
  );
}
