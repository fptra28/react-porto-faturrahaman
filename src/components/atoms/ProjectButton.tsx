interface ProjectButtonProps {
  href: string;
}

export default function ProjectButton({ href }: ProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="mt-3 block w-full rounded-full bg-white/70 px-4 py-2 text-red-900 transition duration-300 hover:bg-white"
    >
      <div className="flex items-center justify-between">
        <span className="font-bold">Link</span>

        <i className="fa-solid fa-link" />
      </div>
    </a>
  );
}
