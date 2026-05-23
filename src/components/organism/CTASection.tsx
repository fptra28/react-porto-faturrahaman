import CTAButton from "@/components/atoms/CTAButton";
import CTAContent from "@/components/molecules/CTAContent";

export default function CTASection() {
  return (
    <section className="px-4 py-10 md:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-red-800/40 bg-gradient-to-r from-red-900/10 to-red-700/20 p-6 md:p-10 lg:p-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <CTAContent />

            <CTAButton label="Get in Touch" />
          </div>
        </div>
      </div>
    </section>
  );
}
