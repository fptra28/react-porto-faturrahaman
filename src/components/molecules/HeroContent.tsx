import HeroBadge from "../atoms/HeroBadge";
import HeroTitle from "../atoms/HeroTitle";
import HeroDescription from "../atoms/HeroDescription";

export default function HeroContent() {
  return (
    <div className="max-w-2xl space-y-3">
      <HeroBadge />

      <HeroTitle title="Muhammad Faturrahman Putra" />

      <HeroDescription description="Web Programmer & UI/UX Designer" />
    </div>
  );
}
