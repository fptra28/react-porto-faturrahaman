interface HeroTitleProps {
  title: string;
}

export default function HeroTitle({ title }: HeroTitleProps) {
  return (
    <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-gray-100 md:text-6xl">
      {title}
    </h1>
  );
}
