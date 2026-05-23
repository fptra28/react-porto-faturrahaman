import TechStackTitle from "@/components/atoms/TechStackTitle";
import TechCategoryCard from "@/components/molecules/TechCategoryCard";

const techStacks = [
  {
    title: "Frontend",
    technologies: [
      {
        name: "React",
        icon: "/icons/react.svg",
      },
      {
        name: "Next.js",
        icon: "/icons/nextjs.svg",
      },
      {
        name: "Tailwind",
        icon: "/icons/tailwind.svg",
      },
      {
        name: "TypeScript",
        icon: "/icons/typescript.svg",
      },
    ],
  },
  {
    title: "Backend",
    technologies: [
      {
        name: "Laravel",
        icon: "/icons/laravel.svg",
      },
      {
        name: "PHP",
        icon: "/icons/php.svg",
      },
      {
        name: "Node.js",
        icon: "/icons/nodejs.svg",
      },
      {
        name: "MySQL",
        icon: "/icons/mysql.svg",
      },
    ],
  },
  {
    title: "UI/UX Design",
    technologies: [
      {
        name: "Figma",
        icon: "/icons/figma.svg",
      },
      {
        name: "Framer",
        icon: "/icons/framer.svg",
      },
    ],
  },
  {
    title: "Tools",
    technologies: [
      {
        name: "Git",
        icon: "/icons/git.svg",
      },
      {
        name: "GitHub",
        icon: "/icons/github.svg",
      },
      {
        name: "Postman",
        icon: "/icons/postman.svg",
      },
      {
        name: "VS Code",
        icon: "/icons/vscode.svg",
      },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section className="px-4 py-7 md:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-8">
        <TechStackTitle
          title="Tech Stack"
          description="Technologies and tools I use to bring ideas to life."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {techStacks.map((stack) => (
            <TechCategoryCard
              key={stack.title}
              title={stack.title}
              technologies={stack.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
