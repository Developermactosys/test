import { Trophy, Calendar, MapPin, Users, ArrowRight, Timer } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const tournaments = [
  {
    id: 1,
    title: 'Mumbai Cricket Premier League 2026',
    sport: 'Cricket',
    date: 'Feb 15 - Feb 28',
    venue: 'Wankhede Sports Club',
    prize: '₹2,50,000',
    slots: '4/16 Teams Left',
    image: 'https://images.unsplash.com/photo-1625401586082-9a9b17bc4ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdG91cm5hbWVudCUyMG1hdGNoJTIwc3RhZGl1bXxlbnwxfHx8fDE3NzAwMjc3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Registration Open',
  },
  {
    id: 2,
    title: 'Elite Futsal Championship',
    sport: 'Football',
    date: 'Mar 05 - Mar 10',
    venue: 'Arena 51, Downtown',
    prize: '₹1,00,000',
    slots: 'Sold Out',
    image: 'https://images.unsplash.com/photo-1762792760947-0f73f249c37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRvdXJuYW1lbnQlMjBjcm93ZCUyMGNoZWVyaW5nfGVufDF8fHx8MTc3MDAyNzcwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Full House',
  },
  {
    id: 3,
    title: 'National Badminton Open',
    sport: 'Badminton',
    date: 'Mar 12 - Mar 15',
    venue: 'Smash Academy Hub',
    prize: '₹50,000',
    slots: '8 Spots Left',
    image: 'https://images.unsplash.com/photo-1716041040048-228dbae7b6ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRtaW50b24lMjBjaGFtcGlvbnNoaXAlMjB0cm9waHklMjBjb3VydHxlbnwxfHx8fDE3NzAwMjc3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'Register Now',
  }
];

export function TournamentsSection() {
  return (
    <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/5 blur-[120px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/20 border border-orange-500/30 rounded-full text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <Trophy className="w-3 h-3" />
              <span>Compete with the best</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Major <span className="text-orange-500">Tournaments</span></h2>
            <p className="text-gray-400 max-w-xl font-medium">Join professional and amateur tournaments across India. Show your skills and win exciting prizes.</p>
          </div>
          
          <button className="group flex items-center gap-3 px-8 py-4 bg-white text-gray-950 font-black rounded-[2rem] hover:bg-orange-600 hover:text-white transition-all shadow-xl active:scale-95 text-sm uppercase tracking-wider">
            View All Tournaments
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((t) => (
            <div key={t.id} className="group relative flex flex-col bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/10 transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden">
                <ImageWithFallback 
                  src={t.image} 
                  alt={t.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-orange-600 text-white text-[10px] font-black rounded-xl uppercase tracking-widest shadow-lg">
                  {t.sport}
                </div>
                <div className={`absolute top-6 right-6 px-4 py-1.5 backdrop-blur-md text-white text-[10px] font-black rounded-xl uppercase tracking-widest border border-white/20 ${t.status === 'Sold Out' ? 'bg-red-500/50' : 'bg-green-500/50'}`}>
                  {t.status}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-black mb-6 group-hover:text-orange-500 transition-colors leading-tight">{t.title}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-bold">{t.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-bold truncate">{t.venue}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Trophy className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-bold">Prize Pool: <span className="text-white">{t.prize}</span></span>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-black uppercase text-gray-400 tracking-widest">{t.slots}</span>
                  </div>
                  <button className="px-6 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-[10px] font-black rounded-xl uppercase tracking-[0.2em] transition-all shadow-lg shadow-orange-600/20">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
