// components/molecules/StatCard.tsx

import StatIcon from "../atoms/StatIcon";

type StatCardProps = {
  icon: string;
  value: string;
  label: string;
};

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden p-6 transition-all duration-300 hover:bg-red-500/5">
      <div className="absolute inset-0 w-full bg-gradient-to-br from-red-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <div className="hidden sm:block">
          <StatIcon icon={icon} />
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            {value}
          </h2>

          <p className="text-sm text-stone-400">{label}</p>
        </div>
      </div>
    </div>
  );
}
