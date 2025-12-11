import { Palmtree, Calendar } from 'lucide-react';

export function Header() {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Palmtree className="w-8 h-8" />
          <h1 className="text-white">Programme Sortie Groupe</h1>
          <Palmtree className="w-8 h-8" />
        </div>
        <p className="text-xl text-white/90 mb-2">Jacqueville - Baie des Romances</p>
        <div className="flex items-center justify-center gap-2 text-white/80">
          <Calendar className="w-5 h-5" />
          <span>Une journée inoubliable à la plage</span>
        </div>
      </div>
    </div>
  );
}
