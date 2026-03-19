import { Trophy, Star, MapPin, ArrowRight, Users, Crown, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { VenueDetails } from './VenueDetails';
import { AnimatePresence, motion } from 'motion/react';

const clubs = [
  {
    id: 21,
    name: 'Elite Sports Club',
    sport: 'Multi-Sport',
    location: 'Bandra West, Mumbai',
    rating: 4.9,
    reviews: 340,
    price: '₹3,500',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1080',
    type: 'Indoor',
  },
  {
    id: 22,
    name: 'Champions Cricket Club',
    sport: 'Cricket',
    location: 'Koramangala, Bangalore',
    rating: 4.8,
    reviews: 280,
    price: '₹2,800',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1080',
    type: 'Outdoor',
  },
  {
    id: 23,
    name: 'Premier Tennis Club',
    sport: 'Tennis',
    location: 'South Ex, Delhi',
    rating: 4.7,
    reviews: 195,
    price: '₹2,200',
    image: 'https://images.unsplash.com/photo-1529347748334-32e95e1e2563?q=80&w=1080',
    type: 'Outdoor',
  },
  {
    id: 24,
    name: 'Victory Badminton Club',
    sport: 'Badminton',
    location: 'Whitefield, Bangalore',
    rating: 4.9,
    reviews: 412,
    price: '₹1,800',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1080',
    type: 'Indoor',
  },
];

export function ClubsSection() {
  const [selectedVenue, setSelectedVenue] = useState<any | null>(null);

  return (
    <>
      <div className="bg-gradient-to-b from-white to-gray-50 py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-lg text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                <Crown className="w-3.5 h-3.5" />
                <span>Premium Network</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase text-gray-900 tracking-tighter leading-none">
                Elite <span className="text-orange-600">Clubs</span>
              </h2>
              <p className="text-gray-500 mt-4 font-bold text-sm uppercase tracking-tight italic">
                Exclusive membership clubs with world-class facilities
              </p>
            </div>
            <button className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-[10px] font-black rounded-2xl uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl active:scale-95">
              View All Clubs
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((club, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                key={club.id}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-black/5 hover:shadow-orange-600/10 hover:-translate-y-3 transition-all duration-500 cursor-pointer border border-gray-100"
                onClick={() => setSelectedVenue(club)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/20 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <div className="px-2.5 py-1 bg-orange-600 backdrop-blur-md rounded-lg text-[8px] font-black uppercase tracking-widest text-white shadow-xl flex items-center gap-1.5">
                      <Crown className="w-2.5 h-2.5" />
                      Premium
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                      <span className="text-gray-900 font-black text-xs uppercase tracking-widest">{club.rating}</span>
                      <span className="text-gray-500 text-[8px] font-black uppercase tracking-widest">({club.reviews})</span>
                    </div>
                    <h3 className="text-gray-900 text-sm font-black uppercase tracking-tight leading-tight group-hover:text-orange-600 transition-colors">
                      {club.name}
                    </h3>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                    <span className="text-[9px] font-black uppercase tracking-widest truncate">{club.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Membership</span>
                      <span className="text-lg font-black text-gray-900 tracking-tight">
                        {club.price}
                        <span className="text-[8px] font-black uppercase text-gray-400 ml-1">/mo</span>
                      </span>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedVenue(club); }}
                      className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-orange-600 transition-all active:scale-95 shadow-lg"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedVenue && (
          <VenueDetails
            venue={selectedVenue}
            onClose={() => setSelectedVenue(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}