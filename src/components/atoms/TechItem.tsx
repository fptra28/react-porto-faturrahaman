import Image from "next/image";

interface TechItemProps {
  name: string;
  icon: string;
}

export default function TechItem({ name, icon }: TechItemProps) {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-xl bg-stone-950/60 p-4 transition duration-300 hover:border-red-500/30 hover:bg-stone-900">
      <div className="relative h-12 w-12">
        <Image src={icon} alt={name} fill className="object-contain" />
      </div>

      <p className="text-center text-sm font-medium text-nowrap text-stone-300 transition group-hover:text-white">
        {name}
      </p>
    </div>
  );
}
