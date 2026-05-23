interface AboutSectionTitleProps {
  title: string;
  description: string;
}

export default function AboutSectionTitle({
  title,
  description,
}: AboutSectionTitleProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold tracking-tight text-white lg:text-2xl">
        {title}
      </h2>

      <p className="mt-3 leading-relaxed text-stone-400 md:text-lg">
        {description}
      </p>
    </div>
  );
}
