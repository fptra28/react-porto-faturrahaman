import HeroContent from "../molecules/HeroContent";
import HeroImage from "../atoms/HeroImage";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-16 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 lg:flex-row">
        <div className="order-2 sm:order-1">
          {/* Left Content */}
          <HeroContent />
        </div>

        <div className="order-1 sm:order-2">
          {/* Right Image */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
