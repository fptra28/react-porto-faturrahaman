interface CTAButtonProps {
  label: string;
}

export default function CTAButton({ label }: CTAButtonProps) {
  return (
    <button className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-t from-red-800 to-red-600 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:from-red-700 hover:to-red-500 sm:w-fit">
      {label}

      <i className="fa-solid fa-arrow-right ml-3 text-xs"></i>
    </button>
  );
}
