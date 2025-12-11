import { CheckCircle, AlertCircle } from 'lucide-react';

export function InfoFlyer() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <CheckCircle className="w-8 h-8" />
          <h2 className="text-white text-3xl">Infos pratiques</h2>
        </div>
        <p className="text-white/80">À ne pas oublier</p>
      </div>

      <div className="p-6 space-y-6">
        {/* À apporter */}
        <div>
          <h3 className="mb-3 text-orange-600 flex items-center gap-2">
            <span>🎒</span> À apporter
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
              <span>👙</span>
              <p className="text-sm text-gray-700">Maillot de bain</p>
            </div>
            <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
              <span>🧴</span>
              <p className="text-sm text-gray-700">Serviette & crème solaire</p>
            </div>
            <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
              <span>🎵</span>
              <p className="text-sm text-gray-700">Enceintes & jeux</p>
            </div>
            <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
              <span>💧</span>
              <p className="text-sm text-gray-700">Bouteille d'eau</p>
            </div>
          </div>
        </div>

        {/* Points importants */}
        <div>
          <h3 className="mb-3 text-pink-600 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Points importants
          </h3>
          <div className="space-y-2">
            <div className="flex items-start gap-2 p-3 bg-pink-50 rounded-lg border-l-4 border-pink-400">
              <span className="flex-shrink-0">⏰</span>
              <div>
                <p className="text-sm">Soyez à l'heure à 7h00</p>
                <p className="text-xs text-gray-500">Le car ne vous attendra pas !</p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <span className="flex-shrink-0">👥</span>
              <div>
                <p className="text-sm">Restez en groupe</p>
                <p className="text-xs text-gray-500">Surtout lors de la baignade</p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
              <span className="flex-shrink-0">🍽️</span>
              <div>
                <p className="text-sm">Nourriture & boissons gérées</p>
                <p className="text-xs text-gray-500">Le staff s'occupe de tout</p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
              <span className="flex-shrink-0">♻️</span>
              <div>
                <p className="text-sm">Laisser le lieu propre</p>
                <p className="text-xs text-gray-500">Respect de l'environnement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Photo stop */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-900">📸 Arrêt photo sur le pont de Jacqueville</p>
        </div>
      </div>
    </div>
  );
}
