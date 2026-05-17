interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

export default function Button({ children, href }: ButtonProps) {
  return (
    <a
      href={href}
      className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-red-700"
    >
      {children}
    </a>
  );
}
