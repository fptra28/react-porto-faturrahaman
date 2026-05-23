import Image from "next/image";
import FocusItem from "@/components/atoms/FocusItem";

const focuses = [
  "Building scalable web applications",
  "Learning AI integration",
  "Exploring system design",
  "Improving UI/UX skills",
];

export default function FocusCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
      {/* Background */}
      <Image
        src="/assets/32907675_217917034057.jpg"
        alt="Background"
        fill
        sizes="(min-width: 768px) 66vw, 100vw"
        className="object-cover opacity-60"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 p-6 lg:p-10">
        <h4 className="text-xl font-semibold text-white">
          Currently Focused On
        </h4>

        <ul className="mt-7 space-y-5">
          {focuses.map((focus) => (
            <FocusItem key={focus} label={focus} />
          ))}
        </ul>
      </div>
    </div>
  );
}
