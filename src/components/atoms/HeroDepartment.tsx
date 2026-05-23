interface HeroDepartmentProps {
  department: string;
}

export default function HeroDepartment({ department }: HeroDepartmentProps) {
  return (
    <div className="space-y-4">
      <p className="text-lg text-white md:text-xl">{department}</p>
    </div>
  );
}
