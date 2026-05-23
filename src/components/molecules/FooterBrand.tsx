import Logo from "@/components/atoms/Logo";
import FooterText from "@/components/atoms/FooterText";

export default function FooterBrand() {
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <Logo />

        <FooterText>
          Building digital experiences with clean code and great design.
        </FooterText>
      </div>

      <FooterText>
        &copy; {new Date().getFullYear()} All rights reserved. Made with ❤️ by{" "}
        <strong>Senfuri0n</strong>
      </FooterText>
    </div>
  );
}
