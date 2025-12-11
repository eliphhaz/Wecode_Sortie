interface ActivityCardProps {
  emoji: string;
  title: string;
  subtitle?: string;
}

export function ActivityCard({ emoji, title, subtitle }: ActivityCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-3 border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all">
      <div className="flex items-start gap-2">
        <span className="text-2xl flex-shrink-0">{emoji}</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-900">{title}</p>
          {subtitle && (
            <p className="text-xs text-gray-500">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}
