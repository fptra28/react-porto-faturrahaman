import HeroContent from "../molecules/HeroContent";
import HeroImage from "../atoms/HeroImage";
import StatsSection from "./StatsSection";
import { url } from "inspector";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden px-4 pt-20 md:px-6 lg:px-12 bg-black bg-cover bg-no-repeat bg-bottom"
      style={{
        backgroundImage: "url('/assets/bg-cover.png')",
      }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,30,30,0.18),transparent_36%),radial-gradient(circle_at_78%_40%,rgba(220,20,20,0.22),transparent_42%),linear-gradient(135deg,#020202_0%,#040404_48%,#0a0202_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,35,35,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,35,35,0.08)_1px,transparent_1px)] bg-[size:60px_60px] opacity-35" />
        <div className="absolute right-[-12%] top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-red-500/35" />
        <div className="absolute right-[6%] top-1/2 h-[27rem] w-[27rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,30,30,0.82)_0%,rgba(180,0,0,0.65)_34%,rgba(50,0,0,0)_70%)] blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto py-7 lg:pt-0">
        <div className="mx-auto flex flex-col items-center justify-between lg:gap-16 lg:flex-row">
          <div className="">
            <HeroContent />
          </div>

          <div className="">
            <HeroImage />
          </div>
        </div>

        {/* <StatsSection /> */}
      </div>
    </section>
  );
}
