interface FooterTitleProps {
  title: string;
}

export default function FooterTitle({ title }: FooterTitleProps) {
  return <h6 className="text-base font-semibold text-white">{title}</h6>;
}
