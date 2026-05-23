interface ProjectHeroTitleProps {
  children: React.ReactNode;
}

export default function ProjectHeroTitle({ children }: ProjectHeroTitleProps) {
  return (
    <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
      {children}
    </h1>
  );
}
