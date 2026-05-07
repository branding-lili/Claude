interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: { value: number; label: string };
  accent?: string;
}

export default function StatCard({ title, value, subtitle, icon, trend, accent = "rose" }: StatCardProps) {
  const accentClasses: Record<string, string> = {
    rose: "bg-rose-50 text-rose-600",
    purple: "bg-purple-50 text-purple-600",
    green: "bg-emerald-50 text-emerald-600",
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className={`p-3 rounded-xl ${accentClasses[accent] ?? accentClasses.rose}`}>
          {icon}
        </div>
        {trend && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${trend.value >= 0 ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}>
            {trend.value >= 0 ? "+" : ""}{trend.value}% {trend.label}
          </span>
        )}
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}
