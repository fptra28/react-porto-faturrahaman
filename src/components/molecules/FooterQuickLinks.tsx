import FooterLink from "@/components/atoms/FooterLink";
import FooterTitle from "@/components/atoms/FooterTitle";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function FooterQuickLinks() {
  return (
    <div className="space-y-4">
      <FooterTitle title="Quick Links" />

      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <FooterLink key={link.label} href={link.href} label={link.label} />
        ))}
      </div>
    </div>
  );
}
