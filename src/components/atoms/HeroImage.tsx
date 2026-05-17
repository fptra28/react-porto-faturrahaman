import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">
      <div className="absolute inset-0 rounded-full bg-red-500/10 blur-3xl" />

      <Image
        src="/assets/pp.png"
        alt="Profile Picture"
        width={550}
        height={550}
        priority
        className="relative z-10 object-contain"
      />
    </div>
  );
}
