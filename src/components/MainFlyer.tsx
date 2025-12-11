import { MapPin, Calendar, Users } from 'lucide-react';

export function MainFlyer() {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-8 h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1678393834156-f8aed69b05f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHBhbG0lMjB0cmVlcyUyMHRyb3BpY2FsfGVufDF8fHx8MTc2NTQ3NDI4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/80 via-pink-600/70 to-purple-800/90" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8 md:p-12 text-white">
        <div>
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <p className="text-sm">Programme Mis à Jour</p>
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-4">
            🌴 SORTIE GROUPE
          </h1>
          <p className="text-3xl md:text-4xl text-white/95 mb-8">JACQUEVILLE</p>
        </div>

        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-8 h-8" />
              <div>
                <p className="text-sm opacity-80">Point de rendez-vous</p>
                <p className="text-2xl">Yopougon</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8" />
              <div>
                <p className="text-sm opacity-80">Heure de départ</p>
                <p className="text-2xl">7h00 précises</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8" />
              <div>
                <p className="text-sm opacity-80">Destination</p>
                <p className="text-2xl">Baie des Romances</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-400 text-gray-900 rounded-2xl p-4 text-center">
            <p className="text-sm">🚌 Départ en car • 🏖️ Journée à la plage • 🎉 Activités + Repas inclus</p>
          </div>
        </div>
      </div>
    </div>
  );
}
