import Image from "next/image";

interface BlogCoverImageProps {
  src: string;
  alt: string;
}

export default function BlogCoverImage({ src, alt }: BlogCoverImageProps) {
  return (
    <div className="mb-8 overflow-hidden rounded-2xl border border-red-800/30 bg-zinc-900/40">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        unoptimized
        className="h-auto w-full object-cover"
      />
    </div>
  );
}
