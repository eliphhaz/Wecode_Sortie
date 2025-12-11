import { ReactNode } from 'react';
import { Check } from 'lucide-react';

interface TimelineItemProps {
  id: string;
  time: string;
  title: string;
  icon: ReactNode;
  color: string;
  children: ReactNode;
  isCompleted: boolean;
  onToggle: (id: string) => void;
}

const colorClasses = {
  blue: 'bg-blue-500 border-blue-200',
  purple: 'bg-purple-500 border-purple-200',
  orange: 'bg-orange-500 border-orange-200',
  green: 'bg-green-500 border-green-200',
  red: 'bg-red-500 border-red-200',
  yellow: 'bg-yellow-500 border-yellow-200',
  pink: 'bg-pink-500 border-pink-200',
  amber: 'bg-amber-500 border-amber-200',
  gray: 'bg-gray-500 border-gray-200',
  indigo: 'bg-indigo-500 border-indigo-200',
};

export function TimelineItem({ id, time, title, icon, color, children, isCompleted, onToggle }: TimelineItemProps) {
  const colorClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.blue;
  const [bgColor, borderColor] = colorClass.split(' ');

  return (
    <div className="relative pl-8 pb-6 last:pb-0">
      {/* Vertical line */}
      <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-gray-200" />
      
      {/* Icon circle */}
      <div className={`absolute left-0 top-0 w-8 h-8 rounded-full ${bgColor} text-white flex items-center justify-center shadow-lg`}>
        {icon}
      </div>

      {/* Content card */}
      <div 
        className={`bg-white rounded-xl shadow-md border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
          isCompleted ? 'border-green-400 bg-green-50/50' : 'border-gray-100'
        }`}
        onClick={() => onToggle(id)}
      >
        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">{time}</p>
              <h3 className={isCompleted ? 'line-through text-gray-400' : ''}>{title}</h3>
            </div>
            <button
              className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                isCompleted 
                  ? 'bg-green-500 border-green-500' 
                  : 'border-gray-300 hover:border-green-400'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                onToggle(id);
              }}
            >
              {isCompleted && <Check className="w-4 h-4 text-white" />}
            </button>
          </div>
          <div className={isCompleted ? 'opacity-50' : ''}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
