// components/atoms/StatIcon.tsx

type StatIconProps = {
  icon: string;
};

export default function StatIcon({ icon }: StatIconProps) {
  return (
    <div className="flex h-fit aspect-square p-2 w-fit items-center justify-center rounded-full border border-red-950/50 bg-gradient-to-br from-red-500/10 to-red-500/10 backdrop-blur-xl">
      <i className={`${icon} text-2xl text-red-500`} />
    </div>
  );
}
