import SectionTitle from "../atoms/SectionTitle";
import ProjectGrid from "../molecules/ProjectGrid";

export default function ProjectsSection() {
  return (
    <section className="bg-neutral-900 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <SectionTitle title="What I've Built" />

        <ProjectGrid />

        <a
          href=""
          className="mt-6 mx-auto block text-center bg-white hover:bg-neutral-300 w-fit px-10 py-2 rounded-full text-red-500 hover:text-red-700 transition duration-300"
        >
          View More...
        </a>
      </div>
    </section>
  );
}
