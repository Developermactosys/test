import { MapPin, Star, ArrowRight, Layers, Filter, SlidersHorizontal } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { VenueDetails } from './VenueDetails';
import { AnimatePresence, motion } from 'motion/react';

const turfs = [
  {
    id: 41,
    name: 'Astro Turf Arena',
    sport: 'Football',
    location: 'Bandra East, Mumbai',
    rating: 4.9,
    reviews: 580,
    price: '₹2,800',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1080',
    type: 'Outdoor',
  },
  {
    id: 42,
    name: 'Green Field Turf',
    sport: 'Cricket',
    location: 'Koramangala, Bangalore',
    rating: 4.8,
    reviews: 450,
    price: '₹2,200',
    image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=1080',
    type: 'Outdoor',
  },
  {
    id: 43,
    name: 'Victory Turf Sports',
    sport: 'Football',
    location: 'Cyber City, Gurgaon',
    rating: 4.7,
    reviews: 320,
    price: '₹3,000',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1080',
    type: 'Outdoor',
  },
  {
    id: 44,
    name: 'Elite Cricket Turf',
    sport: 'Cricket',
    location: 'Whitefield, Bangalore',
    rating: 4.9,
    reviews: 690,
    price: '₹2,500',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1080',
    type: 'Outdoor',
  },
  {
    id: 45,
    name: 'Champions Football Turf',
    sport: 'Football',
    location: 'Andheri West, Mumbai',
    rating: 4.8,
    reviews: 510,
    price: '₹2,600',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1080',
    type: 'Outdoor',
  },
  {
    id: 46,
    name: 'Prime Cricket Ground',
    sport: 'Cricket',
    location: 'South Ex, Delhi',
    rating: 4.7,
    reviews: 385,
    price: '₹2,400',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1080',
    type: 'Outdoor',
  },
  {
    id: 47,
    name: 'Pro Football Arena',
    sport: 'Football',
    location: 'HSR Layout, Bangalore',
    rating: 4.9,
    reviews: 720,
    price: '₹3,200',
    image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1080',
    type: 'Outdoor',
  },
  {
    id: 48,
    name: 'Mega Sports Turf',
    sport: 'Multi-Sport',
    location: 'Powai, Mumbai',
    rating: 4.8,
    reviews: 615,
    price: '₹2,900',
    image: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=1080',
    type: 'Outdoor',
  },
];

export function AllTurfSection() {
  const [selectedVenue, setSelectedVenue] = useState<any | null>(null);
  const [filter, setFilter] = useState<'all' | 'cricket' | 'football'>('all');

  const filteredTurfs = turfs.filter(turf => 
    filter === 'all' || turf.sport.toLowerCase().includes(filter)
  );

  return (
    <>
      <div className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-lg text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                <Layers className="w-3.5 h-3.5" />
                <span>Premium Surfaces</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase text-gray-900 tracking-tighter leading-none">
                All <span className="text-orange-600">Turfs</span>
              </h2>
              <p className="text-gray-500 mt-4 font-bold text-sm uppercase tracking-tight italic">
                Professional-grade artificial turf grounds
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex gap-2 bg-white p-1.5 rounded-2xl border border-gray-200 shadow-lg">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    filter === 'all'
                      ? 'bg-orange-600 text-white shadow-xl shadow-orange-600/20'
                      : 'text-gray-400 hover:text-gray-900'
                  }`}
                >
                  All Turfs
                </button>
                <button
                  onClick={() => setFilter('cricket')}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    filter === 'cricket'
                      ? 'bg-orange-600 text-white shadow-xl shadow-orange-600/20'
                      : 'text-gray-400 hover:text-gray-900'
                  }`}
                >
                  Cricket
                </button>
                <button
                  onClick={() => setFilter('football')}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    filter === 'football'
                      ? 'bg-orange-600 text-white shadow-xl shadow-orange-600/20'
                      : 'text-gray-400 hover:text-gray-900'
                  }`}
                >
                  Football
                </button>
              </div>
              
              <button className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-[10px] font-black rounded-2xl uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl active:scale-95">
                <SlidersHorizontal className="w-4 h-4" />
                Advanced Filter
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTurfs.map((turf, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                key={turf.id}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-black/5 hover:shadow-orange-600/10 hover:-translate-y-3 transition-all duration-500 cursor-pointer border border-gray-100"
                onClick={() => setSelectedVenue(turf)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={turf.image}
                    alt={turf.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/20 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <div className="px-2.5 py-1 bg-orange-600 backdrop-blur-md rounded-lg text-[8px] font-black uppercase tracking-widest text-white shadow-xl">
                      {turf.sport}
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
                      <span className="text-gray-900 font-black text-xs uppercase tracking-widest">{turf.rating}</span>
                      <span className="text-gray-500 text-[8px] font-black uppercase tracking-widest">({turf.reviews})</span>
                    </div>
                    <h3 className="text-gray-900 text-sm font-black uppercase tracking-tight leading-tight group-hover:text-orange-600 transition-colors">
                      {turf.name}
                    </h3>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-orange-600" />
                    <span className="text-[9px] font-black uppercase tracking-widest truncate">{turf.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Per Hour</span>
                      <span className="text-lg font-black text-gray-900 tracking-tight">
                        {turf.price}
                      </span>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedVenue(turf); }}
                      className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-orange-600 transition-all active:scale-95 shadow-lg"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTurfs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-sm font-black uppercase tracking-widest">
                No turfs found for this filter
              </p>
            </div>
          )}
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