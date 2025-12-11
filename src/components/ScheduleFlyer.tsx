import { Clock } from 'lucide-react';

export function ScheduleFlyer() {
  const schedule = [
    { time: '7h00 - 7h20', activity: 'Embarquement', icon: '🚌' },
    { time: '7h20 - 8h50', activity: 'Trajet vers Jacqueville', icon: '🎵' },
    { time: '8h50 - 9h20', activity: 'Installation sur place', icon: '🏖️' },
    { time: '9h20 - 11h30', activity: 'Activités du matin', icon: '🏐' },
    { time: '11h30 - 13h00', activity: 'Déjeuner', icon: '🍽️' },
    { time: '13h00 - 15h00', activity: 'Temps libre & jeux', icon: '🎲' },
    { time: '15h00 - 16h00', activity: 'Grande activité', icon: '🏆' },
    { time: '16h00 - 16h45', activity: 'Goûter & pause', icon: '☕' },
    { time: '16h45 - 17h00', activity: 'Rangement', icon: '🎒' },
    { time: '17h00 - 18h00', activity: 'Retour à Yopougon', icon: '🏁' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Clock className="w-8 h-8" />
          <h2 className="text-white text-3xl">Planning de la journée</h2>
        </div>
        <p className="text-white/80">De 7h00 à 18h00</p>
      </div>

      <div className="p-6">
        <div className="space-y-3">
          {schedule.map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-purple-50 transition-colors border border-gray-100"
            >
              <span className="text-3xl">{item.icon}</span>
              <div className="flex-1">
                <p className="text-gray-600 text-sm">{item.time}</p>
                <p className="text-gray-900">{item.activity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
