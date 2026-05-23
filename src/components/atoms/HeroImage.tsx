import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center lg:pr-6">
      <div className="absolute inset-0 rounded-full bg-red-500/10 blur-3xl" />

      <Image
        src="/assets/Untitled - May 23, 2026 at 15.07.52.png"
        alt="Profile Picture"
        width={500}
        height={500}
        priority
        className="relative z-10 object-contain"
      />
    </div>
  );
}
