interface CTAHeadingProps {
  title: string;
  description: string;
}

export default function CTAHeading({ title, description }: CTAHeadingProps) {
  return (
    <div className="space-y-3">
      <h2 className="max-w-2xl text-2xl font-semibold leading-tight text-white md:text-3xl lg:text-4xl">
        {title}
      </h2>

      <p className="max-w-2xl text-sm leading-relaxed text-stone-400 md:text-base lg:text-lg">
        {description}
      </p>
    </div>
  );
}
