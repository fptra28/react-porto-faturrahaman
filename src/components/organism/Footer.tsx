import FooterBrand from "@/components/molecules/FooterBrand";
import FooterQuickLinks from "@/components/molecules/FooterQuickLinks";
import FooterContact from "@/components/molecules/FooterContact";

export default function Footer() {
  return (
    <footer className="border-t border-red-500/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <FooterBrand />

          <FooterQuickLinks />

          <FooterContact />
        </div>
      </div>
    </footer>
  );
}
