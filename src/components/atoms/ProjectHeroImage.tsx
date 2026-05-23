import Image from "next/image";

interface ProjectHeroImageProps {
  src: string;
  alt: string;
}

export default function ProjectHeroImage({ src, alt }: ProjectHeroImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1000}
      height={500}
      priority
      className="h-auto w-full max-w-md object-contain md:max-w-lg lg:max-w-6xl"
    />
  );
}
