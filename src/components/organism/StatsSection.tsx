// components/organisms/StatsSection.tsx

import StatCard from "../molecules/StatCard";
import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="overflow-hidden rounded-2xl border border-red-950/50 bg-gradient-to-br from-black to-red-950/20 shadow-[0_0_40px_rgba(239,68,68,0.06)]">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={item.id}
            className={`
          border-red-950/40
          ${index !== stats.length - 1 ? "border-r" : ""}
          ${index < 2 ? "border-b md:border-b-0" : ""}
        `}
          >
            <StatCard icon={item.icon} value={item.value} label={item.label} />
          </div>
        ))}
      </div>
    </section>
  );
}
