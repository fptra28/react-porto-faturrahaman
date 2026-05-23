interface HeroTitleProps {
  title: string;
  secondTitle: string;
}

export default function HeroTitle({ title, secondTitle }: HeroTitleProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
        {title}
      </h1>
      <h1 className="text-4xl font-bold leading-tight text-red-500 md:text-6xl">
        {secondTitle}
      </h1>
    </div>
  );
}
