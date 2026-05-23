interface FooterTextProps {
  children: React.ReactNode;
}

export default function FooterText({ children }: FooterTextProps) {
  return <p className="text-sm leading-relaxed text-stone-400">{children}</p>;
}
