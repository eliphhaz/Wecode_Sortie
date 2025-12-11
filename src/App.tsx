import { Flyer } from './components/Flyer';
import { MainFlyer } from './components/MainFlyer';
import { ScheduleFlyer } from './components/ScheduleFlyer';
import { ActivitiesFlyer } from './components/ActivitiesFlyer';
import { InfoFlyer } from './components/InfoFlyer';
import { ChevronDown } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Hero Flyer */}
        <MainFlyer />

        {/* Scroll indicator */}
        <div className="flex justify-center my-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-orange-500" />
        </div>

        {/* Grid of Flyers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ScheduleFlyer />
          <InfoFlyer />
        </div>

        <div className="mb-8">
          <ActivitiesFlyer />
        </div>

        {/* Additional Info Flyers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Flyer
            title="🎯 Grande Activité"
            subtitle="15h00 - 16h00"
            gradient="from-pink-500 to-rose-600"
            image="https://images.unsplash.com/photo-1658213282959-33e255d9cae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHZvbGxleWJhbGwlMjBzdW5zZXR8ZW58MXx8fHwxNzY1NDc0Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          >
            <div className="space-y-2">
              <p className="text-white/90">Choisissez une activité phare :</p>
              <div className="space-y-1 text-sm">
                <p>🎤 Karaoké plage</p>
                <p>🏆 Grand match final</p>
                <p>📷 Shooting photo officiel</p>
                <p>🎥 Vidéo souvenir</p>
              </div>
            </div>
          </Flyer>

          <Flyer
            title="🍽️ Déjeuner"
            subtitle="11h30 - 13h00"
            gradient="from-red-500 to-orange-600"
            image="https://images.unsplash.com/photo-1764435154725-9f966718d293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZvb2QlMjBwYXJ0eXxlbnwxfHx8fDE3NjU0NzQyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          >
            <div className="space-y-2 text-sm">
              <p>🍽️ Service assuré par l'équipe</p>
              <p>😌 Détente sous paillote</p>
              <p>💬 Discussions + photos</p>
              <div className="bg-white/20 rounded-lg p-2 mt-3">
                <p className="text-xs">👉 Pas de stress pour gérer la nourriture !</p>
              </div>
            </div>
          </Flyer>

          <Flyer
            title="🏖️ Temps Libre"
            subtitle="13h00 - 15h00"
            gradient="from-cyan-500 to-blue-600"
            image="https://images.unsplash.com/photo-1623352209559-5d56958e311b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwZ3JvdXAlMjBiZWFjaHxlbnwxfHx8fDE3NjU0NzQyODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          >
            <div className="space-y-2 text-sm">
              <p>🎲 Jeux de société</p>
              <p>😌 Chill & baignade</p>
              <p>🏃‍♂️ Défis fun : course en sac, relais</p>
              <p>📱 Challenges TikTok</p>
              <p>💃 Concours de danse</p>
            </div>
          </Flyer>
        </div>
      </div>
    </div>
  );
}
