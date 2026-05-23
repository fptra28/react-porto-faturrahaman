import AboutLink from "@/components/atoms/AboutLink";
import AboutSectionTitle from "@/components/atoms/AboutSectionTitle";

export default function AboutContent() {
  return (
    <div className="flex h-full flex-col justify-between gap-6">
      <AboutSectionTitle
        title="About Me"
        description="I'm a passionate Fullstack Developer and UI/UX Designer who loves building modern, user-friendly web applications. I enjoy solving complex problems and turning ideas into real products."
      />

      <AboutLink href="/project" label="More about me >" />
    </div>
  );
}
