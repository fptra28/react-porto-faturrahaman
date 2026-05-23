import HeroBadge from "../atoms/HeroBadge";
import HeroTitle from "../atoms/HeroTitle";
import HeroDepartment from "../atoms/HeroDepartment";
import HeroDescription from "../atoms/HeroDescription";

export default function HeroContent() {
  return (
    <div className="max-w-2xl space-y-3">
      <HeroBadge title="Hello, ✨ I'm" />

      <HeroTitle title="Muhammad" secondTitle="Faturrahman Putra" />

      <HeroDepartment department="Fullstack Programmer & UI/UX Designer" />

      <HeroDescription description="I build scalable web applications with clean code and pixel-perfect design. Focused on creating exceptional digital experiences." />

      <div className="grid grid-cols-2 gap-3 w-full sm:w-fit mt-10">
        <button className="w-full sm:w-fit bg-red-600 hover:bg-red-700 border border-red-500 px-5 py-3 rounded-lg text-white transition duration-300">
          <div className="flex items-center justify-center gap-3 text-xs md:text-sm">
            <span>View My Work</span>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </button>

        <button className="w-full sm:w-fit hover:bg-red-600/10 border border-red-500 px-5 py-3 rounded-lg text-white transition duration-300">
          <div className="flex items-center justify-center gap-3 text-xs md:text-sm">
            <span>Contact Me</span>
            <i className="fa-regular fa-paper-plane"></i>
          </div>
        </button>
      </div>
    </div>
  );
}
