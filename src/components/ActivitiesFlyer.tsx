import { Trophy } from 'lucide-react';

export function ActivitiesFlyer() {
  const activities = [
    { icon: '🏐', title: 'Beach Volley', color: 'from-orange-400 to-red-500' },
    { icon: '⚽', title: 'Foot sur sable', color: 'from-green-400 to-emerald-500' },
    { icon: '🏊', title: 'Baignade groupe', color: 'from-cyan-400 to-blue-500' },
    { icon: '📸', title: 'Photos & TikTok', color: 'from-pink-400 to-rose-500' },
    { icon: '🎶', title: 'Blind test musical', color: 'from-purple-400 to-indigo-500' },
    { icon: '🎲', title: 'Jeux de société', color: 'from-yellow-400 to-orange-500' },
    { icon: '🎤', title: 'Karaoké plage', color: 'from-red-400 to-pink-500' },
    { icon: '💃', title: 'Concours de danse', color: 'from-fuchsia-400 to-purple-500' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-8 h-8" />
          <h2 className="text-white text-3xl">Activités & Animations</h2>
        </div>
        <p className="text-white/80">Une journée pleine d'énergie et de fun</p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
              <div className="relative h-full flex flex-col items-center justify-center text-white p-4">
                <span className="text-5xl mb-3">{activity.icon}</span>
                <p className="text-center text-sm">{activity.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
