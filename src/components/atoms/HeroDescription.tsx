interface HeroDescriptionProps {
  description: string;
}

export default function HeroDescription({ description }: HeroDescriptionProps) {
  return (
    <div className="space-y-4">
      <p className="text-white/60">{description}</p>
    </div>
  );
}
