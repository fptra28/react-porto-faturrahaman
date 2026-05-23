interface ProjectHeroTextProps {
  children: React.ReactNode;
}

export default function ProjectHeroText({ children }: ProjectHeroTextProps) {
  return (
    <p className="text-base mt-2 leading-relaxed text-stone-400 md:text-lg lg:text-xl">
      {children}
    </p>
  );
}
