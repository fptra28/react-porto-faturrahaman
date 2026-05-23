import TechItem from "@/components/atoms/TechItem";

interface Technology {
  name: string;
  icon: string;
}

interface TechCategoryCardProps {
  title: string;
  technologies: Technology[];
}

export default function TechCategoryCard({
  title,
  technologies,
}: TechCategoryCardProps) {
  return (
    <div className="rounded-2xl border border-stone-800 bg-black shadow-lg shadow-black/30">
      <div className="space-y-5 p-5">
        <h4 className="text-lg font-semibold text-white">{title}</h4>

        <div className="grid gap-3 grid-cols-4">
          {technologies.map((tech) => (
            <TechItem key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
