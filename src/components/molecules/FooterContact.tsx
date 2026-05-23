import FooterTitle from "@/components/atoms/FooterTitle";

export default function FooterContact() {
  return (
    <div className="space-y-4">
      <FooterTitle title="Let's Connect" />

      <div className="space-y-3 text-sm text-stone-400">
        <div className="flex items-center gap-3">
          <i className="fa-regular fa-envelope text-red-400"></i>

          <a
            href="mailto:faturrahman86.fr@gmail.com"
            className="transition hover:text-red-400"
          >
            faturrahman86.fr@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <i className="fa-solid fa-location-dot text-red-400"></i>

          <p>Bogor, Jawa Barat, Indonesia</p>
        </div>
      </div>
    </div>
  );
}
