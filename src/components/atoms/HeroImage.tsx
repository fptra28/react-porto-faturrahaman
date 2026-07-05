import Image from "next/image";
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiLaravel } from "react-icons/si";

const floatingIcons = [
  {
    Icon: RiReactjsLine,
    className: "left-25 top-20 animate-[hero-float_6s_ease-in-out_infinite]",
    color: "text-cyan-400",
  },
  {
    Icon: RiNextjsFill,
    className: "right-28 top-60 animate-[hero-float_7.5s_ease-in-out_infinite]",
    color: "text-white",
  },
  {
    Icon: RiTailwindCssFill,
    className:
      "left-15 bottom-60 animate-[hero-float_5.5s_ease-in-out_infinite]",
    color: "text-sky-400",
  },
  {
    Icon: SiLaravel,
    className:
      "right-20 bottom-24 animate-[hero-float_8s_ease-in-out_infinite]",
    color: "text-red-500",
  },
];
export default function HeroImage() {
  return (
    <div className="relative overflow-visible flex justify-center items-center">
      <div className="absolute inset-0 rounded-full bg-red-500/10 blur-3xl" />

      {floatingIcons.map(({ Icon, className, color }, index) => (
        <div
          key={index}
          className={`absolute z-10 ${className} animate-[hero-float_6.5s_ease-in-out_infinite] rounded-2xl overflow-hidden shadow-2xl shadow-red-500/50 border border-zinc-800 bg-zinc-900/80 p-3`}
        >
          <Icon className={`text-5xl ${color}`} />
        </div>
      ))}

      <Image
        src="/assets/pp-fix.png"
        alt="Profile Picture"
        width={1440}
        height={1440}
        priority
        className="relative w-full h-auto max-w-[480px] sm:max-w-[560px] md:max-w-[650px] lg:max-w-[750px] xl:max-w-[850px] object-contain"
      />
    </div>
  );
}
