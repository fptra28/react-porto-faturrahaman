import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/assets/logoSenfuri0n.png"
        alt="Logo"
        width={50}
        height={50}
        className="object-contain"
      />

      <span className="md:text-xl font-bold italic tracking-wide text-white">
        Faturrahman Ptra
      </span>
    </div>
  );
}
