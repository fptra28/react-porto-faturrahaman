interface HeroDescriptionProps {
  description: string;
}

export default function HeroDescription({ description }: HeroDescriptionProps) {
  return (
    <div className="space-y-4">
      <p className="text-lg text-white/60 md:text-xl">{description}</p>

      <div className="h-2 w-40 rounded-full bg-white/20" />
    </div>
  );
}
